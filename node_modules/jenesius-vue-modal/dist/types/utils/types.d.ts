import { IEventClose } from "./dto";
import { Component, ComputedRef, ExtractPropTypes, Ref, UnwrapRef } from "vue";
import { INamespaceKey } from "./NamespaceStore";
export declare type GuardFunction = (e: IEventClose) => void | boolean | Promise<boolean>;
export declare type GuardFunctionPromisify = () => Promise<void>;
export interface IModalCloseOptions {
    namespace?: INamespaceKey;
}
export declare type WrapComponent<T = {}> = Component & {
    props?: T;
};
export declare type WrapComponentProps<P extends WrapComponent = WrapComponent> = P["props"] | UnwrapRef<P["props"]> | Ref<any> | ComputedRef<P["props"]> | ExtractPropTypes<P["props"]>;
