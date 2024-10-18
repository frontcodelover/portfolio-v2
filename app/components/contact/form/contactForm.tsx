'use client';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('mlevbnbz');

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className='mt-20'>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-6 '>
          <label htmlFor='email' className='dark:text-white text-3xl tracking-tighter'>
            Email Address
          </label>
          <input id='email' type='email' name='email' className='rounded-2xl p-3 text-slate-900 dark:border-none border' />
          <ValidationError prefix='Email' field='email' errors={state.errors} />

          <label htmlFor='message' className='dark:text-white text-3xl tracking-tighter'>
            Message
          </label>
          <textarea id='message' name='message' className=' text-slate-900 rounded-2xl p-3 h-40  dark:border-none border' />
          <ValidationError prefix='Message' field='message' errors={state.errors} />

          <button
            type='submit'
            disabled={state.submitting}
            className='bg-white px-4 py-1 rounded-2xl text-3xl text-slate-900 hover:text-slate-800 font-black tracking-tighter  dark:border-none border'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const App = () => {
  return <ContactForm />;
};

export default App;
