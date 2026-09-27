import { GoogleGenAI } from '@google/genai'

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY
})

async function getAnswer() {
  const response = await ai.models.generateContent({
    model: 'gemini-3.8-flash', // Active Google API model
    contents: 'What is React in Web Development?'
  })

  console.log(response.text)
}

getAnswer()