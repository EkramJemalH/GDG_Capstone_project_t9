import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const BlogDetailsMain = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <img
          src="/image/header_Blog.png"
          alt="Blog Header"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Travel Stories For Now and the Future
          </h1>
          <div className="text-white flex gap-4">
            <span>By Hasmar</span>
            <span>January 18, 2021</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-4">
        <article className="bg-white rounded-lg shadow p-6 mb-8">
          <img
            src="/image/landscape.jpg"
            alt="Bali landscape"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h2 className="text-3xl font-bold mb-4">Discovering Bali</h2>
          <p className="text-gray-600 mb-6">
            By Rebel Rover · March 20, 2025
          </p>
          
          <div className="prose">
            <p>
              Bali, the land of gods, offers far more than stunning beaches. Beyond the touristy
              spots lies a world full of untouched rice terraces, ancient temples, and hidden
              waterfalls.
            </p>
            {/* More content... */}
          </div>
        </article>

        {/* Sidebar */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-blue-600 hover:underline">Exploring Kyoto</a>
            </li>
            {/* More posts... */}
          </ul>
        </div>

        {/* Comment Form */}
        <div className="bg-white rounded-lg shadow p-6 mt-8">
          <h3 className="text-xl font-bold mb-4">Leave a Comment</h3>
          <form className="space-y-4">
            <textarea 
              className="w-full p-3 border rounded"
              placeholder="Your comment"
              rows="4"
            ></textarea>
            <button 
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsMain;
