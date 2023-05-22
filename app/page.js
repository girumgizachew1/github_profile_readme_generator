"use client"; // This is a client component 
import Image from 'next/image'
import Form from './Component/Form'
import Header from './Component/Header';
import Generated from './Component/Generated';
import store from './Redux/Store';
import { Provider } from 'react-redux';
export default function Home() {
  return (
    <Provider store={store}>
    <main className="h-screen w-full">
      <Header />
      <div className='flex mx-10 mt-10 space-x-4 '>
        <div className='basis-1/2 w-full shadow-sm shadow-zinc-300 rounded-sm' ><Form /></div>
        <div className='basis-1/2 w-full '><Generated /></div>


      </div>
    </main>
    </Provider>
  )
}
