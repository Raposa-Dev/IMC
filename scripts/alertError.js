export const AlertError = {
    element: document.querySelector('body .alertError'),
    open() {
        AlertError.element.classList.remove('hiden');
    },
    close() {
        AlertError.element.classList.add('hiden');
    }
}
