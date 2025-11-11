
import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const Work = ({ isDarkMode }) => {

  return (
    <motion.div
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h4 className="text-center mb-2 text-lg  ">My Portfolio</h4>
      <h2 className="text-center text-5xl dark:text-darkHover">My Latest Work</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12  ">
        Welcome to my portfolio! Here, you'll find a curated selection of my
        latest projects that showcase my skills and expertise in web
        development.
      </p>
      <div className="grid grid-cols-auto my-10 gap-6 dark:text-black">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show More
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="Right Arrow"
          className="w-4"
        />
      </a>
  </motion.div>
  );
};

export default Work;
