import React from 'react';
import SideBar from '../../components/SideBar/SideBar'

const Analytics = () => {
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
                            <li className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-white dark:before:text-white"
                                aria-current="page">Analytics
                            </li>
                        </ol>
                        <h6 className="mb-0 font-bold capitalize dark:text-white">Analytics</h6>
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
                        <div className="flex items-center md:ml-auto md:pr-4">
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

                            <li className="flex items-center">
                                <a href="../../pages/authentication/signin/illustration.html"
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
                            <li className="flex items-center px-4">
                                <a href="javascript:;"
                                   className="p-0 transition-all text-sm ease-nav-brand text-slate-500 dark:text-white">
                                    <i fixed-plugin-button-nav className="cursor-pointer fa fa-cog"
                                       aria-hidden="true"></i>

                                </a>
                            </li>



                            <li className="relative flex items-center pr-2">
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
                                                    <img src="../../assets/img/team-2.jpg"
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
                                                    <img src="../../assets/img/small-logos/logo-spotify.svg"
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

            <div className="w-full p-6 mx-auto">

                <div className="flex flex-wrap -mx-3">
                    <div className="flex w-full max-w-full px-3 ml-auto flex-0 lg:w-6/12">
                        <a href="javascript:;"
                           className="inline-block px-6 py-3 mb-4 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer text-slate-400 hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft active:opacity-85 active:shadow-soft-xs border-slate-400 hover:border-slate-400 hover:bg-transparent hover:opacity-75 active:border-slate-400 active:bg-slate-400 active:text-black hover:active:bg-transparent hover:active:text-slate-400 hover:active:shadow-none">
                            <span>Export</span>
                            <span className="ml-2">
                <i className="ni leading-none ni-folder-17"></i>
              </span>
                        </a>
                        <div className="relative ml-4">
                            <button type="button"
                                    className="after:inline-block after:ml-1 after:content-[''] after:align-[.255em] after:border-3 after:border-t-white after:border-solid after:border-b-0 after:border-transparent after:text-white inline-block px-6 py-3 mb-4 font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-gray-900 to-slate-800 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                                    dropdown-trigger aria-expanded="false">
                                Today
                            </button>
                            <p className="hidden transform-dropdown-show"></p>
                            <ul dropdown-menu
                                className="dark:shadow-soft-dark-xl z-100 dark:bg-gray-950 text-sm top-1 lg:shadow-soft-3xl duration-250 before:duration-350 before:font-awesome before:ease-soft min-w-44 before:text-5.5 transform-dropdown pointer-events-none absolute right-0 left-auto m-0 -mr-4 mt-2 list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-0 py-2 text-left text-slate-500 opacity-0 transition-all before:absolute before:right-7 before:left-auto before:top-0 before:z-40 before:text-white before:transition-all before:content-['\f0d8']">
                                <li>
                                    <a className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                                       href="javascript:;">Yesterday</a>
                                </li>
                                <li>
                                    <a className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                                       href="javascript:;">Last 7 days</a>
                                </li>
                                <li>
                                    <a className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                                       href="javascript:;">Last 30 days</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full max-w-full px-3 mb-6 shrink-0 sm:flex-0 sm:w-6/12 xl:w-3/12 xl:mb-0">
                        <div
                            className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="flex-auto p-4">
                                <div className="flex flex-wrap -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            <p className="mb-0 font-sans font-semibold leading-normal text-sm">Users</p>
                                            <h5 className="mb-0 font-bold dark:text-white">
                                                930
                                                <span
                                                    className="leading-normal text-sm font-weight-bolder text-lime-500">+55%</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
                                        <div
                                            className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-gray-900 to-slate-800 shadow-soft-2xl">
                                            <i className="ni leading-none ni-circle-08 text-lg relative top-3.5 text-white"
                                               aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-full px-3 mb-6 shrink-0 sm:flex-0 sm:w-6/12 xl:w-3/12 xl:mb-0">
                        <div
                            className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="flex-auto p-4">
                                <div className="flex flex-wrap -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            <p className="mb-0 font-sans font-semibold leading-normal text-sm">New
                                                Users</p>
                                            <h5 className="mb-0 font-bold dark:text-white">
                                                744
                                                <span
                                                    className="leading-normal text-sm font-weight-bolder text-lime-500">+3%</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
                                        <div
                                            className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-gray-900 to-slate-800 shadow-soft-2xl">
                                            <i className="ni leading-none ni-world text-lg relative top-3.5 text-white"
                                               aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-full px-3 mb-6 shrink-0 sm:flex-0 sm:w-6/12 xl:w-3/12 xl:mb-0">
                        <div
                            className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="flex-auto p-4">
                                <div className="flex flex-wrap -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            <p className="mb-0 font-sans font-semibold leading-normal text-sm">Sessions</p>
                                            <h5 className="mb-0 font-bold dark:text-white">
                                                1,414
                                                <span
                                                    className="leading-normal text-red-600 text-sm font-weight-bolder">-2%</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
                                        <div
                                            className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-gray-900 to-slate-800 shadow-soft-2xl">
                                            <i className="ni leading-none ni-watch-time text-lg relative top-3.5 text-white"
                                               aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-full px-3 shrink-0 sm:flex-0 sm:w-6/12 xl:w-3/12">
                        <div
                            className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="flex-auto p-4">
                                <div className="flex flex-wrap -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            <p className="mb-0 font-sans font-semibold leading-normal text-sm">Pages/Session</p>
                                            <h5 className="mb-0 font-bold dark:text-white">
                                                1.76
                                                <span
                                                    className="leading-normal text-sm font-weight-bolder text-lime-500">+5%</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
                                        <div
                                            className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-gray-900 to-slate-800 shadow-soft-2xl">
                                            <i className="ni leading-none ni-image text-lg relative top-3.5 text-white"
                                               aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap mt-6 -mx-3">
                    <div className="w-full max-w-full px-3 shrink-0 md:flex-0 md:w-full lg:w-7/12">
                        <div
                            className="relative flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0">
                                <h6 className="mb-0 dark:text-white">Traffic channels</h6>
                                <div className="flex items-center">
                  <span
                      className="py-2.6 mr-6 rounded-1.8 text-sm inline-block whitespace-nowrap bg-transparent px-0 text-center align-baseline font-normal leading-none text-white">
                    <i className="rounded-circle mr-1.5 inline-block h-2 w-2 align-middle bg-fuchsia-500"></i>
                    <span className="leading-tight dark:text-white text-slate-700 text-xs">Organic search</span>
                  </span>
                                    <span
                                        className="py-2.6 mr-6 rounded-1.8 text-sm inline-block whitespace-nowrap bg-transparent px-0 text-center align-baseline font-normal leading-none text-white">
                    <i className="rounded-circle mr-1.5 inline-block h-2 w-2 align-middle bg-slate-700"></i>
                    <span className="dark:text-white text-slate-700">Referral</span>
                  </span>
                                    <span
                                        className="py-2.6 mr-6 rounded-1.8 text-sm inline-block whitespace-nowrap bg-transparent px-0 text-center align-baseline font-normal leading-none text-white">
                    <i className="rounded-circle mr-1.5 inline-block h-2 w-2 align-middle bg-cyan-500"></i>
                    <span className="dark:text-white text-slate-700">Social media</span>
                  </span>
                                </div>
                            </div>
                            <div className="flex-auto p-4">
                                <canvas id="chart-line-traffic" className="chart-canvas" height="300"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-full px-3 mt-6 shrink-0 md:flex-0 md:w-full lg:w-5/12 lg:mt-0">
                        <div
                            className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0">
                                <div className="flex items-center">
                                    <h6 className="mb-0 dark:text-white">Referrals</h6>
                                    <button type="button"
                                            className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl p-1.2 h-6 w-6 mb-0 ml-auto flex cursor-pointer items-center justify-center border border-solid border-slate-400 bg-transparent text-center align-middle font-bold text-slate-400 shadow-none transition-all hover:bg-transparent hover:text-slate-400 hover:opacity-75 hover:shadow-none active:bg-slate-400 active:text-black hover:active:bg-transparent hover:active:text-slate-400 hover:active:opacity-75 hover:active:shadow-none"
                                            data-target="tooltip_trigger">
                                        <i className="fas fa-info text-3xs"></i>
                                    </button>
                                    <div
                                        className="z-50 hidden px-2 py-1 text-center text-white bg-black rounded-lg max-w-46 text-sm"
                                        id="tooltip" role="tooltip" data-popper-placement="bottom">
                                        See wich websites are sending traffic to your website
                                        <div id="arrow"
                                             className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                             data-popper-arrow></div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-auto p-4">
                                <div className="flex flex-wrap -mx-3">
                                    <div className="w-full max-w-full px-3 text-center flex-0 lg:w-5/12">
                                        <div className="mt-12">
                                            <canvas id="chart-doughnut-referrals" height="200"></canvas>
                                        </div>
                                        <a href="javascript:;"
                                           className="inline-block px-8 py-2 m-0 mt-6 text-xs font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer ease-soft-in leading-pro tracking-tight-soft bg-gradient-to-tl from-slate-600 to-slate-300 shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85">See
                                            all referrals</a>
                                    </div>
                                    <div className="w-full max-w-full px-3 flex-0 lg:w-7/12">
                                        <div className="overscroll-x-auto">
                                            <table
                                                className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                                                <tbody className="align-top">
                                                <tr>
                                                    <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                        <div className="flex px-2 py-1">
                                                            <div>
                                                                <img
                                                                    className="inline-flex items-center justify-center text-white transition-all duration-200 text-sm ease-soft-in-out h-9 w-9 rounded-xl"
                                                                    src="../../assets/img/small-logos/logo-xd.svg"
                                                                    alt="xd logo"/>
                                                            </div>
                                                            <div className="flex flex-col justify-center">
                                                                <h6 className="mb-0 leading-normal dark:text-white text-sm">Adobe</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-2 leading-normal text-center align-middle border-b border-gray-200 border-solid text-sm whitespace-nowrap">
                                                        <span
                                                            className="font-semibold leading-tight dark:text-white text-xs">25%</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                        <div className="flex px-2 py-1">
                                                            <div>
                                                                <img
                                                                    className="inline-flex items-center justify-center text-white transition-all duration-200 text-sm ease-soft-in-out h-9 w-9 rounded-xl"
                                                                    src="../../assets/img/small-logos/logo-atlassian.svg"
                                                                    alt="atlassian logo"/>
                                                            </div>
                                                            <div className="flex flex-col justify-center">
                                                                <h6 className="mb-0 leading-normal dark:text-white text-sm">Atlassian</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-2 leading-normal text-center align-middle border-b border-gray-200 border-solid text-sm whitespace-nowrap">
                                                        <span
                                                            className="font-semibold leading-tight dark:text-white text-xs">3%</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                        <div className="flex px-2 py-1">
                                                            <div>
                                                                <img
                                                                    className="inline-flex items-center justify-center text-white transition-all duration-200 text-sm ease-soft-in-out h-9 w-9 rounded-xl"
                                                                    src="../../assets/img/small-logos/logo-slack.svg"
                                                                    alt="slack logo"/>
                                                            </div>
                                                            <div className="flex flex-col justify-center">
                                                                <h6 className="mb-0 leading-normal dark:text-white text-sm">Slack</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-2 leading-normal text-center align-middle border-b border-gray-200 border-solid text-sm whitespace-nowrap">
                                                        <span
                                                            className="font-semibold leading-tight dark:text-white text-xs">12%</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                        <div className="flex px-2 py-1">
                                                            <div>
                                                                <img
                                                                    className="inline-flex items-center justify-center text-white transition-all duration-200 text-sm ease-soft-in-out h-9 w-9 rounded-xl"
                                                                    src="../../assets/img/small-logos/logo-spotify.svg"
                                                                    alt="spotify logo"/>
                                                            </div>
                                                            <div className="flex flex-col justify-center">
                                                                <h6 className="mb-0 leading-normal dark:text-white text-sm">Spotify</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-2 leading-normal text-center align-middle border-b border-gray-200 border-solid text-sm whitespace-nowrap">
                                                        <span
                                                            className="font-semibold leading-tight dark:text-white text-xs">7%</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-2 align-middle border-b-0 border-solid whitespace-nowrap border-inherit">
                                                        <div className="flex px-2 py-1">
                                                            <div>
                                                                <img
                                                                    className="inline-flex items-center justify-center text-white transition-all duration-200 text-sm ease-soft-in-out h-9 w-9 rounded-xl"
                                                                    src="../../assets/img/small-logos/logo-jira.svg"
                                                                    alt="jira logo"/>
                                                            </div>
                                                            <div className="flex flex-col justify-center">
                                                                <h6 className="mb-0 leading-normal dark:text-white text-sm">Jira</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-2 leading-normal text-center align-middle border-b-0 border-gray-200 border-solid text-sm whitespace-nowrap">
                                                        <span
                                                            className="font-semibold leading-tight dark:text-white text-xs">10%</span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap mt-6 -mx-3">
                    <div className="w-full max-w-full px-3 shrink-0 sm:flex-0 sm:w-6/12">
                        <div
                            className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0">
                                <div className="flex items-center">
                                    <h6 className="mb-0 dark:text-white">Social</h6>
                                    <button type="button"
                                            className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl p-1.2 h-6 w-6 mb-0 ml-auto flex cursor-pointer items-center justify-center border border-solid border-slate-400 bg-transparent text-center align-middle font-bold text-slate-400 shadow-none transition-all hover:bg-transparent hover:text-slate-400 hover:opacity-75 hover:shadow-none active:bg-slate-400 active:text-black hover:active:bg-transparent hover:active:text-slate-400 hover:active:opacity-75 hover:active:shadow-none"
                                            data-target="tooltip_trigger">
                                        <i className="fas fa-info text-3xs"></i>
                                    </button>
                                    <div
                                        className="z-50 hidden px-2 py-1 text-center text-white bg-black rounded-lg max-w-46 text-sm"
                                        id="tooltip" role="tooltip" data-popper-placement="bottom">
                                        See how much traffic do you get from social media
                                        <div id="arrow"
                                             className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                             data-popper-arrow></div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-auto p-4">
                                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                                    <li className="border-black/12.5 rounded-t-inherit relative border-solid py-2 text-inherit border-0 flex items-center px-0 mb-2">
                                        <div className="w-full">
                                            <div className="flex items-center mb-2">
                                                <a className="inline-block p-0 font-bold text-center text-blue-800 uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in tracking-tight-soft hover:scale-102 active:opacity-85">
                                                    <i className="fab fa-facebook text-5.3 leading-3 font-normal align-[-0.0667em]"></i>
                                                </a>
                                                <span
                                                    className="mx-2 font-semibold leading-normal capitalize text-sm">Facebook</span>
                                                <span
                                                    className="ml-auto font-semibold leading-normal text-sm">80%</span>
                                            </div>
                                            <div>
                                                <div
                                                    className="h-0.75 text-xs flex overflow-visible rounded-lg bg-gray-200 dark:bg-gradient-to-tl dark:from-gray-900 dark:to-slate-800">
                                                    <div
                                                        className="dark:bg-gray-200 dark:bg-none bg-gradient-to-tl from-gray-900 to-slate-800 w-4/5 transition-width duration-600 ease-soft rounded-1 -mt-0.4 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap text-center text-white"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="border-black/12.5 relative border-t-0 border-solid py-2 text-inherit border-0 flex items-center px-0 mb-2">
                                        <div className="w-full">
                                            <div className="flex items-center mb-2">
                                                <a className="inline-block p-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer text-sky-600 leading-pro text-xs ease-soft-in tracking-tight-soft hover:scale-102 active:opacity-85">
                                                    <i className="fab fa-twitter text-5.3 leading-3 font-normal align-[-0.0667em]"></i>
                                                </a>
                                                <span
                                                    className="mx-2 font-semibold leading-normal capitalize text-sm">Twitter</span>
                                                <span
                                                    className="ml-auto font-semibold leading-normal text-sm">40%</span>
                                            </div>
                                            <div>
                                                <div
                                                    className="h-0.75 text-xs flex overflow-visible rounded-lg bg-gray-200 dark:bg-gradient-to-tl dark:from-gray-900 dark:to-slate-800">
                                                    <div
                                                        className="dark:bg-gray-200 dark:bg-none bg-gradient-to-tl from-gray-900 to-slate-800 w-2/5 transition-width duration-600 ease-soft rounded-1 -mt-0.4 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap text-center text-white"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="border-black/12.5 relative border-t-0 border-solid py-2 text-inherit border-0 flex items-center px-0 mb-2">
                                        <div className="w-full">
                                            <div className="flex items-center mb-2">
                                                <a className="inline-block p-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer text-orange-650 leading-pro text-xs ease-soft-in tracking-tight-soft hover:scale-102 active:opacity-85">
                                                    <i className="fab fa-reddit text-5.3 leading-3 font-normal align-[-0.0667em]"></i>
                                                </a>
                                                <span
                                                    className="mx-2 font-semibold leading-normal capitalize text-sm">Reddit</span>
                                                <span
                                                    className="ml-auto font-semibold leading-normal text-sm">30%</span>
                                            </div>
                                            <div>
                                                <div
                                                    className="h-0.75 text-xs flex overflow-visible rounded-lg bg-gray-200 dark:bg-gradient-to-tl dark:from-gray-900 dark:to-slate-800">
                                                    <div
                                                        className="dark:bg-gray-200 dark:bg-none bg-gradient-to-tl from-gray-900 to-slate-800 w-3/10 transition-width duration-600 ease-soft rounded-1 -mt-0.4 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap text-center text-white"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="border-black/12.5 relative border-t-0 border-solid py-2 text-inherit border-0 flex items-center px-0 mb-2">
                                        <div className="w-full">
                                            <div className="flex items-center mb-2">
                                                <a className="inline-block p-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer text-red-650 leading-pro text-xs ease-soft-in tracking-tight-soft hover:scale-102 active:opacity-85">
                                                    <i className="fab fa-youtube text-5.3 leading-3 font-normal align-[-0.0667em]"></i>
                                                </a>
                                                <span
                                                    className="mx-2 font-semibold leading-normal capitalize text-sm">Youtube</span>
                                                <span
                                                    className="ml-auto font-semibold leading-normal text-sm">25%</span>
                                            </div>
                                            <div>
                                                <div
                                                    className="h-0.75 text-xs flex overflow-visible rounded-lg bg-gray-200 dark:bg-gradient-to-tl dark:from-gray-900 dark:to-slate-800">
                                                    <div
                                                        className="dark:bg-gray-200 dark:bg-none bg-gradient-to-tl from-gray-900 to-slate-800 w-1/4 transition-width duration-600 ease-soft rounded-1 -mt-0.4 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap text-center text-white"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="border-black/12.5 rounded-b-inherit relative border-t-0 border-solid py-2 text-inherit border-0 flex items-center px-0 mb-2">
                                        <div className="w-full">
                                            <div className="flex items-center mb-2">
                                                <a className="inline-block p-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer text-teal-550 leading-pro text-xs ease-soft-in tracking-tight-soft hover:scale-102 active:opacity-85">
                                                    <i className="fab fa-slack text-5.3 leading-3 font-normal align-[-0.0667em]"></i>
                                                </a>
                                                <span
                                                    className="mx-2 font-semibold leading-normal capitalize text-sm">Slack</span>
                                                <span
                                                    className="ml-auto font-semibold leading-normal text-sm">15%</span>
                                            </div>
                                            <div>
                                                <div
                                                    className="h-0.75 text-xs flex overflow-visible rounded-lg bg-gray-200 dark:bg-gradient-to-tl dark:from-gray-900 dark:to-slate-800">
                                                    <div
                                                        className="dark:bg-gray-200 dark:bg-none bg-gradient-to-tl from-gray-900 to-slate-800 w-15/100 transition-width duration-600 ease-soft rounded-1 -mt-0.4 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap text-center text-white"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-full px-3 shrink-0 sm:flex-0 sm:w-6/12">
                        <div
                            className="relative flex flex-col h-full min-w-0 mt-6 break-words bg-white border-0 md:mt-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0">
                                <div className="flex items-center">
                                    <h6 className="dark:text-white">Pages</h6>
                                    <button type="button"
                                            className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl p-1.2 h-6 w-6 mb-0 ml-auto flex cursor-pointer items-center justify-center border border-solid border-lime-500 bg-transparent text-center align-middle font-bold text-lime-500 shadow-none transition-all hover:bg-transparent hover:text-lime-500 hover:opacity-75 hover:shadow-none active:bg-lime-500 active:text-black hover:active:bg-transparent hover:active:text-lime-500 hover:active:opacity-75 hover:active:shadow-none"
                                            data-target="tooltip_trigger">
                                        <i className="fas fa-check text-3xs"></i>
                                    </button>
                                    <div
                                        className="z-50 hidden px-2 py-1 text-center text-white bg-black rounded-lg max-w-46 text-sm"
                                        id="tooltip" role="tooltip" data-popper-placement="bottom">
                                        See how much traffic do you get from social media
                                        <div id="arrow"
                                             className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                             data-popper-arrow></div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-auto px-4 pb-2">
                                <div className="p-0 overflow-x-auto">
                                    <table
                                        className="items-center justify-center w-full mb-0 align-top border-gray-200 dark:text-white/80 text-slate-500">
                                        <thead className="align-bottom">
                                        <tr>
                                            <th className="py-3 pl-2 pr-6 font-bold uppercase align-middle border-b border-gray-200 border-solid text-xxs text-slate-400 opacity-70 whitespace-nowrap tracking-none">Page</th>
                                            <th className="py-3 pl-2 pr-6 font-bold uppercase align-middle border-b border-gray-200 border-solid text-xxs text-slate-400 opacity-70 whitespace-nowrap tracking-none">Page
                                                Views
                                            </th>
                                            <th className="py-3 pl-2 pr-6 font-bold uppercase align-middle border-b border-gray-200 border-solid text-xxs text-slate-400 opacity-70 whitespace-nowrap tracking-none">Avg.
                                                Time
                                            </th>
                                            <th className="py-3 pl-2 pr-6 font-bold uppercase align-middle border-b border-gray-200 border-solid text-xxs text-slate-400 opacity-70 whitespace-nowrap tracking-none">Bounce
                                                Rate
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody className="align-top">
                                        <tr>
                                            <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">1./bits</p>
                                            </td>
                                            <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">345</p>
                                            </td>
                                            <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">00:17:07</p>
                                            </td>
                                            <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">40.91%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">2.
                                                    /pages/argon-dashboard</p>
                                            </td>
                                            <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">520</p>
                                            </td>
                                            <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">00:23:13</p>
                                            </td>
                                            <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">30.14%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">3.
                                                    /pages/soft-ui-dashboard</p>
                                            </td>
                                            <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">122</p>
                                            </td>
                                            <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">00:3:10</p>
                                            </td>
                                            <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">54.10%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">4.
                                                    /bootstrap-themes</p>
                                            </td>
                                            <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">1,900</p>
                                            </td>
                                            <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">00:30:42</p>
                                            </td>
                                            <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">20.93%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">5.
                                                    /react-themes</p>
                                            </td>
                                            <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">1,442</p>
                                            </td>
                                            <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">00:31:50</p>
                                            </td>
                                            <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">34.98%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">6.
                                                    /product/argon-dashboard-angular</p>
                                            </td>
                                            <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">201</p>
                                            </td>
                                            <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">00:12:42</p>
                                            </td>
                                            <td className="p-2 align-middle border-b border-solid dark:border-white/40 whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">21.4%</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 align-middle border-b-0 border-solid whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">7.
                                                    /product/material-dashboard-pro</p>
                                            </td>
                                            <td className="p-2 align-middle border-b-0 border-solid whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">2,115</p>
                                            </td>
                                            <td className="p-2 align-middle border-b-0 border-solid whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">00:50:11</p>
                                            </td>
                                            <td className="p-2 align-middle border-b-0 border-solid whitespace-nowrap border-inherit">
                                                <p className="mb-0 font-semibold leading-normal text-sm">34.98%</p>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Analytics;