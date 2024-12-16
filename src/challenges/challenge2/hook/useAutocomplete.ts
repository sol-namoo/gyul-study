import { useEffect, useState } from 'react';
import { AutocompleteProps, Item } from '../types';

export const useAutoComplete = ({ source, onSelected }: AutocompleteProps) => {
  const [input, setInput] = useState<string>('');
  const [list, setList] = useState<Item[]>(source);
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const [highlightIdx, setHighlightIdx] = useState<number>(-1);

  const openList = () => {
    if (!isListOpen) {
      setIsListOpen(true);
      setHighlightIdx(-1);
    }
  };

  const closeList = () => {
    setIsListOpen(false);
  };

  const highlightItem = (index: number) => setHighlightIdx(index);

  const selectItem = () => {
    if (list.length && highlightIdx > -1) {
      setInput(list[highlightIdx]?.label);
      onSelected(list[highlightIdx]);
      closeList();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setHighlightIdx(-1);

    if (e.target.value) {
      setList(
        source.filter((item) =>
          item.label.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setList(source);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') selectItem();
    else if (e.key === 'Escape') closeList();
    else if (e.key === 'ArrowUp')
      setHighlightIdx((prev) => {
        if (prev > -1) return prev - 1;
        else return prev;
      });
    else if (e.key === 'ArrowDown')
      setHighlightIdx((prev) => {
        if (prev < list.length - 1) return prev + 1;
        else return prev;
      });
  };

  useEffect(() => {
    const handleClickAway = (e: MouseEvent) => {
      const target = e.target;
      if (
        !target ||
        (target && !(target as Element).closest('.autocomplete-root'))
      ) {
        closeList();
      }
    };

    document.body.addEventListener('click', handleClickAway);
    return () => document.body.removeEventListener('click', handleClickAway);
  }, []);

  return {
    input,
    list,
    isListOpen,
    highlightIdx,
    selectItem,
    openList,
    highlightItem,
    handleInputChange,
    handleInputKeyDown,
  };
};
