"use client";

import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Squares2X2Icon as Squares2X2SolidIcon } from "@heroicons/react/24/solid";
import { Squares2X2Icon as Squares2X2OutlineIcon } from "@heroicons/react/24/outline";

export const Nav = () => {
  const pathname = usePathname();

  const data = [
    {
      id: "home",
      name: "home",
      route: "/",
    },
    {
      id: "avatar",
      name: "avatar",
      route: "/avatar",
    },
    {
      id: "button",
      name: "button",
      route: "/button",
    },
    {
      id: "card",
      name: "card",
      route: "/card",
    },
    {
      id: "input",
      name: "input",
      route: "/input",
    },
    {
      id: "select",
      name: "select",
      route: "/select",
    },
  ];

  return (
    <nav className="">
      <ul className="space-y-0">
        {data.map((item) => (
          <li key={item.id}>
            <Link
              href={item.route}
              className={cn(
                "capitalize h-12 px-8 flex items-center gap-3 common-transition",
                pathname === item.route
                  ? "text-secondary bg-secondary/5"
                  : "text-default-400 hover:bg-secondary/5 hover:text-secondary"
              )}
            >
              {pathname === item.route ? (
                <Squares2X2SolidIcon width={24} className="" />
              ) : (
                <Squares2X2OutlineIcon width={24} className="" />
              )}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
