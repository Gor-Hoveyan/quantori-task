import React from "react";


export default function Background() {
    return (
        <div className='absolute top-16 grid grid-rows-3 grid-cols-3 w-full h-[calc(100%-100px)]'>
            <div className='bg-primary row-span-2'></div>
            <div className='bg-brown col-span-2'></div>
            <div className='bg-darkgreen'></div>
            <div className='bg-lightbrown row-span-2'></div>
            <div className='bg-bluegray col-span-2'></div>
        </div>
    )
}