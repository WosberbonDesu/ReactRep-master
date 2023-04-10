'use client';
import React from 'react';
import '../../assets/js/plugins/fullcalendar.min'
import home from '../../assets/img/icons/home.svg'
import team1 from '../../assets/img/team-1.jpg'
import team2 from '../../assets/img/team-2.jpg'
import team3 from '../../assets/img/team-3.jpg'
import team4 from '../../assets/img/team-4.jpg'
import team5 from '../../assets/img/team-5.jpg'
import Script from "next/script";
import Link from 'next/link'
import Image from 'next/image'
import SideBar from '../../components/SideBar/SideBar'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//
//
// import {
//     faPlus, faArrowUp
// } from "@fortawesome/free-solid-svg-icons";

const Calendar = () => {
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
                                    <Image src={home}></Image>
                                </a>
                            </li>
                            <li className="text-sm pl-2 leading-normal before:float-left before:pr-2 before:text-gray-600 before:content-['/']">
                                <a className="opacity-50 text-slate-700 dark:text-white" href="javascript:;">Pages</a>
                            </li>
                            <li className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-white dark:before:text-white"
                                aria-current="page">Calendar
                            </li>
                        </ol>
                        <h6 className="mb-0 font-bold capitalize dark:text-white">Calendar</h6>
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
                    <div className="flex w-full m-4 ml-auto">
                        <div className="flex ml-auto">
                            <div className="relative pr-6 mt-1">
                                <p className="mb-2 font-semibold leading-tight text-xs text-slate-400">Team members:</p>
                                <div className="flex items-center justify-center">
                                    <div>
                                        <a href="javascript:;"
                                           className="relative z-20 inline-flex items-center justify-center text-white transition-all duration-200 border-2 border-white border-solid w-9 h-9 ease-soft-in-out text-sm rounded-circle hover:z-30">
                                            <Image className="w-full rounded-circle" alt="Image placeholder"
                                                 src={team1}/>
                                        </a>
                                        <a href="javascript:;"
                                           className="relative z-20 inline-flex items-center justify-center -ml-4 text-white transition-all duration-200 border-2 border-white border-solid w-9 h-9 ease-soft-in-out text-sm rounded-circle hover:z-30">
                                            <Image className="w-full rounded-circle" alt="Image placeholder"
                                                   src={team2}/>
                                        </a>
                                        <a href="javascript:;"
                                           className="relative z-20 inline-flex items-center justify-center -ml-4 text-white transition-all duration-200 border-2 border-white border-solid w-9 h-9 ease-soft-in-out text-sm rounded-circle hover:z-30">
                                            <Image className="w-full rounded-circle" alt="Image placeholder"
                                                   src={team3}/>
                                        </a>
                                        <a href="javascript:;"
                                           className="relative z-20 inline-flex items-center justify-center -ml-4 text-white transition-all duration-200 border-2 border-white border-solid w-9 h-9 ease-soft-in-out text-sm rounded-circle hover:z-30">
                                            <Image className="w-full rounded-circle" alt="Image placeholder"
                                                   src={team4}/>
                                        </a>
                                        <a href="javascript:;"
                                           className="relative z-20 inline-flex items-center justify-center -ml-4 text-white transition-all duration-200 border-2 border-white border-solid w-9 h-9 ease-soft-in-out text-sm rounded-circle hover:z-30">
                                            <Image className="w-full rounded-circle" alt="Image placeholder"
                                                   src={team5}/>
                                        </a>
                                    </div>
                                </div>
                                <hr className="absolute top-0 right-0 w-px h-full mt-0 bg-transparent bg-gradient-to-b from-transparent via-black/40 to-transparent"/>
                            </div>
                            <div className="pl-6">
                                <button type="button"
                                        className="mt-4 inline-block w-9 h-9 p-2.8 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-slate-700 border-solid rounded-lg cursor-pointer leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 active:opacity-85 text-slate-700 active:bg-slate-700 active:text-white">
                                    {/*<FontAwesomeIcon*/}
                                    {/*    icon={faPlus}*/}
                                    {/*/>*/}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-full px-3 shrink-0 xl:flex-0 xl:w-9/12">
                        <div
                            className="relative flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="flex-auto p-4">
                                <div data-toggle="widget-calendar"
                                     className="fc fc-media-screen fc-direction-ltr fc-theme-standard">
                                    <div className="fc-view-harness fc-view-harness-passive">
                                        <div className="fc-daygrid fc-dayGridMonth-view fc-view">
                                            <table className="fc-scrollgrid ">
                                                <thead>
                                                <tr className="fc-scrollgrid-section fc-scrollgrid-section-header ">
                                                    <td>
                                                        <div className="fc-scroller-harness">
                                                            <div className="fc-scroller" style={{overflow: "visible"}}>
                                                                <table className="fc-col-header " >
                                                                    <colgroup></colgroup>
                                                                    <tbody>
                                                                    <tr>
                                                                        <th className="fc-col-header-cell fc-day fc-day-sun">
                                                                            <div className="fc-scrollgrid-sync-inner"><a
                                                                                className="fc-col-header-cell-cushion ">Sun</a>
                                                                            </div>
                                                                        </th>
                                                                        <th className="fc-col-header-cell fc-day fc-day-mon">
                                                                            <div className="fc-scrollgrid-sync-inner"><a
                                                                                className="fc-col-header-cell-cushion ">Mon</a>
                                                                            </div>
                                                                        </th>
                                                                        <th className="fc-col-header-cell fc-day fc-day-tue">
                                                                            <div className="fc-scrollgrid-sync-inner"><a
                                                                                className="fc-col-header-cell-cushion ">Tue</a>
                                                                            </div>
                                                                        </th>
                                                                        <th className="fc-col-header-cell fc-day fc-day-wed">
                                                                            <div className="fc-scrollgrid-sync-inner"><a
                                                                                className="fc-col-header-cell-cushion ">Wed</a>
                                                                            </div>
                                                                        </th>
                                                                        <th className="fc-col-header-cell fc-day fc-day-thu">
                                                                            <div className="fc-scrollgrid-sync-inner"><a
                                                                                className="fc-col-header-cell-cushion ">Thu</a>
                                                                            </div>
                                                                        </th>
                                                                        <th className="fc-col-header-cell fc-day fc-day-fri">
                                                                            <div className="fc-scrollgrid-sync-inner"><a
                                                                                className="fc-col-header-cell-cushion ">Fri</a>
                                                                            </div>
                                                                        </th>
                                                                        <th className="fc-col-header-cell fc-day fc-day-sat">
                                                                            <div className="fc-scrollgrid-sync-inner"><a
                                                                                className="fc-col-header-cell-cushion ">Sat</a>
                                                                            </div>
                                                                        </th>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr className="fc-scrollgrid-section fc-scrollgrid-section-body ">
                                                    <td>
                                                        <div className="fc-scroller-harness">
                                                            <div className="fc-scroller" style={{overflow: "visible"}}>
                                                                <div
                                                                    className="fc-daygrid-body fc-daygrid-body-unbalanced fc-daygrid-body-natural"
                                                                    >
                                                                    <table className="fc-scrollgrid-sync-table"
                                                                           >
                                                                        <colgroup></colgroup>
                                                                        <tbody>
                                                                        <tr>
                                                                            <td className="fc-daygrid-day fc-day fc-day-sun fc-day-past fc-day-other"
                                                                                data-date="2020-11-29">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">29</a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-event-harness">
                                                                                            <a className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past bg-gradient-to-tl from-green-600 to-lime-400">
                                                                                                <div
                                                                                                    className="fc-event-main">
                                                                                                    <div
                                                                                                        className="fc-event-main-frame">
                                                                                                        <div
                                                                                                            className="fc-event-title-container">
                                                                                                            <Link href={'/timeline'}>
                                                                                                                <div
                                                                                                                    className="fc-event-title fc-sticky">All
                                                                                                                    day
                                                                                                                    conference
                                                                                                                </div>
                                                                                                            </Link>

                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="fc-event-resizer fc-event-resizer-end"></div>
                                                                                            </a></div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-mon fc-day-past fc-day-other"
                                                                                data-date="2020-11-30">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">30</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-tue fc-day-past"
                                                                                data-date="2020-12-01">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">1</a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-event-harness">
                                                                                            <a className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past bg-gradient-to-tl from-blue-600 to-cyan-400">
                                                                                                <div
                                                                                                    className="fc-event-main">
                                                                                                    <div
                                                                                                        className="fc-event-main-frame">
                                                                                                        <div
                                                                                                            className="fc-event-title-container">
                                                                                                            <Link href={'/timeline'}>
                                                                                                                <div
                                                                                                                    className="fc-event-title fc-sticky">Meeting
                                                                                                                    with Mary
                                                                                                                </div>
                                                                                                            </Link>

                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="fc-event-resizer fc-event-resizer-end"></div>
                                                                                            </a></div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-wed fc-day-past"
                                                                                data-date="2020-12-02">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">2</a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-event-harness">
                                                                                            <a className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past bg-gradient-to-tl from-red-500 to-yellow-400">
                                                                                                <div
                                                                                                    className="fc-event-main">
                                                                                                    <div
                                                                                                        className="fc-event-main-frame">
                                                                                                        <div
                                                                                                            className="fc-event-title-container">
                                                                                                            <Link href={'/timeline'}>
                                                                                                                <div
                                                                                                                    className="fc-event-title fc-sticky">Cyber
                                                                                                                    Week
                                                                                                                </div>
                                                                                                            </Link>

                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="fc-event-resizer fc-event-resizer-end"></div>
                                                                                            </a></div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-thu fc-day-past"
                                                                                data-date="2020-12-03">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">3</a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-event-harness">
                                                                                            <a className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past bg-gradient-to-tl from-red-600 to-rose-400">
                                                                                                <div
                                                                                                    className="fc-event-main">
                                                                                                    <div
                                                                                                        className="fc-event-main-frame">
                                                                                                        <div
                                                                                                            className="fc-event-title-container">
                                                                                                            <Link href={'/timeline'}>
                                                                                                                <div
                                                                                                                    className="fc-event-title fc-sticky">Winter
                                                                                                                    Hackaton
                                                                                                                </div>
                                                                                                            </Link>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="fc-event-resizer fc-event-resizer-end"></div>
                                                                                            </a></div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-fri fc-day-past"
                                                                                data-date="2020-12-04">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">4</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-sat fc-day-past"
                                                                                data-date="2020-12-05">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">5</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="fc-daygrid-day fc-day fc-day-sun fc-day-past"
                                                                                data-date="2020-12-06">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">6</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-mon fc-day-past"
                                                                                data-date="2020-12-07">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">7</a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events"
                                                                                         style={{paddingBottom: "29.1484px"}}>
                                                                                        <div
                                                                                            className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                                                            style={{right: "-123.711px"}}><a
                                                                                            className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past bg-gradient-to-tl from-red-500 to-yellow-400">
                                                                                            <div className="fc-event-main">
                                                                                                <div
                                                                                                    className="fc-event-main-frame">
                                                                                                    <div
                                                                                                        className="fc-event-title-container">
                                                                                                        <Link href={'/timeline'}>
                                                                                                            <div
                                                                                                                className="fc-event-title fc-sticky">Digital
                                                                                                                event
                                                                                                            </div>
                                                                                                        </Link>

                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                className="fc-event-resizer fc-event-resizer-end"></div>
                                                                                        </a></div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-tue fc-day-past"
                                                                                data-date="2020-12-08">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">8</a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events"
                                                                                         style={{paddingBottom: "29.1484px"}}></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-wed fc-day-past"
                                                                                data-date="2020-12-09">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">9</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-thu fc-day-past"
                                                                                data-date="2020-12-10">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">10</a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-event-harness">
                                                                                            <a className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past bg-gradient-to-tl from-purple-700 to-pink-500">
                                                                                                <div
                                                                                                    className="fc-event-main">
                                                                                                    <div
                                                                                                        className="fc-event-main-frame">
                                                                                                        <div
                                                                                                            className="fc-event-title-container">
                                                                                                            <Link href={'/timeline'}>
                                                                                                                <div
                                                                                                                    className="fc-event-title fc-sticky">Marketing
                                                                                                                    event
                                                                                                                </div>
                                                                                                            </Link>

                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="fc-event-resizer fc-event-resizer-end"></div>
                                                                                            </a></div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-fri fc-day-past"
                                                                                data-date="2020-12-11">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">11</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-sat fc-day-past"
                                                                                data-date="2020-12-12">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">12</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="fc-daygrid-day fc-day fc-day-sun fc-day-past"
                                                                                data-date="2020-12-13">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">13</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-mon fc-day-past"
                                                                                data-date="2020-12-14">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">14</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-tue fc-day-past"
                                                                                data-date="2020-12-15">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">15</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-wed fc-day-past"
                                                                                data-date="2020-12-16">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">16</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-thu fc-day-past"
                                                                                data-date="2020-12-17">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">17</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-fri fc-day-past"
                                                                                data-date="2020-12-18">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">18</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-sat fc-day-past"
                                                                                data-date="2020-12-19">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">19</a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-event-harness">
                                                                                            <a className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past bg-gradient-to-tl from-red-600 to-rose-400">
                                                                                                <div
                                                                                                    className="fc-event-main">
                                                                                                    <div
                                                                                                        className="fc-event-main-frame">
                                                                                                        <div
                                                                                                            className="fc-event-title-container">
                                                                                                            <Link href={'/timeline'}>
                                                                                                                <div
                                                                                                                    className="fc-event-title fc-sticky">Dinner
                                                                                                                    with Family
                                                                                                                </div>
                                                                                                            </Link>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="fc-event-resizer fc-event-resizer-end"></div>
                                                                                            </a></div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="fc-daygrid-day fc-day fc-day-sun fc-day-past"
                                                                                data-date="2020-12-20">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">20</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-mon fc-day-past"
                                                                                data-date="2020-12-21">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">21</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-tue fc-day-past"
                                                                                data-date="2020-12-22">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">22</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-wed fc-day-past"
                                                                                data-date="2020-12-23">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">23</a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-event-harness">
                                                                                            <a className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past bg-gradient-to-tl from-blue-600 to-cyan-400">
                                                                                                <div
                                                                                                    className="fc-event-main">
                                                                                                    <div
                                                                                                        className="fc-event-main-frame">
                                                                                                        <div
                                                                                                            className="fc-event-title-container">
                                                                                                            <Link href={'/timeline'}>
                                                                                                                <div
                                                                                                                    className="fc-event-title fc-sticky">Black
                                                                                                                    Friday
                                                                                                                </div>
                                                                                                            </Link>

                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="fc-event-resizer fc-event-resizer-end"></div>
                                                                                            </a></div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-thu fc-day-past"
                                                                                data-date="2020-12-24">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">24</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-fri fc-day-past"
                                                                                data-date="2020-12-25">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">25</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-sat fc-day-past"
                                                                                data-date="2020-12-26">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">26</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="fc-daygrid-day fc-day fc-day-sun fc-day-past"
                                                                                data-date="2020-12-27">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">27</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-mon fc-day-past"
                                                                                data-date="2020-12-28">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">28</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-tue fc-day-past"
                                                                                data-date="2020-12-29">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">29</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-wed fc-day-past"
                                                                                data-date="2020-12-30">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">30</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-thu fc-day-past"
                                                                                data-date="2020-12-31">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">31</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-fri fc-day-past fc-day-other"
                                                                                data-date="2021-01-01">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">1</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-sat fc-day-past fc-day-other"
                                                                                data-date="2021-01-02">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">2</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="fc-daygrid-day fc-day fc-day-sun fc-day-past fc-day-other"
                                                                                data-date="2021-01-03">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">3</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-mon fc-day-past fc-day-other"
                                                                                data-date="2021-01-04">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">4</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-tue fc-day-past fc-day-other"
                                                                                data-date="2021-01-05">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">5</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-wed fc-day-past fc-day-other"
                                                                                data-date="2021-01-06">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">6</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-thu fc-day-past fc-day-other"
                                                                                data-date="2021-01-07">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">7</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-fri fc-day-past fc-day-other"
                                                                                data-date="2021-01-08">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">8</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="fc-daygrid-day fc-day fc-day-sat fc-day-past fc-day-other"
                                                                                data-date="2021-01-09">
                                                                                <div
                                                                                    className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top"><a
                                                                                        className="fc-daygrid-day-number">9</a>
                                                                                    </div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-events"></div>
                                                                                    <div
                                                                                        className="fc-daygrid-day-bg"></div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
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

                    <div className="w-full max-w-full px-3 shrink-0 xl:flex-0 xl:w-3/12">
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full max-w-full px-3 mt-6 shrink-0 md:flex-0 md:w-6/12 xl:w-full xl:mt-0">
                                <div
                                    className="relative flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">

                                    <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0">
                                        <h6 className="mb-0 dark:text-white">Next events</h6>
                                    </div>

                                    <div className="flex-auto p-4 rounded-xl">

                                        <div className="flex">
                                            <div>
                                                <div
                                                    className="inline-block w-12 h-12 text-center text-black bg-center rounded-lg shadow-none fill-current stroke-none bg-red-600/3">
                                                    <i className="ni leading-none ni-money-coins text-lg text-transparent bg-clip-text bg-gradient-to-tl from-red-600 to-rose-400 relative z-1 top-3.5"></i>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <div>
                                                    <h6 className="mb-1 leading-normal dark:text-white text-sm text-slate-700">Cyber
                                                        Week</h6>
                                                    <span
                                                        className="leading-normal text-sm">21 March 2021, at 12:30 PM</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex mt-6">
                                            <div>
                                                <div
                                                    className="inline-block w-12 h-12 text-center text-black bg-center rounded-lg shadow-none fill-current stroke-none bg-purple-700/3">
                                                    <i className="ni leading-none ni-bell-55 text-lg text-transparent bg-clip-text bg-gradient-to-tl from-purple-700 to-pink-500 relative z-1 top-3.5"></i>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <div>
                                                    <h6 className="mb-1 leading-normal dark:text-white text-sm text-slate-700">Meeting
                                                        with Marry</h6>
                                                    <span
                                                        className="leading-normal text-sm">24 March 2021, at 10:00 PM</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex mt-6">
                                            <div>
                                                <div
                                                    className="inline-block w-12 h-12 text-center text-black bg-center rounded-lg shadow-none fill-current stroke-none bg-green-600/3">
                                                    <i className="ni leading-none ni-books text-lg text-transparent bg-clip-text bg-gradient-to-tl from-green-600 to-lime-400 relative z-1 top-3.5"></i>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <div>
                                                    <h6 className="mb-1 leading-normal dark:text-white text-sm text-slate-700">Book
                                                        Deposit Hall</h6>
                                                    <span
                                                        className="leading-normal text-sm">25 March 2021, at 9:30 AM</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex mt-6">
                                            <div>
                                                <div
                                                    className="inline-block w-12 h-12 text-center text-black bg-center rounded-lg shadow-none fill-current stroke-none bg-red-500/3">
                                                    <i className="ni leading-none ni-delivery-fast text-lg text-transparent bg-clip-text bg-gradient-to-tl from-red-500 to-yellow-400 relative z-1 top-3.5"></i>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <div>
                                                    <h6 className="mb-1 leading-normal dark:text-white text-sm text-slate-700">Shipment
                                                        Deal UK</h6>
                                                    <span
                                                        className="leading-normal text-sm">25 March 2021, at 2:00 PM</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex mt-6">
                                            <div>
                                                <div
                                                    className="inline-block w-12 h-12 text-center text-black bg-center rounded-lg shadow-none fill-current stroke-none bg-blue-600/3">
                                                    <i className="ni leading-none ni-palette text-lg text-transparent bg-clip-text bg-gradient-to-tl from-blue-600 to-cyan-400 relative z-1 top-3.5"></i>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <div>
                                                    <h6 className="mb-1 leading-normal dark:text-white text-sm text-slate-700">Verify
                                                        Dashboard Color Palette</h6>
                                                    <span
                                                        className="leading-normal text-sm">26 March 2021, at 9:00 AM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full max-w-full px-3 mt-6 shrink-0 md:flex-0 md:w-6/12 xl:w-full">
                                <div
                                    className="relative flex flex-col min-w-0 break-words border-0 bg-gradient-to-tl from-gray-900 to-slate-800 dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                                    <div
                                        className="border-black/12.5 rounded-t-2xl border-b-0 border-solid bg-transparent p-4 pb-0">
                                        <div className="flex flex-wrap -mx-3">
                                            <div className="w-7/12 max-w-full px-3 flex-0">
                                                <h6 className="mb-0 text-white">Productivity</h6>
                                                <p className="leading-normal text-white text-sm">

                                                    {/*<FontAwesomeIcon icon={faArrowUp}/>*/}
                                                    <span className="font-semibold">4% more</span>
                                                    in 2021
                                                </p>
                                            </div>
                                            <div className="w-5/12 max-w-full px-3 text-right flex-0">
                                                <div className="relative mr-4 text-right">
                                                    <a href="javascript:;" className="cursor-pointer" dropdown-trigger
                                                       aria-expanded="false">
                                                        <i className="text-white fa fa-ellipsis-h"></i>
                                                    </a>
                                                    <p className="hidden transform-dropdown-show"></p>
                                                    <ul dropdown-menu
                                                        className="dark:shadow-soft-dark-xl z-100 dark:bg-gray-950 text-sm lg:shadow-soft-3xl duration-250 before:duration-350 before:font-awesome before:ease-soft min-w-44 before:text-5.5 transform-dropdown pointer-events-none absolute right-0 left-auto top-0 m-0 -mr-4 mt-2 list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-0 py-2 text-left text-slate-500 opacity-0 transition-all before:absolute before:right-7 before:left-auto before:top-0 before:z-40 before:text-white before:transition-all before:content-['\f0d8'] sm:-mr-6">
                                                        <li>
                                                            <a className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                                                               href="javascript:;">Action</a>
                                                        </li>
                                                        <li>
                                                            <a className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                                                               href="javascript:;">Another action</a>
                                                        </li>
                                                        <li>
                                                            <a className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                                                               href="javascript:;">Something else here</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-auto p-0">
                                        <div>
                                            <canvas id="chart-line-3" height="100"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </>

    );
};

export default Calendar;