import React, { useState, useEffect } from 'react'
import { Carousel } from 'antd'
import { useHistory } from 'react-router';
export const Home = (props) => {
    const history = useHistory();
    const { movies, setMovie } = props;
    const go = (index) => {
        setMovie(index);
        history.push('movie');
    }
    return (
        <div className='container'>
            {
                movies.map((movie, index) => {
                    return (
                        <div className='item'>
                            <h2>{movie.name}</h2>
                            <p>{movie.year}</p>
                            <img src={movie.img}/>
                            <button onClick={() => go(index)}>see more</button>
                        </div>
                    )
                })
            } 
        </div>
    )
}