import { cn } from "@/lib/utils";
import OutlineSvgText from "../outlineSvgText";
import Link from "next/link";

const ServiceCard = ({ id, service_name, service_desc, text_muted, link }) => {
  const content = (
    <div className="px-3 sm:px-0">
      <OutlineSvgText text={id} />
      {link ? (
        <Link
          href={link}
          className={cn(
            `block text-primary-foreground font-bold leading-135 md:text-2xl text-xl hover-underline ${text_muted}`
          )}
        >
          {service_name}
        </Link>
      ) : (
        <span
          className={cn(
            `block text-primary-foreground font-bold leading-135 md:text-2xl text-xl ${text_muted}`
          )}
        >
          {service_name}
        </span>
      )}
      <p
        className={cn(`font-normal text-primary-foreground ${text_muted}`)}
        dangerouslySetInnerHTML={{ __html: service_desc }}
      />
    </div>
  );

  return link ? (
    <Link
      href={link}
      className="block hover:no-underline" // Makes the whole card clickable
    >
      {content}
    </Link>
  ) : (
    content
  );
};

export default ServiceCard;
