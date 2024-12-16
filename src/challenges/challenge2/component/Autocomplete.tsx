import { useAutoComplete } from '../hook/useAutocomplete';
import { AutocompleteProps } from '../types';

export function Autocomplete({ source, onSelected }: AutocompleteProps) {
  const {
    input,
    highlightIdx,
    openList,
    highlightItem,
    handleInputChange,
    handleInputKeyDown,
  } = useAutoComplete({ source, onSelected });

  return (
    <div className="autocomplete-root">
      <input
        type="text"
        className="input input-bordered w-full"
        value={input}
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
