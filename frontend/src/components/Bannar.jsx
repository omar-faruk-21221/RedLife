
import React from "react";
import bannarImg1 from "../../public/assets/bannar/banar-1.avif";
import bannarImg2 from "../../public/assets/bannar/banar-2.avif";
import bannarImg3 from "../../public/assets/bannar/banar-3.avif";
import bannarImg4 from "../../public/assets/bannar/banar-4.avif";
import bannarImg5 from "../../public/assets/bannar/banar-5.avif";
import bannarImg6 from "../../public/assets/bannar/banar-6.avif";
import bannarImg7 from "../../public/assets/bannar/banar-7.avif";
import bannarImg123 from "../../public/assets/bannar/bannar-123.jpg";

export default function Bannar() {
  return (
  <div>
      <div
        className="min-h-[700px] bg-primary-content max-w-7xl mx-auto my-5 rounded-2xl object-fill bg-cover bg-center flex flex-1 justify-end items-end"
        style={{ backgroundImage: `url(${bannarImg123.src})` }}
      >
        <button className="btn btn-primary mx-auto mb-15 md:px-15 text-xl md:py-6">Learn More</button>
      </div>
    </div>

  );
}
