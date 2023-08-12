import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQge3YVGbtPb_7g2TNHYW0gvU9OIldbkh_HFw&usqp=CAU"
        alt="avatar"
        className="w-32 h-32 mx-auto border rounded-full "
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
      <span className="text-purple-500 ">Ankit</span>
        <span className="text-pink-500 ">Yadav</span>
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Web Developer
      </p>
      {/* Resume */}
      <a
        href="/assets/AnkitYadav.pdf"
        download="AnkitYadav.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-blue-500 dark:bg-dark-200 md:w-full ">
      <a href="https://www.instagram.com/_live_ankit/">
          <AiOutlineInstagram className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/ankit-yadav-852259248">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/LiveWithCodeAnkit">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Gujarat,India </span>
        </div>
        <p className="my-2 "> ankityadav119live@gmail.com </p>
        <p className="my-2"> 7860912118 </p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-black bg-black rounded-full cursor-pointer bg-gradient-to-r from-pink-200 to-blue-200 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:ankityadav119live@gmail.com")}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-black bg-black rounded-full cursor-pointer bg-gradient-to-r from-pink-200 to-blue-200 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Toggle Theme
      </button>
    </>
  );
};

export default Sidebar;