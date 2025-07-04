'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  allergens?: string[];
  isVegetarian?: boolean;
  isSpicy?: boolean;
  isChefSpecial?: boolean;
}

const menuData: MenuItem[] = [
  // Przystawki
  {
    id: 1,
    name: "Tatar z łososia",
    description: "Świeży łosoś norweski z cebulą, kaparami i żółtkiem, podawany z tostami",
    price: "45 zł",
    category: "przystawki",
    allergens: ["ryby", "jaja"]
  },
  {
    id: 2,
    name: "Foie gras na grzance",
    description: "Pasztet z kaczych wątróbek z konfiturą z fig i balsamico",
    price: "65 zł",
    category: "przystawki",
    allergens: ["gluten"]
  },
  {
    id: 3,
    name: "Krem z białych trufli",
    description: "Delikatny krem z białych trufli i parmezanem, podawany z grzankami",
    price: "38 zł",
    category: "przystawki",
    isVegetarian: true,
    allergens: ["gluten", "mleko"]
  },
  
  // Zupy
  {
    id: 4,
    name: "Bisque z homara",
    description: "Kremowa zupa z homara z szafranem i kremem, podawana z grzankami",
    price: "42 zł",
    category: "zupy",
    allergens: ["skorupiaki", "gluten", "mleko"]
  },
  {
    id: 5,
    name: "Zupa cebulowa",
    description: "Klasyczna zupa cebulowa z grzanką i serem gruyère",
    price: "28 zł",
    category: "zupy",
    isVegetarian: true,
    allergens: ["gluten", "mleko"]
  },
  
  // Dania główne
  {
    id: 6,
    name: "Filet z wołowiny wagyu",
    description: "Filet z wołowiny wagyu z truflowym purée, warzywami i sosem bordelaise",
    price: "180 zł",
    category: "dania-glowne",
    allergens: ["gluten"]
  },
  {
    id: 7,
    name: "Homar gotowany",
    description: "Homar gotowany z masłem czosnkowym, cytryną i ziołami",
    price: "220 zł",
    category: "dania-glowne",
    allergens: ["skorupiaki", "mleko"]
  },
  {
    id: 8,
    name: "Risotto z truflami",
    description: "Risotto z białymi truflami, parmezanem i białym winem",
    price: "85 zł",
    category: "dania-glowne",
    isVegetarian: true,
    allergens: ["mleko"]
  },
  {
    id: 9,
    name: "Kaczka po pekińsku",
    description: "Kaczka po pekińsku z sosem hoisin, naleśnikami i warzywami",
    price: "95 zł",
    category: "dania-glowne",
    isSpicy: true,
    allergens: ["gluten"]
  },
  
  // Desery
  {
    id: 10,
    name: "Crème brûlée",
    description: "Klasyczny deser z karmelizowanym cukrem i wanilią",
    price: "32 zł",
    category: "desery",
    isVegetarian: true,
    allergens: ["mleko", "jaja"]
  },
  {
    id: 11,
    name: "Soufflé czekoladowe",
    description: "Gorące soufflé z ciemnej czekolady z lodami waniliowymi",
    price: "38 zł",
    category: "desery",
    isVegetarian: true,
    allergens: ["mleko", "jaja"]
  },
  {
    id: 12,
    name: "Tarte Tatin",
    description: "Odwrócone ciasto jabłkowe z karmelem i lodami śmietankowymi",
    price: "35 zł",
    category: "desery",
    isVegetarian: true,
    allergens: ["gluten", "mleko"]
  }
];

const categories = [
  { id: 'wszystkie', name: 'Wszystkie', icon: '🍽️' },
  { id: 'przystawki', name: 'Przystawki', icon: '🥗' },
  { id: 'zupy', name: 'Zupy', icon: '🍲' },
  { id: 'dania-glowne', name: 'Dania główne', icon: '🥩' },
  { id: 'desery', name: 'Desery', icon: '🍰' }
];

function SkeletonCard() {
  return (
    <div className="bg-gray-100 rounded-lg p-6 h-full animate-pulse flex flex-col">
      <div className="h-6 w-2/3 bg-gray-200 rounded mb-4" />
      <div className="h-4 w-1/2 bg-gray-200 rounded mb-2" />
      <div className="h-4 w-full bg-gray-200 rounded mb-2" />
      <div className="h-4 w-1/3 bg-gray-200 rounded mb-4" />
      <div className="h-8 w-1/4 bg-gray-200 rounded self-end" />
    </div>
  );
}

const MenuItemCard = ({ item }: { item: MenuItem }) => (
  <div className="group relative bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 h-full flex flex-col">
    <div className="flex justify-between items-start mb-4">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-black transition-colors duration-300">
            {item.name}
          </h3>
          {item.isVegetarian && (
            <span className="px-2 py-1 text-xs font-medium bg-green-600 text-white rounded-full">
              Vege
            </span>
          )}
          {item.isSpicy && (
            <span className="px-2 py-1 text-xs font-medium bg-red-600 text-white rounded-full">
              🌶️
            </span>
          )}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          {item.description}
        </p>
        {item.allergens && (
          <div className="flex flex-wrap gap-1 mb-3">
            {item.allergens.map((allergen) => (
              <span 
                key={allergen}
                className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
              >
                {allergen}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="text-right ml-4">
        <span className="text-xl font-bold text-black">
          {item.price}
        </span>
      </div>
    </div>
  </div>
);

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('wszystkie');
  const [loading, setLoading] = useState(false);
  const [displayedItems, setDisplayedItems] = useState<MenuItem[]>(menuData);

  const filteredItems = selectedCategory === 'wszystkie' 
    ? menuData 
    : menuData.filter(item => item.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    if (category === selectedCategory) return;
    setLoading(true);
    setSelectedCategory(category);
    setTimeout(() => {
      setDisplayedItems(category === 'wszystkie' ? menuData : menuData.filter(item => item.category === category));
      setLoading(false);
    }, 350); // symulacja ładowania
  };

  return (
    <section id="menu" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Odkryj wyjątkowe smaki przygotowane przez naszego szefa kuchni. 
            Każde danie to dzieło sztuki kulinarnej.
          </p>
        </motion.div>

        {/* Kategorie */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-black text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Menu items */}
        <motion.div
          key={selectedCategory + (loading ? '-loading' : '-loaded')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px]"
        >
          {loading
            ? Array.from({ length: Math.max(filteredItems.length, 2) }).map((_, i) => (
                <SkeletonCard key={i} />
              ))
            : displayedItems.length > 0
              ? displayedItems.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))
              : (
                <div className="col-span-full text-center py-12">
                  <div className="text-6xl mb-4">🍽️</div>
                  <h3 className="text-2xl font-semibold text-black mb-2">
                    Brak dań w tej kategorii
                  </h3>
                  <p className="text-gray-600">
                    Sprawdź inne kategorie lub wróć później.
                  </p>
                </div>
              )}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center mt-20"
        >
          <p className="text-lg text-gray-600 mb-6">
            Chcesz zarezerwować stolik na specjalną okazję?
          </p>
          <a
            href="#rezerwacje"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Zarezerwuj stolik
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 