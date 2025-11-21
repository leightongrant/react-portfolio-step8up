import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import profileImage from '../assets/images/profile-img.webp'
import ListGroup from 'react-bootstrap/ListGroup'

export const AboutPage = () => {
	return (
		<Stack as='main'>
			<Stack
				as='section'
				className='block-padding-large'
			>
				<Container className='flex-grow-1'>
					<Row>
						<Col
							xs={12}
							lg={6}
						>
							<Image
								src={profileImage}
								alt='Profile image of Leighton Grant'
								className='rounded mb-5 mb-lg-0'
								fluid
							/>
						</Col>
						<Col
							xs={12}
							lg={6}
						>
							<Stack className='gap-3'>
								<h2>Hi, I'm Leighton Grant</h2>

								<p>
									As an aspiring Full Stack Developer, I'm passionate about building seamless web experiences that connect frontend polish
									with backend power. I thrive on solving real-world problems through clean code, thoughtful design, and a deep curiosity for
									how things work — and how they can work better.
								</p>

								<p>
									During my full-stack bootcamp, I've developed a strong foundation in HTML, CSS, and JavaScript, and expanded into modern
									tools like TypeScript, Node.js, Express, and SQL. I've built RESTful APIs, implemented JWT authentication, and used Joi for
									robust validation. On the frontend, I've worked with React and explored DOM manipulation, flexbox layouts, and responsive
									design principles to create intuitive user interfaces. I've also integrated rich text editors like Quill, handled secure
									backend storage, and written developer-friendly documentation to support maintainability and collaboration.
								</p>

								<p>
									Beyond the code, I care deeply about branding, accessibility, and user experience. I enjoy crafting style guides, refining
									typography, and designing logos that give each project a distinct identity. Whether I'm debugging a layout issue or
									architecting a backend model, I approach each challenge with a growth mindset and a commitment to clarity.
								</p>

								<p>
									I'm eager to keep learning, diving into new frameworks, collaborating with other developers, and adapting quickly to new
									tools and ideas. My goal is to build reliable, user-focused solutions that not only solve problems, but leave a lasting
									impression.
								</p>
							</Stack>
						</Col>
					</Row>
				</Container>
			</Stack>
			<Stack
				as='section'
				className='block-padding-large bg-light'
			>
				<Container className='flex-grow-1'>
					<Row>
						<h2 className='text-center mb-5 fs-2'>Skills</h2>
						<Col
							xs={12}
							md={6}
						>
							<h3 className='text-center mb-5'>Frontend</h3>
							<ListGroup>
								<ListGroup.Item>HTML5</ListGroup.Item>
								<ListGroup.Item>CSS3</ListGroup.Item>
								<ListGroup.Item>JavaScript</ListGroup.Item>
								<ListGroup.Item>TypeScript</ListGroup.Item>
								<ListGroup.Item>Bootstrap</ListGroup.Item>
								<ListGroup.Item>React</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col
							xs={12}
							md={6}
						>
							<h3 className='text-center mb-5 mt-5 mt-md-0'>Backend</h3>
							<ListGroup>
								<ListGroup.Item>Express.js</ListGroup.Item>
								<ListGroup.Item>Node.js</ListGroup.Item>
								<ListGroup.Item>JWT</ListGroup.Item>
								<ListGroup.Item>MySQL</ListGroup.Item>
								<ListGroup.Item>Postgress</ListGroup.Item>
								<ListGroup.Item>MongoDB</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
				</Container>
			</Stack>
		</Stack>
	)
}
