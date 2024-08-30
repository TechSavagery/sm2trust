"use client";
import Image from "next/image";
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
import GeneralAbout from "@/components/section/about/generalAbout";
import faq_img from "@/assets/images/grapes.jpg";
import bg_banner from "@/assets/images/project-hero-image.jpg";

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
        <section className="blog-single">
          <div>
            <Image src={bg_banner} loading="lazy" alt="img" />
            <div className="container 2sm:mt-[156px] sm:mt-30 mt-20">
              <div className="grid lg:grid-cols-[65%_auto] gap-[38px]">
                <div className="relative after:absolute sm:after:-left-12.5 after:-left-5 after:top-1/2 after:-translate-y-1/2 after:w-[1px] sm:after:h-[130%] after:h-[120%] after:bg-primary sm:ml-12.5 ml-5">
                  <h1 className="text-primary-foreground [font-size:_clamp(48px,7vw,130px)] font-extrabold leading-110">
                    Our Story
                  </h1>
                  <span className="inline-block w-[300px] h-[1px] bg-primary"></span>
                  <p className="text-base sm:text-lg 2sm:text-lg !leading-160 text-primary-foreground mt-[18px]">
                    SM2 Trust was founded by Shelley M. McConnell and Stephen P.
                    Maguire to provide fiduciary services for clients on the
                    Central Coast of California. A fiduciary, one to whom
                    property or powers are entrusted for the exclusive benefit
                    of another, is held to the highest legal and ethical
                    standards of care and responsibility. A fiduciary can be
                    entrusted with the obligation to manage financial assets,
                    health care needs, quality-of-life considerations, and
                    end-of-life decisions for individuals in need.
                  </p>
                  <p className="text-base sm:text-lg 2sm:text-lg !leading-160 text-primary-foreground mt-[18px]">
                    The State of California Department of Consumer Affairs
                    licenses qualified individuals to provide these services on
                    a fee basis. Under the fiduciary umbrella, SM2 offers
                    trustee, conservator-of-the-person,
                    conservator-of-the-estate, guardianship, and estate
                    settlement capabilities for clients.
                  </p>
                  <p className="text-base sm:text-lg 2sm:text-lg !leading-160 text-primary-foreground mt-[18px]">
                    Shelley M. McConnell and Stephen P. Maguire are committed to
                    honoring the abiding trust placed in SM2 by their cherished
                    clients. SM2 fiduciaries adhere to a level of respect,
                    responsibility, and integrity that will ensure the
                    intentions and wishes of clients are carried out to the
                    letter.
                  </p>
                </div>
              </div>
            </div>

            <div className="container 2sm:mt-[156px] sm:mt-30 mt-20 pt-40">
              <div className="grid lg:grid-cols-[65%_auto] gap-[38px]">
                <div className="relative after:absolute sm:after:-left-12.5 after:-left-5 after:top-1/2 after:-translate-y-1/2 after:w-[1px] sm:after:h-[130%] after:h-[120%] after:bg-primary sm:ml-12.5 ml-5">
                  <h1 className="text-primary-foreground [font-size:_clamp(48px,7vw,130px)] font-extrabold leading-110">
                    Methodology
                  </h1>
                  <span className="inline-block w-[300px] h-[1px] bg-primary"></span>
                  <p className="text-base sm:text-lg 2sm:text-lg !leading-160 text-primary-foreground mt-[18px]">
                    Of paramount importance to the fiduciary is a complete and
                    thorough understanding of the client’s wishes. Partners
                    McConnell and Maguire begin by cultivating a deep
                    understanding of the client’s wishes, expectations, hopes,
                    dreams, and fears. Attention is paid to the personal,
                    familial, and spiritual beliefs of the client. Above all,
                    SM2 fiduciaries are charged with respecting the client’s
                    wishes first and foremost.
                  </p>
                  <p className="text-base sm:text-lg 2sm:text-lg !leading-160 text-primary-foreground mt-[18px]">
                    SM2 will also work with family members, friends, attorneys,
                    and religious leaders in an attempt to understand each
                    individual client. Documents, such as trusts, wills,
                    powers-of-attorney, and health care directives, also provide
                    essential information in this process.
                  </p>
                  <p className="text-base sm:text-lg 2sm:text-lg !leading-160 text-primary-foreground mt-[18px]">
                    SM2 fiduciaries will include the client in as many decisions
                    as can be accommodated while acting as non-invasively as
                    possible. SM2 fiduciaries act exclusively in the best
                    interest of both the client’s person and estate.
                  </p>
                </div>
              </div>
            </div>

            <div className="container 2sm:mt-[156px] sm:mt-30 mt-20">
              <div className="grid lg:grid-cols-[65%_auto] gap-[38px]">
                <div className="relative after:absolute sm:after:-left-12.5 after:-left-5 after:top-1/2 after:-translate-y-1/2 after:w-[1px] sm:after:h-[130%] after:h-[120%] after:bg-primary sm:ml-12.5 ml-5">
                  <h1 className="text-primary-foreground [font-size:_clamp(48px,7vw,130px)] font-extrabold leading-110">
                    Mission
                  </h1>
                  <span className="inline-block w-[300px] h-[1px] bg-primary"></span>
                  <p className="text-2xl sm:text-3xl 2sm:text-4xl !leading-160 text-primary-foreground mt-[18px]">
                    The design of this apartment facing Ipanema beach, in Rio de
                    Janeiro, was designed for a couple with two young children,
                    who wanted a space to accompany their daughters' growth and
                    also environments with privacy for home office work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <AboutThree /> */}
        {/* <Counter />
        <Gallery />
        <ServicesSlider /> */}

        {/* --------- start team section */}
        <Faq className={"pb-20"} />
        <section className="pt-20">
          <div className="container-fluid ">
            <SectionTitle
              sectionName={"Team"}
              sectionTitle={"Our Team"}
              sectionDesc={
                "Meet the dedicated professionals committed to upholding the highest standards of care and fiduciary responsibility."
              }
            />
          </div>
          <div className="container lg:pt-30 2sm:pt-20 pt-14">
            <div className="grid lg:grid-cols-3 2sm:grid-cols-2 gap-7">
              {teamData.map(
                ({ id, img, firstName, lastName, position, social_link }) => (
                  <TeamCardOne
                    key={id}
                    img={img}
                    name={firstName + " " + lastName}
                    position={position}
                    social_link={social_link}
                    link={
                      "/team/" +
                      firstName.toLowerCase() +
                      "-" +
                      lastName.toLowerCase()
                    }
                  />
                )
              )}
            </div>
          </div>
        </section>
        {/* --------- end team section */}

        <VideoPortfolio />
        {/* <ProjectsSlider />
        <Testimonial />
        <ShopSlider data={productData.slice(0, 5)} /> */}

        {/* -------- blog slider start */}
        <section className="pt-20">
          <div className="container-fluid ">
            <SectionTitle
              sectionName={"Blog"}
              sectionTitle={"Blog"}
              sectionDesc={"Current trends in Conservatorship"}
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
