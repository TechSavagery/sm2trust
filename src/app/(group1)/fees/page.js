import Image from "next/image";

import service_img from "@/assets/images/service-paint-image.jpg";
import SectionTitle from "@/components/ui/sectionTitle";
import Title from "@/components/ui/title";
import ServiceSingleSidebar from "@/components/ui/serviceSingleSidebar";
import Feedback from "@/components/section/feedback";

export const metadata = {
  title: "Fee Schedule",
  description: "Architronix is a next js and tailwind css website",
};

const ServiceSingle = () => {
  return (
    <>
      <section>
        <div className="container-fluid ">
          <SectionTitle
            sectionName={"Fee"}
            sectionTitle={"Fee Schedule"}
            sectionDesc={
              "A clear and structured breakdown of our fiduciary service fees, ensuring transparency and compliance with legal guidelines."
            }
          />
        </div>
        <div className="container lg:pt-30 2sm:pt-20 pt-14">
          <div className="grid lg:grid-cols-[58%_auto] xl:gap-[120px] gap-15 items-start">
            <div>
              {/* <Image src={service_img} loading="lazy" alt="service-img" /> */}
              <div className="pt-12.5">
                <Title title_text={"Overview"} />
                <p className="text-primary-foreground ">
                  Our Fee Schedule outlines the cost structure for our fiduciary
                  services, including trust administration, power of attorney
                  services, and probate administration. We believe in
                  transparency, ensuring you understand the applicable rates and
                  provisions that may impact your case. Below, you’ll find a
                  detailed breakdown of our hourly rates, statutory fees, and
                  additional considerations.
                </p>
              </div>
              <div className="pt-12.5">
                <Title title_text={"Hourly Rate"} />
                <ul className="list-disc pl-5">
                  <li>
                    <p className="mt-2.5">
                      Hourly rate is $185 - $290, unless governed by law or court
                      order.
                    </p>
                  </li>
                  <li className="">
                    <p className="mt-2.5">
                      Total fees depend on size, nature, and difficulty of the
                      matter.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="pt-12.5">
                <Title
                  title_text={"Non-Court Supervised Trust Administration"}
                />
                <ul className="list-disc pl-5">
                  <li>
                    <p className="mt-2.5">
                      Billed at hourly rate for all usual and customary trustee
                      services.
                    </p>
                  </li>
                  <li className="">
                    <p className="mt-2.5">
                      Additional trustee fees may be charged at hourly rate for
                      unusual/extraordinary services such as, but not limited
                      to, complex tax issues, complex real property sales, and
                      litigation.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="pt-12.5">
                <Title
                  title_text={
                    "Agent Under Power of Attorney/Agent Healthcare Directive"
                  }
                />
                <ul>
                  <li>
                    <p className="mt-2.5">
                      Billed at hourly rate for all usual and customary trustee
                      services.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="pt-12.5">
                <Title title_text={"Probate Administration"} />
                <p className="mt-2.5">
                  Fiduciary fees for serving as a Personal
                  Representative/Administrator are governed by Probate Code
                  §10810 and computed on a fee base comprised of gross assets,
                  plus receipts and gains, less losses, as follows:
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    <p className="mt-2.5">4% of the first $100,000</p>
                  </li>
                  <li>
                    <p className="mt-2.5">3% of the next $100,000 </p>
                  </li>
                  <li>
                    <p className="mt-2.5">2% of the next $800,000</p>
                  </li>
                  <li>
                    <p className="mt-2.5">1% of the next $9,000,000</p>
                  </li>
                  <li>
                    <p className="mt-2.5">0.5% of the next $15,000,000</p>
                  </li>
                  <li>
                    <p className="mt-2.5">Court discretion after $25,000,000</p>
                  </li>
                </ul>
                <p className="mt-2.5">
                  In addition to statutory fees, extraordinary fees may be
                  requested under Probate Code §10811 for services like tax
                  issues, real property sales, and litigation. These fees are
                  billed at the $185 - $290 hourly rate.
                </p>
              </div>

              <div className="pt-12.5">
                <Title title_text={"General Fee Provisions"} />
                <ul className="list-disc pl-5">
                  <li>
                    <p className="mt-2.5">
                      All fees are subject to periodic adjustment.
                    </p>
                  </li>
                  <li>
                    <p className="mt-2.5">
                      Telephone calls, electronic communications, and travel
                      time are billable.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="pt-12.5">
                <Title title_text={"General Fee Provisions"} />
                <ul className="list-disc pl-5">
                  <li>
                    <p className="mt-2.5">
                      All fees are subject to periodic adjustment.
                    </p>
                  </li>
                  <li>
                    <p className="mt-2.5">
                      Telephone calls, electronic communications, and travel
                      time are billable.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="pt-12.5">
                <Title title_text={"Reimbursements and Third-Party Fees"} />
                <ul className="list-disc pl-5">
                  <li>
                    <p className="mt-2.5">
                      Includes reasonable costs and expenses incurred while
                      carrying out fiduciary responsibilities.
                    </p>
                  </li>
                  <li>
                    <p className="mt-2.5">
                      Third-party professional fees (e.g., Attorneys, CPAs, Tax
                      Professionals, Realtors) will be passed directly to the
                      client at cost.
                    </p>
                  </li>
                </ul>
              </div>
              <i className="mt-12.5 block">
                This fee schedule is subject to annual revisions and adjustments
                with a minimum 30 days written notice. Time billed in 1/10 hour
                increments.
              </i>
            </div>
            <ServiceSingleSidebar />
          </div>
        </div>
      </section>
      <Feedback />
    </>
  );
};

export default ServiceSingle;
