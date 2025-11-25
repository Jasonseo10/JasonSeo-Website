import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';
import styles from './page.module.css';

export default function Contact() {
    const links = [
        { name: 'Instagram', href: 'https://www.instagram.com/jason.seo__/', icon: <FaInstagram /> },
        { name: 'GitHub', href: 'https://github.com/Jasonseo10', icon: <FaGithub /> },
        { name: 'Devpost', href: 'https://devpost.com/jasonseo0505?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav', icon: <SiDevpost /> },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jasonseo0505/', icon: <FaLinkedin /> },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Find Me Here!</h1>
            <div className={styles.linkList}>
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className={styles.iconLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    );
}