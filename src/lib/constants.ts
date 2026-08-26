// Brand constants and data

export const BRAND = {
  name: 'Bloom With Me',
  instagram: 'https://instagram.com/bloomwithme22',
  instagramHandle: '@bloomwithme22',
  whatsapp: 'https://wa.me/91XXXXXXXXXX',
  whatsappNumber: '+91-XXXXXXXXXX',
} as const;

export type Category =
  | 'All'
  | 'Sunflowers'
  | 'Bouquets'
  | 'Rakhis'
  | 'Keychains'
  | 'Flower Pots'
  | 'Custom Gifts';

export const CATEGORIES: Category[] = [
  'All',
  'Sunflowers',
  'Bouquets',
  'Rakhis',
  'Keychains',
  'Flower Pots',
  'Custom Gifts',
];

export interface Product {
  id: string;
  name: string;
  category: Exclude<Category, 'All'>;
  image: string;
  description: string;
  priceRange: string;
  tags: string[];
  size: 'small' | 'medium' | 'large';
  rotation: number;
  occasion?: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: '01',
    name: 'Sunshine Bouquet',
    category: 'Sunflowers',
    image: '/images/bouquet-sunflower.png',
    description: 'Three beautiful crochet sunflowers wrapped in kraft paper, tied with a satin bow.',
    priceRange: '₹349 – ₹499',
    tags: ['sunflower', 'bouquet', 'gift', 'handmade'],
    size: 'large',
    rotation: -2,
    occasion: ['For Someone Special', 'For a Celebration'],
  },
  {
    id: '02',
    name: 'You Are My Sunshine Set',
    category: 'Rakhis',
    image: '/images/rakhi-sunshine.png',
    description: 'A crochet sunflower rakhi with a matching greeting card — perfect for Raksha Bandhan.',
    priceRange: '₹199 – ₹299',
    tags: ['rakhi', 'sunflower', 'raksha bandhan', 'handmade'],
    size: 'medium',
    rotation: 1.5,
    occasion: ['For Someone Special', 'For a Celebration'],
  },
  {
    id: '03',
    name: 'Evil Eye Keychain',
    category: 'Keychains',
    image: '/images/keychain-evileye.png',
    description: 'A vibrant blue crochet evil eye keychain — carry a little protection with you.',
    priceRange: '₹149 – ₹199',
    tags: ['keychain', 'evil eye', 'blue', 'protection', 'gift'],
    size: 'small',
    rotation: -3,
    occasion: ['For Someone Special', 'Just Because 🌼', 'For My Room'],
  },
  {
    id: '04',
    name: 'Mixed Bloom Bouquet',
    category: 'Bouquets',
    image: '/images/bouquet-mixed.png',
    description: 'Sunflowers, daisies, and tulips — a full handmade garden in your hands.',
    priceRange: '₹499 – ₹799',
    tags: ['bouquet', 'sunflower', 'daisy', 'tulip', 'mixed'],
    size: 'large',
    rotation: 2,
    occasion: ['For Someone Special', 'For a Celebration', 'For My Room'],
  },
  {
    id: '05',
    name: 'Garden of Blooms',
    category: 'Flower Pots',
    image: '/images/flowerpots.png',
    description: 'Colourful crochet flowers in mini pots — a little garden that never wilts.',
    priceRange: '₹249 – ₹449',
    tags: ['pot', 'flower pot', 'room decor', 'colourful', 'set'],
    size: 'medium',
    rotation: -1,
    occasion: ['For My Room', 'Just Because 🌼', 'For a Celebration'],
  },
];

export const BLOOM_OPTIONS = [
  {
    id: 'someone',
    label: 'For Someone Special',
    emoji: '💛',
    description: 'Handmade gifts full of love',
  },
  {
    id: 'room',
    label: 'For My Room',
    emoji: '🌿',
    description: 'Blooms that never wilt',
  },
  {
    id: 'celebration',
    label: 'For a Celebration',
    emoji: '🎉',
    description: 'Raksha Bandhan, birthdays & more',
  },
  {
    id: 'because',
    label: 'Just Because 🌼',
    emoji: '✨',
    description: 'Because you deserve flowers too',
  },
] as const;

export type BloomOption = (typeof BLOOM_OPTIONS)[number]['label'];

export const NAV_LINKS = [
  { label: 'Creations', href: '#creations' },
  { label: 'Our Story', href: '#story' },
  { label: 'Custom Orders', href: '#custom' },
  { label: 'Meet the Maker', href: '#maker' },
] as const;
