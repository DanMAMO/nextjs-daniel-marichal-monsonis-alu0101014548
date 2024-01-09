import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    if (!animalInput.trim()) {
      setResult("¡Vamos! Ni siquiera un animal imaginario?");
      return;
    }
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ animal: animalInput }),
    });
    const data = await response.json();
    setResult(data.result || "Hmm, parece que hoy no estoy muy creativo.");
    setAnimalInput("");
  }

  return (
    <div>
      <Head>
        <title>DMSI LAB: ¿Otra vez aquí?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>¡Bienvenido al menos original generador de nombres para mascotas!</h1>
        <p>Sé que estás emocionado. Contén tu entusiasmo, por favor.</p>
        <form onSubmit={onSubmit} className={styles.form}>
          <input
            type="text"
            name="animal"
            placeholder="Escribe un animal... si puedes"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <button type="submit">Genérame un nombre... Deberías considerar ponerle Pipo al perro como nombre.</button>
        </form>
        {result && <div className={styles.result}>¿En serio? {result}</div>}
      </main>
    </div>
  );
}
