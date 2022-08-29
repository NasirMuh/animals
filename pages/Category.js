import React from 'react'

const Category = ({ category }) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {category?.map((category) => {
            const { _id, title, description } = category
            return <div key={_id} className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{title}</h2>
                <p className="leading-relaxed text-base">{description}</p>
              </div>
            </div>
          })}
          <button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        </div>
      </section>
    </>
  )
}

export default Category


