export const useRemoveSlashInPath = (pathname: string) => {
  const newPathname = pathname.replace(/\//g, "");
  return newPathname;
};

// import { clsx } from 'clsx'
// import { twMerge } from 'tailwind-merge'

// export function cn(...inputs:any[]) {
//   return twMerge(clsx(inputs))
// }