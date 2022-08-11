import { useNavigate } from "react-router-dom";

import ProjectContainer from "./project/ProjectContainer";

import SVFP from "../../utils/imgs/SVFP-preview.png";
import Pomodoro from "../../utils/imgs/Pomodoro-Timer.png";

import "./Projects.css";

const Projects = () => {
  const navigate = useNavigate();

  const projects = {
    webdev: {
      "stardew-valley-farm-planner": {
        background: `url(${SVFP})`,
        backgroundPosition: "right",
        backgroundSize: "cover",
      },
      "pomodoro-timer": {
        background: `url(${Pomodoro})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      },
    },
  };

  const handleClick = (e) => {
    navigate(
      "https://stardew-valley-planner.vercel.app/Stardew_Valley_Farm_Planner"
    );
  };

  return (
    <div className="projects-main-container">
      <ProjectContainer
        category={"webdev"}
        projects={projects}
        handleClick={handleClick}
      />
      {/* <div className="projects-container">
        <div
          className="projects-header projects-title"
          onClick={() => navigate("/projects/webdev")}
        >
          WEBDEV
        </div>
        <div className="projects-list">
          <div
            className="project-card"
            onClick={handleClick}
            name="stardew-valley-farm-planner"
            style={{
              background: `url(${SVFP})`,
              backgroundPosition: "right",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="project-title">Stardew Valley Farm Planner</div>
          </div>
          <div
            className="project-card"
            onClick={handleClick}
            name="pomodoro-timer"
            style={{
              background: `url(${Pomodoro})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="project-title">Pomodoro Timer</div>
          </div>
          <div
            className="project-card"
            onClick={handleClick}
            name="coming-soon"
            style={{ background: "rgba(200,200,200,0.8)" }}
          >
            <div className="project-title">Coming soon...</div>
          </div>
          <div
            className="project-card"
            onClick={handleClick}
            name="coming-soon"
            style={{ background: "rgba(200,200,200,0.8)" }}
          >
            <div className="project-title">Coming soon...</div>
          </div>
          <div
            className="project-card"
            onClick={handleClick}
            name="coming-soon"
            style={{ background: "rgba(200,200,200,0.8)" }}
          >
            <div className="project-title">Coming soon...</div>
          </div>
        </div>
        <div className="projects-footer">
          <div className="resource-list">
            <div className="resource">
              <svg
                height="25"
                viewBox="175.7 78 490.6 436.9"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
                className="svg"
              >
                <g fill="#61dafb">
                  <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
                  <circle cx="420.9" cy="296.5" r="45.7" />
                </g>
              </svg>
              ReactJS
            </div>
            <div className="resource">
              <svg
                fill="none"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 124 141.53199999999998"
                className="svg"
              >
                <path
                  d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
                  fill="#e9ca32"
                />
                <path
                  d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
                  fill="#ffde25"
                />
                <g fill="#fff">
                  <path d="M57 26H43.5v78L33 102V91.5l-12.5-2V113l36.5 9.5zM67.127 26H104.5L102 40.95H81.394v24.533H102L99.5 115l-32.373 7.5V107L89 99.5 90.263 79l-23.136 3.35z" />
                </g>
              </svg>
              Javascript
            </div>
            <div className="resource">
              <svg
                fill="none"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 124 141.53199999999998"
                className="svg"
              >
                <path
                  d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
                  fill="#e34f26"
                />
                <path
                  d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
                  fill="#ef652a"
                />
                <path
                  d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
                  fill="#fff"
                />
              </svg>
              HTML 5
            </div>
            <div className="resource">
              <svg
                fill="none"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 124 141.53"
                className="svg"
              >
                <path
                  d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z"
                  fill="#1b73ba"
                />
                <path
                  d="M62.468 129.275V12.085l51.064.17-9.106 104.85z"
                  fill="#1c88c7"
                />
                <path
                  d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z"
                  fill="#fff"
                />
              </svg>
              CSS 3
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
