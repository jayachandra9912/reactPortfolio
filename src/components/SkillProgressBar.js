import React from 'react';

const SkillProgressBar = ({ skillName, percentage, bgColor, bgText }) => {
    return (
        <div className={`flex flex-col gap-2 w-1/2 p-3 ${bgColor} ${bgText}`}>
            <div className="flex justify-between items-center">
                <span className=" font-medium">{skillName}</span>
                <span className=" font-medium">{percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                    className='bg-blue-800 h-2 rounded-full'
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default SkillProgressBar;
