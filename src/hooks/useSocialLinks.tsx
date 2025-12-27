import { useMemo } from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { useApp } from '../contexts/AppContext';

const iconStyleClass: string = 'hover:scale-[1.18] size-full';

export const useSocialLinks = () => {
    const { generalInfo } = useApp();
    const socialLinks = generalInfo?.socialLinks ?? {};

    const socials = useMemo(() => {
        const iconMap: Record<string, React.ReactNode> = {
            github: <FaGithub className={iconStyleClass} />,
            linkedin: <FaLinkedin className={iconStyleClass} />,
            facebook: <FaFacebook className={iconStyleClass} />,
            instagram: <FaInstagram className={iconStyleClass} />,
            x: <FaSquareXTwitter className={iconStyleClass} />,
        };

        return Object.entries(socialLinks)
            .filter(([_, url]) => url)
            .map(([name, link]) => ({
                name,
                link,
                icon: iconMap[name] || null,
            }));
    }, [JSON.stringify(socialLinks)]);

    return socials;
};
