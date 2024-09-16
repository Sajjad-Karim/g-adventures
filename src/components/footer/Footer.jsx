import React from "react";
import footer from "../../assets/images/footer.png";
import { Link } from "react-router-dom";
// import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <div
      style={{ backgroundImage: `url(${footer})` }}
      className="px-[50px] h-[600px] py-[80px] w-[100%] bg-no-repeat bg-right-bottom"
    >
      <div className=" md:grid md:grid-cols-5 flex flex-col   ">
        <div>
          <h1 className="font-semibold text-[17px] py-2 text-[#242239]">
            G Adventure
          </h1>
          <div className="flex flex-col text-[#504e61] gap-2">
            <Link to="/">About us</Link>
            <Link to="/">Values</Link>
            <Link to="/">LGBTQ+ inclusivily</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Media Center</Link>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-[17px] py-2 text-[#242239]">
            Support
          </h1>
          <div className="flex flex-col text-[#504e61] gap-2">
            <Link to="/">About us</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">LFAQs</Link>
            <Link to="/">Go Adventures Travel resources</Link>
            <Link to="/">Pre-departure info</Link>
            <Link to="/">Safety updates</Link>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-[17px] py-2 text-[#242239]">
            Community
          </h1>
          <div className="flex flex-col text-[#504e61] gap-2">
            <Link to="/">Blog</Link>
            <Link to="/">Newsletter</Link>
            <Link to="/">Brochures</Link>
            <Link to="/">Affiliate program</Link>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-[17px] py-2 text-[#242239]">
            Travel Agents
          </h1>
          <div className="flex flex-col text-[#504e61] gap-2">
            <Link to="/">Agent login</Link>
            <Link to="/">VAgent registration</Link>
            <Link to="/">Find an agent</Link>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-[17px] py-2 text-[#242239]">
            G NATION
          </h1>
          <div className="flex  flex-wrap text-[#504e61] gap-2">
            <div className="border-[2px] border-[#4b5484] w-fit rounded-full p-1 cursor-pointer hover:bg-[#4b5484] ">
              <FaInstagram className="text-[18px] text-[#4b5484] hover:text-primary" />
            </div>
            <div className="border-[2px] border-[#4b5484] w-fit rounded-full p-1 cursor-pointer hover:bg-[#4b5484] ">
              <FaTiktok className="text-[18px] text-[#4b5484] hover:text-primary" />
            </div>
            <div className="border-[2px] border-[#4b5484] w-fit rounded-full p-1 cursor-pointer hover:bg-[#4b5484] ">
              <FaFacebookF className="text-[18px] text-[#4b5484] hover:text-primary" />
            </div>
            <div className="border-[2px] border-[#4b5484] w-fit rounded-full p-1 cursor-pointer hover:bg-[#4b5484] ">
              <FaPinterestP className="text-[18px] text-[#4b5484] hover:text-primary" />
            </div>
            <div className="border-[2px] border-[#4b5484] w-fit rounded-full p-1 cursor-pointer hover:bg-[#4b5484] ">
              <FaXTwitter className="text-[18px] text-[#4b5484] hover:text-primary" />
            </div>
            <div className="border-[2px] border-[#4b5484] w-fit rounded-full p-1 cursor-pointer hover:bg-[#4b5484] ">
              <FaYoutube className="text-[18px] text-[#4b5484] hover:text-primary" />
            </div>
            <div className="border-[2px] border-[#4b5484] w-fit rounded-full p-1 cursor-pointer hover:bg-[#4b5484] ">
              <FaLinkedinIn className="text-[18px] text-[#4b5484] hover:text-primary" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <select className="border-slate-300 border-[1.5px] p-[4px] cursor-pointer">
          <option value="English">English</option>
          <option value="Deutsch">Spanish</option>
      
        </select>
      </div>
    </div>
  );
};

export default Footer;
