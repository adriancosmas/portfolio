'use client'

import React, { useEffect, useState } from "react"
import { faBehance, faDribbble, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import useWindowDimensions from "@/utils/useDimension"
import Image from "next/image"

export default function HomeGrid(){
    const [date, setDate] = useState<string>('')
    const [month, setMonth] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const { width } = useWindowDimensions()

    useEffect(() => {
        const timer = setTimeout(() => setLoading(true), 200); // Delay to smooth out the load
        return () => clearTimeout(timer);
    },[])

    useEffect(() => {
        const date = new Date()

        const formatter = new Intl.DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });

        const res = formatter.format(date);

        const splitted = res.split(' ')

        setMonth(splitted[0])
        setDate(splitted[1].replace(',',''))

        console.log(splitted)
    },[])

    var indents = [];
    for (var i = 0; i < 33; i++) {
        indents.push(<div className="w-5 h-5 rounded-md bg-gray-600"></div>);
    }

    const item = width && width < 768 ? indents.splice(2,3) : indents

    const skill = [
        "Typescript",
        "Javascript",
        "CSS3",
        "HTML",
        "React JS",
        "React Native",
        "Next JS",
        "Adobe Photoshop",
        "Git",
        "Vercel",
        "Tailwind CSS",
        "SCSS",
        "Affinity Designer",
        "Figma",
        "Vegas Pro",
        "Adobe Lightroom",
        "Node JS",
        "UI/UX",
    ]

    return(
    <>
        <div className={`${loading ? 'animate-zoom-out' : 'opacity-0'} w-full rounded-3xl bg-white mb-8 lg:h-[calc(100vh-50px)] h-[calc(100vh-100px)] overflow-hidden p-6`}>
            <div className="max-w-[768px] flex justify-center items-center flex-col h-full mx-auto">
                <p className="mb-4 font-light">Hello! Cosmas here.</p>
                <h1 className="font-semibold text-gray-800 text-4xl lg:text-6xl text-center">Frontend Developer & Graphic Designer based in Indonesia</h1>   

                <div className="flex flex-row gap-8 mt-8">
                    <Link href="mailto:tancosmas@gmail.com" className=" bg-[#FFDC7F] px-6 py-2 rounded-md hover:bg-gray-800 hover:text-[#FFDC7F] ease-in-out delay-100 transition-all">Contact</Link>
                    <Link href="https://read.cv/adriancosmas" target="_blank" className="border border-[#FFDC7F] px-6 py-2 rounded-md hover:border-gray-800 hover:text-[#FFDC7F] ease-in-out delay-100 transition-all">Read CV</Link>
                </div>
            </div>
        </div>

        <div className="grid grid-flow-row-dense gird-cols-2 gap-8 sm:grid-flow-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mb-8">
            <div className={`lg:col-span-2 transition-opacity duration-1000 ${loading ? 'animate-fade-in-up' : 'opacity-0'} overflow-hidden relative bg-[#FFDC7F] h-full rounded-3xl p-6`}>
                <h1 className="text-3xl font-semibold text-gray-800 mb-6">About me</h1>
                <p className="font-light text-gray-600 lg:text-2xl text-lg">
                Passionate and dedicated Frontend Developer based in Indonesia with 4 years of experience in the world of frontend
development and UI/UX design. Proficient in creating visually appealing and user-friendly interfaces, I thrive on
transforming complex requirements into seamless, interactive web experiences. Committed to staying updated with the
latest industry trends and best practices to deliver high-quality, responsive web applications.
                </p>
            </div>

            <div className={`transition-opacity duration-1000 ${loading ? 'animate-fade-in-up' : 'opacity-0'} overflow-hidden relative bg-white h-full aspect-square rounded-3xl p-6 flex items-center justify-center flex-col`}>
                <p className="text-3xl font-semibold text-center">
                    "It does not matter how slowly you go as long as you do not stop"
                </p>

                <p className="text-lg font-light text-center mt-10">
                    Confucius
                </p>
            </div>
        </div>

        {/* SECTION 2 */}
        <div className="grid gird-cols-2 gap-8 sm:grid-flow-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            <div className={ `transition-opacity duration-1000 ${loading ? 'animate-fade-in-up' : 'opacity-0'} aspect-square overflow-hidden relative bg-white rounded-3xl cursor-default`} >
                <div className="flex h-full w-full flex-col">
                    <div className="w-full flex-[0.3] bg-red-500 flex items-center justify-center">
                        <p className="text-white text-center font-semibold text-5xl cursor-default">{month.toUpperCase()}</p>
                    </div>

                    <div className="flex flex-col justify-center items-center flex-1">
                        <p className="text-center font-semibold text-gray-800 text-[150px]">{date}</p>
                    </div>
                </div>
            </div>

            <div className={`transition-opacity duration-1000 ${loading ? 'animate-fade-in-up' : 'opacity-0'} aspect-square overflow-hidden relative bg-[#dff2ff] rounded-3xl p-6`}>
                <Link href="https://linkedin.com/in/adriancosmas">
                    <div className="flex flex-col justify-between h-full">
                        <FontAwesomeIcon className='w-20 text-[#0077B5] h-20' icon={faLinkedin} />
                        <p className="font-light text-gray-800 lg:text-3xl text-lg">Connect with me!</p>
                    </div>
                </Link>
            </div>

            <div className={`transition-opacity duration-1000 ${loading ? 'animate-fade-in-up' : 'opacity-0'} aspect-square overflow-hidden relative bg-[#24292e] rounded-3xl p-6`}>
                <Link href="https://github.com/adriancosmas">
                    <div className="flex flex-col justify-between h-full">
                        <FontAwesomeIcon className='w-20 text-white h-20' icon={faGithub} />
                        <div className="flex flex-row flex-wrap gap-2 justify-center">
                            {indents}
                        </div>

                        <p className="font-light text-white lg:text-3xl text-lg">It's empty 😱</p>
                    </div>
                </Link>
            </div>

            <div className={`transition-opacity duration-1000 ${loading ? 'animate-fade-in-up' : 'opacity-0'} aspect-square overflow-hidden relative bg-[rgb(149,110,86)] rounded-3xl p-6`}>
                <div className="flex flex-col justify-between h-full">
                    <iframe src="https://open.spotify.com/embed/track/6WyOlDr4ntWyXZZ0hfH5Ts?utm_source=generator" width="100%" height="232px" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <p className="font-light text-white lg:text-3xl text-lg">My favorite song🔥</p>
                </div>
            </div>

            <div className={ `transition-opacity duration-1000 lg:col-span-2 ${loading ? 'animate-fade-in-up' : 'opacity-0'} overflow-hidden relative bg-white rounded-3xl cursor-default p-6`} >
                <div className="flex gap-4 flex-wrap">
                    {skill.map((o, index) => (
                        <div
                            key={index}
                            className="bg-slate-100 px-4 py-2 rounded-full lg:text-2xl text-lg"
                        >
                            { o }
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-8">
                <Link href="https://behance.net/shibuyameto" target="_blank">
                    <div className={`${loading ? 'animate-fade-in-up' : 'opacity-0'} bg-[#053eff] aspect-square rounded-3xl p-6 hover:scale-125 transition-all delay-100 ease-in-out cursor-pointer flex justify-center items-center`}>
                        <FontAwesomeIcon className='w-20 text-white h-20' icon={faBehance} />
                    </div>
                </Link>

                <Link href="https://dribbble.com/shibuyameto" target="_blank">
                    <div className={`${loading ? 'animate-fade-in-up' : 'opacity-0'} bg-[#ea4c89] aspect-square rounded-3xl p-6 hover:scale-125 transition-all delay-100 ease-in-out cursor-pointer flex justify-center items-center`}>
                        <FontAwesomeIcon className='w-20 text-white h-20' icon={faDribbble} />
                    </div>
                </Link>

                <Link href="https://instagram.com/shibuyameto" target="_blank">
                    <div className={`${loading ? 'animate-fade-in-up' : 'opacity-0'} bg-[#515BD4] aspect-square rounded-3xl p-6 hover:scale-125 transition-all delay-100 ease-in-out cursor-pointer flex justify-center items-center`}>
                        <FontAwesomeIcon className='w-20 text-white h-20' icon={faInstagram} />
                    </div>
                </Link>

                <Link href="https://youtube.com/@jansentriad" target="_blank">
                    <div className={`${loading ? 'animate-fade-in-up' : 'opacity-0'} bg-[#FF0000] aspect-square rounded-3xl p-6 hover:scale-125 transition-all delay-100 ease-in-out cursor-pointer flex justify-center items-center`}>
                        <FontAwesomeIcon className='w-20 text-white h-20' icon={faYoutube} />
                    </div>
                </Link>
            </div>

            <div className={`transition-opacity duration-1000 ${loading ? 'animate-fade-in-up' : 'opacity-0'} aspect-square overflow-hidden relative bg-[rgb(149,110,86)] rounded-3xl p-6`}>
                <div>
                    <Image 
                        priority
                        src="/img/everyday.png" 
                        alt="Everyday is another battle"
                        fill
                        style={{ objectFit:'cover' }}
                        sizes="(max-width: 768px) 100vw, 
                        (max-width: 1200px) 50vw, 
                        33vw"
                    />
                </div>
            </div>

            <div className={`transition-opacity duration-1000 ${loading ? 'animate-fade-in-up' : 'opacity-0'} aspect-square overflow-visible relative rounded-3xl`}>
                <div className="flex flex-col h-full gap-8">
                    <div className=" bg-red-500 flex-1 rounded-3xl p-6 transition-all delay-150 hover:rotate-6 cursor-pointer">1</div>
                    <div className=" bg-blue-500 flex-1 rounded-3xl p-6 transition-all delay-150 hover:-rotate-6 cursor-pointer">1</div>
                </div>
            </div>
        </div>
    </>
    )
}