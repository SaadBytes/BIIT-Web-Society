import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const ClassRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    arid: "",
    section: "",
    phone: "",
    email: "",
    semester: "",
    gender: "",
    joinGroups: "",
  });

  const [errors, setErrors] = useState({});

  // 🔹 Validate fields
  const validate = () => {
    let newErrors = {};

    if (!formData.name || formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
      toast.error(newErrors.name);
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
      toast.error(newErrors.email);
    }

    if (!formData.phone || !/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number (10–15 digits).";
      toast.error(newErrors.phone);
    }

    if (!formData.gender) {
      newErrors.gender = "Please select your gender.";
      toast.error(newErrors.gender);
    }

    if (!formData.arid) {
      newErrors.arid = "Arid number is required.";
      toast.error(newErrors.arid);
    }

    if (!formData.semester || formData.semester < 1 || formData.semester > 8) {
      newErrors.semester = "Semester must be between 1 and 8.";
      toast.error(newErrors.semester);
    }

    if (!formData.section) {
      newErrors.section = "Section is required.";
      toast.error(newErrors.section);
    }

    if (!formData.joinGroups) {
      newErrors.joinGroups = "Please choose Yes or No.";
      toast.error(newErrors.joinGroups);
    }

    return newErrors;
  };

  // 🔹 Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Handle submit
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const validationErrors = validate();

  //     if (Object.keys(validationErrors).length > 0) {
  //       setErrors(validationErrors);
  //       return;
  //     }

  //     setErrors({});

  //     // try {
  //     // //   const response = await fetch("https://script.google.com/macros/s/AKfycbz0SXUOGKZQPmlP51DOOb7vq838sX7eYfPYiM-WiciurgnScFe89yy23zgCs72MVDsxRQ/exec", {
  //     // //     method: "POST",
  //     // //     headers: {
  //     // //       "Content-Type": "application/json",
  //     // //       Authorization: `Bearer kH6MHQLiPHTemMaxtqUjOEkajYkb68smkjBHAtebh6ZgZT8rFM1qATzOVVGkMu2O6DeFaOuDeAHiVosuxr7tTsEwQdcAhI8RTqzTAO8BeOgTGwKqUklSPghEprE6Zzk74Szmtpf6QF7PyjC8CVBWWjVMEYmUlytcrWqID6wyykdeW5XqW7BDSQUMHFMPseTujOSVRgXAHh`, // 🔐 secure token
  //     // //     },
  //     // //     body: JSON.stringify(formData),
  //     // //   });

  //     // // await fetch("https://script.google.com/macros/s/AKfycbxAEkbz5UrR8H5qNz7GeAgMMJrFwXhiVygSH5E9x64IBhXK8t77xYJ93O4MulmuovGywQ/exec", {
  //     // //     method: "POST",
  //     // //     headers: {
  //     // //       "Content-Type": "application/json",
  //     // //     },
  //     // //     body: JSON.stringify({
  //     // //       ...formData,
  //     // //       token: 'kH6MHQLiPHTemMaxtqUjOEkajYkb68smkjBHAtebh6ZgZT8rFM1qATzOVVGkMu2O6DeFaOuDeAHiVosuxr7tTsEwQdcAhI8RTqzTAO8BeOgTGwKqUklSPghEprE6Zzk74Szmtpf6QF7PyjC8CVBWWjVMEYmUlytcrWqID6wyykdeW5XqW7BDSQUMHFMPseTujOSVRgXAHh', // from .env
  //     // //     }),
  //     // //   });

  //     //   const result = await response.json();

  //     //   if (result.status === "success") {
  //     //     toast.success("Form submitted successfully!");
  //     //     setFormData({
  //     //       name: "",
  //     //       email: "",
  //     //       phone: "",
  //     //       gender: "",
  //     //       arid: "",
  //     //       semester: "",
  //     //       section: "",
  //     //       joinGroups: "",
  //     //     }); // clear form only on success
  //     //   } else {
  //     //     toast.error(result.message || "Something went wrong!");
  //     //   }
  //     // } catch (error) {
  //     //   toast.error("Network error! Please try again later.");
  //     //   console.error(error);
  //     // }
  //     // try {
  //     //     const response = await fetch("https://script.google.com/macros/s/AKfycbyQ0u1Clv81rQ41V-xTWVXIq9lihsIYLheaOiGIUHtnKmNFVdEJlTufhWlBfk1r9y_jdA/exec", {
  //     //       method: "POST",
  //     //       headers: {
  //     //         "Content-Type": "application/json",
  //     //       },
  //     //       body: JSON.stringify({
  //     //         token: "kH6MHQLiPHTemMaxtqUjOEkajYkb68smkjBHAtebh6ZgZT8rFM1qATzOVVGkMu2O6DeFaOuDeAHiVosuxr7tTsEwQdcAhI8RTqzTAO8BeOgTGwKqUklSPghEprE6Zzk74Szmtpf6QF7PyjC8CVBWWjVMEYmUlytcrWqID6wyykdeW5XqW7BDSQUMHFMPseTujOSVRgXAHh", // must match Apps Script
  //     //         name: formData.name,
  //     //         email: formData.email,
  //     //         phone: formData.phone,
  //     //         section: formData.section,
  //     //         semester: formData.semester,
  //     //         gender: formData.gender,
  //     //         joinGroups: formData.joinGroups,
  //     //         arid: formData.arid,
  //     //       }),
  //     //     });

  //     //     const result = await response.json();
  //     //     console.log(result);

  //     //     if (result.status === "success") {
  //     //       alert("Form submitted!");
  //     //     } else {
  //     //       alert("Error: " + result.message);
  //     //     }
  //     //   } catch (err) {
  //     //     console.error(err);
  //     //     alert("Failed to submit form");
  //     //   }

  //     const proxy = "https://cors-anywhere.herokuapp.com/";
  //     const scriptURL =
  //       "https://script.google.com/macros/s/AKfycbyQ0u1Clv81rQ41V-xTWVXIq9lihsIYLheaOiGIUHtnKmNFVdEJlTufhWlBfk1r9y_jdA/exec";

  //     fetch(proxy + scriptURL, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         token: "kH6MHQLiPHTemMaxtqUjOEkajYkb68smkjBHAtebh6ZgZT8rFM1qATzOVVGkMu2O6DeFaOuDeAHiVosuxr7tTsEwQdcAhI8RTqzTAO8BeOgTGwKqUklSPghEprE6Zzk74Szmtpf6QF7PyjC8CVBWWjVMEYmUlytcrWqID6wyykdeW5XqW7BDSQUMHFMPseTujOSVRgXAHh", // 🔐 your secret key
  //         name: formData.name,
  //         arid: formData.arid,
  //         section: formData.section,
  //         phone: formData.phone,
  //         email: formData.email,
  //         semester: formData.semester,
  //         gender: formData.gender,
  //         joinGroups: formData.joinGroups,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log("✅ Response from Google Sheets:", data);
  //         alert("Form submitted successfully!");
  //       })
  //       .catch((err) => {
  //         console.error("❌ Error:", err);
  //         alert("Something went wrong!");
  //       });
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbygajc1vTmctCdwvRw7ln4Mx5qL7b5fb5BXbFAyDYYrTe2CmC74DapwDkIZ3NVVqVFfYQ/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-requested-with": "XMLHttpRequest",
          },
          body: JSON.stringify({ ...formData, token: "SECRET" }),
        }
      );

      const text = await response.text(); // 👈 read as text first
      console.log("Raw response:", text);

      try {
        const result = JSON.parse(text); // try parsing JSON
        console.log("Parsed JSON:", result);
      } catch (err) {
        console.error("❌ Not valid JSON:", err);
      }

      const result = await response.json(); // tries to parse JSON

      if (result.status === "success") {
        toast.success("✅ Form submitted!");
      } else {
        toast.error("❌ " + result.message);
      }
    } catch (error) {
      console.error("❌ Error:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <section className="w-full min-h-[60vh] bg-[#1D0626] flex items-start justify-center py-10 px-4">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#2A0A33] w-full max-w-5xl rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <h2 className="col-span-full text-center text-3xl font-semibold text-[#1FA2BF] mb-4">
          Registration Form
        </h2>

        {/* Personal Info */}
        <div className="col-span-full md:col-span-1 space-y-4">
          <label className="text-[#1FA2BF] text-2xl">Full Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full text-xl p-3 rounded-lg bg-[#1D0626] text-white focus:ring-2 focus:ring-[#1FA2BF]"
          />

          <label className="text-[#1FA2BF] text-2xl">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="xyz@gmail.com"
            className="w-full text-xl p-3 rounded-lg bg-[#1D0626] text-white focus:ring-2 focus:ring-[#1FA2BF]"
          />

          <label className="text-[#1FA2BF] text-2xl">Phone Number</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="03123456789"
            className="w-full text-xl p-3 rounded-lg bg-[#1D0626] text-white focus:ring-2 focus:ring-[#1FA2BF]"
          />

          <label className="text-[#1FA2BF] text-2xl">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full text-xl p-3 rounded-lg bg-[#1D0626] text-white focus:ring-2 focus:ring-[#1FA2BF]"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Academic Info */}
        <div className="col-span-full md:col-span-1 space-y-4">
          <label className="text-[#1FA2BF] text-2xl">Arid Number</label>
          <input
            name="arid"
            value={formData.arid}
            onChange={handleChange}
            required
            placeholder="XXXX-ARID-XXXX"
            className="w-full text-xl p-3 rounded-lg bg-[#1D0626] text-white focus:ring-2 focus:ring-[#1FA2BF]"
          />

          <label className="text-[#1FA2BF] text-2xl">Semester</label>
          <select
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            required
            className="w-full text-xl p-3 rounded-lg bg-[#1D0626] text-white focus:ring-2 focus:ring-[#1FA2BF]"
          >
            <option value="">Select Semester</option>
            {[...Array(8)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                Semester {i + 1}
              </option>
            ))}
          </select>

          <label className="text-[#1FA2BF] text-2xl">Section</label>
          <input
            name="section"
            value={formData.section}
            onChange={handleChange}
            required
            placeholder="CS-1A"
            className="w-full text-xl p-3 rounded-lg bg-[#1D0626] text-white focus:ring-2 focus:ring-[#1FA2BF]"
          />

          <label className="text-[#1FA2BF] text-2xl">
            Join Society Groups?
          </label>
          <select
            name="joinGroups"
            value={formData.joinGroups}
            onChange={handleChange}
            required
            className="w-full text-xl p-3 rounded-lg bg-[#1D0626] text-white focus:ring-2 focus:ring-[#1FA2BF]"
          >
            <option value="">Choose</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Additional Comments */}
        {/* <div className="col-span-full space-y-2">
          <label className="text-[#1FA2BF] text-2xl">Comments (optional)</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 rounded-lg bg-[#1D0626] text-white focus:ring-2 focus:ring-[#1FA2BF]"
          />
        </div> */}

        {/* Submit Button */}
        <div className="col-span-full flex justify-center mt-4">
          <motion.button
            type="submit"
            className="px-10 py-3 rounded-full bg-[#D95D30] text-white font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register
          </motion.button>
        </div>
      </motion.form>
    </section>
  );
};

export default ClassRegistrationForm;
