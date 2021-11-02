import React from "react";

const SearchHit = ({ hit: { title, id, informationProgram } }) => (
  <article key={id} className="w-full h-full">
    <div className="bg-gainsboro rounded-lg cursor-pointer w-full overflow-hidden relative px-3 py-6 md:px-6">
      <div className="pt-3 md:pt-6 text-center">
        <p className="text-slategray font-bold text-lg group-hover:text-primary mb-1">
          {title}
        </p>
        <p>{informationProgram.kategori}</p>
      </div>
    </div>
  </article>
);

export default SearchHit;
