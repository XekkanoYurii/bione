import { Routes, Route } from "react-router-dom";
import AboutProducts from "./AboutProducts/AboutProducts";
import Bubbles from "./Bubbles/Bubbles";
import EducationHero from "./EducationHero/EducationHero";
import BlockList from "./BlockList/BlockList";

// Імпортуємо підсторінки
import FirstUse from "./BlockList/Blocks/FirstUse";
import Ecosystem from "./BlockList/Blocks/CastomGpt";
import Crypto from "./BlockList/Blocks/Change";
import CustomGpt from "./BlockList/Blocks/ChatGpt";
import Anonimus from "./BlockList/Blocks/Coins";
import Coins from "./BlockList/Blocks/Crypto";
import ChatGpt from "./BlockList/Blocks/Ecosystem";
import Change from "./BlockList/Blocks/Anonimus";

import styles from "./Products.module.css";

function Products() {
  return (
    <section className={styles["products"]}>
      <div className={styles["container"]}>
        <Routes>
          {/* Головна сторінка "Продукти" */}
          <Route
            path="/"
            element={
              <>
                <AboutProducts />
                <div id="bubbles">
                  <Bubbles />
                </div>
                <div id="education">
                  <EducationHero />
                </div>
                <BlockList />
              </>
            }
          />

          {/* Підсторінки */}
          <Route path="first-use" element={<FirstUse />} />
          <Route path="ecosystem" element={<Ecosystem />} />
          <Route path="crypto" element={<Crypto />} />
          <Route path="custom-gpt" element={<CustomGpt />} />
          <Route path="anonimus" element={<Anonimus />} />
          <Route path="coins" element={<Coins />} />
          <Route path="chat-gpt" element={<ChatGpt />} />
          <Route path="change" element={<Change />} />
        </Routes>
      </div>
    </section>
  );
}

export default Products;
