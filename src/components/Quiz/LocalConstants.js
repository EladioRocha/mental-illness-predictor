module.exports = {
  MIN_SELECTED_DISEASES: 2,
  QUESTIONS_ARRAY: [
    { question: "¿Has notado que últimamente te cuesta retener nueva información?", answers: [["No", 0], ["Si", 0.6]] },
    { question: "¿Te has sentido confundido recientemente?", answers: [["No", 0], ["Me he sentido confundido últimamente, sin embargo suele pasar rápido", 0.2], ["Me he sentido confundido con regularidad estos días", 0.4], ["Me he sentido muy confundido con regularidad, me cuesta realizar algunas actividades", 0.7], ["He tenido una sensación de confusión que definitivamente interfiere con mis actividades diarias y no soy capaz de concentrarme", 1]] },
    { question: "¿Has tenido alucinaciones ya sea mentales, vista, oído, olfato o tacto?", answers: [["No he sufrido de alucinaciones", 0], ["He tenido alucinaciones pero en situaciones muy específicas", 0.25], ["Sufro de alucinaciones muy frecuentemente pero solo en uno de los sentidos", 0.5], ["Sufro de alucinaciones muy frecuentemente en más de uno de los sentidos mencionados", 1]] },
    { question: "¿Has notado problemas de interacción con los demás?", answers: [["No he tenido problemas para relacionarme", 0], ["Me he tomado un tiempo a solar pero no tengo problemas para relacionarme con los demás", 0.15], ["He tenido algunos problemas, parece que nadie me comprende", 0.5], ["Si, he sentido que nadie me entiende", 0.8]] },
    { question: "¿Has notado dificultad para recordar eventos recientes?", answers: [["No, recuerdo perfectamente cada detalle", 0], ["He notado problemas para recordar eventos recientes", 0.3], ["He notado algunos problemas que incluso me han hecho tener algunos problemas", 0.6], ["He tenido mucha dificultad suelo olvidar los eventos recientes demasiado rápido y me ha causado demasiados problemas", 0.9]] },
    { question: "¿Has notado que la cantidad de alimentos que consumes se ha visto alterada? Ya sea que consumas más o menos alimentos que antes", answers: [["No he notado ninguna alteración", 0], ["Si he notado una alteración sin motivo aparente (Ya sea que se haya disminuido o aumentado la ingesta)", 0.7]] },
    { question: "¿Has notado una alteración en tu ciclo de sueño? Ya sea que notes que estes durmiendo menos o más cantidad de horas", answers: [["No he notado alteración en mi ciclo del sueño", 0], ["He notado una alteración en mi ciclo de sueño sin motivo aparente", 0.4], ["He notado que duermo más sin haber modificado mis hábitos", 0.5], ["He notado que duermo menos debido a que no puedo dejar de pensar en cosas negativas en la noche", 0.9]] },
    { question: "¿Has notado un cambio en tu conducta recientemente?", answers: [["No he notado ningún cambio en mi conducta", 0], ["He notado un pequeño cambio en mi conducta ante ciertas circunstancias", 0.3], ["He notado un cambio moderado en mi conducta", 0, 5], ["He notado un gran cambio en mi conducta con mi entorno, siento que nadie me puede brindar la ayuda que necesito", 0.9]] },
    { question: "¿Has notado un aumento en la aceleración cardiaca?", answers: [["No he notado ningún aumento", 0], ["Lo he notado de forma leve", 0.2], ["Lo he notado de forma moderada", 0.4], ["Lo he notado con mucha frecuencia últimamente", 0.65]] },
    { question: "¿Has notado una pérdida de memoria recientemente?", answers: [["No, puedo recordar las cosas con gran claridad", 0], ["He notado que he preguntado lo mismo varias veces en algunas ocasiones", 0.15], ["He notado que suelo preguntar lo mismo y también tardo más tiempo en realizar actividades que anteriormente las hacía de forma mecánica", 0.30], ["Definitivamente he notado una pérdida de memoria que me ha traído algunos conflictos con otras personas", 0.7]] },
    { question: "¿Has notado que últimamente has tenido sentimientos de tristeza frecuentes?", answers: [["No he notado sentimientos de tristeza", 0], ["He notado sentimientos de tristeza pero se me pasa demasiado rápido", 0.25], ["He tenido cambios de ánimo muy frecuentemente durante estos días y se me dificulta concentrarme en otras actividades", 0.75], ["Definitivamente hay algo malo conmigo no puedo hacer nada y solo llegan malos pensamientos a mi cabeza", 1]] },
    { question: "¿Ha sufrido sentimientos de ira frecuentemente por cosas que parecen no tener mucha importancia?", answers: [["No he tenido sentimiento de ira por causas menores", 0], ["He tenido algunas causas de ira por cosas menores", 0.15], ["He sentido ira frecuentemente incluso por cosas que que antes no lo hacían", 0.45], ["He tenido una sensación de ira muy frecuentemente sin motivo algunos, incluso para cosas que antes no lo hacían", 0.90]] },
    { question: "¿Ha notado que sus capacidades de razonamiento se han visto disminuidas o ha tenido dificultad para hacerlas?", answers: [["No lo he notado", 0], ["He notado un aumento leve en la dificultad para razonar algunas ideas", 0.3], ["He notado un aumento moderado en la dificultad para razonar algunas ideas que antes podría resolverlas con mayor facilidad", 0.6], ["Definitivamente he notado una gran dificultad para lograr razonar algunas ideas y suelo cambiar de pensamiento muy rápidamente", 0.8]] },
    { question: "¿Ha sufrido alguna dificultad para coordinar sus movimientos recientemente y antes lo podía hacer sin ningún problema?", answers: [["No he tenido ningún problema", 0], ["Si, he sentido algunas dificultades sin motivo aparente", 0.25], ["Definitivamente he tenido problemas para coordinar mis movimientos", 0.7]] },
    { question: "¿Ha tenido algún tipo de miedo recientemente? Como por ejemplo, a la incertidumbre a la soledad o miedo social", answers: [["No he tenido ninguna sensación de miedo", 0], ["Si, pero muy esporádicamente", 0.2], ["He sufrido miedo de forma regular y antes no me sucedia", 0.5], ["He tenido una sensación de miedo de forma abrumadora, aún puedo seguir con mis actividades pero me cuesta", 0.75], ["La cantidad de miedo que he sentido me ha sobrepasado, me es muy difícil continuar con mis actividades", 1]] },
    { question: "¿Ha tenido sensaciones de desvanecimiento recientemente?", answers: [["No he tenido esa sensación", 0], ["La sensación ha sido muy esporádica", 0.1], ["La sensación ha sido ha sido de vez en cuando", 0.35], ["He tenido dicha sensación muy frecuentemente", 0.7]] },
    { question: "¿Recientemente has sentido mareos o náuseas?", answers: [["Ninguno de los dos", 0], ["He sentido por lo menos uno de los dos de forma leve", 0.15], ["He sentido por lo menos uno de los dos de forma regular", 0.4], ["He tenido ambos de forma leve", 0.55], ["He tenido ambos de forma regular", 0.7]] },
    { question: "¿Recientemente has tenido pensamientos negativos sobre ti mismo?", answers: [["No he tenido pensamiento negativos sobre mi", 0], ["He tenido pensamiento negativos mi, pero por algún suceso reciente, sin embargo lo he superado sin dificultad", 0.1], ["He tenido pensamiento negativos sobre mí de vez en cuando y me hacen sentir mal", 0.3], ["La cantidad de pensamiento negativos sobre mí ha sido muy frecuente", 0.6], ["Definitivamente he tenido una gran cantidad de pensamientos negativos sobre mi y no se como sobrellevarlos", 1]] },
    { question: "¿Has notado pérdida de cabello recientemente?", answers: [["No", 0], ["Si", 0.8]] },
    { question: "¿Has notado problemas para diferenciar la realidad de los pensamientos recientemente?", answers: [["No", 0], ["He tenido momentos esporádicos en los que me cuesta diferenciarlos", 0.4], ["Si, he tenido problemas con conocidos por que no son capaces de entender mis ideas", 0.9]] },
    { question: "¿Te irritas muy fácilmente por tener cosas que apenas se notan desordenadas?", answers: [["Puedo tener algunas cosas desordenadas por un tiempo, entiendo que todo tiende al caos", 0], ["Puedo tener algunas cosas desordenadas, me suelo irritar de forma leve", 0.2], ["No soporto ver las cosas desordenadas, empiezo a sentir un sentimiento de culpa excesiva", 0.6], ["No soporto ver las cosas desordenadas aunque no me pertenezcan y todo tiene que estar simétrico", 1]] },
    { question: "¿Te mantienes constantemente limpiando por miedo a ser infectado?", answers: [["Limpio únicamente lo necesario no tengo miedo a infectarme", 0.1], ["Limpio más de lo necesario pero no tengo miedo a infectarme", 0.4], ["Limpio las cosas 2 o más veces en un periodo de tiempo muy corto, los gérmenes están por todos lados", 0.9]] },
    { question: "¿Con qué facilidad puedes desprenderte de objetos materiales sin que esto te haga sentir culpable?", answers: [["No se me dificulta", 0], ["Se me dificulta un poco pero suelo superarlo sin muchos problemas", 0.2], ["Se me dificulta y puedo durar unos días con un sentimiento de vacío", 0.6], ["Se me dificulta hasta que encuentre un objeto que supla al anterior", 1]] }
  ],
  DISEASES_ARRAY: [
    {
      name: 'Desorden de amnesia',
      weights: [1, 0.8, 0.7, 0.6, 0.8, 0.7, 0.8, 0.4, 0, 1, 0.8, 0, 1, 0.9, 0.7, 0, 0, 0.5, 0, 0.5, 0, 0, 0],
      imagePath: 'amnesia',
      definition: `<p>La amnesia es una alteración de la memoria más o menos permanente por la que se es incapaz de acceder a una parte o a la parcialidad de los recuerdos. Teniendo en cuenta que en la memoria están implicados tres procesos principalmente:</p>
      <p>Creación del recuerdo, donde se aprenden nuevos nombres y situaciones. Todo lo que percibimos es información que está disponible por breves momentos en nuestro cerebro, en lo que se denomina memoria a corto plazo, y es la atención la encargada de seleccionar lo relevante que debemos recordar.</p>
      `,
      causes: `<p>La amnesia puede derivar de un deterioro cerebral difuso o de lesiones bilaterales o
      multifocales que alteran las áreas de almacenamiento de las memorias en los 
      hemisferios cerebrales.
      </p>
      <p>Las vías predominantes para la memoria declarativa recorren la región 
      parahipocámpica, así como la parte inferomedial de los lóbulos temporales, la 
      superficie orbitaria de los lóbulos (prosencéfalo basal) y el diencéfalo (que contiene el tálamo y el hipotálamo). De estas estructuras, los siguientes son fundamentales:
      Giros del hipocampo, hipotálamo, núcleos del cerebro anterior basal y núcleos talámicos mediodorsales.
      </p>`,
      treatment: `<p>El tratamiento para la amnesia se centra en técnicas y estrategias para ayudar a 
      compensar el problema de memoria, así como en tratar las enfermedades de fondo
      que la provoquen.</p>
      <p><b>Terapia ocupacional.</b>Una persona con amnesia puede trabajar con un terapeuta
      ocupacional para aprender nueva información que reemplace la que se perdió, o
      para usar
      recuerdos intactos como base para asimilar información nueva.
      El entrenamiento de la memoria también puede consistir en distintas estrategias
      para organizar la información a fin de que sea más fácil recordarla, así como para
      mejorar la comprensión de una conversación prolongada.
      </p>
      <p><b>Asistencia tecnológica.</b>Para numerosas personas con amnesia es útil usar
      tecnología inteligente, como teléfonos inteligentes o una tableta portátil. Con algo de
      entrenamiento y práctica, incluso las personas con amnesia grave pueden usar
      estos organizadores electrónicos como ayuda para realizar las tareas cotidianas.
      </p>`,
      reference: 'https://www.mayoclinic.org/es-es/diseases-conditions/amnesia/symptoms-causes/syc-20353360#:~:text=Las%20dos%20caracter%C3%ADsticas%20principales%20de,sol%C3%ADa%20ser%20familiar%20(amnesia%20retr%C3%B3grada)'
    },
    {
      name: 'Esquizofrenia',
      weights: [1, 0.9, 1, 1, 0, 0.8, 1, 1, 0.8, 0.4, 0.7, 0.8, 1, 1, 1, 0, 0, 0.5, 0, 1, 0, 0.1, 0],
      imagePath: 'schizophrenia',
      definition: `La esquizofrenia es un trastorno grave del neurodesarrollo que perdura toda la vida y que afecta la forma cómo una persona piensa, siente y se comporta.
      Las personas con esquizofrenia pueden tener delirios, lenguaje o comportamiento desorganizado y capacidad cognitiva alterada. Pueden escuchar voces o ver cosas que no están ni ocurren. La esquizofrenia puede provocar una combinación de alucinaciones, delirios o trastornos graves en el pensamiento y el comportamiento, que afecta el funcionamiento diarios y puede ser incapacitante.
      `,
      causes: `Se desconocen con certeza las causas de la esquizofrenia, pero los investigadores asumen que la combinación genética, la química del cerebro y el ambiente contribuyen al desarrollo de este trastorno.`,
      treatment: `La esquizofrenia requiere tratamiento de por vida, incluso si los síntomas
      desaparecen. El tratamiento con medicamentos y terapia psicosocial puede ayudar a
      controlar la enfermedad. En algunos casos puede ser necesaria una internación.
      Por lo general, un psiquiatra con experiencia en esquizofrenia guía el tratamiento. 
      El equipo de tratamiento puede incluir un psicólogo, un asistente social, personal 
      de enfermería psiquiátrica y posiblemente un encargado del caso para coordinar la atención.`,
      reference: 'https://www.nimh.nih.gov/health/publications/espanol/la-esquizofrenia/#:~:text=Las%20personas%20con%20esquizofrenia%20pueden,pensamientos%20o%20intentando%20hacerles%20da%C3%B1o'
    },
    {
      name: 'Psicosis',
      weights: [0, 0.9, 1, 1, 0, 1, 0.9, 1, 0.3, 0.3, 0.5, 0.6, 0.9, 1, 0.9, 0, 0, 0.7, 0, 1, 0.1, 0, 0],
      imagePath: 'psicosis',
      definition: `<p>Término con el significado trastorno de la mente, a diferencia de la neurosis La psicosis es un trastorno mental grave que altera profundamente la capacidad mental de un individuo y le hace perder contacto con la realidad. Puede ocurrir a cualquier edad, aunque es altamente raro en niños y adolescentes de 15 años. La psicosis trae consigo complicaciones graves que incluyen autolesiones, suicidio, abuso de alcohol y drogas.</p>`,
      causes: `<p>Aunque no haya una causa de la psicosis, se le pueden atribuir las siguientes causas:</p>
      <p>Una enfermedad psiquiátrica, como trastorno bipolar, esquizofrenia o depresión grave.</p>
      <p>Una enfermedad física, enfermedades neurodegenerativas (alzheimer, parkinson demencia de cuerpos de lewy), tumores cerebrales, esclerosis múltiple, epilepsia, apoplejía, trastornos del desarrollo neurológico, anomalías cromosómicas, trastornos endocrinos, insuficiencia suprarrenal, síndrome de Cushing, entre otras.
      Abuso de sustancias psicoactivas tales como alcohol, marihuana, cocaína, LSD, anfetaminas, etc.</p>`,
      treatment: `<p>Existen diferentes tipos de fármacos de gran eficacia, tanto en la reducción de
      síntomas como en el alivio de la ansiedad que los acompaña. El tratamiento suele
      iniciarse en dosis bajas y el psiquiatra es quien determina las modificaciones
      necesarias.</p>
      <p>Se dispone de un gran número de fármacos, lo que permite realizar cambios entre
      ellos en caso de presentarse efectos secundarios. Es importante que el paciente
      informe a su psiquiatra si presenta algún efecto adverso, ya que su aparición puede
      empeorar el cumplimiento de un tratamiento que es fundamental para la
      estabilización.</p>`
    },
    {
      name: 'Ataques de pánico',
      weights: [0, 1, 0.3, 0.3, 0, 0.2, 0, 0.4, 1, 0, 0.4, 0.2, 0.3, 1, 1, 0.9, 0.9, 0.6, 0, 0.5, 0.1, 0, 0.3],
      imagePath: 'panicAttack',
      definition: `<p>Un ataque de pánico es un episodio repentino de miedo intenso que provoca reacciones físicas graves cuando no existe ningún peligro real o causa aparente. Los ataques de pánico pueden provocar mucho miedo. Cuando se presenta un ataque de pánico, puedes sentir que estás perdiendo el control, que estás teniendo un ataque cardíaco o, incluso, que vas a morir.</p>`,
      causes: `<p>Se desconoce la causa de los ataques de pánico o del trastorno de pánico pero estos factores pueden influir:</p>
      <p><b>La genética</b></p>
      <p><b>Un alto nivel de estrés</b></p>
      <p><b>Un carácter que es más sensible al estrés y proclive a las emociones negativas</b></p>
      <p><b>Ciertos cambios en la manera en que funcionan las partes del cerebro</b></p>`,
      treatment: `<p>No existe una manera segura de evitar los ataques de pánico o el trastorno de pánico. Sin embargo, estas recomendaciones pueden ayudar.</p>
      <p>Busca tratamiento para los ataques de pánico cuanto antes para ayudar a evitar que empeoren o se vuelvan más frecuentes.</p>
      <p>Cumple con el plan de tratamiento para ayudar a evitar las recaídas o el agravamiento de los síntomas de los ataques de pánico.</p>
      <p>Haz actividad física regularmente, ya que puede contribuir a protegerte de la ansiedad.</p>`,
      reference: 'https://www.mayoclinic.org/es-es/diseases-conditions/panic-attacks/symptoms-causes/syc-20376021'
    },
    {
      name: 'Demencia',
      weights: [0, 1, 0.9, 1, 0.5, 0.9, 0.8, 1, 0.7, 0.3, 0.4, 0.6, 1, 0.9, 0.9, 0.3, 0, 0.8, 0, 1, 0, 0, 0],
      imagePath: 'dementia',
      definition: `<p>Describe un grupo de síntomas que afectan a la memoria, el pensamiento y las habilidades sociales lo suficientemente graves como para intervenir en tu vida diaria.
      No se trata de una enfermedad específica, hay varias enfermedades que pueden provocar demencia.</p>
      </p>Aunque la demencia generalmente implica la pérdida de memoria, hay numerosas causas de pérdida de memoria. El hecho de padecer pérdida de memoria no significa que tengas demencia.`,
      causes: `<p>La demencia es causada por el daño o la pérdida de las células nerviosas y sus 
      conexiones en el cerebro. En función del área del cerebro afectada por el daño, la 
      demencia puede tener un impacto diferente en las personas y provocar diferentes 
      síntomas.</p>
      <p>Las demencias a menudo se agrupan por lo que tienen en común, como la proteína
      o proteínas depositadas en el cerebro o la parte del cerebro que se ve afectada. 
      Algunas enfermedades se asimilan a las demencias, como las que se producen por
      una reacción a medicamentos o deficiencias vitamínicas, y podrían mejorar con el
      tratamiento.</p>`,
      treatment: `<p>Gran porcentaje de los tipos de demencia no tienen cura, pero hay formas de controlar los síntomas.<p>
      <h4>Medicamentos:</h4>
      <p><b>Inhibidores de la colinesterasa.</b> Estos medicamentos como el donepezilo, la rivastigmina y la galantamina actúan aumentando los niveles de un mensajero químico involucrado en la memoria y el razonamiento. Aunque se usan principalmente para tratar la enfermedad de Alzheimer, estos medicamentos también podrían recetarse para tratar otras demencias, como la demencia vascular, la demencia por la enfermedad de parkinson y la demencia con cuerpos de Lewy.
      Algunos de los efectos secundarios pueden ser náuseas, vómitos y diarrea. Otros posibles efectos secundarios son la disminución de la frecuencia cardiaca, desmayos y alteraciones del sueño.</p>
      <b>Memantina.</b> La memantina actúa regulando la actividad del glutamato, otro mensajero químico involucrado en las funciones cerebrales como el aprendizaje y la memoria.
      Otros medicamentos. El médico puede recetar medicamentos para tratar otros síntomas o trastornos como la depresión, alteraciones del sueño, alucinaciones, parkinson o agitación.</p>`,
      reference: 'https://www.mayoclinic.org/es-es/diseases-conditions/dementia/symptoms-causes/syc-20352013'
    },
    {
      name: 'Trastorno depresivo mayor',
      weights: [0.5, 0.9, 0.3, 1, 0.6, 0.5, 1, 1, 0, 0.6, 1, 1, 0.9, 0.2, 0.6, 0.2, 0.2, 0.6, 0.3, 0.1, 0.3, 0, 0.3],
      imagePath: 'depressive',
      definition: `<p>La depresión es un trastorno emocional que causa un sentimiento de tristeza constante y una pérdida de interés en realizar diferentes actividades. También denominada «trastorno depresivo mayor» o «depresión clínica», afecta los sentimientos, los pensamientos y el comportamiento de una persona, y puede causar una variedad de problemas físicos y emocionales. Es posible que tengas dificultades para realizar las actividades cotidianas y que, a veces, sientas que no vale la pena vivir.</p>`,
      causes: `<p>Se desconoce la causa exacta de la depresión. Al igual que sucede con muchos trastornos mentales, puede comprender diversos factores, como:</p>
      <p><b>Química del cerebro.</b> Los neurotransmisores son sustancias químicas que se encuentran naturalmente en el cerebro y que probablemente desempeñan un rol en la depresión. Las investigaciones recientes indican que los cambios en la función y el efecto de estos neurotransmisores, y cómo interactúan con los neurocircuitos involucrados en mantener la estabilidad del estado de ánimo pueden tener un rol importante en la depresión y su tratamiento.</p>
      <p><b>Hormonas.</b> Es posible que los cambios en el equilibrio hormonal del cuerpo tengan un rol al causar o desencadenar la depresión. Los cambios hormonales pueden presentarse en el embarazo y durante las semanas o meses después del parto (posparto), y por problemas de tiroides, menopausia u otros trastornos.</p>
      <p><b>Rasgos hereditarios.</b> La depresión es más frecuente en las personas cuyos parientes consanguíneos también tienen este trastorno. Los investigadores están buscando genes que puedan intervenir en el origen de la depresión.</p>`,
      treatment: `<p>Si te sientes deprimido, pide una cita con un médico o un profesional de salud mental tan pronto como sea posible. Si no quieres buscar tratamiento, habla con un amigo o un ser querido, cualquier proveedor de atención médica, un líder religioso u otra persona en quien confíes.</p>`,
      reference: 'https://www.mayoclinic.org/es-es/diseases-conditions/depression/symptoms-causes/syc-20356007'
    },
    {
      name: 'Trastorno de ansiedad',
      weights: [0.5, 0.3, 0.2, 0.8, 0, 1, 0.9, 0.5, 1, 0, 0.3, 0.7, 0.5, 0.2, 0.5, 0.3, 0.1, 0.6, 1, 0.5, 0.3, 0, 0.3],
      imagePath: 'anxiety',
      definition: `<p>Sentir ansiedad de modo ocasional es una parte normal de la vida. Sin embargo, las personas con trastornos de ansiedad con frecuencia tienen preocupaciones y miedos intensos, excesivos y persistentes sobre situaciones diarias. Con frecuencia, en los trastornos de ansiedad se dan episodios repetidos de sentimientos repentinos de ansiedad intensa y miedo o terror que alcanzan un máximo en una cuestión de minutos (ataques de pánico).</p>`,
      causes: `<p>No está del todo claro cuáles son las causas de los trastornos de ansiedad. Ciertas experiencias de vida, como acontecimientos traumáticos, parecen provocar los trastornos de ansiedad en personas que ya son propensas a la ansiedad. Los rasgos heredados también pueden ser un factor.</p>`,
      treatment: `<p>No es posible prever con certeza qué causa que una persona presente un trastorno de ansiedad, pero puedes tomar medidas para reducir el impacto de los síntomas si te sientes ansioso</p>
      <p><b>Pide ayuda enseguida.</b> La ansiedad, como muchos otros trastornos mentales, puede ser más difícil de tratar si te demoras.</p>
      <p><b>Mantente activo.</b> Participa en actividades que disfrutes y que te hagan sentir bien contigo mismo. Disfruta la interacción social y tus afectos, que pueden aliviar tus preocupaciones.</p>`,
      reference: 'https://www.mayoclinic.org/es-es/diseases-conditions/anxiety/symptoms-causes/syc-20350961'
    },
    {
      name: 'Trastorno obsesivo-compulsivo',
      weights: [0, 0.5, 0.5, 1, 0, 0, 0, 0.6, 0, 0, 0.2, 0.3, 0.2, 0, 0.8, 0.2, 0, 1, 0.4, 0.2, 1, 1, 1],
      imagePath: 'obsessiveCompulsive',
      definition: `<p>El trastorno obsesivo compulsivo (TOC) se caracteriza por un patrón de pensamientos y miedos no deseados (obsesiones) que provocan comportamientos repetitivos (compulsiones). Estas obsesiones y compulsiones interfieren en las actividades diarias y causan un gran sufrimiento emocional.</p>`,
      causes: `<p>Se desconoce la causa del trastorno obsesivo-compulsivo. Las principales teorías son:</p>
      <p><b>Biología.</b> El TOC puede resultar del cambios en la química natural del cuerpo o en las funciones cerebrales.</p>
      <p><b>Genética.</b> El TOC puede tener un componente genético, pero aún no se han identificado genes específicos.</p>
      <p><b>Aprendizaje.</b> Los miedos obsesivos y los comportamientos compulsivos se pueden aprender al observar a los familiares o de forma gradual a lo largo del tiempo.</p>`,
      treatment: `<p>No hay una forma segura de prevenir el trastorno obsesivo compulsivo. Sin embargo, recibir tratamiento lo antes posible puede ayudar a evitar que el trastorno obsesivo compulsivo empeore y altere las actividades y la rutina diaria.</p>`,
      reference: 'https://www.mayoclinic.org/es-es/diseases-conditions/obsessive-compulsive-disorder/symptoms-causes/syc-20354432'
    },
    {
      name: 'Trastorno afectivo bipolar',
      weights: [0.4, 0.5, 0.2, 1, 0.4, 0.2, 0.8, 0.9, 0, 0.2, 1, 1, 0.5, 0, 0.2, 0, 0, 0.5, 0.4, 0.1, 0.2, 0, 0.3],
      imagePath: 'bipolar',
      definition: `<p>El trastorno bipolar, antes denominado «depresión maníaca», es una enfermedad mental que causa cambios extremos en el estado de ánimo que comprenden altos emocionales (manía o hipomanía) y bajos emocionales (depresión).</p>`,
      causes: `<p>Se desconoce la causa exacta del trastorno bipolar, pero este puede implicar varios factores, entre ellos:</p>
      <p><b>Diferencias biológicas.</b> Las personas con trastorno bipolar tienen cambios físicos en el cerebro. La importancia de estos cambios aún es incierta, pero con el tiempo puede ayudar a identificar las causas.</p>
      <p><b>Genética.</b> El trastorno bipolar es más frecuente en personas que tienen un familiar de primer grado (como hermanos o padres) con esta enfermedad. Los investigadores están buscando genes que puedan intervenir en el origen del trastorno bipolar.</p>`,
      treatment: `<p>No existe una forma de prevenir el trastorno bipolar. Sin embargo, recibir tratamiento tan pronto aparecen los primeros signos de un trastorno de salud mental puede ayudar a evitar que el trastorno bipolar u otras enfermedades de salud mental empeoren.</p>`,
      reference: 'https://www.mayoclinic.org/es-es/diseases-conditions/bipolar-disorder/symptoms-causes/syc-20355955'
    },
    {
      name: 'Trastorno por estrés postraumático',
      weights: [0.4, 0.6, 0.6, 1, 0.4, 0.3, 0.8, 0.9, 0.7, 0.7, 0.5, 0.9, 0.2, 0, 0.8, 1, 1, 0.8, 0, 0.5, 0.4, 0, 0.4],
      imagePath: 'distress',
      definition: `<p>El trastorno de estrés postraumático es una enfermedad de salud mental desencadenada por una situación aterradora, ya sea que la hayas experimentado o presenciado. Los síntomas pueden incluir reviviscencias, pesadillas y angustia grave, así como pensamientos incontrolables sobre la situación.</p>`,
      causes: `<p>Puedes presentar trastorno de estrés postraumático cuando sufres, ves o te enteras de un acontecimiento que implique la realidad o la amenaza de muerte, lesiones graves o violación sexual.</p>
      <p>Los médicos no están seguros de la razón por la que algunas personas presentan el trastorno de estrés postraumático. Al igual que con muchos problemas de salud mental, el trastorno de estrés postraumático probablemente sea causado por una combinación compleja de:</p>
      <p>Experiencias estresantes, entre ellas la cantidad y gravedad de los traumas que hayas atravesado en tu vida</p>
      <p>Riesgos de problemas mentales hereditarios, tales como un riesgo elevado de sufrir ansiedad y depresión</p>
      <p>Características hereditarias de la personalidad —a menudo denominada temperamento</p>`,
      treatment: `<p>Tras sobrevivir un acontecimiento traumático, muchas personas al principio pasan por síntomas similares a los del trastorno de estrés postraumático, como el no poder dejar de pensar en lo que sucedió. El temor, la ansiedad, el enfado, la depresión y la culpa, son todas reacciones frecuentes al trauma. No obstante, la mayoría de las personas que sufren un trauma no contraen a largo plazo el trastorno de estrés postraumático.</p>
      <p>Obtener ayuda y apoyo a tiempo podría evitar que las reacciones normales al estrés empeoren y padezcas trastorno de estrés postraumático. Esto podría implicar que recurras a tu familia y amigos, quienes te escucharán y reconfortarán. Podría suponer que debas buscar un profesional de salud mental y asistir a sesiones de terapia por un corto tiempo. Algunas personas probablemente encuentren útil acudir a su comunidad religiosa.</p>`,
      reference: 'https://www.mayoclinic.org/es-es/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355967'
    }
  ],
  NO_DISEASE: 'No hemos podido obtener un resultado confiable',
  MIN_DISEASES_POND: 1,
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
    subtitle1: 'Descripción',
    subtitle2: 'Causas',
    subtitle3: 'Tratamiento',
  },
  EXIT_QUIZ_TEXT: 'Salir',
  NEXT_TEXT: 'Siguiente'
}