import jQuery from 'jquery'
import mdUi from 'mdui';
import Store from './store';

/**
 * 从浏览器中导出备份
 * @constructor
 */
let Backup = function () {
    let a = Store.backup_get();
    mdUi.dialog({
        title: "导出数据",
        content: "<div class=\"mdui-textfield \"><textarea id='codebackup' class=\"mdui-textfield-input\" rows=\"13\" readonly>" + a + "</textarea></div>",
        buttons: [
            {
                text: "下载", close: false, onClick: function () {
                    Store.funDownload(a, "Opage_backup");
                }
            },
            {
                text: "复制", close: false, onClick: function () {
                    let a = document.getElementById("codebackup");
                    a.focus();
                    a.select();
                    try {
                        document.execCommand('copy');
                        alert("复制成功");
                    } catch (err) {
                        alert("请使用 Ctrl+C 进行复制");
                    }
                }
            },
            {text: "关闭"}
        ]
    });
};


/**
 * 从文本或文件中恢复备份
 * @constructor
 */
let Import = function () {
    let asd = "<div class=\"mdui-dialog\" id=\"daoru-dialog\">\n" +
        "    <div class=\"mdui-tab mdui-tab-centered\" id=\"daoru-tab\">\n" +
        "        <a href=\"#example4-tab2\" class=\"mdui-ripple\">代码导入</a>\n" +
        "        <a href=\"#example4-tab1\" class=\"mdui-ripple\">文件导入</a>\n" +
        "    </div>\n" +
        "    <div id=\"example4-tab2\" class=\"mdui-p-a-2\">\n" +
        "        <div class=\"mdui-textfield mdui-textfield-floating-label\">\n" +
        "            <label class=\"mdui-textfield-label\">Message</label>\n" +
        "            <textarea id=\"dmnr\" rows=\"8\" class=\"mdui-textfield-input\"></textarea>\n" +
        "        </div>\n" +
        "        <button id=\"dmdr\" style=\"float:right;margin-bottom:20px \" class=\"mdui-btn mdui-btn-raised mdui-color-theme-accent mdui-ripple\">导入</button>\n" +
        "    </div>\n" +
        "    <div id=\"example4-tab1\" class=\"mdui-p-a-2\">\n" +
        "        <label class=\"mdui-btn mdui-btn-raised mdui-ripple\" style=\"text-align: center;\">\n" +
        "            <div>未选择文件任何文件</div>\n" +
        "            <input style=\"display: none;\" type=\"file\" id=\"xzfile\">\n" +
        "        </label>\n" +
        "        <button id=\"wjdr\" style=\"float:right;\" class=\"mdui-btn mdui-btn-raised mdui-color-theme-accent mdui-ripple\">导入</button>\n" +
        "    </div>\n" +
        "</div>";
    jQuery(asd).appendTo(jQuery("body"));
    let inst = new mdUi.Dialog("#daoru-dialog", {});
    let tab = new mdUi.Tab('#daoru-tab');

    mdUi.JQ('#daoru-dialog').on('open.mdui.dialog', function () {
        tab.handleUpdate();
    });
    mdUi.JQ('#daoru-dialog').on('closed.mdui.dialog', function () {
        inst.destroy();
        jQuery("#daoru-dialog").remove();
    });

    let inpufile = jQuery('#xzfile');

    //选择文件按钮监听
    inpufile.on('change', function (e) {
        let filename = null; //文件名
        try {
            filename = e.target.files[0].name;
            jQuery(this).prev().html(filename);
        } catch (e) {
            jQuery(this).prev().html("未选择文件任何文件");
        }
    });


    //代码导入
    jQuery("#dmdr").on("click", function () {
        let inputext = jQuery('#dmnr').val();
        if (inputext === "") {
            alert("不能为空");
            return;
        }
        let qr = confirm("是否导入数据?");
        if (qr) {
            let dsf = Store.backup_set(inputext);
            if (dsf) {
                inst.close();
                mdUi.alert("恢复成功!,2秒后自动刷新页面");
                setTimeout(function () {
                    window.location.reload();
                }, 2000);
            } else {
                alert("数据内容不正确，导入失败");
            }
        }
    });

    //文件导入
    jQuery("#wjdr").on("click", function () {
        let inpufile = jQuery('#xzfile').get(0);
        if (inpufile.value === "") {
            alert("请选择文件");
            return;
        }
        let qr = confirm("是否导入数据?");
        if (qr) {
            Store.getFileContent(inpufile, function (result) {
                let dsf = Store.backup_set(result);
                if (dsf) {
                    inst.close();
                    mdUi.alert("恢复成功!,2秒后自动刷新页面");
                    setTimeout(function () {
                        window.location.reload();
                    }, 2000);
                } else {
                    alert("数据内容不正确，导入失败");
                }
            });
        }
    });

    //打开对话框
    inst.open();
};

/**
 * 恢复默认设置
 * @constructor
 */
let Reset = function () {
    mdUi.confirm('再次确认是否恢复默认数据',
        function () {
            window.localStorage.clear();
            Store.initData(null);
            mdUi.alert("恢复成功!,2秒后自动刷新页面");
            setTimeout(function () {
                window.location.reload();
            }, 2000);
        });
};


export default {
    Backup,
    Import,
    Reset
}