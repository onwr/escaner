import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('Kategori 1');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 500);
    }, []);

    const categories = ['Kategori 1', 'Kategori 2', 'Kategori 3', 'Kategori 4'];

    const productsData = {
        'Kategori 1': [
            {
                id: 1,
                title: 'Makina 1',
                description: 'Açıklama',
                image: '/images/makina.png',
                link: '#'
            },
            {
                id: 2,
                title: 'Makina 1.2',
                description: 'Yüksek performanslı endüstriyel çözüm',
                image: '/images/makina.png',
                link: '#'
            },
        ],
        'Kategori 2': [
            {
                id: 1,
                title: 'Ürün 2.1',
                description: 'Bu makina, Kategori 2\'deki en iyi ürünlerden biridir.',
                image: '/images/makina.png',
                link: '#'
            },
            {
                id: 2,
                title: 'Ürün 2.2',
                description: 'Yenilikçi teknoloji ile üretilmiştir.',
                image: '/images/makina.png',
                link: '#'
            },
        ],
        'Kategori 3': [
            {
                id: 1,
                title: 'Ürün 3.1',
                description: 'Bu makina, Kategori 3\'deki en iyi ürünlerden biridir.',
                image: '/images/makina.png',
                link: '#'
            },
            {
                id: 2,
                title: 'Ürün 3.2',
                description: 'Endüstriyel standartlara uygun üretim',
                image: '/images/makina.png',
                link: '#'
            },
        ],
        'Kategori 4': [
            {
                id: 1,
                title: 'Ürün 4.1',
                description: 'Bu makina, Kategori 4\'deki en iyi ürünlerden biridir.',
                image: '/images/makina.png',
                link: '#'
            },
            {
                id: 2,
                title: 'Ürün 4.2',
                description: 'Modern teknoloji ile tasarlanmış çözüm',
                image: '/images/makina.png',
                link: '#'
            },
        ],
    };

    return (
        <div className='bg-white border-t border-[#87AEC4] text-black py-5'>
            <div className='container mx-auto px-4'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='flex flex-col items-center justify-center mb-6'
                >
                    <img src="/images/logo.png" className="w-40 mb-6" alt="Logo" />
                    <h1 className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00A0E3] via-[#00A0E3]/80 to-[#00A0E3]/60'>
                        MAKİNALARIMIZ
                    </h1>
                </motion.div>

                <div className='flex flex-wrap items-center justify-center gap-4 mb-8'>
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${selectedCategory === category
                                ? 'bg-[#17A8E5] ring-2 shadow-2xl text-white'
                                : 'bg-gradient-to-r from-[#17A8E5] to-black/60 hover:bg-blue-700 text-white'
                                }`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                <AnimatePresence mode='wait'>
                    <motion.div
                        key={selectedCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'
                    >
                        {productsData[selectedCategory].map((product) => (
                            <motion.div
                                key={product.id}
                                whileHover={{ scale: 1.02 }}
                                className='bg-gradient-to-r from-[#00A0E3]/5 via-white to-[#00A0E3]/10 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300'
                            >
                                <div className='flex flex-col md:flex-row h-full'>
                                    <div className='md:w-1/2 relative overflow-hidden'>
                                        <div className='aspect-square'>
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="w-full h-full  object-contain transform transition-transform duration-500 hover:scale-110"
                                            />
                                        </div>
                                        <div className='absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent'></div>
                                    </div>
                                    <div className='p-6 md:w-1/2 flex flex-col justify-center'>
                                        <h3 className='text-2xl font-bold mb-4 text-blue-400'>{product.title}</h3>
                                        <p className='text-gray-300 leading-relaxed mb-6'>{product.description}</p>
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={product.link}
                                            className='inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#00A0E3] via-[#00A0E3]/80 to-[#00A0E3]/60 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 self-start'
                                        >
                                            Detayları Gör
                                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Products;