"use client";
import Image from "next/image";
import SectionTitle from "../../ui/sectionTitle";
import about_bg from "@/assets/images/about-image-2.jpg";
import { useInView } from "react-intersection-observer";
import SectionSidebarImg from "@/components/ui/sectionSidebarImg";

const aboutList = [
  {
    id: "01",
    item: "Our Story",
    item_desc:
      "SM2 Trust was founded by Shelley M. McConnell and Stephen P. Maguire to provide fiduciary services for clients on the Central Coast of California.  A fiduciary, one to whom property or powers are entrusted for the exclusive benefit of another, is held to the highest legal and ethical standards of care and responsibility.  A fiduciary can be entrusted with the obligation to manage financial assets, health care needs, quality-of-life considerations, and end-of-life decisions for individuals. The State of California Department of Consumer Affairs licenses qualified individuals to provide these services on a fee basis.  Under the fiduciary umbrella, SM2 offers trustee, conservator-of-the-person, conservator-of-the-estate, guardianship, and estate settlement capabilities for clients. Shelley M. McConnell and Stephen P. Maguire are committed to honoring the abiding trust placed in SM2 by their cherished clients.  SM2 fiduciaries adhere to a level of respect, responsibility, and integrity that will ensure the intentions and wishes of clients are carried out to the letter.",
  },
  {
    id: "02",
    item: "Methodology",
    item_desc:
      "Of paramount importance to the fiduciary is a complete and thorough understanding of the client’s wishes.  Partners McConnell and Maguire begin by cultivating a deep understanding of the client’s wishes, expectations, hopes, dreams, and fears.   Attention is paid to the personal, familial, and spiritual beliefs of the client. Above all, SM2 fiduciaries are charged with respecting the client’s wishes first and foremost. SM2 will also work with family members, friends, attorneys, and religious leaders in an attempt to understand each individual client.  Documents, such as trusts, wills, powers-of-attorney, and health care directives, also provide essential information in this process. SM2 fiduciaries will include the client in as many decisions as can be accommodated while acting as non-invasively as possible.  SM2 fiduciaries act exclusively in the best interest of both the client’s person and estate.",
  },
  {
    id: "03",
    item: "Mission Statement",
    item_desc:
      "We provide attentive personal care and prudent financial management to clients under a fiduciary standards of responsibility, transparency, confidentiality, and integrity.",
  },
];
const AboutThree = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.0,
    triggerOnce: true,
  });
  return (
    <section className="pt-20">
      <div className="container-fluid">
        <SectionTitle
          sectionName={"About Us"}
          sectionTitle={"Our Artistic Journey"}
          sectionDesc={
            "Unveiling the Passion, Vision, and Expertise Behind Our Designs"
          }
        />
        <div
          className={`bg-primary 2xl:mt-[220px] lg:mt-25 md:mt-44 mt-[520px] `}
        >
          <div className="container">
            <div className="flex lg:flex-row flex-col items-center justify-between gap-[66px]">
              <div className="max-w-[1200px] lg:pb-0 pb-10">
                <h2 className="text-secondary-foreground lg:text-5xl text-[40px] font-bold leading-120 max-w-[1200px]">
                  Crafting Your Vision: Our Design Process
                </h2>
                <ul className="pt-10 ">
                  {aboutList.map(({ id, item, item_desc }) => {
                    return (
                      <li
                        key={id}
                        className="lg:flex gap-10 pb-10 last:pb-0 justify-between"
                      >
                        <svg
                          ref={ref}
                          strokeWidth="1"
                          className={`h-[65px] 2xl:w-20 w-[250px] relative -top-1 left-0 xl:text-6xl text-5xl mb-3 lg:mb-0 inline-block font-extrabold leading-120 ${
                            inView
                              ? "animate-text-line-animation stroke-secondary stroke-dasharray-1000 stroke-dashoffset-1000"
                              : "fill-transparent stroke-secondary"
                          } `}
                        >
                          <text x="0%" dominantBaseline="middle" y="70%">
                            {id}
                          </text>
                        </svg>
                        <div className="max-w-[520px]">
                          <h4 className="text-3xl 2sm:text-4xl font-bold leading-135 text-secondary-foreground pb-1.5">
                            {item}
                          </h4>
                          <p className="text-lg text-secondary-foreground font-normal">
                            {item_desc}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutThree;
