import axios from "axios";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import styles from './SingleMoviePage.module.css'

export async function loader({ params }) {
    const res = await axios.get('https://flickfare-backend.vercel.app/movies/' + params.movieId)
    const movie = res.data


    const castRes = await axios.get('https://flickfare-backend.vercel.app/movies/' + params.movieId+"/cast")
    const casts = castRes.data
    
    return { movie, casts }
}

function SingleMoviePage(props) {
    const { movie, casts } = useLoaderData();

    console.log(casts)
    return (

        <main>
            <section className={styles.BasicDataDetailsSection}>

                <div className={styles.Container}>
                    <img className={styles.MovieImage} src={movie.image} alt={movie.title + "poster"} />
                    <div className={styles.ContainerRight}>
                        <h1>{movie.title}</h1>
                        <span>{movie.language}</span>
                        <span>{movie.category}</span>
                        <Link className={styles.BookButton} to={'/select-show/'+movie._id}>Book Tickets</Link>

                    </div>
                </div>
            </section>

            <section className={styles.AboutSection}>
                <div className={styles.Container}>
                <h2>About the movie</h2>
                <p>{movie.description}</p>
                </div>

            </section>
            
            <section>
                <div className={styles.Container}>
                    <h2>Cast</h2>
                    <ul id={styles.CastsList}>
                       {
                        casts.map(cast =>{
                            return(
                                <li className={styles.Cast} key={cast._id}>
                                    <img src={cast.person.image} alt=""/>
                                    <h3>{cast.person.name}</h3>
                                    <span>{cast.role}</span>
                                </li>
                            )
                        })
                       }
                    </ul>

                </div>

            </section>




        </main>

    );
}

export default SingleMoviePage;
