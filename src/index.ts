import { BskyAgent } from '@atproto/api';
import 'dotenv/config';

// Create a Bluesky Agent
const agent = new BskyAgent({
    service: 'https://bsky.social',
  })


async function main() {
    await agent.login({  identifier: process.env.BLUESKY_USERNAME!,
    password: process.env.BLUESKY_PASSWORD!})
    await agent.post({
        text: "テストぬ゛ん゛",
        via: "MandarinOrangeSky",
        langs: ["ja"]
    });
    console.log("Just posted!")
}

main();