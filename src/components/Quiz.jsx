import questions from '../../questions';
import Question from '../../questions';
import { useState } from 'react';
import quizComplete from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer';

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswer.length;

  const quizIsComplete = activeQuestionIndex === Question.length;
  function handleSelectAnswer(selectedAnswer) {
    setUserAnswer((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  }
  if (quizIsComplete) {
    return (
      <div id='summary'>
        <img src={quizComplete} />
        <h2>Quiz Completed</h2>
      </div>
    );
  }
  const shuffledAnswer = [...questions[activeQuestionIndex].answers];
  shuffledAnswer.sort(() => Math.random() - 0.5);
  return (
    <div id='quiz'>
      <div id='question'>
        <QuestionTimer
          timeout={10000}
          onTimeout={() => handleSelectAnswer(null)}
        />
        <h1>{Question[activeQuestionIndex].text}</h1>
        <ul id='answers'>
          {Question[activeQuestionIndex].answers.map((answer) => (
            <li className='answer' key={answer.id}>
              <button
                onClick={() => {
                  handleSelectAnswer(answer);
                }}
              >
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
