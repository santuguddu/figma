import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          The GPT-3 API (Application Programming Interface) allows developers to
          integrate the powerful capabilities of OpenAI's GPT-3 into their own
          applications, products, or services. With the GPT-3 API, developers
          can leverage the immense language understanding and generation
          capabilities of GPT-3 without needing to train the model themselves.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="your email address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
