import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "../ui/sectionTitle";
import faq_img from "@/assets/images/faq-image.jpg";
import SectionSidebarImg from "../ui/sectionSidebarImg";

const faqData = [
  {
    id: "1",
    question: "What is a conservator or guardian?",
    ans: `A conservator is a “fiduciary”, meaning that the conservator must take actions only in the best interest of the conservatee and must act in good faith and with the utmost loyalty and concern for the conservatee. In making decisions the conservator must attempt to have the conservatee live in the least restrictive environment and to the maximum extent possible take into account the personal wishes of the conservatee. The conservator must appropriately exercise those powers granted by the court. <br/> <br/>A conservatorship is a legal proceeding where one person or entity, called the “conservator” is appointed by a judge to manage the affairs of another person called the “conservatee”.
        `,
  },
  {
    id: "2",
    question: "What services does SM2Trust Offer?",
    ans: `
        SM2 principals can act as Conservators, Guardians or under Powers of Attorney, providing personal care for individuals over a wide spectrum of needs. As required, levels of help can be offered with the following:
<br/>
<br/>
Health care and medications
<br/>
Daily meals
<br/>
Health care and medications
<br/>
Bill paying
<br/>
Care facility placement
<br/>
General health and welfare
<br/>
Asset management
<br/>
<br/>
SM2 can act as Trustee providing financial and estate care for individuals. Services include:

Bill paying
Property management oversight
Asset management
Tax coordination
Estate settlement and distribution
        `,
  },
  {
    id: "3",
    question: "What is a trustee?",
    ans: `       
A trust is a way to manage money or other assets for someone else.
<br/>
<br/>
There are three key people involved in any trust:
<br/>
<br/>
 
          <li>The settlor – the person who puts the assets or money into the trust.</li>
          <li>The beneficiary – the person who benefits from the trust.</li>
          <li>The trustee – the person who manages the trust.</li>
<br/>
There may be more than one settlor, beneficiary or trustee involved in a trust.
<br/>
<br/>
Someone might set up a trust for a beneficiary because the beneficiary:
<br/>
<br/>
<li>Is too young to manage their own affairs, typically under 18.</li>
<li>Is an older person who needs to pay for long-term care.</li>
<li>Has a permanent disability which means they can’t manage their own affairs.</li>

        `,
  },
  {
    id: "4",
    question: "What Can I Expect from Your Room Makeover Services?",
    ans: `
        Our interior design services encompass a wide range of offerings, including color consultation, furniture selection, space planning, decor styling, and more. We work closely with you to create spaces that reflect your vision and practical needs.
        `,
  },
  {
    id: "5",
    question: "How Do Your Lighting Design Services Work?",
    ans: `
        Our interior design services encompass a wide range of offerings, including color consultation, furniture selection, space planning, decor styling, and more. We work closely with you to create spaces that reflect your vision and practical needs.
        `,
  },
];

const Faq = ({ className }) => {
  return (
    <section className={`pt-20 ${className}`}>
      <div className="container-fluid">
        <SectionTitle
          sectionName={"FAQ"}
          sectionTitle={"Design Insights Unveiled"}
          sectionDesc={"Answers to Your Design Questions"}
        />
      </div>
      <div className="container lg:pt-30 2sm:pt-20 pt-14">
        <div className="grid lg:grid-cols-[40%_auto] items-center gap-17.5">
          <div>
            <SectionSidebarImg img={faq_img} section_name={"faq-background"} />
          </div>

          <div>
            <Accordion type="single" defaultValue="1" collapsible>
              {faqData.map(({ id, ans, question }) => {
                return (
                  <AccordionItem key={id} value={id} className="mb-2.5">
                    <AccordionTrigger className="text-xl font-semibold border border-primary sm:px-12.5 px-6">
                      {question}
                    </AccordionTrigger>
                    <AccordionContent className="mt-[22px] sm:px-12.5 px-6">
                      <div
                        dangerouslySetInnerHTML={{ __html: ans }}
                      />
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
