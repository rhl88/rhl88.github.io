//系统加载
 window.$docsify = {
   formatUpdated: '{YYYY}-{MM}-{DD} {HH}:{mm}:{ss}',
   notFoundPage: '404.md',//开启错误指向
   name: '',
   repo: '',
   maxLevel: 1,//最大级别
   subMaxLevel: 2,//子最大级别
   sidebarDisplayLevel:0,//收起级别
   auto2top: true,//切换页面后是否自动跳转到页面顶部。
   loadSidebar: true,// 加载侧边栏
   loadNavbar: false,//加载导航菜单 true 从_navbar.md文件加载
   coverpage: true, //激活封面功能。如果为true，则会从中加载_coverpage.md。
   //全文搜索
   search: {
     maxAge: 86400000, // 过期时间，单位毫秒，默认一天
     paths: 'auto',
     placeholder: {
       '/tool/': '搜索工具',
       '/node/': '搜索笔记',
       '/': '搜索',
     },
     noData: {
       '/tool/': '没找到工具！',
       '/node/': '没找到笔记！'
     },
     // 搜索标题的最大程级, 1 - 6
     depth: 6,
   },
   //文档中增加选项卡
   tabs: {
     persist: true,//确定在页面刷新/重新访问后是否恢复选项卡选择。
     sync: true,//确定选项卡选择是否将在具有匹配标签的选项卡之间同步。
     theme: 'classic', //主题 classic material false
     tabComments: true, //是否使用注释作为选项卡
     tabHeadings: true
   },
   markdown: {
     renderer: {
       code: function (code, lang) {
         return this.origin.code.apply(this, arguments);
       }
     },
   },
   pagination: {
     previousText: '上一章节',
     nextText: '下一章节',
     crossChapter: true,
     crossChapterText: true,
   },
   //右侧文档目录
   toc: {
    tocMaxLevel: 5,
    target: 'h2,h3,h4'
  },
  //返回顶部
  scrollToTop: {
    auto: true,//是否自动隐藏按钮
    text: 'Top',//按钮文字
    right: 15,//按钮距离窗口右侧距离
    bottom: 15,//按钮距离窗口底部距离
    offset: 500 //页面滚动多少距离后显示按钮，当auto配置为true时才有效果
 }
}
