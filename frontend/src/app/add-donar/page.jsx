"use client";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const handleAddDonar = async (data) => {
    try {
      console.log("form data", data);
      const res = await axios.post("http://localhost:5000/donars", data);
      console.log("Data saved:", res.data);
      toast.success("Donar added successfully!");
      reset();
    } catch (err) {
      console.error("Error in saving donor:", err);
      toast.error("Failed to add donor.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10 px-4">
      <div className="bg-base-100 w-full max-w-4xl rounded-2xl shadow-lg border-2 border-primary">
        <h1 className="text-3xl text-base-200 bg-primary w-fit mx-auto p-4 font-bold text-center rounded-b-2xl shadow-xl">
          Add Donor
        </h1>
        <span className="divider"></span>

        <form
          onSubmit={handleSubmit(handleAddDonar)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 m-10"
        >
          <fieldset>
            <label className="text-sm font-medium mb-1 block">Full Name</label>
            <input
              type="text"
              placeholder="e.g. Shamima Islam"
              className="input input-bordered w-full"
              {...register("name", { required: "Full name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </fieldset>
          {/* --age-- */}
          <fieldset>
            <label className="text-sm font-medium mb-1 block">Age</label>
            <input
              type="number"
              placeholder="25"
              className="input input-bordered w-full"
              {...register("age", {
                required: "age number is required",
                minLength: { value: 2, message: "Phone must be 2 digits" },
              })}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.age.message}
              </p>
            )}
          </fieldset>

          <fieldset>
            <label className="text-sm font-medium mb-1 block">Email</label>
            <input
              type="email"
              placeholder="e.g. abcd@gmail.com"
              className="input input-bordered w-full"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </fieldset>

          <fieldset>
            <label className="text-sm font-medium mb-1 block">Phone</label>
            <input
              type="text"
              placeholder="01234567890"
              className="input input-bordered w-full"
              {...register("phone", {
                required: "Phone number is required",
                minLength: { value: 11, message: "Phone must be 11 digits" },
              })}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </fieldset>

          <fieldset>
            <label className="text-sm font-medium mb-1 block">
              Availability
            </label>
            <select
              className="select select-bordered w-full"
              {...register("availability", {
                required: "Availability is required",
              })}
            >
              <option value="">Select Mode</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.availability && (
              <p className="text-red-500 text-sm mt-1">
                {errors.availability.message}
              </p>
            )}
          </fieldset>

          <fieldset>
            <label className="text-sm font-medium mb-1 block">Address</label>
            <input
              type="text"
              placeholder="Enter your address"
              className="input input-bordered w-full"
              {...register("address", { required: "Address is required" })}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </fieldset>

          <fieldset>
            <label className="text-sm font-medium mb-1 block">
              Service Area
            </label>
            <input
              type="text"
              placeholder="e.g. Gaibandha"
              className="input input-bordered w-full"
              {...register("serviceArea", {
                required: "Service area is required",
              })}
            />
            {errors.serviceArea && (
              <p className="text-red-500 text-sm mt-1">
                {errors.serviceArea.message}
              </p>
            )}
          </fieldset>

          <fieldset>
            <label className="text-sm font-medium mb-1 block">
              Blood Group
            </label>
            <select
              className="select select-bordered w-full"
              {...register("bloodGroup", {
                required: "Blood group is required",
              })}
            >
              <option value="">Select Group</option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="O+">O+</option>
              <option value="AB+">AB+</option>
              <option value="A-">A-</option>
              <option value="B-">B-</option>
              <option value="O-">O-</option>
              <option value="AB-">AB-</option>
            </select>
            {errors.bloodGroup && (
              <p className="text-red-500 text-sm mt-1">
                {errors.bloodGroup.message}
              </p>
            )}
          </fieldset>

          <fieldset>
            <label className="text-sm font-medium mb-1 block">
              Last Donate Date
            </label>
            <input
              type="date"
              className="input input-bordered w-full"
              {...register("lastDonateDate", {
                required: "Last donate date is required",
              })}
            />
            {errors.lastDonateDate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastDonateDate.message}
              </p>
            )}
          </fieldset>

          <fieldset>
            <label className="text-sm font-medium mb-1 block">
              Donor Image URL
            </label>
            <input
              type="url"
              placeholder="https://example.com/photo.jpg"
              className="input input-bordered w-full"
              {...register("profileImage", {
                required: "Profile image URL is required",
              })}
            />
            {errors.profileImage && (
              <p className="text-red-500 text-sm mt-1">
                {errors.profileImage.message}
              </p>
            )}
          </fieldset>

          <fieldset className="md:col-span-2">
            <label className="text-sm font-medium mb-1 block">
              About Yourself
            </label>
            <textarea
              rows="3"
              placeholder="Write something about yourself..."
              className="textarea textarea-bordered w-full"
              {...register("aboutYourself")}
            />
          </fieldset>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary w-full md:col-span-2"
          >
            {isSubmitting ? "Submitting..." : "Add Donor"}
          </button>
        </form>
      </div>
    </div>
  );
}