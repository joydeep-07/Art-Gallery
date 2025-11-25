import React, { useState } from "react";

const Review = () => {
  const [form, setForm] = useState({ fullName: "", jobRole: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", form);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <div className="flex flex-col justify-between mb-12 text-left">
          <h1
            style={{ fontFamily: "karatone", letterSpacing: "0.02em" }}
            className="text-6xl lg:text-8xl font-bold text-gray-900 mb-4 tracking-tight"
          >
            Share Your Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Help us improve and guide future mentees with your valuable feedback
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className=" overflow-hidden ">
          <div className="flex flex-col gap-10 lg:flex-row">
            {/* LEFT SECTION - FORM */}
            <div className="lg:w-1/2 p-5 lg:p-4 ">
              <div className="mb-8">
                <h2
                  style={{ fontFamily: "karatone", letterSpacing: "0.03em" }}
                  className="text-3xl font-bold text-gray-900 mb-3"
                >
                  Submit Your Review
                </h2>
                <p className="text-gray-600">
                  Your feedback helps improve the mentoring experience for
                  everyone
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-b outline-none border-gray-300 focus:ring-1 focus:ring-neutral-400 focus:border-transparent transition-all duration-200 "
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Job Role *
                  </label>
                  <input
                    type="text"
                    name="jobRole"
                    value={form.jobRole}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-b outline-none border-gray-300 focus:ring-1 focus:ring-neutral-400 focus:border-transparent transition-all duration-200 "
                    placeholder="What's your current role?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Review Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 outline-none focus:ring-1 focus:ring-neutral-400 focus:border-transparent transition-all duration-200 resize-none rounded-sm"
                    placeholder="Share your mentoring experience..."
                  />
                </div>

                <button
                  type="submit"
                  style={{fontFamily:"karatone"}}
                  className="w-full grayscale-100 bg-neutral-800 text-white py-4 px-6 rounded-xl font-semibold transform transition-all duration-200 "
                >
                  Submit Review
                </button>
              </form>
            </div>

            {/* RIGHT SECTION - GUIDELINES */}
            <div className="lg:w-1/2 p-8 lg:p-12  text-neutral-700">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-3">Review Guidelines</h2>
                <p className="text-gray-300">
                  Help us maintain quality with constructive feedback
                </p>
              </div>

              <div className="space-y-6 ">
                <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <p className="text-gray-200">
                    Mention specific aspects you appreciated about the mentoring
                    sessions
                  </p>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <p className="text-gray-200">
                    Share how the mentoring impacted your career growth or skill
                    development
                  </p>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <p className="text-gray-200">
                    Provide constructive suggestions while maintaining respect
                    and professionalism
                  </p>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <p className="text-gray-200">
                    Be honest and detailed to help future mentees make informed
                    decisions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">💫</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Help Future Mentees
            </h3>
            <p className="text-gray-600 text-sm">
              Your review will help future mentees understand the experience and
              make better decisions
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Improve Quality
            </h3>
            <p className="text-gray-600 text-sm">
              Constructive feedback helps us continuously improve the quality of
              mentoring
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🙏</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              We Appreciate You
            </h3>
            <p className="text-gray-600 text-sm">
              Thank you for taking the time to share your valuable thoughts and
              experiences!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
