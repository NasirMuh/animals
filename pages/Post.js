import React from 'react'
import Image from 'next/image'
import PortableText from "react-portable-text"
import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "eptiw9x7",
  dataset: "production",
  apiVersion: '2022-03-25',
  useCdn: true
});

const builder = imageUrlBuilder(client)

const Post = ({ post }) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {post?.map((post) => {
              const { _id, title, slug, image, date, body, categories, author } = post
              return <div key={_id} className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image src={builder.image(image).url() || "Nasir.jpg"} width={425} height={225} className="lg:h-48 md:h-36 w-full object-cover object-center" alt="blog" />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{slug} {date}</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
                    {categories?.map((categories, ind) => {
                      return <p key={ind} className="leading-relaxed mb-3">TITLE: {categories.title} ,DESC {categories.description}</p>
                    })}
                    <PortableText
                      content={body}
                      projectId="eptiw9x7"
                      dataset="production"
                      serializers={{
                        h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                        li: ({ children }) => <li className="special-list-item">{children}</li>
                      }} />
                    <div className="flex items-center flex-wrap ">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                    <Image src={builder.image(author.picture).url() || "Nasir.jpg"} width={125} height={125} alt="Picture" className='rounded-full' />
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Name :{author.name}, Slug :{author.slug}</h1>
                    <PortableText
                      content={author.bio}
                      projectId="eptiw9x7"
                      dataset="production"
                      serializers={{
                        h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                        li: ({ children }) => <li className="special-list-item">{children}</li>
                      }} />
                    <PortableText
                      content={author.blockContent}
                      projectId="eptiw9x7"
                      dataset="production"
                      serializers={{
                        h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                        li: ({ children }) => <li className="special-list-item">{children}</li>
                      }}
                    />
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Post