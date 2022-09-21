import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

import AbsBackground from '../images/adrian_bass.jpg'

function Launcher() {
  return (
    <div className="" style={{backgroundImage: `url(${AbsBackground})`}}>
        <div className="">
            <div className=""> Degree in Journalism from California Polytechnic San Luis Obispo. </div>
            <div className=""> Skilled in Public Relations Writing, Marketing, and Traditional media. </div>
        </div>
    </div>
 
  )
}

export default Launcher