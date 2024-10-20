import React from 'react';
import styles from './Footer.module.css';



export default function Footer() {
  return (
    <footer>
    <div>
    {/* Introductory Section */}
    <div className="intro-container bg-gradient-to-r from-blue-500 to-purple-600 py-8">
      <div className="container mx-auto text-center text-white">
        <h1 className="text-4xl font-extrabold mb-4">I'm a Web Developer</h1>
        <p className="text-lg mb-6">
          Welcome to my websites. I create stunning and responsive websites.
        </p>
        <p className="text-gray-200">Let's connect and build something amazing!</p>
      </div>
    </div>

    {/* Footer Section */}
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto flex flex-col items-center">
        {/* View My Projects link */}
        <a href="#" className="text-lg hover:underline mb-2">
          View My Projects
        </a>

        {/* Social Links */}
        <div className="flex space-x-6 mb-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-300">
          © 2024 Saniya Khan
        </p>
      </div>
    </footer>
  </div>
    </footer>
  );
}

