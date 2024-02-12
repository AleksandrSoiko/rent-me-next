import Image from 'next/image'
import React, { useState } from 'react'
import Modal from 'react-modal'
import VievVR from './viewVR'

interface FullScreenImageProps {
	imageUrl: string
	altText: string
}

const FullScreenImage: React.FC<FullScreenImageProps> = ({
	imageUrl,
	altText,
}) => {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const openModal = () => setModalIsOpen(true)
	const closeModal = () => setModalIsOpen(false)

	return (
		<div className="fixed">
			<OpenVRModal />
			<Image
				width="480"
				height="380"
				src={imageUrl}
				alt={altText}
				onClick={openModal}
				style={{ cursor: 'pointer' }}
			/>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel="Full Screen Image"
				style={{
					overlay: {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						zIndex: 100000,
					},
					content: {
						position: 'absolute',
						inset: 'auto',
						transform: 'translate(0%, 0%)',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						padding: 0,
						border: 0,
					},
				}}
			>
				<div>
					<Image width="800" height="480" src={imageUrl} alt={altText} />
				</div>
			</Modal>
		</div>
	)
}

export default FullScreenImage

const OpenVRModal = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	return (
		<>
			<button
				className="bg-[#D7E5FF] p-1 absolute right-0 bottom-0 "
				onClick={() => setModalIsOpen(true)}
			>
				3D walk
			</button>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={() => setModalIsOpen(false)}
				contentLabel="Full Screen Image"
				style={{
					overlay: {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						zIndex: 100000,
					},
					content: {
						width: '800px',
						height: '600px',
						position: 'absolute',
						inset: 'auto',
						transform: 'translate(0%, 0%)',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						padding: 0,
						border: 0,
					},
				}}
			>
				<VievVR />
			</Modal>
		</>
	)
}
