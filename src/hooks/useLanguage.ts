import dictionary from '../../dictionary.json';

export default function useLanguage() {
  const getNestedProperty = (obj: any, path: string) =>
    path.split('.').reduce((prev, curr) => prev[curr], obj || this);

  const translation = (language: string, key: string) => {
    const word = getNestedProperty(dictionary[language], key);

    if (!word) {
      console.warn(`No text was found for language '${language}'`);
    }

    return word || getNestedProperty(dictionary['es'], key) || '';
  };

  return [translation] as const;
}
