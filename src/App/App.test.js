import App from './App.svelte';
import '@testing-library/jest-dom/';
import { render } from '@testing-library/svelte';

test('shows render App and have proper title when rendered', () => {
  const { getByText } = render(App);

  expect(getByText('Hello, Welcome to Sexy Synonyms!')).toBeInTheDocument();
});