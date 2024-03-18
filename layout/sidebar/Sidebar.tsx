import { data } from "@/app/api/data";
import { Search } from "./components/Search";
import { Navigation } from "./components/Navigation";

export const Sidebar = () => {
  return (
    <aside className="sticky top-14 z-10 h-[calc(100vh-56px)] w-64 bg-background text-sm overflow-y-auto">
      <div className="h-auto w-full py-8 space-y-4">
        {/* <Search /> */}
        <Navigation />
      </div>
    </aside>
  );
};
