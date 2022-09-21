import React from 'react'

import ResumeItem from './ResumeItem'

function ResumeSection() {
  return (
    <>
      <div className=" p-10 bg-blue-200 text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-9xl"> Journalism </div>

      <ResumeItem
        title = "Meaning of Article"
        desc = "some description about your article"
        link = ""
        link_name = "The title of your article"
        date = "Jan 1 2019"
      />
      <ResumeItem
        title = "Meaning of Article"
        desc = "some description about your article"
        link = ""
        link_name = "The title of your article"
        date = "Jan 1 2019"
      />
      <ResumeItem
        title = "Meaning of Article"
        desc = "some description about your article"
        link = ""
        link_name = "The title of your article"
        date = "Jan 1 2019"
      />
      <ResumeItem
        title = "Meaning of Article"
        desc = "some description about your article"
        link = ""
        link_name = "The title of your article"
        date = "Jan 1 2019"
      />

      <div className=" p-10 bg-red-200 text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-9xl"> Apple Farm </div>

      <ResumeItem
        title = "Meaning of Article"
        desc = "some description about your article"
        link = ""
        link_name = "The title of your article"
        date = "Jan 1 2019"
      />

    </>
  )
}

export default ResumeSection