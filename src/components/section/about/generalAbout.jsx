import React from "react";
import SectionSidebarImg from "@/components/ui/sectionSidebarImg";

const GeneralAbout = ({ 
  imagePosition = "right", 
  title = "Default Title", 
  description = "Default Description", 
  imageRef 
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <section>
      <div className="container-fluid">
        <div
          className={`bg-primary xl:mt-[220px] lg:mt-25 md:mt-44 mt-[540px] xl:mb-20 mb-0`}
        >
          <div className="container">
            <div
              className={`flex lg:flex-row flex-col items-center justify-between gap-[66px] ${
                isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className={`md:-mt-25 -mt-[470px] -mb-25`}>
                <SectionSidebarImg img={imageRef} section_name={"about-bg"} />
              </div>
              <div className="max-w-[533px] lg:pt-0 pt-20 lg:pb-0 pb-10">
                <h2 className="text-secondary-foreground text-3xl 2sm:text-4xl font-bold leading-120 mb-14 max-w-[400px]">
                  {title}
                </h2>
                <p className="text-secondary-foreground">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralAbout;
