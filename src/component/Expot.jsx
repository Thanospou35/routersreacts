import React from 'react'
import { Link } from 'react-router-dom';
const Expot = () => {
  return (
    <>
    <div className='text-3xl font-bold '>
        <h1>Inception</h1>
        <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/11/greatest-movies-of-all-time.jpg" alt=""  style={{width:"40%",height:"50%"}}/>
        <div>
            <Link to="/" className='underline'>Revenir à l'Accueil</Link>
        </div>
    </div>
    </>
  )
}

export default Expot
