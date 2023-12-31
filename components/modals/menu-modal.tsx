'use client';

import React, { useState } from 'react';
import { useMenuModal } from '@/app/hooks/use-menu-modal';
import Modal from '../ui/modal';
import { Archive, Phone, X } from 'lucide-react';
import MenuDropdown from '../menu-dropdown';
import Link from 'next/link';
import Separator from '../ui/separator';
import PaymentsProviders from '../ui/payment-providers';
import SocialmediaProviders from '../ui/socialmedia-providers';
import {
  assistanceItemsList,
  businessItemsList,
  coffeItemsList,
  shopItemsList,
} from '@/lib/routes';

export const MenuModal = () => {
  const menuModal = useMenuModal();

  return (
    <Modal isOpen={menuModal.isOpen} onClose={menuModal.onClose}>
      <div
        className={
          'absolute right-0 z-50 h-full w-full space-y-4 bg-white px-12 py-10 pb-4 sm:w-[475px]'
        }
      >
        <div
          onClick={menuModal.onClose}
          className={
            'h-12 w-12 cursor-pointer text-gray-600 opacity-50 hover:text-orange-600 hover:opacity-80'
          }
        >
          <X size={34} />
        </div>

        {/* ADD CHANGE LANG HERE */}

        <div className={'block w-full space-y-5 pb-4'}>
          <Link
            href={'/'}
            className={'text-4xl text-orange-600'}
            onClick={menuModal.onClose}
          >
            Home
          </Link>
          <MenuDropdown
            dropdownName="Shop"
            itemsList={shopItemsList}
            bigLabel={true}
            href="/shop"
            onClose={menuModal.onClose}
          />
          <MenuDropdown
            dropdownName="Assistance"
            itemsList={assistanceItemsList}
            bigLabel={true}
            href="/assistance"
            onClose={menuModal.onClose}
          />
          <MenuDropdown
            dropdownName="Coffee"
            itemsList={coffeItemsList}
            bigLabel={true}
            href="/coffee"
            onClose={menuModal.onClose}
          />
          <MenuDropdown
            dropdownName="Business"
            itemsList={businessItemsList}
            bigLabel={true}
            href="/business"
            onClose={menuModal.onClose}
          />
        </div>
        <Separator />
        <section className={'space-y-8 py-3'}>
          <article className={'m-0 flex items-start space-x-5 p-0'}>
            <Phone className={'mt-2'} />
            <div className={'space-y-3'}>
              <h4 className={'text-lg'}>Assistance</h4>
              <a
                href="mailto:info@mokarico.com"
                className={'text-xl font-semibold hover:text-orange-600'}
              >
                info@mokarico.com
              </a>
              <p className={'text-xl font-semibold'}>055 444 555 555</p>
            </div>
          </article>
          <article className={'m-0 flex items-start space-x-5 p-0'}>
            <Archive className={'mt-2'} />
            <div className={'space-y-3'}>
              <h4 className={'text-lg'}>Shipping</h4>

              <p className={'text-xl font-semibold'}>2-6 working days</p>
            </div>
          </article>
        </section>
        <Separator />
        <PaymentsProviders />
        <Separator />
        <SocialmediaProviders />
      </div>
    </Modal>
  );
};
