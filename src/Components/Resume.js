import React from 'react'

import ResumeItem from './ResumeItem'

import ResumeData from '../data/resume_items.json'

export default function Resume() {
    return (
      <>
        {
          ResumeData.map((section) => (
            <>
              <div className=" p-10 bg-green-100 text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-9xl"> {section.name} </div>
              {
                section.row.map((item) => (
                  <ResumeItem
                    title = {item.title}
                    desc = {item.desc}
                    link = {item.link}
                    link_name = {item.link_name}
                    image = {item.image}
                    date = {item.date}
                    publisher = {item.publisher}
                  />
                ))
              }
            </>
          ))
        }
      </>
      
    )
}