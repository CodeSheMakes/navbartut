import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavbarItem.module.css'

const NavbarItem = ({title, url}) => {
    return ( 
        <Link to={url} className={styles.navbarItem}>{title}</Link>
        );
}

export default  NavbarItem;