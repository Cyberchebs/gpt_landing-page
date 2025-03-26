import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import { motion } from "motion/react";
import { easeInOut } from "motion";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Lets Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          cumque similique voluptatibus provident eveniet quod minima
          praesentium tempore nesciunt? Sint voluptas illo maiores officiis vero
          itaque cupiditate magnam quos! Quo
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: easeInOut }}
        className="gpt3__header-image"
      >
        <img src={ai} alt="ai" />
      </motion.div>
    </div>
  );
};

export default Header;
