import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="home-bg">
        <div className="intro-card">
          <div className="intro-image"></div>
          <div className="intro">
            <p>
              <strong>Jacob Hickman</strong>, is a full-stack web developer,
              specializing in front-end development. Graduated from the{" "}
              <a href="https://thinkful.com/" className="about-link">
                Thinkful
              </a>{" "}
              Online Bootcamp, in May of 2021.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
