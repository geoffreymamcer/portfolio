import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

const getAI = () => {
  if (!genAI) {
    const apiKey = import.meta.env.VITE_API_KEY;
    if (apiKey) {
      genAI = new GoogleGenAI({ apiKey });
    } else {
      console.warn(
        "API_KEY not found in environment variables. Gemini features will be disabled."
      );
    }
  }
  return genAI;
};

export const initializeChat = async () => {
  const ai = getAI();
  if (!ai) return null;

  try {
    chatSession = ai.chats.create({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize chat:", error);
    return null;
  }
};

export const sendMessage = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    return "System Error: Neural Link Disconnected. (Missing API Key or Connection Error)";
  }

  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "No response data received.";
  } catch (error) {
    console.error("Error sending message:", error);
    return "Error: Transmission Interrupted.";
  }
};
