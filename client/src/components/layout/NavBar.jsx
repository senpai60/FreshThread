import { CircleUserRound } from "lucide-react";

function NavBar() {
  const navLinks = [
    {
      link: "/",
      linkName: "home",
    },
    {
      link: "/trends",
      linkName: "trends",
    },
    {
      link: "/category",
      linkName: "category",
    },
    {
      link: "/latest",
      linkName: "latest",
    },
    {
      link: "/international",
      linkName: "international",
    },
  ];

  return (
    <nav className="w-full fixed z-50 text-zinc-400 flex items-center justify-between px-10 py-4">
      <h1 className="text-md font-bold">Fresh<span className="text-red-800">Thread</span></h1>
      <div className="nav-links flex items-center gap-5">
        {navLinks.map((link) => (
          <a key={link.link} href={link.link} className="capitalize font-light">
            {link.linkName}
          </a>
        ))}
      </div>
      <div className="btns cursor-pointer">
        <button>
          <CircleUserRound />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
