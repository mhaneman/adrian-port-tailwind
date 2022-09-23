import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'


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
        <div className=" p-10 bg-green-100 text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-9xl"> Marketing Photo Gallery </div>
          <section class="overflow-hidden text-gray-700 ">
            <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
              <div class="flex flex-wrap -m-1 md:-m-2">
              {
                list_of_images.map((image) => (
                  <div className="flex flex-wrap w-1/3 hover:opacity-70">
                    <Image image={image}/>
                  </div>
                ))
              }
              </div>
            </div>
          </section>
        </div>
    )
  }
}

function Image({image}) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
        <button onClick={openModal}>
          <div class="w-full h-full p-1 md:p-2 hover:opacity-50">
            <img alt="gallery" 
              className="block object-cover object-center w-full h-full rounded-lg"
              src={image} />
          </div>
        </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg" src={image} />
                  <div className="mt-4">
                    <button
                      type="button"
                      className="button-primary"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}