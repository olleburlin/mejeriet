import { Link } from "gatsby";
import React from "react";

export default function Sodran() {
  return (
    <div className="bg-brandpurple bg-opacity-75 p-4 space-y-4">
      <h4 className="uppercase text-2xl">Filmer på södran</h4>
      <ul>
        <li>15:30 Promising Young Woman</li>
        <li>16:00 En runda till</li>
        <li>17:45 Tove</li>
        <li>18:30 Nomadland</li>
        <li>20:10 En runda till</li>
      </ul>
      <p>
        <Link to="/sodran">
          <button className="bg-brandteal py-1 px-2">Visa alla</button>
        </Link>
      </p>
    </div>
  );
}
