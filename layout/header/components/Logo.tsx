import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center">
      <Image
        priority
        width={19}
        height={19}
        alt="playground-logo"
        src={"/playground-logo-40x40.svg"}
        className="grayscale contrast-200 saturate-200 brightness-0 -mr-0.5"
      />
      <h1 className="text-xl font-medium leading-none uppercase opacity-80">
        layground
      </h1>
    </Link>
  );
};
