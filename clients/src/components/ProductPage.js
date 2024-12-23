import React, { useState } from "react";
import Review from "./Review"; // Importing the Review component
import { FaStar } from "react-icons/fa";
const ProductPage = ({ rating }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section>
      <div className="max-w-7xl  mx-auto p-6 bg-gray-100">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/projectlist" className="hover:underline">
            Products
          </a>
          / <span>Product Details</span>
        </nav>

        <div className="flex">
          {/* Product Images */}
          <div className="w-1/3">
            <div className="mb-4">
              <img
                src="https://placehold.co/300x400"
                alt=""
                className="border p-1"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-2/3 pl-8">
            <h1 className="text-2xl font-semibold mb-2">
              Jenny’s Closets - The winter top for female, green
            </h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`text-yellow-500 ${
                      index < rating ? "" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-500">157 Reviews</span>
            </div>

            <div className="mb-4">
              <h2 className="font-semibold mb-2">Features</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Made with full cotton</li>
                <li>Slim fit for any body</li>
                <li>Quality control by JC</li>
              </ul>
            </div>

            {/* Tab Navigation */}
            <div className="mt-8">
              <div className="border-b border-gray-300 mb-4">
                <button
                  className={`text-gray-700 font-semibold pb-2 mr-4 ${
                    activeTab === "description"
                      ? "border-b-2 border-blue-600"
                      : ""
                  }`}
                  onClick={() => setActiveTab("description")}
                >
                  Description
                </button>
                <button
                  className={`text-gray-500 pb-2 mr-4 ${
                    activeTab === "reviews" ? "border-b-2 border-blue-600" : ""
                  }`}
                  onClick={() => setActiveTab("reviews")}
                >
                  Reviews
                </button>
                <button
                  className={`text-gray-500 pb-2 ${
                    activeTab === "support" ? "border-b-2 border-blue-600" : ""
                  }`}
                  onClick={() => setActiveTab("support")}
                >
                  Support
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === "description" && (
                <div>
                  <p className="text-gray-700">
                    This is the description of the product. It provides detailed
                    information about the product features, materials, and other
                    relevant details.
                  </p>
                </div>
              )}

              {activeTab === "reviews" && (
                <div>
                  <div className="mb-6">
                    <Review
                      reviewerName="Kristin Watson"
                      reviewDate="March 14, 2021"
                      reviewText="You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the changes."
                      initialRating={4}
                    />
                    <Review
                      reviewerName="Jenny Wilson"
                      reviewDate="January 28, 2021"
                      reviewText="You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the changes."
                      initialRating={5}
                    />
                    <Review
                      reviewerName="Bessie Cooper"
                      reviewDate="January 11, 2021"
                      reviewText="You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the changes."
                      initialRating={3}
                    />
                  </div>
                </div>
              )}

              {activeTab === "support" && (
                <div>
                  <p className="text-gray-700">
                    This is the support section. Here you can find information
                    on how to get help with the product, including contact
                    details and FAQs.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
