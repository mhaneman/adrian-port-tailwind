import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons'

import ProfilePhoto from '../images/profile/adrian_profile.jpeg'

let linkedin_link = "https://www.linkedin.com/in/adrian-rosas-7a1a7924b/"
let insta_link = "https://www.instagram.com/onetrickadrian/"

export default function AboutMe() {
  return (
    <>
      <div className=" p-10 bg-green-100 text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-9xl"> Get To Know Me </div>

      <div name="about-me" className ="container mx-auto flex flex-col justify-center">

        <div className="justify-center
          grid grid-cols-1 md:grid-cols-2">

          <img class="object-top object-scale-down 
            w-full"
            src={ProfilePhoto} alt="" />
            
        <div className="flex bg-gray-100 p-10">
          <div className="mb-auto mt-auto max-w-lg">
            <h1 class="text-3xl uppercase">Adrian Rosas</h1>
            <p class="font-semibold mb-5">Journalist</p>
            <p> I am a recent Cal Poly San Luis Obispo journalism program graduate with an efficient, versatile, and innovative writing style. 
              I believe in building up a legacy of work utilizing my writing, marketing, or general optimization of workplace strategies 
              to facilitate long-term success and bring myself and my employers to new heights.</p>

            <div className="flex gap-10 items-center justify-center mt-10">
              <a href={linkedin_link}><FontAwesomeIcon icon={faLinkedin} size="3x"/></a>

              <a href={insta_link}> <FontAwesomeIcon icon={faInstagram} size="3x"/></a>
            </div>

          </div>
        </div>
      </div>

    </div>
  </>
  )
}