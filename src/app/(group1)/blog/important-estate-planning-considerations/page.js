import Image from "next/image";
import Link from "next/link";
import SideBar from "@/components/ui/sideBar";
import blog_single_image from "@/assets/images/blog-single-image.jpg";
import blog_inner_img from "@/assets/images/blog-inner-image.jpg";
import QuoteIcon from "@/assets/icons/quoteIcon";
import { blogData } from "@/lib/fakeData/blogData";
import Feedback from "@/components/section/feedback";
import BlogSlider from "@/components/section/blogSlider";
import NextPrevPost from "@/components/ui/nextPrevPost";
import ButtonOutline from "@/components/ui/buttons/buttonOutline";
import Comments from "@/components/ui/comments";
import Leavecomment from "@/components/ui/leaveComment";
import SocialMediaList from "@/components/ui/socialMediaList";
import blog_2 from "@/assets/images/blog-image-2.jpg";

export const metadata = {
  title: `SM2Trust | Estate Planning Made Simple: Essential Tips for Your Family's Future`,
  description:
    "Key estate planning considerations including inheritance expectations, children as caregivers, blended family assets, and selecting the right successor trustee. Learn how proper communication and well-written estate documents can protect your family's future.",
};

const BlogSingle = () => {
  const tagList = [
    {
      id: "1",
      tag: "Estate Planning",
      link: "",
    },
    {
      id: "2",
      tag: "Trust",
      link: "",
    },
    {
      id: "3",
      tag: "Will",
      link: "",
    },
  ];
  return (
    <>
      <section className="">
        <div
          className='object-cover bg-no-repeat 2xl:pt-[448px] xl:pt-[300px] lg:pt-[200px] pt-[150px] pb-[68px] relative z-[1] after:contents-[""] after:z-[-1] after:absolute after:left-0 after:bottom-0 after:w-full after:h-full after:bg-bottom-liner'
          style={{
            backgroundImage: `url(${blog_2.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container ">
            <h1 className="text-[#F9FFFC] [font-size:_clamp(48px,6vw,90px)] font-extrabold leading-110">
              Estate Planning Made Simple: Essential Tips for Your Family's Future
            </h1>
            <p className="mt-14 text-secondary-foreground flex sm:gap-[9px] gap-[1px]">
              {" "}
              <span>20 January '24</span> / <span>Estate Planning</span> /{" "}
              <span>7 min read</span>{" "}
            </p>
          </div>
        </div>
        <div className="container lg:pt-30 2sm:pt-20 pt-14">
          <div className="grid 2xl:grid-cols-[auto_427px] lg:grid-cols-[auto_400px] 2xl:gap-[130px] lg:gap-16 items-start">
            <div>
              <div>
                <p className="text-primary-foreground">
                  Estate planning is one of the most important steps you can take
                  to protect your family's future and ensure your wishes are
                  carried out. While the process may seem overwhelming, addressing
                  key considerations early can prevent misunderstandings, protect
                  your loved ones, and preserve family relationships. Here are
                  several critical areas that require careful thought and
                  planning.
                </p>
              </div>

              <div>
                <h3 className="text-3xl 2sm:text-4xl font-bold text-primary-foreground leading-135 pt-[23px] mb-[14px]">
                  Expecting to Leave an Inheritance?
                </h3>

                <p className="text-primary-foreground">
                  Communicating with heirs is extremely important. And writing
                  detailed and specific Trust and Will documents is critical.
                  While some parents don't like to share financial information
                  with their children, the failure to do so may lead to dangerous
                  expectations on the part of the heirs. We have seen heirs fail
                  to plan for their own financial security under the false
                  expectation of a large inheritance. We have also seen families
                  torn apart over valueless but sentimental items.
                </p>
                <br />
                <p className="text-primary-foreground">
                  Well written Estate Documents and well communicated intentions
                  are critical to ensuring that your legacy supports your family
                  rather than creating conflict or false expectations.
                </p>
              </div>

              <div>
                <h3 className="text-3xl 2sm:text-4xl font-bold text-primary-foreground leading-135 pt-[23px] mb-[14px]">
                  Children as Caregivers
                </h3>
                <p className="text-primary-foreground">
                  While inviting a child into your home to act as
                  caregiver/cook/chauffeur may seem to be a "win/win," the
                  practice can be fraught with issues. Will there be
                  compensation? Will you adjust your estate distributions to
                  compensate? Are there liability issues for both parties? Will
                  there be "hard feelings" between beneficiaries? And, most
                  importantly, is the child a capable caregiver?
                </p>
                <br />
                <p className="text-primary-foreground">
                  Again, communication with heirs is critical. Having clear
                  agreements in place, whether formal or informal, can help
                  prevent misunderstandings and protect both you and your
                  caregiver child from potential disputes or legal issues.
                </p>
              </div>

              <div>
                <h3 className="text-3xl 2sm:text-4xl font-bold text-primary-foreground leading-135 pt-[23px] mb-[14px]">
                  Leaving Assets to a Blended Family?
                </h3>
                <p className="text-primary-foreground">
                  Spouses in second marriages naturally want to care for each
                  other. But considerations must also be made to protect the
                  children on both sides of the new marriage. Establishing a
                  Trust and selecting an appropriately independent successor
                  trustee is important to protect all interests.
                </p>
                <br />
                <p className="text-primary-foreground">
                  Blended families present unique challenges in estate planning.
                  Without careful planning, assets intended for your children may
                  inadvertently pass to your spouse's children, or vice versa.
                  A well-structured trust can ensure that your wishes are
                  honored while protecting the interests of all family members.
                </p>
              </div>

              <div>
                <h3 className="text-3xl 2sm:text-4xl font-bold text-primary-foreground leading-135 pt-[23px] mb-[14px]">
                  Speaking of Successor Trustees
                </h3>
                <p className="text-primary-foreground">
                  Naming a trustee to handle your estate can be an acknowledgement
                  of trust. It is! And being named successor trustee can seem like
                  an honor. And it is! But naming an independent fiduciary to
                  execute your Will and administer your Trust is often the best
                  course of action. Selecting one child over another can lead to
                  resentment. And the task of managing and settling an estate is
                  complicated. While attorneys and accountants are essential in
                  the process, the successor trustee should be versed in a
                  plethora of disciplines: Real estate, taxes, legal
                  matters...and psychology! This critical role should be filled
                  with your thoughtful due diligence.
                </p>
                <br />
                <p className="text-primary-foreground">
                  An independent trustee brings objectivity, expertise, and
                  experience to the complex task of estate administration. They
                  can navigate family dynamics, legal requirements, and financial
                  complexities without the emotional burden that family members
                  may face. This can help preserve family relationships while
                  ensuring that your estate is managed professionally and in
                  accordance with your wishes.
                </p>
              </div>

              <div>
                <h3 className="text-3xl 2sm:text-4xl font-bold text-primary-foreground leading-135 pt-12.5 mb-[14px]">
                  Conclusion
                </h3>
                <p className="text-primary-foreground ">
                  Estate planning is not just about distributing assets—it's
                  about protecting your family, preserving relationships, and
                  ensuring that your wishes are carried out with integrity. Each
                  of these considerations requires careful thought, open
                  communication, and professional guidance.
                </p>

                <p className="text-primary-foreground ">
                  At SM2Trust, we understand the complexities and sensitivities
                  involved in estate planning. We work with families to create
                  comprehensive estate plans that address these critical
                  considerations while providing the peace of mind that comes
                  from knowing your loved ones are protected. If you have
                  questions about estate planning or need assistance creating or
                  updating your estate documents, please don't hesitate to reach
                  out to us. We're here to help you navigate these important
                  decisions with care and expertise.
                </p>
              </div>

              <div className="pt-[54px] flex gap-3 flex-wrap">
                {tagList.map(({ id, link, tag }) => {
                  return (
                    <Link href={""} key={id}>
                      <ButtonOutline
                        className={
                          "font-normal px-2.5 sm:py-[5px] py-[5px] border"
                        }
                      >
                        {" "}
                        <span className="text-lg">{tag}</span>{" "}
                      </ButtonOutline>
                    </Link>
                  );
                })}
              </div>

              <hr className="mt-[22px] mb-12.5" />
            </div>
            {/* ---------- sidebar */}
            <SideBar />
          </div>
          {/* ------ next and prev post */}
          {/* <NextPrevPost /> */}
          <hr className="mt-12.5 mb-17.5 max-w-[830px] w-full" />
          {/* ------- comments */}

          {/* ---------- related post */}
          <div>
            <h2 className="[font-size:_clamp(33px,5vw,48px)] font-bold leading-120 text-primary-foreground pb-[32px]">
              Related Post
            </h2>
            <BlogSlider data={blogData.slice(0, 4)} />
          </div>
        </div>
      </section>
      <Feedback />
    </>
  );
};

export default BlogSingle;
