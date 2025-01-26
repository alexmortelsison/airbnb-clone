import LinksDropdown from "./LinksDropdown";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";
import NavSearch from "./NavSearch";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex sm:container py-8 justify-between px-4">
        <Logo />
        <NavSearch />
        <div className="flex gap-4 items-center">
          <ModeToggle />
          <LinksDropdown />
        </div>
      </div>
    </nav>
  );
}

// container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8
