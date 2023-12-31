'use client';

import useCart from '@/app/hooks/use-cart';
import { useNavbarProperties } from '@/app/hooks/use-navbar-properties';
import CartItem2 from '@/components/cart-item-2';
import DefaultButton from '@/components/ui/default-button';
import { formatter, reduceDuplicatesAndCount } from '@/lib/utils';
import { ChevronLeft, RefreshCw, RefreshCwIcon, Trash } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

function CartPage() {
  const navbar = useNavbarProperties();
  const cart = useCart();
  const products = reduceDuplicatesAndCount(cart.items);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // You can put any logic you want to run when the component mounts here.
    // For example, if you want to set isMounted to true, you can do this:
    setIsMounted(true);
  }, []);

  const totalPrice = useMemo(() => {
    return Object.values(products).reduce(
      (acc, product) => acc + product.item.price * product.count,
      0,
    );
  }, [products]);

  useEffect(() => {
    navbar.setisTransparent(false);
  }, []);

  return (
    <main className="flex justify-center items-center mt-24 text-center w-full">
      <div className="max-w-[1170px] w-full">
        <h1 className="text-5xl font-playfair-display py-11">Shopping cart</h1>
        <div className="w-full mb-24 flex space-y-7 md:space-y-0 md:space-x-16 flex-col md:flex-row">
          <article className="md:w-[60%] flex flex-col justify-left">
            <div className="hidden md:grid grid-cols-4 px-5 w-full border-y text-black/50 md:ms-12">
              <p>Product</p>
              <p>PRICE</p>
              <p>QTANTITY</p>
              <p>SUBTOTAL</p>
            </div>
            <section
              className={
                'text-sm text-gray-600 py-5 pb-10 h-[75%] overflow-y-scroll max-h-[400px]'
              }
            >
              {isMounted && (
                <>
                  {cart.items.length < 1 ? (
                    <p>You have no items in your shopping cart</p>
                  ) : (
                    <>
                      {Object.values(products).map((product) => (
                        <CartItem2
                          item={product.item}
                          key={product.item.id}
                          count={product.count}
                        />
                      ))}
                    </>
                  )}
                </>
              )}
            </section>
            <div className="w-full flex border-t pt-6 justify-between px-5">
              <Link
                href={'/shop'}
                className="flex space-x-3 hover:text-orange-600 cursor-pointer transition duration-200"
              >
                <ChevronLeft /> <p>BACK TO SHOP</p>
              </Link>

              <button
                onClick={() => cart.removeAll()}
                className="flex space-x-3 hover:text-orange-600 cursor-pointer transition duration-200"
              >
                <Trash strokeWidth={'1px'} />
                <p>CLEAR CART</p>
              </button>
            </div>
          </article>
          <article className="px-5 flex flex-col border md:w-[30%] py-3">
            <div className="flex w-full justify-between border-b py-5">
              <p>Subtotal</p>
              <p>{isMounted && formatter.format(totalPrice)}</p>
            </div>
            <div className="flex w-full justify-between border-b py-5">
              <p>Shipping (Standard)</p>
              <p>{formatter.format(9)}</p>
            </div>
            <div className="flex w-full justify-between py-5">
              <p className="text-xl font-bold">Order Total</p>
              <p className="text-xl font-bold">
                {isMounted && formatter.format(totalPrice + 9)}
              </p>
            </div>

            <DefaultButton className="w-full h-[70px] bg-green-400 hover:opacity-100 hover:bg-green-500 transition duration-300 text-xl font-medium">
              PROCEED TO CHECKOUT
            </DefaultButton>
          </article>
        </div>
      </div>
    </main>
  );
}
export default CartPage;
