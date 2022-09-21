import React from 'react'

function ArticlePreview({link, link_name, date}) {
  return (
    <div className="mx-auto lg:flex lg:flex-row lg:h-auto">
      <img className="rounded-tr-md rounded-tl-md h-48 w-full lg:h-auto lg:w-2/5 lg:rounded-bl-md lg:rounded-tr-none" src="https://i0.wp.com/mustangnews.net/wp-content/uploads/2020/02/DSC_2550.jpg?w=1400&ssl=1" alt="" />
      <div className="bg-white p-8 rounded-bl-md rounded-br-md lg:rounded-bl-none lg:rounded-tr-md">
        <h2 className="text-gray-700 font-semibold">{link_name}</h2>
        <div className="flex items-center mt-8">
          <div className="flex items-center">
            <div className="ml-4">
              <p className="text-gray-800 text-sm font-semibold">Published</p>
              <p className="text-gray-600 text-sm">{date}</p>
            </div>
          </div>
          <div className="w-8 h-8 ml-auto bg-gray-200 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" /></svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticlePreview