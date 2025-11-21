import Form from 'react-bootstrap/Form'
import './ContactForm.css'
import { Button } from 'react-bootstrap'
import { IoMdSend } from 'react-icons/io'

export const ContactForm = () => {
	return (
		<Form>
			<Form.Group
				className='mb-3'
				controlId='formGroupName'
			>
				<Form.Label>Name</Form.Label>
				<Form.Control
					type='text'
					placeholder='Enter Name'
				/>
			</Form.Group>
			<Form.Group
				className='mb-3'
				controlId='formGroupEmail'
			>
				<Form.Label>Email address</Form.Label>
				<Form.Control
					type='email'
					placeholder='Enter email address'
				/>
			</Form.Group>

			<Form.Group
				className='mb-3'
				controlId='formGroupMessage'
			>
				<Form.Label>Message</Form.Label>
				<Form.Control
					as='textarea'
					placeholder='Enter your message'
					style={{ height: '100px' }}
				/>
			</Form.Group>
			<Button
				variant='dark'
				className='d-flex align-items-center gap-2'
			>
				Submit <IoMdSend />
			</Button>
		</Form>
	)
}
