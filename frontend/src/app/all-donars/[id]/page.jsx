"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function DonarDetailsPage() {
  const { id } = useParams();
  const [donor, setDonor] = useState(null);
  useEffect(() => {
    if (!id) return;
    axios
      .get(`http://localhost:5000/donars/${id}`)
      .then((res) => {
        setDonor(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!donor) return <p>Loading...</p>;
  const {
    aboutYourself,
    address,
    age,
    availability,
    bloodGroup,
    createAt,
    email,
    lastDonateDate,
    name,
    phone,
    profileImage,
    serviceArea,
  } = donor;
  console.log(donor);
  return (
    <div className=" w-5xl mx-auto border-2 border-primary  p-8 bg-base-100  rounded-lg shadow-lg my-12">
      <div className=" md:flex  items-center gap-4 space-x-8">
        <img
          src={profileImage}
          alt={name}
          className="w-52 h-52 rounded-full object-cover border-4 border-primary"
        />
        <section>
          <div className="space-y-1">
            <h1 className="text-5xl font-bold text-primary pb-5">{name}</h1>
          </div>
          <div className="space-y-1 mr-10">
            <h1 className="text-lg text-black/40 py-2  ">{createAt}</h1>
          </div>
          <div className="space-y-1 mr-10">
            <h1 className="text-lg text-black/40  ">{aboutYourself}</h1>
          </div>
        </section>
      </div>
      <span className="divider"></span>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-accent">
        <aside>
          <div>
            <strong className="text-lg text-primary">Blood Group:</strong>{" "}
            <span className="text-lg text-secondary"> {bloodGroup}</span>
          </div>
          <div>
            <strong className="text-lg text-primary">Email</strong>{" "}
            <span className="text-lg text-secondary">{email}</span>
          </div>
          <div>
            <strong className="text-lg text-primary">Phone</strong>{" "}
            <span className="text-lg text-secondary">{phone}</span>
          </div>
          <div>
            <strong className="text-lg text-primary">Availability:</strong>{" "}
            <span className="text-lg text-secondary">{availability}</span>
          </div>
        </aside>
        <aside>
          <div>
            <strong className="text-lg text-primary">Address:</strong>{" "}
            <span className="text-lg text-secondary"> {address}</span>
          </div>
          <div>
            <strong className="text-lg text-primary">ServiceArea:</strong>{" "}
            <span className="text-lg text-secondary">{serviceArea}</span>
          </div>
          <div>
            <strong className="text-lg text-primary">Age:</strong>{" "}
            <span className="text-lg text-secondary">{age}</span>
          </div>

          <div>
            <strong className="text-lg text-primary">Last Donate Date:</strong>{" "}
            <span className="text-lg text-secondary"> {lastDonateDate}</span>
          </div>
        </aside>
      </div>
      <span className="divider"></span>
      <div className="flex justify-center">
        <Link href={"/all-donars"} className="btn btn-primary py-2 px-4">Back</Link>
      </div>
    </div>
  );
}
