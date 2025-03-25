import { useState } from "react";
import Homebg from "../assets/home_bg.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Commission() {
  const [formData, setFormData] = useState({
    type: "art",
    duration: "",
    description: "",
    budget: "",
    location: "",
    phone: "",
    email: "",
  });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" && value < 0 ? "" : value, // Prevents negative budget
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Reset message before submission

    try {
      const response = await fetch("http://localhost:5000/api/commissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Request submitted successfully!");
        setMessageType("success");
        setFormData({
          type: "art",
          duration: "",
          description: "",
          budget: "",
          location: "",
          phone: "",
          email: "",
        }); // Reset form
      } else {
        setMessage(result.message || "Submission failed!");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred while submitting.");
      setMessageType("error");
    }

    // Hide message after 3 seconds
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div
      style={{ backgroundImage: `url(${Homebg})`, backgroundSize: "cover" }}
      className="min-h-screen relative"
    >
      <Navbar />
      <div className="flex flex-col items-center py-10 relative px-4">
        <p className="text-[#F9D9AA] text-3xl md:text-4xl font-bold text-center mb-6 bg-black rounded-md p-2">
          "Can't find what you're looking for?{" "}
          <span className="text-[#FF902B]">Commission an artist</span> to bring
          your idea to life!"
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        >
          <h2 className="text-xl font-semibold mb-4 text-center">
            Commission Request
          </h2>

          <label className="block mb-2">Type of Commission</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          >
            <option value="art">Art</option>
            <option value="craft">Craft</option>
          </select>

          <label className="block mb-2">Job Duration</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            placeholder="e.g., 2 weeks"
            required
          />

          <label className="block mb-2">Job Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            placeholder="Describe the job..."
            rows="3"
            required
          ></textarea>

          <label className="block mb-2">Budget</label>
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            placeholder="Enter budget"
            min="0"
            required
          />

          <label className="block mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            placeholder="Enter location"
            required
          />

          <label className="block mb-2">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            placeholder="Enter phone number"
            required
          />

          <label className="block mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            placeholder="Enter email address"
            required
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition-all duration-300"
          >
            Submit
          </button>

          {/* Success/Error Message */}
          {message && (
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 mt-3 px-4 py-2 rounded shadow-lg text-sm transition-opacity duration-500 ${
                messageType === "success"
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {message}
            </div>
          )}
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Commission;
