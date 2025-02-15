import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#222] text-white py-8">
      {/* Top section with logo/brand, navigation, and social/contact info */}
      <div className="flex flex-wrap justify-around mb-8 px-4">
        
        {/* Left Column: Logo and Title */}
        <div className="flex-1 min-w-[250px] m-4">
          {/* Replace the src below with your logo’s path */}
          <img
            src="path/to/ccy-logo.png"
            alt="CCY Logo"
            className="w-14 mb-4"
          />
          <h3 className="text-lg font-semibold uppercase">
            THE CONCERNED CITIZENS OF YENDI
          </h3>
        </div>

        {/* Middle Column: Navigation Links */}
        <div className="flex-1 min-w-[250px] m-4">
          <h4 className="mb-2 font-semibold">About us</h4>
          <h4 className="mb-2 font-semibold">News &amp; Announcements</h4>
          <h4 className="mb-2 font-semibold">Event Calendar</h4>
          <h4 className="mb-2 font-semibold">Event Gallery</h4>
          <h4 className="mb-2 font-semibold">Membership</h4>
          <h4 className="mb-2 font-semibold">Contact us</h4>
        </div>

        {/* Right Column: Social & Contact */}
        <div className="flex-1 min-w-[250px] m-4">
          <h3 className="text-lg font-semibold mb-4">Let’s Social</h3>
          <p className="mb-2">
            <strong>Phone:</strong>{' '}
            <a href="tel:+233123456789" className="text-white hover:underline">
              +233 123 456 789
            </a>
          </p>
          <p className="mb-2">
            <strong>Facebook:</strong>{' '}
            <a
              href="mailto:ccy@facebook.com"
              className="text-white hover:underline"
            >
              ccy@facebook.com
            </a>
          </p>
          <p className="mb-2">
            <strong>Email:</strong>{' '}
            <a
              href="mailto:info@ccy.ghana.org"
              className="text-white hover:underline"
            >
              info@ccy.ghana.org
            </a>
          </p>
          <p className="mb-2">
            <strong>Phone:</strong>{' '}
            <a href="tel:+233123456789" className="text-white hover:underline">
              +233 123 456 789
            </a>
          </p>
        </div>
      </div>

      {/* Bottom section with rights and extra links */}
      <div className="text-center text-sm px-4">
        <p className="my-2">
          All rights reserved. The Concerned Citizens of Yendi
        </p>
        <p className="my-2 space-x-4">
          <a href="#terms" className="hover:underline inline-block">
            Terms &amp; Conditions
          </a>
          <a href="#privacy" className="hover:underline inline-block">
            Privacy Policy
          </a>
          <a href="#cookies" className="hover:underline inline-block">
            Cookies Policy
          </a>
        </p>
        <p className="my-2">
          Website developed by: <strong>ALBASA WEB</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
