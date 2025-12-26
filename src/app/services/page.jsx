"use client"

import '../globals.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Services() {
  return (
    <section className="servicespage">
      <Header></Header>        
      <div className="destination">
          <Link className='destination-link' href={'/'} >Homepage</Link>
          <img src="/sarrow.png" alt="" />
          <Link className='destination-link-located' href={'/projects'} >Services</Link>
        </div>
      <div className="servicepage-content">
        <main>
            <h1 style={{fontSize: '54px'}}>Services</h1>
            <div className="services-container">
              <div className="services-card">
                <div className="services-information">
                  <div className="service-tittle">
                    <h1>CONSTRUCTION ACTIVITIES</h1>
                  </div>
                  <div className="service-desc">
                    <p>At UET Construction, we continue to expand our expertise in the Industrial, Heavy Industry, Light Industry, and Civil Construction sectors. With a strategic focus on becoming a recognized leader in EPC (Engineering, Procurement, Construction) services, we are committed to delivering reliable, flexible, and high-quality outcomes. Our approach is driven by a proven track record of successful projects, with a wide range of services that cater to various industry needs.Our key areas of expertise include:    
                      <br /> -Power Transmission Lines <br />
                      -Solar Power Projects <br />
                      -Thermal Power Plants <br />
                      -Substations (500kV/220kV/110kV) <br />
                      -Battery Energy Storage Systems (BESS) <br />
                      -Wind Power Plants <br />
                      -Infrastructure Development <br />
                      -Wastewater Treatment Projects <br />
                      -Road Construction <br />
                      -Airport Projects <br />
                      -Pumping Stations <br />
                      -Manpower Supply <br />
                      -Commercial Buildings <br />
                      -Consulting Services
                    </p>
                  </div>
                </div>
                <img src="/service1.png" alt="" />
              </div>
              <div className="services-card">
                <div className="services-information">
                  <div className="service-tittle">
                    <h1>REAL ESTATE DEVELOPMENT</h1>
                  </div>
                  <div className="service-desc">
                    <p>At UET Construction, we specialize in transforming concepts into vibrant, functional spaces that meet the unique needs of each project. Our approach to real estate development is centered on innovative design, strategic planning, and a commitment to sustainability. From initial concept to final construction, we ensure every step is handled with precision and expertise. <br /><br />  With years of experience across diverse markets, our team excels in delivering high-quality residential, commercial, and mixed-use developments. We work closely with clients, local authorities, and stakeholders to ensure projects are completed on time and within budget while enhancing the surrounding communities. <br /><br />  Our services include land acquisition, project management, architectural planning, construction, and property management. Whether it's a residential small complex or a large-scale commercial development, we are dedicated to creating spaces that inspire and add value to both the people and the environment.</p>
                  </div>
                </div>
                <img src="/service2.png" alt="" />
              </div>
              <div className="services-card">
                <div className="services-information">
                  <div className="service-tittle">
                    <h1>CHIRCHIQ STRUCTURAL STEEL FACTORY</h1>
                  </div>
                  <div className="service-desc">
                    <p>In 2024, UET Construction made a key strategic acquisition by integrating Chirchiq Metal Factory into its operations. This facility enhances UET's capabilities in delivering top-tier manufacturing solutions, particularly in the energy and industrial sectors across Uzbekistan and beyond. Large-Scale Infrastructure Expertise Chirchiq Metal Factory is at the heart of UET Construction's expansion in handling large-scale infrastructure projects. This facility is specialized in the production of high-quality metal structures for power plants, substances, and industrial facilities. With 4.6 hectares of fully equipped production space, including 34 buildings and a private railway, UET Construction is well-positioned to meet the increasing demand for complex infrastructure projects. Production Capabilities With a focus on manufacturing critical components such as transformers and metal structures, the Chirchiq facility is fully equipped with state-of-the-art machinery, a fleet of modern vehicles, and a dedicated locomotive to ensure seamless product transportation. Its integrated infrastructure, which includes water, electricity, gas, and railway lines, guarantees smooth production and delivery operations.</p>
                  </div>
                </div>
                <img src="/service3.png" alt="" />
              </div>
              <div className="services-card">
                <div className="services-information">
                  <div className="service-tittle">
                    <h1>METQ – ENERGY DEVELOPMENT</h1>
                  </div>
                  <div className="service-desc">
                    <p>As a key stakeholder in METQ, UET Construction is uniquely positioned to deliver specialized services in the construction of high-voltage transmission lines, substations, and other critical infrastructure projects. With our expertise and a strong track record, we are at the forefront of meeting the growing energy and infrastructure demands across Uzbekistan and Central Asia.Our services include:        
                      Construction of High-Voltage Power LinesFrom 220 kV to 500 kV, we design and build power transmission lines that ensure reliable energy distribution to vital regions.
                      Substation DevelopmentUET Construction provides complete substation solutions, supporting power grids essential to both local and national infrastructure.
                      Infrastructure ReconstructionWe specialize in modernizing and reconstructing existing power lines and infrastructure, enhancing performance and efficiency.
                      Railway ElectrificationOur expertise extends to electrifying railway systems, contributing to the modernization of transportation networks.
                      Special ProjectsFrom hydroelectric power stations to large-scale electrical systems, we manage and deliver complex industrial and energy projects with precision.
                      As a key player in the energy and infrastructure sectors, UET Construction is dedicated to providing innovative, sustainable, and cost-effective solutions that drive regional growth and support future development.</p>
                  </div>
                </div>
                <img src="/service4.png" alt="" />
              </div>
            </div>
        </main>
      </div>
      <section className="feedback">
            <div className="feedback-info">
              <h1>Work with us</h1>
              <p>Join our innovative and collaborative team! We are always looking for talented individuals ready to make a difference. Upload resume and start your journey with us.</p>
              <Link href={'/contact'} className='cv-link'>UPLOAD YOUR RESUME</Link>
            </div>
            <div className="feedback-photo">
              <img src="/feedback.jpg" alt="" />
            </div>
        </section>
        <div className="marquee">
              <div className="marquee-bg-text">
                <span>HAVE QUESTIONS?</span><span>HAVE QUESTIONS?</span>
              </div>
              <div className="marquee-content">
                <div className="marquee-arrow-cont">
                  <svg className="marquee-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                    <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
      <Footer></Footer>
    </section>
  );
}