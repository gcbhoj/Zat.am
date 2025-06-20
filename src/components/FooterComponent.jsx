import Button from "../UIComponents/Button";
import { FaFacebookMessenger, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { RiTelegram2Line } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { FiTwitter, FiYoutube } from "react-icons/fi";
import { FaGamepad } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { SiLeaderprice } from "react-icons/si";
import { RiDashboard2Line } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";

const FooterComponent = () => {
  return (
    <div className="border border-amber-600 bg--50 h-24 mr-0.5 ml-0.5 rounded-2xl grid grid-cols-2 grid-rows-3">
      <div className="row-span-2 m-1 flex flex-col justify-center align-center">
        <p className="font-serif justify-center flex sm:text-[12px] md:text-base dark:text-gray-300">
          Connect with us...
        </p>
        <div className="flex flex-wrap justify-center align-middle">
          <div className="relative group ml-2 mr-2 ">
            <Button
              width="w-10"
              height="h-10"
              dark="dark:text-amber-500"
              icon={<FaFacebookMessenger className="text-2xl" />}
            />
            <span className="absolute left-full bottom-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-sm dark:text-white text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              Facebook
            </span>
          </div>
          <div className="relative group mr-2">
            <Button
              width="w-10"
              height="h-10"
              dark="dark:text-amber-500"
              icon={<FaWhatsapp className="text-2xl" />}
            />
            <span className="absolute left-full bottom-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-sm dark:text-white text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              Whatsapp
            </span>
          </div>
          <div className="relative group mr-2">
            <Button
              width="w-10"
              height="h-10"
              dark="dark:text-amber-500"
              icon={<RiTelegram2Line className="text-2xl" />}
            />
            <span className="absolute left-full bottom-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-sm dark:text-white text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              Telegram
            </span>
          </div>
          <div className="relative group mr-2">
            <Button
              width="w-10"
              height="h-10"
              dark="dark:text-amber-500"
              icon={<GrInstagram className="text-2xl" />}
            />
            <span className="absolute left-full bottom-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-sm dark:text-white text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              Instagram
            </span>
          </div>
          <div className="relative group mr-2">
            <Button
              width="w-10"
              height="h-10"
              dark="dark:text-amber-500"
              icon={<FiTwitter className="text-2xl" />}
            />
            <span className="absolute left-full bottom-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-sm dark:text-white text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              Twitter
            </span>
          </div>
          <div className="relative group mr-2">
            <Button
              width="w-10"
              height="h-10"
              dark="dark:text-amber-500"
              icon={<FiYoutube className="text-2xl" />}
            />
            <span className="absolute left-full bottom-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-sm dark:text-white text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              Youtube
            </span>
          </div>
          <div className="relative group mr-2">
            <Button
              width="w-10"
              height="h-10"
              dark="dark:text-amber-500"
              icon={<FaLinkedin className="text-2xl" />}
            />
            <span className="absolute left-full bottom-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-sm dark:text-white text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              Linkedin
            </span>
          </div>
        </div>
      </div>
      <div className="rounded row-span-2 m-1 flex flex-col justify-center align-center">
        <p className="font-serif justify-center flex sm:text-[12px] md:text-base dark:text-gray-300">
          Quick Links:
        </p>
        <div className="flex flex-row justify-center align-middle">
          <div className="relative group mr-5 ml-5">
            <Button
              width="w-10"
              height="h-10"
              icon={<GiHomeGarage className="text-2xl" />}
              dark="dark:text-amber-500"
            />
            <span className="absolute left-full top-1/5 -translate-y-1/2 ml-1 px-1 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              Home
            </span>
          </div>
          <div className="relative group mr-5">
            <Button
              width="w-10"
              height="h-10"
              icon={<FaGamepad className="text-2xl" />}
              dark="dark:text-amber-500"
            />
            <span className="absolute left-full top-1/5 -translate-y-1/2 ml-1 px-1 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              Games
            </span>
          </div>
          <div className="relative group mr-5">
            <Button
              width="w-10"
              height="h-10"
              icon={<SiLeaderprice className="text-2xl" />}
              dark="dark:text-amber-500"
            />
            <span className="absolute left-full top-1/5 -translate-y-1/2 ml-1 px-1 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              Leaderboard
            </span>
          </div>
          <div className="relative group mr-5">
            <Button
              width="w-10"
              height="h-10"
              icon={<RiDashboard2Line className="text-2xl" />}
              dark="dark:text-amber-500"
            />
            <span className="absolute left-full top-1/5 -translate-y-1/2 ml-1 px-1 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              Dashboard
            </span>
          </div>
          <div className="relative group mr-10">
            <Button
              width="w-10"
              height="h-10"
              icon={<FcAbout className="text-2xl" />}
              dark="dark:text-amber-500"
            />
            <span className="absolute left-full top-1/5 -translate-y-1/2 ml-1 px-1 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              About us
            </span>
          </div>
        </div>
      </div>
      <div className="col-span-2 flex justify-center m-0.5">
        <p className="text-[12px] font-serif dark:text-gray-300">
          &copy; {new Date().getFullYear()} Samskrita Bharati. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;
