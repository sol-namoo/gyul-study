import { useEffect, useState } from 'react';
import { AutocompleteProps, Item } from './types';

export function Autocomplete({ source, onSelected }: AutocompleteProps) {
  const [input, setInput] = useState<string>('');
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const [list, setList] = useState<Item[]>(source);
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
    // openList();
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

  return (
    <div className="autocomplete-root">
      <input
        type="text"
        className="input input-bordered w-full"
        value={input}
        onClick={openList}
        onFocus={openList}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
      {isListOpen && (
        <ul className="mt-2 rounded-md drop-shadow p-2 bg-base-100 w-full">
          {list.map((item, index) => (
            <li
              key={item.value}
              className={`${
                index === highlightIdx ? 'bg-base-200' : ''
              } py-2 px-4 cursor-pointer rounded-md`}
              onMouseEnter={() => highlightItem(index)}
              onClick={selectItem}
            >
              <a>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
