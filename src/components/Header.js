import React from 'react'

const Header = ({ bgColor, handleClick, bgText, symbol }) => {
    return (
        <div className={` ${bgColor} ${bgText} p-5 flex justify-between fixed top-0 w-full shadow-md `}>
            <div>
                <h1 className='text-2xl font-bold'>Jayachandra's Portfolio</h1>
            </div>
            <div className='flex space-x-6'>
                <p>Home</p>
                <p>About</p>
                <p>Skills</p>
                <p>Internships</p>
                <p>Contact</p>
                <button className='text-2xl text-center' onClick={handleClick} >{symbol}</button>
            </div>
        </div>
    )
}

export default Header