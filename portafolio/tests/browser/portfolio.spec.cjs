const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('./');
});

test('keyboard navigation follows real anchors and skips to the main content', async ({ page }) => {
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Saltar al contenido' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
  const navigation = page.getByRole('navigation', { name: 'Navegación principal' });
  for (const target of ['inicio', 'sobre-mi', 'habilidades', 'experiencia', 'proyectos', 'contacto']) {
    const link = navigation.locator(`a[href="#${target}"]`);
    await link.focus();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(new RegExp(`#${target}$`));
    await expect(page.locator(`#${target}`)).toBeFocused();
  }
});

test('single-image dialog traps Tab and restores focus and scroll after Escape', async ({ page }) => {
  const trigger = page.getByRole('button', { name: /Ampliar imagen 1 de SPA Catálogo Scian/ });
  await trigger.click();
  const dialog = page.getByRole('dialog');
  const close = dialog.getByRole('button', { name: 'Cerrar imagen ampliada' });
  await expect(close).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(close).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  await expect(close).toBeFocused();
  await expect(page.locator('body')).toHaveCSS('overflow', 'hidden');
  await page.keyboard.press('Escape');
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden');
});

test('multi-image dialog cycles images and keeps focus inside, including close by backdrop', async ({ page }) => {
  const trigger = page.getByRole('button', { name: /Ampliar imagen 1 de Plataforma interna/ });
  await trigger.click();
  const dialog = page.getByRole('dialog');
  await page.keyboard.press('Shift+Tab');
  await expect(dialog.getByRole('button', { name: 'Imagen siguiente' })).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(dialog.getByRole('button', { name: 'Cerrar imagen ampliada' })).toBeFocused();
  await page.keyboard.press('ArrowRight');
  await expect(dialog.getByRole('status')).toHaveText('2 / 4');
  await page.keyboard.press('ArrowLeft');
  await expect(dialog.getByRole('status')).toHaveText('1 / 4');
  await page.keyboard.press('ArrowLeft');
  await expect(dialog.getByRole('status')).toHaveText('4 / 4');
  await dialog.click({ position: { x: 2, y: 2 } });
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
});

test('contact errors have labels and descriptions, and toast text keeps its explicit colors', async ({ page }) => {
  await page.getByRole('button', { name: 'Preparar correo' }).click();
  const name = page.getByLabel('Nombre', { exact: true });
  await expect(name).toBeFocused();
  await expect(name).toHaveAttribute('aria-invalid', 'true');
  await expect(name).toHaveAttribute('aria-describedby', 'contact-nombre-error');
  await expect(page.locator('#contact-nombre-error')).toHaveText('El nombre es obligatorio.');
  await expect(page.locator('[data-sileo-title]').last()).toHaveCSS('color', 'rgb(17, 24, 39)');
  await expect(page.locator('[data-sileo-description]').last()).toHaveCSS('color', 'rgb(55, 65, 81)');
});

test('responsive layout and optimized images stay within the viewport', async ({ page }, testInfo) => {
  for (const width of [375, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.locator('#contacto').scrollIntoViewIfNeeded();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  }
  for (const target of ['inicio', 'sobre-mi', 'habilidades', 'experiencia', 'proyectos', 'contacto']) {
    await page.locator(`#${target}`).scrollIntoViewIfNeeded();
  }
  const images = page.locator('img');
  for (const image of await images.all()) {
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate((img) => img.complete && img.naturalWidth > 0)).toBe(true);
    expect(await image.evaluate((img) => img.currentSrc)).toContain('.webp');
  }
  await page.screenshot({ path: testInfo.outputPath('desktop.png'), fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: testInfo.outputPath('mobile.png'), fullPage: true });
});

test('mobile menu announces its state, closes with Escape, and preserves the theme', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole('button', { name: 'Abrir menú' }).click();
  const close = page.getByRole('button', { name: 'Cerrar menú' });
  await expect(close).toHaveAttribute('aria-expanded', 'true');
  await page.getByRole('switch', { name: 'Modo oscuro' }).click();
  await expect(page.locator('html')).toHaveClass('dark');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Abrir menú' })).toBeFocused();
  await page.reload();
  await expect(page.locator('html')).toHaveClass('dark');
  await page.getByRole('button', { name: 'Abrir menú' }).click();
  await page.getByRole('navigation', { name: 'Navegación móvil' }).getByRole('link', { name: 'Contacto' }).click();
  await expect(page.getByRole('navigation', { name: 'Navegación móvil' })).toHaveCount(0);
  await expect(page.locator('#contacto')).toBeFocused();
});

test('coral buttons and accent text meet normal-text contrast in light and dark themes', async ({ page }) => {
  const ratio = (locator) => locator.evaluate((element) => {
    const style = getComputedStyle(element);
    const luminance = (color) => color.match(/[\d.]+/g).slice(0, 3).map(Number).map((v) => {
      v /= 255; return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
    }).reduce((sum, value, i) => sum + value * [0.2126, 0.7152, 0.0722][i], 0);
    let parent = element;
    let background = style.backgroundColor;
    while (background === 'rgba(0, 0, 0, 0)' && parent.parentElement) {
      parent = parent.parentElement; background = getComputedStyle(parent).backgroundColor;
    }
    const values = [luminance(style.color), luminance(background)].sort((a, b) => b - a);
    return (values[0] + 0.05) / (values[1] + 0.05);
  });
  for (const dark of [false, true]) {
    await page.evaluate((value) => document.documentElement.classList.toggle('dark', value), dark);
    const button = page.getByRole('button', { name: 'Preparar correo' });
    await button.hover();
    expect(await ratio(button)).toBeGreaterThanOrEqual(4.5);
    const heroLink = page.locator('#inicio').getByRole('link', { name: 'Ver proyectos' });
    expect(await ratio(heroLink)).toBeGreaterThanOrEqual(4.5);
    expect(await ratio(page.locator('#experiencia article').first().locator('p').first())).toBeGreaterThanOrEqual(4.5);
  }
});
