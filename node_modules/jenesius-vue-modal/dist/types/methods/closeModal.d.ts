import { IModalCloseOptions } from "../utils/types";
/**
 * @description Try to close all modals windows. Throw error if some modal has onClose hook with returned false value.
 * */
export default function closeModal(options?: Partial<IModalCloseOptions>): Promise<void>;
