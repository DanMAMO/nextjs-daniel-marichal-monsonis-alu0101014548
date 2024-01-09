import OpenAI , { Configuration, OpenAIApi } from "openai";

// Configuración de la API de OpenAI
const configuration = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAI(configuration);

export default async function (req, res) {
  try {
    const animal = req.body.animal;
    const prompt = createImagePrompt(animal);

    const response = await openai.image.generate({
      model: "dall-e-3", // Modelo a utilizar
      prompt: prompt,
      n: 1, // Número de imágenes a generar
      size: "1024x1024" // Tamaño de la imagen
    });

    const image = response.data[0]; // Obtenemos la primera imagen
    res.status(200).json({ image: image });
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).json({ message: 'Error al procesar tu solicitud' });
  }
}

function createImagePrompt(animal) {
  const animalFormatted = animal.charAt(0).toUpperCase() + animal.slice(1).toLowerCase();
  return `Una imagen artística de un ${animalFormatted} superheroico, estilo cómic. Dales a todos los animales ropa de bardo mediaval y una flauta.`;
}
