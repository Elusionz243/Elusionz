const Project = ({ project, projectStyles, handleClick }) => {
  return (
    <a
      href={
        project === "pomodoro-timer"
          ? "https://pomodoro-timer-ashy.vercel.app"
          : "https://stardew-valley-planner.vercel.app/Stardew_Valley_Farm_Planner"
      }
    >
      <div className="project-card" name={project} style={projectStyles}>
        <div className="project-title">{project.replace(/-/g, " ")}</div>
      </div>
    </a>
  );
};

export default Project;
