# TypicalBot Commands

Minimalistic event library for [Discord.js](https://github.com/discordjs/discord.js).

## Handling Events

```ts
import { EventHandler } from '@typicalbot/events';

// Add events to a collection
const events = new Collection<keyof ClientEvents, EventHandler<any>[]>();

// Register events in client logic
events.forEach((value, key) => {
    if (key === 'ready') {
        client.once(key, (...args) => {
            for (const handler of value) {
                handler(client, ...args);
            }
        });
    } else {
        client.on(key, (...args) => {
            for (const handler of value) {
                handler(client, ...args);
            }
        });
    }
})
```