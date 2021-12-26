import React, { useEffect, useRef } from "react";
import "./Contact.scss";

const Contact = ({ setContactRef }) => {
  const contactRef = useRef();

  useEffect(() => {
    setContactRef(contactRef);
  }, []);

  return (
    <div ref={contactRef} className="contact wrapper">
      <h2 className="contact__header">Contact</h2>
      <p className="contact__paragraph">
        I am actively looking for an opportunity. If you have one to offer or
        just to know more about me or for any reasons, you can contact me at
        anytime.
      </p>
      <div className="contact__via contact__email">
        <i className="fas fa-envelope"></i>
        <span>nyinyihmueaung19@gmail.com</span>
      </div>
      <div className="contact__via contact__email">
        <i className="fas fa-phone"></i>
        <span>+95 9768290598 (Prefer to be contacted via email)</span>
      </div>
      <div className="social-links">
        <h2 className="contact__header">You can also find me on</h2>
        <a
          href="https://www.linkedin.com/in/nyi-nyi-hmue-aung-411a261a8/"
          target="_blank"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/nnha19" target="_blank">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
