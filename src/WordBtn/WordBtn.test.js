import WordBtn from './WordBtn.svelte';
import '@testing-library/jest-dom/';
import { render } from '@testing-library/svelte';

test('should render a btn showing the secondWord', () => {
  const { getByText } = render(WordBtn, { secondWord: 'Earth' });
  const button = getByText('Earth');

  expect(button).toHaveTextContent('Earth');
});