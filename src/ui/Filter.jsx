import { useSearchParams } from 'react-router-dom';

function Filter({ filterField, options }) {
  const [serchParms, setSerchParams] = useSearchParams();
  const currentFilter = serchParms.get(filterField) || options.at(0).value;
  function handelClick(value) {
    serchParms.set(filterField, value);
    setSerchParams(serchParms);
  }
  return (
    <div className="flex items-center gap-x-2 text-xs">
      <span>وضعیت</span>
      <div className="flex items-center gap-x-2 border border-secondary-100 bg-secondary-0 rounded-lg">
        {options.map(({ value, label }) => {
          const isActive = value === currentFilter;
          return (
            <button
              key={value}
              disabled={isActive}
              onClick={() => handelClick(value)}
              className={`whitespace-nowrap  rounded-md px-4 py-2 font-bold transition-all duration-300
              ${isActive ? '!bg-primary-900 text-white' : 'bg-secondary-0 text-secondary-700'}
              
              `}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
