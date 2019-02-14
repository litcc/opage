import secret from './secret.js';
import jQuery from "jquery";
/*
* 恢复当前网页数据
* */
let backup_set = function(v){
  let d=null;
  try{
    d = JSON.parse(secret.Decrypt(v));
    if(d.length===0) return false;
  }catch (e) {
    return false;
  }
  window.localStorage.clear();
  setLocalData(d);
  return true;
};

/*
 * 备份当前网页数据
 * */
let backup_get=function (){
  let d = getLocalData();
  return secret.Encrypt(JSON.stringify(d));
};

/*
 * 下载数据
 * 将生成的备份文件通过浏览器下载
 * */
let funDownload = function (content, filename) {
  var eleLink = document.createElement('a');
  eleLink.download = filename;
  eleLink.style.display = 'none';
  // 字符内容转变成blob地址
  var blob = new Blob([content]);
  eleLink.href = URL.createObjectURL(blob);
  // 触发点击
  document.body.appendChild(eleLink);
  eleLink.click();
  // 然后移除
  document.body.removeChild(eleLink);
};


/*
* 将文件通过浏览器进行上传
* */
var getFileContent = function (fileInput, callback) {
  if (fileInput.files && fileInput.files.length > 0 && fileInput.files[0].size > 0) {
    //下面这一句相当于JQuery的：var file =jQuery("#upload").prop('files')[0];
    var file = fileInput.files[0];
    if (window.FileReader) {
      var reader = new FileReader();
      reader.onloadend = function (evt) {if (evt.target.readyState === FileReader.DONE) callback(evt.target.result);};
      // 包含中文内容用gbk编码
      reader.readAsText(file, 'gbk');
    }
  }
};


/*
* 初始化数据
* 第一次访问网页，本地没有数据时执行
* */
var initData=function (url) {
  //console.log("By litcc | https://github.com/litcc/opage   2019/02/13");
  if(url===null){url = "./data.json";}
  let a1 = getLocalData();
  if( a1 ===null ||a1 ===undefined || a1 ==="undefined" || a1.length < 3){/*这里的3表示对象组的长度*/
    window.localStorage.clear();
    let result = jQuery.ajax({
      url: url,
      type: "get",
      dataType: "json",
      async: false
    });
    if (result.status === 200 && result.responseJSON!==undefined) {
      //console.log("读取成功");
      this.setLocalData(result.responseJSON);
    }else {
      //console.error("系统错误，无法访问到默认数据文件！请检查");
      alert("系统错误，无法访问到默认数据文件！请检查");
    }

  }
};


/*
* 设置数据到localStorage
* */
var setLocalData = function (value) {
  window.localStorage.setItem("opageData",JSON.stringify(value));
};

/*
* 从localStorage获取数据
* */
var getLocalData = function () {
  let a1 = window.localStorage.getItem("opageData");
  if (a1 === null) return null;
  let a2;
  try{
    a2 =JSON.parse(a1);
  }catch (e) {
    //console.error("读取出错");
    return null;
  }
  return a2;
};

export default {
  setLocalData,
  getLocalData,
  initData,
  backup_get,
  backup_set,
  funDownload,
  getFileContent,
}
