import { useState, useEffect } from 'react';
import ParticleBackground from './ParticleBackground';
import GlitchEffects from './GlitchEffects';
import './styles/FuturisticFeatures.css';

const FuturisticFeatures = () => {
  const [isFuturisticMode, setIsFuturisticMode] = useState(false);
  const [particleIntensity, setParticleIntensity] = useState(50);
  const [glitchIntensity, setGlitchIntensity] = useState(30);

  useEffect(() => {
    // Charger les préférences depuis localStorage
    const savedMode = localStorage.getItem('futuristicMode');
    const savedParticles = localStorage.getItem('particleIntensity');
    const savedGlitch = localStorage.getItem('glitchIntensity');

    if (savedMode) setIsFuturisticMode(JSON.parse(savedMode));
    if (savedParticles) setParticleIntensity(JSON.parse(savedParticles));
    if (savedGlitch) setGlitchIntensity(JSON.parse(savedGlitch));
  }, []);

  const toggleFuturisticMode = () => {
    const newMode = !isFuturisticMode;
    setIsFuturisticMode(newMode);
    localStorage.setItem('futuristicMode', JSON.stringify(newMode));
  };

  const handleParticleChange = (value: number) => {
    setParticleIntensity(value);
    localStorage.setItem('particleIntensity', JSON.stringify(value));
  };

  const handleGlitchChange = (value: number) => {
    setGlitchIntensity(value);
    localStorage.setItem('glitchIntensity', JSON.stringify(value));
  };

  return (
    <div className={`futuristic-features ${isFuturisticMode ? 'active' : ''}`}>
      {/* Toggle Button */}
      <button 
        className="futuristic-toggle"
        onClick={toggleFuturisticMode}
        data-cursor="disable"
      >
        {isFuturisticMode ? '🚀 Mode Futuriste ON' : '� Activer Mode Futuriste'}
      </button>

      {/* Futuristic Components */}
      {isFuturisticMode && (
        <>
          <ParticleBackground />
          <GlitchEffects />
          
          {/* Control Panel */}
          <div className="control-panel">
            <h3>🎛️ Contrôles Futuristes</h3>
            
            <div className="control-group">
              <label>⚡ Intensité Particules</label>
              <input
                type="range"
                min="0"
                max="100"
                value={particleIntensity}
                onChange={(e) => handleParticleChange(Number(e.target.value))}
                className="control-slider"
              />
              <span className="control-value">{particleIntensity}%</span>
            </div>

            <div className="control-group">
              <label>🎭 Intensité Glitch</label>
              <input
                type="range"
                min="0"
                max="100"
                value={glitchIntensity}
                onChange={(e) => handleGlitchChange(Number(e.target.value))}
                className="control-slider"
              />
              <span className="control-value">{glitchIntensity}%</span>
            </div>

            <div className="control-group">
              <label>🎨 Thème</label>
              <select className="control-select" defaultValue="cyberpunk">
                <option value="cyberpunk">🌆 Cyberpunk</option>
                <option value="neon">💫 Neon</option>
                <option value="matrix">💚 Matrix</option>
                <option value="hologram">🔷 Hologramme</option>
              </select>
            </div>

            <div className="control-actions">
              <button className="control-btn primary">
                🎯 Appliquer Thème
              </button>
              <button className="control-btn secondary">
                🔄 Réinitialiser
              </button>
            </div>
          </div>
        </>
      )}

      {/* Status Indicator */}
      {isFuturisticMode && (
        <div className="status-indicator">
          <div className="status-dot active"></div>
          <span>Mode Futuriste Actif</span>
        </div>
      )}
    </div>
  );
};

export default FuturisticFeatures;
