import NavigationButton from "../NavigationButton/NavigationButton";

import BlockList from "./BlockList/BlockList";
const Education = () => {
  return (
    <div>
      Education
      <BlockList />
      <NavigationButton direction="left" to="/about" />
      <NavigationButton direction="right" to="/products" />
    </div>
  );
};

export default Education;
