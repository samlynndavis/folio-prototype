import React from 'react'
import Link from 'gatsby-link'
import '../components/about.css'
import AboutCard from '../components/AboutCard'

const AboutPage = () => (
  <div>
    <div className="AboutHero">
      <div className="AboutHeroGroup">
          <div className="AboutHeroGroupLeft">
          <h1>Sam Lynn Davis III</h1>
          <p>Photographer from Chicago</p>
          <p>American artist, born 1986, and raised in Chicago. With a focus on fashion and a flair for the cinematic, he seeks to imbue everything he creates with a bit of mystery and drama.</p>
          <p>What follows is a list of past clients, some fake, some real:</p>
          <ul>
              <li>Lacoste</li>
              <li>Perrier</li>
              <li>Gap</li>
              <li>Conde Nast</li>
              <li>Notre</li>
              <li>Optimo</li>
              <li>Prada</li>
              <li>Something Else</li>
              <li>Field Notes Brand</li>
          </ul>      
          </div>
          <div className="AboutHeroGroupRight">
          <AboutCard 
            title=""
            text=""
            image='https://samlynndavis.netlify.app/img/12.jpg'
            />      
          </div>
      </div>
    </div>
  </div>
)

export default AboutPage