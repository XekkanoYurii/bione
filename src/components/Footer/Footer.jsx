import React, { useState } from "react";
import instagramIcon from "../ImagesComponents/iconsSocial/icons8-instagram.svg";
import chatgptIcon from "../ImagesComponents/iconsSocial/icons8-chatgpt.svg";
import telegramIcon from "../ImagesComponents/iconsSocial/telegram.svg";
import linkedinIcon from "../ImagesComponents/iconsSocial/icons8-linkedin.svg";
import githubIcon from "../ImagesComponents/iconsSocial/icons8-github.svg";
import styles from "./Footer.module.css";

function Footer() {
  // Стейт для відображення/приховування форми
  const [formVisible, setFormVisible] = useState(false);

  const handleButtonClick = () => {
    setFormVisible(!formVisible); // Перемикаємо видимість форми
  };

  return (
    <div className={styles["wrapper"]}>
      <footer className={styles["footer"]}>
        <div className={styles["topSection"]}>
          {/* Два списки посилань */}
          <div className={styles["linksSection"]}>
            <div className={styles["list-div"]}>
              <h3 className={styles["title"]}>Developer of ChatGPT</h3>
              <ul className={styles["list"]}>
                <li className={styles["listItem"]}>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    className={styles["image-icon"]}
                    rel="noopener noreferrer"
                  >
                    <img
                      src={instagramIcon}
                      alt="instagram icon"
                      width={40}
                      height={40}
                    />
                  </a>
                </li>
                <li className={styles["listItem"]}>
                  <a
                    href="https://openai.com/chatgpt"
                    target="_blank"
                    className={styles["image-icon"]}
                    rel="noopener noreferrer"
                  >
                    <img
                      src={chatgptIcon}
                      alt="chatgpt icon"
                      width={40}
                      height={40}
                    />
                  </a>
                </li>
                <li className={styles["listItem"]}>
                  <a
                    href="https://t.me"
                    target="_blank"
                    className={styles["image-icon"]}
                    rel="noopener noreferrer"
                  >
                    <img
                      src={telegramIcon}
                      alt="telegram icon"
                      width={40}
                      height={40}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles["list-div"]}>
              <h3 className={styles["title"]}>Web Developer</h3>
              <ul className={styles["list"]}>
                <li className={styles["listItem"]}>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    className={styles["image-icon"]}
                    rel="noopener noreferrer"
                  >
                    <img
                      src={linkedinIcon}
                      alt="linkedin icon"
                      width={40}
                      height={40}
                    />
                  </a>
                </li>
                <li className={styles["listItem"]}>
                  <a
                    href="https://github.com"
                    target="_blank"
                    className={styles["image-icon"]}
                    rel="noopener noreferrer"
                  >
                    <img
                      src={githubIcon}
                      alt="github icon"
                      width={40}
                      height={40}
                    />
                  </a>
                </li>
                <li className={styles["listItem"]}>
                  <a
                    href="https://t.me"
                    target="_blank"
                    className={styles["image-icon"]}
                    rel="noopener noreferrer"
                  >
                    <img
                      src={telegramIcon}
                      alt="telegram icon"
                      width={40}
                      height={40}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Кнопка з анімацією */}
          <div className={styles["button-container"]}>
            {/* Форма, що відкривається по натисканню на кнопку */}
            <div className={styles["formSection"]}>
              <form className={styles["form"]}>
                <h3 className={styles["title"]}>Contact Us</h3>
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
                  className={styles["textarea"]}
                  rows="4"
                  required
                ></textarea>
                <button type="submit" className={styles["button"]}>
                  Submit
                </button>
              </form>
            </div>
            )
          </div>
        </div>

        {/* Нижній розтягнутий блок */}
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
    </div>
  );
}

export default Footer;
