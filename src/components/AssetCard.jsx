import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment } from '@react-three/drei'

function Model3D({ url }) {
  const gltf = useGLTF(url)
  return <primitive object={gltf.scene} scale={[1, 1, 1]} />
}

const AssetCard = ({ asset }) => {
  return (
    <div className='bg-[var(--color-pre-primary)] w-[300px] rounded-2xl p-0 border-[var(--color-tertiary)]'>

      <div className="relative w-full overflow-hidden rounded-t-2xl h-52 bg-gradient-to-bl from-[var(--color-tertiary)]  to-[var(--color-accent)]">
        <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }}>
          <ambientLight intensity={1} />
          <spotLight position={[10, 10, 10]} angle={0} penumbra={1} />
          <Model3D url={asset.url} />
          <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} />
          <Environment preset="city" background={false} />
        </Canvas>
      </div>

      <div className='px-4'>

        <h2 className='py-2 text-xl text-[var(--color-secondary)] font-bold'>{asset.name}</h2>
        <p className='text-sm text-[var(--color-secondary)] opacity-80'>{asset.description}</p>

        <ul className='flex flex-wrap gap-2 py-2 text-xs text-[var(--color-primary)]'>
          {asset.hashtags.map((hashtag, index) => (<li key={index} className='px-3 bg-[var(--color-tertiary)] opacity-40 rounded py-[2px]'>{hashtag}</li>))}
        </ul>

        <div className='flex items-center justify-between pb-3'>
          <p className='text-xl font-bold text-[var(--color-accent)]'>₹{asset.price}</p>
          <button className='px-3 py-1 text-sm font-bold text-[var(--color-primary)] bg-[var(--color-accent)] rounded-full'>Buy Now</button>
        </div>

      </div>

    </div>
  )
}

export default AssetCard