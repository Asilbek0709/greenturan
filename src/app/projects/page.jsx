"use client"

import { useState } from "react"
import styles from '../globals.css'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online store with payment integration and inventory management.",
      status: "successful",
    },
    {
      id: 2,
      title: "Mobile App Redesign",
      description: "Complete UI/UX overhaul of the existing mobile application.",
      status: "successful",
    },
    {
      id: 3,
      title: "AI Chat Assistant",
      description: "Intelligent chatbot powered by machine learning for customer support.",
      status: "planned",
    },
    {
      id: 4,
      title: "Data Analytics Dashboard",
      description: "Real-time analytics and reporting dashboard for business insights.",
      status: "successful",
    },
    {
      id: 5,
      title: "Cloud Migration",
      description: "Migration of legacy systems to modern cloud infrastructure.",
      status: "planned",
    },
    {
      id: 6,
      title: "API Gateway Upgrade",
      description: "Modernize and optimize the API gateway for improved performance.",
      status: "planned",
    },
  ]

  const [filter, setFilter] = useState("all")

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.status === filter)

  const filters = [
    { label: "All Projects", value: "all" },
    { label: "Successful", value: "successful" },
    { label: "Planned", value: "planned" },
  ]

  return (
    <div >
      <div className="projects-main">
        <Header></Header>
          <div className="destination">
          <Link className='destination-link' href={'/'} >Homepage</Link>
                      <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path 
              d="M6 3L11 8L6 13" 
              stroke="#828282" 
              strokeWidth="1.5"
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <Link className='destination-link-located' href={'/contact'} >Projects</Link>
        </div>
        <div className="projects-container">
            <div className="filterContainer">
              {filters.map((btn) => (
                <button
                  key={btn.value}
                  onClick={() => setFilter(btn.value)}
                  className={`${"filterBtn"} ${filter === btn.value ? "filterBtnActive" : "filterBtnInactive"}`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

          <div className="projectsGrid">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div key={project.id} className="projectCard">
                  <div className="badgeContainer">
                    <span
                      className={`${styles.badge} ${project.status === "successful" ? styles.badgeSuccess : styles.badgePlanned}`}
                    >
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </span>
                  </div>
                  <h3 className="projectTitle">{project.title}</h3>
                  <p className="projectDescription">{project.description}</p>
                </div>
              ))
            ) : (
              <div className="noResults">
                <p>No projects found for the selected filter.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
    
  )
}