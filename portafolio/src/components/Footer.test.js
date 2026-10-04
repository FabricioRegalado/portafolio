import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from './Footer';
import { openEmailDraft } from '../utils/contact';

jest.mock('sileo', () => ({ sileo: { warning: jest.fn(), info: jest.fn(), error: jest.fn() } }));
jest.mock('../utils/contact', () => ({ ...jest.requireActual('../utils/contact'), openEmailDraft: jest.fn() }));

beforeEach(() => jest.resetAllMocks());

async function fillContact(user) {
  await user.type(screen.getByLabelText('Nombre'), 'María Pérez');
  await user.type(screen.getByLabelText('Correo electrónico'), 'maria@example.com');
  await user.type(screen.getByLabelText('Mensaje'), 'Hola, quiero hablar de diseño & desarrollo.');
}

test('focuses the first invalid field and associates each error with its field', async () => {
  const user = userEvent.setup();
  render(<Footer />);
  await user.click(screen.getByRole('button', { name: 'Preparar correo' }));
  expect(screen.getByLabelText('Nombre')).toHaveFocus();
  expect(screen.getByLabelText('Nombre')).toHaveAccessibleDescription('El nombre es obligatorio.');
  expect(screen.getByLabelText('Correo electrónico')).toHaveAttribute('aria-invalid', 'true');
  expect(openEmailDraft).not.toHaveBeenCalled();

  await user.type(screen.getByLabelText('Correo electrónico'), 'incorrecto');
  expect(screen.getByLabelText('Correo electrónico')).toHaveAccessibleDescription(/Ingresa un correo válido/);
  await user.clear(screen.getByLabelText('Correo electrónico'));
  await user.type(screen.getByLabelText('Correo electrónico'), 'maria@example.com');
  expect(screen.getByLabelText('Correo electrónico')).toHaveAttribute('aria-invalid', 'false');
  expect(screen.getByLabelText('Correo electrónico')).not.toHaveAttribute('aria-describedby');
});

test('prepares an encoded email without claiming it was sent or clearing the fields', async () => {
  const user = userEvent.setup();
  render(<Footer />);
  await fillContact(user);
  await user.click(screen.getByRole('button', { name: 'Preparar correo' }));
  const mailto = new URL(openEmailDraft.mock.calls[0][0]);
  expect(mailto.protocol).toBe('mailto:');
  expect(mailto.searchParams.get('subject')).toBe('Nuevo mensaje de María Pérez');
  expect(mailto.searchParams.get('body')).toContain('diseño & desarrollo.');
  expect(screen.getByRole('status')).toHaveTextContent('Se solicitó abrir tu aplicación de correo');
  expect(screen.getByLabelText('Mensaje')).toHaveValue('Hola, quiero hablar de diseño & desarrollo.');
});

test('retains a copyable draft when the mail application cannot be opened', async () => {
  openEmailDraft.mockImplementation(() => { throw new Error('Mail client unavailable'); });
  const user = userEvent.setup();
  render(<Footer />);
  await fillContact(user);
  await user.click(screen.getByRole('button', { name: 'Preparar correo' }));
  expect(screen.getByRole('status')).toHaveTextContent('No fue posible abrir');
  await user.click(screen.getByRole('button', { name: 'Copiar mensaje' }));
  expect(await navigator.clipboard.readText()).toContain('maria@example.com');
  expect(screen.getByRole('status')).toHaveTextContent('Borrador copiado');
});

test('provides a manual fallback if copying is denied, and discards a stale draft after editing', async () => {
  const user = userEvent.setup();
  jest.spyOn(navigator.clipboard, 'writeText').mockRejectedValue(new Error('Denied'));
  render(<Footer />);
  await fillContact(user);
  await user.click(screen.getByRole('button', { name: 'Preparar correo' }));
  await user.click(screen.getByRole('button', { name: 'Copiar mensaje' }));
  expect(screen.getByRole('status')).toHaveTextContent('Ver borrador');
  await user.click(screen.getByText('Ver borrador'));
  expect(screen.getByLabelText('Borrador del correo').value).toContain('María Pérez');
  await user.type(screen.getByLabelText('Nombre'), ' López');
  expect(screen.queryByRole('button', { name: 'Copiar mensaje' })).not.toBeInTheDocument();
});
