import "./Alert.css";

const Alert = ({ message, formStatus, setFormStatus }) => {
  return (
    <div
      style={{
        backgroundColor:
          formStatus === 200 ? "rgba(0, 255, 100, 0.6)" : "rgba(200,0,0,0.8)",
        outline:
          formStatus === 200
            ? "3px solid rgb(0, 100, 0)"
            : "3px solid rgb(255,0,0)",
      }}
      className="alert-container"
    >
      <div className="alert-message">{message}</div>
      {formStatus === 200 ? (
        <a href="/" className="btn btn-primary">
          Ok
        </a>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-x-lg close-btn"
          viewBox="0 0 16 16"
          onClick={() => setFormStatus((prev) => (prev = 0))}
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      )}
    </div>
  );
};

export default Alert;
