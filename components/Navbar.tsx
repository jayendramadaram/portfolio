
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import ICON from "../assets/icon.png"
const Navbar = (props: { shrink: boolean; setOPEN: (agr0: boolean) => void }) => {
    const router = useRouter()

    return (
        <div className={`fixed top-0 z-30 items-center  w-full  px-8 transition-all flex bg-bgc1 justify-between  ${props.shrink ? "py-8 " : "py-3 shadow-2xl"}`}>
            <Image alt='Jayendra Madaram' className='cursor-pointer' width={90} height={90} src={ICON} onClick={() => router.push("/")} />
            <div className=" hidden md:flex text-lg font-mono font-semibold text-slate-300">

                <div className="hover:text-white cursor-pointer transition-all hover:-translate-y-3" onClick={() => {
                    router.asPath == "/" ? document.getElementById("explore")?.scrollIntoView() : router.push("/#explore")
                }}>
                    <div className="px-5 py-3">
                        Explore
                    </div>
                </div>
                <div className="hover:text-white cursor-pointer transition-all hover:-translate-y-3" onClick={() => router.push("/Education_n_Work")}>
                    <div className="px-5 py-3">
                        Work
                    </div>
                </div>
                <div className="hover:text-white cursor-pointer transition-all hover:-translate-y-3" onClick={() => {
                    router.asPath == "/" ? document.getElementById("projects")?.scrollIntoView() : router.push("/#projects")
                }}>
                    <div className="px-5 py-3">
                        Projects
                    </div>
                </div>
                <div onClick={() => router.push("/connect")} className="hover:text-white cursor-pointer transition-all hover:-translate-y-3">
                    <div className="px-5 py-3">
                        Contact
                    </div>
                </div>
            </div>
            <div onClick={() => props.setOPEN(true)} className=" md:hidden flex text-lg p-4 rounded-lg bg-slate-400 font-mono font-semibold text-slate-300">
                <GiHamburgerMenu className="" />
            </div>
        </div>
    )
};

export default Navbar;
