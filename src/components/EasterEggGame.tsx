import { useEffect, useState, useCallback } from 'react';
import './styles/EasterEggGame.css';

// Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

const EasterEggGame = () => {
  const [isActive, setIsActive] = useState(false);
  const [konamiProgress, setKonamiProgress] = useState(0);
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'won' | 'lost'>('menu');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [targets, setTargets] = useState<{id: number; x: number; y: number; type: 'bug' | 'feature'}[]>([]);

  // Konami Code Detection
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      
      if (key === KONAMI_CODE[konamiProgress].toLowerCase()) {
        const newProgress = konamiProgress + 1;
        setKonamiProgress(newProgress);
        
        // Visual feedback
        showKonamiFeedback(newProgress);
        
        if (newProgress === KONAMI_CODE.length) {
          setIsActive(true);
          setKonamiProgress(0);
          // Save to localStorage
          localStorage.setItem('konami_unlocked', 'true');
        }
      } else {
        setKonamiProgress(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiProgress]);

  // Check if already unlocked
  useEffect(() => {
    const unlocked = localStorage.getItem('konami_unlocked');
    if (unlocked === 'true') {
      // Show hint that easter egg is available
      showEasterEggHint();
    }
  }, []);

  const showKonamiFeedback = (progress: number) => {
    // Could add visual feedback here
    console.log(`Konami progress: ${progress}/${KONAMI_CODE.length}`);
  };

  const showEasterEggHint = () => {
    // Subtle hint that easter egg exists
    const hint = document.createElement('div');
    hint.className = 'easter-egg-hint';
    hint.innerHTML = '🔍 Un secret vous attend... (↑↑↓↓←→←→BA)';
    document.body.appendChild(hint);
    
    setTimeout(() => {
      hint.remove();
    }, 5000);
  };

  // Game Logic
  const startGame = useCallback(() => {
    setGameState('playing');
    setScore(0);
    setTimeLeft(30);
    setTargets([]);
    
    // Spawn targets
    const spawnInterval = setInterval(() => {
      setTargets(prev => {
        if (prev.length >= 10) return prev;
        
        const newTarget = {
          id: Date.now(),
          x: Math.random() * 80 + 10,
          y: Math.random() * 70 + 15,
          type: Math.random() > 0.3 ? 'bug' : 'feature' as 'bug' | 'feature'
        };
        return [...prev, newTarget];
      });
    }, 1500);

    // Game timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(spawnInterval);
          clearInterval(timer);
          setGameState(score >= 15 ? 'won' : 'lost');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(spawnInterval);
      clearInterval(timer);
    };
  }, [score]);

  const hitTarget = (id: number, type: 'bug' | 'feature') => {
    setTargets(prev => prev.filter(t => t.id !== id));
    
    if (type === 'bug') {
      setScore(prev => prev + 1);
    } else {
      setScore(prev => prev - 2);
    }
  };

  const closeGame = () => {
    setIsActive(false);
    setGameState('menu');
    setScore(0);
    setTimeLeft(30);
    setTargets([]);
  };

  if (!isActive) return null;

  return (
    <div className="easter-egg-overlay">
      <div className="easter-egg-game">
        <button className="game-close" onClick={closeGame}>✕</button>
        
        {gameState === 'menu' && (
          <div className="game-menu">
            <h2>🎮 MODE DÉVELOPPEUR DÉBLOQUÉ</h2>
            <p className="game-subtitle">Code Konami reconnu !</p>
            
            <div className="game-instructions">
              <h3>📋 Mission: Debug Rapide</h3>
              <ul>
                <li>🐛 Cliquez sur les BUGS verts (+1 point)</li>
                <li>⚠️ Évitez les FEATURES oranges (-2 points)</li>
                <li>⏱️ 30 secondes pour obtenir 15 points</li>
              </ul>
            </div>
            
            <button className="game-start-btn" onClick={startGame}>
              🚀 COMMENCER
            </button>
          </div>
        )}

        {gameState === 'playing' && (
          <div className="game-play">
            <div className="game-hud">
              <div className="hud-score">Score: {score}</div>
              <div className="hud-time">⏱️ {timeLeft}s</div>
              <div className="hud-target">🎯 15 pts pour gagner</div>
            </div>
            
            <div className="game-area">
              {targets.map(target => (
                <button
                  key={target.id}
                  className={`game-target ${target.type}`}
                  style={{ left: `${target.x}%`, top: `${target.y}%` }}
                  onClick={() => hitTarget(target.id, target.type)}
                >
                  {target.type === 'bug' ? '🐛' : '⚡'}
                </button>
              ))}
            </div>
          </div>
        )}

        {gameState === 'won' && (
          <div className="game-result won">
            <h2>🏆 VICTOIRE !</h2>
            <p>Score final: {score} points</p>
            <p className="result-message">Excellent debugging ! Vous êtes un vrai développeur.</p>
            <div className="reward-code">
              <p>🎁 Récompense débloquée:</p>
              <code>console.log("You are a coding legend!");</code>
            </div>
            <button className="game-restart" onClick={() => setGameState('menu')}>
              🔄 Rejouer
            </button>
          </div>
        )}

        {gameState === 'lost' && (
          <div className="game-result lost">
            <h2>💥 GAME OVER</h2>
            <p>Score final: {score} points</p>
            <p className="result-message">Pas assez rapide ! Les bugs ont gagné.</p>
            <button className="game-restart" onClick={() => setGameState('menu')}>
              🔄 Réessayer
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EasterEggGame;
