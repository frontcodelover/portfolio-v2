import React from 'react';
import ContactForm from '@/app/components/contact/form/contactForm';
import { SocialNetworks } from '@/app/components/contact/social/socialNetworks';

export const Contact = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='w-4/12 flex flex-col gap-9'>
        <ContactForm />
        <SocialNetworks />
      </div>
    </div>
  );
};
