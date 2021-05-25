import React, { Component } from "react"
import Typewriter from "typewriter-effect"
import { Animate, AnimateGroup } from "react-simple-animate"
import { Link } from "react-router-dom"

import './Home.css'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      typingSettings: {
        strings: "Diagnostico de enfermedades mentales aplicando lógica difusa.",
        autoStart: true,
        loop: false,
        delay: 25,
        stop: this.handleStopTyping
      },
      createdBy: ["Fernando Vicente Francisco", "Eladio rocha vizcaino"],
      delayCreatedBy: 2.5,
      delayBtn: 0.2
    }
  }

  render() {
    const animationSettings = {
      play: this.state.playAnimation,
      duration: 0.5,
      end: { transform: "translate(0, 0)" },
      easeType: "cubic-bezier(0.34, 1.56, 0.64, 1)"
    }

    return (
      <div className="presentation-container overflow-none">
        <section className="main-container bg-none overflow-none">
          <div className="w-100 h-100 overflow-none">
            <div className="w-100 h-100 flex center wrap column overflow-none">
              <div className="w-100 txt-center center py-15px">
                <h1 className="w-70 txt-white bold title-disease">
                  <Typewriter options={this.state.typingSettings} />
                </h1>
              </div>
              <AnimateGroup play>
                <Animate {...animationSettings} start={{ transform: "translate(0%, 500%)" }} delay={this.state.delayCreatedBy} sequenceIndex={0}>
                  <div className="w-100 txt-center overflow-none">
                    <h2 className="txt-white py-15px">En colaboración de:</h2>
                    <p className="txt-white">{this.state.createdBy[0]}</p>
                    <p className="txt-white">{this.state.createdBy[1]}</p>
                  </div>
                </Animate>
                <div className="flex center py-15px">
                  <Animate {...animationSettings} start={{ transform: "translate(-350%, 0%)" }} delay={this.state.delayBtn} sequenceIndex={1}>
                    <div className="py-15px px-40px">
                      <Link to={{
                        pathname: "/quiz",
                        state: { type: 'general' }
                      }}>
                        <button className="next-question-btn flex align-items-center center crs-pointer mb-15px bg-animation">Diagnóstico general</button>
                      </Link>
                    </div>
                  </Animate>
                  <Animate {...animationSettings} start={{ transform: "translate(350%, 0%)" }} delay={this.state.delayBtn} sequenceIndex={2}>
                    <div className="py-15px px-40px">
                      <Link to={{
                        pathname: "/quiz",
                        state: { type: 'especifico' }
                      }}>
                        <button className="next-question-btn flex align-items-center center crs-pointer mb-15px bg-animation">Diagnóstico específico</button>
                      </Link>
                    </div>
                  </Animate>
                </div>
              </AnimateGroup>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home;
