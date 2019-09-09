import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const ContentSection = props => {
	return (
		<section className={className} id={id}>
			<Container className={containerClassName}>
				<Row>
					<Col lg={10} className='mx-auto'>
						{/* {Map over the content array and add dynamic content to this section} */}
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default ContentSection;
