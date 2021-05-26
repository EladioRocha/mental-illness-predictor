import React, { Component } from "react"
import { Animate, AnimateGroup } from "react-simple-animate"
import { Wave } from "react-animated-text"
import { Link } from "react-router-dom"
import parser from "html-react-parser"

import { QUESTIONS_ARRAY, DISEASES_ARRAY, TOTAL_PROGRESS_300_PERCENT, ADD_PROGRESS_10_PERCENT, DEFAULT_DURATION, TEXT_INSTRUCTIONS, TEXT_DISEASES_LIST, TEXT_RESULT_QUIZ, TRANSLATE_START_EFFECT, TRANSLATE_END_EFFECT, EASE_TYPE_EFFECT, EXIT_QUIZ_TEXT, NEXT_TEXT, MIN_SELECTED_DISEASES, MIN_DISEASES_POND, NO_DISEASE } from './LocalConstants'
import { SET_FALSE, SET_NULL, SET_TRUE, SET_ZERO, SET_ONE, EMPTY_ARRAY, ONE_THOUSAND, FIVE_HUNDRED, TWO_HUNDRED_FIFTY, DIAGNOSIS_TEXT, TYPE_QUIZ_GENERAL, TYPE_QUIZ_SPECIFIC } from '../GlobalConstants'

import ProgressBar from '../reusable/ProgressBar/ProgressBar'
import QuizAnswer from '../QuizAnswer/QuizAnswer'

