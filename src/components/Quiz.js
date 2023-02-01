import React, { useState } from 'react';

const Quiz = () => {
	const questions = [
        {
			questionText: 'Mental health is an important part of our overall health and well-being. Mental health well-being includes which of the following?',
			answerOptions: [
				{ answerText: 'Emotional', isCorrect: false, id:1 },
				{ answerText: 'Psychological', isCorrect: false, id:2 },
				{ answerText: 'Social', isCorrect: false, id:3 },
				{ answerText: 'All the above', isCorrect: true, id:4 },
			],
		},    
		{
			questionText: 'According to the CDC, approximately how many Americans are currently living with a mental health condition?',
			answerOptions: [
				{ answerText: '15%', isCorrect: false, id:1 },
				{ answerText: '10%', isCorrect: false, id:2 },
				{ answerText: '20%', isCorrect: true, id:3 },
				{ answerText: '40%', isCorrect: false, id:4 },
			],
		},
		{
			questionText: 'Suicide is the ___ leading cause of death amongst people ages 15-34 in the US.',
			answerOptions: [
				{ answerText: '2nd', isCorrect: true, id:1 },
				{ answerText: '25th', isCorrect: false, id:2 },
				{ answerText: '8th', isCorrect: false, id:3 },
				{ answerText: '12th', isCorrect: false, id:4 },
			],
		},
		{
			questionText: 'Can mental illness can be treated?',
			answerOptions: [
				{ answerText: 'True', isCorrect: true, id:1 },
				{ answerText: 'False', isCorrect: false, id:2 },
			],
		},
        {
			questionText: 'If you know someone suffering from a mental illness, how can you help?',
			answerOptions: [
				{ answerText: 'Helping them gain access to mental health services', isCorrect: false, id:1 },
				{ answerText: 'Learning and sharing facts about mental health', isCorrect: false, id:2 },
                { answerText: 'Reaching out and letting them know that help is available', isCorrect: false, id:3 },
                { answerText: 'All the above', isCorrect: true, id:4 },
			],
		},
        {
			questionText: 'Which of the following is not considered amongst the three most common diagnoses of mental health in the US?',
			answerOptions: [
				{ answerText: 'PTSD', isCorrect: false, id:1 },
                { answerText: 'OCD', isCorrect: true, id:2 },
				{ answerText: 'Anxiety', isCorrect: false, id:3 },
                { answerText: 'Depression', isCorrect: false, id:4 },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='quiz'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => {
							return <button key={answerOption.id} className="quiz-button" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						})}
					</div>
				</>
			)}
		</div>
	);
}

export default Quiz;