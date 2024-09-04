"use client";
import { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import AddressCard from "@/components/ui/cards/addressCard";
import SectionTitle from "@/components/ui/sectionTitle";
import { addressList } from "@/lib/fakeData/addressList";
import InputFiled from "@/components/ui/inputFiled";
import TextAreaFiled from "@/components/ui/textAreaFiled";
import ButtonOutline from "@/components/ui/buttons/buttonOutline";

const LeafletMap = dynamic(() => import("@/components/ui/leafletMap"), {
  loading: () => <p>A map is loading</p>,
  ssr: false,
});

const Contact = () => {
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
    <>
      <Head>
        <title>SM2rust - Contact</title>
        <meta name="description" content="Conservator & Trustee Services" />
      </Head>
      {/* ------ address and map start */}
      <section>
        <div className="container-fluid">
          <SectionTitle
            sectionName={"Contact"}
            sectionTitle={"Let's Work Together"}
            sectionDesc={
              "Secure your legacy with trusted care and unwavering integrity."
            }
          />
        </div>
        <div className="container lg:pt-30 2sm:pt-20 pt-14">
          <div className="grid lg:grid-cols-[32%_auto]">
            <div className="grid lg:grid-cols-1 2sm:grid-cols-2 grid-cols-1 gap-y-6">
              {addressList.map(
                ({ id, address, company, country, email, phone, lat_lng }) => (
                  <AddressCard
                    key={id}
                    id={id}
                    address={address}
                    company={company}
                    country={country}
                    email={email}
                    phone={phone}
                    lat_lng={lat_lng}
                  />
                )
              )}
            </div>
            <div className="w-full max-h-[392px] lg:sticky lg:top-20 z-[1] mt-16 lg:mt-0">
              <LeafletMap />
            </div>
          </div>
        </div>
      </section>
      {/* ------ address and map end */}

      {/* ------ contact form start */}
      <section>
        <div className="container lg:pt-30 2sm:pt-20 pt-14 pb-20">
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
                  <a
                    href="/terms-of-use"
                    className="text-blue-500 underline"
                  >
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
      </section>
      {/* ------ contact form end */}
    </>
  );
};

export default Contact;
