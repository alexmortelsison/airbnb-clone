import { Input } from "../ui/input";

export default function NavSearch() {
  return (
    <Input
      type="text"
      placeholder="Find a property..."
      className="sm:w-[500px] w-45 dark:bg-muted"
    />
  );
}
