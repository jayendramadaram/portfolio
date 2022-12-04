
import Image from "next/image";
import React from "react";
import ICON from "../assets/icon.png"
const Navbar = (props: { shrink: boolean }) => {

    return (
        <div className={`fixed top-0 z-30 items-center  w-full  sm:px-8 transition-all flex bg-bgc1 justify-between  ${props.shrink ? "py-8 " : "py-3 shadow-2xl"}`}>
            <Image alt='Jayendra Madaram' className='' width={90} height={90} src={ICON} />
            <div className="flex  text-lg font-mono font-semibold text-slate-300">

                <div className="hover:text-white cursor-pointer transition-all hover:-translate-y-3">
                    <div className="px-5 py-3">
                        About
                    </div>
                </div>
                <div className="hover:text-white cursor-pointer transition-all hover:-translate-y-3">
                    <div className="px-5 py-3">
                        Explore
                    </div>
                </div>
                <div className="hover:text-white cursor-pointer transition-all hover:-translate-y-3">
                    <div className="px-5 py-3">
                        Projects
                    </div>
                </div>
                <div className="hover:text-white cursor-pointer transition-all hover:-translate-y-3">
                    <div className="px-5 py-3">
                        Contact
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;
