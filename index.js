import OpenAI from "openai";

//Depreciated method
/*const configuration = new Configuration({
    organization: "org-x7BoJYLERKQPF8sG5VUOxMyr",
    //Dylan's personal key DO NOT misuse
    apiKey: "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",
})
*/

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    message: [
        {role: "user", content: "Test Message"},
    ]   
})

console.log(completion.choices[0].message);