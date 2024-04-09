'use client'
import Link from 'next/link'
import courseData from '../data/music-course.json'
import { Button } from "./ui/moving-border";
import { BackgroundGradient } from './ui/background-gradient';




interface Course{

    id:number,
    title:String,
    slug:String,
    description:String,
    price: number,
    instructor:String,
    isFeatured:boolean,
    image :string,
    
 
}


export default function FeaturedCourses() {
  const FeaturedCourses=  courseData.courses.filter((course:Course) =>course.isFeatured)
  return (
    <div className='py-12 bg-gray-900'>
        <div>
            <div className="text-center">
                <h2 className=' test-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED COURSES</h2>
                <p className=' mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn With the Best</p>
            </div>
        </div>
        <div className=' mt-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                {
                    FeaturedCourses.map((course:Course)=>(

                        <div key={course.id} className=' flex justify-center'>


                            <BackgroundGradient className=' flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                                <div className=' p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>

                                
                                <p className=' text-lg sm:text-xl text-black mt-4 mb-3 dark:text-neutral-200'>{course.title}</p>
                                {/* <img src={course.image} alt="" /> */}
                                <p className=' text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>{course.description}</p>
                                <Link href={`/courses/${course.slug}`}> Lean more</Link>
                                </div>



                            </BackgroundGradient>
                        </div>
                    ))
                }
                
                </div> 




        </div>
        <div className=' mt-20 text-center'>
            <Link href={"/courses"}>
            <Button
                className=" bg-white dark:bg-black
                text-black dark:text-white border-neutral-200 dark:border-slate-800"
                
                borderRadius="1.75rem">
                    View All Courses
                
                  
                  </Button>
            
            </Link>


        </div>
      
    </div>
  )
}
