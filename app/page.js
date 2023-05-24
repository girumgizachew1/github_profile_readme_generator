"use client"; // This is a client component 
import Image from 'next/image'
import Form from './Component/Form'
import Header from './Component/Header';
import Generated from './Component/Generated';
import store from './Redux/Store';
import { Provider } from 'react-redux';
import { Analytics } from '@vercel/analytics/react';
import Footer from './Component/Footer';
export default function Home() {
  return (
    <>
      <Provider store={store}>
        <main className=" h-full w-full space-y-10 bg-zinc-50 ">
          <Header  />
          <div className='flex mt-10 space-x-4  flex-col md:flex-row '>
            <div className='basis-1/2 ' ><Form /></div>
            <div className='basis-1/2  h-full'><Generated /></div>
          </div>
          <Footer/>
        </main>

      </Provider>
      <Analytics />
    </>

  )
}
