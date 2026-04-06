import { BsPersonVcard } from "react-icons/bs";
import { MdOutlinePublic } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";
import { LuSmartphone, LuClock, LuMoon } from "react-icons/lu";

const WhatWeMeasureData = [
  {
    icon: <BsPersonVcard size={24} />,
    heading: "Age & Gender",
    paragraph:
      "Basic demographics help our model understand usage patterns across different groups.",
  },
  {
    icon: <MdOutlinePublic size={24} />,
    heading: "Country",
    paragraph:
      "Social media habits vary globally. Your region helps us give a more accurate result.",
  },
  {
    icon: <LuSmartphone size={24} />,
    heading: "Most Used Platform",
    paragraph:
      "Different platforms have different addiction patterns — Instagram, TikTok, Twitter and more.",
  },
  {
    icon: <LuClock size={24} />,
    heading: "Daily Usage Hours",
    paragraph:
      "How many hours you spend scrolling per day is one of the strongest signals we analyze.",
  },
  {
    icon: <LuMoon size={24} />,
    heading: "Sleep Hours",
    paragraph:
      "Poor sleep and heavy social media use are deeply connected. We factor this in.",
  },
  {
    icon: <RiMentalHealthLine size={24} />,
    heading: "Mental Health Score",
    paragraph:
      "We ask you 3 short questions and calculate a score that reflects your emotional relationship with social media.",
  },
];

export default WhatWeMeasureData;