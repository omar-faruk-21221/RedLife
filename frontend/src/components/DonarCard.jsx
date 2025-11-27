"use client";
import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";

export default function DonarCard({ donar }) {
  console.log(donar);
  const {
    serviceArea,
    profileImage,
    lastDonateDate,
    name: donarName,
    bloodGroup,
    availability,
    age,
  } = donar;
  const {
    _id,
    name,
    district,
    image,
    lastDonatedDate,
    donatedTimes,
    priorityRating,
  } = donar || {};
  return (
    <div className=" mb-10 rounded-xl  shadow-md items-center hover:scale-107 bg-secondary-content hover:bg-secondary transition transform cursor-pointer ease-in-out">
      <figure className="">
        <div className="w-ful h-[180px] bg-gray-400 rounded-2xl">
          {profileImage ? (
            <img
              className=" w-full h-full bg-cover rounded-t-2xl"
              src={profileImage}
              alt={donarName}
            />
          ) : (
            <FaUser className="w-full min-h-[180px] text-gray-400 mb-2" />
          )}
        </div>
      </figure>
      <main className="p-6 ">
        <h2 className="card-title text-3xl text-primary text-center mb-3">
          {donarName}
          <div className="badge bg-warning text-md p-2">{bloodGroup}</div>
        </h2>

        <section className="grid grid-cols-2 justify-between items-center gap-3">
          <p className="">
            <span className="font-semibold">Age:</span> {age}
          </p>
          <p className="">
            <span className="font-semibold">Availability :</span> {availability}
          </p>
          <p className="col-span-2">
            <span className="font-semibold">Available Area:</span> {serviceArea}
          </p>

          <p className="col-span-2">
            <span className="font-semibold">Last Donate:</span> {lastDonateDate}
          </p>
        </section>

        <Link
          href={"/all-donors"}
          className="mt-4 btn btn-primary text-white rounded-md font-semibold transition w-full"
        >
          View Details
        </Link>
      </main>
    </div>
  );
}
