/* 这个文件须使用原生js的写法，使其不依赖与其他js插件*/

// 立即执行
(
  function() {
    // 加入头部html
    // var nodeHead= "";
    var nodeHead = `
      <div class="head-main">
        <div class="head-main-left"></div>
        <div class="head-main-right">
          <span class="head-main-right-login">登录</span>
          <span class="head-main-right-outLogin">退出</span>
        </div>
        <div class="head-main-clear"></div>
      </div>
    `
    // $('#homeMainTop').html(nodeHead);
    document.getElementById('homeMainTop').innerHTML = nodeHead

    // 加入左侧菜单html
    var nodeMenu = `
      <div id="menuMain" class="menu-main">
        <div class="menu-main-model">
          <div class="menu-main-model-parent" onclick="isShow(1, 'menuUl1')">用户管理</div>
          <div id="menuUl1" style="display: none;" class="menu-main-model-child">
            <a href="../../pages/home/home.html">账号信息</a>
          </div>
        </div>
        <div class="menu-main-model">
          <div class="menu-main-model-parent" onclick="isShow(2, 'menuUl2')">新闻</div>
          <div id="menuUl2" style="display: none;" class="menu-main-model-child">
            <a href="../../pages/news/news.html">热点</a>
          </div>
        </div>
      </div>
    `
    document.getElementById('homeLeftMenu').innerHTML = nodeMenu
  }
)();

// 控制菜单显隐
function isShow(code1,code2) {
  switch(code1) {
    case 1:
      isShowFun(code2);  
      break;
    case 2:
      isShowFun(code2);
      break;
    default:
      return;
  } 
}

// 控制菜单显隐-判断
function isShowFun(code2) {
  // 元素节点必须加上display属性
  document.getElementById(code2).style.display = 
    document.getElementById(code2).style.display === 'block' ? 'none' : 'block';
}