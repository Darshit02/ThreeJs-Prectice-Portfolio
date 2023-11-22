import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}{" "}
      <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi , I am <span className="font-semibold">Darshit </span>👋
      <br />A Web Developer and a Programmer From India
    </h1>
  ),
  2: (
    <InfoBox
      text="Work with many projects and picked up many skills along the way"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="learned many skills along the way by doing many projects Curious about the impact?"
      link="/projects"
      btnText="Visit Portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Work together to create something unique.let's connect With me"
      link="/contact"
      btnText="Lets Talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
