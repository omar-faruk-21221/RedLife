"use client";
import PrivateRoute from "@/hooks/PrivateRoute";
import { apiClient } from "@/utilitics/api";
import { data } from "autoprefixer";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function page() {
  const [donors, setDonors] = useState([]);

  // ========== data get ========
  useEffect(() => {
    apiClient
      .get("/donors")
      .then((res) => {
        console.log("donars from database", res.data);
        setDonors(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  //  --------- add features -------

  const handleDonarRemove = async (donor) => {
    // console.log(donor);
    try {
      const res = await apiClient.delete(`/donors/${donor._id}`);
      toast.success(res.data.message);
      setDonors((prev) => prev.filter((d) => d._id !== donor._id));
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete donor");
      console.error(err);
    }
  };

  return (
    <PrivateRoute>
      <div className="bg-secondary-content min-h-screen">
        <header className="py-5">
          <h1 className="text-4xl font-bold text-center  text-secondary">
            Manage Donor
          </h1>
          <span className="divider"></span>
        </header>
        <main className="max-w-7xl mx-auto">
          <div className="pb-10  ">
            <h1 className="text-2xl font-bold mb-4">
              Donor List {donors.length}
            </h1>
            <div className="overflow-x-auto rounded-xl">
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead className="bg-secondary text-base-200 text-center">
                  <tr className="text- text-xl">
                    <th className="py-2 ">Name</th>
                    <th className="py-2 ">Email</th>
                    <th className="py-2 ">Phone</th>
                    <th className="py-2 ">Blood Group</th>
                    <th className="py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {donors.map((donor) => (
                    <tr
                      key={donor._id}
                      className="hover:bg-gray-100 text-center "
                    >
                      <td className="py-2 px-4 flex items-center gap-3 ">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={donor.profileImage} alt={donor.name} />
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold">{donor.name}</div>
                          <div className="text-sm text-gray-500">
                            {donor.serviceArea}
                          </div>
                        </div>
                      </td>
                      <td className="py-2 px-4">{donor.email}</td>
                      <td className="py-2 px-4">{donor.phone}</td>
                      <td className="py-2 px-4 font-bold">
                        {donor.bloodGroup}
                      </td>
                      <td className="py-2 px-4 font-bold space-x-5">
                        <Link
                          href={`/all-donars/${donor._id}`}
                          className="btn btn-accent"
                        >
                          Details
                        </Link>
                        <button
                          onClick={() => handleDonarRemove(donor)}
                          className="btn btn-warning"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </PrivateRoute>
  );
}
