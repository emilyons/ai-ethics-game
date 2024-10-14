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
    {
      title: "Toy Story",
      genre: "Animation",
      image: "/src/assets/images/toystoryposter.png",
    },
    {
      title: "The Lion King",
      genre: "Animation",
      image: "/src/assets/images/lionkingposter.png",
    },
    {
      title: "Harry Potter",
      genre: "Fantasy",
      image: "/src/assets/images/harrypotterposter.png",
    },
    { title: "Spy Kids", genre: "Action", image: "/src/assets/images/spykidsposter.png" },
    { title: "E.T.", genre: "Sci-Fi", image: "/src/assets/images/etposter.png" },
    { title: "Home Alone", genre: "Comedy", image: "/src/assets/images/homealoneposter.png" },
    { title: "The Goonies", genre: "Adventure", image: "/src/assets/images/gooniesposter.png" },
    {
      title: "The Neverending Story",
      genre: "Fantasy",
      image: "/src/assets/images/neverendingstoryposter.png",
    },
    { title: "Frozen", genre: "Animation", image: "/src/assets/images/frozenposter.jpg" },
    { title: "Jumanji", genre: "Adventure", image: "/src/assets/images/jumanjiposter.png" },
    { title: "Star Wars", genre: "Sci-Fi", image: "/src/assets/images/starwarsposter.png" },
    { title: "Shrek", genre: "Animation", image: "/src/assets/images/shrekposter.png" },
    {
      title: "The Karate Kid",
      genre: "Action",
      image: "/src/assets/images/karatekidposter.png",
    },
    {
      title: "The Princess Bride",
      genre: "Fantasy",
      image: "/src/assets/images/princessbrideposter.png",
    },
    {
      title: "Back to the Future",
      genre: "Sci-Fi",
      image: "/src/assets/images/backtothefutureposter.png",
    },
    {
      title: "Monsters, Inc.",
      genre: "Animation",
      image: "/src/assets/images/monstersincposter.png",
    },
    {
      title: "The Lego Movie",
      genre: "Animation",
      image: "/src/assets/images/legomovieposter.png",
    },
    { title: "Zootopia", genre: "Animation", image: "/src/assets/images/zootopiaposter.png" },
    {
      title: "The Wizard of Oz",
      genre: "Fantasy",
      image: "/src/assets/images/wizardofozposter.png",
    },
    {
      title: "Finding Nemo",
      genre: "Animation",
      image: "/src/assets/images/findingnemoposter.png",
    },
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
    setGenreStrengths((prev) => ({
      ...prev,
      [genre]: (prev[genre] || 0) + 1,
    }));
  };

  const makePrediction = () => {
    const genres = trainedMovies.map((movie) => movie.genre);
    const mostCommonGenre = Object.keys(genreStrengths).reduce((a, b) =>
      genreStrengths[a] > genreStrengths[b] ? a : b
    );
    setAiPrediction(mostCommonGenre);
    setFeedbackMessage(`I think you like ${mostCommonGenre} movies!`);
  };

  return (
    <div className="data-training">
      <h1>Train Your Movie AI</h1>
      <p>
        Help the AI learn about your movie preferences! Select movies you like
        to train it.
      </p>

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
        <div className="progress-bar" style={{ width: `${aiAccuracy}%` }}></div>
      </div>

      <div className="genre-visualization">
        {Object.entries(genreStrengths).map(([genre, strength]) => (
          <div key={genre} className="genre-bar">
            <div className="genre-label">{genre}</div>
            <div
              className="genre-strength"
              style={{ width: `${(strength / trainedMovies.length) * 100}%` }}
            ></div>
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
          As you select more movies, the AI learns your preferences. The colored
          bars show how strong each genre is in your selections. The AI uses
          this data to predict what movies you might like!
        </p>
      </div>

      <div className="affirmation">
        <p>
          "I understand that AI needs data to learn and make better
          predictions!"
        </p>
      </div>

      <Link to="/chapter1/pattern-recognition" className="next-lesson-btn">
        Next: Pattern Recognition
      </Link>
    </div>
  );
};

export default DataTraining;
