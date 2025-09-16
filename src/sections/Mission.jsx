import React from "react";
import Cards from "../components/Cards";

const Mission = () => {
  const card = [
    {
      icon: "🚀",
      heading: "Learn",
      text: "Hands-on workshops & tutorials on the latest web frameworks.",
    },
    {
      icon: "🛠️",
      heading: "Build",
      text: "Team projects to turn ideas into reality.",
    },
    {
      icon: "🤝",
      heading: "Collaborate",
      text: "Connect with peers, mentors, and industry experts.",
    },
    {
      icon: "🌍",
      heading: "Innovate",
      text: "Explore modern tools, design trends, and emerging technologies.",
    },
  ];

  return (
    <section id="mission" className="bg-[#1D0626]">
      <div className="inner-section w-full min-h-[60vh] px-6 sm:px-10 lg:px-20 py-12">
        <div className="mission space-y-10">
          {/* Heading */}
          <div
            className="heading text-center"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1FA2BF]">
              Mission
            </h4>
          </div>

          {/* Cards Grid */}
          <div
            className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            {card.map((content, key) => (
              <Cards
                key={key}
                icon={content.icon}
                heading={content.heading}
                text={content.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
