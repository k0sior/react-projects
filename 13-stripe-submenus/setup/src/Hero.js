import React from 'react'
import phoneImg from './images/phone.svg'

const Hero = () => {

  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1> Visual Studio Code Tips and Tricks</h1>
          <p>
            Are you used to keyboard shortcuts from another editor? You can install a Keymap extension that brings the keyboard shortcuts from your favorite editor to VS Code. Go to Preferences Keymap Extensions to see the current list on the Marketplace. Some of the more popular ones:
          </p>
          <button className="btn">
            Start now
          </button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  )
}

export default Hero
