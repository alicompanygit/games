import { ModalOptions } from "./Modal";
import { IModalCloseOptions } from "./types";
export declare function DTOModalOptions(options: Partial<ModalOptions>): ModalOptions;
export declare function DTOEventClose(obj?: Partial<IEventClose>): IEventClose;
export declare function DTOModalCloseOptions(options?: Partial<IModalCloseOptions>): Partial<IModalCloseOptions>;
/**
 * @param background - Attempt to close modal by clicking on the background.
 * @param esc - Modal was closed by pressed `Esc`
 */
export interface IEventClose {
    background: boolean;
    esc: boolean;
}
