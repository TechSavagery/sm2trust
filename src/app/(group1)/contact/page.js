import dynamic from "next/dynamic";
import Image from "next/image";

import AddressCard from "@/components/ui/cards/addressCard";
import SectionTitle from "@/components/ui/sectionTitle";
import { addressList } from "@/lib/fakeData/addressList";
import InputFiled from "@/components/ui/inputFiled";
import TextAreaFiled from "@/components/ui/textAreaFiled";
import RightArrow from "@/assets/icons/rightArrow";
import from_img from "@/assets/images/contact-image-3.jpg";
import Feedback from "@/components/section/feedback";
import ButtonOutline from "@/components/ui/buttons/buttonOutline";

const LeafletMap = dynamic(() => import("@/components/ui/leafletMap"), {
  loading: () => <p>A map is loading</p>,
  ssr: false,
});

export const metadata = {
  title: "SM2rust - Contact",
  description: "Conservator & Trustee Services",
};

const Contact = () => {
  return (
    <>
      {/* ------ address and map start */}
      <section>
        <div className="container-fluid ">
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
        <div className="container lg:pt-30 2sm:pt-20 pt-14">
          <div className="grid lg:grid-cols-1 gap-5">
            <form>
              <div className="flex sm:flex-row flex-col gap-x-5">
                <InputFiled
                  placeholderc={"First Name"}
                  type={"text"}
                  className={"mb-[13px]"}
                />
                <InputFiled
                  placeholderc={"Last Name"}
                  type={"text"}
                  className={"mb-[13px]"}
                />
              </div>
              <div className="flex sm:flex-row flex-col gap-x-5">
                <InputFiled
                  placeholderc={"Your Email"}
                  type={"email"}
                  className={"mb-[13px]"}
                />
                <InputFiled
                  placeholderc={"Subject"}
                  type={"text"}
                  className={"mb-[13px]"}
                />
              </div>
              <TextAreaFiled
                placeholder={"Type your massage"}
                className={"min-h-[223px] mb-[13px]"}
              />
              <div className="flex justify-end">
                <ButtonOutline>
                  Send Message <RightArrow height={"22"} width={"35"} />
                </ButtonOutline>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* ------ contact form end */}
      <Feedback />
    </>
  );
};

export default Contact;
