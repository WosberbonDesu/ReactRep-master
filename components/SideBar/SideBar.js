
import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../assets/img/logos/hemenofis.png'
import dashboard from '../../assets/img/icons/dashboard.svg'
import member from '../../assets/img/icons/people.svg'
import pages from '../../assets/img/icons/pages.svg'
import billing from '../../assets/img/icons/billing.svg'
import auth from '../../assets/img/icons/auth.svg'
import { Open_Sans } from 'next/font/google'

const inter = Open_Sans({ subsets: ['latin'] })

function SideBar(props) {
    return (
        <aside mini="false"
               className={inter.className + " fixed inset-y-0 left-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto transition-all duration-200 -translate-x-full bg-white border-0 shadow-none xl:ml-4 dark:bg-gray-950 ease-soft-in-out z-990 max-w-64 rounded-2xl xl:translate-x-0 xl:bg-transparent"}
               id="sidenav-main">


            <div className="h-20">
                <Link className="block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700 dark:text-white" href="/">
                    <Image
                        className="inline-block h-full max-w-full transition-all duration-200 ease-soft-in-out  dark:hidden"
                        src={logo}
                        alt="Picture of the author"

                    />
                    <span className="ml-1 font-semibold transition-all duration-200 ease-soft-in-out"></span>
                </Link>
            </div>

            <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"/>

            <div className="items-center block w-full h-auto grow basis-full" id="sidenav-collapse-main">


                <ul className="flex flex-col pl-0 mb-0 list-none">
                    {/*<li className="mt-0.5 w-full">*/}
                    {/*    <Link active_primary collapse_trigger="primary" href="/"*/}
                    {/*       className="after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out text-sm py-2.7 active xl:shadow-soft-xl my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-all after:ml-auto after:inline-block after:rotate-180 after:font-bold after:text-slate-800 after:antialiased after:transition-all after:duration-200  dark:text-white dark:opacity-80"*/}
                    {/*       aria-expanded="true">*/}
                    {/*        <div*/}
                    {/*            className="stroke-none shadow-soft-sm bg-gradient-to-tl from-purple-700 to-pink-500 mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current p-2.5 text-center text-black">*/}
                    {/*            <Image src={pages} alt=""/>*/}
                    {/*        </div>*/}
                    {/*        <span*/}
                    {/*            className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft text-slate-700">Pages</span>*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
                    <li className="mt-0.5 w-full">
                        <Link active_primary collapse_trigger="primary" href="/member-management"
                              className="after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out text-sm py-2.7 active xl:shadow-soft-xl my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-all after:ml-auto after:inline-block after:rotate-180 after:font-bold after:text-slate-800 after:antialiased after:transition-all after:duration-200  dark:text-white dark:opacity-80"
                              aria-expanded="false">
                            <div
                                className="stroke-none shadow-soft-sm bg-gradient-to-tl from-purple-700 to-pink-500 mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current p-2.5 text-center text-black">
                                <Image src={member}/>
                            </div>
                            <span
                                className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft text-slate-700">Kurumsal</span>
                        </Link>
                    </li>
                    <li className="mt-0.5 w-full">
                        <Link active_primary collapse_trigger="primary" href="/new-user"
                              className="after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out text-sm py-2.7 active xl:shadow-soft-xl my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-all after:ml-auto after:inline-block after:rotate-180 after:font-bold after:text-slate-800 after:antialiased after:transition-all after:duration-200  dark:text-white dark:opacity-80"
                              aria-expanded="true">
                            <div
                                className="stroke-none shadow-soft-sm bg-gradient-to-tl from-purple-700 to-pink-500 mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current p-2.5 text-center text-black">
                                <Image src={member}/>
                            </div>
                            <span
                                className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft text-slate-700">Üye Yönetimi</span>
                                
                        </Link>
                    </li>
                    <li className="mt-0.5 w-full">
                        <Link active_primary collapse_trigger="primary" href="/member-management"
                              className="after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out text-sm py-2.7 active xl:shadow-soft-xl my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-all after:ml-auto after:inline-block after:rotate-180 after:font-bold after:text-slate-800 after:antialiased after:transition-all after:duration-200  dark:text-white dark:opacity-80"
                              aria-expanded="true">
                            <div
                                className="stroke-none shadow-soft-sm bg-gradient-to-tl from-purple-700 to-pink-500 mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current p-2.5 text-center text-black">
                                <Image src={member}/>
                            </div>
                            <span
                                className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft text-slate-700">Hizmet Yönetimi</span>
                        </Link>
                    </li>
                    <li className="mt-0.5 w-full">
                        <Link active_primary collapse_trigger="primary" href="/spaces"
                              className="after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out text-sm py-2.7 active xl:shadow-soft-xl my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-all after:ml-auto after:inline-block after:rotate-180 after:font-bold after:text-slate-800 after:antialiased after:transition-all after:duration-200  dark:text-white dark:opacity-80"
                              aria-expanded="true">
                            <div
                                className="stroke-none shadow-soft-sm bg-gradient-to-tl from-purple-700 to-pink-500 mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current p-2.5 text-center text-black">
                                <Image src={pages} alt=""/>
                            </div>
                            <span
                                className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft text-slate-700">Ürün Yönetimi</span>
                        </Link>
                    </li>
                    <li className="mt-0.5 w-full">
                        <Link active_primary collapse_trigger="primary" href="/billing"
                           className="after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out text-sm py-2.7 active xl:shadow-soft-xl my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-all after:ml-auto after:inline-block after:rotate-180 after:font-bold after:text-slate-800 after:antialiased after:transition-all after:duration-200  dark:text-white dark:opacity-80"
                           aria-expanded="true">
                            <div
                                className="stroke-none shadow-soft-sm bg-gradient-to-tl from-purple-700 to-pink-500 mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current p-2.5 text-center text-black">
                                <Image src={billing}/>
                            </div>
                            <span
                                className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft text-slate-700">Kargo Yönetimi</span>
                        </Link>
                    </li>
                    <li className="mt-0.5 w-full">
                        <Link active_primary collapse_trigger="primary" href="/calendar"
                           className="after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out text-sm py-2.7 active xl:shadow-soft-xl my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-all after:ml-auto after:inline-block after:rotate-180 after:font-bold after:text-slate-800 after:antialiased after:transition-all after:duration-200  dark:text-white dark:opacity-80"
                           aria-expanded="true">
                            <div className="stroke-none shadow-soft-sm bg-gradient-to-tl from-purple-700 to-pink-500 mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current p-2.5 text-center text-black">
                                <Image src={dashboard}/>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft text-slate-700">Rapor Yönetimi</span>
                        </Link>
                    </li>
                    <li className="mt-0.5 w-full">
                        <Link active_primary collapse_trigger="primary" href="/payment"
                           className="after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out text-sm py-2.7 active xl:shadow-soft-xl my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-all after:ml-auto after:inline-block after:rotate-180 after:font-bold after:text-slate-800 after:antialiased after:transition-all after:duration-200  dark:text-white dark:opacity-80"
                           aria-expanded="true">
                            <div className="stroke-none shadow-soft-sm bg-gradient-to-tl from-purple-700 to-pink-500 mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current p-2.5 text-center text-black">
                                <Image src={billing}/>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft text-slate-700">Rezervasyon Yönetimi</span>
                        </Link>
                    </li>
                    <li className="mt-0.5 w-full">
                        <Link active_primary collapse_trigger="primary" href="/analytics"
                              className="after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out text-sm py-2.7 active xl:shadow-soft-xl my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-all after:ml-auto after:inline-block after:rotate-180 after:font-bold after:text-slate-800 after:antialiased after:transition-all after:duration-200  dark:text-white dark:opacity-80"
                              aria-expanded="true">
                            <div className="stroke-none shadow-soft-sm bg-gradient-to-tl from-purple-700 to-pink-500 mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current p-2.5 text-center text-black">
                               <Image src={auth}/>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft text-slate-700">Pazarlama</span>
                        </Link>
                    </li>
                    <li className="mt-0.5 w-full">
                        <Link active_primary collapse_trigger="primary" href="/analytics"
                              className="after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out text-sm py-2.7 active xl:shadow-soft-xl my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-all after:ml-auto after:inline-block after:rotate-180 after:font-bold after:text-slate-800 after:antialiased after:transition-all after:duration-200  dark:text-white dark:opacity-80"
                              aria-expanded="true">
                            <div className="stroke-none shadow-soft-sm bg-gradient-to-tl from-purple-700 to-pink-500 mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current p-2.5 text-center text-black">
                               <Image src={auth}/>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft text-slate-700">Entegrasyon Yönetimi</span>
                        </Link>
                    </li>
                    <li className="mt-0.5 w-full">
                        <Link active_primary collapse_trigger="primary" href="/analytics"
                              className="after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out text-sm py-2.7 active xl:shadow-soft-xl my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-all after:ml-auto after:inline-block after:rotate-180 after:font-bold after:text-slate-800 after:antialiased after:transition-all after:duration-200  dark:text-white dark:opacity-80"
                              aria-expanded="true">
                            <div className="stroke-none shadow-soft-sm bg-gradient-to-tl from-purple-700 to-pink-500 mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current p-2.5 text-center text-black">
                               <Image src={auth}/>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft text-slate-700">İletişim</span>
                        </Link>
                    </li>
                </ul>
            </div>

            {/*<div className="pt-4 mx-4 mt-4">*/}

            {/*    <p className="invisible hidden text-red-600 text-orange after:bg-gradient-to-tl after:from-gray-900 after:to-slate-800 after:from-blue-600 after:to-cyan-400 after:from-red-500 after:to-yellow-400 after:from-green-600 after:to-lime-400 after:from-red-600 after:to-rose-400 after:from-slate-600 after:to-slate-300 text-lime-500 text-cyan-500"></p>*/}
            {/*    <div sidenav-card*/}
            {/*         className="after:opacity-65 after:bg-gradient-to-tl after:from-slate-600 after:to-slate-300 relative flex min-w-0 flex-col items-center break-words rounded-2xl border-0 border-solid border-blue-900 bg-white bg-clip-border shadow-none after:absolute after:top-0 after:bottom-0 after:left-0 after:z-10 after:block after:h-full after:w-full after:rounded-2xl after:content-['']">*/}
            {/*        <div className="absolute w-full h-full bg-center bg-cover mb-7 rounded-2xl"*/}
            {/*             style="background-image: url('../assets/img/curved-images/white-curved.jpg')"></div>*/}
            {/*        <div className="relative z-20 flex-auto w-full p-4 text-left text-white">*/}
            {/*            <div*/}
            {/*                className="flex items-center justify-center w-8 h-8 mb-4 text-center bg-white bg-center rounded-lg icon shadow-soft-2xl">*/}
            {/*                <i sidenav-card-icon*/}
            {/*                   className="top-0 z-10 text-lg leading-none text-transparent ni ni-diamond bg-gradient-to-tl from-slate-600 to-slate-300 bg-clip-text opacity-80"*/}
            {/*                   aria-hidden="true"></i>*/}
            {/*            </div>*/}
            {/*            <div className="transition-all duration-200 ease-nav-brand">*/}
            {/*                <h6 className="mb-0 text-white">Need help?</h6>*/}
            {/*                <p className="mt-0 mb-4 text-xs font-semibold leading-tight">Please check our docs</p>*/}
            {/*                <a href="https://www.creative-tim.com/learning-lab/tailwind/html/quick-start/soft-ui-dashboard/"*/}
            {/*                   target="_blank"*/}
            {/*                   className="inline-block w-full px-8 py-2 mb-0 text-xs font-bold text-center text-black uppercase transition-all ease-in bg-white border-0 border-white rounded-lg shadow-soft-md bg-150 leading-pro hover:shadow-soft-2xl hover:scale-102">Documentation</a>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</div>*/}
            
        </aside>

    );
}

export default SideBar;