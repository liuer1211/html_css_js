// d点击提交
$(".submit").on("click",function () {
  loginSubmit();
})

// 提交方法
function loginSubmit() {
  var name= $(".name").val();
  var age= $(".age").val();
  var like= $(".like").val();
  console.log(name,age,like)
  $.ajax({
    type: "post",
    url: "http://127.0.0.1:8000/jquery-server",
    data: {
      name: name,
      age: age,
    },
    //响应体结果
    // dataType: 'json',
    contentType:'application/json;charset=UTF-8',
    error : function(request) {
      console.log(request)
      window.location.href='../../pages/home/home.html';
    },
    success : function(data) {
      alert(data.code);
    }
  });
}

// 立即执行
(
  // 拼接下拉框
  function() {
    var list = [
      { key: '3', val: '吃香蕉'}
    ]
    //为Select追加一个Option(下拉项)
    for (var i=0; i<list.length; i++) {
      // $(".like option").remove();
      // $(".like").empty();
      // var v = `<option value='${list[i].key}'>${list[i].val}</option>`
      $(".like").append("<option value='" + list[i].key + "'>" + list[i].val + "</option>");
      // $(".like").html(v);
    }
  }
)();

//  //获取元素对象
//  const result = document.getElementById("result");
//  //绑定事件
//  result.addEventListener("mouseover", function(){
//      //1. 创建对象
//      const xhr = new XMLHttpRequest();
//      //2. 初始化 设置类型与 URL
//      xhr.open('POST', 'http://127.0.0.1:8000/server');
//      //设置请求头
//      xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
//      xhr.setRequestHeader('name','张三');
//      //3. 发送
//      xhr.send('a=100&b=200&c=300');
//      // xhr.send('a:100&b:200&c:300');
//      // xhr.send('1233211234567');
//      //4. 事件绑定
//      xhr.onreadystatechange = function(){
//          //判断
//          if(xhr.readyState === 4){
//              if(xhr.status >= 200 && xhr.status < 300){
//                  //处理服务端返回的结果
//                  result.innerHTML = xhr.response;
//              }
//          }
//      }
//  });

//  //获取button元素
//  const btn = document.getElementsByTagName('button')[0];
//  const result1 = document.getElementById("result");
//  //绑定事件
//  btn.onclick = function(){
//      //1. 创建对象
//      const xhr = new XMLHttpRequest();
//      //2. 初始化 设置请求方法和 url
//      xhr.open('GET', 'http://127.0.0.1:8000/server?a=100&b=200&c=300');
//      //3. 发送
//      xhr.send();
//      //4. 事件绑定 处理服务端返回的结果
//      // on  when 当....时候
//      // readystate 是 xhr 对象中的属性, 表示状态 0 1 2 3 4
//      // change  改变
//      xhr.onreadystatechange = function(){
//          //判断 (服务端返回了所有的结果)
//          if(xhr.readyState === 4){
//              //判断响应状态码 200  404  403 401 500
//              // 2xx 成功
//              if(xhr.status >= 200 && xhr.status < 300){
//                  //处理结果  行 头 空行 体
//                  //响应 
//                  // console.log(xhr.status);//状态码
//                  // console.log(xhr.statusText);//状态字符串
//                  // console.log(xhr.getAllResponseHeaders());//所有响应头
//                  // console.log(xhr.response);//响应体
//                  //设置 result 的文本
//                  result1.innerHTML = xhr.response;
//              }else{
//              }
//          }
//      }
//  }

// const btn = document.getElementsByTagName('button')[0];
// const result2 = document.querySelector('#result');
// btn.addEventListener('click', function(){
//   const xhr = new XMLHttpRequest();
//   //超时设置 2s 设置
//   xhr.timeout = 2000;
//   //超时回调
//   xhr.ontimeout = function(){
//       alert("网络异常, 请稍后重试!!");
//   }
//   //网络异常回调
//   xhr.onerror = function(){
//       alert("你的网络似乎出了一些问题!");
//   }

//   xhr.open("GET",'http://127.0.0.1:8000/delay');
//   xhr.send();
//   xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4){
//       if(xhr.status >= 200 && xhr.status< 300){
//         result2.innerHTML = xhr.response;
//       }
//     }
//   }
// })