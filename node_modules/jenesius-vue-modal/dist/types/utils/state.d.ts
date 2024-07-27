/**
 * last change: 25.11.2021
 *
 * STATE ПРЕДНАЗНАЧЕН ДЛЯ ВНУТРЕННЕГО ХРАНИЛИЩА ДАННЫХ
 * НЕПУТАТЬ С КОНФИГУРАЦИЕЙ, ЕЁ ЗАДАЁТ ПОЛЬЗОВАТЕЛЬ
 *
 * initialized - параметра принимает true, когда приложение было проинициализировано, то есть WidgetModalContainer
 * был добавлен на страницу
 *
 * */
import { Component } from "vue";
import { INamespaceKey } from "./NamespaceStore";
/**
 * @description Метод для получения Namespace.
 * */
export declare function getNamespace(name?: INamespaceKey): import("./NamespaceStore").INamespaceState;
export declare const configuration: ConfigInterface;
export interface ConfigInterface {
    /**
     * @description Disable scrolling in time when modal is open.
     * */
    scrollLock: boolean;
    /**
     * @description Animation name for transition-group.
     * */
    animation: string;
    /**
     * @description Closing on click back area of modal.
     * */
    backgroundClose: boolean;
    /**
     * @description Closing on press ESC key
     * */
    escClose: boolean;
    /**
     * @description Disable throwing the error when the container has not been initialized.
     * */
    skipInitCheck: boolean;
    store: Record<string, Component>;
}
