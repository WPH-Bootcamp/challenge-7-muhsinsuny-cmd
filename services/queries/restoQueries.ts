import { useQuery } from '@tanstack/react-query';
import { api } from '../api/axios';

// =====================
// Types
// =====================
export interface Restaurant {
  id: string | number;
  name: string;
  logo: string;
  images: string[];
  star: number;
  place: string;
  priceRange: { min: number; max: number };
  reviewCount: number;
  menuCount: number;
  category: string;
}

interface ApiResponse<T> {
  data: T;
}

// =====================
// Fetchers
// =====================
const fetchBestSeller = async (): Promise<Restaurant[]> => {
  const res = await api.get<ApiResponse<{ restaurants: Restaurant[] }>>(
    `/api/resto/best-seller`
  );
  console.log(
    'useBestSellerQuery called with id:',
    res.data?.data?.restaurants
  );
  return res.data?.data?.restaurants ?? [];
};

const fetchSearchResto = async (query: string): Promise<Restaurant[]> => {
  const res = await api.get<ApiResponse<{ restaurants: Restaurant[] }>>(
    `/api/resto/search`,
    { params: { q: query } }
  );

  return res.data?.data?.restaurants ?? [];
};

const fetchRestoDetail = async (id: string): Promise<Restaurant | null> => {
  const res = await api.get<ApiResponse<Restaurant>>(`/api/resto/${id}`);

  return res.data?.data ?? null;
};

// =====================
// Hooks
// =====================
export const useBestSellerQuery = (query?: string) => {
  return useQuery({
    queryKey: ['resto', 'best-seller', query],
    queryFn: fetchBestSeller,
  });
};

export const useSearchRestoQuery = (query: string) => {
  return useQuery({
    queryKey: ['resto', 'search', query],
    queryFn: () => fetchSearchResto(query),
    enabled: !!query,
  });
};

export const useRestoDetailQuery = (id: string) => {
  return useQuery({
    queryKey: ['resto', id],
    queryFn: () => fetchRestoDetail(id),
    enabled: !!id,
  });
};
