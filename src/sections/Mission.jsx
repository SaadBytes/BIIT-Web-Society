import React from "react";
import Cards from "../components/Cards";
import JoinForm from "./JoinForm";

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
    <>
      <div className="inner-section w-full min-h-[60vh] bg-[#1D0626] px-6 sm:px-10 lg:px-20 py-5">
        <div className="mission space-y-5">
          {/* Heading */}
          <div className="heading text-center">
            <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1FA2BF]">
              Mission
            </h4>
          </div>
          {/* Cards Grid */}
          <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
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
    </>
  );
};

export default Mission;
