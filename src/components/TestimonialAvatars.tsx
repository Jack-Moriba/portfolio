// Avatars SVG abstraits modernes pour les témoignages

export const AvatarMarie = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="marieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#667eea" />
        <stop offset="100%" stopColor="#764ba2" />
      </linearGradient>
      <linearGradient id="marieGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f093fb" />
        <stop offset="100%" stopColor="#f5576c" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#marieGrad)" />
    <circle cx="35" cy="40" r="8" fill="rgba(255,255,255,0.3)" />
    <circle cx="65" cy="40" r="8" fill="rgba(255,255,255,0.3)" />
    <path d="M 30 60 Q 50 75 70 60" stroke="rgba(255,255,255,0.5)" strokeWidth="3" fill="none" />
    <circle cx="50" cy="50" r="45" fill="none" stroke="url(#marieGrad2)" strokeWidth="2" />
  </svg>
);

export const AvatarPasteur = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pasteurGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4facfe" />
        <stop offset="100%" stopColor="#00f2fe" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#pasteurGrad)" />
    <rect x="25" y="35" width="50" height="8" rx="4" fill="rgba(255,255,255,0.4)" />
    <rect x="30" y="50" width="40" height="6" rx="3" fill="rgba(255,255,255,0.3)" />
    <rect x="35" y="62" width="30" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
  </svg>
);

export const AvatarAissatou = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="aissatouGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fa709a" />
        <stop offset="100%" stopColor="#fee140" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#aissatouGrad)" />
    <polygon points="50,25 60,45 80,45 65,60 70,80 50,65 30,80 35,60 20,45 40,45" 
             fill="rgba(255,255,255,0.4)" />
    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
  </svg>
);
