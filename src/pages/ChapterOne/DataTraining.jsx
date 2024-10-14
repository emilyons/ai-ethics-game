import React, { useState, useEffect } from "react";
import "./DataTraining.scss";
import { Link } from "react-router-dom";

const DataTraining = () => {
  const [trainedMovies, setTrainedMovies] = useState([]);
  const [aiAccuracy, setAiAccuracy] = useState(0);
  const [aiPrediction, setAiPrediction] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const movies = [
    { title: "Toy Story", genre: "Animation" },
    { title: "The Lion King", genre: "Animation" },
    { title: "Harry Potter", genre: "Fantasy" },
    { title: "Spy Kids", genre: "Action" },
    { title: "E.T.", genre: "Sci-Fi" },
    { title: "Home Alone", genre: "Comedy" },
    { title: "The Goonies", genre: "Adventure" },
    { title: "The Neverending Story", genre: "Fantasy" },
    { title: "Frozen", genre: "Animation" },
    { title: "Jumanji", genre: "Adventure" },
  ];

  const handleMovieSelection = (movie) => {
    setTrainedMovies([...trainedMovies, movie]);
    updateAiAccuracy();
    if (trainedMovies.length >= 4) {
      makePrediction();
    }
  };

  const updateAiAccuracy = () => {
    const newAccuracy = Math.min((trainedMovies.length + 1) * 10, 100);
    setAiAccuracy(newAccuracy);
  };

  const makePrediction = () => {
    const genres = trainedMovies.map(movie => movie.genre);
    const mostCommonGenre = genres.sort((a,b) =>
      genres.filter(v => v===a).length - genres.filter(v => v===b).length
    ).pop();
    setAiPrediction(mostCommonGenre);
    setFeedbackMessage(`I think you like ${mostCommonGenre} movies!`);
  };

  return (
    <div className="data-training">
      <h1>Train Your Movie AI</h1>
      <p>Help the AI learn about your movie preferences! Select movies you like to train it.</p>

      <div className="ai-character">
        {/* Add an animated AI character here */}
      </div>

      <div className="movie-selection">
        {movies.map((movie, index) => (
          <button 
            key={index} 
            onClick={() => handleMovieSelection(movie)}
            disabled={trainedMovies.includes(movie)}
          >
            {movie.title}
          </button>
        ))}
      </div>

      <div className="ai-progress">
        <p>AI Accuracy: {aiAccuracy}%</p>
        <div className="progress-bar" style={{width: `${aiAccuracy}%`}}></div>
      </div>

      {feedbackMessage && (
        <div className="ai-feedback">
          <p>{feedbackMessage}</p>
        </div>
      )}

      <div className="explanation">
        <p>
          As you select more movies, the AI learns your preferences. 
          It uses this data to make better predictions about what movies you might like!
        </p>
      </div>

      <div className="affirmation">
        <p>"I understand that AI needs data to learn and make better predictions!"</p>
      </div>

      <Link to="/chapter1/pattern-recognition" className="next-lesson-btn">
        Next: Pattern Recognition
      </Link>
    </div>
  );
};

export default DataTraining;
