import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
    <div className="HeaderGroup">
      <ul>
        <nav className="leftnav">
          <li className="leftnav">
            <Link to="/">Folio</Link>
          </li>
        </nav>
        <div className="search">
          <input type="search" placeholder="Search"/>
        </div>
        <nav className="rightnav">
          <li className="rightnav">
            <Link to="/#">Work</Link>
          </li>
          <li className="rightnav">
            <Link to="/about">About</Link>
          </li>
          <li className="rightnav">
            <Link to="/#">Contact</Link>
          </li>
          <li className="rightnav invite-btn">
            <Link to="/#"><button>Get Invite</button></Link>
          </li>
        </nav>
      </ul>
      </div>
  </div>
    )
  }
}

export default Header
