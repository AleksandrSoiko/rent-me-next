import { MeshBasicMaterial, SphereGeometry, TextureLoader } from 'three'

export const Textur = () => {
	const texture = new TextureLoader().load('/vrrr.jpg')
	const geometry = new SphereGeometry(500, 50, 40)
	geometry.scale(-1, 1, 1) // Reverse the normals to make it inside-out
	const material = new MeshBasicMaterial({ map: texture })

	return <mesh geometry={geometry} material={material} />
}
