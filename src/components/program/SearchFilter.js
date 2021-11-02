import React from "react";

export default function SearchFilter() {
  return (
    <div>
      <div>Filtrera:</div>
      <div>
        <label className="inline-flex items-center">
          <input type="checkbox" checked="true" />
          <span className="ml-2">Musik</span>
        </label>
      </div>
      <div>
        <label className="inline-flex items-center">
          <input type="checkbox" checked="true" />
          <span className="ml-2">Dans / Fest</span>
        </label>
      </div>
      <div>
        <label className="inline-flex items-center">
          <input type="checkbox" checked="true" />
          <span className="ml-2">Humor</span>
        </label>
      </div>
      <div>
        <label className="inline-flex items-center">
          <input type="checkbox" checked="true" />
          <span className="ml-2">Samtal / Scen</span>
        </label>
      </div>
    </div>
  );
}
