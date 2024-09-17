import React, { useState } from "react";
import footer from "../../assets/images/footer.png";
import { Link } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import {
  FaTiktok,
  FaFacebookF,
  FaPinterestP,
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

const footerData = [
  {
    title: "G Adventure",
    links: [
      "About us",
      "Values",
      "LGBTQ+ inclusivity",
      "Careers",
      "Media Center",
    ],
  },
  {
    title: "Support",
    links: ["Contact us", "FAQs", "Pre-departure info", "Safety updates"],
  },
  {
    title: "Community",
    links: ["Blog", "Newsletter", "Affiliate program"],
  },
  {
    title: "Travel Agents",
    links: ["Agent login", "Agent registration", "Find an agent"],
  },
];

const socialIcons = [
  { icon: FaInstagram },
  { icon: FaTiktok },
  { icon: FaFacebookF },
  { icon: FaPinterestP },
  { icon: FaXTwitter },
  { icon: FaYoutube },
  { icon: FaLinkedinIn },
];

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    // If the clicked section is already active, close it by setting activeIndex to null
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      style={{ backgroundImage: `url(${footer})` }}
      className="px-[50px] min-h-[600px] py-[80px] w-full bg-no-repeat bg-right-bottom"
    >
      <div className="grid md:grid-cols-5 gap-6">
        {footerData.map((section, index) => (
          <div key={index}>
            <div
              className="flex justify-between items-center"
              onClick={() => handleToggle(index)}
            >
              <h1 className="font-semibold text-[17px] py-2 text-[#242239]">
                {section.title}
              </h1>
              <IoIosArrowDropdownCircle className="md:hidden block text-[20px] text-[#c8bebb]" />
            </div>
            <div
              className={`flex flex-col text-[#504e61] gap-2 ${
                activeIndex === index ? "block" : "hidden"
              }`}
            >
              {section.links.map((link, i) => (
                <Link to="/" key={i}>
                  {link}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div>
          <h1 className="font-semibold text-[17px] py-2 text-[#242239]">
            G NATION
          </h1>
          <div className="flex flex-wrap gap-2">
            {socialIcons.map((social, index) => (
              <div
                key={index}
                className="border-[2px] border-[#4b5484] rounded-full p-1 cursor-pointer hover:bg-[#4b5484]"
              >
                <social.icon className="text-[18px] text-[#4b5484]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-6 mt-12 mb-8">
        <select className="border-slate-300 border-[1.5px] p-[4px] cursor-pointer">
          <option value="English">English</option>
          <option value="Deutsch">Spanish</option>
        </select>
        <select className="border-slate-300 border-[1.5px] p-[4px] cursor-pointer">
          {[
            "Pakistan",
            "India",
            "United States",
            "United Kingdom",
            "Germany",
            "France",
            "Japan",
            "China",
            "Italy",
          ].map((country, i) => (
            <option key={i}>{country}</option>
          ))}
        </select>
      </div>

      <hr className="w-[59%]" />
      <div className="flex justify-between items-center text-[12px] text-[#242239] mt-12">
        <div>© 2024 G Adventures. All rights reserved.</div>
        <div className="flex gap-6">
          <p>Terms & Conditions</p>
          <ul className="list-disc flex gap-6">
            <li>Privacy Policy</li>
            <li>Manage Cookies</li>
            <li>API</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
