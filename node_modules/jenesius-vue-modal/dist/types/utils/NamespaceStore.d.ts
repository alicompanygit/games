import Modal from "./Modal";
export default class NamespaceStore {
    static readonly DEFAULT_NAMESPACE: INamespaceKey;
    static instance: NamespaceStore;
    constructor();
    state: Map<INamespaceKey, INamespaceState>;
    /**
     * @description Метод возвращает состояние для переданного namespace. Если для переданного namespace состояния не
     * существует, оно будет создано со значениями по умолчанию.
     *
     * @param {String} namespace - Имя namespace, если значение не передано, оно устанавливается как "default"
     * */
    getByName(namespace?: INamespaceKey): INamespaceState;
    /**
     * @description Is Dev method. Using for cleaning all namespace without run quards.
     * */
    forceClean(): void;
}
export interface INamespaceState {
    queue: Modal[];
    initialized: boolean;
}
export declare type INamespaceKey = number | string;
