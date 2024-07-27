/**
 * last change: 25.11.2021
 * */
import { ModalID } from "./Modal";
import { INamespaceKey } from "./NamespaceStore";
export default class ModalError extends Error {
    readonly isModalError: boolean;
    details: any;
    constructor(message: string, details?: any);
    static Undefined(id: number): ModalError;
    static UndefinedGuardName(name: string): ModalError;
    static NextReject(id: number): ModalError;
    static GuardDeclarationType(func: Function): ModalError;
    static ConfigurationType(config: object): ModalError;
    static ConfigurationUndefinedParam(param: string, availableParams: Array<string>): ModalError;
    static QueueNoEmpty(): ModalError;
    static EmptyModalQueue(): ModalError;
    static NotInitialized(namespace: INamespaceKey): ModalError;
    static ModalComponentNotProvided(): ModalError;
    static DuplicatedRouterIntegration(): ModalError;
    static ModalRouterIntegrationNotInitialized(): ModalError;
    static ModalEventNameMustBeString(eventName: string): ModalError;
    static ModalNotFoundByID(id: ModalID): ModalError;
    static ModalNotExistsInStore(modalName: string): ModalError;
}
