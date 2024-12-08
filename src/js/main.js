(function () {
    const stickyNav = {
        navElement: document.getElementById('main'),
        bodyElement: document.body,
        init() {
                this.topNavElement = this.navElement.offsetTop;
                document.documentElement.classList.add('js-enabled');
                this.addEventListeners();
        },
        addEventListeners() {
            window.addEventListener('scroll', (evt) => {
                this.findScrollY(evt);
            })
        },
        findScrollY(evt) {
            if (evt.currentTarget.scrollY >= this.topNavElement) {
                this.bodyElement.classList.add('fixed-nav');
                this.bodyElement.style.paddingTop = `${this.navElement.offsetHeight}px`;
            } else {
                this.bodyElement.classList.remove('fixed-nav');
                this.bodyElement.style.paddingTop = '0';
            }
        }
    }
    stickyNav.init();
})()
