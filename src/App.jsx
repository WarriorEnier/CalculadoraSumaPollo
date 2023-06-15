import { useState } from "react";
import { Contenedor } from "./components/Contenedor";
import { Display } from "./components/Display";
import { Header } from "./Header";
import { Button } from "./components/Button";
import { teclas } from "./Operations/operation";
import {
  RiDivideLine,
  RiSubtractLine,
  RiAddLine,
  RiCloseLine,
} from "react-icons/ri";

import "./App.css";

function App() {
  const [numero, setNumero] = useState("");
  const [prevnumero, setPrevNumero] = useState("");
  const [operador, setOperador] = useState("");
  const [total, setTotal] = useState("");
  const [error, setError] = useState({
    estado: false,
    msm: "",
  });

  let num = numero === "" ? "0" : numero;

  const manejarNuemero = (num) => {
    setTotal("");
    if (num === "." && numero === "") setNumero("0.");
    if (num === "0" && numero === "" && prevnumero === "") return;
    if (numero === "0") return;
    if (numero.length > 9) return;
    if (num === "." && numero.includes(".")) return;
    if (num === ".") {
      setNumero(numero + num);
    } else {
      setNumero(numero + parseFloat(num));
    }
  };
  const clear = () => {
    setNumero("");
    setError({ estado: false, msm: "" });
    setTotal("");
    setPrevNumero("");
    setOperador("");
  };
  const absolute = () => {
    if (numero !== 0) setTotal(numero * -1);
  };
  const handleOperation = (e) => {
    let operation = e;

    switch (operation) {
      case "+":
        setOperador(operation);
        setPrevNumero(numero);
        setNumero("");
        break;
      case "-":
        setOperador(operation);
        setPrevNumero(numero);
        setNumero("");
        break;
      case "x":
        setOperador(operation);
        setPrevNumero(numero);
        setNumero("");
        break;
      case "/":
        setOperador(operation);
        setPrevNumero(numero);
        setNumero("");
        break;
      case "%":
        setOperador(operation);
        setPrevNumero(numero);
        setNumero("");
        break;
    }
  };

  const resultado = () => {
    let res = 0;
    if (prevnumero === "" || numero === "") return;
    switch (operador) {
      case "%":
        res = (parseFloat(prevnumero) * parseFloat(numero)) / 100;

        break;
      case "+":
        res = parseFloat(prevnumero) + parseFloat(numero);

        break;
      case "-":
        res = parseFloat(prevnumero) - parseFloat(numero);

        break;
      case "x":
        res = parseFloat(prevnumero) * parseFloat(numero);

        break;
      case "/":
        parseInt(prevnumero) === 0
          ? setError({
              estado: true,
              msm: (
                <span className="text-red-600 text-lg">
                  No se puede dividir entre 0
                </span>
              ),
            })
          : (res = parseFloat(prevnumero) / parseFloat(numero));

        break;
    }
    const isInteger = res % 1 === 0;
    setTotal(isInteger ? res : res.toFixed(2));
    setNumero("");
    setPrevNumero("");
  };

  return (
    <>
      <Header />
      <Contenedor>
        <Display error={error} num={num} total={total} />
        <section>
          <div className="grid grid-cols-4 gap-4">
            <button className="w-[60px] h-[60px]"></button>
            <Button
              className="text-white text-2xl my-4 w-[60px] h-[60px] mx-auto  rounded-full bg-gray-600"
              onClick={() => handleOperation("%")}
              value=" %"
            />
            <Button
              className=" text-white text-2xl my-4 w-[60px] h-[60px] mx-auto  rounded-full bg-gray-600"
              onClick={absolute}
              value="+/-"
            />
            <Button
              className=" text-white text-2xl my-4 w-[60px] h-[60px] mx-auto  rounded-full bg-yellow-500"
              onClick={clear}
              value="C"
            />
          </div>
          <div className="flex justify-between gap-3 h-[270px]">
            <div className="grid grid-cols-3  gap-4 w-[75%]">
              {teclas.map((t) =>
                t === "=" ? (
                  <Button
                    key={t}
                    className="text-white bg-cyan-600 w-[60px] h-[60px] mx-auto  rounded-full text-2xl font-orbi font-bold"
                    onClick={resultado}
                    value={t}
                  />
                ) : (
                  <Button
                    key={t}
                    className="text-gray-800 bg-cyan-300 w-[60px] h-[60px] mx-auto  rounded-full text-2xl  font-orbi border-solid border-2 border-white "
                    onClick={() => manejarNuemero(t)}
                    value={t}
                  />
                )
              )}
            </div>

            <div className="grid grid-cols-1  gap-4 w-[20%]  mx-auto">
              <Button
                className="bg-cyan-900 text-white text-3xl w-[60px] h-[60px] mx-auto  rounded-full flex justify-center items-center"
                onClick={() => handleOperation("/")}
                value={<RiDivideLine />}
              />

              <Button
                className="bg-cyan-900 text-white text-3xl  w-[60px] h-[60px] mx-auto  rounded-full flex justify-center items-center"
                onClick={() => handleOperation("x")}
                value={<RiCloseLine />}
              />

              <Button
                className="bg-cyan-900 text-white text-3xl  w-[60px] h-[60px] mx-auto  rounded-full flex justify-center items-center"
                onClick={() => handleOperation("-")}
                value={<RiSubtractLine />}
              />

              <Button
                className="bg-cyan-900 text-white text-3xl  w-[60px] h-[60px] mx-auto  rounded-full flex justify-center items-center"
                onClick={() => handleOperation("+")}
                value={<RiAddLine />}
              />
            </div>
          </div>
        </section>
      </Contenedor>
    </>
  );
}

export default App;
