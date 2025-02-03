import React from 'react'
import { Link } from 'react-router-dom';
import HomeExplore from './homeExploration';
const ListMovies = () => {
  return (
    <>
    <div className='text-3xl font-bold underline'>
        <h1>ListMovies</h1>
        <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/11/greatest-movies-of-all-time.jpg" alt=""  style={{width:"40%",height:"50%"}}/>
        <div>
            <Link to="/movies">Inception</Link>
        </div>
        <HomeExplore/>
    </div>
    </>
  )
}

export default ListMovies
