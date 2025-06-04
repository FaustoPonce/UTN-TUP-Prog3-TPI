import { useContext } from "react";

import { WordleContext } from "../../pages/Wordle";

const Key = ({ keyVal, bigKey, disabled }) => {
  const { onSelectLetter, onEnter, onDelete } = useContext(WordleContext);

  const selectLetter = () => {
    // Definición del comportamiento de la tecla Enter
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };

  return (
    <div
      className="key"
      id={bigKey ? "big" : disabled && "disabled"}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
};

export default Key;
