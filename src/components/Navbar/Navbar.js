import React from 'react';
import NavbarItem from '../NavbarItem/NavbarItem'
import styles from './Navbar.module.css';

const Navbar = ({config}) => {
    return ( 
        <div className={styles.navbarMain}>
            {config.map(item =>
                <NavbarItem title ={item.title} url={item.url}/>
            )}
        </div>
        );
}

export default Navbar;