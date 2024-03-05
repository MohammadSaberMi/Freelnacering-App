import { useQuery } from '@tanstack/react-query';
import { getCategoryApi } from '../services/categoryService';

export default function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategoryApi,
    // {id, title, englishtitle ,....}
  });

  const { categories: rawcategories = [] } = data || {};
  //{value,label}
  const categories = rawcategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));
  const transformedCategories = rawcategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { isLoading, categories, transformedCategories };
}
