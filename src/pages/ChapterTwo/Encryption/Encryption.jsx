// (Page 8: Encryption)

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Encryption.scss";

const Encryption = () => {
  const [decryptedMessage, setDecryptedMessage] = useState("");
  const [protectionLevel, setProtectionLevel] = useState(0);
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [currentLetter, setCurrentLetter] = useState('A');
  const [wheelRotation, setWheelRotation] = useState(0);

  const encryptedMessage = "16-18-15-20-5-3-20 20-8-5 22-1-21-12-20-19";
  const correctMessage = "PROTECTTHEVAULTS";
  const formattedCorrectMessage = "PROTECT THE VAULTS";

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const handleRotate = (direction) => {
    const currentIndex = alphabet.indexOf(currentLetter);
    let newIndex;
    if (direction === 'left') {
      newIndex = (currentIndex - 1 + 26) % 26;
    } else {
      newIndex = (currentIndex + 1) % 26;
    }
    setCurrentLetter(alphabet[newIndex]);
    setWheelRotation(prev => prev + (direction === 'left' ? 13.85 : -13.85));
  };

  const handleDecrypt = () => {
    if (decryptedMessage.length < formattedCorrectMessage.length) {
      let newDecrypted = decryptedMessage + currentLetter;
      // Add space if needed
      if (formattedCorrectMessage[newDecrypted.length] === ' ') {
        newDecrypted += ' ';
      }
      setDecryptedMessage(newDecrypted);
      updateProtectionLevel(newDecrypted);
    }
  };

  const handleRemoveLetter = () => {
    if (decryptedMessage.length > 0) {
      const newDecrypted = decryptedMessage.slice(0, -1);
      setDecryptedMessage(newDecrypted);
      updateProtectionLevel(newDecrypted);
    }
  };

  const updateProtectionLevel = (message) => {
    const totalLetters = correctMessage.length;
    const correctLetters = message.split('').filter((letter, index) => {
      if (letter === ' ') return true; // Consider space as correct
      const correctIndex = correctMessage.indexOf(letter, Math.max(0, index - 1));
      return correctIndex !== -1 && correctIndex <= index;
    }).length;
  
    const newProtectionLevel = (correctLetters / totalLetters) * 100;
    setProtectionLevel(Math.round(newProtectionLevel));

    if (message.replace(/\s/g, '') === correctMessage) {
      setDecryptedMessage(formattedCorrectMessage);
      setProtectionLevel(100);
      setIsDecrypted(true);
    }
  };

  const renderCipherKeyTable = () => {
    const rows = [];
    for (let i = 0; i < 26; i += 6) {
      rows.push(
        <tr key={i}>
          {alphabet.slice(i, i + 6).map((letter, index) => (
            <React.Fragment key={letter}>
              <td>{letter}</td>
              <td>{i + index + 1}</td>
            </React.Fragment>
          ))}
        </tr>
      );
    }
    return rows;
  };

  return (
    <div className="encryption">
      <h2>The Encryption Enigma</h2>
      <p>
        Guardian Leader: "Excellent work on mastering passwords, young Guardian! 
        But hackers are getting smarter, and we need an extra layer of protection. 
        It's time to learn about encryption!"
      </p>
      <p>
        Narrator: "Encryption is like a secret code that scrambles our data. 
        Even if hackers break into a vault, they can't understand what they've stolen!"
      </p>

      <div className="guardian-cipher-key">
        <h3>Guardian Cipher Key</h3>
        <div className="cipher-key-box">
          <table>
            <tbody>{renderCipherKeyTable()}</tbody>
          </table>
        </div>
      </div>

      <div className="decryption-challenge">
        <h3>The Techville Cipher Challenge</h3>
        <p>Encrypted message: {encryptedMessage}</p>
        <p>Decrypted message: {' '}
          {decryptedMessage.split('').map((letter, index) => (
            <span key={index} className={
              letter === formattedCorrectMessage[index] ? 'correct' : 'incorrect'
            }>
              {letter}
            </span>
          ))}
        </p>
        <div className="protection-bar">
          <div 
            className="progress" 
            style={{ width: `${protectionLevel}%`, backgroundColor: '#4caf50' }}
          ></div>
        </div>
        <p>Data Protection Level: {protectionLevel.toFixed(0)}%</p>
        
        <div className="cipher-wheel">
          <button onClick={() => handleRotate('left')} disabled={isDecrypted}>←</button>
          <div className="wheel" style={{ transform: `rotate(${wheelRotation}deg)` }}>
            {alphabet.map((letter, index) => (
              <div 
                key={letter} 
                className={`letter ${letter === currentLetter ? 'active' : ''}`}
                style={{ '--rotation': `${index * 13.85}deg` }}
              >
                {letter}
              </div>
            ))}
          </div>
          <button onClick={() => handleRotate('right')} disabled={isDecrypted}>→</button>
        </div>
        <div className="action-buttons">
          <button onClick={handleDecrypt} disabled={isDecrypted}>Decrypt Letter</button>
          <button onClick={handleRemoveLetter} disabled={isDecrypted || decryptedMessage.length === 0}>Remove Letter</button>
        </div>
      </div>

      {isDecrypted && (
        <div className="success-message">
          <p>Outstanding work, Guardian! You've successfully decrypted the message and strengthened Techville's defenses.</p>
          <Link to="/chapter2/phishing-game">
            <button>Proceed to Phishing Game</button>
          </Link>
        </div>
      )}

      <div className="affirmation">
        <p>"I am a master of codes, protecting important information with the power of encryption!"</p>
      </div>
    </div>
  );
};

export default Encryption;
