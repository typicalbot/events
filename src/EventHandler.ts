import { Client, ClientEvents } from 'discord.js';

type EventHandler<C extends Client, E extends keyof ClientEvents> = (
    client: C,
    ...args: ClientEvents[E]
) => Promise<unknown> | unknown;

export default EventHandler;
