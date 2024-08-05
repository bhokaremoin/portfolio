'use client'

import React, { useEffect } from 'react'
import Profile from '@/components/Profile'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import { useSectionScroll } from '@/hooks/useSectionScroll'

export default function Home(): JSX.Element {
    const { sectionRefs, currentSectionIndex } = useSectionScroll();

    useEffect(() => {
        sectionRefs.current = [
            React.createRef<HTMLElement>(),
            React.createRef<HTMLElement>(),
            React.createRef<HTMLElement>()
        ];
    }, []);

    return (
        <main>
            <Profile ref={sectionRefs.current[0]} />
            <Projects ref={sectionRefs.current[1]} />
            <Contact ref={sectionRefs.current[2]} />
        </main>
    )
}
