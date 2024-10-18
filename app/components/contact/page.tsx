import React from 'react';
import ContactForm from '@/app/components/contact/form/contactForm';
import { SocialNetworks } from '@/app/components/contact/social/socialNetworks';

const Contact = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex flex-col gap-14 sm:w-8/12 w-screen px-8'>
        <ContactForm />
        <SocialNetworks />
      </div>
    </div>
  );
};

export default Contact;
