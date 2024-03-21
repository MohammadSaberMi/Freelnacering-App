import useCategories from '../../../hooks/useCategorys';
import Filter from '../../../ui/Filter';
import FilterDropDown from '../../../ui/FilterDropDown';
const sortOptions = [
  {
    value: 'latest',
    label: 'مرتب سازی (جدید ترین)',
  },
  {
    value: 'earliest',
    label: 'مرتب سازی (قدیمی ترین)',
  },
];
const statusOptions = [
  {
    label: 'همه',
    value: 'ALL',
  },
  {
    label: 'باز',
    value: 'OPEN',
  },
  {
    label: 'بسته',
    value: 'CLOSED',
  },
];

function ProjectHeader() {
  const { transformedCategories } = useCategories();
  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8 ">
      <h1 className="text-lg font-bold">لیست پروژه ها </h1>
      <div> فیلتر ها</div>
      <div className="flex gap-x-8 items-center">
        <Filter filterField="status" options={statusOptions} />
        <FilterDropDown filterField="sort" options={sortOptions} />
        <FilterDropDown
          filterField="category"
          options={[
            {
              value: 'ALL',
              label: 'دسته بندی (همه)',
            },
            ...transformedCategories,
          ]}
        />
      </div>
    </div>
  );
}

export default ProjectHeader;
