import Image from 'next/image'
import React, { useState } from 'react'
import Modal from 'react-modal'

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
		<div>
			<Image
				width="580"
				height="480"
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
					<Image
						className="w-[auto] h-[auto]"
						width="800"
						height="480"
						src={imageUrl}
						alt={altText}
					/>
				</div>
			</Modal>
		</div>
	)
}

export default FullScreenImage
