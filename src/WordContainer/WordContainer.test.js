import WordContainer from './WordContainer.svelte';
import '@testing-library/jest-dom/';
import { render } from '@testing-library/svelte';

test('should render WordContainer with an h2 title', () => {
  const { getByText } = render(WordContainer, { word: 'meat', 
    searchResults: [ 
      'flesh',
      'chow',
      'eats'
    ]
  });

  const h2 = getByText('SYNONYMS FOR: ');

  expect(getByText(h2)).toBeInTheDocument();
});

test('should render with a word', () => {
  const { getByTestId } = render(WordContainer, { word: 'meat', 
    searchResults: [ 
      'flesh',
      'chow',
      'eats'
    ]
  });

  const word = getByTestId('span-word');

  expect(word).toBeInTheDocument();
});
