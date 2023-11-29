'use client'

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NAV_ITEMS } from "../constants"
import { NavItem } from "../types"
import { Icon } from '@iconify/react'

export default function Nav() {
    return (
        <div className="md:w-60 bg-white h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex">
            <div className="flex flex-col space-y-6 w-full">
                <Link
                    href="/"
                    className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-200 h-12 w-full"
                >
                    <span className="font-bold text-[12px] hidden md:flex">LA ESCUELA DEL FOGÓN</span>
                </Link>

                <div className="flex flex-col space-y-2 md:px-6 ">
                    {NAV_ITEMS.map((item, idx) => {
                        return <MenuItem key={idx} item={item} />;
                    })}
                </div>
            </div>
        </div>
    )
}

const MenuItem = ({ item }: { item: NavItem }) => {
    const pathname = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    return (
        <div className="">
            {item.submenu ? (
                <>
                    <button
                        onClick={toggleSubMenu}
                        className={`flex flex-row items-center p-2 rounded-lg hover-bg-[#F2F4E0] w-full justify-between hover:bg-[#F2F4E0] ${pathname.includes(item.path) ? 'bg-[#F2F4E0]' : ''
                            }`}
                    >
                        <div className="flex flex-row space-x-4 items-center">
                            {item.icon}
                            <span className="font-thin text-[14px]  flex">{item.title}</span>
                        </div>

                        <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
                            <Icon icon="lucide:chevron-down" width="18" height="18" />
                        </div>
                    </button>

                    {subMenuOpen && (
                        <div className="my-2 ml-12 flex flex-col space-y-4">
                            {item.subMenuItems?.map((subItem, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        href={subItem.path}
                                        className={`${subItem.path === pathname ? 'text-[#797F65]' : ''
                                            }`}
                                    >
                                        <span className="font-thin text-[12px]">{subItem.title}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </>
            ) : (
                <Link
                    href={item.path}
                    className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-[#F2F4E0] ${item.path === pathname ? 'bg-[#F2F4E0]' : ''
                        }`}
                >
                    {item.icon}
                    <span className="font-thin text-[14px] flex">{item.title}</span>
                </Link>
            )}
        </div>
    );
};