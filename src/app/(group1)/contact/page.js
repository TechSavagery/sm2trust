"use client";
import { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import AddressCard from "@/components/ui/cards/addressCard";
import SectionTitle from "@/components/ui/sectionTitle";
import { addressList } from "@/lib/fakeData/addressList";
import FullWidthContactForm from "@/components/ui/forms/fullWidthContactForm";

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
        <FullWidthContactForm />
      </section>
      {/* ------ contact form end */}
    </>
  );
};

export default Contact;
