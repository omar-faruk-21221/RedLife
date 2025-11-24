import React from "react";

export default function page() {
  return (
    <div className="min-h-screen flex items-center justify-center py-10 px-4">
      <div className="bg-base-100 w-full max-w-4xl rounded-2xl shadow-lg border-2 border-primary">
        <h1 className="text-3xl text-base-200 bg-primary w-fit mx-auto p-4 font-bold text-center rounded-b-2xl shadow-xl">
          Add Donar
        </h1>
        <span className="divider"></span>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 m-10">
          {/* Full Name */}
          <feildset>
            <label className="text-sm font-medium mb-1 block">Full Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. Shamima Islam"
              className="input input-bordered w-full"
            />
          </feildset>
          {/*email */}
          <feildset>
            <label className="text-sm font-medium mb-1 block">Full Name</label>
            <input
              type="email"
              name="email"
              required
              placeholder="e.g. abcd@gmail.com"
              className="input input-bordered w-full"
            />
          </feildset>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium mb-1 block">Email</label>
            <input
              type="number"
              name="donarPhone"
              placeholder="01234567890"
              className="input input-bordered w-full"
            />
          </div>

          {/* Availability */}
          <fieldset>
            <label className="text-sm font-medium mb-1 block">
              Availability
            </label>
            <select
              name="availability"
              required
              className="select select-bordered w-full"
            >
              <option value="">Select Mode</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </fieldset>

          {/* Adress */}
          <fieldset>
            <label className="text-sm font-medium mb-1 block">Adress</label>
            <input
              type="text"
              name="adress"
              required
              placeholder="Enter your adress"
              className="input input-bordered w-full"
            />
          </fieldset>

          {/* Service Area */}
          <fieldset>
            <label className="text-sm font-medium mb-1 block">
              Service Area
            </label>
            <input
              type="text"
              name="serviceArea"
              required
              placeholder="e.g. Gaibandha"
              className="input input-bordered w-full"
            />
          </fieldset>

          {/* Blood Group */}
          <fieldset>
            <label className="text-sm font-medium mb-1 block">
              Blood Group
            </label>
            <select
              name="bloodGroup"
              required
              className="select select-bordered w-full"
            >
              <option value="">Select Level</option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="O+">O+</option>
              <option value="AB+">AB+</option>
              <option value="A-">A-</option>
              <option value="B-">B-</option>
              <option value="O-">O-</option>
              <option value="AB-">AB-</option>
            </select>
          </fieldset>

          {/* lastDonatDate */}
          <fieldset className="">
            <label className="text-sm font-medium mb-1 block">
              Last Donat Date
            </label>
            <input
              type="date"
              name="lastDonatDate"
              required
              placeholder="e.g. 01-01-2000"
              className="input input-bordered w-full"
            />
          </fieldset>

          {/* Profile Image */}
          <div >
            <label className="text-sm font-medium mb-1 block">
              Donnar Image URL
            </label>
            <input
              type="url"
              name="profileimage"
              required
              placeholder="https://example.com/photo.jpg"
              className="input input-bordered w-full"
            />
          </div>

          {/* About Yourself */}
          <div >
            <label className="text-sm font-medium mb-1 block">
              About Yourself
            </label>
            <textarea
              name="aboutYourself"
              rows="3"
              placeholder="Write something about yourself..."
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>

          {/* Submit Button */}
          <input
            type="submit"
            valur={"Add Donar"}
            className="btn btn-primary w-full md:col-span-2 "
          />
        </form>
      </div>
    </div>
  );
}
