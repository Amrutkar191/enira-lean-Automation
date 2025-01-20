import companyLogo from '../../assets/companyLogo.jpg';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


export default function SideBar() {
    const [isProduccionOpen, setProduccionOpen] = useState(false);
    const [isCalidadOpen, setCalidadOpen] = useState(false);
    const [isMantenimientoOpen, setMantenimientoOpen] = useState(false);
    return (


        <aside className=' w-64 bg-white h-screen  shadow-md '>



            <div className='flex items-center justify-between '>
                <img
                    className=" w-[8vw] h-auto  p-4 "
                    src={companyLogo}
                    alt="Company Logo"
                />
                <span className="p-4 material-symbols-outlined text-gray-400 flex justify-end items-end">
                    menu_open
                </span>
            </div>
            <hr className="border-gray-300" />



            <ul className="p-3">
                <li className="p-3 font-bold text-blue-500 uppercase hover:bg-blue-100 cursor-pointer  text-[12px]">
                    Dashboard
                </li>
                <hr className="border-gray-300" />
                {/* PRODUCCIÓN Dropdown */}
                <li
                    className="p-3 font-bold text-gray-900 flex justify-between items-center hover:bg-blue-100 cursor-pointer  text-[12px]"
                    onClick={() => setProduccionOpen(!isProduccionOpen)}
                >
                    PRODUCCIÓN {isProduccionOpen ? <FaChevronUp /> : <FaChevronDown />}
                </li>
                {isProduccionOpen && (
                    <ul className="ml-5 space-y-2 text-gray-600 " >
                        <li className="p-1 font-semibold text-[12px] hover:text-blue-500 cursor-pointer">
                            <span className="material-symbols-outlined">
                                browse_activity
                            </span>
                            Monitorización</li>
                        <li className="p-1 font-semibold text-[12px] hover:text-blue-500 cursor-pointer">
                             <span className="material-symbols-outlined">
                                history
                            </span>
                             Histórico</li>
                        <li className="p-1 font-semibold text-[12px] hover:text-blue-500 cursor-pointer">
                             <span className="material-symbols-outlined">
                                settings
                            </span>
                             Control</li>
                        <li className="p-1 font-semibold text-[12px] hover:text-blue-500 cursor-pointer">
                             <span className="material-symbols-outlined">
                                date_range
                            </span>
                             Planificar</li>
                        <li className="p-1 font-semibold text-[12px] hover:text-blue-500 cursor-pointer">
                             <span className="material-symbols-outlined">
                                autostop
                            </span>
                             Automatizar</li>
                    </ul>
                )}

                <hr className="border-gray-300" />

                {/* CALIDAD Dropdown */}
                <li
                    className="p-3 font-bold text-gray-900 flex justify-between items-center hover:bg-blue-100 cursor-pointer  text-[12px]"
                    onClick={() => setCalidadOpen(!isCalidadOpen)}
                >
                    CALIDAD {isCalidadOpen ? <FaChevronUp /> : <FaChevronDown />}
                </li>
                {isCalidadOpen && (
                    <ul className="ml-5 space-y-2 text-gray-600">
                        <li className="p-1 font-semibold text-[12px] hover:text-blue-500 cursor-pointer">Submenu2</li>
                        <li className="p-1 font-semibold text-[12px] hover:text-blue-500 cursor-pointer">Submenu1</li>
                    </ul>
                )}
                <hr className="border-gray-300" />
                {/* MANTENIMIENTO Dropdown */}
                <li
                    className="p-3 font-bold text-gray-900 flex justify-between items-center hover:bg-blue-100 cursor-pointer  text-[12px]"
                    onClick={() => setMantenimientoOpen(!isMantenimientoOpen)}
                >
                    MANTENIMIENTO {isMantenimientoOpen ? <FaChevronUp /> : <FaChevronDown />}
                </li>
                {isMantenimientoOpen && (
                    <ul className="ml-5 space-y-2 text-gray-600 ">
                        <li className="p-1 font-semibold text-[12px] hover:text-blue-500 cursor-pointer">Submenu2</li>
                        <li className="p-1 font-semibold text-[12px] hover:text-blue-500 cursor-pointer">Submenu1</li>
                    </ul>
                )}
                <hr className="border-gray-300" />
            </ul>



        </aside>
    );
}