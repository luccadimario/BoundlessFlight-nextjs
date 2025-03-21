// components/Home/AboutCard.tsx
import React, { ReactNode } from 'react';

interface AboutProps {
    title: string;
    desc: string;
    svg: ReactNode;
}

const AboutCard: React.FC<AboutProps> = (props) => {
    return (
        <div className="flex rounded-2xl bg-gray-200 drop-shadow-lg shadow-xl w-full md:w-1/3 p-4">
            <div className="w-1/4 flex justify-center items-center">
                {props.svg}
            </div>
            <div className="w-3/4 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-2">{props.title}</h2>
                <p className="text-gray-600">{props.desc}</p>
            </div>
        </div>
    )
}

export default AboutCard;
