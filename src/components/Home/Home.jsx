import React, { useEffect, useState } from "react";
import "./Home.scss";
const Home = ({ projectsRef }) => {
  function getTime() {
    const days = "Sun Mon Tue Wed Thu Fri Sat".split(" ");
    const myanmarTime = new Date();
    const hours = myanmarTime.getHours().toString().padStart(2, 0);
    const mins = myanmarTime.getMinutes().toString().padStart(2, 0);
    const secs = myanmarTime.getSeconds().toString().padStart(2, 0);
    const day = myanmarTime.getDay();
    console.log(day);
    return `${hours}:${mins}:${secs} ${days[day]}`;
  }
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    setInterval(() => {
      setTime(getTime());
    }, 1000);
  }, []);

  return (
    <section className="home wrapper">
      <div className="home__left">
        <h2 className="home__primary-header">Hello, I am Nyi Nyi</h2>
        <p className="home__secondary-header">
          I am a <span className="occupation">Web Developer</span>{" "}
          <span className="base">
            based in Pyin Oo Lwin, Myanmar{" "}
            <b>
              <p>
                ( <i class="far fa-clock"></i> {time})
              </p>
            </b>
          </span>
        </p>
        <button
          onClick={() =>
            projectsRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="home__btn"
        >
          View Projects
        </button>
      </div>
      <div className="home__right">
        <img
          className="home__img"
          src="https://image.freepik.com/free-vector/tiny-people-testing-quality-assurance-software-isolated-flat-vector-illustration-cartoon-character-fixing-bugs-hardware-device-application-test-it-service-concept_74855-10172.jpg"
        />
      </div>
    </section>
  );
};

export default Home;
