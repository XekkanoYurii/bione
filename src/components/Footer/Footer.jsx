import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles["wrapper"]}>
      <footer className={styles["footer"]}>
        <div className={styles["topSection"]}>
          {/* Два списки посилань */}
          <div className={styles["linksSection"]}>
            <div>
              <h3 className={styles["title"]}>Developer of ChatGPT</h3>
              <ul className={styles["list"]}>
                <li className={styles["listItem"]}>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li className={styles["listItem"]}>
                  <a
                    href="https://openai.com/chatgpt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ChatGPT
                  </a>
                </li>
                <li className={styles["listItem"]}>
                  <a
                    href="https://t.me"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className={styles["title"]}>Web Developer</h3>
              <ul className={styles["list"]}>
                <li className={styles["listItem"]}>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className={styles["listItem"]}>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li className={styles["listItem"]}>
                  <a
                    href="https://t.me"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Форма зворотнього зв'язку */}
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
              <button type="submit" className={styles["button"]}>
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Нижній розтягнутий блок */}
        <div className={styles["bottomSection"]}>
          <p>
            © {new Date().getFullYear()} My Multi-Page Site. All rights
            reserved.
          </p>
          <p>
            By using this site, you agree to our <a href="#">Privacy Policy</a>{" "}
            and <a href="#">Terms of Service</a>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
