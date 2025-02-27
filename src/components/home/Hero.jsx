import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const equipmentCategories = [
    {
      id: 1,
      title: "Başlık",
      subtitle: "Alt Başlık",
      icon: "/images/logo.png",
      imageSrc: "/images/makina.png",
      color: "#19a8e6",
    },
    {
      id: 2,
      title: "Başlık",
      subtitle: "Alt Başlık",
      icon: "/images/logo.png",
      imageSrc: "/images/makina.png",
      color: "#19a8e6",
    },
    {
      id: 3,
      title: "Başlık",
      subtitle: "Alt Başlık",
      icon: "/images/logo.png",
      imageSrc: "/images/makina.png",
      color: "#19a8e6",
    },
  ];

  return (
    <div className="w-full h-auto md:h-[85vh] overflow-hidden relative">
      <div className="hidden md:flex h-full w-full">
        {equipmentCategories.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative flex-1 overflow-hidden group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            whileHover={{ flex: 2 }}
            style={{
              transition: "all 0.2s",
            }}
          >
            <div
              className="absolute inset-0 grayscale-0 transition-all duration-500 hover:grayscale-0"
              style={{
                backgroundImage: `url(${item.imageSrc})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                clipPath:
                  index < equipmentCategories.length - 1
                    ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                    : "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div className="absolute inset-0 border border-black/20 hover:border-black/60 transition-all duration-300"></div>            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-start mt-10 z-10 px-4">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                className="mb-4"
              >
                <div className="w-16 h-16 relative">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-full h-full"
                    style={{ fill: item.color }}
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                  </svg>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
                className="text-center"
              >
                <h3 className="text-black text-2xl group-hover:text-[#19a8e6] duration-300 group-hover:text-5xl font-bold">
                  {item.title}
                </h3>
                <p className="text-black/70 text-xl group-hover:text-2xl duration-300">
                  {item.subtitle}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col md:hidden w-full">
        {equipmentCategories.map((item, index) => (
          <motion.div
            key={`mobile-${item.id}`}
            className="relative overflow-hidden group h-[30vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            whileTap={{ scale: 0.98 }}
            style={{
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div
              className="absolute inset-0 grayscale transition-all duration-500 group-hover:grayscale-0 group-active:grayscale-0"
              style={{
                backgroundImage: `url(${item.imageSrc})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 group-active:bg-black/10 transition-colors"></div>
            </div>

            <div className="absolute inset-0 flex flex-row items-center justify-center z-10 px-4">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                className="mr-4"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 relative">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-full h-full"
                    style={{ fill: item.color }}
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                  </svg>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
              >
                <h3 className="text-black text-xl sm:text-2xl group-hover:text-[#19a8e6] group-active:text-[#19a8e6] duration-300 group-hover:text-3xl group-active:text-3xl font-bold">
                  {item.title}
                </h3>
                <p className="text-black/70 text-base sm:text-xl group-hover:text-xl group-active:text-xl duration-300">
                  {item.subtitle}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
