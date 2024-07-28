'use client'
import Link from 'next/link'
import { useGlobalContext } from '@/context/global'
import React, { useState, useEffect } from 'react'
import styles from './style.module.css'
import {Button} from "@nextui-org/react";

const GO_LIVE_DATE = new Date('2024-08-31T18:00:00')

function calculateTimeLeft() {
    const difference = +GO_LIVE_DATE - +new Date()
    let timeLeft = {
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0',
    }

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString(),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString(),
            minutes: Math.floor((difference / 1000 / 60) % 60).toString(),
            seconds: Math.floor((difference / 1000) % 60).toString(),
        }
    }

    return timeLeft
}

const WorkInProgress: React.FC = () => {
    const { resumeURL, linkedinURL, emailId } = useGlobalContext()
    const [timeLeft, setTimeLeft] = useState({
        days: '--',
        hours: '--',
        minutes: '--',
        seconds: '--',
    })
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className={`w-screen h-screen p-4`}>
            <div className={'flex justify-between w-full my-4'}>
                <div>
                    <span>Moin Bhokare</span>
                </div>
                <div className={'flex gap-4 flex-row'}>
                    <Link href={resumeURL}>Resume</Link>
                    <Link href={linkedinURL}>Linkedin</Link>
                    <Link href={`mailto:${emailId}`}>{emailId}</Link>
                </div>
            </div>
            <div
                className={
                    'flex flex-col justify-center items-center mt-20 gap-10'
                }
            >
                <span className={'font-mono text-slate-400'}>COMMING SOON</span>
                <span className={'text-8xl '}>New Website is on a Roll!</span>
                {(isClient && timeLeft && timeLeft.days !== '--')&& (
                    <div className={`${styles.container} mt-10`}>
                        <div className="flex">
                            {Object.entries(timeLeft).map(
                                ([key, value], index) => (
                                    <div key={key} className="flex flex-row font-mono">
                                        <div className="flex flex-col items-center">
                                            <span className="text-8xl font-bold text-orange-bold">
                                                {value
                                                    .toString()
                                                    .padStart(2, '0')}
                                            </span>
                                            <span className="text-gray-400 uppercase text-sm mt-2">
                                                {key}
                                            </span>
                                        </div>
                                        {index < 3 && (
                                            <span className="text-5xl font-bold text-orange-500 mx-2 my-4">
                                                :
                                            </span>
                                        )}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default WorkInProgress
