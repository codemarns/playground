"use client";

import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { data } from "@/app/api/data";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-2 items-center justify-center">
        {data.map((item, index) => (
          <li key={index} className="list-none">
            <Link
              href={item.route}
              className={cn(
                "h-8 w-auto px-2 flex items-center justify-center rounded capitalize leading-tight common-transition",
                pathname === item.route
                  ? "text-secondary"
                  : "hover:text-secondary"
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
