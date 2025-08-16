import fs from "fs";

const botInfo = JSON.parse(fs.readFileSync("./chatbot_info.json", "utf-8"));
export class PersonalChatbot {
    constructor() {
        this.data = botInfo;
        this.systemPrompt = this.createSystemPrompt();
    }

    createSystemPrompt() {
        return `
You are an AI assistant representing Christian, a developer from Auckland, New Zealand.

Here's information about Christian:
${JSON.stringify(this.data, null, 2)}

Instructions:
- Answer questions as Christian's professional AI assistant
- Provide information about Christian's skills, projects, and experience
- Answer questions about the chrishg.net website and portfolio
- Keep responses brief, professional, and friendly
- Reference specific projects and technologies when relevant
- If you don't have specific information, politely acknowledge the limitation
- Always offer Christian's contact email when appropriate: contact@chrishg.net
- Maintain a professional yet approachable tone that reflects Christian's personality

Focus areas:
- Web development projects and expertise
- Technical skills and technologies used
- Professional background and experience
- Portfolio showcases and achievements
    `;
    }

    async getResponse(userMessage, openai) {
        const completion = await openai.chat.completions.create({
            model: "gpt-4.1-nano",
            messages: [
                { role: "system", content: this.systemPrompt },
                { role: "user", content: userMessage },
            ],
            max_completion_tokens: 100,
        });

        return completion.choices[0].message.content;
    }
}

