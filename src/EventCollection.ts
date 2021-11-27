import { ClientEvents, Collection } from 'discord.js';
import EventHandler from './EventHandler';

class EventCollection extends Collection<keyof ClientEvents, EventHandler<any, any>[]> {
    add(event: keyof ClientEvents, handler: EventHandler<any, any>) {
        if (super.has(event)) {
            const item = super.get(event)!;
            item.push(handler);
            super.set(event, item);
        } else {
            super.set(event, [handler]);
        }
    }
}

export default EventCollection;
