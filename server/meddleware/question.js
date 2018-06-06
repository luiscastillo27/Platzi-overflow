const question = {
    id: 1,
    title: '¿Cómo reutilizo un componente en Android?',
    description: 'Miren esta es mi pregunta...',
    createdAt: new Date(),
    icon: 'devicon-android-plain',
    answers: [],
    user: {
      name: 'Luis',
      lastname: 'Castillo',
      email: 'luiscastillo@iwebsapp.com',
      password: 'jimyluis'
    }
}

const questions = new Array(1).fill(question)

export const questionsMiddleware = (req, res, next) => {
  req.questions = questions
  next()
}

export const questionMiddleware = (req, res, next) => {
  const idQ = req.params.id
  questions.filter( function(element) {
    if (element.id == idQ) {
      req.question = element
    }
  })
  next()
}
