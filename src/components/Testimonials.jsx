"use client"
import React from 'react'
import { InfiniteMovingCards } from './infinite-moving-cards'
const EnglishTestimonials =[
    {
        quote:"The English course provided me with not only language skills but also the confidence to communicate more effectively in both my personal and professional life",
        name: 'Yash Vishwakarma',
        title: 'Marketing Specialist',
    },
    {
        quote:"he lessons were clear, and the content was delivered in an engaging manner. The practical exercises helped me apply what I learned immediately",
        name: 'Yashasv Malviya',
        title: 'HR Manager',
    },
    {
        quote:"Thanks to this course, I was able to improve my communication skills, which directly contributed to my career growth. I feel more confident in my workplace now",
        name: 'Naman Singh',
        title: 'Business Analyst',
    },
    {
      quote: "This course was a game-changer for me. The personalized feedback helped me identify my weaknesses and improve quickly.",
      name: "Ravi Sahu",
      title: "Software Engineer",
  },
  {
      quote: "I now feel more confident when speaking in meetings and presentations. The course structure is perfect for busy professionals.",
      name: "Shreyansh Maurya",
      title: "Project Manager",
  },
  {
      quote: "The teaching approach was refreshing and interactive. I learned to express my thoughts clearly and concisely.",
      name: "Samay Vishwakarma",
      title: "Financial Advisor",
  }
  
]

const TestimonialCards = () => {
  return (
    <div className="h-[40rem] w-fullbg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
    <h2 className="text-4xl font-bold text-center mb-8 z-10 bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-neutral-700">Hear our Harmony: Voices of success</h2>
    <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
        <InfiniteMovingCards
            items={EnglishTestimonials}
            direction="right"
            speed="slow"
  />
        </div>
    </div>
</div>
  )
}

export default TestimonialCards
