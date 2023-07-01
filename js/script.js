function menuCtr() {
    var menuLi = document.getElementsByClassName("menu-li");
    if (menuLi[0].style.display == 'none' || menuLi[0].style.display == '') {
        for (let index = 0; index < menuLi.length; index++) {
            menuLi[index].style.display = 'block'
        }
    } else {
        for (let index = 0; index < menuLi.length; index++) {
            menuLi[index].style.display = 'none'
        }
    }

}
