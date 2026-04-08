"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href?: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: Props) {
  const pathname = usePathname();
  const isActive = href ? pathname === href : false;

  const className = `flex px-1.5 font-semibold ${
    isActive ? "font-semibold underline underline-offset-6 decoration-indigo-500" : "font-semibold hover:text-indigo-500"
  }`;

  if (!href) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}