import React, { useState, useEffect } from "react";
import {
  Trophy,
  RotateCcw,
  CheckCircle,
  XCircle,
  Clock,
  Target,
} from "lucide-react";

interface QuizSectionProps {
  question: string;
  options: string[];
  currentIndex: number;
  total: number;
  score: number;
  selectedAnswer: string | null;
  onSelectAnswer: (answer: string) => void;
  showResult: boolean;
  onReset: () => void;
  correctAnswer: string;
  showFeedback: boolean;
  timeLeft?: number;
}

const QuizSection: React.FC<QuizSectionProps> = ({
  question,
  options,
  currentIndex,
  total,
  score,
  selectedAnswer,
  onSelectAnswer,
  showResult,
  onReset,
  correctAnswer,
  showFeedback,
  timeLeft,
}) => {
  const [animateScore, setAnimateScore] = useState(false);

  useEffect(() => {
    if (showFeedback && selectedAnswer === correctAnswer) {
      setAnimateScore(true);
      setTimeout(() => setAnimateScore(false), 600);
    }
  }, [showFeedback, selectedAnswer, correctAnswer]);

  const getScoreColor = () => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return "text-green-400";
    if (percentage >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  const getScoreEmoji = () => {
    const percentage = (score / total) * 100;
    if (percentage >= 90) return "🌟";
    if (percentage >= 80) return "🎉";
    if (percentage >= 70) return "👍";
    if (percentage >= 60) return "😊";
    return "💪";
  };

  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-slate-800/90 to-purple-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-4 md:p-6">
          {!showResult ? (
            <>
              {/* Compact Progress Header */}
              <div className="mb-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-500/20 p-2 rounded-full">
                      <Target className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-white">
                        Soal {currentIndex + 1}
                      </span>
                      <span className="text-sm text-gray-300 ml-1">
                        dari {total}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {timeLeft !== undefined && (
                      <div className="flex items-center gap-2 bg-orange-500/20 px-3 py-1 rounded-full">
                        <Clock className="w-4 h-4 text-orange-400" />
                        <span className="text-orange-400 font-bold text-sm">
                          {timeLeft}s
                        </span>
                      </div>
                    )}

                    <div
                      className={`flex items-center gap-2 transition-all duration-300 ${
                        animateScore ? "scale-110" : ""
                      }`}
                    >
                      <Trophy className={`w-5 h-5 ${getScoreColor()}`} />
                      <span className={`text-lg font-bold ${getScoreColor()}`}>
                        {score}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Compact Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-gray-700/50 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: `${((currentIndex + 1) / total) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <div className="text-center mt-1 text-xs text-gray-400">
                    {Math.round(((currentIndex + 1) / total) * 100)}% selesai
                  </div>
                </div>
              </div>

              {/* Compact Question */}
              <div className="mb-4">
                <h3 className="text-lg md:text-xl font-bold text-white leading-relaxed bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {question}
                </h3>
              </div>

              {/* Compact Answer Options */}
              <div className="grid gap-2 md:gap-3">
                {options.map((option, index) => {
                  let buttonStyle =
                    "bg-slate-700/50 hover:bg-slate-600/50 border-slate-600/50 text-white";
                  let icon = null;

                  if (showFeedback && selectedAnswer) {
                    if (option === correctAnswer) {
                      buttonStyle =
                        "bg-green-500/20 border-green-400 text-green-100";
                      icon = <CheckCircle className="w-4 h-4 text-green-400" />;
                    } else if (
                      option === selectedAnswer &&
                      option !== correctAnswer
                    ) {
                      buttonStyle = "bg-red-500/20 border-red-400 text-red-100";
                      icon = <XCircle className="w-4 h-4 text-red-400" />;
                    }
                  } else if (selectedAnswer === option) {
                    buttonStyle =
                      "bg-blue-500/30 border-blue-400 text-blue-100";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => onSelectAnswer(option)}
                      disabled={selectedAnswer !== null}
                      className={`group relative p-3 md:p-4 rounded-xl border-2 backdrop-blur-sm text-left font-medium transition-all duration-300 transform hover:scale-[1.02] ${buttonStyle} ${
                        selectedAnswer === null
                          ? "cursor-pointer"
                          : "cursor-default"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-current/20 flex items-center justify-center text-xs font-bold">
                            {String.fromCharCode(65 + index)}
                          </div>
                          <span className="text-sm md:text-base">{option}</span>
                        </div>
                        {icon && <div className="animate-bounce">{icon}</div>}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Compact Feedback Message */}
              {showFeedback && (
                <div className="mt-4 p-3 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-white/10">
                  <div
                    className={`flex items-center gap-2 text-sm ${
                      selectedAnswer === correctAnswer
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {selectedAnswer === correctAnswer ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <XCircle className="w-4 h-4" />
                    )}
                    <span className="font-semibold">
                      {selectedAnswer === correctAnswer
                        ? "Benar! 🎉"
                        : `Salah. Jawaban: ${correctAnswer}`}
                    </span>
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Compact Results Screen */
            <div className="text-center py-4">
              <div className="mb-6 relative">
                <div className="text-5xl md:text-6xl mb-3 animate-bounce">
                  {getScoreEmoji()}
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Kuis Selesai!
              </h3>

              <div className="mb-6 p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-white/10">
                <p className="text-xl md:text-2xl font-bold mb-2 text-white">
                  Skor: <span className={getScoreColor()}>{score}</span> dari{" "}
                  {total}
                </p>
                <p className="text-lg text-gray-300 mb-3">
                  Persentase: {Math.round((score / total) * 100)}%
                </p>

                <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
                  <div
                    className={`h-3 rounded-full transition-all duration-1000 ease-out ${
                      (score / total) * 100 >= 80
                        ? "bg-green-500"
                        : (score / total) * 100 >= 60
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                    style={{ width: `${(score / total) * 100}%` }}
                  ></div>
                </div>
              </div>

              <button
                onClick={onReset}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 mx-auto text-sm md:text-base"
              >
                <RotateCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                Coba Lagi
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizSection;
