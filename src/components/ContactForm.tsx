import Form from 'react-bootstrap/Form'
import './ContactForm.css'
import { Button } from 'react-bootstrap'
import { IoMdSend } from 'react-icons/io'
import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import Alert from 'react-bootstrap/Alert'

type Inputs = {
	name: string
	email: string
	message: string
}

export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful, isSubmitting, isSubmitted },
		reset,
	} = useForm<Inputs>()

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			const formData = new FormData()
			Object.entries(data).forEach(([key, value]) => {
				formData.append(key, value)
			})

			const response = await fetch('https://formbold.com/s/6lEly', {
				method: 'post',
				body: formData,
			})
			if (!response.ok) {
				throw new Error('Error submitting message')
			}
			console.log('Message submitted')
			reset()
		} catch (error) {
			console.log(error)
		} finally {
			setTimeout(() => {}, 5000)
		}
	}

	return (
		<>
			{isSubmitSuccessful && isSubmitted && <Alert variant='info'>Your message has been sent</Alert>}
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Group
					className='mb-3'
					controlId='formGroupName'
				>
					<Form.Label>Name</Form.Label>

					<Form.Control
						type='text'
						placeholder='Enter Name'
						{...register('name', { required: true })}
					/>
					{errors.name?.type === 'required' && (
						<small
							role='alert'
							className='text-danger'
						>
							Name is required
						</small>
					)}
				</Form.Group>
				<Form.Group
					className='mb-3'
					controlId='formGroupEmail'
				>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email address'
						{...register('email', { required: true })}
					/>
					{errors.email?.type === 'required' && (
						<small
							role='alert'
							className='text-danger'
						>
							Email is required
						</small>
					)}
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
						{...register('message', { required: true })}
					/>
					{errors.message?.type === 'required' && (
						<small
							role='alert'
							className='text-danger'
						>
							Message is required
						</small>
					)}
				</Form.Group>
				<Button
					variant='dark'
					className='d-flex align-items-center gap-2'
					type='submit'
					disabled={isSubmitting}
				>
					{isSubmitting ? 'Sending Message...' : 'Submit'} <IoMdSend />
				</Button>
			</Form>
		</>
	)
}
