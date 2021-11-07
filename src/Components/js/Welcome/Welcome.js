import React from 'react'
import Poster from './Poster';
import Courses from './Courses'
import Category from './Category';
import Feature from './Featured';
import Navbar from './Navbar';
import Studnet from './Stuents'

const Welcome = () => {
    return (
        <div>
            <Poster/>
            <Courses/>
            <Studnet/>
            <Category/>
            <Feature/>
            <Navbar/>
           
        </div>
    )
}

export default Welcome
