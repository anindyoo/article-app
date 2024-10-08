import { useState } from 'react';
import useCategoryStore from '../../store/categoryStore';

const FilterDropdown = (props) => {
  const { filters, handleFilter, handleRemoveFilter } = props;
  const [open, setOpen] = useState(false);
  const { categoriesList } = useCategoryStore();

  const handleFilterButton = (event) => {
    event.preventDefault();
    setOpen(!open);
  };

  return (
    <div className="
    FILTER-DROPDOWN"
    >
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="
        inline-flex items-center
        px-5 py-2.5
        text-sm font-medium text-center
        rounded-lg
        bg-white
        border-2
        focus:ring-4 focus:outline-none focus:ring-blue-300"
        type="button"
        onClick={handleFilterButton}
      >
        Filter
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>
      <div
        id="dropdown"
        className={`
        absolute z-10
        w-44
        mt-3
        bg-white
        border
        rounded-lg
        shadow
        ${open ? 'block' : 'hidden'}`}
      >
        <ul className="
        CATEGORIES-FILTER-LIST
        py-2 text-sm"
        >
          {categoriesList.map((cat) => (
            <li key={cat.id}>
              <button
                type="button"
                onClick={() => (filters.includes(encodeURIComponent(cat.name))
                  ? handleRemoveFilter(encodeURIComponent(cat.name))
                  : handleFilter(encodeURIComponent(cat.name))
                )}
                className={`
                flex flex-row justify-between
                w-full
                text-left
                px-4 py-3
                hover:bg-gray-100`}
              >
                {cat.name}
                {filters.includes(encodeURIComponent(cat.name)) ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                ) : ''}
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() => handleFilter(encodeURIComponent('Uncategorized'))}
              className={`
              flex flex-row justify-between
              w-full
              text-left
              px-4 py-3
              hover:bg-gray-100`}
            >
              Uncategorized
              {filters.includes(encodeURIComponent('Uncategorized')) ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              ) : ''}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterDropdown;
