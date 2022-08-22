import { EventOptions } from "../types/EventOptions";

export class Event {
  id: string;
  name: string;
  description: string;
  event: string;
  eventFunction: Function;

  constructor(options: EventOptions) {
    this.id = options.id;
    this.name = options.name;
    this.description = options.description;
    this.event = options.event;
    this.eventFunction = options.eventFunction;
  }
}
