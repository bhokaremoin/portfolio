import { useEffect, useRef, useState } from 'react';

export const useSectionScroll = () => {
    const sectionRefs = useRef<React.RefObject<HTMLElement>[]>([]);
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            sectionRefs.current.forEach((ref, index) => {
                if (ref.current) {
                    const sectionTop = ref.current.offsetTop;
                    const sectionBottom = sectionTop + ref.current.offsetHeight;

                    if (scrollPosition >= sectionTop - windowHeight / 2 && scrollPosition < sectionBottom - windowHeight / 2) {
                        setCurrentSectionIndex(index);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const currentSection = sectionRefs.current[currentSectionIndex]?.current;
        if (currentSection) {
            currentSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, [currentSectionIndex]);

    return { sectionRefs, currentSectionIndex };
};