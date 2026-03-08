import { useState } from 'react';
import { X, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { QuizQuestion } from '../types';
import { locations } from '../data/locations';

interface QuizModalProps {
  question: QuizQuestion | null;
  onClose: () => void;
  onCorrectAnswer: (locationId: string) => void;
}

export function QuizModal({ question, onClose, onCorrectAnswer }: QuizModalProps) {
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null);

  if (!question) return null;

  const location = locations.find(loc => loc.id === question.locationId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const isCorrect = answer.toLowerCase().trim() === question.answer.toLowerCase().trim();
    
    if (isCorrect) {
      setResult('correct');
      setTimeout(() => {
        onCorrectAnswer(question.locationId);
        onClose();
        setAnswer('');
        setResult(null);
      }, 2000);
    } else {
      setResult('incorrect');
      setTimeout(() => {
        setResult(null);
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl max-w-md w-full p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Quiz: {location?.name}
          </h2>
          <p className="text-sm text-gray-600">
            Odpowiedz poprawnie, aby zdobyć pieczątkę!
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-900 mb-2">
              {question.question}
            </label>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Wpisz odpowiedź..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={result !== null}
              autoFocus
            />
          </div>

          {result === 'correct' && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
            >
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <p className="font-medium text-green-900">Brawo!</p>
                <p className="text-sm text-green-700">Zdobywasz nową pieczątkę!</p>
              </div>
            </motion.div>
          )}

          {result === 'incorrect' && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
            >
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
              <div>
                <p className="font-medium text-red-900">Niestety nie</p>
                <p className="text-sm text-red-700">Spróbuj jeszcze raz!</p>
              </div>
            </motion.div>
          )}

          <button
            type="submit"
            disabled={!answer.trim() || result !== null}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Sprawdź odpowiedź
          </button>
        </form>
      </motion.div>
    </div>
  );
}
