import Intl from 'intl';

export function formatCurrency(
  amount: number,
  locale = 'id-ID',
  currency = 'IDR'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
}
