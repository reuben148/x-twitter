import React from 'react'

export default function ReubenMessage() {
    return (
        <div>
            <div className='flex p-4 items-center gap-2.5 hover:bg-gray-950'>

                <div>
                    <img src="/reuben.jpg" className='w-12 h-12 rounded-full' />
                </div>

                <div >
                    <h1 className='flex font-bold gap-1.5 text-[16px]'>Reuben_dev 
                        <p className='font-normal text-gray-400 '>@reubenluka Feb 13</p> </h1>
                    <p className='font-normal -mt-1 text-gray-400'>Check your page</p>
                </div>

            </div>
        </div>
    )
}
