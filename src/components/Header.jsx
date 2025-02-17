import { IoHome } from 'react-icons/io5';
import React, { useState } from 'react';
import { Download, Handshake, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Ana Sayfa', icon: <IoHome size={16} />, href: '/' },
    { title: 'Hakkımızda', href: '/about' },
    { title: 'Ürünler', href: '/products' },
    { title: 'Blog', href: '/blog' },
    { title: 'İletişim', href: '/contact' },
  ];

  const buttons = [
    { title: 'E-Katalog', icon: <Download size={15} /> },
    { title: 'Teklif Al', icon: <Handshake size={15} /> },
  ];

  return (
    <nav className='w-full px-4 md:px-6 lg:px-8'>
      <div className='relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 pt-5'>
        {/* Logo */}
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          src='/images/logo.png'
          alt='Logo'
          className='h-12 w-auto sm:h-16 md:h-20'
        />

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className='rounded-lg p-2 text-gray-500 hover:bg-gray-100 focus:outline-none md:hidden'
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Desktop Navigation */}
        <div className='hidden md:flex md:items-center md:gap-5 lg:gap-8'>
          {menuItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              whileHover={{ scale: 1.05 }}
              className='flex items-center gap-1 text-sm text-[#999999] no-underline transition-colors hover:text-[#1c9dd9] lg:text-base'
            >
              {item.icon && <span className='text-current'>{item.icon}</span>}
              {item.title}
            </motion.a>
          ))}

          <div className='flex items-center gap-3'>
            {buttons.map((button, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='flex items-center gap-2 rounded-lg bg-[#1c9dd9] px-4 py-2 text-sm text-white shadow-md transition-all hover:bg-[#1c9dd9]/80 lg:text-base'
              >
                {button.title}
                {button.icon}
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='w-full overflow-hidden md:hidden'
            >
              <div className='flex flex-col gap-4 pb-6'>
                {menuItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className='flex items-center gap-2 text-sm text-[#999999] no-underline transition-colors hover:text-[#1c9dd9]'
                  >
                    {item.icon && <span>{item.icon}</span>}
                    {item.title}
                  </motion.a>
                ))}

                <div className='flex flex-col gap-3 pt-2'>
                  {buttons.map((button, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (menuItems.length + index) * 0.1 }}
                      className='flex items-center justify-center gap-2 rounded-lg bg-[#1c9dd9] px-4 py-2 text-sm text-white shadow-md transition-all hover:bg-[#1c9dd9]/80'
                    >
                      {button.title}
                      {button.icon}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Header;
