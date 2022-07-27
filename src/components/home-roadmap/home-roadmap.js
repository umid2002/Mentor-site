import "./home-roadmap.scss"

const HomeRoadmap = () => {
  return (
    <div className="home-roadmap">
      <div className="roadmap-top">
        <h2 className="roadmap-title">Roadmap</h2>
        <a href="#!">View</a>
      </div>
      <ul className="roadmap-bottom">
        <li className="roadmap-item">
          <span className="roadmap-circle"></span>
          <p className="roadmap-subtitle">Planned</p>
          <span className="roadmap-count">2</span>
        </li>
        <li className="roadmap-item">
          <span className="roadmap-circle"></span>
          <p className="roadmap-subtitle">In-Progress</p>
          <span className="roadmap-count">1</span>
        </li>
        <li className="roadmap-item">
          <span className="roadmap-circle"></span>
          <p className="roadmap-subtitle">Live</p>
          <span className="roadmap-count">3</span>
        </li>
      </ul>
    </div>
  );
}

export default HomeRoadmap;