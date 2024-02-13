import { Html, OrbitControls, Preload } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import * as THREE from 'three'

const store = [
	{
		name: 'outside',
		color: 'lightpink',
		position: [10, 0, -15],
		url: '/vrr.jpg',
		link: 1,
	},
	{
		name: 'inside',
		color: 'lightblue',
		position: [15, 0, 0],
		url: '/br.jpg',
		link: 0,
	},
]

const VievVR = () => {
	return (
		<Canvas frameloop="demand" camera={{ position: [0, 0, 0.1] }}>
			<OrbitControls
				enablePan={false}
				enableDamping
				dampingFactor={0.2}
				autoRotate={false}
				rotateSpeed={-0.3}
			/>
			<Suspense fallback={null}>
				<Preload all />
				<Portals />
			</Suspense>
		</Canvas>
	)
}

function Portals() {
	const [which, set] = useState(0)
	const { link, ...props } = store[which]
	const maps = useLoader(THREE.TextureLoader, store.map((entry) => entry.url)) // prettier-ignore

	return <Dome onClick={() => set(link)} {...props} texture={maps[which]} />
}

function Dome({ name, position, texture, onClick, color }) {
	return (
		<group>
			<mesh>
				<sphereGeometry args={[500, 60, 40]} />
				<meshBasicMaterial map={texture} side={THREE.BackSide} />
			</mesh>
			<mesh position={position}>
				<sphereGeometry args={[1.25, 32, 32]} />
				<meshBasicMaterial color={color} />
				<Html center>
					<button
						onClick={onClick}
						style={{
							padding: '15px',
						}}
					>
						{name}
					</button>
				</Html>
			</mesh>
		</group>
	)
}

export default VievVR
