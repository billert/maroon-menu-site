'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"


const pageList = [{key: 0, name: "support", displayName: "Support"}, {key:1, name: "privacy", displayName: "Privacy"}]

export default function Navbar() {
    const pathname = usePathname();
    return <header className = "z-10 fixed w-full">
        <div className = "pl-1 pr-1 flex flex-row items-center justify-between align-middle h-6 bg-[repeating-linear-gradient(45deg,var(--tw-gradient-stops))] from-[#efefef] dark:from-[#090909] from-[length:0_20px] to-[#f5f5f5] dark:to-[#161616] to-[length:20px_40px]">
            <div className = "flex flex-row gap-1">

                <Link href = "https://billert.dev" className = "transition-all flex flex-row items-center align-middle p-1 hover:bg-[#00000010] dark:hover:bg-[#ffffff10] active:bg-[#00000060] dark:active:bg-[#ffffff60]">
                    <div className = "transition ease-in-out flex flex-row">
                        <p className = "text-lg mr-0 font-bold ">billert</p>
                        <p className = "text-lg ml-0 font-bold text-transparent text-stroke-black dark:text-stroke-white text-stroke-1">.dev</p>
                    
                    </div>
                </Link>
                
            </div>
            
        </div>
        <div className = "pl-1 pr-1 flex flex-row items-center justify-between align-middle h-12 bg-[#500000c0] backdrop-blur-md">
            <div className = "flex flex-row gap-1">

                <Link href = "/" className = "transition-all flex flex-row items-center align-middle hover:bg-[#ffffff10]active:bg-[#ffffff60]">
                    <div className = "transition ease-in-out flex flex-row">
                        <p className = "transition-all text-3xl mr-0 font-bold text-white p-1 hover:bg-[#ffffff10] active:bg-[#ffffff50] rounded-lg">Magic Menu</p>
                    
                    </div>
                </Link>
                {pageList.map((item) => {
                    return <li key={item.key} className = "list-none flex flex-row align-middle items-center justify-center">
                        <Link href = {"/"+item.name} className= "flex flex-row align-middle items-center justify-center">
                            <div className = "transition ease-in-out flex flex-row">
                                <p className = {pathname.includes("/"+item.name) ? "opacity-100 bg-[#ffffff30] p-2 text-white rounded-lg" : "transition-colors opacity-70 p-2 hover:bg-[#ffffff10] active:bg-[#ffffff60] text-white rounded-lg"}>{item.displayName}</p>
                            </div>
                        </Link>
                    </li>
                })}
                
            </div>
            
        </div>
    </header>
}
