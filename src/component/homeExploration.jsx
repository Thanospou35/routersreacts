import React from 'react'
import { Link } from 'react-router-dom';
const HomeExplore = () => {
  return (
    <>
    <div className='text-3xl font-bold mt-10'>
        <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/11/greatest-movies-of-all-time.jpg" alt=""  style={{width:"40%",height:"50%"}}/>
        <div>
            <Link to="/expot" className='underline'>Exploration</Link>
        </div>
    </div>
    </>
  )
}

export default HomeExplore
