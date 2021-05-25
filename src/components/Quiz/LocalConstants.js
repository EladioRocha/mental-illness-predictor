module.exports = {
  MIN_SELECTED_DISEASES: 2,
  QUESTIONS_ARRAY: [
    { question: "¿Esta es la pregunta 1?", answers: [["Nada", 0], ["Leve", 0.25], ["Moderado", 0.5], ["Alto", 0.75], ["Coincide totalmente", 1]] },
    { question: "¿Esta es la pregunta 2?", answers: [["Nada", 0], ["Coincide totalmente", 1]] },
    { question: "¿Esta es la pregunta 3?", answers: [["Nada", 0], ["Leve", 0.25], ["Moderado", 0.5], ["Alto", 0.75], ["Coincide totalmente", 1]] },
    // { question: "¿Esta es la pregunta 4?", answers: [["Nada", 0], ["Leve", 0.25], ["Moderado", 0.5], ["Alto", 0.75], ["Coincide totalmente", 1]] },
    // { question: "¿Esta es la pregunta 5?", answers: [["Nada", 0], ["Leve", 0.25], ["Moderado", 0.5], ["Alto", 0.75], ["Coincide totalmente", 1]] },
    // { question: "¿Esta es la pregunta 6?", answers: [["Nada", 0], ["Leve", 0.25], ["Moderado", 0.5], ["Alto", 0.75], ["Coincide totalmente", 1]] },
    // { question: "¿Esta es la pregunta 7?", answers: [["Nada", 0], ["Leve", 0.25], ["Moderado", 0.5], ["Alto", 0.75], ["Coincide totalmente", 1]] },
    // { question: "¿Esta es la pregunta 8?", answers: [["Nada", 0], ["Leve", 0.25], ["Moderado", 0.5], ["Alto", 0.75], ["Coincide totalmente", 1]] },
    // { question: "¿Esta es la pregunta 9?", answers: [["Nada", 0], ["Leve", 0.25], ["Moderado", 0.5], ["Alto", 0.75], ["Coincide totalmente", 1]] },
    // { question: "¿Esta es la pregunta 10?", answers: [["Nada", 0], ["Leve", 0.25], ["Moderado", 0.5], ["Alto", 0.75], ["Coincide totalmente", 1]] },
    // { question: "¿Esta es la pregunta 11?", answers: [["Nada", 0], ["Leve", 0.25], ["Moderado", 0.5], ["Alto", 0.75], ["Coincide totalmente", 1]] },
    // { question: "¿Esta es la pregunta 12?", answers: [["Nada", 0], ["Leve", 0.25], ["Moderado", 0.5], ["Alto", 0.75], ["Coincide totalmente", 1]] },
    // { question: "¿Esta es la pregunta 13?", answers: [["Nada", 0], ["Leve", 0.25], ["Moderado", 0.5], ["Alto", 0.75], ["Coincide totalmente", 1]] },
    // { question: "¿Esta es la pregunta 14?", answers: [["Nada", 0], ["Leve", 0.25], ["Moderado", 0.5], ["Alto", 0.75], ["Coincide totalmente", 1]] },
    // { question: "¿Esta es la pregunta 15?", answers: [["Nada", 0], ["Leve", 0.25], ["Moderado", 0.5], ["Alto", 0.75], ["Coincide totalmente", 1]] },
  ],
  DISEASES_ARRAY: [
    { name: 'Desorden de amnesia', ponderation: [0.2, 0.5, 0.3, 2, 0.1, 0.5, 0.3, 0.9, 0.9, 0.6, 0.7, 0, 1, 0.4, 0.1], imagePath: 'amnesia' },
    { name: 'Esquizofrenia', ponderation: [0.4, 1, 0, 2, 0.1, 0.5, 0.3, 0.9, 0.9, 0.6, 0.7, 0, 1, 0.4, 0.1], imagePath: 'schizophrenia' },
    { name: 'Psicosis', ponderation: [0.4, 1, 0.3, 2, 0.1, 0.5, 0.3, 0.9, 0.9, 0.6, 0.7, 0, 1, 0.4, 0.1], imagePath: 'psicosis' },
    { name: 'Ataques de pánico', ponderation: [0.4, 1, 0.3, 2, 0.1, 0.5, 0.3, 0.9, 0.9, 0.6, 0.7, 0, 1, 0.4, 0.1], imagePath: 'panicAttack' },
    { name: 'Demencia', ponderation: [0.4, 1, 0.3, 2, 0.1, 0.5, 0.3, 0.9, 0.9, 0.6, 0.7, 0, 1, 0.4, 0.1], imagePath: 'dementia' },
    { name: 'Trastorno depresivo mayor', ponderation: [0.4, 1, 0.3, 2, 0.1, 0.5, 0.3, 0.9, 0.9, 0.6, 0.7, 0, 1, 0.4, 0.1], imagePath: 'depressive' },
    { name: 'Trastorno de ansiedad', ponderation: [0.4, 1, 0.3, 2, 0.1, 0.5, 0.3, 0.9, 0.9, 0.6, 0.7, 0, 1, 0.4, 0.1], imagePath: 'anxiety' },
    { name: 'Trastorno obsesivo-compulsivo', ponderation: [0.4, 1, 0.3, 2, 0.1, 0.5, 0.3, 0.9, 0.9, 0.6, 0.7, 0, 1, 0.4, 0.1], imagePath: 'obsessiveCompulsive' },
    { name: 'Trastorno afectivo bipolar', ponderation: [0.4, 1, 0.3, 2, 0.1, 0.5, 0.3, 0.9, 0.9, 0.6, 0.7, 0, 1, 0.4, 0.1], imagePath: 'bipolar' },
    { name: 'Trastorno por estrés postraumático', ponderation: [0.4, 1, 0.3, 2, 0.1, 0.5, 0.3, 0.9, 0.9, 0.6, 0.7, 0, 1, 0.4, 0.1], imagePath: 'distress' }
  ],
  TOTAL_PROGRESS_300_PERCENT: 3,
  ADD_PROGRESS_10_PERCENT: 0.1,
  DEFAULT_DURATION: 0.5,
  TRANSLATE_START_EFFECT: { transform: `translate(200%, 200%)` },
  TRANSLATE_END_EFFECT: { transform: "translate(0, 0)" },
  EASE_TYPE_EFFECT: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  TEXT_INSTRUCTIONS: {
    title: 'Instrucciones',
    subtitle1: '¿En qué consiste?',
    paragraph1: `Se te harán una serie de preguntas en la que tendrás que responder la gravedad de los sintomas o en su defecto si no haz tenido dicho sintoma recientemente.
    Es importante mencionar que las respuestas en cuanto a la intensidad de los sintomas es de opción multiple por lo que es de vital importancia
    que respondas con total sinceridad y con la opción que más se asemeje.`,
    subtitle2: '¿Cómo se obtiene el resultado?',
    paragraph2: `El resultado obtenido es a través de una inferencia usando lógica difusa, lo que significa que los sintomas previamente han recibido una ponderación
    que nos permite realizar un diagnostico a través de los sintomas que han tenidos las personas así como de su intensidad.`
  },
  TEXT_DISEASES_LIST: {
    title: 'Lista de enfermedades',
    subtitle: 'Selecciona 2 o más enfermedades'
  },
  TEXT_RESULT_QUIZ: {
    loadingText: 'Analizando información',
    ellipsisText: '...',
    subtitle1: '¿En que consiste?',
    subtitle2: 'Tratamiento',
  },
  EXIT_QUIZ_TEXT: 'Salir',
  NEXT_TEXT: 'Siguiente'
}