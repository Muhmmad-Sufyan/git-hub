'use client'
import Link from 'next/link'
import courseData from '../data/music_courses.json'
import { BackgroundGradient } from "./ui/background-gradient";

const FeatureCourses = () => {
  const formatData = courseData.courses.filter(course => course.isFeatured);
  
  return (
    <div className='py-12 bg-gray-900'>
      <div>
        <div className='text-center'>
          <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED COURSES</h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-white'>Learn With the Best</p>
        </div>
      </div>
      <div className='mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
          {formatData.map(course => (
            <div className='flex justify-center' key={course.id}>
              <BackgroundGradient className='rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900'>
                <div className='p-6'>
                  <h3 className='text-lg font-semibold text-white'>{course.title}</h3>
                  <p className='mt-2 text-sm text-gray-300'>{course.description}</p>
                  <p className='mt-2 text-sm text-gray-300'>Price: ${course.price}</p>
                  <Link href={`/courses/${course.id}`} passHref>
                    <p className='mt-4 inline-block bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-100 transition duration-200'>View Course</p>
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-20 text-center'>
        <Link href='/courses' passHref>
          <button className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>View All Courses</button>
        </Link>
      </div>
    </div>
  );
}

export default FeatureCourses;
