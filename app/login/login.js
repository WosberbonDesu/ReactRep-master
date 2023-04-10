import React from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'
import ArrowDownLight from "@/assets/img/down-arrow-white.svg";
import ArrowDownDark from "@/assets/img/down-arrow-dark.svg";
import launch from "@/assets/img/icons/launch.svg";
import facebook from "@/assets/img/icons/facebook.svg";
import apple from "@/assets/img/icons/apple.svg";
import google from "@/assets/img/icons/google.svg";

const Login = (props) => {
    console.log(props,'props')
    return (
        <html lang="en">
        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <link rel="apple-touch-icon" sizes="76x76" href="./../../assets/img/apple-icon.png"/>
            <link rel="icon" type="image/png" href="../../assets/img/favicon.png"/>
            <title>Panel</title>

            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"/>


            <script src="https://kit.fontawesome.com/42d5adcbca.js" crossOrigin="anonymous"></script>

            <script src="https://unpkg.com/@popperjs/core@2"></script>
        </Head>

        <body className="m-0 font-sans antialiased
                                font-normal text-left leading-default text-base
                                dark:bg-slate-950 bg-gray-50 text-slate-500 dark:text-white/80">


        <main className="mt-0 transition-all duration-200 ease-soft-in-out">
            <div
                className="pb-56 pt-12 m-4 min-h-50-screen items-start rounded-xl p-0 relative overflow-hidden flex bg-cover bg-center ">
                    <span
                        className="absolute top-0 left-0 w-full h-full bg-center bg-cover opacity-60 bg-gradient-to-tl from-gray-900 to-slate-800"></span>
                <div className="container z-1">
                    <div className="flex flex-wrap justify-center -mx-3">
                        <div
                            className="w-full max-w-full px-3 mx-auto text-center shrink-0 lg:flex-0 lg:w-5/12">
                            <h1 className="mt-12 mb-2 text-white">Welcome!</h1>
                            <p className="text-white ">Use these awesome forms to login or create new account in
                                your project for free.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="flex flex-wrap justify-center -mx-3 -mt-48 lg:-mt-48 md:-mt-56">
                    <div
                        className="w-full max-w-full px-3 mx-auto shrink-0 md:flex-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
                        <div
                            className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                            <div
                                className="text-center border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6">
                                <h5>Sign in</h5>
                            </div>
                            <div className="flex flex-wrap px-4 -mx-3 sm:px-6 xl:px-12">
                                <div className="w-3/12 max-w-full px-1 ml-auto flex-0">
                                    <a className="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75"
                                       href="javascript:;">
                                        <Image src={facebook}></Image>
                                    </a>
                                </div>
                                <div className="w-3/12 max-w-full px-1 flex-0">
                                    <a className="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75"
                                       href="javascript:;">
                                        <Image src={apple}></Image>
                                    </a>
                                </div>
                                <div className="w-3/12 max-w-full px-1 mr-auto flex-0">
                                    <a className="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75"
                                       href="javascript:;">
                                        <Image src={google}></Image>
                                    </a>
                                </div>
                            </div>
                            <div className="flex-auto p-6 text-center">
                                <form role="form text-left">
                                    <div className="mb-4">
                                        <input type="email"
                                               className="text-sm focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                                               placeholder="Email" aria-label="Email"
                                               aria-describedby="email-addon"/>
                                    </div>
                                    <div className="mb-4">
                                        <input type="password"
                                               className="text-sm focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                                               placeholder="Password" aria-label="Password"
                                               aria-describedby="password-addon"/>
                                    </div>
                                    <div className="min-h-6 mb-0.5 block pl-12 text-left">
                                        <input id="rememberMe"
                                               className="mt-0.5 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                               type="checkbox" checked=""/>
                                        <label
                                            className="mb-2 ml-1 font-normal cursor-pointer select-none text-sm text-slate-700"
                                            htmlFor="rememberMe">Remember me</label>
                                    </div>
                                    <div className="text-center">
                                        <Link type="button" href={'/'}
                                                className="inline-block w-full px-6 py-3 mt-6 mb-2
                                                font-bold text-center text-white uppercase align-middle transition-all bg-transparent
                                                 border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs
                                                 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150
                                                  bg-x-25 bg-gradient-to-tl from-blue-600 to-cyan-400 hover:border-slate-700 hover:bg-slate-700 hover:text-white">
                                            <button onClick={()=>props.setIsAuthenticated(true)}>Sign in</button>

                                        </Link>
                                    </div>
                                    <div className="relative w-full max-w-full px-3 mb-2 text-center shrink-0">
                                        <p className="inline mb-2 px-4 text-slate-400 bg-white z-2 text-sm leading-normal font-semibold before:bg-gradient-to-r before:from-transparent before:via-neutral-500/40 before:to-neutral-500/40 before:right-2 before:-ml-1/2 before:content-[''] before:inline-block before:w-3/10 before:h-px before:relative before:align-middle after:left-2 after:-mr-1/2 after:bg-gradient-to-r after:from-neutral-500/40 after:via-neutral-500/40 after:to-transparent after:content-[''] after:inline-block after:w-3/10 after:h-px after:relative after:align-middle">Don't
                                            have an account?</p>
                                    </div>
                                    <div className="text-center">
                                        <a href="../../pages/authentication/signup/illustration.html"
                                           className="inline-block w-full px-6 py-3 mt-2 mb-6 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white">Sign
                                            up</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <footer className="py-12">
            <div className="container">
                <div className="flex flex-wrap -mx-3">
                    <div
                        className="w-full max-w-full px-3 mx-auto mb-6 text-center shrink-0 lg:flex-0 lg:w-8/12">
                        <a href="javascript:;" target="_blank"
                           className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12">Company</a>
                        <a href="javascript:;" target="_blank"
                           className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12">About
                            Us</a>
                        <a href="javascript:;" target="_blank"
                           className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12">Team</a>
                        <a href="javascript:;" target="_blank"
                           className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12">Products</a>
                        <a href="javascript:;" target="_blank"
                           className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12">Blog</a>
                        <a href="javascript:;" target="_blank"
                           className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12">Pricing</a>
                    </div>
                    <div
                        className="w-full max-w-full px-3 mx-auto mt-2 mb-6 text-center shrink-0 lg:flex-0 lg:w-8/12">
                        <a href="javascript:;" className="mr-6 text-slate-400">
                            <span className="text-lg fab fa-dribbble" aria-hidden="true"></span>
                        </a>
                        <a href="javascript:;" className="mr-6 text-slate-400">
                            <span className="text-lg fab fa-twitter" aria-hidden="true"></span>
                        </a>
                        <a href="javascript:;" className="mr-6 text-slate-400">
                            <span className="text-lg fab fa-instagram" aria-hidden="true"></span>
                        </a>
                        <a href="javascript:;" className="mr-6 text-slate-400">
                            <span className="text-lg fab fa-pinterest" aria-hidden="true"></span>
                        </a>
                        <a href="javascript:;" className="mr-6 text-slate-400">
                            <span className="text-lg fab fa-github" aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                    <div className="w-8/12 max-w-full px-3 mx-auto mt-1 text-center flex-0">
                        <p className="mb-0 text-slate-400">
                            Copyright ©
                            {/*<script>document.write(new Date().getFullYear())</script>*/}
                            Soft by
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        </body>

        <script src="./../assets/js/plugins/perfect-scrollbar.min.js"></script>

        <script src="./../assets/js/soft-ui-dashboard-pro-tailwind.js?v=1.0.1"></script>
        </html>
    );
};

export default Login;