import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';


const Footer = ({ bgColor, bgText }) => {
    return (
        <div className={` pt-10 pb-10  text-center ${bgColor} ${bgText}`}>
            <h1 className='text-3xl '>Valusa Jayachandra</h1>
            <div className="flex justify-center">

                <a
                    href="https://www.instagram.com/jayachandra_valusa/"

                    className="text-pink-500 text-3xl hover:text-pink-600 transition "
                >
                    <div className='p-4 '>
                        <FaInstagram />

                    </div>

                </a>

                <a
                    href="  https://www.linkedin.com/in/jayachandra-valusa-a8903920b/"

                    className="text-blue-700 text-3xl hover:text-blue-800 transition"
                >
                    <div className='p-4'>
                        <FaLinkedin />

                    </div>
                </a>

                <a
                    href="https://github.com/jayachandra9912"

                    className="text-gray-800 text-3xl hover:text-gray-900 transition"
                >
                    <div className='p-4 '>
                        <FaGithub />

                    </div>
                </a>
            </div>
            <div className='bg-blue-700 w-100% h-8 '>
                <p className='text-center text-white'>Created By Valusa Jayachandra all rights reserved</p>
            </div>


        </div>
    )
}

export default Footer