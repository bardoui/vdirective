import { ObjectDirective } from "@vue/runtime-core";

/**
 * Auto focus element on load
 */
export const VAutoFocus: ObjectDirective<HTMLElement> = {
    mounted(el) {
        el.focus();
    },
};
