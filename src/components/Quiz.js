import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Quiz.css';

const Quiz = () => {
  const { level, language } = useParams();

  const allQuestions = {
    english: {
      1: [
        {
          question: 'Who is ____________, Alice or Bob?',
          options: ['tallest', 'tall', 'taller', 'the tallest'],
          answer: 'the tallest',
        },
        {
          question: 'The workshop will start __________ ten minutes.',
          options: ['in', 'on', 'with', 'about'],
          answer: 'in',
        },
        {
          question: 'I have a __________ assignments to finish.',
          options: ['few', 'fewer', 'less', 'little'],
          answer: 'few',
        }
      ],
      2: [
        {
          question: 'The majority of the news is about politics or sports.',
          options: ['The', 'of', 'news', 'politics'],
          answer: 'of',
        },
        {
          question: 'When we go on vacation, we plan to spend two days hiking.',
          options: ['When', 'plan', 'days', 'hiking'],
          answer: 'When',
        },
        {
          question: 'Linda and Mark send messages to each other often.',
          options: ['and', 'send', 'each', 'often'],
          answer: 'each',
        }
      ],
      3: [
        {
          question: 'The train ____________ arrives late in winter.',
          options: ['every day', 'later', 'yesterday', 'usually'],
          answer: 'usually',
        },
        {
          question: 'The manager will ___________ new members to the team.',
          options: ['appoint', 'disappoint', 'appointment', 'disappointed'],
          answer: 'appoint',
        },
        {
          question: "Sarah says she can't ___________ our invitation to lunch tomorrow.",
          options: ['angel', 'across', 'accept', 'almost'],
          answer: 'accept',
        }
      ],
      4: [
        {
          question: "The project team’s final report on the experiment was _______________.",
          options: ['comprehensive', 'numerous', 'alarming', 'temporary'],
          answer: 'comprehensive',
        },
        {
          question: "Despite the initial challenges, the startup company managed to _______________ in the competitive market.",
          options: ['proliferate', 'dwindle', 'scatter', 'lessen'],
          answer: 'proliferate',
        },
        {
          question: "During the meeting, Sarah provided a _______________ explanation of the new policy.",
          options: ['concise', 'verbose', 'redundant', 'negligible'],
          answer: 'concise',
        },
      ],
    },
    french: {
      1: [
        {
          question: 'Quelle est la capitale de la France?',
          options: ['Paris', 'Lyon', 'Marseille', 'Toulouse'],
          answer: 'Paris',
        },
        {
          question: 'Comment dit-on "hello" en français?',
          options: ['Bonjour', 'Salut', 'Au revoir', 'Merci'],
          answer: 'Bonjour',
        },
        {
          question: 'Quel est le numéro d\'urgence pour la police en France?',
          options: ['15', '17', '18', '112'],
          answer: '17',
        },
      ],
      2: [
        {
          question: 'Ce blouson est trop large; je préfère celle que je vois sur le mannequin.',
          options: ['celle', 'est', 'vois', 'sur'],
          answer: 'est',
        },
        {
          question: 'Paris, capitale de la France, est une très belle ville.',
          options: ['belle', 'une', 'capitale', 'est'],
          answer: 'belle',
        },
        {
          question: 'Selon moi, la politique internationale doit intéresser tout le monde.',
          options: ['intéresser', 'moi', 'doit', 'internationale'],
          answer: 'moi',
        },
      ],
      3: [
        {
          question: 'Chaque fois que tu vas ______ Lucie tu la trouves plus intelligente.',
          options: ['visiter', 'regarder', 'voir', 'entendre'],
          answer: 'voir',
        },
        {
          question: 'Après un dîner dans un café, il faut payer _______.',
          options: ['l’addition', 'la note', 'le billet', 'le prix'],
          answer: 'l’addition',
        },
        {
          question: 'Je vais ______ une Peugeot l’année prochaine si j’ai assez d’argent.',
          options: ['prendre', 'vendre', 'acheter', 'venir'],
          answer: 'acheter',
        },
      ],
      4: [
        {
          question: 'Les enfants adorent jouer dans le __________ après l\'école.',
          options: ['jardin', 'maison', 'arbre', 'livre'],
          answer: 'jardin',
        },
        {
          question: 'Pierre a __________ un gâteau pour l\'anniversaire de sa sœur.',
          options: ['fait', 'lu', 'pris', 'bu'],
          answer: 'fait',
        },
        {
          question: 'Le dimanche, nous aimons __________ au marché pour acheter des fruits frais.',
          options: ['aller', 'dormir', 'écrire', 'parler'],
          answer: 'aller',
        },
      ],

    },
    spanish: {
      1: [
        {
          question: '¿Qué ____________ ustedes en la tarde?',
          options: ['hacéis', 'hago', 'hacen', 'haces'],
          answer: 'hacen',
        },
        {
          question: 'Ana y Carlos van ____________ parque.',
          options: ['al', 'de la', 'del', 'a la'],
          answer: 'al',
        },
        {
          question: 'Yo ____________ el amigo de Juan.',
          options: ['eres', 'soy', 'estoy', 'es'],
          answer: 'soy',
        },
      ],
      2: [
        {
          question: 'Este coche es el más rápido de toda la cuidad.',
          options: ['coche', 'más', 'rápido', 'cuidad'],
          answer: 'cuidad',
        },
        {
          question: 'Ellos estudian en la libreria durante el fin de semana.',
          options: ['Ellos', 'estudian', 'libreria', 'semana'],
          answer: 'libreria',  
        },
        {
          question: 'Me gusta escuchar musica cuando voy al gimnasio.',
          options: ['Me', 'escuchar', 'musica', 'gimnasio'],
          answer: 'musica', 
        },
      ],
      3: [
        {
          question: 'Pedro _____________ a sus amigos todos los días.',
          options: ['llama', 'habla', 'mira', 'escucha'],
          answer: 'llama',
        },
        {
          question: 'Los estudiantes _____________ mucho durante la clase.',
          options: ['aprenden', 'juegan', 'corren', 'dibujan'],
          answer: 'aprenden',
        },
        {
          question: 'María _____________ su coche cada semana.',
          options: ['lava', 'conduce', 'arregla', 'vende'],
          answer: 'lava',
        },
      ],
      4: [
        {
          question: 'María siempre ___________ su mochila antes de salir de casa.',
          options: ['perde', 'busca', 'encuentra', 'prepara'],
          answer: 'prepara',
        },
        {
          question: 'A pesar de la lluvia, ellos ___________ al parque.',
          options: ['irán', 'fueron', 'van', 'iban'],
          answer: 'fueron',
        },
        {
          question: 'El libro ___________ sobre la mesa es mío.',
          options: ['que', 'cual', 'quien', 'donde'],
          answer: 'que',
        },
      ]
    },
    italian:{
      1: [
        {
          question: 'I miei genitori mi ___________ delle favole ogni sera.',
          options: ['raccontano', 'leggono', 'cantano', 'dicono'],
          answer: 'leggono',
        },
        {
          question: 'Quando siamo andati a Milano, ____________ a visitare il Duomo.',
          options: ['abbiamo andati', 'siamo andato', 'abbiamo andato', 'siamo andati'],
          answer: 'siamo andati',
        },
        {
          question: 'Io ____________ il compito adesso.',
          options: ['sto facendo', 'faccendo', 'sto faccendo', 'state facendo'],
          answer: 'sto facendo',
        },
      ],

      2: [
        {
          question: 'Mario vuole comprare quella bicicletta per sua figlia.',
          options: ['Mario', 'quella', 'per', 'vuole'],
          answer: 'vuole',
        },
        {
          question: 'In questo ristorante non si servono piatti di carne.',
          options: ['In', 'si', 'servono', 'di'],
          answer: 'servono',
        },
        {
          question: 'Il mio fratello abita in una casa grande vicino a Torino.',
          options: ['Il', 'in', 'grande', 'a'],
          answer: 'Il',
        },
      ],
      3: [
        {
          question: 'Ogni volta che vado al mercato, _______________ della frutta fresca.',
          options: ['compro', 'compri', 'comprano', 'compra'],
          answer: 'compro',
        },
        {
          question: 'Durante le vacanze estive, _______________ sempre in montagna con gli amici.',
          options: ['andavo', 'andavamo', 'andavano', 'andava'],
          answer: 'andavamo',
        },
        {
          question: 'Lei _______________ il pranzo per la famiglia ogni domenica.',
          options: ['cuciniamo', 'cucinano', 'cucina', 'cucinate'],
          answer: 'cucina',
        },
      ],
      4: [
        {
          question: "Alla fine di questa settimana, io _______________ di studiare per l’esame.",
          options: ["avrei finito", "avessi finito", "avrò finito", "avr emo finito"],
          answer: "avrò finito",
        },
        {
          question: "Michele, è importante che tu _______________ quello che dicono i tuoi genitori.",
          options: ["fai", "faccia", "fare", "fa"],
          answer: "faccia",
        },
        {
          question: "Domani mattina, Marco e Lucia _______________ una lunga passeggiata nel parco.",
          options: ["faremo", "faranno", "fanno", "fare"],
          answer: "faranno",
        }
      ]
      


    }
  };

  const questions = allQuestions[language.toLowerCase()][level] || [];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    if (!selectedOption) {
      alert('Please select an answer before proceeding.');
      return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.answer;
    
    if (isCorrect) {
      setScore(score + 1);
    }

    setAnswers([...answers, { question: currentQuestion.question, selected: selectedOption, correct: currentQuestion.answer }]);
    setSelectedOption(null);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
  };

  return (
    <div className="quiz-container">
      <h1>Quiz - {language} Level {level}</h1>
      <p>Instructions: Select the best answer. You must answer each question before moving on to the next one.</p>
      {showResult ? (
        <div className="quiz-result">
          <h2>Your Score: {score} / {questions.length}</h2>
          <h3>Correct Answers:</h3>
          <ul>
            {answers.map((answer, index) => (
              <li key={index}>
                <strong>Question:</strong> {answer.question} <br />
                <strong>Your Answer:</strong> {answer.selected} <br />
                <strong>Correct Answer:</strong> {answer.correct} <br />
              </li>
            ))}
          </ul>
          <button onClick={handleRestart}>Restart Quiz</button>
        </div>
      ) : (
        <div className="quiz-question">
          <h2>{questions[currentQuestionIndex].question}</h2>
          <div className="quiz-options">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <div key={index} className="quiz-option">
                <label>
                  <input
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
          <button onClick={handleNextQuestion} disabled={!selectedOption}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
