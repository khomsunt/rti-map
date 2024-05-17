// components/Navbar.js
"use client"
import { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleSubmenu = () => {
        setIsSubmenuOpen(!isSubmenuOpen);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">MyLogo</Link>
            </div>
            <div className={styles.menuIcon} onClick={toggleMenu}>
                ☰
            </div>
            <ul className={`${styles.navItems} ${isMenuOpen ? styles.active : ''}`}>
                <li className={styles.navLink}>
                    <Link href="/map">Map</Link>
                </li>
                <li
                    className={styles.navItem}
                    onMouseEnter={toggleSubmenu}
                    onMouseLeave={toggleSubmenu}
                    onClick={toggleSubmenu}
                >
                    <a className={styles.navLink}>Services</a>
                    {isSubmenuOpen && (
                        <div className={styles.wrapSubmenu}>
                        <ul className={styles.submenu}>
                            <li className={styles.submenuItem}>
                                <Link href="/web-development">Web Development</Link>
                            </li>
                            <li className={styles.submenuItem}>
                                <Link href="/seo">SEO</Link>
                            </li>
                            <li className={styles.submenuItem}>
                                <Link href="/marketing">Marketing</Link>
                            </li>
                        </ul>
                        </div>
                    )}
                </li>
                <li className={styles.navLink}>
                    <Link href="/about">About</Link>
                </li>
                <li className={styles.navLink}>
                    <Link href="/contact">Contact</Link>
                </li>
                <li className={styles.navLink}>
                    <Link href="/ArtPage">ArtPage</Link>
                </li>
                
            </ul>
        </nav>
    );
};

export default Navbar;
