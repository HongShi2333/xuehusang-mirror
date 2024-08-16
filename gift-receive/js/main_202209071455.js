$(function () {

    $('.btn-link[aria-expanded="true"]').closest('.accordion-item').addClass('active');
    $('.collapse').on('show.bs.collapse', function () {
        $(this).closest('.accordion-item').addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).closest('.accordion-item').removeClass('active');
    });

});
$(".send-btn").click(function () {
    var _val = $("#inp").val();
    $.ajax({
        url: 'https://api.xuehusang.cn/pwd',
        type: 'post',
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify({
            "key": _val
        }),
        success: function (res) {
            if (res.url) {
                window.location.href = res.url;
            } else {
                if (res.code == 0) {
                    var toastElList = [].slice.call(document.querySelectorAll('.toast2'))
                    var toastList = toastElList.map(function (toastEl) {
                        return new bootstrap.Toast(toastEl)
                    });
                    toastList.forEach(toast => toast.show());
                    document.getElementById('inp').value = '';
                } else {
                    var toastElList = [].slice.call(document.querySelectorAll('.toast1'))
                    var toastList = toastElList.map(function (toastEl) {
                        return new bootstrap.Toast(toastEl)
                    });
                    toastList.forEach(toast => toast.show());
                    document.getElementById('inp').value = '';
                }

            }
        },
        error: function (res) {
            let code = res.status
            if (code === 500) {
                var toastElList = [].slice.call(document.querySelectorAll('.toast1'))
                var toastList = toastElList.map(function (toastEl) {
                    return new bootstrap.Toast(toastEl)
                });
                toastList.forEach(toast => toast.show());
                document.getElementById('inp').value = '';
            } else if (code === 429) {
                var toastElList = [].slice.call(document.querySelectorAll('.toast4'))
                var toastList = toastElList.map(function (toastEl) {
                    return new bootstrap.Toast(toastEl)
                });
                toastList.forEach(toast => toast.show());
                document.getElementById('inp').value = '';
            } else if (code === 0) {
                var toastElList = [].slice.call(document.querySelectorAll('.toast3'))
                var toastList = toastElList.map(function (toastEl) {
                    return new bootstrap.Toast(toastEl)
                });
                toastList.forEach(toast => toast.show());
                document.getElementById('inp').value = '';
            }
        }
    });

})

// tofix: mix click and enter function
$(function(){
    $('#inp').bind('keypress',function(event){
      if(event.keyCode == "13")
      {
        var _val = $("#inp").val();
    $.ajax({
        url: 'https://api.xuehusang.cn/pwd',
        type: 'post',
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify({
            "key": _val
        }),
        success: function (res) {
            if (res.url) {
                window.location.href = res.url;
            } else {
                if (res.code == 0) {
                    var toastElList = [].slice.call(document.querySelectorAll('.toast2'))
                    var toastList = toastElList.map(function (toastEl) {
                        return new bootstrap.Toast(toastEl)
                    });
                    toastList.forEach(toast => toast.show());
                    document.getElementById('inp').value = '';
                } else {
                    var toastElList = [].slice.call(document.querySelectorAll('.toast1'))
                    var toastList = toastElList.map(function (toastEl) {
                        return new bootstrap.Toast(toastEl)
                    });
                    toastList.forEach(toast => toast.show());
                    document.getElementById('inp').value = '';
                }

            }
        },
        error: function (res) {
            let code = res.status
            if (code === 500) {
                var toastElList = [].slice.call(document.querySelectorAll('.toast1'))
                var toastList = toastElList.map(function (toastEl) {
                    return new bootstrap.Toast(toastEl)
                });
                toastList.forEach(toast => toast.show());
                document.getElementById('inp').value = '';
            } else if (code === 429) {
                var toastElList = [].slice.call(document.querySelectorAll('.toast4'))
                var toastList = toastElList.map(function (toastEl) {
                    return new bootstrap.Toast(toastEl)
                });
                toastList.forEach(toast => toast.show());
                document.getElementById('inp').value = '';
            } else if (code === 0) {
                var toastElList = [].slice.call(document.querySelectorAll('.toast3'))
                var toastList = toastElList.map(function (toastEl) {
                    return new bootstrap.Toast(toastEl)
                });
                toastList.forEach(toast => toast.show());
                document.getElementById('inp').value = '';
            }
        }
    });
      }
    });
});

//hide password
$('#inp').hidePassword(true);

console.log('Developed by 冷焰.');
console.log('Special thanks to 八角 [ https://github.com/K-bai ] for providing flask development ideas.');
console.log('Any issues and bugs are welcome to submit [ https://message.bilibili.com/#/whisper/mid198165375 ].');
console.log('雪狐冰屋寻求有能渗透测试工程师参与项目维护，如果您有意愿帮助请联系qq1162472396');
