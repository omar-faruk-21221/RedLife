import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";

export default function DonarCard({ donar }) {
  // console.log(donar);
  const {
    _id,
    serviceArea,
    profileImage,
    lastDonateDate,
    name: donarName,
    bloodGroup,
    availability,
    age,
  } = donar;
  console.log(_id);
  return (
    <div className=" rounded-xl items-center hover:scale-103 bg-base-300 shadow-lg hover:bg-secondary/75 transition transform cursor-pointer ease-in-out">
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
      <main className="p-4 space-y-2">
        <h2 className="card-title text-xl text-primary text-center">
          {donarName}
          <div className="badge bg-warning text-md p-1">{bloodGroup}</div>
        </h2>

        <section className="grid grid-cols-2 justify-between items-center gap-3">
          <p className="">
            <span className="font-semibold">Age:</span> {age}
          </p>
          <p className="">
            <span className="font-semibold">Availability :</span> {availability}
          </p>
          <p className="text-wrap">
            <span className="font-semibold">Available Area</span> {serviceArea}
          </p>

          <p className="text-wrap">
            <span className="font-semibold">Last Donate</span> {lastDonateDate}
          </p>
        </section>
        <Link
          href={`/all-donars/${_id}`}
          className="btn btn-primary mt-4 w-full rounded-md text-white font-semibold"
        >
          View Details
        </Link>
      </main>
    </div>
  );
}
