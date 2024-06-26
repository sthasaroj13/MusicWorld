'use client'
import { Meteors } from "@/components/ui/meteors";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

function page() {
  return (
    <>
      <div className="flex flex-col justify-center min-h-screen bg-gray-900">
        <div className="flex justify-center py-12 pt-36">
          <div className="max-w-lg w-full p-6  bg-black">
            <h1 className="text-3xl lg:text-4xl text-white font-bold text-center mb-4">Contact Us</h1>
            <p className="text-base text-slate-500 mb-4 max-w-[40rem] text-center">
              We're here to help with any questions about our courses, programs, or events. Reach out and let us know how we can assist you in your musical journey.
            </p>

            <input type="email" className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg mb-4" placeholder="Your email" /> <br />
            <textarea placeholder="Your message" className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg mb-4"></textarea> <br />
            <div className="flex justify-center"> {/* Centering the button */}
              <Link href={'#'}>
                <Button
                  className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                  borderRadius="1.75rem"
                >
                  Submit
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Meaty part - Meteor effect */}
        <Meteors number={200} />
      </div>
    </>
  )
}

export default page
