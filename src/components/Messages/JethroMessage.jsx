import React from 'react'

export default function JethroMessage() {
    return (
        <div>
            <div className='flex p-4 items-center gap-2.5 hover:bg-gray-950'>

                <div>
                    <img src="/jaytee.jpg" className='w-12 h-12 rounded-full' />
                </div>

                <div >
                    <h1 className='flex font-bold gap-1.5 text-[16px]'>Jethro Irmiya
                        <p className='font-normal text-gray-400 '>@dev_jaytee Feb 13</p> </h1>
                    <p className='font-normal text-gray-400 -mt-1'>Sharp, Nice work Boss</p>
                </div>

            </div>
        </div>
    )
}
