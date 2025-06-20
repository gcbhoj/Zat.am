import Button from "../UIComponents/Button";
import { FaWhatsapp } from "react-icons/fa6";
import { RiTelegram2Line } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { FiTwitter, FiYoutube } from "react-icons/fi";
import { FaGamepad, FaPhone, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { SiLeaderprice } from "react-icons/si";
import { RiDashboard2Line } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";
import { MdAttachEmail } from "react-icons/md";

const FooterComponent = () => {
  return (
    <div className="border border-amber-600 bg-opacity-50 mr-0.5 ml-0.5 mt-1 rounded-2xl grid grid-cols-2 grid-rows-4 sm:grid-cols-2 sm:grid-rows-none">
      {/* Social Media Section */}
      <div className="row-span-2 m-1 flex flex-col justify-center">
        <p className="font-serif text-center sm:text-sm md:text-base dark:text-gray-300">
          Connect with us...
        </p>
        <div className="flex flex-wrap justify-center">
          {[
            {
              icon: <FaFacebookF />,
              label: "Facebook",
              to: "https://www.facebook.com/SamskritaBharatiUS",
            },

            {
              icon: <RiTelegram2Line />,
              label: "Telegram",
              to: "https://t.me/samskritabharati",
            },
            {
              icon: <GrInstagram />,
              label: "Instagram",
              to: "https://www.instagram.com/samskritabharatiusa/",
            },
            {
              icon: <FiTwitter />,
              label: "Twitter",
              to: "https://x.com/samskritam",
            },
            {
              icon: <FiYoutube />,
              label: "Youtube",
              to: "https://www.youtube.com/@SamskritaBharatiUSA",
            },
            {
              icon: <FaLinkedin />,
              label: "Linkedin",
              to: "https://www.linkedin.com/company/samskrita-bharati/",
            },
          ].map((item, index) => (
            <div className="relative group m-1" key={index}>
              <Link to={item.to} target="blank">
                <Button
                  width="w-10"
                  height="h-10"
                  dark="dark:text-amber-500"
                  icon={<span className="text-2xl">{item.icon}</span>}
                />
                <span className="absolute left-full bottom-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                  {item.label}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="row-span-2 m-1 flex flex-col justify-center">
        <p className="font-serif text-center sm:text-sm md:text-base dark:text-gray-300">
          Quick Links:
        </p>
        <div className="flex flex-wrap justify-center">
          {[
            { icon: <GiHomeGarage />, label: "Home", to: "/" },
            { icon: <FaGamepad />, label: "Games", to: "/games" },
            {
              icon: <SiLeaderprice />,
              label: "Leaderboard",
              to: "/leaderboard",
            },
            {
              icon: <RiDashboard2Line />,
              label: "Dashboard",
              to: "/dashboard",
            },
            { icon: <FcAbout />, label: "About us", to: "/aboutus" },
          ].map((item, index) => (
            <div className="relative group m-1" key={index}>
              <Link to={item.to}>
                <Button
                  width="w-10"
                  height="h-10"
                  icon={<span className="text-2xl">{item.icon}</span>}
                  dark="dark:text-amber-500"
                />
              </Link>
              <span className="absolute left-full bottom-1/2 -translate-y-1/2 ml-1 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Us Row (Spans both columns) */}
      <div className="col-span-2 flex flex-col items-center">
        <p className="text-base font-serif dark:text-gray-300">Contact Us</p>
        <div className="flex flex-wrap justify-center">
          {[
            {
              icon: <FaWhatsapp />,
              label: "Whatsapp (240)449-0201",
              to: "https://wa.me/12404490201",
            },
            { icon: <FaPhone />, label: "Phone", to: "/" },
            {
              icon: <MdAttachEmail />,
              label: "Email",
              to: "mailto:code@samskritabharati.ca",
            },
          ].map((item, index) => (
            <div className="relative group m-1" key={index}>
              <Link to={item.to} target="blank">
                <Button
                  width="w-10"
                  height="h-10"
                  icon={<span className="text-2xl">{item.icon}</span>}
                  dark="dark:text-amber-500"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="col-span-2 flex justify-center">
        <p className="text-[12px] font-serif dark:text-gray-300">
          &copy; {new Date().getFullYear()} Samskrita Bharati. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;
