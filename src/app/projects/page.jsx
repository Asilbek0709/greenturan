"use client"

import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"
import "../globals.css"
import Modal from "../components/Modal"
import { useTranslation } from "react-i18next"

export default function ProjectsPage() {
  const { t } = useTranslation()

  const projects = [
    {
      id: 1,
      title: t("project-page-title1"),
      description: t("project-page-title1-desc"),
      status: "planned",
      image: "/solar11.jpg",
      details: {
        power: "300 kW",
        scope: t("project-desc1"),
        client: `"PRIME TOWR" LLC`,
        panels: "Tongwai 620 W, N-type",
        inverter: "Solax X3-FORTH",
      },
    },
    {
      id: 2,
      title: t("project-page-title2"),
      description: t("project-page-title2-desc"),
      status: "successful",
      image: "/solar4.jpg",
      details: {
        power: "300 kW",
        scope: t("project-desc1"),
        client: "Yangi Yo'l Plant",
        panels: "Jinko Solar 580 W, N-type",
        inverter: "Solax X3-FORTH",
      },
    },
    {
      id: 3,
      title: t("project-title1"),
      description: t("project-desc1"),
      status: "successful",
      image: "/solar9.jpg",
      details: {
        power: "25 kW",
        scope: t("project-desc1"),
        client: t("project-title1"),
        panels: "Tongwai 620 W, N-type",
        inverter: "SigenStor EC 25.0 TP",
      },
    },
    {
      id: 4,
      title: t("project-page-title3"),
      description: t("project-page-title2-desc"),
      status: "successful",
      image: "/solar8.jpg",
      details: {
        power: "50 kW",
        scope: t("project-page-title2-desc"),
        client: "UZKOJE",
        panels: "Jinko Solar 585 W, N-type",
        inverter: "Solax X3-FORTH",
      }
    },
        {
      id: 5,
      title: t("project-page-title3"),
      description: t("project-page-title2-desc"),
      status: "successful",
      image: "/solar5.jpg",
      details: {
        power: "50 kW",
        scope: t("project-page-title2-desc"),
        client: "Korzinka",
        panels: "Qcells 585 W, N-type",
        inverter: "Huawei SUN2000-50KTL",
      }
    },
        {
      id: 6,
      title: t("project-page-title5"),
      description: t("project-page-title2-desc"),
      status: "successful",
      image: "/solar12.jpg",
      details: {
        power: "100 kW",
        scope: t("project-page-title2-desc"),
        client: "Uzbekistan Railways JSC & Andijan Mechanical Plant JSC",
        panels: "Qcells 620 W, N-type",
        inverter: "Huawei SUN2000-100KTL-H2",
      }
    },
        {
      id: 7,
      title: t("project-page-title6"),
      description: t("project-page-title2-desc"),
      status: "successful",
      image: "/solar13.jpg",
      details: {
        power: "120 kW",
        scope: t("project-page-title2-desc"),
        client: "Khujand Market",
        panels: "Tongwai 620 W, N-type",
        inverter: "Solax X3-FORTH",
      }
    },
        {
      id: 8,
      title: t("project-page-title5"),
      description: t("project-page-title2-desc"),
      status: "successful",
      image: "/solar14.jpg",
      details: {
        power: "100 kW",
        scope: t("project-desc1"),
        client: "Tashkent Branch of Samarkand State University of Veterinary Medicine, Animal Husbandry and Biotechnology",
        panels: "Jinko Solar 580 W, N-type",
        inverter: "Solax X3-FORTH",
      }
    },
        {
      id: 9,
      title: t("project-page-title2"),
      description: t("project-page-title2-desc"),
      status: "successful",
      image: "/solar15.jpg",
      details: {
        power: "300 kW",
        scope: t("project-desc1"),
        client: "TATA Shoes",
        panels: "Jinko Solar 580 W, N-type",
        inverter: "Solax X3-FORTH",
      }
    },
        {
      id: 10,
      title: t("project-title2"),
      description: t("project-page-title2-desc"),
      status: "successful",
      image: "/solar2.jpg",
      details: {
        power: "126 MW",
        scope: t("project-desc1"),
        client: "Xorazm Sarimay",
      }
    },

  ]

  const [filter, setFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const filters = [
    { label: t("all-projects"), value: "all" },
    { label: t("project-overlay-completed"), value: "successful" },
    { label: t("project-planned"), value: "planned" },
  ]

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.status === filter)

  const openModal = (project) => {
    setSelectedProject(project)
    setIsOpen(true)
  }

  const closeModal = () => {
    setSelectedProject(null)
    setIsOpen(false)
  }

  return (
    <div>
      <div className="projects-main">
        <Header />
        <div className="destination">
          <Link className="destination-link" href="/">
            {t("homepage")}
          </Link>

          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 3L11 8L6 13"
              stroke="#828282"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <Link className="destination-link-located" href="/projects">
            {t("dropdown-link-project")}
          </Link>
        </div>

        {/* Filters */}
        <div
          className="projects-container-main"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="filterContainer">
            {filters.map((btn) => (
              <button
                key={btn.value}
                onClick={() => setFilter(btn.value)}
                className={`filterBtn ${
                  filter === btn.value
                    ? "filterBtnActive"
                    : "filterBtnInactive"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Projects */}
          <div className="projectsGrid">
            {filteredProjects.length ? (
              filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="projectCard"
                  onClick={() => openModal(project)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="badgeContainer">
                    <img src={project.image} alt={project.title} />

                    <span style={{backgroundColor: "#213981", color: "#fff", padding: "0.5rem"}}
                      className={`badge ${
                        project.status === "successful"
                          ? "badgeSuccess"
                          : "badgePlanned"
                      }`}
                    >
                      {t(
                        project.status === "successful"
                          ? "project-overlay-completed"
                          : "project-planned"
                      )}
                    </span>
                  </div>

                  <h3 className="projectTitle">{project.title}</h3>
                  <p className="projectDescription">
                    {project.description}
                  </p>
                </div>
              ))
            ) : (
              <div className="noResults">
                <p>{t("no-projects")}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />

      {/* Modal */}
      {isOpen && selectedProject && (
        <Modal onClose={closeModal}>
          <h2>{selectedProject.title}</h2>
          <img src={selectedProject.image} alt="" />
          {typeof selectedProject.details === "object" ? (
            <>
              
              {selectedProject.details.power && (
                <p>
                  <strong>{t("power")}:</strong> {selectedProject.details.power}
                </p>
              )}
              {selectedProject.details.scope && (
                <p>
                  <strong>{t("scope")}:</strong> {selectedProject.details.scope}
                </p>
              )}
              {selectedProject.details.client && (
                <p>
                  <strong>{t("client")}:</strong> {selectedProject.details.client}
                </p>
              )}
              {selectedProject.details.panels && (
                <p>
                  <strong>{t("panels")}:</strong> {selectedProject.details.panels}
                </p>
              )}
              {selectedProject.details.inverter && (
                <p>
                  <strong>{t("inverter")}:</strong> {selectedProject.details.inverter}
                </p>
              )}
            </>
          ) : (
            <p>{selectedProject.details}</p>
          )}
        </Modal>
      )}
    </div>
  )
}
