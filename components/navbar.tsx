import { rock_salt } from "@/app/layout";

export default function Navbar() {
    return (
      <nav className={`fixed top-0 w-full flex justify-between items-center py-2 px-4 bg-gray-200`}>
        <div className={`${rock_salt.className} text-2xl`}>daviD</div>
        <ul className="flex gap-4">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
      </nav>
    );
}
