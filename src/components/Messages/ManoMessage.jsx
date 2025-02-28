import React from 'react'

export default function ManoMessage() {
    return (
        <div>
            <div className='flex p-4 items-center gap-2.5 hover:bg-gray-950'>

                <div>
                    <img src="/mano.jpg" className='w-12 h-12 rounded-full' />
                </div>

                <div >
                    <h1 className='flex font-bold gap-1.5 text-[16px]'>Mano.dev 🐺 
                        <p className='font-normal text-gray-400 '>@manoahluka Feb 14</p> </h1>
                    <p className='font-normal text-gray-400 -mt-1'>Updated the project* Boss</p>
                </div>

            </div>
        </div>
    )
}
