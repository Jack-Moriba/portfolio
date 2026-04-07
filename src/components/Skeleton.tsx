import './styles/Skeleton.css';

interface SkeletonProps {
  type?: 'text' | 'title' | 'avatar' | 'image' | 'card' | 'paragraph';
  width?: string;
  height?: string;
  count?: number;
  className?: string;
}

export const Skeleton = ({ 
  type = 'text', 
  width, 
  height, 
  count = 1, 
  className = '' 
}: SkeletonProps) => {
  const getSkeletonClass = () => {
    switch (type) {
      case 'title':
        return 'skeleton-title';
      case 'avatar':
        return 'skeleton-avatar';
      case 'image':
        return 'skeleton-image';
      case 'card':
        return 'skeleton-card';
      case 'paragraph':
        return 'skeleton-paragraph';
      default:
        return 'skeleton-text';
    }
  };

  const skeletons = Array.from({ length: count }, (_, i) => (
    <div
      key={i}
      className={`skeleton ${getSkeletonClass()} ${className}`}
      style={{ width, height }}
    >
      <div className="skeleton-shimmer" />
    </div>
  ));

  if (type === 'paragraph') {
    return (
      <div className="skeleton-paragraph-container">
        {skeletons}
      </div>
    );
  }

  return <>{skeletons}</>;
};

// Pre-built skeleton layouts
export const ProjectCardSkeleton = () => (
  <div className="skeleton-project-card">
    <Skeleton type="image" height="200px" />
    <div className="skeleton-project-content">
      <Skeleton type="title" width="70%" />
      <Skeleton type="text" width="90%" />
      <Skeleton type="text" width="60%" />
      <div className="skeleton-project-tags">
        <Skeleton type="text" width="80px" />
        <Skeleton type="text" width="60px" />
        <Skeleton type="text" width="70px" />
      </div>
    </div>
  </div>
);

export const ProfileSkeleton = () => (
  <div className="skeleton-profile">
    <Skeleton type="avatar" width="120px" height="120px" />
    <Skeleton type="title" width="60%" />
    <Skeleton type="text" width="80%" />
    <Skeleton type="paragraph" count={3} />
  </div>
);

export const TechStackSkeleton = () => (
  <div className="skeleton-tech-stack">
    {Array.from({ length: 8 }, (_, i) => (
      <div key={i} className="skeleton-tech-item">
        <Skeleton type="avatar" width="60px" height="60px" />
        <Skeleton type="text" width="80px" />
      </div>
    ))}
  </div>
);

export default Skeleton;
