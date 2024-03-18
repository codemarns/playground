"use client";

import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { data } from "@/app/api/data";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="space-y-1">
        {data[0].leaf?.map((item, index) => (
          <li key={index} className="list-none">
            <label className="h-8 w-full px-1 flex items-center rounded capitalize font-medium leading-tight common-transition">
              {item.group}
            </label>

            <div>
              <ul className="space-y-1">
                {item.leaf.map((child, index) => (
                  <li key={index} className="list-none">
                    <Link
                      href={child.route}
                      className={cn(
                        "h-8 w-full px-1 flex items-center rounded capitalize leading-tight common-transition",
                        pathname === child.route
                          ? "text-secondary"
                          : "opacity-80 hover:opacity-100"
                      )}
                    >
                      {child.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

{
  /*  */
}
