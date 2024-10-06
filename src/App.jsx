import { useState } from "react";
import "./App.css";

function App() {
  const [checked, setChecked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (checked && !inputValue) {
      setErrorMessage("La pregunta es obligatoria!!!");
    } else {
      setSubmitted(true);
      setErrorMessage("");
    }
  }
  return (
    <>
      <h1>Hola</h1>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        ¿Te gustan los lenguajes de programación?
      </label>

      {checked && (
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="¿Cuáles lenguajes de programación?"
          />
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <button type="submit">Enviar</button>
      </form>

      {submitted && (
        <div>
          {checked ? (
            inputValue ? (
              <p>
                Los lenguajes de programación que te gustan son: {inputValue}
              </p>
            ) : (
              <p>{errorMessage}</p>
            )
          ) : (
            <p>¡Qué lástima! 😞</p>
          )}
        </div>
      )}
    </>
  );
}

export default App;
