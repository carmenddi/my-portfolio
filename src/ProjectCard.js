import './ProjectCard.css';

export default function ProjectCard({ image, title, link, description }) {
    return (
        <div className="project-card">
          <img src={image} alt={title} className="project-image" />
          <div className="elements">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <button className="view-more-btn"><a href={link} target="_blank" rel="noreferrer">Visit Website</a></button>
          </div>
        </div>
      );
    };