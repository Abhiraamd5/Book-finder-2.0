import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <>
<div className="mt-8 w-full bg-black px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8 ">
       <div className="flex flex-col text-white">
         <p>Featured Blogs</p>
         <p>Most viewed</p>
         <p>Readers Choice</p>
       </div>

       <div className="flex flex-col text-white">
        <a href="https://www.facebook.com/Abhi Raam" target='_blank'>Facebook profile</a>
        <a href="https://www.instagram.com/abhiraamd/" target='_blank'>Instagram profile</a>
        <a href="https://www.linkedin.com/in/abhiraam-duduka-b4743222b/" target='_blank'>Linkedin profile</a>
        <a href="https://github.com/Abhiraamd5" target='_blank'>Github profile</a>
       </div>

       
    </div>
    <p className="py-2 pb-6 text-center text-white bg-black text-sm">Made by @Abhiraam 2023</p>
    </>
    
  )
}

export default Footer