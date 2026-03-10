import CardMenu from './CardMenu';
import { MenuItem } from '@/services/queries/useMenusQuery';

export default function MenuList({ item }: { item: MenuItem[] }) {
  return (
    <>
      <div className='mt-4 grid grid-cols-2 gap-4 mb-10.25 md:grid-cols-3 lg:grid-cols-4'>
        {item?.map((item: MenuItem) => (
          <CardMenu key={item.id} data={{ ...item, price: item.price ?? 0 }} />
        ))}
      </div>
      <button className='text-md-bold text-neutral-950  w-30.5 h-10 border border-neutral-300 px-2 py-2 rounded-full mx-auto block'>
        Show more
      </button>
      <div className='border w-full border-neutral-300 mt-8 mb-8' />
    </>
  );
}
