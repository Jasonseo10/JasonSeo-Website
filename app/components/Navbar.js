'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects' },
        { name: 'Experience', href: '/experience' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className={`container ${styles.header}`}>
            <Link href="/" className={styles.logo}>
                Jason Seo
            </Link>
            <nav className={styles.nav}>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`${styles.link} ${pathname === link.href ? styles.active : ''}`}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
