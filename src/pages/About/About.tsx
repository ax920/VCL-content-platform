import Grid from '@mui/material/Grid';
import React from 'react';
import './About.css';
import { TEXT } from '@statics';

interface AboutProps {};

const About: React.FC<AboutProps> = props => {
	return (
		<div className="About">
			<div className="header">
				<h1>ABOUT</h1>
			</div>
			<div style={{
				color: '#535353',
				fontWeight: '400',
				fontSize: '17px'
			}}>
				<p>Browse research details and team resources here</p>
			</div>
			<div className="main_body">
				<h2>Our Lab</h2>
				<p>{TEXT.ABOUT_PAGE.MAIN.DESCRIPTION.P1}</p>
				<Grid container columnSpacing={{xs: 6}}>
						<Grid item xs={6}>
							<div className="img_placeholder">
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className="img_placeholder">
							</div>
						</Grid>
				</Grid>
				<p>{TEXT.ABOUT_PAGE.MAIN.DESCRIPTION.P2}</p>
				<h2>{TEXT.ABOUT_PAGE.MAIN.PHILOSOPHY.HEADER}</h2>
				<h2>{TEXT.ABOUT_PAGE.MAIN.RESPONSIBILITIES.HEADER}</h2>
				<h2>{TEXT.ABOUT_PAGE.MAIN.VALUES.HEADER}</h2>
			</div>
			<div className="gain_section">
				<h2>What can you gain?</h2>
					<Grid container columnSpacing={{xs: 2}} justifyContent="center">
						<Grid item xs={2}>
							<div className="gain_box">
								<h3>{TEXT.ABOUT_PAGE.GAIN_SECTION.DIRECTED_STUDIES.HEADER}</h3>
								<p>{TEXT.ABOUT_PAGE.GAIN_SECTION.DIRECTED_STUDIES.DESCRIPTION}</p>
							</div>
						</Grid>
						<Grid item xs={2}>
							<div className="gain_box">
								<h3>{TEXT.ABOUT_PAGE.GAIN_SECTION.RESEARCH_EXP.HEADER}</h3>
								<p>{TEXT.ABOUT_PAGE.GAIN_SECTION.RESEARCH_EXP.DESCRIPTION}</p>
							</div>
						</Grid>
						<Grid item xs={2}>
							<div className="gain_box">
								<h3>{TEXT.ABOUT_PAGE.GAIN_SECTION.GRADUATE_STUDENTS.HEADER}</h3>
								<p>{TEXT.ABOUT_PAGE.GAIN_SECTION.GRADUATE_STUDENTS.DESCRIPTION}</p>
							</div>
						</Grid>
						<Grid item xs={2}>
							<div className="gain_box">
								<h3>{TEXT.ABOUT_PAGE.GAIN_SECTION.GLOBAL_RESEARCH.HEADER}</h3>
								<p>{TEXT.ABOUT_PAGE.GAIN_SECTION.GLOBAL_RESEARCH.DESCRIPTION}</p>
							</div>
						</Grid>
					</Grid>
			</div>
			<div className="contact">
				<Grid container columnSpacing={{xs: 6}}>
						<Grid item xs={6}>
							<div className="img_placeholder">
							</div>
						</Grid>
						<Grid item xs={6}>
							<div>
								<h2>Contact</h2>
								<p>We are located in the Department of Psychology at the University of British Columbia</p>
								<Grid container columnSpacing={{xs: 6}} justifyContent="center">
									<Grid item xs={6}>
										<div>
											<p>Address</p>
										</div>
									</Grid>
									<Grid item xs={6}>
										<div>
											<p>Hours</p>
										</div>
									</Grid>
									<Grid item xs={6}>
										<div>
											<p>Contact</p>
										</div>
									</Grid>
									<Grid item xs={6}>
										<div>
											<p>Tel</p>
										</div>
									</Grid>
								</Grid>
							</div>
						</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default About;
