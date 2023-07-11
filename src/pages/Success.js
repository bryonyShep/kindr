import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import HeartIcon from "../components/HeartIcon/heartIcon.js";
import Confetti from "react-confetti";

export default function SuccessPage({ successPath }) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let successText = "";
  let showHomeButton = false;
  let showMyProfileButton = false;
  let showViewTaskButton = false;
  let showMyTasksButton = false;
  let showBrowseTasksButton = false;


  if (successPath === "created") {
    successText =
      "Thank you for posting a task - a volunteer will be in touch with you soon!";
    showBrowseTasksButton = true;
    showMyTasksButton = true;
  }
  if (successPath === "accepted") {
    successText =
      "Thank you for accepting a task - please click 'View Task' to contact the user to arrange a time to complete the task";
    showViewTaskButton = true;
    showMyTasksButton = true;
  }
  if (successPath === "completed") {
    successText =
      "Thank you for completing this task and spreading some kindness!";
    showViewTaskButton = true;
    showMyTasksButton = true;
    showHomeButton = true;
  }

  return (
    <div className="success">
      <Confetti width={windowSize.width} height={windowSize.height} />
      <Confetti
  friction={1.}
  
/>

      <h1 className="success-text"> {successText}</h1>

      <HeartIcon />
      {showHomeButton && (
        <Link to="/">
          <button className="button">Home</button>
        </Link>
      )}

      {showMyTasksButton && (
        <Link to="/mytasks">
          <button className="button">My Tasks</button>
        </Link>
      )}

      {showViewTaskButton && (
        <Link to="/view">
          <button className="button">View Task</button>
        </Link>
      )}

      {showMyProfileButton && (
        <Link to="/profile">
          <button className="button">My Profile</button>
        </Link>
      )}

      {showBrowseTasksButton && (
        <Link to="/browse">
          <button className="button">Browse Tasks</button>
        </Link>
      )}
    </div>
  );
}
