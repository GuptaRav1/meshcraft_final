import React, { useMemo, useState } from 'react'
import AssetCard from './AssetCard'
import { assets } from '../utils/3dAssetData'


const MarketPlace = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'High Poly', 'Low Poly', 'Character', 'Landscape'];

  const filteredAssets = useMemo(() => {
    return selectedCategory === "All" ? assets :
      assets.filter(asset => asset.category === selectedCategory.toLocaleLowerCase())
  }, [selectedCategory])

  return (
    <div className="p-4 bg-[var(--color-primary)]">

      <div className='w-full my-10 text-4xl font-bold text-center text-[var(--color-secondary)]'>
        <h1>3D Store</h1>
      </div>

      <div>
        <ul className='flex gap-3 px-4'>
          {categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer pb-0 transition-all duration-300 ease-in-out 
          ${selectedCategory === category
                  ? 'opacity-100 underline-animation'
                  : 'opacity-50'
                }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>


      <div className="grid grid-cols-1 gap-6 p-2 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredAssets.map(asset => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>

      {assets.length === 0 && (
        <p className="mt-8 text-center text-gray-500">No assets found matching your criteria.</p>
      )}

    </div>
  )
}

export default MarketPlace
