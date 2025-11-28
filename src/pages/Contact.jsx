import React, { useState } from "react";
import Footer from "../layouts/Footer";
import HandCursor from "../components/HandCursor";
import { supabase } from "../utils/supabaseClient";
import { toast } from "sonner";
import { TbLoader } from "react-icons/tb";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input updates
  const handleChange = (e) => {
    const { value, placeholder } = e.target;
    const key =
      placeholder === "Your Name"
        ? "name"
        : placeholder === "Your Email"
        ? "email"
        : "message";

    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  // Submit to Supabase
 const handleSubmit = async () => {
   if (!formData.name || !formData.email || !formData.message) {
     toast.error("Please fill all fields.");
     return;
   }

   setLoading(true);

   const { data, error } = await supabase.from("Contacts").insert([formData]);

   setLoading(false);

   if (error) {
     console.error("Supabase error:", error.message);
     toast.error("Something went wrong. Try again.");
     return;
   }

   toast.success("Message sent successfully!");
   setFormData({ name: "", email: "", message: "" });
 };


  return (
    <>
      <div className="flex justify-center items-center p-5 pt-20 md:pt-23.5">
        <div className="w-full max-w-7xl flex flex-col md:flex-row p-5 justify-between mx-auto gap-10 md:gap-0">
          {/* ---------- HEADING SECTION ---------- */}
          <div className="space-y-3 text-center md:text-left">
            <h1
              style={{
                fontFamily: "karatone, sans-serif",
                lineHeight: 1,
                letterSpacing: "0.03em",
              }}
              className="text-neutral-800 text-[45px] sm:text-[55px] md:text-[90px] leading-none"
            >
              Get in Touch
            </h1>

            <h1
              style={{
                fontFamily: "karatone, sans-serif",
                lineHeight: 1,
                letterSpacing: "0.03em",
              }}
              className="text-neutral-800 text-[45px] sm:text-[55px] md:text-[90px] leading-none"
            >
              With Us,
            </h1>

            <p className="max-w-md text-sm text-neutral-600 pt-2 mx-auto md:mx-0">
              Feel free to reach out for collaborations, projects, inquiries, or
              just to say hello. We would love to hear from you.
            </p>
          </div>

          {/* ---------- CONTACT FORM ---------- */}
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <div className="w-full max-w-xl space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-800"
              />

              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-800"
              />

              <textarea
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-neutral-300 rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-neutral-800"
              ></textarea>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="px-6 py-3 bg-neutral-800 text-[#fffceb] rounded-md hover:bg-neutral-900 transition w-full flex justify-center items-center gap-2 disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-t-transparent rounded-full animate-spin">
                      <TbLoader />
                    </span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      {/* <HandCursor /> */}
    </>
  );
};

export default Contact;
