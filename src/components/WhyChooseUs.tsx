"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: "Interactive Music Lessons",
      description:
        "Embark on a musical journey with interactive lessons designed to engage students of all levels. Whether you're a beginner or an advanced musician, our platform offers dynamic learning experiences tailored to your needs. Explore new genres, refine your skills, and unleash your musical potential.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
          Interactive Music Lessons
        </div>
      ),
    },
    {
      title: "Live Performance Workshops",
      description:
        "Sharpen your stage presence and elevate your performance skills with our live workshops. Connect with fellow musicians, receive valuable feedback from instructors, and refine your craft in a supportive environment. Whether you're preparing for a recital, audition, or gig, our workshops will empower you to shine on stage.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--yellow-500))] flex items-center justify-center text-white">
          Live Performance Workshops
        </div>
      ),
    },
    {
      title: "Music Production Studio",
      description:
        "Step into our state-of-the-art production studio and bring your musical vision to life. From recording and mixing to mastering and post-production, our studio provides the tools and expertise you need to create professional-quality tracks. Collaborate with experienced producers, experiment with cutting-edge equipment, and unleash your creativity in a world-class environment.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--red-500))] flex items-center justify-center text-white">
          Music Production Studio
        </div>
      ),
    },
    {
      title: "Ensemble Performances",
      description:
        "Join forces with fellow musicians and experience the magic of ensemble performances. From orchestras to jazz bands, our school offers opportunities for students to collaborate, rehearse, and perform together. Discover the joy of making music as part of a cohesive group, honing your teamwork skills while creating unforgettable musical moments.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] flex items-center justify-center text-white">
          Ensemble Performances
        </div>
      ),
    },
  ];
  

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent}/>
      
    </div>
  )
}

export default WhyChooseUs
