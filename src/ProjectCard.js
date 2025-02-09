import './ProjectCard.css';

export default function ProjectCard({ image, title, link }) {
    return (
        <div className="project-card">
          <img src={image} alt={title} className="project-image" />
          <p className="project-title">{title}</p>
          <button className="view-more-btn"><a href={link} target="_blank" rel="noreferrer">Visit Website</a></button>
        </div>
      );
    };