'use client';

import { useCartModal } from '@/app/hooks/use-cart-modal';
import Modal from '../ui/modal';
import { X } from 'lucide-react';
import DefaultButton from '../ui/default-button';

export const CartModal = () => {
  const cartModal = useCartModal();

  return (
    <Modal isOpen={cartModal.isOpen} onClose={cartModal.onClose}>
      <div
        className={
          'space-y-4 pb-4 bg-white h-full z-50 w-full sm:w-[475px] px-12 py-10 absolute right-0'
        }
      >
        <X
          size={34}
          className={
            'opacity-50 hover:opacity-80 hover:text-orange-600 cursor-pointer text-gray-600'
          }
          onClick={cartModal.onClose}
        />
        <section className={'text-sm text-gray-600 opacity-50 py-5 pb-10'}>
          You have no items in your shopping cart
        </section>
        <DefaultButton onClick={cartModal.onClose}>GO TO SHOP</DefaultButton>
      </div>
    </Modal>
  );
};
