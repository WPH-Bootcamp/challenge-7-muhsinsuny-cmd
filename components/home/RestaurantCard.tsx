// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { MenuItem } from '@/services/queries/useMenusQuery';

// export default function RestaurantCard(data: MenuItem) {
//   return (
//     <Link href={`/restaurants/${data.id}`} className='block'>
//       <div className='rounded-xl bg-white p-4 flex flex-colshadow gap-3 transition hover:shadow-md'>
//         <div className='relative mb-3 h-24 w-24 overflow-hidden rounded-lg bg-gray-100'>
//           {data.images && data.images.length > 0 && (
//             <Image
//               src={data.images[0]}
//               alt={data.name}
//               className='object-contain'
//               fill
//               object-cover='true'
//               sizes='100%'
//             />
//           )}
//         </div>
//         <div className='flex flex-col  gap-0'>
//           <h3 className='line-clamp-1 text-sm font-semibold'>{data.name}</h3>

//           <div className='mt-2 text-xs text-orange-500'>⭐ {data.star}</div>

//           <div className='flex flex-row'>
//             {data.place && (
//               <p className='mt-1 line-clamp-1 text-xs text-gray-500'>
//                 {data.place}
//               </p>
//             )}
//             <p className='mt-1 line-clamp-1 text-xs text-gray-500'>
//               {data.distance}
//             </p>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// }

'use client';

import { useOrderQuery } from '@/services/queries/useOrdersQuery';
import { useCreateOrder } from '@/services/queries/useCreateOrder';

interface Props {
  menu: {
    id: number;
    name: string;
    price: number;
  };
}

export default function RestaurantCard({ menu }: Props) {
  const { data: order = [] } = useOrderQuery();
  const { addItem, minusItem } = useCreateOrder();

  const qty = order.find((o) => o.menuId === menu.id)?.qty || 0;

  return (
    <div className='rounded-lg border p-4'>
      <h3>{menu.name}</h3>
      <p>Rp {menu.price}</p>

      {qty === 0 ? (
        <button
          className='mt-2 rounded bg-red-500 px-3 py-1 text-white'
          onClick={() =>
            addItem({
              menuId: menu.id,
              name: menu.name,
              price: menu.price,
            })
          }
        >
          Add
        </button>
      ) : (
        <div className='mt-2 flex items-center gap-2'>
          <button onClick={() => minusItem(menu.id)}>-</button>
          <span>{qty}</span>
          <button
            className='rounded-full bg-red-500 px-2 text-white'
            onClick={() =>
              addItem({
                menuId: menu.id,
                name: menu.name,
                price: menu.price,
              })
            }
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
