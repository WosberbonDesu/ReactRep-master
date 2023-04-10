import React from 'react';
import SideBar from '../../components/SideBar/SideBar'
const Billing = () => {
    return (
        <>
            <SideBar/>
            <nav navbar-main
                 className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 mt-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start"
                 navbar-scroll="true">
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
                                aria-current="page">Billing
                            </li>
                        </ol>
                        <h6 className="font-bold capitalize dark:text-white">Billing</h6>
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
                <div className="flex flex-wrap -mx-3">
                    <div className="max-w-full px-3 lg:w-2/3 lg:flex-none">
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full max-w-full px-3 mb-4 xl:mb-0 xl:w-1/2 xl:flex-none">
                                <div
                                    className="relative flex flex-col min-w-0 break-words bg-transparent border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border">
                                    <div className="relative overflow-hidden rounded-2xl"
                                         style={{backgroundImage: "url('../../../assets/img/curved-images/curved14.jpg')"}}>
                                        <span
                                            className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 opacity-80"></span>
                                        <div className="relative z-10 flex-auto p-4">
                                            <i className="p-2 text-white fas fa-wifi"></i>
                                            <h5 className="pb-2 mt-6 mb-12 text-white dark:text-white">4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852</h5>
                                            <div className="flex">
                                                <div className="flex">
                                                    <div className="mr-6">
                                                        <p className="mb-0 leading-normal text-white text-sm opacity-80">Card
                                                            Holder</p>
                                                        <h6 className="mb-0 text-white dark:text-white">Jack
                                                            Peterson</h6>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 leading-normal text-white text-sm opacity-80">Expires</p>
                                                        <h6 className="mb-0 text-white dark:text-white">11/22</h6>
                                                    </div>
                                                </div>
                                                <div className="flex items-end justify-end w-1/5 ml-auto">
                                                    <img className="w-3/5 mt-2"
                                                         src="../../../assets/img/logos/mastercard.png" alt="logo"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full max-w-full px-3 xl:w-1/2 xl:flex-none">
                                <div className="flex flex-wrap -mx-3">
                                    <div className="w-full max-w-full px-3 md:w-1/2 md:flex-none">
                                        <div
                                            className="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                                            <div
                                                className="p-4 mx-6 mb-0 text-center border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                                                <div
                                                    className="w-16 h-16 text-center bg-center icon bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl rounded-xl">
                                                    <i className="relative text-white opacity-100 fas fa-landmark text-xl top-31/100"></i>
                                                </div>
                                            </div>
                                            <div className="flex-auto p-4 pt-0 text-center">
                                                <h6 className="mb-0 text-center dark:text-white">Salary</h6>
                                                <span className="leading-tight text-xs">Belong Interactive</span>
                                                <hr className="h-px my-4 bg-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent"/>
                                                <h5 className="mb-0 dark:text-white">+$2000</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full max-w-full px-3 mt-6 md:mt-0 md:w-1/2 md:flex-none">
                                        <div
                                            className="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                                            <div
                                                className="p-4 mx-6 mb-0 text-center border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                                                <div
                                                    className="w-16 h-16 text-center bg-center icon bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl rounded-xl">
                                                    <i className="relative text-white opacity-100 fab fa-paypal text-xl top-31/100"></i>
                                                </div>
                                            </div>
                                            <div className="flex-auto p-4 pt-0 text-center">
                                                <h6 className="mb-0 text-center dark:text-white">Paypal</h6>
                                                <span className="leading-tight text-xs">Freelance Payment</span>
                                                <hr className="h-px my-4 bg-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent"/>
                                                <h5 className="mb-0 dark:text-white">$455.00</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-full px-3 mb-4 lg:mb-0 lg:w-full lg:flex-none">
                                <div
                                    className="relative flex flex-col min-w-0 mt-6 break-words bg-white border-0 border-transparent border-solid dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                                    <div
                                        className="p-4 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                                        <div className="flex flex-wrap -mx-3">
                                            <div className="flex items-center flex-none w-1/2 max-w-full px-3">
                                                <h6 className="mb-0 dark:text-white">Payment Method</h6>
                                            </div>
                                            <div className="flex-none w-1/2 max-w-full px-3 text-right">
                                                <a className="inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all bg-transparent rounded-lg cursor-pointer leading-pro text-xs ease-soft-in shadow-soft-md bg-150 bg-gradient-to-tl from-gray-900 to-slate-800 dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 hover:shadow-soft-xs active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25"
                                                   href="javascript:;"> <i className="fas fa-plus"> </i>&nbsp;&nbsp;Add
                                                    New Card</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-auto p-4">
                                        <div className="flex flex-wrap -mx-3">
                                            <div className="max-w-full px-3 mb-6 md:mb-0 md:w-1/2 md:flex-none">
                                                <div
                                                    className="relative flex flex-row items-center flex-auto min-w-0 p-6 break-words bg-transparent border border-solid shadow-none rounded-xl border-slate-100 bg-clip-border dark:border-slate-700">
                                                    <img className="mb-0 mr-4 w-1/10"
                                                         src="../../../assets/img/logos/mastercard.png" alt="logo"/>
                                                    <h6 className="mb-0 dark:text-white">****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;7852</h6>
                                                    <i className="ml-auto cursor-pointer fas fa-pencil-alt text-slate-700"
                                                       data-target="tooltip_trigger"></i>
                                                    <div
                                                        className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                                        id="tooltip" role="tooltip" data-popper-placement="top">
                                                        Edit Card
                                                        <div
                                                            className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                                            data-popper-arrow></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="max-w-full px-3 md:w-1/2 md:flex-none">
                                                <div
                                                    className="relative flex flex-row items-center flex-auto min-w-0 p-6 break-words bg-transparent border border-solid shadow-none rounded-xl border-slate-100 bg-clip-border dark:border-slate-700">
                                                    <img className="mb-0 mr-4 w-1/10"
                                                         src="../../../assets/img/logos/visa.png" alt="logo"/>
                                                    <h6 className="mb-0 dark:text-white">****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;5248</h6>
                                                    <i className="ml-auto cursor-pointer fas fa-pencil-alt text-slate-700"
                                                       data-target="tooltip_trigger"></i>
                                                    <div
                                                        className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                                        id="tooltip" role="tooltip" data-popper-placement="top">
                                                        Edit Card
                                                        <div
                                                            className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                                            data-popper-arrow></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-full px-3 lg:w-1/3 lg:flex-none">
                        <div
                            className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 border-transparent border-solid dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="p-4 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                                <div className="flex flex-wrap -mx-3">
                                    <div className="flex items-center flex-none w-1/2 max-w-full px-3">
                                        <h6 className="mb-0 dark:text-white">Invoices</h6>
                                    </div>
                                    <div className="flex-none w-1/2 max-w-full px-3 text-right">
                                        <button
                                            className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointe leading-pro ease-soft-in text-xs bg-150 active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 border-fuchsia-500 text-fuchsia-500 hover:opacity-75">View
                                            All
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-auto p-4 pb-0">
                                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                                    <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl">
                                        <div className="flex flex-col">
                                            <h6 className="mb-1 font-semibold leading-normal text-sm text-slate-700 dark:text-white">March,
                                                01, 2020</h6>
                                            <span className="leading-tight text-xs">#MS-415646</span>
                                        </div>
                                        <div className="flex items-center leading-normal text-sm">
                                            $180
                                            <button
                                                className="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700 dark:text-white">
                                                <i className="mr-1 fas fa-file-pdf text-lg"></i> PDF</button>
                                        </div>
                                    </li>
                                    <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-xl text-inherit">
                                        <div className="flex flex-col">
                                            <h6 className="mb-1 font-semibold leading-normal text-sm text-slate-700 dark:text-white">February,
                                                10, 2021</h6>
                                            <span className="leading-tight text-xs">#RV-126749</span>
                                        </div>
                                        <div className="flex items-center leading-normal text-sm">
                                            $250
                                            <button
                                                className="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700 dark:text-white">
                                                <i className="mr-1 fas fa-file-pdf text-lg"></i> PDF</button>
                                        </div>
                                    </li>
                                    <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-xl text-inherit">
                                        <div className="flex flex-col">
                                            <h6 className="mb-1 font-semibold leading-normal text-sm text-slate-700 dark:text-white">April,
                                                05, 2020</h6>
                                            <span className="leading-tight text-xs">#FB-212562</span>
                                        </div>
                                        <div className="flex items-center leading-normal text-sm">
                                            $560
                                            <button
                                                className="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700 dark:text-white">
                                                <i className="mr-1 fas fa-file-pdf text-lg"></i> PDF</button>
                                        </div>
                                    </li>
                                    <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-xl text-inherit">
                                        <div className="flex flex-col">
                                            <h6 className="mb-1 font-semibold leading-normal text-sm text-slate-700 dark:text-white">June,
                                                25, 2019</h6>
                                            <span className="leading-tight text-xs">#QW-103578</span>
                                        </div>
                                        <div className="flex items-center leading-normal text-sm">
                                            $120
                                            <button
                                                className="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700 dark:text-white">
                                                <i className="mr-1 fas fa-file-pdf text-lg"></i> PDF</button>
                                        </div>
                                    </li>
                                    <li className="relative flex justify-between px-4 py-2 pl-0 border-0 rounded-b-inherit rounded-xl text-inherit">
                                        <div className="flex flex-col">
                                            <h6 className="mb-1 font-semibold leading-normal text-sm text-slate-700 dark:text-white">March,
                                                01, 2019</h6>
                                            <span className="leading-tight text-xs">#AR-803481</span>
                                        </div>
                                        <div className="flex items-center leading-normal text-sm">
                                            $300
                                            <button
                                                className="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700 dark:text-white">
                                                <i className="mr-1 fas fa-file-pdf text-lg"></i> PDF</button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3">
                    <div className="w-full max-w-full px-3 mt-6 md:w-7/12 md:flex-none">
                        <div
                            className="relative flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="p-6 px-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
                                <h6 className="mb-0 dark:text-white">Billing Information</h6>
                            </div>
                            <div className="flex-auto p-4 pt-6">
                                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                                    <li className="relative flex p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50 dark:bg-transparent">
                                        <div className="flex flex-col">
                                            <h6 className="mb-4 leading-normal text-sm dark:text-white">Oliver Liam</h6>
                                            <span className="mb-2 leading-tight text-xs">Company Name: <span
                                                className="font-semibold text-slate-700 dark:text-white sm:ml-2">Viking Burrito</span></span>
                                            <span className="mb-2 leading-tight text-xs">Email Address: <span
                                                className="font-semibold text-slate-700 dark:text-white sm:ml-2">oliver@burrito.com</span></span>
                                            <span className="leading-tight text-xs">VAT Number: <span
                                                className="font-semibold text-slate-700 dark:text-white sm:ml-2">FRB1235476</span></span>
                                        </div>
                                        <div className="ml-auto text-right">
                                            <a className="relative z-10 inline-block px-4 py-3 mb-0 font-bold text-center text-transparent uppercase align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 bg-gradient-to-tl from-red-600 to-rose-400 hover:scale-102 active:opacity-85 bg-x-25 bg-clip-text"
                                               href="javascript:;"><i
                                                className="mr-2 far fa-trash-alt bg-150 bg-gradient-to-tl from-red-600 to-rose-400 bg-x-25 bg-clip-text"></i>Delete</a>
                                            <a className="inline-block px-4 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700 dark:text-white"
                                               href="javascript:;"><i className="mr-2 fas fa-pencil-alt text-slate-700"
                                                                      aria-hidden="true"></i>Edit</a>
                                        </div>
                                    </li>
                                    <li className="relative flex p-6 mt-4 mb-2 border-0 rounded-xl bg-gray-50 dark:bg-transparent">
                                        <div className="flex flex-col">
                                            <h6 className="mb-4 leading-normal text-sm dark:text-white">Lucas
                                                Harper</h6>
                                            <span className="mb-2 leading-tight text-xs">Company Name: <span
                                                className="font-semibold text-slate-700 dark:text-white sm:ml-2">Stone Tech Zone</span></span>
                                            <span className="mb-2 leading-tight text-xs">Email Address: <span
                                                className="font-semibold text-slate-700 dark:text-white sm:ml-2">lucas@stone-tech.com</span></span>
                                            <span className="leading-tight text-xs">VAT Number: <span
                                                className="font-semibold text-slate-700 dark:text-white sm:ml-2">FRB1235476</span></span>
                                        </div>
                                        <div className="ml-auto text-right">
                                            <a className="relative z-10 inline-block px-4 py-3 mb-0 font-bold text-center text-transparent uppercase align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 bg-gradient-to-tl from-red-600 to-rose-400 hover:scale-102 active:opacity-85 bg-x-25 bg-clip-text"
                                               href="javascript:;"><i
                                                className="mr-2 far fa-trash-alt bg-150 bg-gradient-to-tl from-red-600 to-rose-400 bg-x-25 bg-clip-text"></i>Delete</a>
                                            <a className="inline-block px-4 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700 dark:text-white"
                                               href="javascript:;"><i className="mr-2 fas fa-pencil-alt text-slate-700"
                                                                      aria-hidden="true"></i>Edit</a>
                                        </div>
                                    </li>
                                    <li className="relative flex p-6 mt-4 mb-2 border-0 rounded-b-inherit rounded-xl bg-gray-50 dark:bg-transparent">
                                        <div className="flex flex-col">
                                            <h6 className="mb-4 leading-normal text-sm dark:text-white">Ethan James</h6>
                                            <span className="mb-2 leading-tight text-xs">Company Name: <span
                                                className="font-semibold text-slate-700 dark:text-white sm:ml-2">Fiber Notion</span></span>
                                            <span className="mb-2 leading-tight text-xs">Email Address: <span
                                                className="font-semibold text-slate-700 dark:text-white sm:ml-2">ethan@fiber.com</span></span>
                                            <span className="leading-tight text-xs">VAT Number: <span
                                                className="font-semibold text-slate-700 dark:text-white sm:ml-2">FRB1235476</span></span>
                                        </div>
                                        <div className="ml-auto text-right">
                                            <a className="relative z-10 inline-block px-4 py-3 mb-0 font-bold text-center text-transparent uppercase align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 bg-gradient-to-tl from-red-600 to-rose-400 hover:scale-102 active:opacity-85 bg-x-25 bg-clip-text"
                                               href="javascript:;"><i
                                                className="mr-2 far fa-trash-alt bg-150 bg-gradient-to-tl from-red-600 to-rose-400 bg-x-25 bg-clip-text"></i>Delete</a>
                                            <a className="inline-block px-4 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700 dark:text-white"
                                               href="javascript:;"><i className="mr-2 fas fa-pencil-alt text-slate-700"
                                                                      aria-hidden="true"></i>Edit</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-full px-3 mt-6 md:w-5/12 md:flex-none">
                        <div
                            className="relative flex flex-col h-full min-w-0 mb-6 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="p-6 px-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
                                <div className="flex flex-wrap -mx-3">
                                    <div className="max-w-full px-3 md:w-1/2 md:flex-none">
                                        <h6 className="mb-0 dark:text-white">Your Transactions</h6>
                                    </div>
                                    <div
                                        className="flex items-center justify-end max-w-full px-3 md:w-1/2 md:flex-none">
                                        <i className="mr-2 far fa-calendar-alt"></i>
                                        <small>23 - 30 March 2020</small>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-auto p-4 pt-6">
                                <h6 className="mb-4 font-bold leading-tight uppercase text-xs text-slate-500">Newest</h6>
                                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                                    <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl">
                                        <div className="flex items-center">
                                            <button
                                                className="leading-pro ease-soft-in text-xs bg-150 w-6 h-6 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-red-600 border-transparent bg-transparent text-center align-middle font-bold uppercase text-red-600 transition-all hover:opacity-75">
                                                <i className="fas fa-arrow-down text-3xs"></i></button>
                                            <div className="flex flex-col">
                                                <h6 className="mb-1 leading-normal text-sm text-slate-700 dark:text-white">Netflix</h6>
                                                <span
                                                    className="leading-tight text-xs">27 March 2020, at 12:30 PM</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <p className="relative z-10 inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-red-600 to-rose-400 text-sm bg-clip-text">-
                                                $ 2,500</p>
                                        </div>
                                    </li>
                                    <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 border-t-0 rounded-b-inherit text-inherit rounded-xl">
                                        <div className="flex items-center">
                                            <button
                                                className="leading-pro ease-soft-in text-xs bg-150 w-6 h-6 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-lime-500 border-transparent bg-transparent text-center align-middle font-bold uppercase text-lime-500 transition-all hover:opacity-75">
                                                <i className="fas fa-arrow-up text-3xs"></i></button>
                                            <div className="flex flex-col">
                                                <h6 className="mb-1 leading-normal text-sm text-slate-700 dark:text-white">Apple</h6>
                                                <span
                                                    className="leading-tight text-xs">27 March 2020, at 04:30 AM</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <p className="relative z-10 inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text">+
                                                $ 2,000</p>
                                        </div>
                                    </li>
                                </ul>
                                <h6 className="my-4 font-bold leading-tight uppercase text-xs text-slate-500">Yesterday</h6>
                                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                                    <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl">
                                        <div className="flex items-center">
                                            <button
                                                className="leading-pro ease-soft-in text-xs bg-150 w-6 h-6 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-lime-500 border-transparent bg-transparent text-center align-middle font-bold uppercase text-lime-500 transition-all hover:opacity-75">
                                                <i className="fas fa-arrow-up text-3xs"></i></button>
                                            <div className="flex flex-col">
                                                <h6 className="mb-1 leading-normal text-sm text-slate-700 dark:text-white">Stripe</h6>
                                                <span
                                                    className="leading-tight text-xs">26 March 2020, at 13:45 PM</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <p className="relative z-10 inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text">+
                                                $ 750</p>
                                        </div>
                                    </li>
                                    <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 border-t-0 text-inherit rounded-xl">
                                        <div className="flex items-center">
                                            <button
                                                className="leading-pro ease-soft-in text-xs bg-150 w-6 h-6 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-lime-500 border-transparent bg-transparent text-center align-middle font-bold uppercase text-lime-500 transition-all hover:opacity-75">
                                                <i className="fas fa-arrow-up text-3xs"></i></button>
                                            <div className="flex flex-col">
                                                <h6 className="mb-1 leading-normal text-sm text-slate-700 dark:text-white">HubSpot</h6>
                                                <span
                                                    className="leading-tight text-xs">26 March 2020, at 12:30 PM</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <p className="relative z-10 inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text">+
                                                $ 1,000</p>
                                        </div>
                                    </li>
                                    <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 border-t-0 text-inherit rounded-xl">
                                        <div className="flex items-center">
                                            <button
                                                className="leading-pro ease-soft-in text-xs bg-150 w-6 h-6 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-lime-500 border-transparent bg-transparent text-center align-middle font-bold uppercase text-lime-500 transition-all hover:opacity-75">
                                                <i className="fas fa-arrow-up text-3xs"></i></button>
                                            <div className="flex flex-col">
                                                <h6 className="mb-1 leading-normal text-sm text-slate-700 dark:text-white">Creative
                                                    Tim</h6>
                                                <span
                                                    className="leading-tight text-xs">26 March 2020, at 08:30 AM</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <p className="relative z-10 items-center inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text">+
                                                $ 2,500</p>
                                        </div>
                                    </li>
                                    <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 border-t-0 rounded-b-inherit text-inherit rounded-xl">
                                        <div className="flex items-center">
                                            <button
                                                className="leading-pro ease-soft-in text-xs bg-150 w-6 h-6 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-slate-700 border-transparent bg-transparent text-center align-middle font-bold uppercase text-slate-700 transition-all hover:opacity-75">
                                                <i className="fas fa-exclamation text-3xs"></i></button>
                                            <div className="flex flex-col">
                                                <h6 className="mb-1 leading-normal text-sm text-slate-700 dark:text-white">Webflow</h6>
                                                <span
                                                    className="leading-tight text-xs">26 March 2020, at 05:00 AM</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <p className="flex items-center m-0 font-semibold leading-normal text-sm text-slate-700">Pending</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Billing;