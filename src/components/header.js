import { Link } from "gatsby";
import React, { useState } from "react";
import Logo from "./common/Logo";
import OverlayMenu from "./common/OverlayMenu";

function Header() {
  const [isExpanded] = useState(false);

  return (
    <header className="py-6">
      <div className="flex flex-wrap items-center justify-between max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="flex flex-row items-center">
          <div className="w-32 mr-12">
            <Link href="/">
              <Logo color="text-white" />
            </Link>
          </div>

          <nav
            className={`${
              isExpanded ? `block` : `hidden`
            } md:block md:items-center w-full md:w-auto space-x-8`}
          >
            {[
              {
                route: `/program`,
                title: `Program`,
              },
              {
                route: `/biljetter`,
                title: `Biljetter`,
              },
              {
                route: `/mat`,
                title: `Mat`,
              },
              {
                route: `/aktuellt`,
                title: `Aktuellt`,
              },
              {
                route: `/om-mejeriet`,
                title: `Om Mejeriet`,
              },
            ].map((link) => (
              <Link
                key={link.title}
                href={link.route}
                className="font-bold uppercase  md:inline-block text-white no-underline"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
        <OverlayMenu />
      </div>
    </header>
  );
}

export default Header;
