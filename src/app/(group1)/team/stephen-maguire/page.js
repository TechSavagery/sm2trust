// app/team/[firstName]-[lastName]/page.js
import team_1 from "@/assets/images/steve_maguire.jpeg";
import React from "react";
import Image from "next/image";
import Head from "next/head";
import { teamData } from "@/lib/fakeData/teamData";
import Feedback from "@/components/section/feedback";
import SectionTitle from "@/components/ui/sectionTitle";
import Title from "@/components/ui/title";

const TeamSingle = () => {
  const pageTitle = `Stephen Maguire - SM2Trust Partner`;
  const pageDescription = `Stephen Maguire - SM2Trust Partner`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={team_1.src} />
        <meta
          property="og:url"
          content={typeof window !== "undefined" ? window.location.href : ""}
        />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={team_1.src} />
      </Head>

      <section>
        <div className="container-fluid">
          <SectionTitle
            sectionName="Team"
            sectionTitle={`Stephen <br> Maguire`}
            sectionDesc="Partner"
          />
        </div>
        <div className="container lg:pt-30 2sm:pt-20 pt-14">
          <div className="grid xl:grid-cols-[auto_538px] lg:grid-cols-[auto_350px] md:grid-cols-[auto_400px] 2xl:gap-[132px] gap-16 items-start">
            <div>
              <div className="mb-12.5">
                <Title title_text="Brief Bio:" />
                <p>
                  SM2 partner Stephen P. Maguire, a native of Arroyo Grande, has
                  been involved with the financial industry since 1972 in a
                  variety of capacities. He is Managing Partner at Maguire
                  Investments, LLC, a financial services firm in Arroyo Grande,
                  CA.
                </p>
                <br />
                <p>
                  Maguire also served as Director for Mid-State Bancorp, a
                  NASDAQ-listed company, for 10 years. While there, he was
                  instrumental in, among other duties, starting the company’s
                  Trust Department.
                </p>
                <br />
                <p>
                  Mr. Maguire has managed and settled many trusts during the
                  past 25 years. These trusts range from the quite simple to the
                  very complex. He is well versed in both the legal and
                  accounting requirements involved in trust and estate
                  management.
                </p>
              </div>
            </div>
            <div className="sticky top-16">
              <Image
                src={team_1}
                loading="lazy"
                alt={`Stephen Maguire`}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <Feedback />
    </>
  );
};

export default TeamSingle;
