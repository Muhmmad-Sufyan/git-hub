
import Link from 'next/link'
import React from 'react'

import { Button } from "./ui/moving-border";
import Spotlight from './ui/Spotlight'

const HeroSection = () => {
    return (
        <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative  overflow-hidden
    mx-auto py-10 md:py-0'>
          <Spotlight
                    className="-top-40 left-250 md:left-60 md:-top-20"
                    fill="white"
                />
            <div className='p-4 relative z-10 w-full text-center'>
                
                <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master the art of music</h1>
              
                <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>
                    “Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.”
                    Sarah Dayan

                    Staff Engineer, Algolia
                </p>
            </div>
            <div className='mt-4'>
                <Link href={'/courses'}>
                    <Button borderRadius='1.75rem'
                    className='bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800'
                    >
                    Explore Courses
                    </Button>
                   
                     </Link>
                     {/* <div class="border-2 animate-moveBorder">Animated Border</div>
                     <div class="border-2 border-blue-500 w-32 h-32 animate-moveBorderRadius"></div> */}

            </div>
        </div>
    )
}

export default HeroSection
