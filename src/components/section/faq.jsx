import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "../ui/sectionTitle";
import faq_img from "@/assets/images/grapes.jpg";
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
    question: "When is a guardianship or conservatorship appropriate?",
    ans: `
        
  Sometimes, an illness, injury, or disability can make it difficult or impossible for someone to make decisions about his or her health care, money, living situation, or other personal matters. Examples may include:
<br/>
<br/>
      <li>Someone who is in a coma.</li>
      <li>Someone who is mentally challenged.</li>
      <li>Someone who has Alzheimer’s disease or other forms of dementia.</li>
      <li>Someone who has had a stroke.</li>
      <li>Someone who has suffered a brain injury.</li>

<br/>
  If a court finds that a person cannot make any or all of his or her important life decisions, that person is <strong>incapacitated</strong>
 To decide whether someone is incapacitated, the court holds a hearing and looks at all the facts. It will find that a person is incapacitated if it believes the facts show the person cannot:
 <br/>
 <br/>     
 <li>understand the facts about his or her financial, health care, or living situation well enough to make decisions about any or all of those matters, or</li>
      <li>clearly communicate his or her wishes about any or all of those matters.</li>
 


        `,
  },
  {
    id: "5",
    question:
      "Could the plot of Netflix's I Care a Lot really happen, and, if so, could it happen to me in California?",
    ans: `
        There has been an increase in awareness of fraud in the Conservatorship industry due to the recent Netflix production “I Care a Lot”. This film does not accurately depict the conservatorship process and instead paints it with negativity. Below you will find a detailed report that accurately explains the process while debunking information that was present in the film. Feel free to reach out to us if you have any further questions concerning this topic!
 <br/>    
  <br/>    
https://californiaconservatorshipfacts.com/
        `,
  },
];

const Faq = ({ className }) => {
  return (
    <section className={`pt-20 ${className}`}>
      <div className="container-fluid">
        <SectionTitle
          sectionName={"FAQ"}
          sectionTitle={"FAQ"}
          sectionDesc={"Answers to Your Conservator & Trustee Questions"}
        />
      </div>
      <div className="container lg:pt-30 2sm:pt-20 pt-14">
        <div className="grid lg:grid-cols-[100%_auto] items-center gap-17.5">
          <div>
            <Accordion type="single" defaultValue="1" collapsible>
              {faqData.map(({ id, ans, question }) => {
                return (
                  <AccordionItem key={id} value={id} className="mb-2.5">
                    <AccordionTrigger className="text-xl font-semibold border border-primary sm:px-12.5 px-6">
                      {question}
                    </AccordionTrigger>
                    <AccordionContent className="mt-[22px] sm:px-12.5 px-6">
                      <div dangerouslySetInnerHTML={{ __html: ans }} />
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
