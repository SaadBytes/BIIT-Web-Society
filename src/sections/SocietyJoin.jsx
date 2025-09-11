import React from 'react'
import JoinForm from './JoinForm.jsx'

const SocietyJoin = () => {
  return (
    <>
        <section id='register'>
        <div className="societyJoin pt-10 flex flex-col items-center gap-10 bg-[#1D0626]">
          <div className="heading text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1FA2BF]">
            <h2 className='text-4xl sm:text-5xl lg:text-7xl text-white font-semibold'>Join The Web Society</h2>
          </div>
          <div className="text text-2xl">
            <h4 className="text-white">
              Interested in web development?{" "}
              <span className="text-[#D95D30]">
                Fill the form to join our society!
              </span>
            </h4>
          </div>
        </div>
        <JoinForm />
        </section>
    </>
  )
}

export default SocietyJoin