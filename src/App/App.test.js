import App from './App.svelte';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';

test('shows render App and have proper title when rendered', () => {
  const { getByText } = render(App);

  expect(getByText('HELLO, WELCOME TO SEXY SYNONYMS!')).toBeInTheDocument();
});