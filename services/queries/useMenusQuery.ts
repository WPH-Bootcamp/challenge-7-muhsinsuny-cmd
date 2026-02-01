// services/queries/useMenusQuery.ts

import { useQuery } from '@tanstack/react-query';
import { api } from '../api/axios';
// import { RestaurantDetail } from '@/types/restaurant';

// ================= TYPES =================
export interface MenusQueryParams {
  category?: string;
  search?: string;
  priceRange?: number[]; // [min, max]
}

export interface MenuItem {
  id: number;
  foodName: string;
  images: string[];
  logo: string;
  place?: string;
  category: string;
  menuCount: number;
  reviewCount: number;
  star: number;
  price?: number;
  priceRange: {
    min: number;
    max: number;
  };
  distance: number;
  image: string;
}

// ================= QUERY FN =================
async function fetchMenus(params?: MenusQueryParams): Promise<MenuItem[]> {
  const queryParams: Record<string, string | number | undefined> = {
    category: params?.category,
    search: params?.search,
    priceRange: params?.priceRange ? params.priceRange.join(',') : undefined,
  };

  const res = await api.get(`/api/resto/`, { params: queryParams });
  return res.data?.data?.restaurants ?? [];
}

// ================= HOOK =================
export function useMenusQuery(params?: MenusQueryParams) {
  return useQuery({
    queryKey: ['menus', params],
    queryFn: () => fetchMenus(params),
    staleTime: 1000 * 60, // 1 menit
    retry: 1,
  });
}
