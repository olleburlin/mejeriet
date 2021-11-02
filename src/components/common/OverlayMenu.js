import React, { useState, useLayoutEffect } from "react";
import { Link } from "gatsby";
export default function OverlayMenu() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <div>
      {/* <button
        className={`${
          isExpanded ? `z-40` : ``
        } items-center block  py-2 text-white fill-current relative`}
        onClick={() => toggleExpansion(!isExpanded)}
      >
        <svg
          className={`${isExpanded ? `active` : null} ham hamRotate ham1`}
          viewBox="0 0 100 100"
          width="60"
        >
          <path
            className="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          />
          <title>Menu</title>
        </svg>
      </button> */}
      <button
        className={`${
          isExpanded ? ` is-active` : ``
        } hamburger hamburger--minus relative z-50`}
        type="button"
        onClick={() => toggleExpansion(!isExpanded)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <nav
        className={`${
          isExpanded ? `block` : `hidden`
        } fixed overflow-hidden left-0 top-0 bg-black opacity-90 h-full md:items-center w-full z-10 space-x-8`}
      >
        {isExpanded && <Modal onClose={() => toggleExpansion(!isExpanded)} />}
      </nav>
    </div>
  );
}
function Modal() {
  useLockBodyScroll();
  return (
    <div className="h-full w-full flex flex-col items-center justify-around py-16 text-4xl">
      {[
        {
          route: `/program`,
          title: `Program`,
        },
        {
          route: `/mat`,
          title: `Mat`,
        },
        {
          route: `/skapa`,
          title: `Skapa Själv`,
        },
        {
          route: `/aktuellt`,
          title: `Aktuellt`,
        },
        {
          route: `/hyr`,
          title: `Hyr Mejeriet`,
        },
        {
          route: `/om-mejeriet`,
          title: `Om Oss`,
        },
      ].map((link) => (
        <Link
          key={link.title}
          href={link.route}
          className="font-bold uppercase  text-white no-underline"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}
function useLockBodyScroll() {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden";
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle);
  }, []); // Empty array ensures effect is only run on mount and unmount
}
