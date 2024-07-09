import React, { useState, useEffect } from 'react';

interface SliderItem {
    name: string;
    title: string;
    color: string;
}

const items: SliderItem[] = [
    { name: 'Ingo Schimpff', title: 'Manager', color: 'bg-green-100' },
    { name: 'Gauthie', title: 'Director', color: 'bg-red-100' },
    { name: 'Winny Rearie', title: 'Manager', color: 'bg-yellow-100' },
    { name: 'John Doe', title: 'CEO', color: 'bg-blue-100' },
    { name: 'Jane Smith', title: 'CFO', color: 'bg-purple-100' },
    { name: 'Jim Brown', title: 'CTO', color: 'bg-pink-100' },
    { name: 'Jack White', title: 'COO', color: 'bg-indigo-100' },
    { name: 'Jill Black', title: 'CIO', color: 'bg-teal-100' },
];

const Slider: React.FC = () => {
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex((prevIndex) => (prevIndex === items.length - 3 ? 0 : prevIndex + 1));
        }, 3000); // 3 soniyada slaydni o'zgartirish
        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index: number) => {
        setStartIndex(index);
    };

    return (
        <div className="flex flex-col items-center mt-10">
            <div className="flex space-x-4 overflow-hidden">
                {items.slice(startIndex, startIndex + 3).map((item, index) => (
                    <div
                        key={index}
                        className={`p-4 rounded-lg shadow-md ${item.color} scale-105`}
                        style={{ transition: 'transform 0.3s ease-in-out' }}
                    >
                        <img src="https://i.imgur.com/ghe4PZJ.jpeg" alt=""  />
                        <div className="w-40 h-40 mb-4 rounded-lg bg-white"></div>
                        <div className="text-center">
                            <h2 className="font-bold">{item.name}</h2>
                            <p>{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex space-x-2 mt-4">
                {Array.from({ length: items.length - 2 }).map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === startIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
