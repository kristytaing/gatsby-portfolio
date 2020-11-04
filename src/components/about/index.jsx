import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.webp" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
            </div>
            <div>
              <Title> Hi, I’m Kristy </Title>
              <Text> I'm a software engineer based in <b className="text-primary lined-link">San Francisco</b>.</Text>
              <Text> I'm passionate about building great products with intuitive and delightful user experiences. As a creator with a detail-oriented mindset, I appreciate clean and functional design that enhances people's lives. </Text>
              <Text> I'm currently building tech at Culdesac, a startup developing the first car-free neighborhood built from scratch in the US. </Text>
              <ResumeButton href="resume.pdf" target="_blank"> View resume </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
