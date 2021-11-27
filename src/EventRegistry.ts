import EventCollection from './EventCollection';
import { Client } from 'discord.js';

const registerEvents = <C extends Client>(client: C, eventMap: EventCollection) => {
    eventMap.forEach((value, key) => {
        switch (key) {
            case 'ready':
                client.on(key, (...args) => {
                    for (const handler of value) {
                        handler(client, ...args);
                    }
                });
                break;
            default:
                client.on(key, (...args) => {
                    for (const handler of value) {
                        handler(client, ...args);
                    }
                });
                break;
        }
    });
};

export default registerEvents;
