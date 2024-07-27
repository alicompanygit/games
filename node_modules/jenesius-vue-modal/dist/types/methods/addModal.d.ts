import Modal, { ModalOptions } from "../utils/Modal";
import { Component } from "vue";
/**
 * Sync function for adding modal window.
 * Two check:
 * - Application was initialized (ModalContainer was mounted).
 * - Component is required.
 * */
export default function _addModal(component: string | Component, params: any, modalOptions: Partial<ModalOptions>): Modal;
