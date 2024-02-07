import { CameraControls } from '@react-three/drei'
import { Textur } from './textur'

const Scene = () => {
	return (
		<>
			<CameraControls />
			<ambientLight />
			<Textur />
		</>
	)
}

export default Scene
