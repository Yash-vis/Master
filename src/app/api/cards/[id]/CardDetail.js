"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function CardDetail({ card }) {
  const router = useRouter();

  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = card.pdfUrl;
    link.download = card.title + " - Study Material.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePlayClick = () => {
    router.push(`/api/cards/${card.id}/study`);
  };

  return (
    <div className="py-12 px-4 sm:px-8 md:px-20 bg-gradient-to-r from-black via-gray-800 to-black">
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white">{card.title}</h1>
        <p className="mt-4 text-base sm:text-lg text-gray-400">{card.description}</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center my-6 p-6 rounded-lg shadow-xl space-y-6 sm:space-y-0">
      <Image
  src={card.imageUrl}
  alt={card.title}
  className="rounded-lg shadow-lg w-full sm:w-80 sm:h-44 object-cover"
  width={320} // You can adjust this width as per your design
  height={180} // You can adjust this height as per your design
/>

        <div className="flex flex-col items-center space-y-4">
          <button
            className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-purple-600 hover:to-blue-500 border-2 border-white rounded-lg"
            onClick={() => router.push("/enroll")}
          >
            Enroll Now
          </button>
        </div>
      </div>

      <div className="mt-4 text-white space-y-2">
        <p className="text-lg sm:text-xl font-medium">Course Duration: {card.duration}</p>
        <p className="text-lg sm:text-xl font-medium">Faculty: {card.faculty}</p>
      </div>

      <p className="mt-2 text-2xl sm:text-3xl font-bold text-yellow-500">Fee: ₹{card.fee}</p>

      <div className="mt-6 text-center space-y-4 ">
        <button
          onClick={handleDownloadClick}
          className="p-4 bg-gradient-to-r from-blue-600 to-gray-400 text-white hover:from-gray-600 hover:to-blue-500 border-2 border-white rounded-lg w-full sm:w-auto sm:m-3"
        >
          Download Study Material
        </button>

        <button
          onClick={handlePlayClick}
          className="p-4 bg-gradient-to-r from-green-400 to-green-600 text-white hover:from-green-600 hover:to-green-400 border-2 border-white rounded-lg w-full sm:w-auto"
        >
          Play Course
        </button>
      </div>
    </div>
  );
}
