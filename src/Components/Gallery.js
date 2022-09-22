import React from 'react'


var list_of_images = []

export default class Gallery extends React.Component {
  importAll(r) {
    return r.keys().map(r);
  }
  componentWillMount() {
    list_of_images = this.importAll(require.context('../images/gallery', false, /\.(png|jpe?g|svg)$/));
  }

  render() {
    return (
      <div>
        <div className=" p-10 bg-blue-100 text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-9xl"> Photography </div>
          <section class="overflow-hidden text-gray-700 ">
            <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
              <div class="flex flex-wrap -m-1 md:-m-2">
              {
                list_of_images.map((image) => (
                  <button class="flex flex-wrap w-1/3 focus:w-full hover:opacity-50">
                    <div class="w-full p-1 md:p-2">
                      <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                        src={image} />
                    </div>
                </button>
                ))
              }
              </div>
            </div>
          </section>
        </div>
    )
  }
}