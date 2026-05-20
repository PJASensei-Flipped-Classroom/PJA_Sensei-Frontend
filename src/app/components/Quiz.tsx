import { useState } from 'react';
import { Check, X, RotateCcw, Trophy } from 'lucide-react';
import { Quiz as QuizType } from '../data/quizzes';

interface QuizProps {
  quiz: QuizType;
}

export function Quiz({ quiz }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(quiz.questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const question = quiz.questions[currentQuestion];
  const selectedAnswer = selectedAnswers[currentQuestion];
  const isAnswered = selectedAnswer !== -1;

  const handleSelectAnswer = (answerIndex: number) => {
    if (!submitted) {
      const newAnswers = [...selectedAnswers];
      newAnswers[currentQuestion] = answerIndex;
      setSelectedAnswers(newAnswers);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setSubmitted(true);
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(quiz.questions.length).fill(-1));
    setShowResults(false);
    setSubmitted(false);
  };

  const calculateScore = () => {
    let correct = 0;
    quiz.questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const score = calculateScore();
  const percentage = Math.round((score / quiz.questions.length) * 100);

  if (showResults) {
    return (
      <div className="mt-8 p-6 bg-card border border-border rounded-lg">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="text-primary" size={32} />
          </div>
          <h3 className="text-2xl mb-2">Test ukończony!</h3>
          <p className="text-4xl font-bold text-primary mb-2">{percentage}%</p>
          <p className="text-muted-foreground">
            {score} z {quiz.questions.length} poprawnych odpowiedzi
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {quiz.questions.map((q, index) => {
            const userAnswer = selectedAnswers[index];
            const isCorrect = userAnswer === q.correctAnswer;

            return (
              <div
                key={q.id}
                className={`p-4 rounded-lg border ${
                  isCorrect
                    ? 'bg-green-50 border-green-200'
                    : 'bg-red-50 border-red-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  {isCorrect ? (
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  ) : (
                    <X className="text-red-600 flex-shrink-0 mt-1" size={20} />
                  )}
                  <div className="flex-1">
                    <p className="font-medium mb-2">
                      Pytanie {index + 1}: {q.question}
                    </p>
                    {!isCorrect && (
                      <div className="text-sm space-y-1">
                        <p className="text-red-700">
                          Twoja odpowiedź: {q.options[userAnswer]}
                        </p>
                        <p className="text-green-700">
                          Poprawna odpowiedź: {q.options[q.correctAnswer]}
                        </p>
                      </div>
                    )}
                    <p className="text-sm text-muted-foreground mt-2">
                      {q.explanation}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={handleReset}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <RotateCcw size={18} />
          Spróbuj ponownie
        </button>
      </div>
    );
  }

  return (
    <div className="mt-8 p-6 bg-card border border-border rounded-lg">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl">{quiz.title}</h3>
          <span className="text-sm text-muted-foreground">
            Pytanie {currentQuestion + 1} / {quiz.questions.length}
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="mb-6">
        <p className="text-lg mb-4">{question.question}</p>
        {question.code && (
          <div className="my-4">
            <div className="bg-muted rounded-lg p-4 border border-border">
              <pre className="text-sm overflow-x-auto">
                <code>{question.code}</code>
              </pre>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = index === question.correctAnswer;
          const showCorrect = submitted && isCorrect;
          const showIncorrect = submitted && isSelected && !isCorrect;

          return (
            <button
              key={index}
              onClick={() => handleSelectAnswer(index)}
              disabled={submitted}
              className={`w-full p-4 rounded-lg border text-left transition-all ${
                showCorrect
                  ? 'bg-green-50 border-green-500 text-green-900'
                  : showIncorrect
                  ? 'bg-red-50 border-red-500 text-red-900'
                  : isSelected
                  ? 'bg-primary/5 border-primary'
                  : 'border-border hover:bg-accent'
              } ${submitted ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {showCorrect && <Check className="text-green-600" size={20} />}
                {showIncorrect && <X className="text-red-600" size={20} />}
              </div>
            </button>
          );
        })}
      </div>

      {submitted && (
        <div className="mb-6 p-4 bg-accent rounded-lg">
          <p className="text-sm font-medium mb-1">Wyjaśnienie:</p>
          <p className="text-sm text-muted-foreground">{question.explanation}</p>
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="px-4 py-2 rounded-md border border-border hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Poprzednie
        </button>
        <button
          onClick={handleNext}
          disabled={!isAnswered}
          className="flex-1 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentQuestion === quiz.questions.length - 1 ? 'Zakończ test' : 'Następne'}
        </button>
      </div>
    </div>
  );
}
