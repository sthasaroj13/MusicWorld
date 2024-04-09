'use client'
import { Meteors } from "@/components/ui/meteors";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";

interface ContactForm {
  email: string;
  message: string;
}

function page(): JSX.Element {
  const [formData, setFormData] = React.useState<ContactForm>({
    email: "",
    message: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className="flex justify-center min-h-screen bg-black py-12 pt-36 bg-gray-900">
        <div className="max-w-xl w-full p-6 border rounded-lg">
          <h1 className="text-2xl text-white font-bold text-center mb-4">Contact Us</h1>
          <p className="text-base text-slate-500 mb-4 max-w-[40rem] text-center">
            We are here to help with any questions about our courses, programs, or events. Reach out and let us know how we can assist you in your musical journey.
          </p>

          <input
            type="email"
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg mb-4"
            placeholder="Your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />

          <textarea
            name="message"
            id=""
            
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg "
            placeholder="Write your message here"
            value={formData.message}
            onChange={handleChange}
          />
          <br />

          <Link href={'#'}>
            <Button
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Submit
            </Button>
          </Link>
        </div>
      </div>

      {/* Meaty part - Meteor effect */}
      <Meteors number={200} />
    </>
  );
}

export default page;
