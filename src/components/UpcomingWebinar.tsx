'use client'
import Link from "next/link"
import { Button } from "./ui/moving-border";
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars =[
    {
        title: 'Understanding Music Theory',
        description: 'Dive deep into the fundamentals of music theory and enhance your music skills.',
        slug: 'understanding-music-theory',
        isFeatured: true
    },
    {
        title: 'Mastering the Guitar',
        description: 'Learn advanced techniques and become a proficient guitarist.',
        slug: 'mastering-the-guitar',
        isFeatured: false
    },
    {
        title: 'Introduction to Jazz Piano',
        description: 'Discover the basics of playing jazz piano and improvisation.',
        slug: 'intro-to-jazz-piano',
        isFeatured: false
    },
    {
        title: 'Electronic Music Production',
        description: 'Create your own electronic music tracks using digital audio workstations (DAWs).',
        slug: 'electronic-music-production',
        isFeatured: false
    },
    {
        title: 'Singing Techniques Workshop',
        description: 'Improve your vocal range, tone, and technique through guided exercises and instruction.',
        slug: 'singing-techniques-workshop',
        isFeatured: false
    },
    {
        title: 'Basics of Music Composition',
        description: 'Learn the essentials of music composition, including melody, harmony, and structure.',
        slug: 'basics-of-music-composition',
        isFeatured: false
    }
]

function UpcomingWebinar() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center ">
           <h2 className="test-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
           <p className=" mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Ehance  Your Musical Journey</p>
           

        </div>
        <div className="mt-10">
            <HoverEffect
            items={featuredWebinars.map(webinar=>(

                {
                    title:webinar.title,
                    description:webinar.description,
                    link :'/'
                }
            ))}
            />


        </div>
        <div className="mt-10 text-center">

               
            <Link href='/'>
            <Button
                className=" bg-white dark:bg-black
                text-black dark:text-white border-neutral-200 dark:border-slate-800"
                
                borderRadius="1.75rem">
            View All Webinars
                  
                  
                  </Button>
            </Link>
        </div>

      </div>
    </div>
  )
}

export default UpcomingWebinar
