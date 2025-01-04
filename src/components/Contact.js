import React from 'react'

const Contact = ({ bgColor, bgText }) => {
    return (
        <div className={`p-14 text-center ${bgColor} ${bgText}`}>
            <h1 className='text-3xl'>Coffee With Me</h1>
            <p className='text-green-500'>Contact Me</p>
            <div className='p-10'>
                <input className='w-7/12  bg-slate-200 rounded-lg p-3 ' placeholder='Enter your name : ' />
                <input className='w-7/12  bg-slate-200 rounded-lg p-3 mt-3' placeholder='Enter your Email : ' />
                <input className='w-7/12  bg-slate-200 rounded-lg p-3 mt-3' placeholder='Enter your message here : ' />


            </div>
            <button type="submit" className='w-1/6 bg-blue-600 rounded-lg h-12  mt-4 text-white'>Submit</button>
        </div>
    )
}

export default Contact