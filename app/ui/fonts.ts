// Import the Inter font from Google Fonts
import { Inter, Lusitana } from 'next/font/google';
// Then export the Inter font with the latin subset, for usage.
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({weight: ['400', '700'], subsets: ['latin']});