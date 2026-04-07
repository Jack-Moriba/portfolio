import { useState } from 'react';
import './styles/ProjectImages.css';

interface ProjectImageProps {
  project: {
    title: string;
    category: string;
    tools: string;
    description: string;
    image: string;
  };
  className?: string;
}

const ProjectImage = ({ project, className = '' }: ProjectImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Configuration des couleurs et icônes par catégorie de projet
  const projectStyles: Record<string, { colors: [string, string]; icon: string; pattern: string }> = {
    'Digital Services Platform': {
      colors: ['#667eea', '#764ba2'],
      icon: '🌍',
      pattern: 'grid'
    },
    'Faith-Based Digital Platform': {
      colors: ['#f093fb', '#f5576c'],
      icon: '✝️',
      pattern: 'circles'
    },
    'Educational Platform': {
      colors: ['#4facfe', '#00f2fe'],
      icon: '📚',
      pattern: 'dots'
    },
    'Community Management': {
      colors: ['#43e97b', '#38f9d7'],
      icon: '👥',
      pattern: 'lines'
    },
    'Online Shopping': {
      colors: ['#fa709a', '#fee140'],
      icon: '🛒',
      pattern: 'grid'
    },
    'Financial Software': {
      colors: ['#30cfd0', '#330867'],
      icon: '🏦',
      pattern: 'diamonds'
    }
  };

  // Générer une image placeholder basée sur le projet
  const generateProjectImage = (project: ProjectImageProps['project']) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    canvas.width = 800;
    canvas.height = 600;

    const style = projectStyles[project.category] || {
      colors: ['#667eea', '#764ba2'],
      icon: '🚀',
      pattern: 'grid'
    };

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, style.colors[0]);
    gradient.addColorStop(1, style.colors[1]);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Pattern overlay based on type
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    
    switch (style.pattern) {
      case 'grid':
        for (let i = 0; i < canvas.width; i += 50) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i, canvas.height);
          ctx.stroke();
        }
        for (let i = 0; i < canvas.height; i += 50) {
          ctx.beginPath();
          ctx.moveTo(0, i);
          ctx.lineTo(canvas.width, i);
          ctx.stroke();
        }
        break;
      case 'circles':
        for (let i = 0; i < 20; i++) {
          ctx.beginPath();
          ctx.arc(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            Math.random() * 30 + 10,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
        break;
      case 'dots':
        for (let i = 0; i < 100; i++) {
          ctx.beginPath();
          ctx.arc(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            3,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
        break;
      case 'lines':
        for (let i = 0; i < 15; i++) {
          ctx.beginPath();
          ctx.moveTo(0, i * 40);
          ctx.lineTo(canvas.width, i * 40 + 50);
          ctx.stroke();
        }
        break;
      case 'diamonds':
        for (let i = 0; i < 10; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          ctx.beginPath();
          ctx.moveTo(x, y - 20);
          ctx.lineTo(x + 20, y);
          ctx.lineTo(x, y + 20);
          ctx.lineTo(x - 20, y);
          ctx.closePath();
          ctx.fill();
        }
        break;
    }

    // Add decorative circle behind icon
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2 - 30, 80, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Add icon
    ctx.font = '80px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(style.icon, canvas.width / 2, canvas.height / 2 - 30);

    // Add project title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 40px JetBrains Mono';
    ctx.textAlign = 'center';
    ctx.fillText(project.title, canvas.width / 2, canvas.height / 2 + 70);

    // Add category subtitle
    ctx.font = '20px JetBrains Mono';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillText(project.category, canvas.width / 2, canvas.height / 2 + 110);

    // Add tech stack at bottom
    ctx.font = '14px JetBrains Mono';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    const tools = project.tools.split(', ').slice(0, 4); // Limit to 4 tools
    const toolsText = tools.join(' • ');
    ctx.fillText(toolsText, canvas.width / 2, canvas.height - 50);

    // Add decorative border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 2;
    ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);

    // Add corner accents
    const cornerSize = 25;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 3;
    
    // Top left
    ctx.beginPath();
    ctx.moveTo(30, 30 + cornerSize);
    ctx.lineTo(30, 30);
    ctx.lineTo(30 + cornerSize, 30);
    ctx.stroke();

    // Top right
    ctx.beginPath();
    ctx.moveTo(canvas.width - 30 - cornerSize, 30);
    ctx.lineTo(canvas.width - 30, 30);
    ctx.lineTo(canvas.width - 30, 30 + cornerSize);
    ctx.stroke();

    // Bottom left
    ctx.beginPath();
    ctx.moveTo(30, canvas.height - 30 - cornerSize);
    ctx.lineTo(30, canvas.height - 30);
    ctx.lineTo(30 + cornerSize, canvas.height - 30);
    ctx.stroke();

    // Bottom right
    ctx.beginPath();
    ctx.moveTo(canvas.width - 30 - cornerSize, canvas.height - 30);
    ctx.lineTo(canvas.width - 30, canvas.height - 30);
    ctx.lineTo(canvas.width - 30, canvas.height - 30 - cornerSize);
    ctx.stroke();

    return canvas.toDataURL('image/png');
  };

  const generatedImage = generateProjectImage(project);

  return (
    <div className={`project-image-container ${className}`}>
      {!imageLoaded && !imageError && (
        <div className="image-placeholder">
          <div className="placeholder-spinner"></div>
          <div className="placeholder-content">
            <div className="placeholder-icon">🚀</div>
            <h4>{project.title}</h4>
            <p>{project.category}</p>
          </div>
        </div>
      )}
      
      {generatedImage && (
        <img
          src={generatedImage}
          alt={`${project.title} - ${project.category}`}
          className={`project-generated-image ${imageLoaded ? 'loaded' : ''}`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          style={{ display: imageLoaded ? 'block' : 'none' }}
        />
      )}
      
      {imageError && (
        <div className="image-error">
          <div className="error-content">
            <div className="error-icon">⚠️</div>
            <h4>Image non disponible</h4>
            <p>{project.title}</p>
          </div>
        </div>
      )}
      
      {/* Overlay avec informations du projet */}
      <div className="image-overlay">
        <div className="overlay-content">
          <h3>{project.title}</h3>
          <p>{project.category}</p>
          <div className="tech-badges">
            {project.tools.split(', ').slice(0, 3).map((tool, index) => (
              <span key={index} className="tech-badge">{tool.trim()}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectImage;
