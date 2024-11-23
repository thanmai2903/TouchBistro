import React from "react";
function footer() {
  return (
    <div>
      <div className="bg-blue-950 text-white lg:py-10 py-5 lg:flex cursor-pointer">
        <ul className="sm:ml-10 lg:ml-14 mt-10 mr-8">
          <li className="text-2xl mt-10 mb-5 hover:text-blue-400">Products</li>
          <li className="hover:text-blue-400">Point of Sale</li>
          <li className="hover:text-blue-400">Reporting & Analytics</li>
          <li className="hover:text-blue-400">Payment Processing</li>
          <li className="hover:text-blue-400">Staff Management</li>
          <li className="hover:text-blue-400">Floor Plan & Table Management</li>
          <li className="hover:text-blue-400">Menu Management</li>
          <li className="hover:text-blue-400">Tableside Ordering</li>
          <li className="hover:text-blue-400">Front of House</li>
          <li className="hover:text-blue-400">Payments</li>
          <li className="hover:text-blue-400">Customer Facing Display</li>
        </ul>
        <ul className="sm:ml-10 lg:ml-20 mt-10 mr-8">
          <li className="text-2xl mt-10 mb-5 hover:text-blue-400">
            Back of House
          </li>
          <li className="hover:text-blue-400">Inventory Management</li>
          <li className="hover:text-blue-400">Labor Management</li>
          <li className="hover:text-blue-400">Kitchen Display System</li>
          <li className="hover:text-blue-400">Profit Management</li>
          <li className="hover:text-blue-400">Guest Engagement</li>
          <li className="hover:text-blue-400">Gift Cards</li>
          <li className="hover:text-blue-400">Loyalty</li>
          <li className="hover:text-blue-400">Marketing</li>
          <li className="hover:text-blue-400">Online Ordering</li>
          <li className="hover:text-blue-400">Reservations</li>
        </ul>
        <ul className=" sm:ml-10 lg:ml-20 mt-10 mr-8">
          <li className="text-2xl mt-10 mb-5 hover:text-blue-400">
            Restaurant Types
          </li>
          <li className="hover:text-blue-400">Full Service Restaurant</li>
          <li className="hover:text-blue-400">Fine Dining</li>
          <li className="hover:text-blue-400">Family Style</li>
          <li className="hover:text-blue-400">Multi Unit</li>
          <li className="hover:text-blue-400">Quick Service Restaurant</li>
          <li className="hover:text-blue-400">Fast Casual</li>
          <li className="hover:text-blue-400">Bar & Club</li>
          <li className="hover:text-blue-400">Brewery & Winery</li>
        </ul>
        <ul className=" sm:ml-10 lg:ml-20 mt-10 mr-3">
          <li className="text-2xl mt-10 mb-5 hover:text-blue-400">Resources</li>
          <li className="hover:text-blue-400">Blog</li>
          <li className="hover:text-blue-400">Tools</li>
          <li className="hover:text-blue-400">Industry Report</li>
          <li className="hover:text-blue-400">QR Code Menu</li>
          <li className="hover:text-blue-400">Compare</li>
          <li className="hover:text-blue-400">Customer Hub</li>
          <li className="hover:text-blue-400">Help Articles</li>
          <li className="hover:text-blue-400">
            TouchBistro POS Customer Support
          </li>
        </ul>
        <ul className=" sm:ml-10 lg:ml-20 mt-10 mr-16">
          <li className="text-2xl mt-10 mb-5 hover:text-blue-400">Company</li>
          <li className="hover:text-blue-400">About Us</li>
          <li className="hover:text-blue-400">Careers</li>
          <li className="hover:text-blue-400">News</li>
          <li className="hover:text-blue-400">Contact Us</li>
          <li className="hover:text-blue-400">Referrals</li>
          <li className="hover:text-blue-400">Partner Program</li>
        </ul>
      </div>
      <img
        className="w-40 sm:ml-60 lg:ml-[600px]"
        src="data:image/png;base64,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"
      />
    </div>
  );
}
export default footer;
