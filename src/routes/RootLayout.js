import React from "react";
import styles from './RootLayout.module.css'
import { Outlet, Link } from "react-router-dom";

function RootLayout(props) 
{

    return ( 
    
        <>
            <header className={styles.Header}>
                <span>FlickFare</span>
                <nav>
                    <ul className={styles.NavList}>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <Link to={'/movies'}>Movie</Link>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
            <footer className={styles.Footer}> 
                <span>Copyright ©FlickFare</span>
                <span>Developed by Selma Aneer</span>
            </footer>

        </>
    );

}

export default RootLayout;