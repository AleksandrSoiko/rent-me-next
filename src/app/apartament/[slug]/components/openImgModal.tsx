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
				width="877"
				height="499"
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
	const [fullScreen, setfullScreen] = useState(false)

	const closeModal = () => {
		setModalIsOpen(false)
		setModalIsOpen(false)
	}
	return (
		<>
			<button
				className="bg-[#d7e5ff8e] px-[5px] absolute right-2 bottom-2 rounded-[5px]"
				onClick={() => setModalIsOpen(true)}
			>
				3D walk
			</button>
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
						width: fullScreen ? window.innerWidth - 100 : '800px',
						height: fullScreen ? window.innerHeight - 100 : '600px',
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
				<button
					className="bg-[#fff] absolute top-2 right-2 px-1.5 rounded-[100%] text-[#000]"
					onClick={() => setfullScreen(!fullScreen)}
				>
					{!fullScreen ? 'full' : 'small'}
				</button>
			</Modal>
		</>
	)
}
