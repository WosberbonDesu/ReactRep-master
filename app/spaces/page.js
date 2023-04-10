'use client';
import React from 'react';
// import './../../assets/js/kanban'
// import './../../assets/js/plugins/jkanban'
// import './../../assets/js/plugins/jkanban.min'
import './../../assets/css/kanban.css'
import Image from "next/image";
import team1 from './../../assets/img/team-1.jpg'
import team2 from './../../assets/img/team-2.jpg'
import team3 from './../../assets/img/team-3.jpg'
import team4 from './../../assets/img/team-4.jpg'
import team5 from './../../assets/img/team-5.jpg'
import meeting from './../../assets/img/meeting.jpg'
import office from './../../assets/img/office-dark.jpg'
import homedecor from './../../assets/img/home-decor-1.jpg'
import SideBar from '../../components/SideBar/SideBar'
const Spaces = () => {
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
                                aria-current="page">Kanban
                            </li>
                        </ol>
                        <h6 className="mb-0 font-bold capitalize dark:text-white">Kanban</h6>
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
                <div className="flex m-4">
                    <div className="flex ml-auto">
                        <div className="relative pr-6 mt-1">
                            <p className="mb-2 font-semibold leading-tight text-xs text-slate-400">Team members:</p>
                            <div className="flex items-center justify-center">
                                <div>
                                    <a href="javascript:;"
                                       className="relative z-20 inline-flex items-center justify-center text-white transition-all duration-200 border-2 border-white border-solid w-9 h-9 ease-soft-in-out text-sm rounded-circle hover:z-30">

                                        <Image src={team1} className="w-full rounded-circle"></Image>
                                    </a>
                                    <a href="javascript:;"
                                       className="relative z-20 inline-flex items-center justify-center -ml-4 text-white transition-all duration-200 border-2 border-white border-solid w-9 h-9 ease-soft-in-out text-sm rounded-circle hover:z-30">
                                        <Image src={team2} className="w-full rounded-circle"></Image>
                                    </a>
                                    <a href="javascript:;"
                                       className="relative z-20 inline-flex items-center justify-center -ml-4 text-white transition-all duration-200 border-2 border-white border-solid w-9 h-9 ease-soft-in-out text-sm rounded-circle hover:z-30">
                                        <Image src={team3} className="w-full rounded-circle"></Image>
                                    </a>
                                    <a href="javascript:;"
                                       className="relative z-20 inline-flex items-center justify-center -ml-4 text-white transition-all duration-200 border-2 border-white border-solid w-9 h-9 ease-soft-in-out text-sm rounded-circle hover:z-30">
                                        <Image src={team4} className="w-full rounded-circle"></Image>
                                    </a>
                                    <a href="javascript:;"
                                       className="relative z-20 inline-flex items-center justify-center -ml-4 text-white transition-all duration-200 border-2 border-white border-solid w-9 h-9 ease-soft-in-out text-sm rounded-circle hover:z-30">
                                        <Image src={team5} className="w-full rounded-circle"></Image>
                                    </a>
                                </div>
                            </div>
                            <hr className="absolute top-0 right-0 w-px h-full mt-0 bg-transparent bg-gradient-to-b from-transparent via-black/40 to-transparent"/>
                        </div>
                        <div className="pl-6">
                            <button type="button" data-target="#new-board-modal" data-toggle="modal"
                                    className="mt-4 inline-block w-9 h-9 p-2.8 mb-0 font-bold text-center uppercase align-middle transition-all border-0 rounded-lg cursor-pointer leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 active:opacity-85 bg-gradient-to-tl from-blue-600 to-cyan-400 text-white">
                                <i className="fa fa-plus" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="box-border relative w-auto mt-4 overflow-scroll">
                    <div className="box-border inline-flex min-h-screen py-2" style={{overflowX: "auto"}}>
                        <div className="box-border relative w-auto mt-4 overflow-scroll">
                            <div className="box-border inline-flex min-h-screen py-2" style={{overflowX: "auto"}}>
                                <div id="myKanban">
                                    <div className="kanban-container" style={{width: "1880px"}}>
                                        <div data-id="_backlog" data-order="1" className="kanban-board"
                                             style={{width: "450px", marginLeft: "10px", marginRight: "10px"}}>
                                            <header className="kanban-board-header">
                                                <div className="kanban-title-board">Backlog</div>
                                                <button className="kanban-title-button btn btn-default btn-xs">+
                                                </button>
                                            </header>
                                            <main className="kanban-drag">
                                                <div className="kanban-item rounded-lg" data-eid="_task_1_title_id"
                                                     data-class="rounded-lg"><p className="text mb-0"
                                                                                data-target="#jkanban-info-modal"
                                                                                data-toggle="modal">Click me to change
                                                    title</p></div>
                                                <div className="kanban-item rounded-lg" data-eid="_task_2_title_id"
                                                     data-class="rounded-lg"><p className="text mb-0">Drag me to "In
                                                    progress" section</p></div>
                                                <div className="kanban-item rounded-lg" data-eid="_task_do_something_id"
                                                     data-assignee="Done Joe"
                                                     data-description="This task's description is for something, but not for anything"
                                                     data-class="rounded-lg">
                                                    <Image src={office} className="w-full"></Image>
                                                    <span
                                                    className="mt-4 py-1.8 px-3 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white bg-gradient-to-tl from-purple-700 to-pink-500">Pending</span>
                                                    <p className="text mt-2">Website Design: New cards for blog section
                                                        and profile details</p>
                                                    <div className="flex">
                                                        <div><i className="fa fa-paperclip mr-1 text-sm leadint-tight"
                                                                aria-hidden="true"></i><span
                                                            className="text-sm leading-tight">3</span></div>
                                                        <div className="ml-auto"><a href="javascript:;"
                                                                                    className="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                                                    data-toggle="tooltip"
                                                                                    data-original-title="Jessica Rowland">
                                                            <Image src={team1} className="w-full !rounded-circle"></Image></a><a
                                                            href="javascript:;"
                                                            className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                            data-toggle="tooltip" data-original-title="Audrey Love">   <Image src={team2} className="w-full !rounded-circle"></Image></a><a
                                                            href="javascript:;"
                                                            className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                            data-toggle="tooltip"
                                                            data-original-title="Michael Lewis">   <Image src={team3} className="w-full !rounded-circle"></Image></a></div>
                                                    </div></div>
                                            </main>
                                            <footer></footer>
                                        </div>
                                        <div data-id="_progress" data-order="2" className="kanban-board"
                                             style={{width: "450px", marginLeft: "10px", marginRight: "10px"}}>
                                            <header className="kanban-board-header">
                                                <div className="kanban-title-board">In progress</div>
                                                <button className="kanban-title-button btn btn-default btn-xs">+
                                                </button>
                                            </header>
                                            <main className="kanban-drag">
                                                <div className="kanban-item rounded-lg" data-eid="_task_3_title_id"
                                                     data-class="rounded-lg"><span
                                                    className="mt-2 py-1.8 px-3 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white bg-gradient-to-tl from-red-500 to-yellow-400">Errors</span>
                                                    <p className="text mt-2">Fix Firefox errors</p>
                                                    <div className="flex">
                                                        <div><i className="fa fa-paperclip mr-1 text-sm"
                                                                aria-hidden="true"></i><span
                                                            className="text-sm">11</span></div>
                                                        <div className="ml-auto"><a href="javascript:;"
                                                                                    className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                                                    data-toggle="tooltip"
                                                                                    data-original-title="Jana Lucie">   <Image src={team3} className="w-full !rounded-circle"></Image></a><a
                                                            href="javascript:;"
                                                            className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                            data-toggle="tooltip" data-original-title="Jessica Rowland">   <Image src={team1} className="w-full !rounded-circle"></Image></a></div>
                                                    </div>
                                                </div>
                                                <div className="kanban-item rounded-lg" data-eid="_task_4_title_id"
                                                     data-class="rounded-lg"><span
                                                    className="mt-2 py-1.8 px-3 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white bg-gradient-to-tl from-blue-600 to-cyan-400">Updates</span>
                                                    <p className="text mt-2">Argon Dashboard PRO - Angular 11</p>
                                                    <div className="flex">
                                                        <div><i className="fa fa-paperclip mr-1 text-sm"
                                                                aria-hidden="true"></i><span
                                                            className="text-sm">3</span></div>
                                                        <div className="ml-auto"><a href="javascript:;"
                                                                                    className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                                                    data-toggle="tooltip"
                                                                                    data-original-title="Jana Lucie">   <Image src={team5} className="w-full !rounded-circle"></Image></a><a
                                                            href="javascript:;"
                                                            className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                            data-toggle="tooltip" data-original-title="Jessica Rowland">   <Image src={team2} className="w-full !rounded-circle"></Image></a></div>
                                                    </div>
                                                </div>
                                                <div className="kanban-item rounded-lg"
                                                     data-eid="_task_do_something_4_id" data-assignee="Done Joe"
                                                     data-description="This task's description is for something, but not for anything"
                                                     data-class="rounded-lg">   <Image src={meeting} className="w-full"></Image><span
                                                    className="mt-3 py-1.8 px-3 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white bg-gradient-to-tl from-blue-600 to-cyan-400">Updates</span>
                                                    <p className="text mt-2">Vue 3 Updates</p>
                                                    <div className="flex">
                                                        <div><i className="fa fa-paperclip mr-1 text-sm"
                                                                aria-hidden="true"></i><span
                                                            className="text-sm">9</span></div>
                                                        <div className="ml-auto"><a href="javascript:;"
                                                                                    className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                                                    data-toggle="tooltip"
                                                                                    data-original-title="Jessica Rowland">   <Image src={team4} className="w-full !rounded-circle"></Image></a><a
                                                            href="javascript:;"
                                                            className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                            data-toggle="tooltip" data-original-title="Audrey Love">   <Image src={team1} className="w-full !rounded-circle"></Image></a><a
                                                            href="javascript:;"
                                                            className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                            data-toggle="tooltip"
                                                            data-original-title="Michael Lewis">   <Image src={team2} className="w-full !rounded-circle"></Image></a></div>
                                                    </div></div>
                                            </main>
                                            <footer></footer>
                                        </div>
                                        <div data-id="_working" data-order="3" className="kanban-board"
                                             style={{width: "450px", marginLeft: "10px", marginRight: "10px"}}>
                                            <header className="kanban-board-header">
                                                <div className="kanban-title-board">In review</div>
                                                <button className="kanban-title-button btn btn-default btn-xs">+
                                                </button>
                                            </header>
                                            <main className="kanban-drag">
                                                <div className="kanban-item rounded-lg"
                                                     data-eid="_task_do_something_2_id" data-assignee="Done Joe"
                                                     data-description="This task's description is for something, but not for anything"
                                                     data-class="rounded-lg"><span
                                                    className="mt-2 py-1.8 px-3 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white bg-gradient-to-tl from-red-500 to-yellow-400">In Testing</span>
                                                    <p className="text mt-2">Responsive Changes</p>
                                                    <div className="flex">
                                                        <div><i className="fa fa-paperclip mr-1 text-sm"
                                                                aria-hidden="true"></i><span
                                                            className="text-sm">11</span></div>
                                                        <div className="ml-auto"><a href="javascript:;"
                                                                                    className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                                                    data-toggle="tooltip"
                                                                                    data-original-title="Jana Lucie"><Image src={team3} className="w-full !rounded-circle"></Image></a><a
                                                            href="javascript:;"
                                                            className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                            data-toggle="tooltip" data-original-title="Jessica Rowland"><Image src={team2} className="w-full !rounded-circle"></Image></a></div>
                                                    </div>
                                                </div>
                                                <div className="kanban-item rounded-lg" data-eid="_task_run_id"
                                                     data-assignee="Done Joe"
                                                     data-description="This task's description is for something, but not for anything"
                                                     data-class="rounded-lg"><span
                                                    className="mt-2 py-1.8 px-3 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white bg-gradient-to-tl from-green-600 to-lime-400">In review</span>
                                                    <p className="text mt-2 mb-1">Change images dimension</p>
                                                    <div className="flex-1-0">
                                                        <div
                                                            className="h-0.75 text-xs flex overflow-visible rounded-lg bg-gray-200 mb-4 ">
                                                            <div
                                                                className="transition-width duration-600 ease-soft rounded-1 -mt-0.4 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap bg-lime-500 text-center text-white "
                                                                role="progressbar" aria-valuenow="80" aria-valuemin="0"
                                                                aria-valuemax="100" style={{width: "80%"}}></div>
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div className="ml-auto"><a href="javascript:;"
                                                                                    className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                                                    data-toggle="tooltip"
                                                                                    data-original-title="Jessica Rowland"><Image src={team1} className="w-full !rounded-circle"></Image></a></div>
                                                    </div>
                                                </div>
                                                <div className="kanban-item rounded-lg"
                                                     data-eid="_task_do_something_3_id" data-assignee="Done Joe"
                                                     data-description="This task's description is for something, but not for anything"
                                                     data-class="rounded-lg"><span
                                                    className="mt-2 py-1.8 px-3 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white bg-gradient-to-tl from-blue-600 to-cyan-400">In Review</span>
                                                    <p className="text mt-2 mb-1">Update Links</p>
                                                    <div className="flex-1-0">
                                                        <div
                                                            className="h-0.75 text-xs flex overflow-visible rounded-lg bg-gray-200 mb-4 ">
                                                            <div
                                                                className="transition-width duration-600 ease-soft rounded-1 -mt-0.4 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap bg-cyan-500 text-center text-white "
                                                                role="progressbar" aria-valuenow="60" aria-valuemin="0"
                                                                aria-valuemax="100" style={{width: "60%"}}></div>
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div><i className="fa fa-paperclip mr-1 text-sm"
                                                                aria-hidden="true"></i><span
                                                            className="text-sm">6</span></div>
                                                        <div className="ml-auto"><a href="javascript:;"
                                                                                    className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                                                    data-toggle="tooltip"
                                                                                    data-original-title="Jana Lucie"><Image src={team5} className="w-full !rounded-circle"></Image></a><a
                                                            href="javascript:;"
                                                            className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                            data-toggle="tooltip" data-original-title="Mike Alis"><Image src={team1} className="w-full !rounded-circle"></Image></a></div>
                                                    </div>
                                                </div>
                                            </main>
                                            <footer></footer>
                                        </div>
                                        <div data-id="_done" data-order="4" className="kanban-board"
                                             style={{width: "450px", marginLeft: "10px", marginRight: "10px"}}>
                                            <header className="kanban-board-header">
                                                <div className="kanban-title-board">Done</div>
                                                <button className="kanban-title-button btn btn-default btn-xs">+
                                                </button>
                                            </header>
                                            <main className="kanban-drag">
                                                <div className="kanban-item rounded-lg" data-eid="_task_all_right_id"
                                                     data-assignee="Done Joe"
                                                     data-description="This task's description is for something, but not for anything"
                                                     data-class="rounded-lg"><Image src={homedecor} className="w-full !rounded-circle"></Image><span
                                                    className="mt-3 py-1.8 px-3 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white bg-gradient-to-tl from-green-600 to-lime-400">Done</span>
                                                    <p className="text mt-2">Redesign for the home page</p>
                                                    <div className="flex">
                                                        <div><i className="fa fa-paperclip mr-1 text-sm"
                                                                aria-hidden="true"></i><span
                                                            className="text-sm">8</span></div>
                                                        <div className="ml-auto"><a href="javascript:;"
                                                                                    className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                                                    data-toggle="tooltip"
                                                                                    data-original-title="Jessica Rowland"><Image src={team3} className="w-full !rounded-circle"></Image></a><a
                                                            href="javascript:;"
                                                            className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                            data-toggle="tooltip" data-original-title="Audrey Love"><Image src={team1} className="w-full !rounded-circle"></Image></a><a
                                                            href="javascript:;"
                                                            className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                            data-toggle="tooltip"
                                                            data-original-title="Michael Lewis"><Image src={team4} className="w-full !rounded-circle"></Image></a></div>
                                                    </div></div>
                                                <div className="kanban-item rounded-lg" data-eid="_task_ok_id"
                                                     data-assignee="Done Joe"
                                                     data-description="This task's description is for something, but not for anything"
                                                     data-class="rounded-lg"><span
                                                    className="mt-2 py-1.8 px-3 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white bg-gradient-to-tl from-green-600 to-lime-400">Done</span>
                                                    <p className="text mt-2">Schedule winter campaign</p>
                                                    <div className="flex">
                                                        <div><i className="fa fa-paperclip mr-1 text-sm"
                                                                aria-hidden="true"></i><span
                                                            className="text-sm">2</span></div>
                                                        <div className="ml-auto"><a href="javascript:;"
                                                                                    className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                                                    data-toggle="tooltip"
                                                                                    data-original-title="Michael Laurence"><Image src={team1} className="w-full !rounded-circle"></Image></a><a
                                                            href="javascript:;"
                                                            className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                                            data-toggle="tooltip"
                                                            data-original-title="Michael Lewis"><Image src={team2} className="w-full !rounded-circle"></Image></a></div>
                                                    </div>
                                                </div>
                                            </main>
                                            <footer></footer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="fixed top-0 left-0 hidden w-full h-full overflow-x-hidden overflow-y-auto transition-opacity ease-linear opacity-0 outline-0 z-sticky"
                    aria-hidden="true" id="new-board-modal" role="dialog">
                    <div
                        className="relative w-auto my-7 pointer-events-none sm:max-w-125 sm:mx-auto transition-transform duration-300  ease-soft-out -translate-y-13">
                        <div
                            className="relative flex flex-col w-full bg-white border border-solid pointer-events-auto bg-clip-padding border-black/20 rounded-xl outline-0">
                            <div
                                className="flex items-center justify-between p-4 border-b border-solid shrink-0 border-slate-100 rounded-t-xl ">
                                <h5 className="mb-0">Choose your new Board Name</h5>
                                <button type="button" data-target="#new-board-modal" data-toggle="modal"
                                        className="flex items-center box-content w-4 h-4 text-slate-700 bg-transparent border-0 rounded-1.5 opacity-50 cursor-pointer p-2 -m-2 ml-auto"
                                        data-target="#new-board-modal" aria-label="Close">
                    <span aria-hidden="true">
                      <i className="fa fa-close"></i>
                    </span>
                                </button>
                            </div>
                            <div className="relative flex-auto p-4 pt-6">
                                <div
                                    className="relative flex flex-wrap items-stretch w-full mb-6 transition-all rounded-lg ease-soft">
                    <span
                        className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                      <i className="far fa-edit"></i>
                    </span>
                                    <input type="text"
                                           className="pl-9 text-sm focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                           placeholder="Board Name" id="jkanban-new-board-name"/>
                                </div>
                                <div className="text-right">
                                    <button
                                        className="inline-block px-6 py-3 m-1 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 border-transparent border-solid rounded-lg cursor-pointer leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-fuchsia-500"
                                        id="jkanban-add-new-board" data-toggle="modal" data-target="#new-board-modal">
                                        Save changes
                                    </button>
                                    <button data-target="#new-board-modal" data-toggle="modal"
                                            className="inline-block px-6 py-3 m-1 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 border-transparent border-solid rounded-lg cursor-pointer leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-slate-400"
                                            data-dismiss="modal" data-target="#new-board-modal">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fixed inset-0 z-40 hidden bg-black opacity-50" id="new-board-modal-backdrop"></div>

                <div
                    className="fixed top-0 left-0 hidden w-full h-full overflow-x-hidden overflow-y-auto transition-opacity ease-linear opacity-0 outline-0 z-sticky"
                    id="jkanban-info-modal" aria-hidden="true" tabindex="-1" role="dialog">
                    <div
                        className="relative w-auto my-7 pointer-events-none sm:max-w-125 sm:mx-auto transition-transform duration-300  ease-soft-out -translate-y-13">
                        <div
                            className="relative flex flex-col w-full bg-white border border-solid pointer-events-auto bg-clip-padding border-black/20 rounded-xl outline-0">
                            <div
                                className="flex items-center justify-between p-4 border-b border-solid shrink-0 border-slate-100 rounded-t-xl">
                                <h5 className="mb-0">Task details</h5>
                                <button type="button" data-target="#jkanban-info-modal" data-toggle="modal"
                                        className="flex items-center box-content w-4 h-4 text-slate-700 bg-transparent border-0 rounded-1.5 opacity-50 cursor-pointer p-2 -m-2 ml-auto"
                                        aria-label="Close">
                    <span aria-hidden="true">
                      <i className="fa fa-close"></i>
                    </span>
                                </button>
                            </div>
                            <div className="relative flex-auto p-4 pt-6">
                                <input id="jkanban-task-id" className="hidden"/>
                                <div
                                    className="relative flex flex-wrap items-stretch w-full mb-6 transition-all rounded-lg ease-soft">
                    <span
                        className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                      <i className="far fa-edit"></i>
                    </span>
                                    <input
                                        className="pl-9 text-sm focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                        placeholder="Task Title" type="text" id="jkanban-task-title"/>
                                </div>
                                <div
                                    className="relative flex flex-wrap items-stretch w-full mb-6 transition-all rounded-lg ease-soft">
                    <span
                        className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                      <i className="fas fa-user"></i>
                    </span>
                                    <input
                                        className="pl-9 text-sm focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                        placeholder="Task Assignee" type="text" id="jkanban-task-assignee"/>
                                </div>
                                <div className="mb-4">
                                    <textarea
                                        className="-ml-px relative flex-auto w-full min-w-0 focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                                        placeholder="Task Description" id="jkanban-task-description"
                                        rows="4"></textarea>
                                </div>
                                <div
                                    className="relative hidden p-4 mb-4 text-white border border-solid rounded-lg border-lime-300 bg-gradient-to-tl from-green-600 to-lime-400">Changes
                                    saved!
                                </div>
                                <div className="text-right">
                                    <button
                                        className="inline-block px-6 py-3 m-1 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 border-transparent border-solid rounded-lg cursor-pointer leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-fuchsia-500"
                                        id="jkanban-update-task" data-toggle="modal" data-target="#jkanban-info-modal">
                                        Save changes
                                    </button>
                                    <button data-target="#jkanban-info-modal" data-toggle="modal"
                                            className="inline-block px-6 py-3 m-1 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 border-transparent border-solid rounded-lg cursor-pointer leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-slate-400"
                                            data-dismiss="modal" data-target="#jkanban-info-modal">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fixed inset-0 z-40 hidden bg-black opacity-50" id="jkanban-info-modal-backdrop"></div>
            </div>
        </>
    );
};

export default Spaces;