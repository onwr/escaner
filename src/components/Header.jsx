import React, { useState } from "react";
import { BiDownload, BiInfoCircle, BiSolidOffer } from "react-icons/bi";
import { FiHome, FiMenu, FiX } from "react-icons/fi";
import { LuDrill } from "react-icons/lu";
import { ImBlog } from "react-icons/im";
import { MdContactPhone } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [language, setLanguage] = useState("tr");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { icon: <FiHome />, text: "Anasayfa", href: "/" },
    { icon: <BiInfoCircle />, text: "Hakkımızda", href: "/about" },
    { icon: <LuDrill />, text: "Ürünler", href: "/products" },
    { icon: <ImBlog />, text: "Blog", href: "/blog" },
    { icon: <MdContactPhone />, text: "İletişim", href: "/contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <header className="bg-white py-4 px-6 shadow">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <img src="/images/logo.png" className="w-36 md:w-52" alt="logo" />
        </div>

        <nav className="hidden md:flex items-center justify-center gap-5">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="flex text-lg font-medium items-center gap-1 hover:text-gray-500 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon} {link.text}
            </motion.a>
          ))}
        </nav>

        <div className="hidden md:flex justify-end items-center gap-2">
          <motion.button
            className="flex items-center font-medium justify-center gap-2 bg-[#009fe3]/90 text-white py-2 px-3 text-sm hover:rounded-xl cursor-pointer duration-300"
            whileHover={{ scale: 1.05, borderRadius: "0.75rem" }}
            whileTap={{ scale: 0.95 }}
          >
            E-Katalog <BiDownload />
          </motion.button>
          <motion.button
            className="flex font-medium justify-center items-center gap-2 bg-[#009fe3]/90 text-white py-2 px-3 text-sm hover:rounded-xl cursor-pointer duration-300"
            whileHover={{ scale: 1.05, borderRadius: "0.75rem" }}
            whileTap={{ scale: 0.95 }}
          >
            Teklif Al <BiSolidOffer />
          </motion.button>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="text-black text-xs outline-none"
          >
            <option value="tr">TR</option>
            <option value="en">EN</option>
          </select>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="text-black text-xs outline-none"
          >
            <option value="tr">TR</option>
            <option value="en">EN</option>
          </select>
          <motion.button
            onClick={toggleMenu}
            className="text-2xl p-2"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden z-50 absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-6"
          >
            <motion.nav className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="flex items-center gap-2 text-lg font-medium py-2 border-b border-gray-100"
                  variants={itemVariants}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon} {link.text}
                </motion.a>
              ))}
            </motion.nav>

            <motion.div
              className="flex flex-col gap-2 mt-4"
              variants={itemVariants}
            >
              <motion.button
                className="flex items-center font-medium justify-center gap-2 bg-[#1f2730] text-white py-2 px-3 text-sm rounded cursor-pointer w-full"
                whileTap={{ scale: 0.95 }}
              >
                E-Katalog <BiDownload />
              </motion.button>
              <motion.button
                className="flex font-medium justify-center items-center gap-2 bg-[#1f2730] text-white py-2 px-3 text-sm rounded cursor-pointer w-full"
                whileTap={{ scale: 0.95 }}
              >
                Teklif Al <BiSolidOffer />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
