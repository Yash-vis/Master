"use client";

import React, { useState } from "react";
import { cards } from "../utils/cards";

const EnrollPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectedCourse: "",
  });

  const [courseFee, setCourseFee] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "selectedCourse") {
      const selectedCard = cards.find((card) => card.title === value);
      setCourseFee(selectedCard ? selectedCard.fee : null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    if (formData.phone.length !== 10) {
      setError("Phone number must be valid");
      return;
    }
    

    setError(""); 
    console.log(formData); 
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center py-40 mx-2">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Enroll in Our English Speaking Course
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 font-semibold">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div>
            <label
              htmlFor="selectedCourse"
              className="block text-gray-700 font-semibold"
            >
              Choose a Course
            </label>
            <select
              id="selectedCourse"
              name="selectedCourse"
              value={formData.selectedCourse}
              onChange={handleChange}
              className="text-gray-500 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a course</option>
              {cards.map((card) => (
                <option key={card.id} value={card.title}>
                  {card.title}
                </option>
              ))}
            </select>
          </div>

          {courseFee && (
            <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg text-gray-700">
              <p>
                <strong>Course Fee:</strong> ₹{courseFee}
              </p>
            </div>
          )}

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Enroll Now
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnrollPage;

