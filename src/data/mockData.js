export const user = { name: "Grace Walker", initials: "GW" };

export const navItems = [
  { id: "dashboard", label: "Dashboard", icon: "grid" },
  { id: "courses", label: "Courses", icon: "folder", active: true },
  { id: "schedule", label: "Schedule", icon: "calendar" },
  { id: "messages", label: "Messages", icon: "message" },
  { id: "resources", label: "Resources", icon: "clipboard" },
];

export const TABS = ["Advertising", "Design", "Marketing", "Illustration", "Brand"];

export const courses = [
  {
    id: 1,

    title: "UX/UI: Web Interfaces",

    rating: 5.0,

    bg: "#dcd9f8",

    icon: "✦",

    startDate:
      "15 November - 17 January",

    price: 1600,

    description:
      "An online course for those who want to delve into UX/UI design",

    tags: ["UX/UI Design", "Web Design"],
  },

  {
    id: 2,

    title: "Creative Director",

    rating: 4.9,

    bg: "#dfe5ea",

    icon: "▨",

    startDate:
      "23 November - 18 January",

    price: 2800,

    description:
      "You will understand how to work with the team, clients, productions, festivals",

    tags: ["Innovative Solutions"],
  },

  {
    id: 3,

    title: "Motion Design, Basic",

    rating: 4.8,

    bg: "#f6c7b2",

    icon: "⌘",

    startDate:
      "2 November - 10 January",

    price: 2000,

    description:
      "An online course for those who want to switch to motion design",

    tags: ["Adobe After Effects"],
  },
];

export const calDays = [
  { label: "SUN", date: 2 },
  { label: "MON", date: 3, active: true },
  { label: "TUE", date: 4 },
  { label: "WED", date: 5 },
  { label: "THU", date: 6 },
  { label: "FRI", date: 7 },
  { label: "SAT", date: 8 },
];

export const mentors = [
  { id: 1, name: "James King", role: "UX / UI Designer", exp: "Exp. 6 years", bg: "#e0ddf5", fg: "#4a3f80", letter: "J" },
  { id: 2, name: "Evie Harris", role: "Graphic Designer", exp: "Exp. 5 years", bg: "#f5dfd0", fg: "#7a3a20", letter: "E" },
  { id: 3, name: "Gilbert Smith", role: "Creative director", exp: "Exp. 7 years", bg: "#d8e8e0", fg: "#2a5a40", letter: "G" },
];

export const progress = [
  { id: 1, label: "Digital Marketing - Unit 3", pct: 80 },
  { id: 2, label: "Financial Analyst Course - Unit 1", pct: 60 },
  { id: 3, label: "Financial Analyst Course - Unit 2", pct: 40 },
];