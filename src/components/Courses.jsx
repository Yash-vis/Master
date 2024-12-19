"use client";
import React, { useEffect, useState } from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Importing Image from next/image

// Fetch function that uses the API URL from environment variables
async function getCards() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Use environment variable
  if (!apiUrl) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined in environment variables");
  }

  const response = await fetch(`${apiUrl}/api/cards`);
  if (!response.ok) {
    throw new Error(`Failed to fetch card data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

const Card = ({ title, imageUrl, onClick }) => (
  <BackgroundGradient>
    <div
      className="bg-white dark:bg-gray-800 shadow-md rounded-[33px] overflow-hidden cursor-pointer h-60"
      onClick={onClick}
    >
      {/* Ensure imageUrl is a valid URL and provide width and height */}
      <Image
        src={imageUrl} // Image URL
        alt={title}
        className="w-full h-40 object-cover rounded-t-md"
        width={500} // Specify the width of the image
        height={200} // Specify the height of the image
        priority // Improve image loading
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
          {title}
        </h3>
      </div>
    </div>
  </BackgroundGradient>
);

const Courses = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await getCards(); // Fetch cards data from the API
        setCards(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/api/cards/${id}`);
  };

  if (loading) {
    return (
      <div className="text-center text-white py-20">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-20">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 py-12">
      <div className="text-center">
        <h2 className="text-base font-semibold tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-b from-violet-400 to-gray-700">
          FEATURED COURSES
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl">
          Learn With the Best
        </p>
      </div>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-8 mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-4xl">
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              imageUrl={card.imageUrl}
              onClick={() => handleClick(card.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;

