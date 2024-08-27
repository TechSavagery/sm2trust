"use client";
import React, { useEffect, useState } from "react";
import AboutOne from "@/components/section/about/aboutOne";
import Gallery from "@/components/section/gallery";
import BannerOne from "@/components/section/heroes/bannerOne";
import ServicesSlider from "@/components/section/servicesSlider";
import VideoPortfolio from "@/components/section/videoPortfolio";
import ProjectsSlider from "@/components/section/projectsSlider";
import Testimonial from "@/components/section/testimonial";
import ShopSlider from "@/components/section/shopSlider";
import BlogSlider from "@/components/section/blogSlider";
import Feedback from "@/components/section/feedback";
import Counter from "@/components/ui/counter";
import SectionTitle from "@/components/ui/sectionTitle";
import TeamCardOne from "@/components/ui/cards/teamCardOne";
import PrivacyAlert from "@/components/header/privacyAlert"; // Import the PrivacyAlert component
import section_bg from "@/assets/images/section-bg-2.jpg";

import { productData } from "@/lib/fakeData/productData";
import { blogData } from "@/lib/fakeData/blogData";
import { teamData } from "@/lib/fakeData/teamData";
import { cardSlideAnimation } from "@/lib/utils";
import { bannerOneData } from "@/lib/fakeData/bannerOneData";
import HeaderOne from "@/components/header/headerOne";
import Footer from "@/components/footer";
import HeaderTwo from "@/components/header/headerTwo";
import { servicesData } from "@/lib/fakeData/servicesData";
import ServiceCard from "@/components/ui/cards/serviceCard";
import AboutThree from "@/components/section/about/aboutThree";
import Faq from "@/components/section/faq";


const Home = () => {
  const [privacyAlertActive, setPrivacyAlertActive] = useState(false);

  useEffect(() => {
    const privacyPolicy = localStorage.getItem("PrivacyPolicy");

    if (privacyPolicy !== "accept" && privacyPolicy !== "reject") {
      setPrivacyAlertActive(true);
    }
  }, []);

  useEffect(() => {
    let timer;
    if (!privacyAlertActive) {
      timer = setTimeout(() => {
        const privacyPolicy = localStorage.getItem("PrivacyPolicy");

        if (privacyPolicy !== "accept" && privacyPolicy !== "reject") {
          setPrivacyAlertActive(true);
        }
      }, 10000);
    }

    return () => clearTimeout(timer);
  }, [privacyAlertActive]);

  return (
    <>
      <HeaderTwo />
      <main>
        {/* <BannerOne data={bannerOneData} /> */}
        <section
          className='bg-cover bg-no-repeat bg-center relative z-[1] after:contents-[""] after:z-[-1] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[#d2e0d9a6] pt-[225px] pb-30'
          style={{ backgroundImage: `url(${section_bg.src})` }}
        >
          <div className="container-fluid">
            <SectionTitle
              sectionTitle={"Conservator & Trustee Services"}
              sectionDesc={
                "We provide attentive personal care and prudent financial management to clients under fiduciary standards of responsibility, transparency, confidentiality, and integrity."
              }
            />
          </div>
        </section>
        <div className="container-fluid lg:pt-20 2sm:pt-16 pt-10">
          <div className="grid 2xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-8 px-4 2sm:px-0">
            {servicesData.map(({ id, service_desc, service_name, link }) => (
              <ServiceCard
                key={id}
                id={id}
                service_desc={service_desc}
                service_name={service_name}
                link={link}
              />
            ))}
          </div>
        </div>
        <AboutThree />
        {/* <Counter />
        <Gallery />
        <ServicesSlider /> */}

        {/* --------- start team section */}
        <Faq className={"pb-20"} />
        <section className="pt-20">
          <div className="container-fluid ">
            <SectionTitle
              sectionName={"Team"}
              sectionTitle={"Architects of Architronix"}
              sectionDesc={
                "Where Imagination Takes Flight, and Excellence Blossoms"
              }
              button_text={"All Architects"}
              link={"/team"}
            />
          </div>
          <div className="container lg:pt-30 2sm:pt-20 pt-14">
            <div className="grid lg:grid-cols-3 2sm:grid-cols-2 gap-7">
              {teamData.map(({ id, img, name, position, social_link }) => (
                <TeamCardOne
                  key={id}
                  img={img}
                  name={name}
                  position={position}
                  social_link={social_link}
                />
              ))}
            </div>
          </div>
        </section>
        {/* --------- end team section */}

        <VideoPortfolio />
        <ProjectsSlider />
        <Testimonial />
        <ShopSlider data={productData.slice(0, 5)} />

        {/* -------- blog slider start */}
        <section className="pt-20">
          <div className="container-fluid ">
            <SectionTitle
              sectionName={"Blog"}
              sectionTitle={"Design Insights & Inspiration"}
              sectionDesc={"Unveil the Secrets to Transforming Spaces"}
            />
          </div>
          <div className="container lg:pt-30 2sm:pt-20 pt-14">
            <BlogSlider data={blogData.slice(0, 4)} />
          </div>
        </section>
        {/* -------- blog slider end */}

        <Feedback />
      </main>
      <Footer />
      {privacyAlertActive && (
        <PrivacyAlert
          setPrivacyAlertActive={setPrivacyAlertActive}
          privacyAlertActive={privacyAlertActive}
          bg_muted={"bg-muted"}
        />
      )}
    </>
  );
};

export default Home;
