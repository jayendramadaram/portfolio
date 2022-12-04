import React from "react";
import { useEffect, useState } from 'react'
const Main = () => {
    const [shrink, setshrink] = useState<boolean>(false);
    const [scroll, setscroll] = useState<number>(0);

    useEffect(() => {
        if (typeof window !== "undefined") {

            document.getElementById("main")?.addEventListener("scroll", () => {
                console.log("ebhjubwsdecju");
            })
        }
    });

    const logger = (event: Event | undefined) => {
        console.log(document.getElementById("main")?.getBoundingClientRect().bottom);

    }
    return (
        <div className='w-4/5 overflow-hidden' onScroll={() => logger(event)}>
            <div id='main' className='flex h-96 w-full cursor-pointer  space-x-4 justify-center'>
                <div onClick={() => logger(event)}>wefcwefcew Me</div>
                <div>Image</div>
            </div>
            <div className='flex h-96 w-full space-x-4 justify-center'>
                <div>Aboout Me</div>
                <div>Image</div>
            </div>
            <div className='flex h-96 w-full space-x-4 justify-center'>
                <div onClick={() => logger(event)}>sfcsdfcwsdecwecesw Me</div>
                <div>Image</div>
            </div>
            <div className='flex h-96 w-full space-x-4 justify-center'>
                <div>Aboout Me</div>
                <div>Image</div>
            </div>
            <div className='flex h-96 w-full space-x-4 justify-center'>
                <div onClick={() => logger(event)}>sfcsdfcwsdecwecesw Me</div>
                <div>Image</div>
            </div>
            <div className='flex h-96 w-full space-x-4 justify-center'>
                <div>Aboout Me</div>
                <div>Image</div>
            </div>
            <div className='flex h-96 w-full space-x-4 justify-center'>
                <div onClick={() => logger(event)}>sfcsdfcwsdecwecesw Me</div>
                <div>Image</div>
            </div>

            <div className='flex w-full space-x-4 justify-center'>
                <div>Aboout Me</div>
                <div>Image</div>
            </div>

        </div>
    )
}
export default Main;