import { ObjectDirective } from "@vue/runtime-core";

/**
 * Clear input value by escape key
 */
export const VClear: ObjectDirective<HTMLInputElement> = {
    mounted(el, { value }) {
        const separator = value || "";
        el.addEventListener("keydown", (ev: KeyboardEvent) => {
            if (ev.code === "Escape") {
                let start = 0;
                let end = el.value.length;
                if (separator) {
                    for (let i = (el.selectionStart || 1) - 1; i > 0; i--) {
                        if (el.value.substr(i, 1) === separator) {
                            start = i;
                            break;
                        }
                    }
                    for (
                        let i = el.selectionStart || 0;
                        i < el.value.length;
                        i++
                    ) {
                        if (el.value.substr(i, 1) === separator) {
                            end = i;
                            break;
                        }
                    }
                }
                el.setRangeText("", start, end);
                ev.preventDefault();
                ev.stopImmediatePropagation();
            }
        });
    }
};