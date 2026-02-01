import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  setCategory,
  setSort,
  setSearch,
} from '@/features/filters/filterSlice';

type SortType = 'price_asc' | 'price_desc' | 'rating_desc' | '';

interface RootState {
  filters: {
    categoryId: string;
    sortBy: SortType;
    search: string;
  };
}

interface Category {
  id: string;
  name: string;
}

export function FilterBar({ categories }: { categories: Category[] }) {
  const dispatch = useDispatch();
  const { categoryId, sortBy, search } = useSelector(
    (state: RootState) => state.filters
  );

  return (
    <div className='sticky top-0 z-10 bg-background border-b p-4 space-y-3'>
      {/* Search */}
      <Input
        placeholder='Cari menu favorit...'
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />

      <div className='flex gap-2'>
        {/* Category */}
        <Select
          value={categoryId}
          onValueChange={(v) => dispatch(setCategory(v))}
        >
          <SelectTrigger className='w-1/2'>
            <SelectValue placeholder='Kategori' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value=''>Semua</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat.id} value={cat.id}>
                {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Sort */}
        <Select
          value={sortBy}
          onValueChange={(v: SortType) => dispatch(setSort(v))}
        >
          <SelectTrigger className='w-1/2'>
            <SelectValue placeholder='Urutkan' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='price_asc'>Harga Termurah</SelectItem>
            <SelectItem value='price_desc'>Harga Termahal</SelectItem>
            <SelectItem value='rating_desc'>Rating Tertinggi</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Reset */}
      <Button
        variant='ghost'
        size='sm'
        onClick={() => {
          dispatch(setSearch(''));
          dispatch(setCategory(''));
          dispatch(setSort(''));
        }}
      >
        Reset Filter
      </Button>
    </div>
  );
}
