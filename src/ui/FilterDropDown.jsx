import { useSearchParams } from 'react-router-dom';
import Select from './Select';

function FilterDropDown({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get(filterField) || '';

  function handleChange(e) {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  }
  return <Select value={filterValue} onChange={handleChange} options={options} />;
}

export default FilterDropDown;
