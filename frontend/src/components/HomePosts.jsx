/* eslint-disable react/prop-types */
import {IF} from '../url'


const HomePosts = ({post}) => {
  return (
    <div className="w-full flex mt-8 space-x-4">
    {/* left */}
    <div className="w-[15%] h-[250px] flex justify-center items-center">
    <img src={IF+post.photo} alt="" className="h-full w-full object-cover"/>
    </div>
    {/* right */}
    <div className="flex flex-col w-[65%]">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
      {post.title}
      </h1>
      <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
       <p>posted by @{post.username}</p>
       
      </div>
      {post.desc&&<p className="text-sm md:text-lg">{post.desc.slice(0,200)+" ...Read more"}</p>}
    </div>

    </div>
  )
}

export default HomePosts

