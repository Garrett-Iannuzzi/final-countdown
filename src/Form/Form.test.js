import Form from './Form.svelte';
import '@testing-library/jest-dom/';
import { render } from '@testing-library/svelte';

test('shows render Form with a btn when rendered', () => {
  const { getByText } = render(Form);
  const button = getByText('Click Me');

  expect(button).toHaveTextContent('Click Me');
});