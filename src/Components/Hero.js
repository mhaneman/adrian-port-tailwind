import HeroImage from '../images/hero/bg-1.jpeg'

import { Link } from 'react-scroll'

export default function Hero() {
  return (
    <div className="relative overflow-hidden h-screen bg-no-repeat bg-cover bg-center bg-fixed" style={{backgroundImage: `url(${HeroImage})`}}>
      
        <div 
          className="mx-auto max-w-7xl py-12 px-4 rounded-md
            mt-40 lg:mt-52
            ">

          <h2 
            className="font-bold tracking-tight bg-grey-hero rounded-md pl-10
              text-3xl sm:text-6xl md:text-8xl ">
            <span className="block text-green-300">Enriching Stories</span>
            <span className="block text-white">Adrian Rosas</span>
          </h2>

          <div 
            className="flex justify-center
              mt-16 lg:mt-32">
            <div className="ml-3 inline-flex rounded-md shadow">
                <Link className="button-primary" activeClass="active" to="about-me" spy={true} smooth={true}>About Me</Link>
            </div>
          </div>
        </div>
      
    </div>
  )
}