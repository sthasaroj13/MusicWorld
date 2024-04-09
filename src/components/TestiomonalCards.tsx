'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const musicSchoolTestimonials = [
    {
      quote:
        "Enrolling in the music school was a life-changing experience. The instructors are incredibly passionate and knowledgeable, creating an environment where learning feels like an adventure. I've grown not only as a musician but also as a person.",
      name: "Emily Parker",
      title: "Piano Student",
    },
    {
      quote:
        "The music school provided me with the skills and confidence to pursue my dreams. Through their guidance, I've honed my craft and discovered new avenues of creativity. I'm forever grateful for the opportunities they've given me.",
      name: "Alex Hernandez",
      title: "Guitarist",
    },
    {
      quote:
        "Studying at the music school has been a transformative journey. The faculty's dedication to excellence is truly inspiring. I've found a community of like-minded individuals who push me to strive for greatness every day.",
      name: "Sophia Lee",
      title: "Violinist",
    },
    {
      quote:
        "Choosing the music school was one of the best decisions I've ever made. The curriculum is comprehensive, covering both theory and practice. The supportive atmosphere fosters growth and encourages students to reach their full potential.",
      name: "Daniel Adams",
      title: "Drummer",
    },
    {
      quote:
        "Attending the music school has been an incredible adventure. The instructors go above and beyond to nurture talent and instill a love for music. Thanks to their guidance, I've developed skills that will last a lifetime.",
      name: "Olivia Smith",
      title: "Singer",
    },
  ];
  
function TestiomonalCards() {
  return (

    <div className=" h-[40rem] w-full dark:bg-black dark:bg-grid-black/[0.2] relative flex flex-col items-center  justify-center">
        <h2 className=" text-4xl text-center  mt-5 font-bold">Hear Our  Harmony :Voices of Success</h2>
        <div className=" flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
                <InfiniteMovingCards items={musicSchoolTestimonials}
                direction="right" 
                speed="slow"
                />
            </div>
        </div>
    </div>
  )
}

export default TestiomonalCards
