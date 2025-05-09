import React from "react";
import "./whatGPT3.css";
import Feature from "../../components/feature/Feature";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="GPT-3 is a cutting-edge natural language processing model developed by OpenAI. With a massive 175 billion parameters, it is one of the largest language models, capable of understanding, generating, and transforming human-like text across a wide range of applications."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbot"
          text="Chatbots leverage GPT-3 to enhance conversational experiences. GPT-3 enables chatbots to understand and respond to user queries."
        />
        <Feature
          title="Knowledgebase"
          text="GPT-3 serves as a valuable tool for creating and expanding knowledge bases. By processing vast amounts of text data, it can generate coherent and contextually relevant information."
        />
        <Feature
          title="Education"
          text="GPT-3 has applications in education, assisting both teachers and learners. It can generate educational content, answer questions, and even aid in programming-related tasks."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
