'use client';
import './globals.css'
import '../assets/css/full-calendar.css'
import "../assets/css/nucleo-icons.css";
import "../assets/css/datatable.css";
import "../assets/css/choices.css";
import "../assets/css/dropzone.css";
import "../assets/css/editor-quill.css";
import "../assets/css/flatpickr.css";
import "../assets/css/full-calendar.css";
import "../assets/css/kanban.css";
// import "../assets/css/leaflet.css";
import "../assets/css/noui-slider.css";
import "../assets/css/nucleo-icons.css";
import "../assets/css/perfect-scrollbar.css";
import "../assets/css/photo-swipe.css";
import "../assets/css/sweet-alerts.css";
import "../assets/css/tooltips.css";
import "../assets/css/nucleo-svg.css";
import "../assets/css/soft-ui-dashboard-tailwind.css";
import "../assets/css/soft-ui-dashboard-tailwind.min.css";
// import "js/charts";
// import "js/plugins/chartjs.min";
// import 'js/plugins/fullcalendar.min'
import Head from "next/head";
import Image from "next/image";
import Script from 'next/script'
import SideBar from "../components/SideBar/SideBar";
import Footer from "./../components/Footer";
// import 'js/charts';
import '../assets/css/soft-ui-dashboard-tailwind.css'
// import 'js/charts'
// import 'js/plugins/chartjs.min'


import {Open_Sans} from 'next/font/google'
import React from "react";
import facebook from "@/assets/img/icons/facebook.svg";
import apple from "@/assets/img/icons/apple.svg";
import google from "@/assets/img/icons/google.svg";
import Link from "next/link";
import axios from "axios";

import Context, {MemberContext} from "../context/context";
import {useContext,useEffect,useState} from "react";
import {useRouter} from "next/router";


const inter = Open_Sans({subsets: ['latin']})

