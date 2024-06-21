import React from 'react';

// Assuming courseData is an object with a property "courses" containing an array of courses
import courseData from '../../../data/music_courses.json';
import Link from 'next/link';

const Page = ({ params }) => {
    const courseId = parseInt(params.id);

    const course = courseData.courses.find(course => course.id === courseId);
    const video = courseData.video.find(course => course.id === courseId);

    return (
        <div className="flex flex-col md:flex-row gap-8 mt-[150px]">
            {/* Left Side - Video List */}
            <div className="md:w-1/3">
                <ul className="space-y-2">
                    <h2 className="text-2xl font-bold mb-4">Video List</h2>
                    {courseData.courses.map((cor) => (
                        <li key={cor.id} className="bg-gray-800 p-4 shadow-md rounded-md">
                            <Link href={`${cor.id}`} className="text-blue-400 font-semibold">Video {cor.id}</Link>
                        </li>
                    ))}

                    {/* Add more videos here */}
                </ul>
            </div>
            {/* Right Side - Video Player */}
            <div className="md:w-2/3">
                <div className="bg-gray-800 p-4 shadow-md rounded-md">
                    <h2 className="text-2xl font-bold mb-4">Video Player</h2>
                    {/* Video Player (Sample Embed) */}

                    <div className="embed-responsive embed-responsive-21by9 relative w-full overflow-hidden" style={{ paddingTop: '42.857143%' }}>
                        <iframe className="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full" src={video.src} allowFullScreen data-gtm-yt-inspected-2340190_699="true" id={240632615} />
                    </div>
                    <div class="aspect-w-16 aspect-h-9 mb-4 mt-10">
                        <iframe height='500' class="w-full " src="public/screencapture-localhost-3000-courses-2-2024-03-20-12_31_02.pdf" title="PDF Viewer" frameborder="0"></iframe>
                    </div>


                </div>
            </div>
        </div>



    );
};

export default Page;
