import React from 'react';
import Image from "next/image";
import profile from '../../assets/img/bruce-mars.jpg'
import SideBar from '../../components/SideBar/SideBar'
const Page = () => {
    return (
        <>
            <SideBar/>
            <nav navbar
                 className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 mt-0 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start"
                 navbar-scroll="flase">
                <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
                    <nav>

                        <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                            <li className="leading-normal text-sm breadcrumb-item">
                                <a className="text-slate-700 opacity-30 dark:text-white" href="javascript:;">
                                    {/*<svg width="12px" height="12px" className="mb-1" viewBox="0 0 45 40" version="1.1"*/}
                                    {/*     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">*/}
                                    {/*    <title>shop</title>*/}
                                    {/*    <g className="dark:fill-white" stroke="none" stroke-width="1" fill="none"*/}
                                    {/*       fill-rule="evenodd">*/}
                                    {/*        <g className="dark:fill-white"*/}
                                    {/*           transform="translate(-1716.000000, -439.000000)" fill="#252f40"*/}
                                    {/*           fill-rule="nonzero">*/}
                                    {/*            <g className="dark:fill-white"*/}
                                    {/*               transform="translate(1716.000000, 291.000000)">*/}
                                    {/*                <g className="dark:fill-white"*/}
                                    {/*                   transform="translate(0.000000, 148.000000)">*/}
                                    {/*                    <path*/}
                                    {/*                        d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z"></path>*/}
                                    {/*                    <path*/}
                                    {/*                        d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z"*/}
                                    {/*                    ></path>*/}
                                    {/*                </g>*/}
                                    {/*            </g>*/}
                                    {/*        </g>*/}
                                    {/*    </g>*/}
                                    {/*</svg>*/}
                                </a>
                            </li>
                            <li className="text-sm pl-2 leading-normal before:float-left before:pr-2 before:text-gray-600 before:content-['/']">
                                <a className="opacity-50 text-slate-700 dark:text-white" href="javascript:;">Pages</a>
                            </li>
                            <li className="text-sm pl-2 leading-normal before:float-left before:pr-2 before:text-gray-600 before:content-['/']">
                                <a className="opacity-50 text-slate-700 dark:text-white" href="javascript:;">Account</a>
                            </li>
                            <li className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-white dark:before:text-white"
                                aria-current="page">Settings
                            </li>
                        </ol>
                        <h6 className="font-bold capitalize dark:text-white">Settings</h6>
                    </nav>

                    <div className="flex items-center">
                        <a mini-sidenav-burger href="javascript:;"
                           className="hidden p-0 transition-all ease-nav-brand text-sm text-slate-500 xl:block"
                           aria-expanded="false">
                            <div className="w-4.5 overflow-hidden">
                                <i className="ease-soft mb-0.75 relative block h-0.5 translate-x-[5px] rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
                                <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
                                <i className="ease-soft relative block h-0.5 translate-x-[5px] rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
                            </div>
                        </a>
                    </div>

                    <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto"
                         id="navbar">
                        <div className="items-center hidden md:ml-auto md:pr-4">
                            <div
                                className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
                <span
                    className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                  <i className="fas fa-search" aria-hidden="true"></i>
                </span>
                                <input type="text"
                                       className="pl-9 text-sm focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                       placeholder="Type here..."/>
                            </div>
                        </div>
                        <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">

                            <li className="items-center hidden">
                                <a href="../../../pages/authentication/signin/illustration.html"
                                   className="block px-0 py-2 font-semibold transition-all ease-nav-brand text-sm text-slate-500 dark:text-white">
                                    <i className="fa fa-user sm:mr-1" aria-hidden="true"></i>
                                    <span className="hidden sm:inline">Sign In</span>
                                </a>
                            </li>
                            <li className="flex items-center pl-4 xl:hidden">
                                <a sidenav-trigger
                                   className="block p-0 transition-all ease-nav-brand text-sm text-slate-500 dark:text-white"
                                   href="javascript:;" aria-expanded="false">
                                    <div className="w-4.5 overflow-hidden">
                                        <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
                                        <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
                                        <i className="ease-soft relative block h-0.5 rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
                                    </div>
                                </a>
                            </li>
                            <li className="items-center hidden px-4">
                                <a href="javascript:;"
                                   className="p-0 transition-all text-sm ease-nav-brand text-slate-500 dark:text-white">
                                    <i fixed-plugin-button-nav className="cursor-pointer fa fa-cog"
                                       aria-hidden="true"></i>

                                </a>
                            </li>



                            <li className="relative items-center hidden pr-2">
                                <p className="hidden transform-dropdown-show"></p>
                                <a dropdown-trigger href="javascript:;"
                                   className="block p-0 transition-all text-sm ease-nav-brand text-slate-500 dark:text-white"
                                   aria-expanded="false">
                                    <i className="cursor-pointer fa fa-bell" aria-hidden="true"></i>
                                </a>

                                <ul dropdown-menu
                                    className="text-sm transform-dropdown before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-soft-3xl duration-250 min-w-44 before:sm:right-7 before:text-5.5 dark:bg-gray-950 pointer-events-none absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:right-2 before:left-auto before:top-0 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-['\f0d8'] sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer">

                                    <li className="relative mb-2">
                                        <a className="group ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-200/80 lg:transition-colors"
                                           href="javascript:;">
                                            <div className="flex py-1">
                                                <div className="my-auto">
                                                    <img src="../../../assets/img/team-2.jpg"
                                                         className="inline-flex items-center justify-center mr-4 text-white text-sm h-9 w-9 max-w-none rounded-xl"/>
                                                </div>
                                                <div className="flex flex-col justify-center">
                                                    <h6 className="mb-1 font-normal leading-normal text-sm group-hover:text-slate-700 dark:text-white">
                                                        <span className="font-semibold">New message</span> from Laur
                                                    </h6>
                                                    <p className="mb-0 leading-tight text-xs text-slate-400 group-hover:text-slate-700 dark:text-white dark:opacity-80">
                                                        <i className="mr-1 fa fa-clock" aria-hidden="true"></i>
                                                        13 minutes ago
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>

                                    <li className="relative mb-2">
                                        <a className="group ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-200/80"
                                           href="javascript:;">
                                            <div className="flex py-1">
                                                <div className="my-auto">
                                                    <img src="../../../assets/img/small-logos/logo-spotify.svg"
                                                         className="inline-flex items-center justify-center mr-4 text-white text-sm bg-gradient-to-tl from-gray-900 to-slate-800 dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 h-9 w-9 max-w-none rounded-xl"/>
                                                </div>
                                                <div className="flex flex-col justify-center">
                                                    <h6 className="mb-1 font-normal leading-normal text-sm group-hover:text-slate-700 dark:text-white">
                                                        <span className="font-semibold">New album</span> by Travis Scott
                                                    </h6>
                                                    <p className="mb-0 leading-tight text-xs text-slate-400 group-hover:text-slate-700 dark:text-white dark:opacity-80">
                                                        <i className="mr-1 fa fa-clock" aria-hidden="true"></i>
                                                        1 day
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>

                                    <li className="relative">
                                        <a className="group ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-200/80"
                                           href="javascript:;">
                                            <div className="flex py-1">
                                                <div
                                                    className="inline-flex items-center justify-center my-auto mr-4 text-white transition-all duration-200 ease-nav-brand text-sm bg-gradient-to-tl from-slate-600 to-slate-300 h-9 w-9 rounded-xl">
                                                    {/*<svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1"*/}
                                                    {/*     xmlns="http://www.w3.org/2000/svg"*/}
                                                    {/*     xmlns:xlink="http://www.w3.org/1999/xlink">*/}
                                                    {/*    <title>credit-card</title>*/}
                                                    {/*    <g stroke="none" stroke-width="1" fill="none"*/}
                                                    {/*       fill-rule="evenodd">*/}
                                                    {/*        <g transform="translate(-2169.000000, -745.000000)"*/}
                                                    {/*           fill="#FFFFFF" fill-rule="nonzero">*/}
                                                    {/*            <g transform="translate(1716.000000, 291.000000)">*/}
                                                    {/*                <g transform="translate(453.000000, 454.000000)">*/}
                                                    {/*                    <path className="color-background"*/}
                                                    {/*                          d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"*/}
                                                    {/*                          opacity="0.593633743"></path>*/}
                                                    {/*                    <path className="color-background"*/}
                                                    {/*                          d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>*/}
                                                    {/*                </g>*/}
                                                    {/*            </g>*/}
                                                    {/*        </g>*/}
                                                    {/*    </g>*/}
                                                    {/*</svg>*/}
                                                </div>
                                                <div className="flex flex-col justify-center">
                                                    <h6 className="mb-1 font-normal leading-normal text-sm group-hover:text-slate-700 dark:text-white">Payment
                                                        successfully completed</h6>
                                                    <p className="mb-0 leading-tight text-xs text-slate-400 group-hover:text-slate-700 dark:text-white dark:opacity-80">
                                                        <i className="mr-1 fa fa-clock" aria-hidden="true"></i>
                                                        2 days
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="w-full px-6 mx-auto mt-6">
                <div className="flex flex-wrap items-center -mx-3">
                    <div className="w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-8/12 lg:w-4/12">
                        <div className="relative right-0">
                            <ul nav-pills
                                className="relative flex flex-wrap p-1 mb-0 list-none dark:shadow-soft-dark-xl dark:bg-gray-950 rounded-xl bg-gray-50"
                                role="tablist">
                                <li className="z-30 flex-auto text-center">
                                    <a nav-link active
                                       className="block w-full py-1 transition-colors border-0 rounded-lg ease-soft-in-out bg-inherit bg-none dark:text-white"
                                       href="javascript:;" role="tab" aria-selected="true"> Messages </a>
                                </li>
                                <li className="z-30 flex-auto text-center">
                                    <a nav-link
                                       className="block w-full py-1 transition-colors border-0 rounded-lg ease-soft-in-out bg-inherit bg-none dark:text-white"
                                       href="javascript:;" role="tab" aria-selected="false"> Social </a>
                                </li>
                                <li className="z-30 flex-auto text-center">
                                    <a nav-link
                                       className="block w-full py-1 transition-colors border-0 rounded-lg ease-soft-in-out bg-inherit bg-none dark:text-white"
                                       href="javascript:;" role="tab" aria-selected="false"> Notifications </a>
                                </li>
                                <li className="z-30 flex-auto text-center">
                                    <a nav-link
                                       className="block w-full py-1 transition-colors border-0 rounded-lg ease-soft-in-out bg-inherit bg-none dark:text-white"
                                       href="javascript:;" role="tab" aria-selected="false"> Backup </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full p-6 py-4 mx-auto my-4">
                <div className="flex flex-wrap mb-12 -mx-3">
                    <div className="w-full max-w-full px-3 lg:flex-0 shrink-0 lg:w-3/12">
                        <div
                            className="sticky flex flex-col min-w-0 break-words bg-white border-0 top-1/100 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                            <ul className="flex flex-col flex-wrap p-4 mb-0 list-none rounded-xl">
                                <li>
                                    <a href="#profile"
                                       className="block px-4 py-2 transition-colors rounded-lg ease-soft-in-out text-slate-500 hover:bg-gray-200">
                                        <div className="inline-block mr-2 text-black fill-current h-4 w-4 stroke-none">
                                            {/*<svg className="mb-1 text-dark" width="16px" height="16px"*/}
                                            {/*     viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg"*/}
                                            {/*     xmlns:xlink="http://www.w3.org/1999/xlink">*/}
                                            {/*    <title>spaceship</title>*/}
                                            {/*    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">*/}
                                            {/*        <g transform="translate(-1720.000000, -592.000000)" fill="#FFFFFF"*/}
                                            {/*           fill-rule="nonzero">*/}
                                            {/*            <g transform="translate(1716.000000, 291.000000)">*/}
                                            {/*                <g transform="translate(4.000000, 301.000000)">*/}
                                            {/*                    <path*/}
                                            {/*                        className="fill-slate-800"*/}
                                            {/*                        d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"*/}
                                            {/*                    ></path>*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"></path>*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z"*/}
                                            {/*                          opacity="0.598539807"></path>*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z"*/}
                                            {/*                          opacity="0.598539807"></path>*/}
                                            {/*                </g>*/}
                                            {/*            </g>*/}
                                            {/*        </g>*/}
                                            {/*    </g>*/}
                                            {/*</svg>*/}
                                        </div>
                                        <span className="leading-normal text-sm dark:text-white">Profile</span>
                                    </a>
                                </li>
                                <li className="pt-2">
                                    <a href="#basic-info"
                                       className="block px-4 py-2 transition-colors rounded-lg ease-soft-in-out text-slate-500 hover:bg-gray-200">
                                        <div className="inline-block mr-2 text-black fill-current h-4 w-4 stroke-none">
                                            {/*<svg className="mb-1 text-dark" width="16px" height="16px"*/}
                                            {/*     viewBox="0 0 40 44" version="1.1" xmlns="http://www.w3.org/2000/svg"*/}
                                            {/*     xmlns:xlink="http://www.w3.org/1999/xlink">*/}
                                            {/*    <title>document</title>*/}
                                            {/*    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">*/}
                                            {/*        <g transform="translate(-1870.000000, -591.000000)" fill="#FFFFFF"*/}
                                            {/*           fill-rule="nonzero">*/}
                                            {/*            <g transform="translate(1716.000000, 291.000000)">*/}
                                            {/*                <g transform="translate(154.000000, 300.000000)">*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"*/}
                                            {/*                          opacity="0.603585379"></path>*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"></path>*/}
                                            {/*                </g>*/}
                                            {/*            </g>*/}
                                            {/*        </g>*/}
                                            {/*    </g>*/}
                                            {/*</svg>*/}
                                        </div>
                                        <span className="leading-normal text-sm dark:text-white">Basic Info</span>
                                    </a>
                                </li>
                                <li className="pt-2">
                                    <a href="#password"
                                       className="block px-4 py-2 transition-colors rounded-lg ease-soft-in-out text-slate-500 hover:bg-gray-200">
                                        <div className="inline-block mr-2 text-black fill-current h-4 w-4 stroke-none">
                                            {/*<svg className="mb-1 text-dark" width="16px" height="16px"*/}
                                            {/*     viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg"*/}
                                            {/*     xmlns:xlink="http://www.w3.org/1999/xlink">*/}
                                            {/*    <title>box-3d-50</title>*/}
                                            {/*    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">*/}
                                            {/*        <g transform="translate(-2319.000000, -291.000000)" fill="#FFFFFF"*/}
                                            {/*           fill-rule="nonzero">*/}
                                            {/*            <g transform="translate(1716.000000, 291.000000)">*/}
                                            {/*                <g transform="translate(603.000000, 0.000000)">*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z"></path>*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z"*/}
                                            {/*                          opacity="0.7"></path>*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z"*/}
                                            {/*                          opacity="0.7"></path>*/}
                                            {/*                </g>*/}
                                            {/*            </g>*/}
                                            {/*        </g>*/}
                                            {/*    </g>*/}
                                            {/*</svg>*/}
                                        </div>
                                        <span className="leading-normal text-sm dark:text-white">Change Password</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full max-w-full px-3 lg:flex-0 shrink-0 lg:w-9/12">
                        <div
                            className="relative flex flex-col flex-auto min-w-0 p-4 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border"
                            id="profile">
                            <div className="flex flex-wrap items-center justify-center -mx-3">
                                <div className="w-4/12 max-w-full px-3 flex-0 sm:w-auto">
                                    <div
                                        className="w-19 h-19 text-base ease-soft-in-out relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
                                        <Image className="w-full shadow-soft-sm rounded-xl"
                                             src={profile} alt="bruce"/>
                                    </div>
                                </div>
                                <div className="w-8/12 max-w-full px-3 my-auto flex-0 sm:w-auto">
                                    <div className="h-full">
                                        <h5 className="mb-1 font-bold dark:text-white">Alec Thompson</h5>
                                        <p className="mb-0 font-semibold leading-normal text-sm">CEO / Co-Founder</p>
                                    </div>
                                </div>
                                <div
                                    className="flex max-w-full px-3 mt-4 sm:flex-0 shrink-0 sm:mt-0 sm:ml-auto sm:w-auto">
                                    <label profile-visibility-toggle-label htmlFor="profile-visibility-toggle"
                                           className="inline-block mb-0 ml-1 font-normal cursor-pointer text-sm text-slate-700 dark:text-white/80">
                                        <small>Switch to invisible</small>
                                    </label>
                                    <div className="min-h-6 ml-2 mb-0.5 block pl-12">
                                        <input checked profile-visibility-toggle
                                               className="rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.3 h-5 mt-0.5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                               type="checkbox"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="relative flex flex-col min-w-0 mt-6 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border"
                            id="basic-info">
                            <div className="p-6 mb-0 rounded-t-2xl">
                                <h5 className="dark:text-white">Basic Info</h5>
                            </div>
                            <div className="flex-auto p-6 pt-0">
                                <div className="flex flex-wrap -mx-3">
                                    <div className="w-6/12 max-w-full px-3 flex-0">
                                        <label className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                               htmlFor="First Name">First Name</label>
                                        <div className="relative flex flex-wrap items-stretch w-full rounded-lg">
                                            <input type="text" name="First Name" placeholder="Alec"
                                                   className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"/>
                                        </div>
                                    </div>
                                    <div className="w-6/12 max-w-full px-3 flex-0">
                                        <label className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                               htmlFor="Last Name">Last Name</label>
                                        <div className="relative flex flex-wrap items-stretch w-full rounded-lg">
                                            <input type="text" name="Last Name" placeholder="Thompson"
                                                   className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3">
                                    <div className="w-6/12 max-w-full px-3 flex-0 sm:w-4/12">
                                        <label
                                            className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                            htmlFor="gender">I'm</label>
                                        <select choice name="choices-gender" id="choices-gender">
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                    <div className="w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-8/12">
                                        <div className="flex flex-wrap -mx-3">
                                            <div className="w-5/12 max-w-full px-3 flex-0">
                                                <label
                                                    className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                                    htmlFor="choices-month">Birth Date</label>
                                                <select choice name="choices-month" id="choices-month"></select>
                                            </div>
                                            <div className="w-4/12 max-w-full px-3 flex-0">
                                                <label
                                                    className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                                    htmlFor="choices-day">&nbsp;</label>
                                                <select choice name="choices-day" id="choices-day"></select>
                                            </div>
                                            <div className="w-3/12 max-w-full px-3 flex-0">
                                                <label
                                                    className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                                    htmlFor="choices-year">&nbsp;</label>
                                                <select choice name="choices-year" id="choices-year"></select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3">
                                    <div className="w-6/12 max-w-full px-3 flex-0">
                                        <label
                                            className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                            htmlFor="Email">Email</label>
                                        <div className="relative flex flex-wrap items-stretch w-full rounded-lg">
                                            <input type="email" name="Email" placeholder="example@email.com"
                                                   className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"/>
                                        </div>
                                    </div>
                                    <div className="w-6/12 max-w-full px-3 flex-0">
                                        <label
                                            className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                            htmlFor="Confirmation Email">Confirmation Email</label>
                                        <div className="relative flex flex-wrap items-stretch w-full rounded-lg">
                                            <input type="email" name="Confirmation Email"
                                                   placeholder="example@email.com"
                                                   className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3">
                                    <div className="w-6/12 max-w-full px-3 flex-0">
                                        <label
                                            className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                            htmlFor="Your location">Your location</label>
                                        <div className="relative flex flex-wrap items-stretch w-full rounded-lg">
                                            <input type="email" name="Your location" placeholder="Sydney, A"
                                                   className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"/>
                                        </div>
                                    </div>
                                    <div className="w-6/12 max-w-full px-3 flex-0">
                                        <label
                                            className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                            htmlFor="Phone Number">Phone Number</label>
                                        <div className="relative flex flex-wrap items-stretch w-full rounded-lg">
                                            <input type="tel" name="Phone Number" placeholder="+40 735 631 620"
                                                   className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3">
                                    <div className="self-center w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
                                        <label
                                            className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                            htmlFor="Language">Language</label>
                                        <select choice name="Language" id="choices-language">
                                            <option value="English">English</option>
                                            <option value="French">French</option>
                                            <option value="Spanish">Spanish</option>
                                        </select>
                                    </div>
                                    <div className="w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
                                        <label
                                            className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                            htmlFor="Skills">Skills</label>
                                        <input choice name="Skills" id="choices-skills" type="text"
                                               value="vuejs, angular, react" placeholder="Enter something"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="relative flex flex-col min-w-0 mt-6 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border"
                            id="password">
                            <div className="p-6 mb-0 rounded-t-2xl">
                                <h5 className="dark:text-white">Change Password</h5>
                            </div>
                            <div className="flex-auto p-6 pt-0">
                                <label
                                    className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                    htmlFor="Current password">Current password</label>
                                <div className="mb-4">
                                    <input type="password" name="Current password" placeholder="Current password"
                                           className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"/>
                                </div>
                                <label
                                    className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                    htmlFor="New password">New password</label>
                                <div className="mb-4">
                                    <input type="password" name="New password" placeholder="New password"
                                           className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"/>
                                </div>
                                <label
                                    className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                    htmlFor="Confirm new password">Confirm new password</label>
                                <div className="mb-4">
                                    <input type="password" name="Confirm new password" placeholder="Confirm password"
                                           className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"/>
                                </div>
                                <h5 className="mt-12 dark:text-white">Password requirements</h5>
                                <p className="mb-2 text-slate-500 dark:text-white/60">Please follow this guide for a
                                    strong password:</p>
                                <ul className="float-left pl-6 mb-0 list-disc text-slate-500">
                                    <li>
                                        <span className="leading-normal text-sm">One special characters</span>
                                    </li>
                                    <li>
                                        <span className="leading-normal text-sm">Min 6 characters</span>
                                    </li>
                                    <li>
                                        <span className="leading-normal text-sm">One number (2 are recommended)</span>
                                    </li>
                                    <li>
                                        <span className="leading-normal text-sm">Change it often</span>
                                    </li>
                                </ul>
                                <button href="javascript:;"
                                        className="inline-block float-right px-8 py-2 mt-16 mb-0 font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-gray-900 to-slate-800 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25">Update
                                    Password
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <footer className="pt-4">
                    <div className="w-full px-6 mx-auto">
                        <div className="flex flex-wrap items-center -mx-3 lg:justify-between">
                            <div className="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
                                <div
                                    className="leading-normal text-center copyright text-sm text-slate-500 lg:text-left">
                                    ©
                                    <script>
                                        document.write(new Date().getFullYear() + ",");
                                    </script>
                                    made with <i className="fa fa-heart"></i> by
                                    <a href="https://www.creative-tim.com"
                                       className="font-semibold text-slate-700 dark:text-white" target="_blank">Creative
                                        Tim</a>
                                    for a better web.
                                </div>
                            </div>
                            <div className="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
                                <ul className="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
                                    <li className="nav-item">
                                        <a href="https://www.creative-tim.com"
                                           className="block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-sm text-slate-500"
                                           target="_blank">Creative Tim</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://www.creative-tim.com/presentation"
                                           className="block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-sm text-slate-500"
                                           target="_blank">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://creative-tim.com/blog"
                                           className="block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-sm text-slate-500"
                                           target="_blank">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://www.creative-tim.com/license"
                                           className="block px-4 pt-0 pb-1 pr-0 font-normal transition-colors ease-soft-in-out text-sm text-slate-500"
                                           target="_blank">License</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Page;