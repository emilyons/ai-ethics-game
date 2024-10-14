import React, { useState, useEffect } from "react";
import "./DataTraining.scss";
import { Link } from "react-router-dom";

const DataTraining = () => {
  const [trainedMovies, setTrainedMovies] = useState([]);
  const [aiAccuracy, setAiAccuracy] = useState(0);
  const [aiPrediction, setAiPrediction] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [genreStrengths, setGenreStrengths] = useState({});

  const movies = [
    { title: "Toy Story", genre: "Animation", image: "/images/toy-story.jpg" },
    { title: "The Lion King", genre: "Animation", image: "/images/lion-king.jpg" },
    { title: "Harry Potter", genre: "Fantasy", image: "/images/harry-potter.jpg" },
    { title: "Spy Kids", genre: "Action", image: "/images/spy-kids.jpg" },
    { title: "E.T.", genre: "Sci-Fi", image: "/images/et.jpg" },
    { title: "Home Alone", genre: "Comedy", image: "/images/home-alone.jpg" },
    { title: "The Goonies", genre: "Adventure", image: "/images/goonies.jpg" },
    { title: "The Neverending Story", genre: "Fantasy", image: "/images/neverending-story.jpg" },
    { title: "Frozen", genre: "Animation", image: "/images/frozen.jpg" },
    { title: "Jumanji", genre: "Adventure", image: "/images/jumanji.jpg" },
    { title: "Star Wars", genre: "Sci-Fi", image: "/images/star-wars.jpg" },
    { title: "Shrek", genre: "Animation", image: "/images/shrek.jpg" },
    { title: "The Karate Kid", genre: "Action", image: "/images/karate-kid.jpg" },
    { title: "The Princess Bride", genre: "Fantasy", image: "/images/princess-bride.jpg" },
    { title: "Back to the Future", genre: "Sci-Fi", image: "/images/back-to-the-future.jpg" },
    { title: "Monsters, Inc.", genre: "Animation", image: "/images/monsters-inc.jpg" },
    { title: "The Lego Movie", genre: "Animation", image: "/images/lego-movie.jpg" },
    { title: "Zootopia", genre: "Animation", image: "/images/zootopia.jpg" },
    { title: "The Wizard of Oz", genre: "Fantasy", image: "/images/wizard-of-oz.jpg" },
    { title: "Finding Nemo", genre: "Animation", image: "/images/finding-nemo.jpg" },
  ];

  const handleMovieSelection = (movie) => {
    setTrainedMovies([...trainedMovies, movie]);
    updateAiAccuracy();
    updateGenreStrengths(movie.genre);
    if (trainedMovies.length >= 4) {
      makePrediction();
    }
  };

  const updateAiAccuracy = () => {
    const newAccuracy = Math.min((trainedMovies.length + 1) * 5, 100);
    setAiAccuracy(newAccuracy);
  };

  const updateGenreStrengths = (genre) => {
    setGenreStrengths(prev => ({
      ...prev,
      [genre]: (prev[genre] || 0) + 1
    }));
  };

  const makePrediction = () => {
    const genres = trainedMovies.map(movie => movie.genre);
    const mostCommonGenre = Object.keys(genreStrengths).reduce((a, b) => genreStrengths[a] > genreStrengths[b] ? a : b);
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
            className={`movie-button ${movie.genre.toLowerCase()}`}
          >
            <img src={movie.image} alt={movie.title} />
            <span>{movie.title}</span>
          </button>
        ))}
      </div>

      <div className="ai-progress">
        <p>AI Accuracy: {aiAccuracy}%</p>
        <div className="progress-bar" style={{width: `${aiAccuracy}%`}}></div>
      </div>

      <div className="genre-visualization">
        {Object.entries(genreStrengths).map(([genre, strength]) => (
          <div key={genre} className="genre-bar">
            <div className="genre-label">{genre}</div>
            <div className="genre-strength" style={{width: `${(strength / trainedMovies.length) * 100}%`}}></div>
          </div>
        ))}
      </div>

      {feedbackMessage && (
        <div className="ai-feedback">
          <p>{feedbackMessage}</p>
        </div>
      )}

      <div className="explanation">
        <p>
          As you select more movies, the AI learns your preferences. 
          The colored bars show how strong each genre is in your selections.
          The AI uses this data to predict what movies you might like!
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
