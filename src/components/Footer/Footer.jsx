import { useState } from "react";
import instagramIcon from "../ImagesComponents/iconsSocial/icons8-instagram.svg";
import chatgptIcon from "../ImagesComponents/iconsSocial/icons8-chatgpt.svg";
import telegramIcon from "../ImagesComponents/iconsSocial/telegram.svg";
import linkedinIcon from "../ImagesComponents/iconsSocial/icons8-linkedin.svg";
import githubIcon from "../ImagesComponents/iconsSocial/icons8-github.svg";

import FeedbackForm from "../Modal/FeedbackForm";
import styles from "./Footer.module.css";

function Footer() {
  // Стан для модального вікна
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles["wrapper"]}>
      {/* Футер */}
      <footer className={styles["footer"]}>
        {/* Верхня секція футера */}
        <div className={styles["topSection"]}>
          {/* Соціальні посилання */}
          <div className={styles["linksSection"]}>
            {/* Група посилань "Developer of ChatGPT" */}
            <div className={styles["list-div"]}>
              <h3 className={styles["title"]}>Developer ChatGPT</h3>
              <ul className={styles["list"]}>
                <li className={styles["listItem"]}>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles["image-icon"]}
                  >
                    <img src={instagramIcon} alt="Instagram" />
                  </a>
                </li>
                <li className={styles["listItem"]}>
                  <a
                    href="https://openai.com/chatgpt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles["image-icon"]}
                  >
                    <img src={chatgptIcon} alt="ChatGPT" />
                  </a>
                </li>
                <li className={styles["listItem"]}>
                  <a
                    href="https://t.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles["image-icon"]}
                  >
                    <img src={telegramIcon} alt="Telegram" />
                  </a>
                </li>
              </ul>
            </div>
            {/* Група посилань "Web Developer" */}
            <div className={styles["list-div"]}>
              <h3 className={styles["title"]}>Web Developer</h3>
              <ul className={styles["list"]}>
                <li className={styles["listItem"]}>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles["image-icon"]}
                  >
                    <img src={linkedinIcon} alt="LinkedIn" />
                  </a>
                </li>
                <li className={styles["listItem"]}>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles["image-icon"]}
                  >
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                </li>
                <li className={styles["listItem"]}>
                  <a
                    href="https://t.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles["image-icon"]}
                  >
                    <img src={telegramIcon} alt="Telegram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Компонент зворотного зв'язку */}
          <FeedbackForm />
        </div>

        {/* Нижня секція футера */}
        <div className={styles["bottomSection"]}>
          <p className={styles["p"]}>
            © {new Date().getFullYear()} My Multi-Page Site. All rights
            reserved.
          </p>
          <p className={styles["p"]}>
            By using this site, you agree to our <a href="#">Privacy Policy</a>{" "}
            and <a href="#">Terms of Service</a>.
          </p>
        </div>
      </footer>

      {/* Модальне вікно */}
      {isModalOpen && (
        <div className={styles["modalOverlay"]} onClick={handleModalClose}>
          <div
            className={styles["modalContent"]}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className={styles["title"]}>Contact Us</h3>
            <form className={styles["form"]}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className={styles["input"]}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className={styles["input"]}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className={styles.textarea}
                rows="4"
                required
              ></textarea>
              <button type="submit" className={styles["button"]}>
                Submit
              </button>
            </form>
            <button
              className={styles["closeButton"]}
              onClick={handleModalClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
