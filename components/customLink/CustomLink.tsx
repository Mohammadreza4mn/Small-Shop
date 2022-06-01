import Link from "next/link";
import { FC, PropsWithChildren } from "react";

const CustomLink: FC<{
  children: PropsWithChildren<any>;
  href: string;
  title: string;
  target?: "_blank" | "_self";
}> = ({ children, href, title, target = "_self" }) => {
  return (
    <Link href={href} passHref>
      <a title={title} target={target}>
        {children}
      </a>
    </Link>
  );
};

export default CustomLink;
