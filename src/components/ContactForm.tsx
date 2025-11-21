import Form from 'react-bootstrap/Form'

export const ContactForm = () => {
	return (
		<Form>
			<Form.Group
				className='mb-3'
				controlId='formGroupName'
			>
				<Form.Label>Password</Form.Label>
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
					placeholder='Enter email'
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
		</Form>
	)
}
