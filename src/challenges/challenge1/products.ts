// source: https://diviengine.com/woocommerce-sample-products-csv-import-file-freebie/

export type Cart = Record<string, number>;

export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Divi Engine String Bag (Big Logo)',
    price: 20,
    imageUrl:
      'https://ajax-filters-bc.diviengine.com/sampledata/images/Bag1.jpg',
  },
  {
    id: 2,
    name: 'Divi Engine String Bag (Small Logos)',
    price: 20,
    imageUrl:
      'https://ajax-filters-bc.diviengine.com/sampledata/images/Bag2.jpg',
  },
  {
    id: 3,
    name: 'Brand Button - Divi',
    price: 10,
    imageUrl:
      'https://ajax-filters-bc.diviengine.com/sampledata/images/DE-Pins-1.jpg',
  },
  {
    id: 4,
    name: 'Brand Button - Divi Engine',
    price: 10,
    imageUrl:
      'https://ajax-filters-bc.diviengine.com/sampledata/images/DE-Pins-4.jpg',
  },
  {
    id: 5,
    name: 'Brand Button - WooCommerce',
    price: 10,
    imageUrl:
      'https://ajax-filters-bc.diviengine.com/sampledata/images/DE-Pins-2.jpg',
  },
  {
    id: 6,
    name: 'Brand Button - WordPress',
    price: 10,
    imageUrl:
      'https://ajax-filters-bc.diviengine.com/sampledata/images/DE-Pins-3.jpg',
  },
  {
    id: 7,
    name: 'Lanyard',
    price: 8,
    imageUrl:
      'https://ajax-filters-bc.diviengine.com/sampledata/images/Lanyard1.jpg',
  },
  {
    id: 8,
    name: 'Divi Engine Tee - Blue (Large)',
    price: 15,
    imageUrl:
      'https://ajax-filters-bc.diviengine.com/sampledata/images/Shirt-3-blue-front.jpg',
  },
  {
    id: 9,
    name: 'Divi Engine Tee - White (Large)',
    price: 15,
    imageUrl:
      'https://ajax-filters-bc.diviengine.com/sampledata/images/Shirt-3-white-front.jpg',
  },
  {
    id: 10,
    name: 'Divi Engine Tee - Yellow (Large)',
    price: 15,
    imageUrl:
      'https://ajax-filters-bc.diviengine.com/sampledata/images/Shirt-3-yellow-front.jpg',
  },
  {
    id: 11,
    name: 'Divi Tee (Large)',
    price: 13,
    imageUrl:
      'https://ajax-filters-bc.diviengine.com/sampledata/images/Shirt-2---front.jpg',
  },
  {
    id: 12,
    name: 'WordPress Tee (Large)',
    price: 13,
    imageUrl:
      'https://ajax-filters-bc.diviengine.com/sampledata/images/Shirt-1---front.jpg',
  },
  {
    id: 13,
    name: 'Mens Divi Hoodie (Large)',
    price: 40,
    imageUrl:
      'https://ajax-filters-bc.diviengine.com/sampledata/images/Hoodie-2.jpg',
  },
  {
    id: 14,
    name: 'Dat Divi Engine Life Hoodie (Limited Edition - Large)',
    price: 45,
    imageUrl:
      'https://ajax-filters-bc.diviengine.com/sampledata/images/Hoodie-1.jpg',
  },
  {
    id: 15,
    name: 'Mens WordPress Hoodie (Large)',
    price: 35,
    imageUrl:
      'https://ajax-filters-bc.diviengine.com/sampledata/images/Hoodie-3.jpg',
  },
  {
    id: 16,
    name: 'Divi Engine Logo Zipper Hoodie (Large)',
    price: 30,
    imageUrl:
      'https://ajax-filters-bc.diviengine.com/sampledata/images/Hoodie-Women-1.jpg',
  },
  {
    id: 17,
    name: 'Purple Divi Engine Text Zipper Hoodie (Large)',
    price: 28,
    imageUrl:
      'https://ajax-filters-bc.diviengine.com/sampledata/images/Hoodie-Women-2.jpg',
  },
  {
    id: 18,
    name: "WooCommerce 'Gimme the Money' Zipper Hoodie (Large)",
    price: 28,
    imageUrl:
      'https://ajax-filters-bc.diviengine.com/sampledata/images/Hoodie-Women-3.jpg',
  },
  {
    id: 19,
    name: 'Divi Ninja Tee (Large)',
    price: 13,
    imageUrl:
      'https://ajax-filters-bc.diviengine.com/sampledata/images/Divi-Ninja.jpg',
  },
  {
    id: 20,
    name: 'Divi Simplified Crop-top (Large, Blue)',
    price: 13,
    imageUrl:
      'https://ajax-filters-bc.diviengine.com/sampledata/images/divi-Simplified-croptop-blue.jpg',
  },
  {
    id: 21,
    name: 'Divi Simplified Crop-top (Large, White)',
    price: 13,
    imageUrl:
      'https://ajax-filters-bc.diviengine.com/sampledata/images/divi-Simplified-croptop-white.jpg',
  },
  {
    id: 22,
    name: 'Divi Simplified Crop-top (Large, Yellow)',
    price: 13,
    imageUrl:
      'https://ajax-filters-bc.diviengine.com/sampledata/images/divi-Simplified-croptop-yellow.jpg',
  },
];
