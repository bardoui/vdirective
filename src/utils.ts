export function getInput(el: any): HTMLInputElement {
    return el instanceof HTMLInputElement
        ? el
        : el.querySelector("input") || el;
}
