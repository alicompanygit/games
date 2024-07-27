import { INamespaceKey } from "../utils/NamespaceStore";
/**
 * @return {Modal} Last opened modal in active status. Return undefined if there is not opened modal.
 * */
export default function getCurrentModal(namespace?: INamespaceKey): import("..").Modal | undefined;
