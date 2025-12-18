import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "sensai_aicareer", // Unique app ID
  name: "sensai_aicareer",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
