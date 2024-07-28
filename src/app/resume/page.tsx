'use client'

import { useEffect } from 'react'
import { useGlobalContext } from '@/context/global'

export default function ResumeRedirect() {
    const { resumeURL } = useGlobalContext()
    useEffect(() => {
        window.location.href = resumeURL
    }, [resumeURL])
    return null
}
