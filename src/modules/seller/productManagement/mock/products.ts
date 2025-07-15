import { ProductStatus } from '../enum/productStatus';
import { Variant } from './variant';
import { mockVariants } from '../mock/variant'

interface Product {
  id: number;
  name: string;
  description: string;
  variants: Variant[];

  discount: number;
  imageUrl: string;
  status: ProductStatus;
}

const firstVariant = mockVariants[0];

export const mockProducts: Product[] = [
  {
    id: 1,
    name: firstVariant.variantValue,
    description: "Lorem ipsum, Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,",
    variants: mockVariants,
    discount: 0,
    imageUrl: firstVariant.imageUrl,
    status: firstVariant.status
  },
];