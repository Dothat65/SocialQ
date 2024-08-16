import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ message: 'Prompt is required' }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are an assistant that creates flashcards containing jokes, conversation starters, and questions." },
        { role: "user", content: `Create a flashcard with the following context: ${prompt}. Separate the front and back with a delimiter like '---'.` },
      ],
    });

    const generatedText = completion.choices[0].message.content;
    const [front, back] = generatedText.split('---').map(part => part.trim());

    if (!front || !back) {
      return NextResponse.json({ message: 'Unable to generate flashcard content properly' }, { status: 500 });
    }

    return NextResponse.json({ front, back });
  } catch (error) {
    console.error("Error generating flashcard:", error);
    return NextResponse.json({ message: 'Error generating flashcard' }, { status: 500 });
  }
}