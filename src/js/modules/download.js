export default class Download {
    constructor(triggers,) {
        this.btns = document.querySelectorAll(triggers);
        this.path = 'assets/img/mainbg.jpg';
    }

    downloadItem(path) {
        const element = document.createElement('a');

        element.classList.add('download-link');
        element.setAttribute('href', path);
        element.setAttribute('download', 'nice_picture');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    init() {
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.downloadItem(this.path);
            });
        });
    }
}