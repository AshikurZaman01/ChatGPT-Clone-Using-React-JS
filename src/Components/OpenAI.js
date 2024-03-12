

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: "sk - j34oy786BjFZ0je3vPWYT3BlbkFJW3jk1pF8l2tmtkgloL5d"
})
const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAi(msg) {
    const response = await openai.createCompletion({
        module: "text-davinci-003",
        prompt: msg,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    return response.data.choices[0].text;
}