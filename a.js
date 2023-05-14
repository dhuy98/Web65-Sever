import { config } from "dotenv";
config();
import { Configuration, OpenAIApi } from "openai";

(async () => {
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createImage({
      prompt: "A cute baby sea otter",
      n: 2,
      size: "1024x1024",
    });

    console.log("RESPONSE", response);
  } catch (error) {
    console.log(error.message);
  }
})();
