import Link from "next/link";
import { FC, PropsWithChildren } from "react";

const CustomLink: FC<{
  children: PropsWithChildren<any>;
  href: string;
  title: string;
}> = ({ children, href, title }) => {
  return (
    <Link href={href} passHref>
      <a title={title}>{children}</a>
    </Link>
  );
};

export default CustomLink;
