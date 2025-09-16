import React from "react";
import EventsCard from "../components/EventsCard.jsx";

const UpcommingEvents = () => {
  const events = [
    {
      heading: "HTML, CSS, JS Seminar",
      text: "In this seminar, students will be introduced to the core fundamentals of Web Technology. Students will be able to make basic websites after this Seminar.",
      date: "Coming soon",
      venue: "Shared Later",
    },
    {
      heading: "Workshop on PHP Laravel",
      text: "This Workshop will help students learn PHP and gain practical, hands-on experience directly from an industry expert.",
      date: "Coming soon",
      venue: "Shared Later",
    },
  ];

  return (
    <section className="w-full bg-[#1D0626] py-16 px-6 sm:px-10 lg:px-20" id="events">
      {/* Heading */}
      <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          Upcoming <span className="text-[#1FA2BF]">Events</span>
        </h2>
        <p className="text-gray-300 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          Stay tuned for exciting events, workshops, and seminars designed to help you
          learn, build, and innovate with the BIIT Web Society.
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 place-items-center">
        {events.map((event, key) => (
          <EventsCard
            key={key}
            heading={event.heading}
            text={event.text}
            date={event.date}
            venue={event.venue}
          />
        ))}
      </div>
    </section>
  );
};

export default UpcommingEvents;
