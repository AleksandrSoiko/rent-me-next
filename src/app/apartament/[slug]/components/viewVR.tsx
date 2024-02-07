'use client'
import { Canvas } from '@react-three/fiber'
import Scene from './scena'
import { useRef, useState } from 'react'

const VievVR = () => {
	const [isMouseDown, setIsMouseDown] = useState(false)
	const prevMouseX = useRef<any>(null)
	const prevMouseY = useRef<any>(null)
	const cameraRef = useRef<any>()

	const onMouseMove = (event) => {
		if (isMouseDown) {
			const sensitivity = 0.001
			const movementX = event.clientX - prevMouseX.current
			const movementY = event.clientY - prevMouseY.current

			cameraRef.current.rotation.y -= movementX * sensitivity
			cameraRef.current.rotation.x -= movementY * sensitivity

			cameraRef.current.rotation.x = Math.max(
				-Math.PI / 2,
				Math.min(Math.PI / 2, cameraRef.current.rotation.x)
			)

			prevMouseX.current = event.clientX
			prevMouseY.current = event.clientY
		}
	}

	const onMouseDown = (event) => {
		setIsMouseDown(true)
		prevMouseX.current = event.clientX
		prevMouseY.current = event.clientY
	}

	const onMouseUp = () => {
		setIsMouseDown(false)
	}
	return (
		<Canvas
			onMouseMove={onMouseMove}
			onMouseDown={onMouseDown}
			onMouseUp={onMouseUp}
		>
			<Scene />
		</Canvas>
	)
}

export default VievVR
// const scene = new THREE.Scene()
// const camera = new THREE.PerspectiveCamera(
// 	75,
// 	window.innerWidth / window.innerHeight,
// 	0.1,
// 	1000
// )

// const renderer = new THREE.WebGLRenderer()
// renderer.setSize(window.innerWidth, window.innerHeight)
// document.body.appendChild(renderer.domElement)

// const geometry = new THREE.SphereGeometry(500, 60, 40)
// geometry.scale(-1, 1, 1) // Reverse the normals to make it inside-out

// const texture = new THREE.TextureLoader().load('/vr360.jpg')
// const material = new THREE.MeshBasicMaterial({ map: texture })

// const sphere = new THREE.Mesh(geometry, material)
// scene.add(sphere)

// camera.position.set(200, 100, 100) // set camera position at center of the sphere

// let isMouseDown = false
// let prevMouseX, prevMouseY

// const onMouseMove = (event) => {
// 	if (isMouseDown) {
// 		const sensitivity = 0.001
// 		const movementX = event.clientX - prevMouseX
// 		const movementY = event.clientY - prevMouseY

// 		camera.rotation.y -= movementX * sensitivity
// 		camera.rotation.x -= movementY * sensitivity

// 		camera.rotation.x = Math.max(
// 			-Math.PI / 2,
// 			Math.min(Math.PI / 2, camera.rotation.x)
// 		)

// 		prevMouseX = event.clientX
// 		prevMouseY = event.clientY
// 	}
// }

// const onMouseDown = (event) => {
// 	isMouseDown = true
// 	prevMouseX = event.clientX
// 	prevMouseY = event.clientY
// }

// const onMouseUp = () => {
// 	isMouseDown = false
// }

// function animate() {
// 	requestAnimationFrame(animate)
// 	renderer.render(scene, camera)
// }

// function onWindowResize() {
// 	camera.aspect = window.innerWidth / window.innerHeight
// 	camera.updateProjectionMatrix()
// 	renderer.setSize(window.innerWidth, window.innerHeight)
// }

// window.addEventListener('resize', onWindowResize, false)
// window.addEventListener('mousemove', onMouseMove, false)
// window.addEventListener('mousedown', onMouseDown, false)
// window.addEventListener('mouseup', onMouseUp, false)

// animate()
