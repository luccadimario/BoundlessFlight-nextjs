// components/Home/AboutUserCard.tsx
import React from 'react';
import Image from 'next/image';

interface AboutUserProps {
    name: string;
    role: string;
    img_url: string;
}

const AboutUserCard: React.FC<AboutUserProps> = (props) => {
    return (
        <div className="card w-64 text-center flex flex-col items-center">
            <div className="w-32 h-32 mb-4 rounded-full overflow-hidden relative">
                <Image
                    src={props.img_url}
                    fill
                    className="object-cover"
                    alt={`${props.name}'s Profile`}
                />
            </div>
            <div className="card-content">
                <h2 className="text-2xl font-bold mb-1 text-white">{props.name}</h2>
                <p className="text-white">{props.role}</p>
            </div>
        </div>
    );
};

export default AboutUserCard;
