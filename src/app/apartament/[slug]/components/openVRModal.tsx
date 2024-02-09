import Image from 'next/image'
import React, { useState } from 'react'
import Modal from 'react-modal'
import VievVR from './viewVR'

const OpenVRModal = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const openModal = () => setModalIsOpen(true)
	const closeModal = () => setModalIsOpen(false)
	return (
		<div>
			<button onClick={openModal}>Відкрити vr</button>
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
		</div>
	)
}

export default OpenVRModal
