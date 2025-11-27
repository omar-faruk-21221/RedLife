"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function DonarDetailsPage() {
  const { id } = useParams();   // <-- এখন id পাবা
  const [donor, setDonor] = useState(null);

  useEffect(() => {
    if (!id) return;  // <-- এই লাইন undefined error বাঁচাবে

    axios.get(`http://localhost:5000/donars/${id}`)
      .then(res => {
        setDonor(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  if (!donor) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl">{donor.name}</h1>
      <p>Blood Group: {donor.bloodGroup}</p>
    </div>
  );
}
