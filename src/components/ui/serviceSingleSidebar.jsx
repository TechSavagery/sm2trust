"use client";
import React, { useState } from "react";
import RightArrow from "@/assets/icons/rightArrow";
import Link from "next/link";
import Title from "@/components/ui/title";
import InputFiled from "@/components/ui/inputFiled";
import TextAreaFiled from "@/components/ui/textAreaFiled";
import ButtonFill from "./buttons/buttonFill";
import { servicesData } from "@/lib/fakeData/servicesData";
import ButtonOutline from "./buttons/buttonOutline";
const ServiceSingleSidebar = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSent(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => setSent(false), 5000);
      } else {
        alert("Failed to send the message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  };
  return (
    <div className="sticky top-16">
      <div>
        <Title title_text={"All Services"} />
        <ul>
          {servicesData.map(({ id, link, service_name }) => {
            return (
              <li
                key={id}
                className="text-primary-foreground flex items-center gap-[27px] mb-[22px] last:mb-0"
              >
                <RightArrow width={"35"} height={"22"} />
                <Link
                  href={link}
                  className="text-xl leading-160 inline-block relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-500 hover:after:w-full "
                >
                  <span className="font-medium text-primary-foreground">
                    {service_name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <div className='mt-17.5'>
                <Title title_text={"Search"} />
                <InputFiled placeholderc={"Type & Hit Enter"} type={'text'} />
            </div> */}

      <div className="container lg:pt-30 2sm:pt-20 pt-14 pb-20">
        <Title title_text={"Schedule a Call"} />
        <div className="grid lg:grid-cols-1 gap-5">
          <form onSubmit={handleSubmit}>
            <div className="flex sm:flex-row flex-col gap-x-5">
              <InputFiled
                name="firstName"
                placeholderc="First Name"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                className="mb-[13px]"
              />
            </div>
            <div className="flex sm:flex-row flex-col gap-x-5">
              <InputFiled
                name="lastName"
                placeholderc="Last Name"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
                className="mb-[13px]"
              />
            </div>
            <div className="flex sm:flex-row flex-col gap-x-5">
              <InputFiled
                name="email"
                placeholderc="Your Email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mb-[13px]"
              />
            </div>
            <div className="flex sm:flex-row flex-col gap-x-5">
              <InputFiled
                name="subject"
                placeholderc="Subject"
                type="text"
                value={formData.subject}
                onChange={handleInputChange}
                className="mb-[13px]"
              />
            </div>
            <div className="mb-[13px]">
              <TextAreaFiled
                name="message"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleInputChange}
                className="min-h-[223px]"
              />
              <p className="mb-2">
                By sending us a message, you agree to our
                <a href="/privacy-policy" className="text-blue-500 underline">
                  {" "}
                  Privacy Policy
                </a>{" "}
                and
                <a href="/terms-of-use" className="text-blue-500 underline">
                  {" "}
                  Terms of Use
                </a>
                .
              </p>
            </div>
            <div className="flex justify-between">
              {sent ? (
                <button
                  className="border border-green-500 text-green-500 px-6 py-2 rounded"
                  type="button"
                  disabled
                >
                  Sent
                </button>
              ) : null}
              <ButtonOutline type="submit">Send Message</ButtonOutline>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="mt-17.5">
        <form action="">
          <Title title_text={"Schedule a Call"} />
          <InputFiled
            placeholderc={"Your Name"}
            type={"text"}
            className="mb-[15px]"
          />
          <InputFiled
            placeholderc={"Phone Number"}
            type={"number"}
            className="mb-[15px]"
          />
          <InputFiled
            placeholderc={"Phone Number"}
            type={"date"}
            className="mb-[15px]"
          />
          <TextAreaFiled
            placeholder={"Your massage"}
            className={"min-h-[187px]"}
          />
          <ButtonFill type="submit" className={"sm:px-7.5 sm:py-2.5"}>
            Send massage
          </ButtonFill>
        </form>
      </div> */}
    </div>
  );
};

export default ServiceSingleSidebar;
