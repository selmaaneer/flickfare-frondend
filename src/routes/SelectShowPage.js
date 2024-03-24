import React from "react";
import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import styles from './SelectShowPage.module.css'
import dayjs from "dayjs";

export async function loader({ params }) {
    const res = await axios.get('http://localhost:3000/movies/' + params.movieId + '/shows')
    const shows = res.data

    return { shows }
}

function SelectShowPage(props) {
    const { shows } = useLoaderData()
    console.log(shows)

    return (
        <main>
            <section>
                <h2>Shows available</h2>
                <ul className={styles.ShowsList}>
                    {
                        shows.map(show => {
                            return (
                                <Link to={'/select-seats/' + show._id}>
                                    <li key={show._id} className={styles.Show}>
                                        <span>Screen {show.screen.screenNumber}</span>
                                        <span>{dayjs(show.showTime).format('DD MM, HH:mm')}</span>
                                    </li>
                                </Link>
                            )
                        })
                    }

                </ul>
            </section>

        </main>
    );
}

export default SelectShowPage;