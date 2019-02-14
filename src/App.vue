<template>
  <div id="app mdui-container">

    <!-- Header  -->
    <div class="header mdui-color-blue mdui-col-xs-12 mdui-toolbar">
      <div>{{pageTitle}}</div>
      <div class="mdui-toolbar-spacer"></div>

      <a href="javascript:;" class="mdui-btn mdui-btn-icon" mdui-menu="{target: '#homemenu'}"><i
        class="mdui-icon material-icons">menu</i></a>
      <ul class="mdui-menu" id="homemenu">
        <li class="mdui-menu-item" v-for="(menuti,index) in menulist" v-bind:key="'menuti'+index" v-on:click="MenuOption(menuti,index)">
          <a href="javascript:;" class="mdui-ripple">{{menuti.title}}</a>
        </li>
      </ul>
    </div>

    <!-- Search bar -->
    <div class="searchbar mdui-toolbar mdui-color-blue mdui-col-xs-12" v-bind:class="{searchbar_active: isSearch}">


      <!-- Search engine icon & list -->
      <div class="search_switch" v-bind:class="{search_switch_active: isSearch}" mdui-menu="{target: '#search_engine'}">
        <img :src="getSeachData().img" width="20px" height="36px"/>
      </div>
      <ul class="mdui-menu" id="search_engine">
        <li class="mdui-menu-item" v-for="(search,index) in opageData[0].listD" v-bind:key="'search'+index" v-on:click="switchSearch(index)">
          <a href="javascript:;" class="mdui-ripple"> {{ search.title }}</a>
        </li>
      </ul>

      <!-- 搜索框 -->
      <form :action="getSeachData().url" v-bind:class="{searchbar_form_active: isSearch}" class="searchbar_form">
        <input v-bind:class="{searchbar_input_active: isSearch}" class="mdui-textfield-input searchbar_input"
               @focus="toSearch"
               @blur="closeSearch"
               :name="getSeachData().parameter"
               type="text"
               autocomplete="off"
               placeholder="Search"
               style="border-bottom:none;">
      </form>

      <!-- Search button -->
      <div class="search-button" v-on:click="SearchSubmit">
        <img src="./assets/img/search/search.svg" width="36px" height="36px" alt="Search"/>
      </div>

    </div>

    <!-- Overlay -->
    <div class="overlay" v-bind:class="{overlay_active: isSearch}"></div>

    <!-- CardWrap -->
    <div class="card-wrap">

      <!-- MDUI card -->
      <div
        class="mdui-card mdui-col-xs-12 mdui-col-md-10 mdui-col-offset-md-1 mdui-col-lg-6 mdui-col-offset-lg-1 mdui-shadow-0 sites-card ">
        <!-- Card title -->
        <div class="mdui-card-header card-header">
          网站
          <div v-if="!hasAddPanel" v-on:click="editSites" class="edit">{{editOrComplete}}</div>
        </div>

        <div class="mdui-divider"></div>

        <!-- Sites list -->
        <ul class="mdui-list">
          <li v-for="(site, index) in opageData[1]" :key="'site'+index" class="site">
            <button
              class="remove"
              v-bind:class="{remove_active: canRemove}"
              v-on:click="removeSite(index)"
            >
              <i class="mdui-icon material-icons">close</i>
            </button>
            <a v-bind:href="site.url" target="_blank">
              <div>
                <img v-bind:src="site.icon" width="55px" height="55px" v-bind:class="{remove_active: canRemove}" />
              </div>
              <div class="site-title">{{ site.title}}</div>
            </a>
          </li>
          <li class="site" v-if="!canRemove" v-on:click="showAddpanel">
            <i class="mdui-icon material-icons add-site-icon" :class="{iconHidden: hasAddPanel}">add</i>
            <i class="mdui-icon material-icons add-site-icon" :class="{iconHidden: !hasAddPanel}">close</i>
            <div class="site-title">添加</div>
          </li>
        </ul>

        <!-- New site panel -->
        <div
          class="new_site mdui-color-blue-grey-50"
          v-bind:class="{new_site_active: hasAddPanel}"
        >
          <div class="new-site-info mdui-textfield mdui-textfield-floating-label">
            <label class="mdui-textfield-label">网站地址</label>
            <input class="mdui-textfield-input" type="url" v-model="newSiteurl"/>
          </div>
          <div class="new-site-info mdui-textfield mdui-textfield-floating-label">
            <label class="mdui-textfield-label">网站名称</label>
            <input class="mdui-textfield-input" type="text" v-model="newSitetitle"/>
          </div>
          <div class="new-site-info mdui-textfield mdui-textfield-floating-label">
            <label class="mdui-textfield-label">网站图标地址</label>
            <input class="mdui-textfield-input" type="text" v-model="newSiteicon"/>
          </div>
          <button class="addtodo_button mdui-btn mdui-btn-raised mdui-color-theme-accent mdui-ripple"
                  v-on:click="addSite">添加
          </button>
        </div>

      </div>

      <!-- MDUI card -->
      <div class="mdui-card mdui-col-xs-12 mdui-col-md-5 mdui-col-offset-md-1 mdui-col-lg-3 mdui-shadow-0 todos-card">
        <!-- Card title -->
        <div class="mdui-card-header card-header">
          待办事项
        </div>

        <div class="mdui-divider"></div>

        <ul class="mdui-list">

          <li class="mdui-collapse-item" v-for="(todo, index) in opageData[2]" :key="'todo'+index">
            <div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
              <label class="mdui-checkbox">
                <input type="checkbox" v-bind:checked="todo.isFinished" v-on:click="toggleFinished(todo)"/>
                <i class="mdui-checkbox-icon"></i>
              </label>
              <div class="mdui-list-item-content todo-item" v-if="todo.isFinished === true">
                <del>{{ todo.label }}</del>
              </div>
              <div class="mdui-list-item-content todo-item" v-else>{{ todo.label }}</div>
              <i class="mdui-collapse-item-arrow mdui-icon material-icons" v-on:click="removeTodo(todo, index)"
                 style="font-size: 19px;">close</i>
            </div>
            <ul class="mdui-collapse-item-body mdui-list mdui-list-dense">
              <li class="mdui-list-item mdui-ripple todo-sub-list" v-on:click="removeTodo(todo, index)">删除</li>
            </ul>
          </li>

        </ul>

        <div>
          <div class="mdui-textfield todo_input_wrap">
            <input v-model="newTodo" v-on:keyup.enter="addTodo" class="mdui-textfield-input" type="text" placeholder="Add Todo"/>
          </div>
          <button class="mdui-btn mdui-btn-icon mdui-ripple add_todo_button" v-on:click="addTodo">
            <i class="mdui-icon material-icons mdui-list-item-icon">send</i>
          </button>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer mdui-card mdui-col-xs-12">
      <div v-if="oneSentenceSwitch" class="onesentence mdui-card-content mdui-center" style="">{{ oneSentence }}</div>
      <ul class="social-buttons">
        <li><a :href="githublink" target="_blank"><img src="./assets/img/footer/github.svg" alt="" width="24px" height="24px;"></a></li>
        <li><a :href="linkurl" target="_blank"><img src="./assets/img/footer/about.svg" alt="" width="24px" height="24px;"></a></li>
      </ul>

      <p v-if="copyrightSwitch" class="copyright">
        © 2017 <a :href="linkurl" target="_blank">{{copyrightby}}</a>
      </p>
    </div>

  </div>
