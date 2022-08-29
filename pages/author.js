import React from 'react'
import Image from 'next/image'
import PortableText from "react-portable-text"
import imageUrlBuilder from '@sanity/image-url'
import clientInfo from './clientInfo'

const builder = imageUrlBuilder(clientInfo)

const Author = ({ author }) => {
    return (
        <> <h1 className='flex  justify-center'>Author :</h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    {author?.map((author) => {
                        const { _id, name, slug, image, picture, bio, blockContent } = author
                        return <div key={_id} className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Name : {name}</h2>
                                <p className="leading-relaxed text-base">Slug : {slug}</p>
                                <PortableText
                                    content={bio}
                                    serializers={{
                                        h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                                        li: ({ children }) => <li className="special-list-item">{children}</li>
                                    }} />
                                <Image src={builder.image(image).url() || "Nasir.jpg"} width={125} height={125} alt="Picture" className='rounded-full' />
                                <Image src={builder.image(picture).url() || "Nasir.jpg"} width={125} height={125} alt="Picture" className='rounded-full' />
                                <PortableText
                                    content={blockContent}
                                    projectId="eptiw9x7"
                                    dataset="production"
                                    serializers={{
                                        h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                                        li: ({ children }) => <li className="special-list-item">{children}</li>
                                    }} />
                            </div>
                        </div>
                    })}
                    <button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                </div>
            </section></>
    )
}

export default Author
