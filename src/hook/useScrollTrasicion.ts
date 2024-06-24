/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

const useScrollSection = (sectionClass: string) => {
    const [visibleSection, setVisibleSection] = useState<number>(0);

    const handleScroll = () => {
        const sections = document.querySelectorAll<HTMLDivElement>(sectionClass);
        const scrollPosition = window.scrollY;

        console.log(sections)

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                console.log(index)
                setVisibleSection(index);
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return visibleSection;
};

export default useScrollSection;
