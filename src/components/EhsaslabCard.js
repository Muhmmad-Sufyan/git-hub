'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const quotes = [
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    name: "Winston Churchill",
    title: "Former British Prime Minister"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    name: "Steve Jobs",
    title: "Co-founder of Apple Inc."
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    name: "Confucius",
    title: "Chinese Philosopher"
  },
  {
    quote: "Believe you can and you're halfway there.",
    name: "Theodore Roosevelt",
    title: "26th President of the United States"
  }
];

const EhsaslabCard = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col iteams-center justify-center overflow-hidden">
      <h2 className="font-bold text-3xl mb-8 text-center z-10">Hear our Harmony :Voices of success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:p-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={quotes}
            direction="right"
            speed="slow"
          />
        </div>
      </div>


    </div>
  )
}

export default EhsaslabCard
