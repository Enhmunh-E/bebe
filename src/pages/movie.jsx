import React from 'react'
import { useHistory } from 'react-router-dom'
export const Movie = (props) => {
    const history = useHistory();
    const { movies, movie } = props;
    const { name, img, desc, year } = movies[movie];
    return (
        <div>
            <h1>{name}</h1>
            <p>{year}</p>
            <img src={img} />
            <p>{desc}</p>
            <button onClick={() => history.push('')}>return</button>
        </div>
    )
}