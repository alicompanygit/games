import { ModalOptions } from "../utils/Modal";
import { WrapComponent } from "../utils/types";
/**
 * @description Method push modalComponent with provided options and then wait until current component will trigger event
 * Modal.EVENT_PROMPT. After triggering will close the modal window and return provided data to event.
 * @warning In new version I will change declaration of current method. Type declaration will be added for returned value.
 */
export default function promptModal<P extends WrapComponent>(component: P | string, props?: any, options?: Partial<ModalOptions>): Promise<unknown>;
