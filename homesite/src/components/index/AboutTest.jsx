import React from 'react';
const container = [
	{
		tag   : 'Container',
		class : 'text-center',
	},
];
const row = [
	{
		tag   : 'Row',
		class : null,
	},
];
const col = [
	{
		tag   : 'Col',
		class : 'mx-auto',
		lg    : 10,
	},
];
const aboutContent = [
	{
		tag     : 'h2',
		class   : null,
		content : 'Why Choose Us',
	},
	{
		tag     : 'p',
		class   : 'lead font-weight-bold',
		content : `With many years of experience in the electrician industry, we take
    pride in our professionalism, punctuality, and customer service.`,
	},
	{
		tag     : 'p',
		class   : 'lead',
		content : `Our primary measure of success is customer satisfaction. We define
    customers as employees, partners and clients. Our intent is to
    earn and maintain the respect and trust of everyone we come in
    contact with when representing Emergency Electric, Inc.`,
	},
	{
		tag     : 'p',
		class   : 'lead mb-5',
		content : `We believe in a personal touch to making ourselves known in the
    market. Referral and repeat business is important to us. We want
    every customer to be 100% satisfied with our service and work. We
    are confident that we meet this goal and that is why we offer a
    100% customer satisfaction guarantee.`,
	},
];

const AboutTest = () =>
	aboutContent.map(content => React.createElement(content.tag, { className: content.class }, content.content));

export default AboutTest;
