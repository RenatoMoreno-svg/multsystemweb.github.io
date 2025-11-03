/**
 * Formats a phone number for WhatsApp link
 * Removes all non-numeric characters
 */
export function formatPhoneForWhatsApp(phone: string): string {
  return phone.replace(/\D/g, '');
}

/**
 * Creates a WhatsApp link with message
 */
export function createWhatsAppLink(phone: string, message: string): string {
  const formattedPhone = formatPhoneForWhatsApp(phone);
  return `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Formats a price string to number for calculations
 */
export function parsePriceToNumber(price: string): number {
  return parseFloat(price.replace(/[^\d,]/g, '').replace(',', '.'));
}

/**
 * Calculates percentage discount between two prices
 */
export function calculatePercentageDiscount(currentPrice: string, originalPrice: string): number {
  const current = parsePriceToNumber(currentPrice);
  const original = parsePriceToNumber(originalPrice);
  
  if (original === 0) return 0;
  return Math.round((1 - current / original) * 100);
}

/**
 * Formats a phone number for display
 * Example: "11999999999" -> "(11) 99999-9999"
 */
export function formatPhoneDisplay(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);
  
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  
  return phone;
}
