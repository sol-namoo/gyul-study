export type Item = {
  label: string;
  value: string;
};

export type AutocompleteProps = {
  source: Item[];
  onSelected: (item: Item) => void;
};
