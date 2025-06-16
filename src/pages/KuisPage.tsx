import React, { useState, useEffect, useCallback } from "react";
import QuizSection from "../components/QuizSection";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const KuisPage: React.FC = () => {
  const questionBank: Question[] = [
    {
      question: "Apa planet terbesar di tata surya?",
      options: ["Mars", "Jupiter", "Bumi", "Venus"],
      correctAnswer: "Jupiter",
    },
    {
      question: "Planet manakah yang paling dekat dengan Matahari?",
      options: ["Venus", "Merkurius", "Mars", "Bumi"],
      correctAnswer: "Merkurius",
    },
    {
      question: "Berapa jumlah planet di tata surya kita?",
      options: ["7", "8", "9", "10"],
      correctAnswer: "8",
    },
    {
      question: "Planet manakah yang dikenal sebagai 'Planet Merah'?",
      options: ["Venus", "Mars", "Jupiter", "Saturnus"],
      correctAnswer: "Mars",
    },
    {
      question:
        "Planet manakah yang memiliki cincin yang paling jelas terlihat?",
      options: ["Jupiter", "Uranus", "Saturnus", "Neptunus"],
      correctAnswer: "Saturnus",
    },
    {
      question: "Apa nama satelit alami Bumi?",
      options: ["Bulan", "Phobos", "Europa", "Titan"],
      correctAnswer: "Bulan",
    },
    {
      question: "Planet manakah yang memiliki suhu permukaan tertinggi?",
      options: ["Merkurius", "Venus", "Mars", "Jupiter"],
      correctAnswer: "Venus",
    },
    {
      question: "Berapa lama Bumi mengelilingi Matahari?",
      options: ["365 hari", "364 hari", "366 hari", "360 hari"],
      correctAnswer: "365 hari",
    },
    {
      question: "Planet manakah yang memiliki gravitasi terkuat?",
      options: ["Bumi", "Mars", "Jupiter", "Saturnus"],
      correctAnswer: "Jupiter",
    },
    {
      question: "Apa nama galaksi tempat tata surya kita berada?",
      options: ["Andromeda", "Bima Sakti", "Whirlpool", "Triangulum"],
      correctAnswer: "Bima Sakti",
    },
    {
      question: "Planet manakah yang berputar pada sisinya?",
      options: ["Mars", "Venus", "Uranus", "Neptunus"],
      correctAnswer: "Uranus",
    },
    {
      question: "Berapa jumlah bulan yang dimiliki Mars?",
      options: ["0", "1", "2", "3"],
      correctAnswer: "2",
    },
    {
      question: "Planet manakah yang memiliki badai terbesar di tata surya?",
      options: ["Mars", "Jupiter", "Saturnus", "Neptunus"],
      correctAnswer: "Jupiter",
    },
    {
      question: "Apa yang membuat Neptunus berwarna biru?",
      options: ["Air", "Metana", "Oksigen", "Nitrogen"],
      correctAnswer: "Metana",
    },
    {
      question: "Planet manakah yang memiliki hari terpanjang?",
      options: ["Merkurius", "Venus", "Mars", "Jupiter"],
      correctAnswer: "Venus",
    },
  ];

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timerActive, setTimerActive] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  // Shuffle and select 10 random questions using useCallback
  const shuffleQuestions = useCallback(() => {
    const shuffled = [...questionBank].sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, 10));
  }, []);

  const nextQuestion = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setShowResult(true);
      setTimerActive(false);
    }
  }, [currentIndex, questions.length]);

  const handleTimeUp = useCallback(() => {
    setTimerActive(false);
    setSelectedAnswer("Waktu Habis");
    setShowFeedback(true);
    setTimeout(() => {
      nextQuestion();
    }, 2000);
  }, [nextQuestion]);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerActive && timeLeft > 0 && !showResult) {
      interval = setInterval(() => {
        setTimeLeft((time) => {
          if (time <= 1) {
            handleTimeUp();
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft, showResult, handleTimeUp]);

  // Start timer when question loads
  useEffect(() => {
    if (questions.length > 0 && !showResult && quizStarted) {
      setTimeLeft(30);
      setTimerActive(true);
    }
  }, [currentIndex, questions, showResult, quizStarted]);

  const handleSelectAnswer = (answer: string) => {
    if (selectedAnswer !== null) return;

    setTimerActive(false);
    setSelectedAnswer(answer);
    setShowFeedback(true);

    if (answer === questions[currentIndex].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      nextQuestion();
    }, 2000);
  };

  const handleStartQuiz = () => {
    shuffleQuestions();
    setQuizStarted(true);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setShowFeedback(false);
    setTimeLeft(30);
    setTimerActive(false);
  };

  const handleReset = () => {
    setQuizStarted(false);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setShowFeedback(false);
    setTimeLeft(30);
    setTimerActive(false);
    setQuestions([]);
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-4 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              🚀 Kuis Tata Surya 🌟
            </h2>
            <p className="text-lg text-gray-300">
              Uji pengetahuan Anda tentang planet dan benda langit!
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/90 to-purple-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🌌</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Siap Memulai Petualangan?
              </h3>
              <div className="bg-slate-700/50 rounded-xl p-4 mb-6">
                <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                  <li>📝 10 pertanyaan tentang tata surya</li>
                  <li>⏰ 30 detik per pertanyaan</li>
                  <li>🎯 Jawab dengan benar untuk mendapat poin</li>
                  <li>🏆 Lihat skor akhir Anda</li>
                </ul>
              </div>
              <button
                onClick={handleStartQuiz}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg"
              >
                🚀 Mulai Kuis
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Memuat soal...</div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-4 px-4">
      <div className="container mx-auto max-w-3xl">
        <QuizSection
          question={currentQuestion?.question || ""}
          options={currentQuestion?.options || []}
          correctAnswer={currentQuestion?.correctAnswer || ""}
          currentIndex={currentIndex}
          total={questions.length}
          score={score}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={handleSelectAnswer}
          showResult={showResult}
          showFeedback={showFeedback}
          onReset={handleReset}
          timeLeft={timeLeft}
        />
      </div>
    </div>
  );
};

export default KuisPage;
