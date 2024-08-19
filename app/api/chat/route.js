import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const { prompt, count } = await req.json();

    if (!prompt) {
      return NextResponse.json({ message: 'Prompt is required' }, { status: 400 });
    }

    if (!count || count <= 0) {
      return NextResponse.json({ message: 'Valid count is required' }, { status: 400 });
    }

    const flashcards = [];

    for (let i = 0; i < count; i++) {
      const modifiedPrompt = `${prompt} Variation ${i + 1}`;
      console.log(`Generating flashcard ${i + 1} with prompt: ${modifiedPrompt}`);

      try {
        const completion = await openai.chat.completions.create({
          model: 'gpt-4-turbo',
          messages: [
            {
              role: "system",
              content: `
                You are a creative assistant specializing in generating flashcards for educational and entertainment purposes. 
                Your task is to generate unique and original content each time, ensuring that no two flashcards are alike. 
                When generating a flashcard, ensure it is appropriate, engaging, and varied. 
                Avoid repetition, and introduce new ideas or twists to common themes whenever possible.
              `,
            },
            {
              role: "user",
              content: `Create a flashcard with the following context: ${modifiedPrompt}. Separate the front and back with the delimiter '---'.`,
            },
          ],
        });

        const generatedText = completion.choices[0]?.message?.content;
        console.log(`Response for flashcard ${i + 1}:`, generatedText);

        if (generatedText) {
          let [front, back] = generatedText.split('---').map(part => part.trim());

          if (!front || !back) {
            front = generatedText.match(/(?:\*\*Front:\*\*|Front:)\s*(.*)/i)?.[1] || '';
            back = generatedText.match(/(?:\*\*Back:\*\*|Back:)\s*(.*)/i)?.[1] || '';
          }

          if (front && back) {
            flashcards.push({ front, back });
          } else {
            console.warn(`Invalid flashcard format in response for flashcard ${i + 1}`);
          }
        } else {
          console.error(`No response or malformed response for flashcard ${i + 1}`);
        }
      } catch (apiError) {
        console.error(`API Error while generating flashcard ${i + 1}:`, apiError);
      }
    }

    console.log('Generated Flashcards:', flashcards);

    if (flashcards.length === 0) {
      return NextResponse.json({ message: 'Unable to generate flashcards' }, { status: 500 });
    }

    return NextResponse.json({ flashcards }, { status: 200 });
  } catch (error) {
    console.error("Error generating flashcards:", error);
    return NextResponse.json({ message: 'An error occurred while generating flashcards', error: error.message }, { status: 500 });
  }
}