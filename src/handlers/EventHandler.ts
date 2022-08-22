import { Client } from "discord.js";
import { loadEvents } from "../loaders/EventLoader";
import { EventOptions } from "../utils/types/EventOptions";
export function handleEvents(Client: Client) {
  const events: any[] = loadEvents("/events");

  events.map((eventPath: string) => {
    const eventFile = require(`../${eventPath}`);
    const event: EventOptions = eventFile[Object.keys(eventFile)[0]];
    Client.on(event.event, (data) => {
      event.eventFunction(data);
    });
  });
}
