import OpenAI from "openai";

//Depreciated method
/*const configuration = new Configuration({
    organization: "org-x7BoJYLERKQPF8sG5VUOxMyr",
    //Dylan's personal key DO NOT misuse
    apiKey: "",
})
*/

const openai = new OpenAI();
export async function askChatGPT(question) {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: question },
      ],
    });
  
    return completion.choices[0].text;
}