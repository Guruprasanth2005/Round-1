import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import CourseCard from "./components/CourseCard";
import RightSidebar from "./components/RightSidebar";
import { courses } from "./data/mockData";
import "./styles/App.css";
import "./styles/Sidebar.css";
import "./styles/Header.css";
import "./styles/Tabs.css";
import "./styles/CourseCard.css";
import "./styles/RightSidebar.css";

export default function App() {
  const [activeNav, setActiveNav] = useState("courses");
  const [activeTab, setActiveTab] = useState("Design");

  return (
    <div className="wrapper">
      <div className="dash">
        <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

        <main className="main">
          <div className="mainTop">
            <h1 className="pageTitle">Courses</h1>
            <Header />
          </div>

          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="tabsDivider" />

          <div className="courseList">
            {courses.map((course, i) => (
              <CourseCard key={course.id} course={course} last={i === courses.length - 1} />
            ))}
          </div>
        </main>

        <RightSidebar />
      </div>
    </div>
  );
}