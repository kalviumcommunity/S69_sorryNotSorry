import React, { useState } from 'react';

const FeedbackForm = () => {
  const [rating, setRating] = useState(3);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log({ rating, feedback });
  };

  return (
    <div className="bg-yellow-300 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-gradient-to-r from-indigo-500 to-purple-500">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Share Your Feedback</h2>
              <p className="text-indigo-100">We'd love to hear what you think!</p>
            </div>
            
            <div className="space-y-2">
              <label className="block text-white font-medium">How would you rate your experience?</label>
              <div className="flex justify-between pt-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setRating(value)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-transform duration-200 ease-in-out ${
                      rating === value 
                        ? 'bg-yellow-400 text-purple-900 scale-110' 
                        : 'bg-white bg-opacity-30 text-white hover:bg-opacity-50'
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="feedback" className="block text-white font-medium">
                Your feedback
              </label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Tell us what you liked or how we can improve..."
                className="w-full p-3 rounded-lg border-2 border-purple-300 focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-50 bg-white bg-opacity-90 outline-none"
                rows={4}
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-3 px-4 bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Submit Feedback
            </button>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="text-yellow-300 text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-white mb-2">Thank You!</h2>
            <p className="text-indigo-100 mb-6">Your feedback has been submitted successfully.</p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFeedback('');
              }}
              className="py-2 px-4 bg-white text-purple-700 font-medium rounded-lg hover:bg-indigo-100 transition-colors"
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;