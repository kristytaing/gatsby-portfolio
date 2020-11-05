import styled from 'styled-components';
import variables from '../../../data/variables';

export const FooterStyle = styled.footer`
	padding-top: 1rem;
	padding-bottom: 4rem;
	z-index: 0;
	position: relative;
	text-align: center;
	@media(min-width: ${variables.breakpointPhone}) {
		background: linear-gradient(to top, #efe9e9, transparent 50%);
	}
	@media(max-width: ${variables.breakpointPhone}) {
		padding-bottom: 2rem;
		padding-left: .5rem;
		padding-right: .5rem;
		text-align: center;
	}
	.quote {
		margin: 0;
		font-size: 4rem;
		font-family: "GT-Walsheim-Pro-Bold";
		line-height: 1.2;
		color: ${variables.primary};
		@media(max-width: ${variables.breakpointPhone}) {
			font-size: 2rem;
		}
	}
`;

export const SubRight = styled.p`
	font-size: 1rem;
	line-height: 1.8;
	letter-spacing:2px;
	margin-bottom: 20px;
	font-family: "GT-Walsheim-Pro-Bold";
`
export const CopyRight = styled.p`
	font-size: 11px;
	line-height: 1.8;
	letter-spacing:1px;
`
export const FooterBody = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
export const FooterSocialMedia = styled.ul`
	display: flex;
	padding-left: 0;
	list-style: none;
	align-items: center;
	justify-content: space-between;
	li {
		margin-bottom: 1.5rem;
	}
`
export const MediaLink = styled.a`
	margin: 0 1rem 0 1rem;
	padding: 1rem 0rem;
	padding-bottom: .5rem;
	line-height: 1;
	font-size: 1rem;
  text-transform: capitalize;
  font-family: "GT-Walsheim-Pro-Bold";
	color: ${variables.primary};

`