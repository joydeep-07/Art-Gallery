import React from "react";

const MentoringAppointment = () => {
  return (
    <div className="bg-neutral-900 w-full text-neutral-200 min-h-screen flex justify-center items-center px-6 py-10">
      <div className="w-full max-w-7xl ">
        {/* Title */}
        <h1
          className="text-[10vh] font-bold text-left text-white tracking-tight mb-8"
          style={{ fontFamily: "karatone", letterSpacing: "3px" }}
        >
          Schedule a Session
        </h1>

        {/* Form */}
        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-neutral-900 border border-neutral-700 p-4 rounded-xl focus:border-blue-200 focus:outline-none transition"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="bg-neutral-900 border border-neutral-700 p-4 rounded-xl focus:border-blue-200 focus:outline-none transition"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-neutral-900 border border-neutral-700 p-4 rounded-xl focus:border-blue-200 focus:outline-none transition"
            />

            <input
              type="date"
              className="bg-neutral-900 border border-neutral-700 p-4 rounded-xl focus:border-blue-200 focus:outline-none transition"
            />
          </div>

          <select className="bg-neutral-900 border border-neutral-700 p-4 rounded-xl focus:border-blue-200 focus:outline-none transition">
            <option>Select Time Slot</option>
            <option>10:00 AM – 10:30 AM</option>
            <option>11:00 AM – 11:30 AM</option>
            <option>2:00 PM – 2:30 PM</option>
          </select>

          <textarea
            placeholder="What do you want help with?"
            rows="4"
            className="bg-neutral-900 border border-neutral-700 p-4 rounded-xl focus:border-blue-200 focus:outline-none transition"
          ></textarea>

          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 rounded-xl text-lg transition"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default MentoringAppointment;
