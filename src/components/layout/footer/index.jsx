import React from 'react';
import socialMedia from "../../../data/socialMedia.json";
import data from "./../../../data/data";
import { FooterStyle, FooterBody, SubRight, CopyRight, MediaLink, FooterSocialMedia } from './style'
import {ContainerLayout, ButtonDefault} from '../../common'

const Footer = () => {
	return (
		<>
			<FooterStyle>
				<ContainerLayout>
					<FooterBody>
						<div>
							<p className="text-primary quote"> Let's chat! </p>
							<ButtonDefault href={`mailto:${data.SiteContact.email}`}> Contact me </ButtonDefault>
						</div>
						<FooterSocialMedia>
							{socialMedia.map(({ id, name, url }) => (
								<li key={id}>
									<MediaLink className="lined-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={`follow us on ${name}`}>
										{name}
									</MediaLink>
								</li>
							))}
						</FooterSocialMedia>
					</FooterBody>
					<div className="box">
						<SubRight> Design for happy humans. </SubRight>
						<CopyRight className="text-dark">
							©
							<span> {new Date().getFullYear()}, Built with {` `}
								<a href="https://www.gatsbyjs.org">Gatsby</a>{" "}
          		</span>
							Copyright 2020 by {data.SiteAuthor} </CopyRight>
					</div>
				</ContainerLayout>
			</FooterStyle>
		</>
	)
}

export default Footer;