import React from 'react'
const Start = () => {
  return (
    <div className="flex justify-center items-center p-4 text-center">
        <div className="my-[20vh] flex flex-col justify-center items-center max-w-[800px] gap-6">
          <h1 className="text-3xl font-medium">A New Way to Learn</h1>
          <p>LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.</p>
          <button className="bg-cyan-400 p-4 rounded-xl py-2 active:scale-[0.94] duration-200">Create Account &rarr;</button>
        </div>
    </div>
  )
}

export default Start;