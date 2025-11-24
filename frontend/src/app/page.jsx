
import Bannar from "@/components/Bannar";

import HowWork from "@/components/HowWork";
import OurStatistics from "@/components/OurStatistics";
import Review from "@/components/Review";
import Image from "next/image";
// import HeroBanner from "./HeroBannar";

export default function Home() {
  return (
    <div className="">
      <header>
        {/* <HeroBanner/> */}
        <Bannar></Bannar>
      </header>
      <main className="max-w-7xl mx-auto space-y-5">
        {/* top donnar  */}
        <section>

        </section>

        {/* our Communite */}
        <section></section>


        {/* -----------------------------------------  */}
        {/* our Review */}
        <section className=" bg-primary-content rounded-2xl px-15 pb-10" >
          <h1 className="text-4xl py-7 text-center font-bold text-primary" >Review</h1>
          <Review />
        </section>
        {/* ------------------------------ */}
          {/* statics  */}
        <section>
          <OurStatistics />
        </section>
        {/* how itsworks */}
        <section className="bg-secondary-content rounded-2xl px-15 pb-10">
          <h1 className=" w-fit bg-base-300 text-3xl  rounded-b-2xl  px-6 py-3 text-center font-bold text-primary mx-auto">How it's Work</h1>
          <HowWork />
        </section>

      </main>

    </div >
  );
}
