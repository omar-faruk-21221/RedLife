import React from "react";

export default function OurStatistics() {
  return (
    <div className="bg-accent-content rounded-2xl px-15 py-7">
      <h1 className="text-3xl text-center  font-bold text-accent ">
        Our Success
      </h1>
      <span className="divider"></span>
      <div className="text-base-100  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 text-center justify-center items-center rounded-2xl pb-10">
        <aside>
          <h1 className="text-4xl  font-bold">Our Donnar</h1>
          <p className="text-2xl font-semibold py-2">4000+</p>
        </aside>
        <div className="divider lg:divider-horizontal divider-primary"></div>
        <aside>
          <h1 className="text-4xl  font-bold">Our Reciver</h1>
          <p className="text-2xl font-semibold py-2">5000+</p>
        </aside>
        <div className="divider lg:divider-horizontal divider-primary"></div>
        <aside>
          <h1 className="text-4xl  font-bold">Our Volunteer</h1>
          <p className="text-2xl font-semibold py-2">500</p>
        </aside>
      </div>
    </div>
  );
}
