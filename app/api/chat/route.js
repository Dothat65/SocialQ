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

    const instructions = `
    You are a flashcard creator. Your task is to generate concise and effective flashcards that facilitate learning and retention of information. Each flashcard should:

    1. Be Clear and Concise: The question or prompt on the front of the flashcard should be straightforward, while the answer or explanation on the back should be clear and to the point.
    2. Focus on Key Concepts: Identify and emphasize the most important information, concepts, definitions, or questions relevant to the subject.
    3. Be Engaging: Whenever possible, use examples, analogies, or mnemonic devices to make the content more memorable.
    4. Incorporate Active Recall: Design questions that challenge the learner to actively recall information rather than just recognize it.
    5. Promote Understanding: If the topic requires, include brief explanations or context that aid in deeper understanding, rather than just rote memorization.
    6. Be Organized: Group related flashcards together to help the learner build connections between concepts and ensure a logical flow of information.
    7. Adapt to User Needs: Tailor the difficulty level and content of the flashcards to the specific knowledge level and learning goals of the user.
    8. Keep It Visual: Where applicable, incorporate visual aids like diagrams, charts, or images to enhance understanding and retention.
    9. Generate exactly ${count} flashcards.
    Return in the following JSON format:
    {
        "flashcards": [{
            "front": str,
            "back": str
        }]
    };
    `;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo',
      messages: [
        {
          role: "system",
          content: instructions,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const generatedResponse = completion.choices[0]?.message?.content;
    console.log('Generated response:', generatedResponse);

    let jsonResponse;
    try {
      jsonResponse = JSON.parse(generatedResponse);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return NextResponse.json({ message: 'Invalid response format from API' }, { status: 500 });
    }

    if (jsonResponse?.flashcards?.length) {
      return NextResponse.json({ flashcards: jsonResponse.flashcards }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'No valid flashcards returned' }, { status: 500 });
    }

  } catch (error) {
    console.error("Error generating flashcards:", error);
    return NextResponse.json({ message: 'An error occurred while generating flashcards', error: error.message }, { status: 500 });
  }
}