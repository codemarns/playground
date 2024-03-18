import { Logo } from "./components/Logo";
import { Actions } from "./components/Actions";
import { Navigation } from "./components/Navigation";

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 h-14 w-full bg-background border-b border-innerground text-sm">
      <div className="h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-3 gap-4 items-center">
        <Logo />
        <Navigation />
        <Actions />
      </div>
    </header>
  );
};
