import React from 'react'

const Internships = ({ bgColor, bgText }) => {
    return (
        <div className={`${bgColor} ${bgText} text-center`}>
            <h1 className='text-3xl'>Internships</h1>
            <p className='text-green-500'>My Internships</p>
            <div className='flex justify-center gap-4 p-4'>
                <div className='bg-slate-200 hover:bg-blue-700 text-black hover:text-white h-40 w-56 rounded-lg'>
                    <p className='text-3xl p-6'>🎗️</p>
                    <h1 className='font-bold' >Celebal Technologies</h1>
                    <p >Summer Intern</p>

                </div>
                <div className='bg-slate-200 hover:bg-blue-700 text-black hover:text-white h-40 w-56 rounded-lg'>
                    <p className='text-3xl p-6'>🎗️</p>
                    <h1 className='font-bold'>Deep facts</h1>
                    <p >Software Intern</p>
                </div>

            </div>
        </div>
    )
}

export default Internships