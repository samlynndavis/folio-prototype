import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
      <h1>Sam Lynn Davis III</h1>
      <p>Photographer from Chicago</p>
      <p>American artist, born 1986, and raised in Chicago. With a focus on fashion and a flair for the cinematic, he seeks to imbue everything he creates with a bit of mystery and drama.</p>        
      </div>
    </div>
    <div className="Cards">
      <div className="CardGroup">
        <Card 
        title=""
        text=""
        image='https://samlynndavis.netlify.app/img/10.jpg'
        />
        <Card 
        title=""
        text=""
        image='https://samlynndavis.netlify.app/img/1.jpg'
        />
        <Card 
        title=""
        text=""
        image='https://samlynndavis.netlify.app/img/23.jpg'
        />
        <Card 
        title=""
        text=""
        image='https://samlynndavis.netlify.app/img/7.jpg'
        />
        <Card 
        title=""
        text=""
        image='https://samlynndavis.netlify.app/img/3.jpg'
        />
        <Card 
        title=""
        text=""
        image='https://samlynndavis.netlify.app/img/9.jpg'
        />
      </div>
    </div>
  </div>
)

export default IndexPage