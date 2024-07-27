import { IEventClose } from "../utils/dto";
/**
 * @description Closing modal window by id. Only this method allows you to change the properties of the event-close.
 * */
export default function closeById(id: number, options?: Partial<IEventClose>): Promise<void>;
