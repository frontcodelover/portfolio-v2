'use client';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('mlevbnbz');

  if (state.succeeded) {
    return <p className='text-xl text-center'>Merci pour votre message, je vous répondrai dans les plus brefs délais.</p>;
  }

  return (
    <div className='mt-20'>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-6 text-slate-800 tracking-tight'>
          
					<label htmlFor='name' className='md:text-3xl text-xl'>
						Votre nom
					</label>
					<input id='name' type='text' name='name' className='rounded-2xl p-3  border border-slate-500' />
					<ValidationError prefix='Name' field='name' errors={state.errors} />

					<label htmlFor='surname' className='md:text-3xl text-xl'>
						Votre prénom
					</label>
					<input id='surname' type='text' name='surname' className='rounded-2xl p-3  border border-slate-500' />
					<ValidationError prefix='Surname' field='surname' errors={state.errors} />
					
					<label htmlFor='email' className='md:text-3xl text-xl'>
            Votre email
          </label>
          <input id='email' type='email' name='email' className='rounded-2xl p-3  border border-slate-500' />
          <ValidationError prefix='Email' field='email' errors={state.errors} />

          <label htmlFor='message' className=' md:text-3xl text-xl'>
            Votre message
          </label>
          <textarea id='message' name='message' className='  border border-slate-500 rounded-2xl p-3 h-40' />
          <ValidationError prefix='Message' field='message' errors={state.errors} />

          <button
            type='submit'
            disabled={state.submitting}
            className='px-4 py-1 rounded-2xl md:text-3xl text-xl border text-slate-100 bg-emerald-600 hover:bg-emerald-700 transition ease-in-out hover:text-slate-200 font-black tracking-tighter '
          >
            Envoyer
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