</template>

<script>
  import jQuery from 'jquery'
  import Store from './store';
  import mdui from 'mdui';

  var Dataurl = "./data.json";

  Store.initData(Dataurl);

  export default {
    name: 'App',

    data() {
      return {
        /*全局功能设置区*/
        oneSentenceSwitch: true,/*一言设置*/


        /*全局块变量*/
        opageData:Store.getLocalData(),

        /*Header块内变量*/
        isSearch: false,
        pageTitle: "Opage",
        menulist: [{title: "导出数据"}, {title: "导入数据"}, {title: "恢复默认数据"}],

        /*CardWrap块内变量*/
        editOrComplete: '编辑',
        canRemove: false,
        hasAddPanel: false,
        newSiteurl: '',/*新添加网站的链接*/
        newSitetitle: '',/*新添加网站的标题*/
        newSiteicon: '',/*新添加网站的图标*/
        newTodo: '',

        /*Footer块内变量*/
        copyrightSwitch: false,/*版权设置*/
        copyrightby: "litcc",/*版权署名*/
        githublink:"https://github.com/litcc/opage",
        linkurl: "https://www.litcc.com"/*关于链接*/
      }
    },
    watch: {
      opageData:{
        handler: function (data) {
          Store.setLocalData(data);
        },
        deep: true
      }
    },
    methods: {
      /*Header内方法*/
      getSeachData: function () {
        return this.opageData[0].listD[this.opageData[0].useItem];
      },
      switchSearch: function (i) {
        this.opageData[0].useItem = i;
      },
      SearchSubmit:function(){
        jQuery(".searchbar_form").submit();
      },
      toSearch: function () {
        if (this.isSearch === false) this.isSearch = true;
      },
      closeSearch: function () {
        if (this.isSearch === true) this.isSearch = false;
      },
      MenuOption: function (t, index) {
        switch (index) {
          case 0: {
            let a = Store.backup_get();
            mdui.dialog({
              title: t.title,
              content: "<div class=\"mdui-textfield \"><textarea id='codebackup' class=\"mdui-textfield-input\" rows=\"13\" readonly>" + a + "</textarea></div>",
              buttons: [
                {text: "下载", close: false, onClick: function () {Store.funDownload(a, "Opage_backup");}},
                {text: "复制", close: false, onClick: function () {
                  let a = document.getElementById("codebackup");
                  a.focus();
                  a.select();
                  try {
                    document.execCommand('copy');
                    alert("复制成功");
                  } catch (err) {
                    alert("请使用 Ctrl+C 进行复制");
                  }
                }},
                {text: "关闭"}
              ]
            });
            break;
          }
          case 1: {
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
            let inst = new mdui.Dialog("#daoru-dialog", {});
            let tab = new mdui.Tab('#daoru-tab');

            mdui.JQ('#daoru-dialog').on('open.mdui.dialog', function () {
              tab.handleUpdate();
            });
            mdui.JQ('#daoru-dialog').on('closed.mdui.dialog', function () {
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
                  mdui.alert("恢复成功!,2秒后自动刷新页面");
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
                    mdui.alert("恢复成功!,2秒后自动刷新页面");
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

            break;
          }
          case 2: {
            mdui.confirm('再次确认是否恢复默认数据',
              function () {
                window.localStorage.clear();
                Store.initData(Dataurl);
                mdui.alert("恢复成功!,2秒后自动刷新页面");
                setTimeout(function () {
                  window.location.reload();
                }, 2000);
              });
            break;
          }
          case 3:{


            break;
          }
        }
      },

      /*CardWrap内方法*/
      addSite: function () {
        this.opageData[1].push({
          url: this.newSiteurl,
          title: this.newSitetitle,
          icon: (this.newSiteicon ? this.newSiteicon : require('./assets/img/icons/default.svg'))
        });
        this.newSiteurl = '';
        this.newSitetitle = '';
        this.newSiteicon = '';
        this.showAddpanel();
      },
      removeSite: function (index) {
        this.opageData[1].splice(index, 1);
      },
      editSites: function () {
        this.canRemove = !this.canRemove;
        if (this.canRemove === true) {
          this.editOrComplete = '完成';
        } else {
          this.editOrComplete = '编辑';
        }
      },
      addTodo: function () {
        this.opageData[2].push({
          label: this.newTodo,
          isFinished: false
        });
        this.newTodo = ''
      },
      removeTodo: function (todo, index) {
        this.opageData[2].splice(index, 1);
        let _this = this;
        mdui.snackbar({
          message: 'Item deleted',
          buttonText: 'undo',
          onButtonClick: function () {
            _this.opageData[2].push({
              label: todo.label,
              isFinished: todo.isFinished
            })
          }
        });
      },
      showAddpanel: function () {
        this.hasAddPanel = !this.hasAddPanel;
      },
      toggleFinished: function (todo) {
        todo.isFinished = !todo.isFinished
      }


    }, computed: {
      //设置一言
      oneSentence: function () {
        var restlu = jQuery.ajax({
          url: "https://api.lwl12.com/hitokoto/v1?encode=realjson",
          async: false,
          type: "get",
          dataType: "json"
        });
        //console.log(restlu);
        if (restlu.status === 200) {
          return restlu.responseJSON.text;
        } else {
          return "子曰：「学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知，而不愠，不亦君子乎？」";
        }

      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
