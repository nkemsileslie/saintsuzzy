import React from 'react';
import { Instagram, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Gold Silk Gown',
    price: '$899',
    image: 'Images/gold.jpg?auto=format&fit=crop&q=80&w=720',
    instagram: 'https://instagram.com/saintsuzzy',
    description: 'A stunning pink tulle gown with dramatic ruffles and elegant draping.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 2,
    name: 'Velvet Brown Dress',
    price: '$349',
    image: 'Images/brown.jpg?auto=format&fit=crop&q=80&w=720',
    instagram: 'https://instagram.com/saintsuzzy',
    description: 'Luxurious velvet blazer perfect for evening occasions.',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 3,
    name: 'Teal Evening Gown',
    price: '$599',
    image: 'Images/mint.jpg?auto=format&fit=crop&q=80&w=720',
    instagram: 'https://instagram.com/saintsuzzy',
    description: 'Elegant evening gown with crystal embellishments.',
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 4,
    name: 'Satin Emerald Dress',
    price: '$429',
    image: 'Images/emerald.jpg?auto=format&fit=crop&q=80&w=720',
    instagram: 'https://instagram.com/saintsuzzy',
    description: 'Luxurious satin two-piece set for special occasions.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 5,
    name: 'Ethereal Pink Silk Dress',
    price: '$289',
    image: 'Images/mat.jpg?auto=format&fit=crop&q=80&w=720',
    instagram: 'https://instagram.com/saintsuzzy',
    description: 'Flowing silk dress with delicate details.',
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 6,
    name: 'Enchanted Orange Evening grown',
    price: '$649',
    image: 'Images/orange.jpg?auto=format&fit=crop&q=80&w=720',
    instagram: 'https://instagram.com/saintsuzzy',
    description: 'Stunning two-piece evening set with intricate beading.',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 7,
    name: 'Purple Evening grown',
    price: '$649',
    image: 'Images/purple.jpg?auto=format&fit=crop&q=80&w=720',
    instagram: 'https://instagram.com/saintsuzzy',
    description: 'Stunning two-piece evening set with intricate beading.',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 8,
    name: 'Velvet Green Dress',
    price: '$349',
    image: 'Images/green.jpg?auto=format&fit=crop&q=80&w=720',
    instagram: 'https://instagram.com/saintsuzzy',
    description: 'Luxurious velvet blazer perfect for evening occasions.',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 9,
    name: 'Pink Tulle Gown',
    price: '$899',
    image: 'Images/pinkdress.jpg?auto=format&fit=crop&q=80&w=720',
    instagram: 'https://instagram.com/saintsuzzy',
    description: 'A stunning pink tulle gown with dramatic ruffles and elegant draping.',
    sizes: ['S', 'M', 'L', 'XL'],
  }
];

function Navigation() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-light tracking-widest text-gray-800">
            SAINTSUZZY
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-800 hover:text-gray-600">Home</Link>
            <Link to="/shop" className="text-gray-800 hover:text-gray-600">Shop</Link>
            <Link to="/about" className="text-gray-800 hover:text-gray-600">About</Link>
          </div>
          
          <a
            href="https://instagram.com/saintsuzzy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-screen"
      >
        <div className="absolute inset-0">
          <img
            src="Images/pinkdress.jpg"
            alt="Pink Tulle Dream Gown"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/5"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-6xl font-light tracking-wider mb-4">Pink Tulle Dream</h2>
            <p className="text-lg md:text-xl font-light tracking-wide mb-8">Elegance redefined for the modern woman</p>
            <Link
              to="/shop"
              className="inline-flex items-center px-8 py-3 bg-white text-gray-900 text-base font-light tracking-wide hover:bg-gray-100 transition-colors duration-300"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Featured Collection */}
      <section className="py-24 bg-[#f8f5f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-light tracking-wide text-center mb-16"
          >
            Featured Collection
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.slice(0, 4).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-light text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.price}</p>
                  </div>
                  <a
                    href={product.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span>Buy</span>
                    <ShoppingBag size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Shop() {
  return (
    <div className="pt-16">
      <section className="py-24 bg-[#f8f5f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-light tracking-wide text-center mb-16"
          >
            All Collections
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-light text-gray-900">{product.name}</h3>
                      <p className="text-sm text-gray-500">{product.price}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {product.sizes.map(size => (
                        <span key={size} className="text-xs border px-2 py-1 text-gray-600">
                          {size}
                        </span>
                      ))}
                    </div>
                    <a
                      href={product.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors duration-300 flex items-center space-x-2"
                    >
                      <span>Buy Now</span>
                      <ShoppingBag size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function About() {
  return (
    <div className="pt-16">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80"
                alt="About"
                className="w-full h-[600px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-light tracking-wide">About Saintsuzzy</h2>
              <p className="text-gray-600 leading-relaxed">
                Saintsuzzy represents the perfect blend of contemporary elegance and timeless sophistication. 
                Each piece in our collection is thoughtfully designed to empower the modern woman with 
                confidence and grace.
              </p>
              <a
                href="https://instagram.com/saintsuzzy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-900 hover:text-gray-700"
              >
                <span>Follow us on Instagram</span>
                <Instagram size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f8f5f2]">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-[#f8f5f2] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-light tracking-wide text-gray-900 mb-4">Saintsuzzy</h2>
              <p className="text-gray-600 mb-6">Elegance in every detail</p>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://instagram.com/saintsuzzy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;