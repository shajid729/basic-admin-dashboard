import React from 'react'

const Card1 = () => {
  return (
    <>
        <div className="card flex min-w-[300px] mt-4 py-2 bg-re rounded-md justify-between items-center bg-[#ffffff80] border-2 border-white border-b-0 shadow-md hover:shadow-lg transition-all">
            <div className="info px-4">
                <div className="title text-base text-gray-400">Students</div>
                <div className="amount text-[1.3rem] font-semibold">50353</div>
            </div>
            <div className="icon">
                <img className='w-[100px]' src="./icon1.avif" />
            </div>
        </div>
    </>
  )
}

export default Card1