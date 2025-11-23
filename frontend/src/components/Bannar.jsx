import React from "react";
import bannarImg1 from "../../public/assets/bannar/banar-1.avif";
import bannarImg2 from "../../public/assets/bannar/banar-2.avif";
import bannarImg3 from "../../public/assets/bannar/banar-3.avif";
import bannarImg4 from "../../public/assets/bannar/banar-4.avif";
import bannarImg5 from "../../public/assets/bannar/banar-5.avif";
import bannarImg6 from "../../public/assets/bannar/banar-6.avif";
import bannarImg7 from "../../public/assets/bannar/banar-7.avif";

export default function Bannar() {
  return (
    <div>
      <div className="min-h-[500px] bg-primary-content max-w-7xl mx-auto my-5  rounded-2xl flex flex-col items-center justify-center">
        <img src="../../public/assets/bannar/banar-1.avif" alt="" />
        <h1 className="text-4xl text-parimary text-center">RedLife</h1>
        <p className="text-center py-2 px-60">
          Color sit amet consectetur adipisicing elit. Rem distinctio
          consequatur adipisci magnam cumque deserunt cum quae odit, quam qui
          suscipit aliquid excepturi nulla dolorem molestias in sed ab sit
          ratione illo voluptatem fuga iure magni natus! Maxime, ut, assumenda
          nam earum dolores officiis placeat possimus nisi unde voluptatem
          totam.
        </p>
        <button className="btn btn-primary mx-auto">Learn More</button>
      </div>

    </div>
  );
}
