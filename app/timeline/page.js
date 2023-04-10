import React from 'react';
import SideBar from '../../components/SideBar/SideBar'

const Timeline = ({props}) => {
    return (
<>
    <SideBar/>
    <div className="w-full p-6 mx-auto">
    <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 lg:flex-0 shrink-0 lg:w-6/12">
            <div
                className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
                    <h6>Timeline with dotted line</h6>
                </div>
                <div className="flex-auto p-4">
                    <div
                        className="relative before:absolute before:left-4 before:top-0 before:h-full before:border-r-2 before:border-solid before:border-slate-100 before:content-[''] lg:before:-ml-px">
                        <div className="relative mb-4">
<span
    className="w-6.5 h-6.5 rounded-circle text-base z-1 absolute left-4 inline-flex -translate-x-1/2 items-center justify-center bg-white text-center font-semibold">
<i className="relative text-transparent ni leading-none ni-bell-55 bg-gradient-to-tl from-green-600 to-lime-400 leading-pro z-1 bg-clip-text"></i>
</span>
                            <div className="ml-12 pt-1.4 max-w-120 relative -top-1.5 w-auto">
                                <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">$2400,
                                    Design changes</h6>
                                <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">22
                                    DEC 7:20 PM</p>
                                <p className="mt-4 mb-2 leading-normal text-sm text-slate-500">People care
                                    about how you see the world, how you think, what motivates you, what
                                    you’re struggling with or afraid of.</p>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-green-600 to-lime-400 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">design</span>
                            </div>
                        </div>
                        <div className="relative mb-4">
<span
    className="w-6.5 h-6.5 rounded-circle text-base z-1 absolute left-4 inline-flex -translate-x-1/2 items-center justify-center bg-white text-center font-semibold">
<i className="relative text-transparent ni leading-none ni-html5 bg-gradient-to-tl from-red-600 to-rose-400 leading-pro z-1 bg-clip-text"></i>
</span>
                            <div className="ml-12 pt-1.4 max-w-120 relative -top-1.5 w-auto">
                                <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">New
                                    order #1832412</h6>
                                <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">21
                                    DEC 11 PM</p>
                                <p className="mt-4 mb-2 leading-normal text-sm text-slate-500">People care
                                    about how you see the world, how you think, what motivates you, what
                                    you’re struggling with or afraid of.</p>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-red-600 to-rose-400 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">order</span>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-red-600 to-rose-400 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">#1832412</span>
                            </div>
                        </div>
                        <div className="relative mb-4">
<span
    className="w-6.5 h-6.5 rounded-circle text-base z-1 absolute left-4 inline-flex -translate-x-1/2 items-center justify-center bg-white text-center font-semibold">
<i className="relative text-transparent ni leading-none ni-cart bg-gradient-to-tl from-blue-600 to-cyan-400 leading-pro z-1 bg-clip-text"></i>
</span>
                            <div className="ml-12 pt-1.4 max-w-120 relative -top-1.5 w-auto">
                                <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">Server
                                    payments for April</h6>
                                <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">21
                                    DEC 9:34 PM</p>
                                <p className="mt-4 mb-2 leading-normal text-sm text-slate-500">People care
                                    about how you see the world, how you think, what motivates you, what
                                    you’re struggling with or afraid of.</p>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-blue-600 to-cyan-400 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">server</span>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-blue-600 to-cyan-400 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">payments</span>
                            </div>
                        </div>
                        <div className="relative mb-4">
<span
    className="w-6.5 h-6.5 rounded-circle text-base z-1 absolute left-4 inline-flex -translate-x-1/2 items-center justify-center bg-white text-center font-semibold">
<i className="relative text-transparent ni leading-none ni-credit-card bg-gradient-to-tl from-red-500 to-yellow-400 leading-pro z-1 bg-clip-text"></i>
</span>
                            <div className="ml-12 pt-1.4 max-w-120 relative -top-1.5 w-auto">
                                <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">New
                                    card added for order #4395133</h6>
                                <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">20
                                    DEC 2:20 AM</p>
                                <p className="mt-4 mb-2 leading-normal text-sm text-slate-500">People care
                                    about how you see the world, how you think, what motivates you, what
                                    you’re struggling with or afraid of.</p>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-red-500 to-yellow-400 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">card</span>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-red-500 to-yellow-400 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">#4395133</span>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-red-500 to-yellow-400 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">priority</span>
                            </div>
                        </div>
                        <div className="relative mb-4">
<span
    className="w-6.5 h-6.5 rounded-circle text-base z-1 absolute left-4 inline-flex -translate-x-1/2 items-center justify-center bg-white text-center font-semibold">
<i className="relative text-transparent ni leading-none ni-key-25 bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro z-1 bg-clip-text"></i>
</span>
                            <div className="ml-12 pt-1.4 max-w-120 relative -top-1.5 w-auto">
                                <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">Unlock
                                    packages for development</h6>
                                <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">18
                                    DEC 4:54 AM</p>
                                <p className="mt-4 mb-2 leading-normal text-sm text-slate-500">People care
                                    about how you see the world, how you think, what motivates you, what
                                    you’re struggling with or afraid of.</p>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-purple-700 to-pink-500 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">development</span>
                            </div>
                        </div>
                        <div className="relative mb-4">
<span
    className="w-6.5 h-6.5 rounded-circle text-base z-1 absolute left-4 inline-flex -translate-x-1/2 items-center justify-center bg-white text-center font-semibold">
<i className="relative text-transparent ni leading-none ni-archive-2 bg-gradient-to-tl from-green-600 to-lime-400 leading-pro z-1 bg-clip-text"></i>
</span>
                            <div className="ml-12 pt-1.4 max-w-120 relative -top-1.5 w-auto">
                                <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">New
                                    message unread</h6>
                                <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">16
                                    DEC</p>
                                <p className="mt-4 mb-2 leading-normal text-sm text-slate-500">People care
                                    about how you see the world, how you think, what motivates you, what
                                    you’re struggling with or afraid of.</p>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-green-600 to-lime-400 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">message</span>
                            </div>
                        </div>
                        <div className="relative mb-4">
<span
    className="w-6.5 h-6.5 rounded-circle text-base z-1 absolute left-4 inline-flex -translate-x-1/2 items-center justify-center bg-white text-center font-semibold">
<i className="relative text-transparent ni leading-none ni-check-bold bg-gradient-to-tl from-blue-600 to-cyan-400 leading-pro z-1 bg-clip-text"></i>
</span>
                            <div className="ml-12 pt-1.4 max-w-120 relative -top-1.5 w-auto">
                                <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">Notifications
                                    unread</h6>
                                <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">15
                                    DEC</p>
                                <p className="mt-4 mb-2 leading-normal text-sm text-slate-500">People care
                                    about how you see the world, how you think, what motivates you, what
                                    you’re struggling with or afraid of.</p>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-blue-600 to-cyan-400 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">notification</span>
                            </div>
                        </div>
                        <div className="relative mb-4">
<span
    className="w-6.5 h-6.5 rounded-circle text-base z-1 absolute left-4 inline-flex -translate-x-1/2 items-center justify-center bg-white text-center font-semibold">
<i className="relative text-transparent ni leading-none ni-box-2 bg-gradient-to-tl from-red-500 to-yellow-400 leading-pro z-1 bg-clip-text"></i>
</span>
                            <div className="ml-12 pt-1.4 max-w-120 relative -top-1.5 w-auto">
                                <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">New
                                    request</h6>
                                <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">14
                                    DEC</p>
                                <p className="mt-4 mb-2 leading-normal text-sm text-slate-500">People care
                                    about how you see the world, how you think, what motivates you, what
                                    you’re struggling with or afraid of.</p>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-red-500 to-yellow-400 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">request</span>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-red-500 to-yellow-400 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">priority</span>
                            </div>
                        </div>
                        <div className="relative mb-0">
<span
    className="w-6.5 h-6.5 rounded-circle text-base z-1 absolute left-4 inline-flex -translate-x-1/2 items-center justify-center bg-white text-center font-semibold">
<i className="relative text-transparent ni leading-none ni-controller bg-gradient-to-tl from-gray-900 to-slate-800 leading-pro z-1 bg-clip-text"></i>
</span>
                            <div className="ml-12 pt-1.4 max-w-120 relative -top-1.5 w-auto">
                                <h6 className="mb-0 font-semibold leading-normal text-sm text-slate-700">Controller
                                    issues</h6>
                                <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">13
                                    DEC</p>
                                <p className="mt-4 mb-2 leading-normal text-sm text-slate-500">People care
                                    about how you see the world, how you think, what motivates you, what
                                    you’re struggling with or afraid of.</p>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-gray-900 to-slate-800 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">controller</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full max-w-full px-3 mt-6 lg:flex-0 shrink-0 lg:mt-0 lg:w-6/12">
            <div
                className="relative flex flex-col min-w-0 break-words bg-gradient-to-tl from-gray-900 to-slate-800 shadow-soft-dark-xl rounded-2xl bg-clip-border">
                <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
                    <h6 className="text-white">Timeline dark with dashed line</h6>
                </div>
                <div className="flex-auto p-4">
                    <div
                        className="relative before:absolute before:left-4 before:top-0 before:h-full before:border-r-2 before:border-solid before:border-slate-100 before:content-[''] lg:before:-ml-px">
                        <div className="relative mb-4">
<span
    className="w-6.5 h-6.5 rounded-circle text-base z-1 absolute left-4 inline-flex -translate-x-1/2 items-center justify-center bg-slate-700 text-center font-semibold">
<i className="relative text-transparent ni leading-none ni-bell-55 bg-gradient-to-tl from-green-600 to-lime-400 leading-pro z-1 bg-clip-text"></i>
</span>
                            <div className="ml-12 pt-1.4 max-w-120 relative -top-1.5 w-auto">
                                <h6 className="mb-0 font-semibold leading-normal text-white text-sm">$2400,
                                    Design changes</h6>
                                <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">22
                                    DEC 7:20 PM</p>
                                <p className="mt-4 mb-2 leading-normal text-sm text-slate-400">People care
                                    about how you see the world, how you think, what motivates you, what
                                    you’re struggling with or afraid of.</p>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-green-600 to-lime-400 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">design</span>
                            </div>
                        </div>
                        <div className="relative mb-4">
<span
    className="w-6.5 h-6.5 rounded-circle text-base z-1 absolute left-4 inline-flex -translate-x-1/2 items-center justify-center bg-slate-700 text-center font-semibold">
<i className="relative text-transparent ni leading-none ni-html5 bg-gradient-to-tl from-red-600 to-rose-400 leading-pro z-1 bg-clip-text"></i>
</span>
                            <div className="ml-12 pt-1.4 max-w-120 relative -top-1.5 w-auto">
                                <h6 className="mb-0 font-semibold leading-normal text-white text-sm">New
                                    order #1832412</h6>
                                <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">21
                                    DEC 11 PM</p>
                                <p className="mt-4 mb-2 leading-normal text-sm text-slate-400">People care
                                    about how you see the world, how you think, what motivates you, what
                                    you’re struggling with or afraid of.</p>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-red-600 to-rose-400 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">order</span>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-red-600 to-rose-400 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">#1832412</span>
                            </div>
                        </div>
                        <div className="relative mb-4">
<span
    className="w-6.5 h-6.5 rounded-circle text-base z-1 absolute left-4 inline-flex -translate-x-1/2 items-center justify-center bg-slate-700 text-center font-semibold">
<i className="relative text-transparent ni leading-none ni-cart bg-gradient-to-tl from-blue-600 to-cyan-400 leading-pro z-1 bg-clip-text"></i>
</span>
                            <div className="ml-12 pt-1.4 max-w-120 relative -top-1.5 w-auto">
                                <h6 className="mb-0 font-semibold leading-normal text-white text-sm">Server
                                    payments for April</h6>
                                <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">21
                                    DEC 9:34 PM</p>
                                <p className="mt-4 mb-2 leading-normal text-sm text-slate-400">People care
                                    about how you see the world, how you think, what motivates you, what
                                    you’re struggling with or afraid of.</p>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-blue-600 to-cyan-400 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">server</span>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-blue-600 to-cyan-400 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">payments</span>
                            </div>
                        </div>
                        <div className="relative mb-4">
<span
    className="w-6.5 h-6.5 rounded-circle text-base z-1 absolute left-4 inline-flex -translate-x-1/2 items-center justify-center bg-slate-700 text-center font-semibold">
<i className="relative text-transparent ni leading-none ni-credit-card bg-gradient-to-tl from-red-500 to-yellow-400 leading-pro z-1 bg-clip-text"></i>
</span>
                            <div className="ml-12 pt-1.4 max-w-120 relative -top-1.5 w-auto">
                                <h6 className="mb-0 font-semibold leading-normal text-white text-sm">New
                                    card added for order #4395133</h6>
                                <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">20
                                    DEC 2:20 AM</p>
                                <p className="mt-4 mb-2 leading-normal text-sm text-slate-400">People care
                                    about how you see the world, how you think, what motivates you, what
                                    you’re struggling with or afraid of.</p>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-red-500 to-yellow-400 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">card</span>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-red-500 to-yellow-400 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">#4395133</span>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-red-500 to-yellow-400 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">priority</span>
                            </div>
                        </div>
                        <div className="relative mb-4">
<span
    className="w-6.5 h-6.5 rounded-circle text-base z-1 absolute left-4 inline-flex -translate-x-1/2 items-center justify-center bg-slate-700 text-center font-semibold">
<i className="relative text-transparent ni leading-none ni-key-25 bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro z-1 bg-clip-text"></i>
</span>
                            <div className="ml-12 pt-1.4 max-w-120 relative -top-1.5 w-auto">
                                <h6 className="mb-0 font-semibold leading-normal text-white text-sm">Unlock
                                    packages for development</h6>
                                <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">18
                                    DEC 4:54 AM</p>
                                <p className="mt-4 mb-2 leading-normal text-sm text-slate-400">People care
                                    about how you see the world, how you think, what motivates you, what
                                    you’re struggling with or afraid of.</p>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-purple-700 to-pink-500 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">development</span>
                            </div>
                        </div>
                        <div className="relative mb-4">
<span
    className="w-6.5 h-6.5 rounded-circle text-base z-1 absolute left-4 inline-flex -translate-x-1/2 items-center justify-center bg-slate-700 text-center font-semibold">
 <i className="relative text-transparent ni leading-none ni-archive-2 bg-gradient-to-tl from-green-600 to-lime-400 leading-pro z-1 bg-clip-text"></i>
</span>
                            <div className="ml-12 pt-1.4 max-w-120 relative -top-1.5 w-auto">
                                <h6 className="mb-0 font-semibold leading-normal text-white text-sm">New
                                    message unread</h6>
                                <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">16
                                    DEC</p>
                                <p className="mt-4 mb-2 leading-normal text-sm text-slate-400">People care
                                    about how you see the world, how you think, what motivates you, what
                                    you’re struggling with or afraid of.</p>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-green-600 to-lime-400 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">message</span>
                            </div>
                        </div>
                        <div className="relative mb-4">
<span
    className="w-6.5 h-6.5 rounded-circle text-base z-1 absolute left-4 inline-flex -translate-x-1/2 items-center justify-center bg-slate-700 text-center font-semibold">
<i className="relative text-transparent ni leading-none ni-check-bold bg-gradient-to-tl from-blue-600 to-cyan-400 leading-pro z-1 bg-clip-text"></i>
</span>
                            <div className="ml-12 pt-1.4 max-w-120 relative -top-1.5 w-auto">
                                <h6 className="mb-0 font-semibold leading-normal text-white text-sm">Notifications
                                    unread</h6>
                                <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">15
                                    DEC</p>
                                <p className="mt-4 mb-2 leading-normal text-sm text-slate-400">People care
                                    about how you see the world, how you think, what motivates you, what
                                    you’re struggling with or afraid of.</p>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-blue-600 to-cyan-400 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">notification</span>
                            </div>
                        </div>
                        <div className="relative mb-4">
<span
    className="w-6.5 h-6.5 rounded-circle text-base z-1 absolute left-4 inline-flex -translate-x-1/2 items-center justify-center bg-slate-700 text-center font-semibold">
<i className="relative text-transparent ni leading-none ni-box-2 bg-gradient-to-tl from-red-500 to-yellow-400 leading-pro z-1 bg-clip-text"></i>
</span>
                            <div className="ml-12 pt-1.4 max-w-120 relative -top-1.5 w-auto">
                                <h6 className="mb-0 font-semibold leading-normal text-white text-sm">New
                                    request</h6>
                                <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">14
                                    DEC</p>
                                <p className="mt-4 mb-2 leading-normal text-sm text-slate-400">People care
                                    about how you see the world, how you think, what motivates you, what
                                    you’re struggling with or afraid of.</p>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-red-500 to-yellow-400 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">request</span>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-red-500 to-yellow-400 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">priority</span>
                            </div>
                        </div>
                        <div className="relative mb-0">
<span
    className="w-6.5 h-6.5 rounded-circle text-base z-1 absolute left-4 inline-flex -translate-x-1/2 items-center justify-center bg-slate-700 text-center font-semibold">
<i className="relative text-transparent ni leading-none ni-controller bg-gradient-to-tl from-gray-900 to-slate-800 leading-pro z-1 bg-clip-text"></i>
</span>
                            <div className="ml-12 pt-1.4 max-w-120 relative -top-1.5 w-auto">
                                <h6 className="mb-0 font-semibold leading-normal text-white text-sm">Controller
                                    issues</h6>
                                <p className="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">13
                                    DEC</p>
                                <p className="mt-4 mb-2 leading-normal text-sm text-slate-400">People care
                                    about how you see the world, how you think, what motivates you, what
                                    you’re struggling with or afraid of.</p>
                                <span
                                    className="py-1.8 px-3 text-xxs rounded-1 bg-gradient-to-tl from-gray-900 to-slate-800 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">controller</span>
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

export default Timeline;