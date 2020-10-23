import React from 'react'
import {Link} from 'react-router-dom'

function Description(props) {
    const {description} = props.location.state
    return (
        <div>
           <h1>Description</h1>
    <h3>{description}</h3> 

    <Link to='/'>back home</Link>
        </div>

    )
}

export default Description
