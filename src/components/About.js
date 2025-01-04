import React from 'react'

const About = ({ bgColor, bgText }) => {
    return (
        <div className={` text-center ${bgColor} ${bgText}`}>
            <h1 className=' text-4xl'>About Me</h1>
            <p className='text-green-500'>Introduction</p>
            <div className='flex'>
                <img src='images/2.png' alt='about' className='w-1/4 p-4 ml-32'></img>
                <div className='p-10 align-middle ml-32 text-left'>
                    <p>I'm Jayachandra Valusa with a passion for software development and digital transformation. I have proficiency in Java, Python, React, Flutter, HTML, CSS, and JavaScript, and I can build robust, intuitive, and sleek software solutions for various domains and platforms. In my most recent internships, I worked with DeepFacts.io and Celebal Technologies, where I applied my skills and knowledge to tackle complex challenges and deliver high-quality software solutions that exceeded expectations. I developed a flutter mobile application for DeepFacts.io that enhanced user engagement and retention, and I created a react.js web application for Celebal Technologies that improved user experience and performance. I collaborated with cross-functional teams, adapted to new technologies rapidly, and solved problems creatively and effectively. I'm currently seeking new opportunities where I can contribute my expertise and continue to grow as a software developer. Whether it's a challenging project or a collaborative team environment, I'm eager to take on new challenges and make a meaningful impact.</p>
                    <div className='text-lg font-semibold mt-4 '>
                        <p>Name : Jayachandra</p>
                        <p>Phone : +91 9063411993</p>
                        <p>Email : jayachandra9912@gmail.com</p>
                        <div className='pt-5'>
                            <a href='images/Jayachandra.pdf' type="submit" className=' bg-blue-700 border border-black rounded-lg p-2 text-white'>Download cv</a>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About