export default function RootLayout({children}) {

    return (
        <html lang="en">
        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png"/>
            <link rel="icon" type="image/png" href="../assets/img/favicon.png"/>
            <title>Soft UI Dashboard PRO Tailwind by HemenOfis</title>

            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"/>

            <link href="../assets/css/nucleo-icons.css" rel="stylesheet"/>
            <link href="../assets/css/nucleo-svg.css" rel="stylesheet"/>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
                rel="stylesheet"/>
            <Script src="js/plugins/fullcalendar.min.js"/>

            <Script src="js/charts.js"/>
            <Script src="js/plugins/threejs.js"/>
            <Script src="js/plugins/orbit-controls.js"/>
            <Script src="js/plugins/perfect-scrollbar.min.js"/>
            <Script src="js/soft-ui-dashboard-pro-tailwind.js?v=1.0.1"/>
            <Script src="js/plugins/fullcalendar.min.js"/>
            <Script src="js/plugins/chartjs.min.js"/>
            <Script src="js/plugins/perfect-scrollbar.min.js"/>
            <Script src="js/plugins/perfect-scrollbar.min.js"/>
        </Head>
        <body className="m-0 font-sans text-base antialiased
                      font-normal text-left leading-default dark:bg-slate-950
                      bg-gray-50 text-slate-500 dark:text-white">



        <main
            className={inter.className + ' relative h-full max-h-screen transition-all duration-200 ease-soft-in-out xl:ml-68 rounded-xl'}>
            <Context>
                {children}
            </Context>
            <Footer/>
        </main>


        <Script src="/charts.js"/>
        <Script src="/Chart.extension.js"/>
        <Script src="/chartjs.min.js"/>

        </body>
        </html>
    )

    // const {login, member} = useContext(MemberContext);
    // console.log(member,'member')
    //
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm()
    //
    // if (!member) {
    //     return (
    //         <>
    //             <html lang="en">
    //             <Head>
    //                 <meta charSet="utf-8"/>
    //                 <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    //                 <link rel="apple-touch-icon" sizes="76x76" href="./../../assets/img/apple-icon.png"/>
    //                 <link rel="icon" type="image/png" href="../../assets/img/favicon.png"/>
    //                 <title>Panel</title>
    //
    //                 <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"/>
    //
    //                 <link href="./../assets/css/soft-ui-dashboard-tailwind.css?v=1.0.1" rel="stylesheet"/>
    //
    //                 <Script src="https://kit.fontawesome.com/42d5adcbca.js" crossOrigin="anonymous"></Script>
    //                 <Script src="../assets/js/charts.js" crossOrigin="anonymous"/>
    //                 <Script src="js/plugins/chartjs.min.js"/>
    //                 <Script src="/charts.js"/>
    //                 <Script src="js/plugins/threejs.js"/>
    //                 <Script src="js/plugins/orbit-controls.js"/>
    //                 <Script src="js/plugins/perfect-scrollbar.min.js"/>
    //                 <Script src="js/soft-ui-dashboard-pro-tailwind.js?v=1.0.1"/>
    //                 <Script src="js/plugins/fullcalendar.min.js"/>
    //                 <Script src="js/plugins/chartjs.min.js"/>
    //                 <Script src="js/plugins/perfect-scrollbar.min.js"/>
    //                 <Script src="https://unpkg.com/@popperjs/core@2"></Script>
    //                 <Script src="js/plugins/jkanban.min.js"></Script>
    //                 <Script src="js/plugins/dragula.min.js"></Script>
    //                 <Script src="js/plugins/perfect-scrollbar.min.js"></Script>
    //
    //                 <Script src="js/soft-ui-dashboard-pro-tailwind.js?v=1.0.1"></Script>
    //             </Head>
    //
    //             <body className="m-0 font-sans antialiased
    //                                font-normal text-left leading-default text-base
    //                                dark:bg-slate-950 bg-gray-50 text-slate-500 dark:text-white/80">
    //             <main className="mt-0 transition-all duration-200 ease-soft-in-out">
    //                 <div
    //                     className="pb-56 pt-12 m-4 min-h-50-screen items-start rounded-xl p-0 relative overflow-hidden flex bg-cover bg-center ">
    //                     <span
    //                         className="absolute top-0 left-0 w-full h-full bg-center bg-cover opacity-60 bg-gradient-to-tl from-gray-900 to-slate-800"></span>
    //                     <div className="container z-1">
    //                         <div className="flex flex-wrap justify-center -mx-3">
    //                             <div
    //                                 className="w-full max-w-full px-3 mx-auto text-center shrink-0 lg:flex-0 lg:w-5/12">
    //                                 <h1 className="mt-12 mb-2 text-white">Welcome!</h1>
    //                                 <p className="text-white ">Use these awesome forms to login or create new account in
    //                                     your project for free.</p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="container">
    //                     <div className="flex flex-wrap justify-center -mx-3 -mt-48 lg:-mt-48 md:-mt-56">
    //                         <div
    //                             className="w-full max-w-full px-3 mx-auto shrink-0 md:flex-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
    //                             <div
    //                                 className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
    //                                 <div
    //                                     className="text-center border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6">
    //                                     <h5>Sign in</h5>
    //                                 </div>
    //                                 <div className="flex flex-wrap px-4 -mx-3 sm:px-6 xl:px-12">
    //                                     <div className="w-3/12 max-w-full px-1 ml-auto flex-0">
    //                                         <a className="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75"
    //                                            href="javascript:;">
    //                                             <Image src={facebook}></Image>
    //                                         </a>
    //                                     </div>
    //                                     <div className="w-3/12 max-w-full px-1 flex-0">
    //                                         <a className="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75"
    //                                            href="javascript:;">
    //                                             <Image src={apple}></Image>
    //                                         </a>
    //                                     </div>
    //                                     <div className="w-3/12 max-w-full px-1 mr-auto flex-0">
    //                                         <a className="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75"
    //                                            href="javascript:;">
    //                                             <Image src={google}></Image>
    //                                         </a>
    //                                     </div>
    //                                 </div>
    //                                 <div className="flex-auto p-6 text-center">
    //                                     <form onSubmit={handleSubmit((data) =>  login(data.email, data.password))}>
    //                                         <div className="mb-4">
    //                                             <input type="email" {...register('email', { required: true })}
    //                                                    className="text-sm focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
    //                                                    placeholder="Email" />
    //
    //                                         </div>
    //                                         <div className="mb-4">
    //                                             <input type="password" {...register('password', { required: true })}
    //                                                    className="text-sm focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
    //                                                    placeholder="Password" />
    //                                             {errors.password &&
    //                                                 <span className="text-validation mb-2">Password is required.</span>}
    //                                         </div>
    //                                         <div className="text-center">
    //                                             <input type="submit" value={'Sign In'}
    //                                                    className="inline-block w-full px-6 py-3 mt-6 mb-2
    //                                                 font-bold text-center text-white uppercase align-middle transition-all bg-transparent
    //                                                  border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs
    //                                                  leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150
    //                                                   bg-x-25 bg-gradient-to-tl from-blue-600 to-cyan-400 hover:border-slate-700 hover:bg-slate-700 hover:text-white">
    //
    //                                             </input>
    //                                         </div>
    //                                         <div className="relative w-full max-w-full px-3 mb-2 text-center shrink-0">
    //                                             <p className="inline mb-2 px-4 text-slate-400 bg-white z-2 text-sm leading-normal font-semibold before:bg-gradient-to-r before:from-transparent before:via-neutral-500/40 before:to-neutral-500/40 before:right-2 before:-ml-1/2 before:content-[''] before:inline-block before:w-3/10 before:h-px before:relative before:align-middle after:left-2 after:-mr-1/2 after:bg-gradient-to-r after:from-neutral-500/40 after:via-neutral-500/40 after:to-transparent after:content-[''] after:inline-block after:w-3/10 after:h-px after:relative after:align-middle">Don't
    //                                                 have an account?</p>
    //                                         </div>
    //                                         <div className="text-center">
    //                                             <a href="/"
    //                                                className="inline-block w-full px-6 py-3 mt-2 mb-6 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white">Sign
    //                                                 up</a>
    //                                         </div>
    //                                     </form>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </main>
    //
    //             <footer className="py-12">
    //                 <div className="container">
    //                     <div className="flex flex-wrap -mx-3">
    //                         <div
    //                             className="w-full max-w-full px-3 mx-auto mb-6 text-center shrink-0 lg:flex-0 lg:w-8/12">
    //                             <a href="javascript:;" target="_blank"
    //                                className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12">Company</a>
    //                             <a href="javascript:;" target="_blank"
    //                                className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12">About
    //                                 Us</a>
    //                             <a href="javascript:;" target="_blank"
    //                                className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12">Team</a>
    //                             <a href="javascript:;" target="_blank"
    //                                className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12">Products</a>
    //                             <a href="javascript:;" target="_blank"
    //                                className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12">Blog</a>
    //                             <a href="javascript:;" target="_blank"
    //                                className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12">Pricing</a>
    //                         </div>
    //                         <div
    //                             className="w-full max-w-full px-3 mx-auto mt-2 mb-6 text-center shrink-0 lg:flex-0 lg:w-8/12">
    //                             <a href="javascript:;" className="mr-6 text-slate-400">
    //                                 <span className="text-lg fab fa-dribbble" aria-hidden="true"></span>
    //                             </a>
    //                             <a href="javascript:;" className="mr-6 text-slate-400">
    //                                 <span className="text-lg fab fa-twitter" aria-hidden="true"></span>
    //                             </a>
    //                             <a href="javascript:;" className="mr-6 text-slate-400">
    //                                 <span className="text-lg fab fa-instagram" aria-hidden="true"></span>
    //                             </a>
    //                             <a href="javascript:;" className="mr-6 text-slate-400">
    //                                 <span className="text-lg fab fa-pinterest" aria-hidden="true"></span>
    //                             </a>
    //                             <a href="javascript:;" className="mr-6 text-slate-400">
    //                                 <span className="text-lg fab fa-github" aria-hidden="true"></span>
    //                             </a>
    //                         </div>
    //                     </div>
    //                     <div className="flex flex-wrap -mx-3">
    //                         <div className="w-8/12 max-w-full px-3 mx-auto mt-1 text-center flex-0">
    //                             <p className="mb-0 text-slate-400">
    //                                 Copyright ©
    //                                 {/*<script>document.write(new Date().getFullYear())</script>*/}
    //                                 Soft by Creative Tim.
    //                             </p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </footer>
    //
    //             </body>
    //
    //             {/*<script src="../../assets/js/plugins/perfect-scrollbar.min.js"></script>*/}
    //
    //             {/*<script src="../../assets/js/soft-ui-dashboard-pro-tailwind.js?v=1.0.1"></script>*/}
    //             </html>
    //         </>
    //     )
    // } else {
    //     return (<>
    //
    //
    //             <SideBar/>
    //             <nav navbar-main
    //                  className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 mt-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start"
    //                  navbar-scroll="true">
    //                 <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
    //                     <nav>
    //
    //                         <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
    //                             <li className="text-sm leading-normal breadcrumb-item">
    //                                 <a className="text-slate-700 opacity-30 dark:text-white" href="javascript:;">
    //                                     {/**/}
    //                                 </a>
    //                             </li>
    //                             <li className="text-sm pl-2 leading-normal before:float-left before:pr-2 before:text-gray-600 before:content-['/']">
    //                                 <a className="opacity-50 text-slate-700 dark:text-white"
    //                                    href="javascript:;">Pages</a>
    //                             </li>
    //                             <li className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-white dark:before:text-white"
    //                                 aria-current="page">Dashboard
    //                             </li>
    //                         </ol>
    //                         <h6 className="mb-0 font-bold capitalize dark:text-white">Dashboard</h6>
    //                     </nav>
    //
    //                     <div className="flex items-center">
    //                         <a mini-sidenav-burger href="javascript:;"
    //                            className="hidden p-0 text-sm transition-all ease-nav-brand text-slate-500 xl:block"
    //                            aria-expanded="false">
    //                             <div className="w-4.5 overflow-hidden">
    //                                 <i className="ease-soft mb-0.75 relative block h-0.5 translate-x-[5px] rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
    //                                 <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
    //                                 <i className="ease-soft relative block h-0.5 translate-x-[5px] rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
    //                             </div>
    //                         </a>
    //                     </div>
    //
    //                     <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto"
    //                          id="navbar">
    //                         <div className="flex items-center md:ml-auto md:pr-4">
    //                             <div
    //                                 className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
    //
    //                             </div>
    //                         </div>
    //                         <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
    //
    //                             <li className="flex items-center">
    //                                 <a href="/"
    //                                    className="block px-0 py-2 text-sm font-semibold transition-all ease-nav-brand text-slate-500 dark:text-white">
    //                                     {/*<FontAwesomeIcon className={' sm:mr-1'}*/}
    //                                     {/*    icon={faUser}*/}
    //                                     {/*/>*/}
    //                                     <Image src={memberIcon} width={20}></Image>
    //                                     <span className="hidden sm:inline ml-2">{member.coworkName}</span>
    //                                 </a>
    //                             </li>
    //                             <li className="flex items-center pl-4 xl:hidden">
    //                                 <a sidenav-trigger
    //                                    className="block p-0 text-sm transition-all ease-nav-brand text-slate-500 dark:text-white"
    //                                    href="javascript:;" aria-expanded="false">
    //                                     <div className="w-4.5 overflow-hidden">
    //                                         <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
    //                                         <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
    //                                         <i className="ease-soft relative block h-0.5 rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
    //                                     </div>
    //                                 </a>
    //                             </li>
    //                             <li className="flex items-center px-4">
    //                                 <Link href="/settings"
    //                                       className="p-0 text-sm transition-all ease-nav-brand text-slate-500 dark:text-white">
    //
    //                                     {/*<FontAwesomeIcon className={' sm:mr-1'}*/}
    //                                     {/*                 icon={faCog}*/}
    //                                     {/*/>*/}
    //                                 </Link>
    //                             </li>
    //
    //
    //                             <li className="relative flex items-center pr-2">
    //                                 <p className="hidden transform-dropdown-show"></p>
    //                                 <a dropdown-trigger href="javascript:;"
    //                                    className="block p-0 text-sm transition-all ease-nav-brand text-slate-500 dark:text-white"
    //                                    aria-expanded="false">
    //                                     <i className="cursor-pointer fa fa-bell" aria-hidden="true"></i>
    //                                 </a>
    //
    //                                 <ul dropdown-menu
    //                                     className="text-sm transform-dropdown before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-soft-3xl duration-250 min-w-44 before:sm:right-7 before:text-5.5 dark:bg-gray-950 pointer-events-none absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:right-2 before:left-auto before:top-0 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-['\f0d8'] sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer">
    //
    //                                     <li className="relative mb-2">
    //                                         <a className="group ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-200/80 lg:transition-colors"
    //                                            href="javascript:;">
    //                                             <div className="flex py-1">
    //                                                 <div className="my-auto">
    //                                                     <img src="./assets/img/team-2.jpg"
    //                                                          className="inline-flex items-center justify-center mr-4 text-sm text-white h-9 w-9 max-w-none rounded-xl"/>
    //                                                 </div>
    //                                                 <div className="flex flex-col justify-center">
    //                                                     <h6 className="mb-1 text-sm font-normal leading-normal group-hover:text-slate-700 dark:text-white">
    //                                                         <span className="font-semibold">New message</span> from Laur
    //                                                     </h6>
    //                                                     <p className="mb-0 text-xs leading-tight text-slate-400 group-hover:text-slate-700 dark:text-white dark:opacity-80">
    //                                                         <i className="mr-1 fa fa-clock" aria-hidden="true"></i>
    //                                                         13 minutes ago
    //                                                     </p>
    //                                                 </div>
    //                                             </div>
    //                                         </a>
    //                                     </li>
    //
    //                                     <li className="relative mb-2">
    //                                         <a className="group ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-200/80"
    //                                            href="javascript:;">
    //                                             <div className="flex py-1">
    //                                                 <div className="my-auto">
    //                                                     <img src="./assets/img/small-logos/logo-spotify.svg"
    //                                                          className="inline-flex items-center justify-center mr-4 text-sm text-white bg-gradient-to-tl from-gray-900 to-slate-800 dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 h-9 w-9 max-w-none rounded-xl"/>
    //                                                 </div>
    //                                                 <div className="flex flex-col justify-center">
    //                                                     <h6 className="mb-1 text-sm font-normal leading-normal group-hover:text-slate-700 dark:text-white">
    //                                                         <span className="font-semibold">New album</span> by Travis
    //                                                         Scott
    //                                                     </h6>
    //                                                     <p className="mb-0 text-xs leading-tight text-slate-400 group-hover:text-slate-700 dark:text-white dark:opacity-80">
    //                                                         <i className="mr-1 fa fa-clock" aria-hidden="true"></i>
    //                                                         1 day
    //                                                     </p>
    //                                                 </div>
    //                                             </div>
    //                                         </a>
    //                                     </li>
    //
    //                                     <li className="relative">
    //                                         <a className="group ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-200/80"
    //                                            href="javascript:;">
    //                                             <div className="flex py-1">
    //                                                 <div
    //                                                     className="inline-flex items-center justify-center my-auto mr-4 text-sm text-white transition-all duration-200 ease-nav-brand bg-gradient-to-tl from-slate-600 to-slate-300 h-9 w-9 rounded-xl">
    //
    //                                                 </div>
    //                                                 <div className="flex flex-col justify-center">
    //                                                     <h6 className="mb-1 text-sm font-normal leading-normal group-hover:text-slate-700 dark:text-white">Payment
    //                                                         successfully completed</h6>
    //                                                     <p className="mb-0 text-xs leading-tight text-slate-400 group-hover:text-slate-700 dark:text-white dark:opacity-80">
    //                                                         <i className="mr-1 fa fa-clock" aria-hidden="true"></i>
    //                                                         2 days
    //                                                     </p>
    //                                                 </div>
    //                                             </div>
    //                                         </a>
    //                                     </li>
    //                                 </ul>
    //                             </li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             </nav>
    //             <div className={"w-full p-6 mx-auto"}>
    //                 <div className="flex flex-wrap -mx-3">
    //                     <div className="w-full max-w-full px-3 lg:flex-0 shrink-0 lg:w-7/12 xl:w-8/12">
    //                         <div className="flex flex-wrap -mx-3">
    //                             <div className="w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-4/12">
    //                                 <div
    //                                     className="border-black/12.5 shadow-soft-xl dark:bg-gray-950 dark:shadow-soft-dark-xl relative flex min-w-0 flex-col overflow-hidden break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
    //                                     <div className="p-4 pb-0 rounded-t-2xl">
    //                                         <p className="mb-0 font-semibold leading-normal capitalize text-sm dark:text-white dark:opacity-60">Capacity</p>
    //                                         <h5 className="mb-0 font-bold dark:text-white">
    //                                             5,927
    //                                             <span
    //                                                 className="font-bold leading-normal text-sm text-lime-500">+55%</span>
    //                                         </h5>
    //                                     </div>
    //                                     <div className="flex-auto p-0">
    //                                         <div>
    //                                             <canvas id="chart-line-1" className="chart-canvas"
    //                                                     height="100"></canvas>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="w-full max-w-full px-3 mt-6 sm:flex-0 shrink-0 sm:mt-0 sm:w-4/12">
    //                                 <div
    //                                     className="border-black/12.5 shadow-soft-xl dark:bg-gray-950 dark:shadow-soft-dark-xl relative flex min-w-0 flex-col overflow-hidden break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
    //                                     <div className="p-4 pb-0 rounded-t-2xl">
    //                                         <p className="mb-0 font-semibold leading-normal capitalize text-sm dark:text-white dark:opacity-60">Income</p>
    //                                         <h5 className="mb-0 font-bold dark:text-white">
    //                                             $130,832
    //                                             <span
    //                                                 className="font-bold leading-normal text-sm text-lime-500">+90%</span>
    //                                         </h5>
    //                                     </div>
    //                                     <div className="flex-auto p-0">
    //                                         <div>
    //                                             <canvas id="chart-line-2" className="chart-canvas"
    //                                                     height="100"></canvas>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //
    //                             <div className="w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-4/12"><Link
    //                                 href={'/analytics'}>
    //                                 <div
    //                                     className="border-black/12.5 shadow-soft-xl dark:bg-gray-950 dark:shadow-soft-dark-xl relative flex min-w-0 flex-col overflow-hidden break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
    //                                     <div className="p-4 pb-0 rounded-t-2xl">
    //                                         <p className="mb-0 font-semibold leading-normal capitalize text-sm dark:text-white dark:opacity-60">Analytics</p>
    //                                         <h5 className="mb-0 font-bold dark:text-white">
    //                                             5,927
    //                                             <span
    //                                                 className="font-bold leading-normal text-sm text-lime-500">+55%</span>
    //                                         </h5>
    //                                     </div>
    //                                     <div className="flex-auto p-0">
    //                                         <div>
    //
    //                                             <canvas id="chart-cons-week" className="chart-canvas"
    //                                                     height="100"></canvas>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </Link></div>
    //
    //
    //                         </div>
    //                         <div className="flex flex-wrap mt-6 -mx-3">
    //                             <div className="w-full max-w-full px-3 flex-0">
    //                                 <div
    //                                     className="widget-calendar border-black/12.5 shadow-soft-xl dark:bg-gray-950 dark:shadow-soft-dark-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
    //                                     <div className="p-4 pb-0 rounded-t-2xl">
    //                                         <h6 className="mb-0 dark:text-white">Calendar</h6>
    //                                         <div className="flex">
    //                                             <div
    //                                                 className="mb-0 font-semibold leading-normal widget-calendar-day text-sm"></div>
    //                                             <span>,&nbsp;</span>
    //                                             <div
    //                                                 className="mb-1 font-semibold leading-normal widget-calendar-year text-sm"></div>
    //                                         </div>
    //                                     </div>
    //                                     <div className="flex-auto p-4">
    //                                         <div className="w-full p-6 mx-auto">
    //                                             <div className="flex flex-wrap -mx-3">
    //                                                 <div
    //                                                     className="w-full max-w-full px-3 shrink-0 xl:flex-0 xl:w-12/12">
    //                                                     <div
    //                                                         className="relative flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
    //                                                         <div className="flex-auto p-4">
    //                                                             <div data-toggle="widget-calendar"
    //                                                                  className="fc fc-media-screen fc-direction-ltr fc-theme-standard">
    //                                                                 <div
    //                                                                     className="fc-view-harness fc-view-harness-passive">
    //                                                                     <div
    //                                                                         className="fc-daygrid fc-dayGridMonth-view fc-view">
    //                                                                         <table className="fc-scrollgrid ">
    //                                                                             <thead>
    //                                                                             <tr className="fc-scrollgrid-section fc-scrollgrid-section-header ">
    //                                                                                 <td>
    //                                                                                     <div
    //                                                                                         className="fc-scroller-harness">
    //                                                                                         <div className="fc-scroller"
    //                                                                                              style={{overflow: "visible"}}>
    //                                                                                             <table
    //                                                                                                 className="fc-col-header ">
    //                                                                                                 <colgroup></colgroup>
    //                                                                                                 <tbody>
    //                                                                                                 <tr>
    //                                                                                                     <th className="fc-col-header-cell fc-day fc-day-sun">
    //                                                                                                         <div
    //                                                                                                             className="fc-scrollgrid-sync-inner">
    //                                                                                                             <a
    //                                                                                                                 className="fc-col-header-cell-cushion ">Sun</a>
    //                                                                                                         </div>
    //                                                                                                     </th>
    //                                                                                                     <th className="fc-col-header-cell fc-day fc-day-mon">
    //                                                                                                         <div
    //                                                                                                             className="fc-scrollgrid-sync-inner">
    //                                                                                                             <a
    //                                                                                                                 className="fc-col-header-cell-cushion ">Mon</a>
    //                                                                                                         </div>
    //                                                                                                     </th>
    //                                                                                                     <th className="fc-col-header-cell fc-day fc-day-tue">
    //                                                                                                         <div
    //                                                                                                             className="fc-scrollgrid-sync-inner">
    //                                                                                                             <a
    //                                                                                                                 className="fc-col-header-cell-cushion ">Tue</a>
    //                                                                                                         </div>
    //                                                                                                     </th>
    //                                                                                                     <th className="fc-col-header-cell fc-day fc-day-wed">
    //                                                                                                         <div
    //                                                                                                             className="fc-scrollgrid-sync-inner">
    //                                                                                                             <a
    //                                                                                                                 className="fc-col-header-cell-cushion ">Wed</a>
    //                                                                                                         </div>
    //                                                                                                     </th>
    //                                                                                                     <th className="fc-col-header-cell fc-day fc-day-thu">
    //                                                                                                         <div
    //                                                                                                             className="fc-scrollgrid-sync-inner">
    //                                                                                                             <a
    //                                                                                                                 className="fc-col-header-cell-cushion ">Thu</a>
    //                                                                                                         </div>
    //                                                                                                     </th>
    //                                                                                                     <th className="fc-col-header-cell fc-day fc-day-fri">
    //                                                                                                         <div
    //                                                                                                             className="fc-scrollgrid-sync-inner">
    //                                                                                                             <a
    //                                                                                                                 className="fc-col-header-cell-cushion ">Fri</a>
    //                                                                                                         </div>
    //                                                                                                     </th>
    //                                                                                                     <th className="fc-col-header-cell fc-day fc-day-sat">
    //                                                                                                         <div
    //                                                                                                             className="fc-scrollgrid-sync-inner">
    //                                                                                                             <a
    //                                                                                                                 className="fc-col-header-cell-cushion ">Sat</a>
    //                                                                                                         </div>
    //                                                                                                     </th>
    //                                                                                                 </tr>
    //                                                                                                 </tbody>
    //                                                                                             </table>
    //                                                                                         </div>
    //                                                                                     </div>
    //                                                                                 </td>
    //                                                                             </tr>
    //                                                                             </thead>
    //                                                                             <tbody>
    //                                                                             <tr className="fc-scrollgrid-section fc-scrollgrid-section-body ">
    //                                                                                 <td>
    //                                                                                     <div
    //                                                                                         className="fc-scroller-harness">
    //                                                                                         <div className="fc-scroller"
    //                                                                                              style={{overflow: "visible"}}>
    //                                                                                             <div
    //                                                                                                 className="fc-daygrid-body fc-daygrid-body-unbalanced fc-daygrid-body-natural"
    //                                                                                             >
    //                                                                                                 <table
    //                                                                                                     className="fc-scrollgrid-sync-table"
    //                                                                                                 >
    //                                                                                                     <colgroup></colgroup>
    //                                                                                                     <tbody>
    //                                                                                                     <tr>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-sun fc-day-past fc-day-other"
    //                                                                                                             data-date="2020-11-29">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">29</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events">
    //                                                                                                                     <div
    //                                                                                                                         className="fc-daygrid-event-harness">
    //                                                                                                                         <a className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past bg-gradient-to-tl from-green-600 to-lime-400">
    //                                                                                                                             <div
    //                                                                                                                                 className="fc-event-main">
    //                                                                                                                                 <div
    //                                                                                                                                     className="fc-event-main-frame">
    //                                                                                                                                     <div
    //                                                                                                                                         className="fc-event-title-container">
    //                                                                                                                                         <Link
    //                                                                                                                                             href={'/timeline'}>
    //                                                                                                                                             <div
    //                                                                                                                                                 className="fc-event-title fc-sticky">All
    //                                                                                                                                                 day
    //                                                                                                                                                 conference
    //                                                                                                                                             </div>
    //                                                                                                                                         </Link>
    //
    //                                                                                                                                     </div>
    //                                                                                                                                 </div>
    //                                                                                                                             </div>
    //                                                                                                                             <div
    //                                                                                                                                 className="fc-event-resizer fc-event-resizer-end"></div>
    //                                                                                                                         </a>
    //                                                                                                                     </div>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-mon fc-day-past fc-day-other"
    //                                                                                                             data-date="2020-11-30">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">30</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-tue fc-day-past"
    //                                                                                                             data-date="2020-12-01">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">1</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events">
    //                                                                                                                     <div
    //                                                                                                                         className="fc-daygrid-event-harness">
    //                                                                                                                         <a className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past bg-gradient-to-tl from-blue-600 to-cyan-400">
    //                                                                                                                             <div
    //                                                                                                                                 className="fc-event-main">
    //                                                                                                                                 <div
    //                                                                                                                                     className="fc-event-main-frame">
    //                                                                                                                                     <div
    //                                                                                                                                         className="fc-event-title-container">
    //                                                                                                                                         <Link
    //                                                                                                                                             href={'/timeline'}>
    //                                                                                                                                             <div
    //                                                                                                                                                 className="fc-event-title fc-sticky">Meeting
    //                                                                                                                                                 with
    //                                                                                                                                                 Mary
    //                                                                                                                                             </div>
    //                                                                                                                                         </Link>
    //
    //                                                                                                                                     </div>
    //                                                                                                                                 </div>
    //                                                                                                                             </div>
    //                                                                                                                             <div
    //                                                                                                                                 className="fc-event-resizer fc-event-resizer-end"></div>
    //                                                                                                                         </a>
    //                                                                                                                     </div>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-wed fc-day-past"
    //                                                                                                             data-date="2020-12-02">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">2</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events">
    //                                                                                                                     <div
    //                                                                                                                         className="fc-daygrid-event-harness">
    //                                                                                                                         <a className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past bg-gradient-to-tl from-red-500 to-yellow-400">
    //                                                                                                                             <div
    //                                                                                                                                 className="fc-event-main">
    //                                                                                                                                 <div
    //                                                                                                                                     className="fc-event-main-frame">
    //                                                                                                                                     <div
    //                                                                                                                                         className="fc-event-title-container">
    //                                                                                                                                         <Link
    //                                                                                                                                             href={'/timeline'}>
    //                                                                                                                                             <div
    //                                                                                                                                                 className="fc-event-title fc-sticky">Cyber
    //                                                                                                                                                 Week
    //                                                                                                                                             </div>
    //                                                                                                                                         </Link>
    //
    //                                                                                                                                     </div>
    //                                                                                                                                 </div>
    //                                                                                                                             </div>
    //                                                                                                                             <div
    //                                                                                                                                 className="fc-event-resizer fc-event-resizer-end"></div>
    //                                                                                                                         </a>
    //                                                                                                                     </div>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-thu fc-day-past"
    //                                                                                                             data-date="2020-12-03">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">3</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events">
    //                                                                                                                     <div
    //                                                                                                                         className="fc-daygrid-event-harness">
    //                                                                                                                         <a className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past bg-gradient-to-tl from-red-600 to-rose-400">
    //                                                                                                                             <div
    //                                                                                                                                 className="fc-event-main">
    //                                                                                                                                 <div
    //                                                                                                                                     className="fc-event-main-frame">
    //                                                                                                                                     <div
    //                                                                                                                                         className="fc-event-title-container">
    //                                                                                                                                         <Link
    //                                                                                                                                             href={'/timeline'}>
    //                                                                                                                                             <div
    //                                                                                                                                                 className="fc-event-title fc-sticky">Winter
    //                                                                                                                                                 Hackaton
    //                                                                                                                                             </div>
    //                                                                                                                                         </Link>
    //                                                                                                                                     </div>
    //                                                                                                                                 </div>
    //                                                                                                                             </div>
    //                                                                                                                             <div
    //                                                                                                                                 className="fc-event-resizer fc-event-resizer-end"></div>
    //                                                                                                                         </a>
    //                                                                                                                     </div>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-fri fc-day-past"
    //                                                                                                             data-date="2020-12-04">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">4</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-sat fc-day-past"
    //                                                                                                             data-date="2020-12-05">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">5</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                     </tr>
    //                                                                                                     <tr>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-sun fc-day-past"
    //                                                                                                             data-date="2020-12-06">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">6</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-mon fc-day-past"
    //                                                                                                             data-date="2020-12-07">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">7</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"
    //                                                                                                                     style={{paddingBottom: "29.1484px"}}>
    //                                                                                                                     <div
    //                                                                                                                         className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
    //                                                                                                                         style={{right: "-123.711px"}}>
    //                                                                                                                         <a
    //                                                                                                                             className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past bg-gradient-to-tl from-red-500 to-yellow-400">
    //                                                                                                                             <div
    //                                                                                                                                 className="fc-event-main">
    //                                                                                                                                 <div
    //                                                                                                                                     className="fc-event-main-frame">
    //                                                                                                                                     <div
    //                                                                                                                                         className="fc-event-title-container">
    //                                                                                                                                         <Link
    //                                                                                                                                             href={'/timeline'}>
    //                                                                                                                                             <div
    //                                                                                                                                                 className="fc-event-title fc-sticky">Digital
    //                                                                                                                                                 event
    //                                                                                                                                             </div>
    //                                                                                                                                         </Link>
    //
    //                                                                                                                                     </div>
    //                                                                                                                                 </div>
    //                                                                                                                             </div>
    //                                                                                                                             <div
    //                                                                                                                                 className="fc-event-resizer fc-event-resizer-end"></div>
    //                                                                                                                         </a>
    //                                                                                                                     </div>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-tue fc-day-past"
    //                                                                                                             data-date="2020-12-08">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">8</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"
    //                                                                                                                     style={{paddingBottom: "29.1484px"}}></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-wed fc-day-past"
    //                                                                                                             data-date="2020-12-09">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">9</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-thu fc-day-past"
    //                                                                                                             data-date="2020-12-10">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">10</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events">
    //                                                                                                                     <div
    //                                                                                                                         className="fc-daygrid-event-harness">
    //                                                                                                                         <a className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past bg-gradient-to-tl from-purple-700 to-pink-500">
    //                                                                                                                             <div
    //                                                                                                                                 className="fc-event-main">
    //                                                                                                                                 <div
    //                                                                                                                                     className="fc-event-main-frame">
    //                                                                                                                                     <div
    //                                                                                                                                         className="fc-event-title-container">
    //                                                                                                                                         <Link
    //                                                                                                                                             href={'/timeline'}>
    //                                                                                                                                             <div
    //                                                                                                                                                 className="fc-event-title fc-sticky">Marketing
    //                                                                                                                                                 event
    //                                                                                                                                             </div>
    //                                                                                                                                         </Link>
    //
    //                                                                                                                                     </div>
    //                                                                                                                                 </div>
    //                                                                                                                             </div>
    //                                                                                                                             <div
    //                                                                                                                                 className="fc-event-resizer fc-event-resizer-end"></div>
    //                                                                                                                         </a>
    //                                                                                                                     </div>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-fri fc-day-past"
    //                                                                                                             data-date="2020-12-11">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">11</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-sat fc-day-past"
    //                                                                                                             data-date="2020-12-12">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">12</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                     </tr>
    //                                                                                                     <tr>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-sun fc-day-past"
    //                                                                                                             data-date="2020-12-13">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">13</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-mon fc-day-past"
    //                                                                                                             data-date="2020-12-14">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">14</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-tue fc-day-past"
    //                                                                                                             data-date="2020-12-15">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">15</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-wed fc-day-past"
    //                                                                                                             data-date="2020-12-16">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">16</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-thu fc-day-past"
    //                                                                                                             data-date="2020-12-17">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">17</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-fri fc-day-past"
    //                                                                                                             data-date="2020-12-18">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">18</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-sat fc-day-past"
    //                                                                                                             data-date="2020-12-19">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">19</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events">
    //                                                                                                                     <div
    //                                                                                                                         className="fc-daygrid-event-harness">
    //                                                                                                                         <a className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past bg-gradient-to-tl from-red-600 to-rose-400">
    //                                                                                                                             <div
    //                                                                                                                                 className="fc-event-main">
    //                                                                                                                                 <div
    //                                                                                                                                     className="fc-event-main-frame">
    //                                                                                                                                     <div
    //                                                                                                                                         className="fc-event-title-container">
    //                                                                                                                                         <Link
    //                                                                                                                                             href={'/timeline'}>
    //                                                                                                                                             <div
    //                                                                                                                                                 className="fc-event-title fc-sticky">Dinner
    //                                                                                                                                                 with
    //                                                                                                                                                 Family
    //                                                                                                                                             </div>
    //                                                                                                                                         </Link>
    //                                                                                                                                     </div>
    //                                                                                                                                 </div>
    //                                                                                                                             </div>
    //                                                                                                                             <div
    //                                                                                                                                 className="fc-event-resizer fc-event-resizer-end"></div>
    //                                                                                                                         </a>
    //                                                                                                                     </div>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                     </tr>
    //                                                                                                     <tr>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-sun fc-day-past"
    //                                                                                                             data-date="2020-12-20">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">20</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-mon fc-day-past"
    //                                                                                                             data-date="2020-12-21">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">21</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-tue fc-day-past"
    //                                                                                                             data-date="2020-12-22">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">22</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-wed fc-day-past"
    //                                                                                                             data-date="2020-12-23">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">23</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events">
    //                                                                                                                     <div
    //                                                                                                                         className="fc-daygrid-event-harness">
    //                                                                                                                         <a className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past bg-gradient-to-tl from-blue-600 to-cyan-400">
    //                                                                                                                             <div
    //                                                                                                                                 className="fc-event-main">
    //                                                                                                                                 <div
    //                                                                                                                                     className="fc-event-main-frame">
    //                                                                                                                                     <div
    //                                                                                                                                         className="fc-event-title-container">
    //                                                                                                                                         <Link
    //                                                                                                                                             href={'/timeline'}>
    //                                                                                                                                             <div
    //                                                                                                                                                 className="fc-event-title fc-sticky">Black
    //                                                                                                                                                 Friday
    //                                                                                                                                             </div>
    //                                                                                                                                         </Link>
    //
    //                                                                                                                                     </div>
    //                                                                                                                                 </div>
    //                                                                                                                             </div>
    //                                                                                                                             <div
    //                                                                                                                                 className="fc-event-resizer fc-event-resizer-end"></div>
    //                                                                                                                         </a>
    //                                                                                                                     </div>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-thu fc-day-past"
    //                                                                                                             data-date="2020-12-24">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">24</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-fri fc-day-past"
    //                                                                                                             data-date="2020-12-25">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">25</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-sat fc-day-past"
    //                                                                                                             data-date="2020-12-26">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">26</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                     </tr>
    //                                                                                                     <tr>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-sun fc-day-past"
    //                                                                                                             data-date="2020-12-27">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">27</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-mon fc-day-past"
    //                                                                                                             data-date="2020-12-28">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">28</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-tue fc-day-past"
    //                                                                                                             data-date="2020-12-29">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">29</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-wed fc-day-past"
    //                                                                                                             data-date="2020-12-30">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">30</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-thu fc-day-past"
    //                                                                                                             data-date="2020-12-31">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">31</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-fri fc-day-past fc-day-other"
    //                                                                                                             data-date="2021-01-01">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">1</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-sat fc-day-past fc-day-other"
    //                                                                                                             data-date="2021-01-02">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">2</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                     </tr>
    //                                                                                                     <tr>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-sun fc-day-past fc-day-other"
    //                                                                                                             data-date="2021-01-03">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">3</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-mon fc-day-past fc-day-other"
    //                                                                                                             data-date="2021-01-04">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">4</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-tue fc-day-past fc-day-other"
    //                                                                                                             data-date="2021-01-05">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">5</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-wed fc-day-past fc-day-other"
    //                                                                                                             data-date="2021-01-06">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">6</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-thu fc-day-past fc-day-other"
    //                                                                                                             data-date="2021-01-07">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">7</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-fri fc-day-past fc-day-other"
    //                                                                                                             data-date="2021-01-08">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">8</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                         <td className="fc-daygrid-day fc-day fc-day-sat fc-day-past fc-day-other"
    //                                                                                                             data-date="2021-01-09">
    //                                                                                                             <div
    //                                                                                                                 className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-top">
    //                                                                                                                     <a
    //                                                                                                                         className="fc-daygrid-day-number">9</a>
    //                                                                                                                 </div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-events"></div>
    //                                                                                                                 <div
    //                                                                                                                     className="fc-daygrid-day-bg"></div>
    //                                                                                                             </div>
    //                                                                                                         </td>
    //                                                                                                     </tr>
    //                                                                                                     </tbody>
    //                                                                                                 </table>
    //                                                                                             </div>
    //                                                                                         </div>
    //                                                                                     </div>
    //                                                                                 </td>
    //                                                                             </tr>
    //                                                                             </tbody>
    //                                                                         </table>
    //                                                                     </div>
    //                                                                 </div>
    //                                                             </div>
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //
    //                                             </div>
    //                                             <Script src="../../assets/js/plugins/fullcalendar.min.js"/>
    //                                             <Script src="../../assets/js/plugins/chartjs.min.js"/>
    //                                             <Script src="../../assets/js/plugins/chartjs.min.js"/>
    //                                             <Script src="../../assets/js/charts.js"/>
    //                                             <Script src="../../assets/js/plugins/threejs.js"/>
    //                                             <Script src="../../assets/js/plugins/orbit-controls.js"/>
    //                                             <Script src="../../assets/js/plugins/perfect-scrollbar.min.js"/>
    //                                             <Script
    //                                                 src="../../assets/js/soft-ui-dashboard-pro-tailwind.js?v=1.0.1"/>
    //                                             <Script src="../../assets/js/plugins/fullcalendar.min.js"/>
    //                                             <Script src="../../assets/js/plugins/chartjs.min.js"/>
    //                                             <Script src="../../assets/js/plugins/perfect-scrollbar.min.js"/>
    //                                             <Script src="../../assets/js/plugins/perfect-scrollbar.min.js"/>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className="w-full max-w-full px-3 shrink-0 xl:flex-0 xl:w-4/12">
    //                         <div className="flex flex-wrap -mx-3">
    //                             <div
    //                                 className="w-full max-w-full px-3 mt-6 shrink-0 md:flex-0 md:w-6/12 xl:w-full xl:mt-0">
    //                                 <div
    //                                     className="relative flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
    //
    //                                     <div
    //                                         className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0">
    //                                         <h6 className="mb-0 dark:text-white">Next events</h6>
    //                                     </div>
    //
    //                                     <div className="flex-auto p-4 rounded-xl">
    //
    //                                         <div className="flex">
    //                                             <div>
    //                                                 <div
    //                                                     className="inline-block w-12 h-12 text-center text-black bg-center rounded-lg shadow-none fill-current stroke-none bg-red-600/3">
    //                                                     <i className="ni leading-none ni-money-coins text-lg text-transparent bg-clip-text bg-gradient-to-tl from-red-600 to-rose-400 relative z-1 top-3.5"></i>
    //                                                 </div>
    //                                             </div>
    //                                             <div className="ml-4">
    //                                                 <div>
    //                                                     <h6 className="mb-1 leading-normal dark:text-white text-sm text-slate-700">Cyber
    //                                                         Week</h6>
    //                                                     <span
    //                                                         className="leading-normal text-sm">21 March 2021, at 12:30 PM</span>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //
    //                                         <div className="flex mt-6">
    //                                             <div>
    //                                                 <div
    //                                                     className="inline-block w-12 h-12 text-center text-black bg-center rounded-lg shadow-none fill-current stroke-none bg-purple-700/3">
    //                                                     <i className="ni leading-none ni-bell-55 text-lg text-transparent bg-clip-text bg-gradient-to-tl from-purple-700 to-pink-500 relative z-1 top-3.5"></i>
    //                                                 </div>
    //                                             </div>
    //                                             <div className="ml-4">
    //                                                 <div>
    //                                                     <h6 className="mb-1 leading-normal dark:text-white text-sm text-slate-700">Meeting
    //                                                         with Marry</h6>
    //                                                     <span
    //                                                         className="leading-normal text-sm">24 March 2021, at 10:00 PM</span>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //
    //                                         <div className="flex mt-6">
    //                                             <div>
    //                                                 <div
    //                                                     className="inline-block w-12 h-12 text-center text-black bg-center rounded-lg shadow-none fill-current stroke-none bg-green-600/3">
    //                                                     <i className="ni leading-none ni-books text-lg text-transparent bg-clip-text bg-gradient-to-tl from-green-600 to-lime-400 relative z-1 top-3.5"></i>
    //                                                 </div>
    //                                             </div>
    //                                             <div className="ml-4">
    //                                                 <div>
    //                                                     <h6 className="mb-1 leading-normal dark:text-white text-sm text-slate-700">Book
    //                                                         Deposit Hall</h6>
    //                                                     <span
    //                                                         className="leading-normal text-sm">25 March 2021, at 9:30 AM</span>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //
    //                                         <div className="flex mt-6">
    //                                             <div>
    //                                                 <div
    //                                                     className="inline-block w-12 h-12 text-center text-black bg-center rounded-lg shadow-none fill-current stroke-none bg-red-500/3">
    //                                                     <i className="ni leading-none ni-delivery-fast text-lg text-transparent bg-clip-text bg-gradient-to-tl from-red-500 to-yellow-400 relative z-1 top-3.5"></i>
    //                                                 </div>
    //                                             </div>
    //                                             <div className="ml-4">
    //                                                 <div>
    //                                                     <h6 className="mb-1 leading-normal dark:text-white text-sm text-slate-700">Shipment
    //                                                         Deal UK</h6>
    //                                                     <span
    //                                                         className="leading-normal text-sm">25 March 2021, at 2:00 PM</span>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //
    //                                         <div className="flex mt-6">
    //                                             <div>
    //                                                 <div
    //                                                     className="inline-block w-12 h-12 text-center text-black bg-center rounded-lg shadow-none fill-current stroke-none bg-blue-600/3">
    //                                                     <i className="ni leading-none ni-palette text-lg text-transparent bg-clip-text bg-gradient-to-tl from-blue-600 to-cyan-400 relative z-1 top-3.5"></i>
    //                                                 </div>
    //                                             </div>
    //                                             <div className="ml-4">
    //                                                 <div>
    //                                                     <h6 className="mb-1 leading-normal dark:text-white text-sm text-slate-700">Verify
    //                                                         Dashboard Color Palette</h6>
    //                                                     <span
    //                                                         className="leading-normal text-sm">26 March 2021, at 9:00 AM</span>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="flex flex-wrap mt-6 -mx-3">
    //                     <div className="w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-6/12">
    //                         <div
    //                             className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 border-solid dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl border-slate-100 bg-clip-border dark:border-slate-700">
    //                             <div className="p-4 pb-0 rounded-t-2xl">
    //                                 <div className="flex flex-wrap -mx-3">
    //                                     <div className="w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
    //                                         <h6 className="mb-0 dark:text-white">Transactions</h6>
    //                                     </div>
    //                                     <div
    //                                         className="flex items-center justify-end w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
    //                                         <i className="mr-2 far fa-calendar-alt"></i>
    //                                         <small>23 - 30 March 2021</small>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="flex-auto p-4">
    //                                 <ul className="flex flex-col pl-0 mb-0 rounded-lg">
    //                                     <li className="relative justify-between block py-2 pb-0 pl-0 pr-4 border-0 rounded-t-inherit rounded-xl text-inherit">
    //                                         <div className="flex">
    //                                             <div className="flex items-center">
    //                                                 <button
    //                                                     className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl h-6 w-6 mb-0 mr-4 flex cursor-pointer items-center justify-center border border-solid border-red-600 bg-transparent p-4 text-center align-middle font-bold text-red-600 shadow-none transition-all hover:bg-transparent hover:text-red-600 hover:opacity-75 hover:shadow-none active:bg-red-600 active:text-black hover:active:bg-transparent hover:active:text-red-600 hover:active:opacity-75 hover:active:shadow-none">
    //                                                     <i className="fas fa-arrow-down text-3xs"></i>
    //                                                 </button>
    //                                                 <div className="flex flex-col">
    //                                                     <h6 className="mb-1 leading-normal text-sm text-slate-700 dark:text-white">Workinton
    //                                                         Izmir</h6>
    //                                                     <span className="leading-tight text-xs">27 March 2020, at 12:30 PM</span>
    //                                                 </div>
    //                                             </div>
    //                                             <div className="flex items-center justify-center ml-auto">
    //                                                 <p className="relative z-10 inline-block mb-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-red-600 to-rose-400 text-sm bg-clip-text">-
    //                                                     $ 2,500</p>
    //                                             </div>
    //                                         </div>
    //                                         <hr className="h-px mt-4 mb-2 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"/>
    //                                     </li>
    //                                     <li className="relative justify-between block py-2 pb-0 pl-0 pr-4 border-0 rounded-xl text-inherit">
    //                                         <div className="flex">
    //                                             <div className="flex items-center">
    //                                                 <button
    //                                                     className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl h-6 w-6 mb-0 mr-4 flex cursor-pointer items-center justify-center border border-solid border-lime-500 bg-transparent p-4 text-center align-middle font-bold text-lime-500 shadow-none transition-all hover:bg-transparent hover:text-lime-500 hover:opacity-75 hover:shadow-none active:bg-lime-500 active:text-black hover:active:bg-transparent hover:active:text-lime-500 hover:active:opacity-75 hover:active:shadow-none">
    //                                                     <i className="fas fa-arrow-up text-3xs"></i>
    //                                                 </button>
    //                                                 <div className="flex flex-col">
    //                                                     <h6 className="mb-1 leading-normal text-sm text-slate-700 dark:text-white">Workinton
    //                                                         Istanbul</h6>
    //                                                     <span className="leading-tight text-xs">23 March 2020, at 04:30 AM</span>
    //                                                 </div>
    //                                             </div>
    //                                             <div className="flex items-center justify-center ml-auto">
    //                                                 <p className="relative z-10 inline-block mb-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text">+
    //                                                     $ 2,000</p>
    //                                             </div>
    //                                         </div>
    //                                         <hr className="h-px mt-4 mb-2 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"/>
    //                                     </li>
    //                                     <li className="relative justify-between block py-2 pl-0 pr-4 mb-2 border-0 rounded-b-inherit rounded-xl text-inherit">
    //                                         <div className="flex">
    //                                             <div className="flex items-center">
    //                                                 <button
    //                                                     className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl h-6 w-6 mb-0 mr-4 flex cursor-pointer items-center justify-center border border-solid border-lime-500 bg-transparent p-4 text-center align-middle font-bold text-lime-500 shadow-none transition-all hover:bg-transparent hover:text-lime-500 hover:opacity-75 hover:shadow-none active:bg-lime-500 active:text-black hover:active:bg-transparent hover:active:text-lime-500 hover:active:opacity-75 hover:active:shadow-none">
    //                                                     <i className="fas fa-arrow-up text-3xs"></i>
    //                                                 </button>
    //                                                 <div className="flex flex-col">
    //                                                     <h6 className="mb-1 leading-normal text-sm text-slate-700 dark:text-white">Partner
    //                                                         #22213</h6>
    //                                                     <span className="leading-tight text-xs">19 March 2020, at 02:50 AM</span>
    //                                                 </div>
    //                                             </div>
    //                                             <div className="flex items-center justify-center ml-auto">
    //                                                 <p className="relative z-10 inline-block mb-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text">+
    //                                                     $ 1,400</p>
    //                                             </div>
    //                                         </div>
    //                                     </li>
    //                                 </ul>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className="w-full max-w-full px-3 mt-6 sm:flex-0 shrink-0 sm:mt-0 sm:w-6/12">
    //                         <div
    //                             className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 border-solid dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl border-slate-100 bg-clip-border dark:border-slate-700">
    //                             <div className="p-4 pb-0 rounded-t-2xl">
    //                                 <div className="flex flex-wrap -mx-3">
    //                                     <div className="w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
    //                                         <h6 className="mb-0 dark:text-white">Revenue</h6>
    //                                     </div>
    //                                     <div
    //                                         className="flex items-center justify-end w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
    //                                         <i className="mr-2 far fa-calendar-alt"></i>
    //                                         <small>01 - 07 June 2021</small>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="flex-auto p-4">
    //                                 <ul className="flex flex-col pl-0 mb-0 rounded-lg">
    //                                     <li className="relative justify-between block py-2 pb-0 pl-0 pr-4 border-0 rounded-t-inherit rounded-xl text-inherit">
    //                                         <div className="flex">
    //                                             <div className="flex items-center">
    //                                                 <button
    //                                                     className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl h-6 w-6 mb-0 mr-4 flex cursor-pointer items-center justify-center border border-solid border-lime-500 bg-transparent p-4 text-center align-middle font-bold text-lime-500 shadow-none transition-all hover:bg-transparent hover:text-lime-500 hover:opacity-75 hover:shadow-none active:bg-lime-500 active:text-black hover:active:bg-transparent hover:active:text-lime-500 hover:active:opacity-75 hover:active:shadow-none">
    //                                                     <i className="fas fa-arrow-up text-3xs"></i>
    //                                                 </button>
    //                                                 <div className="flex flex-col">
    //                                                     <h6 className="mb-1 leading-normal text-sm text-slate-700 dark:text-white">via
    //                                                         Card</h6>
    //                                                     <span className="leading-tight text-xs">07 June 2021, at 09:00 AM</span>
    //                                                 </div>
    //                                             </div>
    //                                             <div className="flex items-center justify-center ml-auto">
    //                                                 <p className="relative z-10 inline-block mb-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text">+
    //                                                     $ 4,999</p>
    //                                             </div>
    //                                         </div>
    //                                         <hr className="h-px mt-4 mb-2 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"/>
    //                                     </li>
    //                                     <li className="relative justify-between block py-2 pb-0 pl-0 pr-4 border-0 rounded-xl text-inherit">
    //                                         <div className="flex">
    //                                             <div className="flex items-center">
    //                                                 <button
    //                                                     className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl h-6 w-6 mb-0 mr-4 flex cursor-pointer items-center justify-center border border-solid border-lime-500 bg-transparent p-4 text-center align-middle font-bold text-lime-500 shadow-none transition-all hover:bg-transparent hover:text-lime-500 hover:opacity-75 hover:shadow-none active:bg-lime-500 active:text-black hover:active:bg-transparent hover:active:text-lime-500 hover:active:opacity-75 hover:active:shadow-none">
    //                                                     <i className="fas fa-arrow-up text-3xs"></i>
    //                                                 </button>
    //                                                 <div className="flex flex-col">
    //                                                     <h6 className="mb-1 leading-normal text-sm text-slate-700 dark:text-white">Partner
    //                                                         #90211</h6>
    //                                                     <span className="leading-tight text-xs">07 June 2021, at 09:00 AM</span>
    //                                                 </div>
    //                                             </div>
    //                                             <div className="flex items-center justify-center ml-auto">
    //                                                 <p className="relative z-10 inline-block mb-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text">+
    //                                                     $ 700</p>
    //                                             </div>
    //                                         </div>
    //                                         <hr className="h-px mt-4 mb-2 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"/>
    //                                     </li>
    //                                     <li className="relative justify-between block py-2 pl-0 pr-4 mb-2 border-0 rounded-b-inherit rounded-xl text-inherit">
    //                                         <div className="flex">
    //                                             <div className="flex items-center">
    //                                                 <button
    //                                                     className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl h-6 w-6 mb-0 mr-4 flex cursor-pointer items-center justify-center border border-solid border-red-600 bg-transparent p-4 text-center align-middle font-bold text-red-600 shadow-none transition-all hover:bg-transparent hover:text-red-600 hover:opacity-75 hover:shadow-none active:bg-red-600 active:text-black hover:active:bg-transparent hover:active:text-red-600 hover:active:opacity-75 hover:active:shadow-none">
    //                                                     {/*<Image src={arrowDown}></Image>*/}
    //                                                 </button>
    //                                                 <div className="flex flex-col">
    //                                                     <h6 className="mb-1 leading-normal text-sm text-slate-700 dark:text-white">Services</h6>
    //                                                     <span className="leading-tight text-xs">07 June 2021, at 07:10 PM</span>
    //                                                 </div>
    //                                             </div>
    //                                             <div className="flex items-center justify-center ml-auto">
    //                                                 <p className="relative z-10 inline-block mb-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-red-600 to-rose-400 text-sm bg-clip-text">-
    //                                                     $ 1,800</p>
    //                                             </div>
    //                                         </div>
    //                                     </li>
    //                                 </ul>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //
    //
    //             </div>
    //             <Script src="../assets/js/plugins/fullcalendar.min.js"/>
    //             <Script src="../assets/js/plugins/chartjs.min.js"/>
    //             <Script src="../assets/js/plugins/chartjs.min.js"/>
    //             <Script src="../assets/js/charts.js"/>
    //             <Script src="../assets/js/plugins/threejs.js"/>
    //             <Script src="../assets/js/plugins/orbit-controls.js"/>
    //             <Script src="../assets/js/plugins/perfect-scrollbar.min.js"/>
    //             <Script src="../assets/js/soft-ui-dashboard-pro-tailwind.js?v=1.0.1"/>
    //             <Script src="../assets/js/plugins/fullcalendar.min.js"/>
    //             <Script src="../assets/js/plugins/chartjs.min.js"/>
    //             <Script src="../assets/js/plugins/perfect-scrollbar.min.js"/>
    //             <Script src="../../assets/js/plugins/perfect-scrollbar.min.js"/>
    //             <Script src="../assets/js/plugins/chartjs.min.js"/>
    //             <Script src="../assets/js/charts.js"/>
    //         </>
    //     )
    // }
    // }

}
