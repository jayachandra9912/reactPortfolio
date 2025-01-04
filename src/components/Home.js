import React, { useEffect, useState } from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Home = ({ bgColor, bgText }) => {
    const images = [
        "images/111.jpg",
        "images/222.jpg",
        "images/333.jpg",

    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Slide every 3 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [images.length]);


    return (
        <div className={`flex p-16 ${bgColor} ${bgText}`}>
            <div className="p-24 pt-20 ">

                <a
                    href="https://www.instagram.com/jayachandra_valusa/"

                    className="text-pink-500 text-3xl hover:text-pink-600 transition "
                >
                    <div className='p-4 pt-28 '>
                        <FaInstagram />

                    </div>

                </a>

                <a
                    href="https://www.linkedin.com/in/jayachandra-valusa-a8903920b/"

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
            <div className='py-10 space-y-2'>
                <p className='text-2xl font-semibold'>Hello I am</p>
                <h1 className='text-6xl font-bold'>Valusa</h1>
                <h1 className='text-6xl font-bold'>Jayachandra</h1>
                <p className='text-2xl'>Open to work</p>
                <p className='text-2xl'>Btech</p>
                <p className='text-2xl'>Collage: Vaagdevi Engineering College</p>
                <p className='text-2xl'>React Developer</p>
                <p className='text-2xl'>Trying to learn something new</p>
                <button type="submit" className='bg-blue-700 border border-black rounded-lg p-2  text-white'>Contact Me</button>
            </div>
            <div className="relative w-full max-w-sm mx-auto pt-12">
                <div className="overflow-hidden rounded-lg shadow-lg">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full"
                            />
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-blue-500" : "bg-gray-300"
                                }`}
                        ></button>
                    ))}
                </div>
            </div>
            {/* <img src='images/111.jpg' alt='dp' className='h-96 rounded-lg mt-16 ml-40'></img> */}

        </div>
    )
}

export default Home