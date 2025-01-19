import NavigationButton from "../NavigationButton/NavigationButton";
import styles from "./Contacts.module.css";

function Contacts() {
  return (
    <section className="contacts">
      <h1>Contact Us</h1>
      <p>Get in touch with us through the form below.</p>
      <ul className={styles["ul"]}>
        <li>lalalal</li>
        <li>lalala</li>
      </ul>
      <NavigationButton direction="left" to="/products" />
    </section>
  );
}

export default Contacts;
