import { forwardRef } from 'react'

const About = forwardRef((_, ref)=>{
  return (
    <div className='flex flex-col justify-center text-center my-8 mx-8 text-2xl'>
    This is a new section...
  </div>
  )
}) 
  

About.displayName = 'About';
export default About;
