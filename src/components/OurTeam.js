"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";
const people = [
    {
        id: 1,
        name: "Muhmmad Sufyan",
        designation: "front-end-develpor",
        image:
            "/s1.jpeg",
    },

    {
        id: 3,
        name: "Sir Hassam",
        designation: "Graphic desiner",
        image:
            "/Sha.png",
    },
    {
        id: 4,
        name: "Kamran Sharif",
        designation: "Graphic desiner",
        image:
            "/kam.png",
    },
    {
        id: 5,
        name: "Aj king Nwl",
        designation: "Graphic desiner",
        image:
            "/aj.png",
    },
    {
        id: 6,
        name: "Husnain",
        designation: "Web Develpor",
        image:
            "/hu.png",
    },
    {
        id: 2,
        name: "Rizwan",
        designation: "Product Manager",
        image:
            "/riz.jpeg",
    },
];
const OurTeam = () => {
    return (
        <div className="relative h-[40rem] overflow-hidden flex iteams-center justify-center">
            <WavyBackground className="w-full max-w-7xl mx-auto h-full flex flex-col  iteams-center justify-center">
                <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
                <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guid your musical journey</p>
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                    <AnimatedTooltip items={people} />
                </div>



            </WavyBackground>
        </div>


    )
}

export default OurTeam
