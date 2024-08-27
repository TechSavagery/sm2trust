"use client";
import React from "react";
import CloseIcon from "@/assets/icons/closeIcon";
import { cn } from "@/lib/utils";
import ButtonOutline from "../ui/buttons/buttonOutline";
import Link from "next/link";

const PrivacyAlert = ({
  setPrivacyAlertActive,
  privacyAlertActive,
  bg_muted,
}) => {
  const handleButtonClick = (value) => {
    localStorage.setItem("PrivacyPolicy", value);
    setPrivacyAlertActive(false);
  };

  return (
    <div
      className={cn(
        `py-100 w-full h-1/2 bg-secondary ${bg_muted} fixed z-40 ${
          privacyAlertActive ? "bottom-0 visible " : "-bottom-[100%] invisible"
        } left-0 transition-all duration-700`
      )}
    >
      <div className="w-full relative">
        <button
          onClick={() => handleButtonClick("reject")}
          className="absolute right-10 top-10 text-secondary-foreground sm:hidden" // Hide on larger screens
        >
          <CloseIcon />
        </button>
      </div>
      <hr />
      <div className="container h-full mx-auto flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-12">
        <h4 className="text-secondary-foreground text-3xl 2sm:text-4xl font-bold leading-135">
          We Respect your Privacy
        </h4>
        <p className="text-secondary-foreground mt-5">
          This site uses cookies and other tracking technologies to deliver its
          services, analyze the traffic on the site, and for third-party
          marketing. By clicking Accept, you agree to our use of these
          technologies. Please note that if you click Reject, strictly necessary
          cookies will still be operational in order for our site to function
          properly. For more information, please visit our Privacy Policy &
          Terms of Use.
        </p>

        <div className="mt-[70px] flex flex-col sm:flex-row sm:justify-center sm:space-x-4">
          <Link
            href={""}
            className="inline-block mt-4 sm:mt-0 flex-grow sm:flex-grow-0"
            onClick={() => handleButtonClick("accept")}
          >
            <ButtonOutline
              className={
                "border-secondary text-secondary-foreground sm:px-10 px-4 py-2 after:hover:bg-secondary after:left-0 hover:text-primary-foreground"
              }
            >
              Accept
            </ButtonOutline>
          </Link>
          <Link
            href={""}
            className="inline-block mt-4 sm:mt-0 flex-grow sm:flex-grow-0"
            onClick={() => handleButtonClick("reject")}
          >
            <ButtonOutline
              className={
                "border-secondary text-secondary-foreground sm:px-10 px-4 py-2 after:hover:bg-secondary after:left-0 hover:text-primary-foreground"
              }
            >
              Reject
            </ButtonOutline>
          </Link>
          <Link
            href={""}
            className="inline-block mt-4 sm:mt-0 flex-grow sm:flex-grow-0"
            onClick={() => handleButtonClick("reject")}
          >
            <ButtonOutline
              className={
                "border-secondary text-secondary-foreground sm:px-10 px-4 py-2 after:hover:bg-secondary after:left-0 hover:text-primary-foreground"
              }
            >
              Close
            </ButtonOutline>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyAlert;
