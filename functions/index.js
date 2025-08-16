import { onRequest } from "firebase-functions/v2/https";
import OpenAI from "openai";
import {PersonalChatbot} from "./PersonalChatbot.js";

const ALLOWED_ORIGINS = [
    "https://chrishg.net",
    "https://www.chrishg.net",
    "https://chrishg1.com",
    "https://www.chrishg1.com",
    "http://localhost:5175",
];

const personalChatbot = new PersonalChatbot();

export const chatbot = onRequest({ secrets: ["OPENAI_API_KEY"] }, async (req, res) => {
    const origin = req.get("Origin");

    // CORS: Reject disallowed origins
    if (!ALLOWED_ORIGINS.includes(origin)) {
        return res.status(403).json({ error: "Unauthorized request" });
    }

    // Set CORS headers
    res.set({
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
    });

    // Handle preflight request
    if (req.method === "OPTIONS") return res.status(204).send();

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: "Message is required" });
    }

    try {
        const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

        if (process.env.NODE_ENV !== "production") {
            console.log("Incoming:", req.method, req.body);
        }

        // Use PersonalChatbot with your JSON data
        const reply = await personalChatbot.getResponse(message, openai);
        res.json({ reply });

        // const completion = await openai.chat.completions.create({
        //     model: "gpt-4.1-nano",
        //     messages: [
        //         { role: "system",
        //           content: "You are a chatbot that only provides information about chrishg.net, my projects, and my personal background. If asked about anything else, politely say you can only answer questions about chrishg.net."},
        //         { role: "user", content: message },
        //     ],
        //     max_completion_tokens: 75,
        // });

        // const reply = completion.choices[0].message.content;
        // res.json({ reply });

    } catch (err) {
        console.error("OpenAI error:", err);

        if (err?.code === "insufficient_quota") {
            return res.status(429).json({
                error: "You’ve exceeded your OpenAI quota. Please check your usage and billing.",
            });
        }

        res.status(500).json({ error: "AI processing failed" });
    }
});
