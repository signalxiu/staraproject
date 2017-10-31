

function land() {
    var name = document.getElementById("name").value;
    var pwd = document.getElementById("pwd").value;
    console.log(name);
    console.log(pwd);
    alert(name);
    alert(pwd);
}


/**
 * 通过JSON的方式请求
 * @param {[type]} params [description]
 * @return {[type]}  [description]
 */
ajaxJSON(params){
    params.type = (params.type || 'GET').toUpperCase();
    params.data = params.data || {};
    var formatedParams = this.formateParams(params.data, params.cache);
    var xhr;
    //创建XMLHttpRequest对象
    if (window.XMLHttpRequest) {
        //非IE6
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    //异步状态发生改变，接收响应数据
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            if (!!params.success) {
                if (typeof xhr.responseText == 'string') {
                    params.success(JSON.parse(xhr.responseText));
                } else {
                    params.success(xhr.responseText);
                }
            }
        } else {
            params.error && params.error(status);
        }
    }
    if (params.type == 'GET') {
        //连接服务器
        xhr.open('GET', (!!formatedParams ? params.url + '?' + formatedParams : params.url), true);
        //发送请求
        xhr.send();
    } else {
        //连接服务器
        xhr.open('POST', params.url, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        //发送请求
        xhr.send(formatedParams);
    }
}
/**
 * 格式化数据
 * @param {Obj}  data 需要格式化的数据
 * @param {Boolean} isCache 是否加入随机参数
 * @return {String}   返回的字符串
 */
formateParams: function(data, isCache) {
    var arr = [];
    for (var name in data) {
        arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
    }
    if (isCache) {
        arr.push('v=' + (new Date()).getTime());
    }
    return arr.join('&');
}






























//
//
//
// var options = $(self).find(".input-option"); //取得 class 为 input-option 的所有对象
// $.each(options, function(k,v){ //遍历取到的对象们
//     var id = $(v).find("input").eq(0).val(); //读取他第一个文本框的值
//     var name = $(v).find("input").eq(1).val(); //读取他第二个文本框的值
//     selectData.push({"id":id, "name":name}); //缓存起来
// });
//
//
var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象;
request.onreadystatechange = function () { // 状态发生变化时，函数被回调;
    if (request.readyState === 4) { // 成功完成
        // 判断响应结果:
        if (request.status === 200) {
            // 成功，通过responseText拿到响应的文本:
            return success(request.responseText);
        } else {
            // 失败，根据响应码判断失败原因:
            return fail(request.status);
        }
    } else {
        // HTTP请求还在继续...
    }
}

// 发送请求:
request.open("POST","/skill-ajax/a/login",true);
request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
request.send();
alert('请求已发送，请等待响应...');

// readyState值说明
// 0,初始化,XHR对象已经创建,还未执行open
// 1,载入,已经调用open方法,但是还没发送请求
// 2,载入完成,请求已经发送完成
// 3,交互,可以接收到部分数据
//
//
//
//
// // status值说明
// // 200:成功
// // 404:没有发现文件、查询或URl
// // 500:服务器产生内部错误