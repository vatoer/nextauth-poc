"use client";

import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="bg-blue-500 text-white py-4 px-8">
        <nav className="flex justify-between">
          <a href="/" className="text-white font-bold">
            Home
          </a>
          <div>
            <a href="/services" className="text-white mx-4">
              Services
            </a>
            <a href="/contact" className="text-white mx-4">
              Contact Us
            </a>
            <a href="/register" className="text-white mx-4">
              Register
            </a>
            <a href="/login" className="text-white mx-4">
              Login
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-grow py-8 px-8">
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Marketing Sentences</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum, tortor nec ultrices commodo, velit mauris tincidunt
            lacus, vel tincidunt justo nunc id nunc.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Subscription Plans</h2>
          <div className="flex justify-center">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md mx-4">
              <h3 className="text-lg font-bold mb-2">Basic</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet</p>
              <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-lg">
                Subscribe
              </button>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md mx-4">
              <h3 className="text-lg font-bold mb-2">Pro</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet</p>
              <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-lg">
                Subscribe
              </button>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md mx-4">
              <h3 className="text-lg font-bold mb-2">Premium</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet</p>
              <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-200 text-center py-4 px-8 absolute bottom-0 w-full">
        <p className="text-gray-600">
          © 2022 Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
