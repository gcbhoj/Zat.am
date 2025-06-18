import Button from "../UIComponents/Button";
import { FaGamepad } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="border border-amber-400 h-24 rounded-3xl m-0.5 z-10 flex flex-wrap justify-evenly items-center p-4">
      {/* Desktop Buttons */}
      <div className="hidden sm:flex space-x-4">
        <Button
          border="border-1"
          background="bg-gray-300"
          label="Games"
          width="w-20"
          height="h-12"
          dark="dark:bg-amber-500"
          margin="mr-5"
        />
        <Button
          border="border-1"
          background="bg-gray-300"
          label="Settings"
          width="w-20"
          height="h-12"
          dark="dark:bg-amber-500"
          margin="mr-5"
        />
      </div>

      {/* Mobile Icon Buttons */}
      <div className="flex sm:hidden space-x-4">
        <Button
          width="w-10"
          height="h-10"
          icon={<FaGamepad className="text-base" />}
          background="bg-gray-500"
          dark="dark:bg-amber-500"
          margin="mr-5"
        />
        <Button
          width="w-10"
          height="h-10"
          icon={<FaGamepad className="text-base" />}
          background="bg-gray-500"
          dark="dark:bg-amber-500"
          margin="mr-5"
        />
      </div>
    </div>
  );
};

export default Navbar;