import analysisImg from '../../assets/images/gif/analysis.gif'
import brainImg from '../../assets/images/svg/brain.svg'
import amnesia from '../../assets/images/svg/amnesia.svg'
import schizophrenia from '../../assets/images/svg/schizophrenia.svg'
import psicosis from '../../assets/images/svg/psicosis.svg'
import panicAttack from '../../assets/images/svg/panic-attack.svg'
import dementia from '../../assets/images/svg/dementia.svg'
import depressive from '../../assets/images/svg/depressive.svg'
import anxiety from '../../assets/images/svg/anxiety.svg'
import obsessiveCompulsive from '../../assets/images/svg/obsessive-compulsive.svg'
import bipolar from '../../assets/images/svg/bipolar.svg'
import distress from '../../assets/images/svg/distress.svg'

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playAnimation: SET_TRUE,
      activeAnswer: SET_FALSE,
      questionsArr: QUESTIONS_ARRAY,
      diseasesArr: DISEASES_ARRAY,
      responsesArr: [...EMPTY_ARRAY],
      currentResponse: SET_NULL,
      progressResult: SET_ZERO,
      totalProgress: SET_ZERO,
      activeQuiz: SET_FALSE,
      showDiseasesList: SET_FALSE,
      typeOfQuiz: SET_NULL,
      selectedDiseasesIdx: [...EMPTY_ARRAY],
      selectedDiseasesSize: SET_ZERO,
      currentQuestionIdx: SET_ZERO,
      processedData: SET_FALSE
    }
    this.diseaseName = SET_NULL
    this.imagePath = SET_NULL
    this.description = ''
    this.causes = ''
    this.treatment = ''
    this.referenceLink = ''
    this.images = {
      brainImg,
      amnesia,
      schizophrenia,
      psicosis,
      panicAttack,
      dementia,
      dementia,
      depressive,
      anxiety,
      obsessiveCompulsive,
      bipolar,
      distress
    }
  }

  componentDidMount() {
    let typeOfQuiz = SET_NULL
    if (this.props && this.props.location && this.props.location && this.props.location.state && this.props.location.state.type) {
      typeOfQuiz = this.props.location.state.type
    }
    typeOfQuiz = (typeOfQuiz === TYPE_QUIZ_GENERAL || typeOfQuiz === TYPE_QUIZ_SPECIFIC) ? typeOfQuiz : TYPE_QUIZ_GENERAL
    this.setState({
      selectedDiseasesIdx: (typeOfQuiz === TYPE_QUIZ_GENERAL)
        ? new Array(this.state.diseasesArr.length).fill(SET_TRUE)
        : new Array(this.state.diseasesArr.length).fill(SET_FALSE),
      typeOfQuiz
    })
  }

  handleFinishAnimation = () => {
    this.setState({
      playAnimation: SET_FALSE
    })
  }

  handleClickAnswer = (value, answer) => {
    this.setState({
      activeAnswer: SET_FALSE,
      currentResponse: (value === this.state.currentResponse) ? SET_NULL : value,
    })
  }

  handleSelectedDisease = (idx, answer) => {
    this.state.selectedDiseasesIdx[idx] = !this.state.selectedDiseasesIdx[idx]
    const currentSize = this.state.selectedDiseasesSize
    this.setState({
      selectedDiseasesIdx: this.state.selectedDiseasesIdx,
      selectedDiseasesSize: (this.state.selectedDiseasesIdx[idx]) ? (currentSize + SET_ONE) : (currentSize - SET_ONE)
    })
  }

  handleClickNextQuestion = () => {
    if (!this.state.activeQuiz && this.state.typeOfQuiz === TYPE_QUIZ_GENERAL) {
      this.setState({
        activeQuiz: SET_TRUE
      })
      return
    } else if (!this.state.activeQuiz && this.state.typeOfQuiz === TYPE_QUIZ_SPECIFIC && !this.state.showDiseasesList) {
      this.setState({
        showDiseasesList: SET_TRUE
      })
      return
    } else if (!this.state.activeQuiz && this.state.typeOfQuiz === TYPE_QUIZ_SPECIFIC && this.state.showDiseasesList) {
      this.setState({
        activeQuiz: SET_TRUE
      })
      return
    }
    this.state.responsesArr.push(this.state.currentResponse)
    this.setState({
      activeAnswer: SET_FALSE,
      playAnimation: SET_FALSE,
      currentResponse: SET_NULL
    })
    setTimeout(() => {
      this.setState({
        currentQuestionIdx: this.state.currentQuestionIdx + SET_ONE,
        playAnimation: SET_TRUE
      })
    }, FIVE_HUNDRED)
  }

  handleInfoContainer = () => {
    if (!this.state.activeQuiz && !this.state.showDiseasesList) {
      return this.instructionsQuiz()
    } else if (!this.state.activeQuiz && this.state.showDiseasesList) {
      return this.diseasesList()
    }
    if (this.state.questionsArr.length === this.state.currentQuestionIdx) {
      if (!this.state.processedData) {
        this.processResultQuiz()
      }
      return this.resultElements()
    }

    return this.quizElements()
  }

  instructionsQuiz = () => {
    return (
      <div className="pr h-100">
        <div className="question-text h-auto mt-15px mb-15px txt-center">
          <div className="flex align-items-center center">
            <h2 className="title-disease px-15px">{TEXT_INSTRUCTIONS.title}</h2>
          </div>
        </div>
        <div className="answers-container h-75 overflow-y overflow-x-none">
          <article>
            <h3 className="result-subtitle bold">{TEXT_INSTRUCTIONS.subtitle1}</h3>
            <p className="py-15px txt-white">
              {TEXT_INSTRUCTIONS.paragraph1}
            </p>
          </article>
          <article>
            <h3 className="result-subtitle bold">{TEXT_INSTRUCTIONS.subtitle2}</h3>
            <p className="py-15px txt-white">
              {TEXT_INSTRUCTIONS.paragraph2}
            </p>
          </article>
        </div>
      </div>
    )
  }

  diseasesList = () => {
    let diseasesListArr = [...EMPTY_ARRAY]
    for (let i = SET_ZERO; i < this.state.diseasesArr.length; i++) {
      diseasesListArr.push(<QuizAnswer key={this.state.diseasesArr[i].name} answer={this.state.diseasesArr[i].name} handleClickAnswer={this.handleSelectedDisease} value={i} activeAnswer={this.state.selectedDiseasesIdx[i]} />)
    }
    return (
      <div className="pr h-100">
        <div className="question-text h-auto mt-15px mb-15px txt-center">
          <div className="flex align-items-center center">
            <h2 className="title-disease px-15px">{TEXT_DISEASES_LIST.title}</h2>
          </div>
        </div>
        <div className="answers-container h-75 overflow-y overflow-x-none">
          <article>
            <h3 className="result-subtitle bold">{TEXT_DISEASES_LIST.subtitle}</h3>
            {diseasesListArr}
          </article>
        </div>
      </div>
    )
  }

  quizElements = () => {
    const animationSettings = {
      play: this.state.playAnimation,
      duration: DEFAULT_DURATION,
      start: TRANSLATE_START_EFFECT,
      end: TRANSLATE_END_EFFECT,
      easeType: EASE_TYPE_EFFECT
    }

    const questionsArr = []
    for (let i = SET_ZERO; i < this.state.questionsArr[this.state.currentQuestionIdx].answers.length; i++) {
      const currentAnswerArr = this.state.questionsArr[this.state.currentQuestionIdx].answers
      questionsArr.push(
        <Animate key={i} {...animationSettings} sequenceIndex={SET_ZERO}>
          <QuizAnswer key={i} answer={currentAnswerArr[i][SET_ZERO]} handleClickAnswer={this.handleClickAnswer} value={currentAnswerArr[i][SET_ONE]} activeAnswer={this.state.activeAnswer} />
        </Animate>
      )
    }

    return (
      <div className="pr h-100">
        <AnimateGroup>
          <Animate {...animationSettings} sequenceIndex={SET_ZERO}>
            <div className="question-text h-auto mt-15px mb-15px">
              <div className="flex align-items-center center">
                <h3 className="question-text mt-15px">{this.state.questionsArr[this.state.currentQuestionIdx].question}</h3>
              </div>
            </div>
          </Animate>
          <div className="answers-container h-75 overflow-y overflow-x-none">
            {questionsArr}
          </div>
        </AnimateGroup>
      </div>
    )
  }

  resultElements = () => {
    if (this.state.totalProgress < TOTAL_PROGRESS_300_PERCENT /** El 300% por el delay y el timer **/) {
      setTimeout(() => {
        const sumProgress = this.state.totalProgress + ADD_PROGRESS_10_PERCENT
        this.setState({
          progressResult: (sumProgress >= SET_ONE) ? SET_ONE : sumProgress,
          totalProgress: sumProgress,
          processedData: SET_TRUE
        })
      }, ONE_THOUSAND)
      return (
        <div className="pr h-100">
          <div className="h-100">
            <div className="txt-white result-subtitle txt-center w-100 pt-30px">{TEXT_RESULT_QUIZ.loadingText}<span className="d-inline"><Wave text={TEXT_RESULT_QUIZ.ellipsisText} /></span></div>
            <div className="w-100 h-60 flex center align-items-center">
              <img src={analysisImg} className="h-75"></img>
            </div>
            <div className="w-100 flex center align-items-center h-25">
              <ProgressBar percent={this.state.progressResult} width={FIVE_HUNDRED} />
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="pr h-100">
        <div className="question-text h-auto mt-15px mb-15px txt-center">
          <div className="flex align-items-center center">
            <img src={this.images[this.imagePath]} className="w-10"></img>
            <h2 className="title-disease px-15px">{this.diseaseName}</h2>
          </div>
        </div>
        <div className="answers-container h-75 overflow-y overflow-x-none">
          <article>
            <h3 className="result-subtitle bold">{TEXT_RESULT_QUIZ.subtitle1}</h3>
            <p className="py-15px txt-white">
              {parser(this.description)}
              {/* Los proveedores de atención médica no conocen la causa exacta del TOC. Los factores que pueden influir incluyen lesiones en la cabeza, infecciones y funcionamiento anormal en ciertas zonas del cerebro. Los genes (antecedentes familiares) parecen jugar un fuerte papel. Los antecedentes de abuso físico o sexual también parecen incrementar el riesgo de TOC. */}
              {/* Los padres y los profesores a menudo reconocen los síntomas del TOC en los niños. La mayoría de las personas recibe un diagnóstico a los 19 o 20, pero algunas no muestran síntomas hasta la edad de 30 años. */}
            </p>
          </article>
          <article>
            <h3 className="result-subtitle bold">{TEXT_RESULT_QUIZ.subtitle2}</h3>
            <p className="py-15px txt-white">
              {parser(this.causes)}
            </p>
          </article>
          <article>
            <h3 className="result-subtitle bold">{TEXT_RESULT_QUIZ.subtitle3}</h3>
            <p className="py-15px txt-white">
              {parser(this.treatment)}
            </p>
          </article>
          <p className="txt-white">
            Para más información de clic <a href={this.referenceLink} target="_blank">aquí</a>
          </p>
        </div>
      </div>
    )
  }

  processResultQuiz = () => {
    const diseasesToAnalyzeArr = [...EMPTY_ARRAY]
    for (let i = SET_ZERO; i < this.state.diseasesArr.length; i++) {
      if (this.state.selectedDiseasesIdx[i]) {
        diseasesToAnalyzeArr.push(this.state.diseasesArr[i])
      }
    }

    const resultArr = [...EMPTY_ARRAY]
    for (let i = SET_ZERO; i < diseasesToAnalyzeArr.length; i++) {
      const result = [...EMPTY_ARRAY]
      for (let j = SET_ZERO; j < this.state.responsesArr.length; j++) {
        const currentPonderationDisease = diseasesToAnalyzeArr[i].weights[j]
        const currentPonderation = this.state.responsesArr[j]
        result.push((currentPonderation > currentPonderationDisease) ? currentPonderationDisease : currentPonderation)
      }
      resultArr.push(result)
    }

    let finalResultArr = [SET_ZERO, SET_NULL]
    for (let i = SET_ZERO; i < resultArr.length; i++) {
      const totalSum = resultArr[i].reduce((a, b) => a + b)
      if (totalSum > finalResultArr[SET_ZERO]) {
        const { name, imagePath, definition, causes, treatment, reference } = diseasesToAnalyzeArr[i]
        finalResultArr = [totalSum, name, imagePath, definition, causes, treatment, reference]
      }
    }

    const [sum, name, imagePath, definition, causes, treatment, reference] = finalResultArr
    if (sum <= MIN_DISEASES_POND) {
      this.diseaseName = NO_DISEASE
      this.imagePath = brainImg
      return null
    }
    this.diseaseName = name
    this.imagePath = imagePath
    this.description = definition
    this.causes = causes
    this.treatment = treatment
    this.referenceLink = reference
  }

  render() {
    return (
      <div className="quiz-container">
        <section className="main-container">
          <div className="header-container">
            <div className="info-container flex">
              <div className="profile-container flex align-items-center">
                <div className="profile-icon"></div>
                <p className="px-15px txt-white fs-1-4vw">{DIAGNOSIS_TEXT} {this.state.typeOfQuiz}</p>
              </div>
              <div className="progress-container flex align-items-center flex-end">
                <div className="progress-bar-container">
                  <div className="progress-bar">
                    <ProgressBar
                      percent={(this.state.currentQuestionIdx) / this.state.questionsArr.length}
                      width={TWO_HUNDRED_FIFTY}
                      status={`${this.state.currentQuestionIdx} de ${this.state.questionsArr.length}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="body-container">
            <div className="info-container">
              {this.handleInfoContainer()}
            </div>
          </div>
          <div className="footer-container py-15px">
            <div className="info-container flex space-between align-items-center">
              <Link to="/" className="next-question-btn flex align-items-center center crs-pointer bg-animation w-10">
                <button className="bg-none border-none txt-white">
                  {EXIT_QUIZ_TEXT}
                </button>
              </Link>
              <button
                className={`next-question-btn flex align-items-center center crs-pointer w-10 
                  ${(
                    (this.state.currentResponse === SET_NULL && this.state.activeQuiz)
                    || this.state.selectedDiseasesSize < MIN_SELECTED_DISEASES && this.state.showDiseasesList)
                    ? 'bg-disabled'
                    : 'bg-animation'}`}
                disabled={(
                  (this.state.currentResponse === SET_NULL && this.state.activeQuiz)
                  || this.state.selectedDiseasesSize < MIN_SELECTED_DISEASES && this.state.showDiseasesList)
                  ? SET_TRUE
                  : SET_FALSE}
                onClick={this.handleClickNextQuestion}>
                <span>{NEXT_TEXT}</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Quiz;
