import HeroImage from '../images/adrian_bass.jpg'

export default function Hero() {
  return (
    <div className="relative overflow-hidden h-screen bg-no-repeat bg-cover bg-center bg-fixed grayscale-[50%]" style={{backgroundImage: `url(${HeroImage})`}}>
      
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:items-center lg:justify-between lg:py-16 lg:px-8 mt-64">
          <h2 className="text-3xl font-bold tracking-tight text-green-500 sm:text-9xl">
            <span className="block">Enriching Stories</span>
            <span className="block text-white">Journalism</span>
          </h2>
          <div className="flex justify-center lg:mt-0 lg:flex-shrink-0">
          
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-green-500 hover:bg-indigo-50"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      
    </div>
  )
}