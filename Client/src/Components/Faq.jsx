import { useState, useEffect } from "react";
import Fuse from "fuse.js";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Homebg from "../assets/home_bg.png";
import { ChevronDown, ChevronUp } from "lucide-react";

function Faq() {
  const staticFaqs = [
    {
      question: "What is this platform about?",
      answer:
        "This platform connects customers with small artisans and craftsmen, allowing them to showcase and sell their handmade products.",
    },
    {
      question: "How do I purchase products?",
      answer:
        "You can browse through our categories, select a product, and complete your purchase through our secure checkout process.",
    },
    {
      question: "How are artisans paid?",
      answer:
        "Artisans receive payments directly to their preferred payment method after the order is successfully completed.",
    },
    {
      question: "Is there a mobile app version?",
      answer:
        "Currently, we offer a web-based platform, but a mobile app version is in development.",
    },
    {
      question: "How can I commission an artist?",
      answer:
        "You can commission an artist by visiting their profile and sending a custom request detailing your needs.",
    },
    {
      question: "Are all products handmade?",
      answer:
        "Yes, all products sold on our platform are handcrafted by skilled artisans and craftsmen.",
    },
    {
      question: "What payment methods are available?",
      answer:
        "We support various payment methods, including credit/debit cards, PayPal, and direct bank transfers.",
    },
    {
      question: "Can I return or exchange products?",
      answer:
        "Returns and exchanges depend on the artisan's policy. Be sure to check the product details for return eligibility.",
    },
  ];

  const [faqs, setFaqs] = useState(staticFaqs);
  const [openIndex, setOpenIndex] = useState(null);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  useEffect(() => {
    fetch("/faq.json")
      .then((res) => res.json())
      .then((data) => setFaqs((prevFaqs) => [...prevFaqs, ...data]))
      .catch((error) => console.error("Error loading FAQs:", error));
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const searchFAQ = () => {
    if (query.trim().toLowerCase() === "hello") {
      setResponse("Hello! How may I assist you?");
      return;
    }

    const fuse = new Fuse(faqs, { keys: ["question"], threshold: 0.3 });
    const result = fuse.search(query);
    if (result.length > 0) {
      setResponse(result[0].item.answer);
    } else {
      setResponse(
        "I'm sorry, I can only answer questions related to our products and services."
      );
    }
  };

  return (
    <>
      <div
        className="min-h-screen py-4 flex flex-col items-center"
        style={{ backgroundImage: `url(${Homebg})`, backgroundSize: "cover" }}
      >
        <Navbar />
        {/* FAQ Section */}
        <div className="max-w-2xl mx-auto p-6 bg-white bg-opacity-90 rounded-lg shadow-lg mt-10">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {staticFaqs.map((faq, index) => (
              <div key={index} className="border-b pb-2">
                <button
                  className="w-full flex justify-between items-center text-lg font-semibold p-2 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  {openIndex === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="p-2 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ask a Question Section */}
        <div className="max-w-2xl mx-auto p-6 bg-white bg-opacity-90 rounded-lg shadow-lg mt-6">
          <h2 className="text-xl font-bold mb-4 text-center">Ask a Question</h2>
          <input
            type="text"
            placeholder="Type your question..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-2 border rounded-md mb-2"
          />
          <button
            onClick={searchFAQ}
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
          >
            Ask
          </button>

          {/* Fixed-size response box */}
          <div className="mt-4 border-t pt-2">
            <div
              className="text-gray-700 p-2 overflow-y-auto border rounded-md bg-gray-100"
              style={{
                width: "220px",
                height: "150px",
                maxHeight: "150px",
                minHeight: "150px",
                whiteSpace: "pre-wrap",
              }}
            >
              {response ? (
                <span className="block">{response}</span>
              ) : (
                <span className="text-gray-400">
                  Your response will appear here.
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Faq;
