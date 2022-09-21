import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons'

import ProfilePhoto from '../images/graduation.jpg'

let linkedin_link = "https://www.linkedin.com/in/adrian-rosas-7a1a7924b/"
let insta_link = "https://www.instagram.com/onetrickadrian/"

export default function AboutMe() {
  return (
    <>
      <div className=" p-10 bg-green-100 text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-9xl"> Get To Know Me </div>

      <div class="container mx-auto h-screen flex flex-col justify-center">
      <div class="grid grid-cols-1 md:grid-cols-2 h-3/4">
        <div class="">
          <img class="w-full h-full object-cover object-top" src={ProfilePhoto} alt="" />
        </div>
        <div class="flex bg-gray-100 p-10">
          <div class="mb-auto mt-auto max-w-lg">
            <h1 class="text-3xl uppercase">Adrian Rosas</h1>
            <p class="font-semibold mb-5">Journalist</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aspernatur laborum nam eum culpa eos, nemo corporis possimus quam omnis, repellendus dolor! Laboriosam rerum debitis enim consequuntur sequi distinctio et.</p>

            <div className="flex gap-10 items-center justify-center mt-10">
              <button class="bg-black rounded-md py-3 px-7 text-white">Email Me</button>
              <a href={linkedin_link}>
                <FontAwesomeIcon icon={faLinkedin} size="3x"/>
              </a>

              <a href={insta_link}>
                  <FontAwesomeIcon icon={faInstagram} size="3x"/>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  </>
  )
}