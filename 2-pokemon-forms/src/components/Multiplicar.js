import React from "react";
import ReactDOM from "react-dom";

const Multiplicar = (props) => {
  const [number1, setNumber1] = React.useState("");
  const [number2, setNumber2] = React.useState("");

  const [resultado, setResultado] = React.useState("0");

  function handleChange(e) {
    setNumber1(e.target.value);
    console.log(number1);
  }
  function handleChange2(e) {
    setNumber2(e.target.value);
    console.log(number2);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (number1 === "" || number2 === "") {
      alert("Campos vacios");
    } else {
      setResultado(number1 * number2);
      console.log(`Submitting value ${resultado}`);
    }
  };

  return (
    <div className="container">
      <div className="col-6 mx-auto">
        <h1>Ingresa dos numeros para multiplicar 🧭</h1>
        <form className=" " onSubmit={handleSubmit}>
          <label>Numero 1</label>
          <input
            className="form-control mb-5"
            type="text"
            name="number1"
            value={number1}
            onChange={handleChange}
          />

          <label>Numero 2 </label>
          <input
            className="form-control mb-5"
            type="text"
            name="number2"
            value={number2}
            onChange={handleChange2}
          />
          <button className="btn btn-primary" type="submit">
            Calcular
          </button>
        </form>
        <p>El resultado es: {resultado}</p>
      </div>
    </div>
  );
};

export default Multiplicar;
