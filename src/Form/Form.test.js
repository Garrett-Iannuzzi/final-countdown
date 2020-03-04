import Form from './Form.svelte';
import '@testing-library/jest-dom/';
import { render } from '@testing-library/svelte';


test('shows Form with a btn when rendered', () => {
  const { getByText } = render(Form);
  const button = getByText('Click Me');

  expect(button).toHaveTextContent('Click Me');
});

test('shows Form with an empty input when rendered', () => {
  const { getByTestId } = render(Form);
  const input = getByTestId('form-input');

  expect(input).toHaveTextContent('');
});
