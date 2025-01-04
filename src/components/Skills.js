import React from 'react';
import SkillProgressBar from './SkillProgressBar';

const SkillsSection = ({ bgColor, bgText }) => {
    const skills = [
        { name: 'HTML, CSS, JS', percentage: 94, },
        { name: 'React', percentage: 84 },
        { name: 'Flutter', percentage: 74 },
        { name: 'Java', percentage: 60 },
        { name: 'Python', percentage: 70 },
        { name: 'Dart', percentage: 60 },
    ];

    return (
        <div className={`${bgColor} ${bgText}`}>
            <h1 className='text-3xl text-center'>Skills</h1>
            <p className='text-green-500 text-center'>My Skills</p>
            <div className='flex'>


                <div className="flex flex-col gap-4 pl-32 w-8/12">
                    {skills.map((skill, index) => (
                        <SkillProgressBar
                            key={index}
                            skillName={skill.name}
                            percentage={skill.percentage}
                            bgColor={skill.bgColor}
                        />
                    ))}
                </div>
                <div>
                    <img src='images/3.jpg' alt='skills' className='w-2/3 mt-28' />
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
