import Link from "next/link";
import {
  SunIcon,
  SwatchIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

export const Actions = () => {
  return (
    <nav>
      <ul className="flex gap-2 items-center justify-end">
        <li className="list-none">
          <Link
            className="h-8 w-8 rounded hover:bg-innerground flex items-center justify-center common-transition"
            href={"/help"}
          >
            <QuestionMarkCircleIcon width={20} />
          </Link>
        </li>
        <li className="list-none">
          <Link
            className="h-8 w-8 rounded hover:bg-innerground flex items-center justify-center common-transition"
            href={"/github"}
          >
            <SwatchIcon width={20} />
          </Link>
        </li>
        <li className="list-none">
          <Link
            className="h-8 w-8 rounded hover:bg-innerground flex items-center justify-center common-transition"
            href={"/theme"}
          >
            <SunIcon width={20} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
