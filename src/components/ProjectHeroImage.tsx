import './styles/ProjectHeroImage.css';

interface ProjectHeroImageProps {
  project: {
    title: string;
    category: string;
    tools: string;
    description: string;
    featured?: boolean;
  };
  size?: 'small' | 'medium' | 'large';
}

const ProjectHeroImage = ({ project, size = 'medium' }: ProjectHeroImageProps) => {
  const generateHeroImage = (project: ProjectHeroImageProps['project']) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // Taille selon la taille demandée
    const sizes = {
      small: { width: 400, height: 300 },
      medium: { width: 800, height: 600 },
      large: { width: 1200, height: 800 }
    };

    const { width, height } = sizes[size];
    canvas.width = width;
    canvas.height = height;

    // Background avec dégradé selon la catégorie
    const categoryGradients = {
      'Digital Services Platform': {
        colors: ['#667eea', '#764ba2'],
        pattern: 'tech'
      },
      'Faith-Based Digital Platform': {
        colors: ['#f093fb', '#f5576c'],
        pattern: 'spiritual'
      },
      'Educational Platform': {
        colors: ['#4facfe', '#00f2fe'],
        pattern: 'learning'
      },
      'Community Management': {
        colors: ['#43e97b', '#38f9d7'],
        pattern: 'community'
      },
      'Online Shopping': {
        colors: ['#fa709a', '#fee140'],
        pattern: 'commerce'
      },
      'Financial Software': {
        colors: ['#30cfd0', '#330867'],
        pattern: 'finance'
      }
    };

    const gradientConfig = categoryGradients[project.category as keyof typeof categoryGradients] || {
      colors: ['#667eea', '#764ba2'],
      pattern: 'default'
    };

    // Créer le dégradé principal
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, gradientConfig.colors[0]);
    gradient.addColorStop(1, gradientConfig.colors[1]);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Ajouter un motif selon le pattern
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;

    switch (gradientConfig.pattern) {
      case 'tech':
        // Grille technologique
        for (let i = 0; i < width; i += 30) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i, height);
          ctx.stroke();
        }
        for (let i = 0; i < height; i += 30) {
          ctx.beginPath();
          ctx.moveTo(0, i);
          ctx.lineTo(width, i);
          ctx.stroke();
        }
        break;
      
      case 'spiritual':
        // Cercles concentriques
        const centerX_spiritual = width / 2;
        const centerY_spiritual = height / 2;
        for (let i = 50; i < Math.max(width, height); i += 50) {
          ctx.beginPath();
          ctx.arc(centerX_spiritual, centerY_spiritual, i, 0, Math.PI * 2);
          ctx.stroke();
        }
        break;
      
      case 'learning':
        // Triangles
        for (let x = 0; x < width; x += 60) {
          for (let y = 0; y < height; y += 60) {
            ctx.beginPath();
            ctx.moveTo(x + 30, y);
            ctx.lineTo(x, y + 50);
            ctx.lineTo(x + 60, y + 50);
            ctx.closePath();
            ctx.stroke();
          }
        }
        break;
      
      case 'community':
        // Hexagones
        const hexSize_community = 40;
        for (let x = 0; x < width; x += hexSize_community * 3) {
          for (let y = 0; y < height; y += hexSize_community * 2) {
            drawHexagon(ctx, x, y, hexSize_community);
          }
        }
        break;
      
      case 'commerce':
        // Lignes diagonales
        for (let i = -height; i < width; i += 40) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i + height, height);
          ctx.stroke();
        }
        break;
      
      case 'finance':
        // Barres verticales
        for (let i = 0; i < width; i += 20) {
          const barHeight_finance = Math.random() * height * 0.6 + height * 0.2;
          ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
          ctx.fillRect(i, height - barHeight_finance, 15, barHeight_finance);
        }
        break;
      
      default:
        // Grille par défaut
        for (let i = 0; i < width; i += 40) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i, height);
          ctx.stroke();
        }
        for (let i = 0; i < height; i += 40) {
          ctx.beginPath();
          ctx.moveTo(0, i);
          ctx.lineTo(width, i);
          ctx.stroke();
        }
    }

    // Ajouter le titre principal
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;

    const titleFontSize = size === 'small' ? 24 : size === 'medium' ? 36 : 48;
    ctx.font = `bold ${titleFontSize}px JetBrains Mono`;
    ctx.textAlign = 'center';
    ctx.fillText(project.title, width / 2, height / 2 - 40);

    // Ajouter la catégorie
    const categoryFontSize = size === 'small' ? 14 : size === 'medium' ? 18 : 24;
    ctx.font = `${categoryFontSize}px JetBrains Mono`;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillText(project.category, width / 2, height / 2);

    // Ajouter les technologies
    const techFontSize = size === 'small' ? 10 : size === 'medium' ? 14 : 18;
    ctx.font = `${techFontSize}px JetBrains Mono`;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    
    const tools = project.tools.split(', ');
    const maxTools = size === 'small' ? 2 : size === 'medium' ? 3 : 4;
    tools.slice(0, maxTools).forEach((tool, index) => {
      ctx.fillText(tool.trim(), width / 2, height / 2 + 30 + (index * 25));
    });

    // Ajouter un badge "Featured" si applicable
    if (project.featured) {
      ctx.fillStyle = '#ffd700';
      ctx.shadowColor = 'rgba(255, 215, 0, 0.5)';
      ctx.shadowBlur = 15;
      ctx.font = `bold ${size === 'small' ? 12 : size === 'medium' ? 16 : 20}px JetBrains Mono`;
      ctx.fillText('⭐ FEATURED', width / 2, 40);
    }

    // Ajouter des éléments décoratifs
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 2;
    ctx.shadowBlur = 0;
    ctx.strokeRect(20, 20, width - 40, height - 40);

    // Coins décoratifs
    const cornerSize = size === 'small' ? 20 : size === 'medium' ? 30 : 40;
    drawCorner(ctx, 20, 20, cornerSize, 'tl');
    drawCorner(ctx, width - 20, 20, cornerSize, 'tr');
    drawCorner(ctx, 20, height - 20, cornerSize, 'bl');
    drawCorner(ctx, width - 20, height - 20, cornerSize, 'br');

    return canvas.toDataURL();
  };

  const drawHexagon = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      const xPos = x + size * Math.cos(angle);
      const yPos = y + size * Math.sin(angle);
      if (i === 0) {
        ctx.moveTo(xPos, yPos);
      } else {
        ctx.lineTo(xPos, yPos);
      }
    }
    ctx.closePath();
    ctx.stroke();
  };

  const drawCorner = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, position: string) => {
    ctx.beginPath();
    switch (position) {
      case 'tl':
        ctx.moveTo(x, y + size);
        ctx.lineTo(x, y);
        ctx.lineTo(x + size, y);
        break;
      case 'tr':
        ctx.moveTo(x - size, y);
        ctx.lineTo(x, y);
        ctx.lineTo(x, y + size);
        break;
      case 'bl':
        ctx.moveTo(x, y - size);
        ctx.lineTo(x, y);
        ctx.lineTo(x + size, y);
        break;
      case 'br':
        ctx.moveTo(x - size, y);
        ctx.lineTo(x, y);
        ctx.lineTo(x, y - size);
        break;
    }
    ctx.stroke();
  };

  const generatedImage = generateHeroImage(project);

  return (
    <div className={`project-hero-image ${size}`}>
      {generatedImage && (
        <img
          src={generatedImage}
          alt={project.title}
          className="hero-generated-image"
        />
      )}
      
      {/* Overlay avec informations */}
      <div className="hero-overlay">
        <div className="hero-content">
          <h3>{project.title}</h3>
          <p>{project.category}</p>
          {project.featured && <span className="featured-badge">⭐ Featured</span>}
        </div>
      </div>
    </div>
  );
};

export default ProjectHeroImage;
