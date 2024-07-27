import { Component, ComputedRef, Ref } from "vue";
import { GuardFunction } from "./types";
import { INamespaceKey } from "./NamespaceStore";
export interface ModalOptions {
    backgroundClose: boolean;
    isRoute: boolean;
    namespace: Modal['namespace'];
}
export declare type ModalID = number;
export default class Modal {
    static readonly STORE: Map<number, Modal>;
    protected static modalId: number;
    /**
     * @description Unique id of each modal window.
     * */
    id: ModalID;
    events: Record<string, EventCallback[]>;
    /**
     * @description Computed value. True - when the modal was closed.
     * */
    closed: ComputedRef;
    /**
     * @description Ссылка на VueComponent. Используется для получения состояния модального окна. Доступ к data, props,
     * methods and other.
     * */
    instance?: any;
    /**
     * @description The text name of namespace which owns the modal windows.
     * */
    readonly namespace: INamespaceKey;
    /**
     * @description VueComponent that will be mounted like modal.
     * */
    component: Component;
    /**
     * @description Props for VueComponent.
     * */
    props: Ref;
    /**
     * @description Click on the background will close modal windows.
     * */
    backgroundClose: boolean;
    /**
     * @description If modal was opened like Route instance (useModalRouter) the value is true, otherwise false.
     */
    readonly isRoute: boolean;
    /**
     * @description Event using for promptModal.
     */
    static readonly EVENT_PROMPT = "jenesius-vue-modal:____P____R____O____M____P____T";
    /**
     * Создаёт объект управления модальным окном.
     * Для управления идентификатором используется статическое поле modalId.
     * ЕСЛИ В КОМПОНЕНТЕ ЕСТЬ beforeModalClose параметр, то добавляем его в guards
     *
     * @param {Object} component Any VueComponent that will be used like modal window
     * @param {Object} props Object of input params. Used like props.
     * @param {Object} options
     * */
    constructor(component: Component | any, props: any, options: Partial<ModalOptions>);
    /**
     * @description Method for closing the modal window
     * */
    close(): Promise<void>;
    /**
     * @description Hook for handling modal closing
     * */
    set onclose(func: GuardFunction);
    /**
     * @description Hook for handling modal closing
     * */
    set ondestroy(func: GuardFunction);
    /**
     * @description Method for handle default events from VueComponent.
     * */
    on(eventName: string, callback: EventCallback): () => void;
}
export declare function getModalById(id: ModalID): Modal | undefined;
export declare type EventCallback = (v: any) => any;
