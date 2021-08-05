const got = require('got');

// This is just an example, but could be something you keep track of
// in your application to provide OpenAI as prompt text.
const chatLog = 'Human: Hello, who are you?\nAI: I am doing great. How can I help you today?\n';

// The new question asked by the user.
const question = 'Could you tell me what your favorite German thrash metal album is?';

const s = process.env.OPENAI_SECRET_KEY;
console.log(s);

(async () => {
  // const url = 'https://api.openai.com/v1/engines/ada/completions';
  const prompt = `${chatLog}Human: ${question}`;
  console.log(prompt);
  const params = {
    'prompt': prompt,
    'max_tokens': 150,
    'temperature': 0.9,
    'frequency_penalty': 0,
    'presence_penalty': 0.6,
    'stop': '\nHuman'
  };
  const headers = {
    'Authorization': `Bearer ${process.env.OPENAI_SECRET_KEY}`,
  };
  console.log(headers);

  // try {
  //   const response = await got.post(url, { json: params, headers: headers }).json();
  //   console.log(response);
  //   output = `${prompt}${response.choices[0].text}`;
  //   console.log(output);
  // } catch (err) {
  //   console.log(err);
  // }
})();
