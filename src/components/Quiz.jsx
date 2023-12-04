import questions from '../../questions';
import Question from '../../questions';
import { useState } from 'react';

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswer.length;
  const shuffledAnswer = [...questions[activeQuestionIndex].answers];
  shuffledAnswer.sort();
  function handleSelectAnswer(selectedAnswer) {
    setUserAnswer((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  }
  return (
    <div id='quiz'>
      <div id='question'>
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
