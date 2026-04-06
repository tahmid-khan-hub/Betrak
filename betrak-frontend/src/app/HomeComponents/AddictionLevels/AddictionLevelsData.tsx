import { BsExclamationOctagon } from "react-icons/bs";
import { PiWarningLight } from "react-icons/pi";
import { GoShieldCheck } from "react-icons/go";

export const colorMap: Record<string, { border: string; bg: string; text: string; badge: string; badgeText: string; dot: string }> = {
  red: {
    border: "border-red-500/30",
    bg: "bg-red-500/10",
    text: "text-red-400",
    badge: "bg-red-500/15",
    badgeText: "text-red-400",
    dot: "bg-red-400",
  },
  amber: {
    border: "border-amber-500/30",
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    badge: "bg-amber-500/15",
    badgeText: "text-amber-400",
    dot: "bg-amber-400",
  },
  green: {
    border: "border-green-500/30",
    bg: "bg-green-500/10",
    text: "text-green-400",
    badge: "bg-green-500/15",
    badgeText: "text-green-400",
    dot: "bg-green-400",
  },
};

const AddictionLevelsData = [
  {
    icon: <BsExclamationOctagon size={28} />,
    level: "High",
    color: "red",
    description:
      "Your usage patterns and mental health signals suggest a strong dependency on social media. It is significantly affecting your sleep, focus and emotional well-being.",
    signs: ["6+ hours daily usage", "Poor sleep quality", "High anxiety when offline"],
  },
  {
    icon: <PiWarningLight size={28} />,
    level: "Medium",
    color: "amber",
    description:
      "You show moderate signs of social media reliance. Your habits are worth paying attention to before they develop into a stronger dependency.",
    signs: ["3–6 hours daily usage", "Occasional sleep disruption", "Mild FOMO tendencies"],
  },
  {
    icon: <GoShieldCheck size={28} />,
    level: "Low",
    color: "green",
    description:
      "Your relationship with social media appears healthy and balanced. You use it intentionally without it significantly impacting your mental health or daily life.",
    signs: ["Under 3 hours daily usage", "Good sleep habits", "No significant anxiety offline"],
  },
];

export default AddictionLevelsData;