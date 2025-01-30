import React from "react";
import RightArrow from "@/assets/icons/rightArrow";
import Link from "next/link";
import Title from "@/components/ui/title";
import { servicesData } from "@/lib/fakeData/servicesData";
import StackedContactForm from "./forms/stackedContactForm";

const ServiceSingleSidebar = () => {
  return (
    <div className="sticky top-16">
      <div>
        <Title title_text="All Services" />
        <ul>
          {servicesData.map(({ id, link, service_name }) => (
            <li
              key={id}
              className="text-primary-foreground flex items-center gap-[27px] mb-[22px] last:mb-0"
            >
              <RightArrow width="35" height="22" />
              <Link
                href={link}
                className="text-xl leading-160 inline-block relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-500 hover:after:w-full "
              >
                <span className="font-medium text-primary-foreground">
                  {service_name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <StackedContactForm />
    </div>
  );
};

export default ServiceSingleSidebar;
