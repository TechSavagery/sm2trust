"use client";
import React, { useState, useEffect } from "react";
import InputFiled from "@/components/ui/inputFiled";
import TextAreaFiled from "@/components/ui/textAreaFiled";
import ButtonOutline from "@/components/ui/buttons/buttonOutline";
import { useContactForm } from "@/hooks/useContactForm";

const FullWidthContactForm = () => {
  const { formData, sent, isSending, handleInputChange, handleSubmit } =
    useContactForm();
  const [dots, setDots] = useState("");

  useEffect(() => {
    if (isSending) {
      const interval = setInterval(() => {
        setDots((prev) => (prev.length < 3 ? prev + "." : ""));
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isSending]);

  return (
    <div className="container lg:pt-30 2sm:pt-20 pt-14 pb-20">
      <form onSubmit={handleSubmit}>
        <div className="flex sm:flex-row flex-col gap-x-5">
          <InputFiled
            name="firstName"
            placeholderc="First Name"
            type="text"
            value={formData.firstName}
            onChange={handleInputChange}
            className="mb-[13px]"
            disabled={isSending}
          />
          <InputFiled
            name="lastName"
            placeholderc="Last Name"
            type="text"
            value={formData.lastName}
            onChange={handleInputChange}
            className="mb-[13px]"
            disabled={isSending}
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
            disabled={isSending}
          />
          <InputFiled
            name="subject"
            placeholderc="Subject"
            type="text"
            value={formData.subject}
            onChange={handleInputChange}
            className="mb-[13px]"
            disabled={isSending}
          />
        </div>
        <div className="mb-[13px]">
          <TextAreaFiled
            name="message"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleInputChange}
            className="min-h-[223px]"
            disabled={isSending}
          />
        </div>
        <div className="flex justify-between">
          {sent ? (
            <button
              className="w-full flex items-center justify-center gap-2.5 whitespace-nowrap sm:text-2xl text-xl font-bold border-2 border-green-500 px-10 sm:py-[15px] py-3 relative overflow-hidden after:absolute after:right-0 after:bottom-0 after:top-0 after:z-[-1] after:bg-primary text-green-500 after:w-0 cursor-not-allowed"
              type="button"
            >
              Sent
            </button>
          ) : (
            <button
              type="submit"
              className={`w-full border px-6 py-2 rounded transition-all ${
                isSending
                  ? "flex items-center justify-center gap-2.5 whitespace-nowrap sm:text-2xl text-xl font-bold border-2 border-primary px-10 sm:py-[15px] py-3 relative overflow-hidden after:absolute after:right-0 after:bottom-0 after:top-0 after:z-[-1] after:bg-primary after:w-0 cursor-not-allowed"
                  : "flex items-center justify-center gap-2.5 whitespace-nowrap sm:text-2xl text-xl font-bold border-2 border-primary px-10 sm:py-[15px] py-3 relative overflow-hidden after:absolute after:right-0 after:bottom-0 after:top-0 after:z-[-1] after:bg-primary after:w-0 after:transition-all after:duration-500 hover:after:w-full hover:text-secondary-foreground transition-all duration-500"
              }`}
              disabled={isSending}
            >
              {isSending ? `Sending${dots}` : "Send Message"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default FullWidthContactForm;
