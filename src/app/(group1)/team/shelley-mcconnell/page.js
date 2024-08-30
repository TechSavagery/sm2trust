// app/team/[firstName]-[lastName]/page.js
import team_1 from "@/assets/images/shelley_mcconnell.jpg";

import React from "react";
import Image from "next/image";
import Head from "next/head";
import { teamData } from "@/lib/fakeData/teamData";
import Feedback from "@/components/section/feedback";
import SectionTitle from "@/components/ui/sectionTitle";
import Title from "@/components/ui/title";

const TeamSingle = () => {
  const pageTitle = `Shelley McConnell - SM2Trust Partner`;
  const pageDescription = `Shelley McConnell - SM2Trust Partner`;

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
            sectionTitle={`Shelley <br> McConnell`}
            sectionDesc="Partner"
          />
        </div>
        <div className="container lg:pt-30 2sm:pt-20 pt-14">
          <div className="grid xl:grid-cols-[auto_538px] lg:grid-cols-[auto_350px] md:grid-cols-[auto_400px] 2xl:gap-[132px] gap-16 items-start">
            <div>
              <div className="mb-12.5">
                <Title title_text="Bio:" />
                <p>
                  SM2 partner Shelley M. McConnell, a native of Reedley,
                  California, has lived on the Central Coast for 20 years. She
                  began working in elder care with both hands-on and management
                  experience giving her an understanding of the issues
                  confronting individuals as they age.
                </p>
                <br />
                <p>
                  McConnell’s background includes experience in financial
                  advisory and investment management while working for both
                  Kidder Peabody and Merrill Lynch before beginning an
                  entrepreneurial career.
                </p>
                <br />
                <p>
                  McConnell has owned three businesses in her career. Most
                  recently, she was President of PrintPal Promotions, a
                  marketing and promotional products company. McConnell has
                  served on many local non-profit boards including an assignment
                  to the San Luis Obispo Community Foundation’s Investment
                  Advisory Board.
                </p>
              </div>
            </div>
            <div className="sticky top-16">
              <Image
                src={team_1}
                loading="lazy"
                alt={`Stephen McConnell`}
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
