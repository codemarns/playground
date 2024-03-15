export const useRemoveSlashInPath = (pathname: string) => {
  const newPathname = pathname.replace(/\//g, "");
  return newPathname;
};
