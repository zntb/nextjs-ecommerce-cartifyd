'use client';

import { Product } from '@/sanity.types';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { ShoppingBag } from 'lucide-react';

interface Props {
  product: Product | null | undefined;
  className?: string;
}

const AddToCartButton = ({ product, className }: Props) => {
  const isOutOfStock = product?.stock === 0;

  const handleAddToCart = () => {
    window.alert('Added to cart');
  };
  return (
    <div className='w-full h-12 flex items-center'>
      <Button
        onClick={handleAddToCart}
        disabled={isOutOfStock}
        className={cn(
          'w-full bg-shop_dark_green/80 text-lightBg shadow-none border border-shop_dark_green/80 font-semibold tracking-wide text-white hover:bg-shop_dark_green hover:border-shop_dark_green hoverEffect',
          className,
        )}
      >
        <ShoppingBag /> {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
      </Button>
    </div>
  );
};

export default AddToCartButton;
