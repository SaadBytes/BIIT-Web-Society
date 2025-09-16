import React from "react";

const EventsCard = ({ heading, text, date, venue }) => {
  return (
    <div
      className="w-full sm:w-[20rem] md:w-[22rem] lg:w-[24rem] bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 p-6 flex flex-col items-center text-center"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Heading */}
      <h3 className="text-xl sm:text-2xl font-bold text-[#1D0626] mb-3">
        {heading}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm sm:text-base mb-4">
        {text}
      </p>

      {/* Date */}
      <p className="text-sm font-semibold text-[#D95D30] mb-2">
        {date}
      </p>

      {/* Venue */}
      <p className="text-sm text-gray-500">
        📍 Venue: {venue}
      </p>
    </div>
  );
};

export default EventsCard;
