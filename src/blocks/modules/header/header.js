(() => {
    const mobileMenuWrapper = document.querySelector('.header__menu');
    const burgerBlock = mobileMenuWrapper.querySelector('.burger');
    const mobileMenuBlock = mobileMenuWrapper.querySelector('.header__menu-items');
    
    if(burgerBlock && mobileMenuBlock) {    
        burgerBlock.addEventListener('click', function () {
            burgerBlock.classList.toggle('burger-active');
            $(mobileMenuBlock).slideToggle();
        });
    }

})();