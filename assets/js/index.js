/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...

//let's go!

let data = ['吃饭', '睡觉', '打豆豆']
bindHtml()
//已完成数据
let ydata = ['喝酒', '蹦迪']
//正在进行页面渲染
function bindHtml() {
    let str = ''
    for (let i = 0; i < data.length; i++) {
        str += '<li><input type="checkbox" index=' + i + ' /><p onclick="edit(' + i + ')">' + data[i] + '</p><a href="javascript:remove(' + i + ')" class="del">-</a></li>'
    }
    $("#todocount").html(data.length)
    $('ol').html(str)
}

//已经完成页面渲染
function aleadyBind() {
    let str = ''
    let todonum = $("#todocount").text() - 0;
    for (let i = 0; i < ydata.length; i++) {
        str += '<li><input type="checkbox" checked="checked" /><p onclick="edit(' + todonum + i + ')">' + ydata[i] + '</p><a href="javascript:remove(' + todonum + i + ')">-</a></li>'
    }
    $("#donecount").html(ydata.length)
    $('ul').html(str)
}
//enter键添加内容
$('header input').on('focus', function () {
    $('header input').keyup(function (event) {
        e = window.event || event;
        e.preventDefault()
        if (e.keyCode == 13) {
            let text = $('header input').val()
            let reg = /^[ ]+$/
            if ((!text)) { console.log('111'); return }
            //验证空格
            if (reg.test(text)) { return }
            data.push(text)
            bindHtml()
            //清空input内容
            $("#title").val("");
        }
    });
})

//正在进行功能


function change() {

    var checkbox = $("ol li input[type='checkbox']");
    console.log(checkbox)
    checkbox.each(function (i) {

        $(this).click(function () {

            if (this.checked == true) {

                let this_index = $(this).attr('index') - 0
                let addnum = data[this_index]
                data.splice(this_index, 1)
                ydata.push(addnum)

                console.log(data)
                console.log(ydata)
                bindHtml()
                aleadyBind()
            }
        }
   );
 })
}

$('ol').onclick = function (e) {
    
    e = e || window.event
    var target = e.target || e.srcElement

    // 判断点击的是删除按钮
    if (target.className === 'del') {
      
      var index = target.getAttribute('index') - 0
      // 数组里面删除数据
      data = data.filter(function (item) { return item.index !== index })
      bindHtml()
    }
  }
function edit() {

}