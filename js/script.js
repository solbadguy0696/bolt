function navToggle() {
  /* togglebtnはid#nav-toggle */
  var toggleBtn= document.getElementById('nav-toggle');
  var navView= document.getElementById('nav-list');
  /* クラス名の取得 */
  var toggleBtnClass= toggleBtn.getAttribute('class');

  /* togglebtn(nav-toggle)がもしもこのクラス名であったら */
  if(toggleBtnClass== 'fa fa-reorder header-bar__nav__contact--close btn-close') {
    /* クラス名を外す */
    toggleBtn.classList.remove('btn-close');
    navView.classList.remove('list-close');

    /* クラス名を付与する */
    toggleBtn.classList.add('btn-open');
    navView.classList.add('list-open');

  /* もしもそうではなかったら */
  }else {
    /* クラス名を外す */
    toggleBtn.classList.remove('btn-open');
    navView.classList.remove('list-open');

    /* クラス名を付与する */
    toggleBtn.classList.add('btn-close');
    navView.classList.add('list-close');
  }
}

document.getElementById('nav-toggle').onclick = navToggle;