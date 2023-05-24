import React from 'react';
import { SiBuymeacoffee } from 'react-icons/si';

import { BiCoffee } from 'react-icons/bi';

function SupportSection({
    buymecoffee,
    kofi,
    handleBuyMeCoffeeChange,
    handleKofiChange,
}) {
    return (
        <div className='space-y-3'>
            <h1 className='text-xl font-semibold'>Support Me</h1>
            <div className='flex space-x-4' >
                <div className='flex space-x-2'  >
                    <div className='bg-yellow-400 px-1 py-2 flex space-x-2 rounded-lg' >
                        < SiBuymeacoffee className='w-5 h-5 text-white ' />
                        <h1 className='text-sm font-semibold text-zinc-700' >buy me a coffee</h1>
                    </div>
                    <input
                        type="text"
                        id="title"
                        value={buymecoffee}
                        onChange={handleBuyMeCoffeeChange}
                        className="border border-zinc-300 focus:border-zinc-800 outline-none px-2 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                    />

                </div>
                <div className='flex space-x-2'  >
                    <div className='bg-red-500 px-1 py-2 flex space-x-2 rounded-lg' >
                        < BiCoffee className='w-5 h-5 text-white' />
                        <h1 className='text-sm font-semibold text-zinc-100' >buy me a coffee</h1>
                    </div>
                    <input
                        type="text"
                        id="title"
                        value={kofi}
                        onChange={handleKofiChange}
                        className="border border-zinc-300 focus:border-zinc-800 outline-none px-2 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                    />

                </div>
            </div>
        </div>
    );
}

export default SupportSection;
