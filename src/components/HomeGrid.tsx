'use client'

import React, { useEffect, useState } from "react"
import { faBehance, faDribbble, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import useWindowDimensions from "@/utils/useDimension"
import Image from "next/image"
import styles from './style/HomeGrid.module.css'
import { symlink } from "fs"

export default function HomeGrid(){
    const [date, setDate] = useState<string>('')
    const [month, setMonth] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const { width } = useWindowDimensions()
    const [arr, setArr] = useState([])

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
    },[])

    var indents = [];

    for (var i = 0; i < 33; i++) {
        indents.push(<div className="w-5 h-5 rounded-md bg-gray-600 hover:bg-green-400 transition-all delay-75 ease-in-out"></div>);
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
        <div className={`${loading ? 'animate-zoom-out' : 'opacity-0'} ${ styles.hero }`}>
            <div className={ styles.hero__container }>
                <p className={ styles.hero__subtitle }>
                    Hello! Cosmas's here 👋
                </p>

                <h1 className={ styles.hero__title }>
                    Frontend Developer & Graphic Designer based in Indonesia
                </h1>   

                <div className={ styles.hero__buttonContainer }>
                    <Link 
                        href="tancosmas@gmail.com" 
                        className={ styles.btnPrimary }
                    >
                            Contact
                    </Link>

                    <Link 
                        href="https://read.cv/adriancosmas" 
                        target="_blank" 
                        className={ styles.btnSecondary }
                    >
                            Read CV
                    </Link>
                </div>
            </div>
        </div>

        <div className={ styles.gridContainer }>
            <div className={`${loading ? 'animate-fade-in-up' : 'opacity-0'} ${ styles.gridItem }`}>
                <h1 className={ styles.about__title }>
                    About me
                </h1>

                <p className={ styles.about__description }>
                Passionate and dedicated Frontend Developer based in Indonesia with 4 years of experience in the world of frontend
development and UI/UX design. Proficient in creating visually appealing and user-friendly interfaces, I thrive on
transforming complex requirements into seamless, interactive web experiences. Committed to staying updated with the
latest industry trends and best practices to deliver high-quality, responsive web applications.
                </p>
            </div>

            <div className={`${loading ? 'animate-fade-in-up' : 'opacity-0'} ${ styles.gridItem }`}>
                <p className={ styles.quote }>
                    "It does not matter how slowly you go as long as you do not stop"
                </p>

                <p className={ styles.quotePerson }>
                    Confucius
                </p>
            </div>
        </div>

        <div className={ styles.gridContainer__2 }>
            <div className={ `${loading ? 'animate-fade-in-up' : 'opacity-0'} ${ styles.calendarContainer }` }>
                <div className={ styles.calendarContent }>
                    <div className={ styles.calendarHeader }>
                        <p className={ styles.calendarHeader__title }>
                            { month.toUpperCase() }
                        </p>
                    </div>

                    <div className={ styles.calendarDateContainer }>
                        <p className={ styles.calendarDate__title }>
                            { date }
                        </p>
                    </div>
                </div>
            </div>

            <div className={`${loading ? 'animate-fade-in-up' : 'opacity-0'} ${ styles.gridItem__3 }`}>
                <Link 
                    className={ styles.linkedin__container } 
                    href="https://linkedin.com/in/adriancosmas"
                >
                    <FontAwesomeIcon 
                        className={ styles.linkedin__icon } 
                        icon={ faLinkedin }
                    />

                    <p className={ styles.linkedin__text }>
                        Connect with me!
                    </p>
                </Link>
            </div>

            <div className={`${loading ? 'animate-fade-in-up' : 'opacity-0'} ${ styles.gridItem__4 }`}>
                <Link 
                    className={ styles.github__container } 
                    href="https://github.com/adriancosmas"
                >
                    <FontAwesomeIcon 
                        className={ styles.github__icon } 
                        icon={ faGithub }
                    />

                    <div className={ styles.github__commit }>
                        { indents }
                    </div>

                    <p className={ styles.github__text }>
                        It's empty 😱
                    </p>
                </Link>
            </div>

            <div className={`${loading ? 'animate-fade-in-up' : 'opacity-0'} ${ styles.gridItem__5 }`}>
                <div className={ styles.spotify__container }>
                    <iframe src="https://open.spotify.com/embed/track/6WyOlDr4ntWyXZZ0hfH5Ts?utm_source=generator" width="100%" height="232px" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <p className={ styles.spotify__text }>
                        My favorite song 🔥
                    </p>
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
                    <div className=" bg-[#1c1917] flex-1 rounded-3xl p-6 transition-all delay-150 hover:rotate-6 cursor-pointer font-mono text-green-400 text-center flex justify-center items-center text-3xl">{`> npm install`}</div>
                    <Link href="https://www.fiverr.com/s/382XjDm" target="_blank" className=" bg-white flex-1 rounded-3xl p-6 transition-all delay-150 hover:-rotate-6 cursor-pointer text-4xl text-center flex justify-center items-center hover:border-4 hover:border-[#FFDC7F]">Logo/Lettering Commission ↗</Link>
                </div>
            </div>
        </div>
    </>
    )
}