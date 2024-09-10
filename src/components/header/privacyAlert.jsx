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
    if (value == "reject" || value == "accept") {
      localStorage.setItem("PrivacyPolicy", value);
      setPrivacyAlertActive(false);
      console.log(value);
    } else {
      setPrivacyAlertActive(false);
      console.log(value);
    }
  };

  return (
    <div
      className={cn(
        `py-50 w-full min-h-[50vh] h-auto bg-secondary ${bg_muted} fixed z-40 ${
          privacyAlertActive ? "bottom-0 visible" : "-bottom-[100%] invisible"
        } left-0 transition-all duration-1200`
      )}
    >
      <div className="w-full relative">
        <button
          onClick={() => handleButtonClick("")}
          className="absolute right-10 top-10 text-secondary-foreground hidden sm:block"
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
          properly. For more information, please visit our
          <Link href="/privacy-policy" className="font-bold underline mx-1">
            Privacy Policy
          </Link>{" "}
          &
          <Link href="/terms-of-use" className="font-bold underline mx-1">
            Terms of Use
          </Link>
          .
        </p>

        <div className="mt-[70px] flex flex-row justify-center space-x-2 flex-wrap sm:flex-nowrap">
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
            onClick={() => handleButtonClick("")}
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
