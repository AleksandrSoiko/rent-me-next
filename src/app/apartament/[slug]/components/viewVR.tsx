import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

import { SphereGeometry, MeshBasicMaterial, TextureLoader } from 'three'

const VievVR = () => {
	return (
		<Canvas
			style={{ width: '100%', height: '100%' }}
			camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}
		>
			<OrbitControls
				zoomSpeed={3}
				enablePan={false}
				enableZoom
				maxDistance={300}
				minDistance={100}
				rotateSpeed={0.5}
			/>
			<Scene />
		</Canvas>
	)
}

const Scene = () => {
	const texture = new TextureLoader().load('/vrr.jpg')
	const geometry = new SphereGeometry(400, 400, 200)
	geometry.scale(-1, 1, 1)
	const material = new MeshBasicMaterial({ map: texture })

	return <mesh geometry={geometry} material={material} />
}

export default VievVR
