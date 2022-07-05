import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const lang = navigator.appName === 'Netscape' ? navigator.language : navigator.userLanguage;
let config = {};
switch (lang) {
    case 'zh-CN':
    case 'zh-SG':
        config = {
            name: '搜索酱',
            import: '导入配置',
            export: '导出配置',
            general: '常规设置',
            searchEngines: '搜索引擎',
            exportConfig: '导出设置',
            about: '关于',
            errorNoType: '请输入类别名',
            editType: '编辑类别',
            typeName: '类别名',
            typeIcon: '类别图标',
            iconTips: '图标可使用 FontAwsome、图片链接或者 base64 代码',
            typeMatch: '匹配 URL，设为 0 隐藏该类',
            typeEnableSelTxt: '对选择文字生效',
            typeEnableSelImg: '对图片生效',
            typeEnableSelAudio: '对音频生效',
            typeEnableSelVideo: '对视频生效',
            typeEnableSelLink: '对链接生效',
            typeEnableSelPage: '对页面生效',
            typeOpenInNewTab: '启用后该组链接将默认在新窗口打开',
            delete: '删除',
            cancel: '取消',
            edit: '编辑',
            editSite: '编辑站点',
            siteName: '站点名',
            siteUrl: '站点 URL',
            siteIcon: '站点图标',
            siteKeywords: '搜索词正则',
            siteMatch: '匹配 URL，设为 0 隐藏该站',
            siteCharset: '站点编码',
            toolbarPosition: '工具栏位置',
            portrait: '纵向',
            horizontal: '横向',
            openInNewTab: '默认在新标签页打开链接',
            openInNewTabTips: '启用后链接将全部在新标签页打开，否则需在类别中单独设置',
            enableInPage: '启用划词搜索',
            enableInPageTips: '启用后选择文字并长按鼠标可调出工具栏',
            bindFunctionKey: '绑定工具栏唤出功能键',
            ctrlKey: 'Ctrl键',
            altKey: 'Alt键',
            shiftKey: 'Shift键',
            metaKey: 'meta键',
            configContent: '设置源码',
            copy: '复制',
            save: '保存',
            autoClose: '自动合上类别',
            autoDelay: '隐藏延时',
            needName: '需要名称',
            needUrl: '需要 URL',
            overOpen: '鼠标划过类别自动展开',
            overOpenTips: '选中此项则当鼠标划过类别图标，对应类别将自动展开',
            selectToShow: '划选立即调用',
            selectToShowTips: '启用后无需右键长按，划选立即调出工具栏',
            autoCloseTips: '启用之后一旦鼠标离开搜索条，已打开的类别抽屉将会自动合上',
            enableShortcut: '启用站点快捷键',
            enableShortcutTips: '启用后，将使得所有为站点分配的快捷键生效',
            siteShotcut: '搜索快捷键',
            initShow: '打开页面立即拉开工具栏，鼠标划过后再贴边隐藏',
            presetCss: '预置样式',
            presetCssTips: '选择后载入预置样式',
            customCss: '自定义样式',
            replaceCss: '确定要替换当前编辑的样式吗？',
            enableInInput: '监听输入框',
            enableInInputTips: '启用后，在输入框内不忽略快捷键',
            fontAwesomeCss: 'FontAwesome CDN地址',
            nobatch: '不参与右键点击类别图标时的批量打开',
            hideNotMatch: '如果网址不匹配则隐藏该项',
            typeMatchTips: '仅在匹配站点显示该类别',
            siteUrlTips: '%s 查询词; %t 指向链接; %n 指向文字; %u 页面地址; %h 页面域名',
            customSize: '缩放工具栏',
            typeOpenTime: '类别展开耗时',
            longPressTime: '长按时间',
            typeShotcut: '批量打开快捷键',
            enableLeftMouse: '启用鼠标左键长按',
            enableLeftMouseTips: '启用后，鼠标左键长按也能触发。否则仅对鼠标右键生效',
            cacheSwitch: '缓存图标',
            sameSiteName: '在【#t#】下存在同名站点',
            sameShortcut: '【#t#】已经绑定了相同快捷键',
            noIcons: '纯文本模式',
            noIconsTips: '隐藏图标，仅显示纯文本',
            noAni: '禁止动画效果',
            noAniTips: '禁止所有动画效果',
            quickAddRule: '快速添加搜索引擎',
            quickAddRuleTips: '按住 Ctrl + Alt 点击任意搜索框快速添加搜索引擎',
            searchMycroft: '💎在 mycroftproject 上搜索其他人编辑好的搜索引擎并一键导入，例如：“谷歌学术”',
            showSiteLists: '显示下拉列表',
            showSiteListsTips: '启用后将在类别图标旁启用下拉列表',
            multiline: '多行搜索，以换行符分隔，按行搜索',
            multilineLabel: '开关',
            multilineGap: '搜索间隔',
            disable: '禁用',
            enable: '启用',
            ask: '询问',
            cacheSwitchTips: '浏览网页时在后台缓存图标为 base64 图片至配置，以免 icon 请求拉低性能，注意开启后会弹出跨域请求',
            aboutContent: '【%s】➡️ 搜索关键词，或是划选的文字\n【%e】➡️ 当前页面的编码\n【%c】➡️ 客户端类型 pc, mobile\n【%u】➡️ 当前网址 \n【%U】➡️ 当前网址的URI编码结果\n【%h】➡️ 当前网站域名，适用于站内搜索等场景，比如写成 %s site:%h\n【%t】➡️ 指向对象的网址，比如图片、音频、视频、链接的对应网址\n【%T】➡️ 指向对象的URI编码结果\n【%b】➡️ 指向对象的网址去除 http 头 \n【%B】➡️ 去头网址的 URI 编码结果\n【%n】➡️ 指向对象的文字内容，比如链接标题、图片标签或者网页标题\n【%i】 ➡️ 当前指向图片的 base64 编码\n【%p{params}】➡️ post 消息体，例如 %p{x=1&y=2&q=%s}\n【%P{params}】➡️ post 但不跳转\n【#p{params}】➡️ 页面之内的 post，可在页面之内使用“css选择器”填写参数提交查询，适用于不开放GET/POST接口（Ajax-render）的网站。例如 #p{#input=%s&div.param=2}\n【%input{tips}】➡️ 输入占位，例如%input{请输入您的三围}\n【["siteName1","siteName2"]】➡️ 通过你已经创建的站点名批量打开，例如 ["雅虎搜索","谷歌搜索"]\n\n平时工作中搜索引擎跳转功能用得很频繁，但尝试了相关的扩展，发现大多夹有私货。\n\n而这只是一个简单功能，所以不如自己写一个啦。\n\n结果写配置页面耗费的精力数倍于脚本本身……🤦‍\n\n这个搜索引擎跳转支持自己拖拽定义位置，同时也支持站内搜索，多语言编码设置（例如shift-jis），划词搜索，以及配置导入导出。'
        }
        break;
    case 'zh-TW':
    case 'zh-HK':
        config = {
            name: '搜索醬',
            import: '導入配置',
            export: '導出配置',
            general: '常規設置',
            searchEngines: '搜尋引擎',
            exportConfig: '導出設置',
            about: '關於',
            errorNoType: '請輸入類別名',
            editType: '編輯類別',
            typeName: '類別名',
            typeIcon: '類別圖標',
            iconTips: '圖標可使用 FontAwsome、圖片連結或者 base64 代碼',
            typeMatch: '匹配 URL，設爲 0 隱藏該類',
            typeEnableSelTxt: '對選擇文字生效',
            typeEnableSelImg: '對圖片生效',
            typeEnableSelAudio: '對音頻生效',
            typeEnableSelVideo: '對視頻生效',
            typeEnableSelLink: '對鏈接生效',
            typeEnableSelPage: '對頁面生效',
            typeOpenInNewTab: '啟用後該組連結將默認在新窗口打開',
            delete: '刪除',
            cancel: '取消',
            edit: '編輯',
            editSite: '編輯站點',
            siteName: '站點名',
            siteUrl: '站點 URL',
            siteIcon: '站點圖標',
            siteKeywords: '搜索詞正則',
            siteMatch: '匹配 URL，設爲 0 隱藏該站',
            siteCharset: '站點編碼',
            toolbarPosition: '工具欄位置',
            portrait: '縱向',
            horizontal: '橫向',
            openInNewTab: '默認在新標籤頁打開連結',
            openInNewTabTips: '啟用後連結將全部在新標籤頁打開，否則需在類別中單獨設置',
            enableInPage: '啟用劃詞搜索',
            enableInPageTips: '啟用後選擇文字並長按滑鼠可調出工具欄',
            bindFunctionKey: '綁定工具欄喚出功能鍵',
            ctrlKey: 'Ctrl鍵',
            altKey: 'Alt鍵',
            shiftKey: 'Shift鍵',
            metaKey: 'meta鍵',
            configContent: '設置源碼',
            copy: '複製',
            save: '保存',
            autoClose: '自動合上類別',
            autoDelay: '隱藏延時',
            needName: '需要名稱',
            needUrl: '需要 URL',
            overOpen: '滑鼠划過類別自動展開',
            overOpenTips: '選中此項則當滑鼠划過類別圖標，對應類別將自動展開',
            selectToShow: '劃選立即調用',
            selectToShowTips: '啟用後無需右鍵長按，劃選立即調出工具欄',
            autoCloseTips: '啟用之後一旦滑鼠離開搜索條，已打開的類別抽屜將會自動合上',
            enableShortcut: '啟用站點快捷鍵',
            enableShortcutTips: '啟用後，將使得所有為站點分配的快捷鍵生效',
            siteShotcut: '搜索快捷鍵',
            initShow: '打開頁面立即拉開工具欄，鼠標划過后再貼邊隱藏',
            presetCss: '預置樣式',
            presetCssTips: '選擇后載入預置樣式',
            customCss: '自定義樣式',
            replaceCss: '確定要替換當前編輯的樣式嗎？',
            enableInInput: '監聽輸入框',
            enableInInputTips: '啓用後，在輸入框内不忽略快捷鍵',
            fontAwesomeCss: 'FontAwesome CDN地址',
            nobatch: '不參與右鍵點擊類別圖標時的批量打開',
            hideNotMatch: '如果網址不匹配則隱藏該項',
            typeMatchTips: '僅在匹配站點顯示該類別',
            siteUrlTips: '%s 查詢詞; %t 指向連結; %n 指向文字; %u 頁面地址; %h 頁面域名',
            customSize: '縮放工具欄',
            typeOpenTime: '類別展開耗時',
            longPressTime: '長按時間',
            typeShotcut: '批量打開快捷鍵',
            enableLeftMouse: '啟用滑鼠左鍵長按',
            enableLeftMouseTips: '啟用後，滑鼠左鍵長按也能觸發。否則僅對滑鼠右鍵生效',
            cacheSwitch: '緩存圖標',
            sameSiteName: '在【#t#】下存在同名站點',
            sameShortcut: '【#t#】已經綁定了相同快捷鍵',
            noIcons: '純文本模式',
            noIconsTips: '隱藏圖標，僅顯示純文本',
            noAni: '禁止動畫效果',
            noAniTips: '禁止所有動畫效果',
            quickAddRule: '快速添加搜尋引擎',
            quickAddRuleTips: '按住 Ctrl + Alt 點擊任意搜索框快速添加搜尋引擎',
            searchMycroft: '💎在 mycroftproject 上搜索其他人編輯好的搜尋引擎並一鍵導入',
            showSiteLists: '顯示下拉列表',
            showSiteListsTips: '啓用後將在類別圖標旁啓用下拉列表',
            multiline: '多行搜索，以換行符分隔，按行搜索',
            multilineLabel: '開關',
            multilineGap: '搜索間隔',
            disable: '禁用',
            enable: '啟用',
            ask: '詢問',
            cacheSwitchTips: '瀏覽網頁時在後台緩存圖標為base64圖片，注意開啟後會彈出跨域請求',
            aboutContent: '平時工作中搜尋引擎跳轉功能用得很頻繁，但嘗試了相關的擴展，發現大多夾有私貨。\n\n而這只是一個簡單功能，所以不如自己寫一個啦。\n\n結果寫配置頁面耗費的精力數倍於腳本本身……🤦‍\n\n這個搜尋引擎跳轉支持自己拖拽定義位置，同時也支持站內搜索，多語言編碼設置（例如shift-jis），劃詞搜索，以及配置導入導出。'
        }
        break;
    default:
        config = {
            name: 'SearchJumper',
            import: 'Import config',
            export: 'Export JSON',
            general: 'General',
            searchEngines: 'Search Engines',
            exportConfig: 'Export Config',
            about: 'About',
            errorNoType: 'Please enter the category name',
            editType: 'Edit category',
            typeName: 'Category name',
            typeIcon: 'Category icon',
            iconTips: 'The icon can use FontAwsome, image link or base64 code',
            typeMatch: 'Match url, hide by set to 0',
            typeEnableSelTxt: 'Effect on text',
            typeEnableSelImg: 'Effect on image',
            typeEnableSelAudio: 'Effect on audio',
            typeEnableSelVideo: 'Effect on video',
            typeEnableSelLink: 'Effect on link',
            typeEnableSelPage: 'Effect on page',
            typeOpenInNewTab: 'After enabling, this group of links will be opened in a new window by default',
            delete: 'Delete',
            cancel: 'Cancel',
            edit: 'Edit',
            editSite: 'Edit site',
            siteName: 'Site name',
            siteUrl: 'Site URL',
            siteIcon: 'Site icon',
            siteKeywords: 'RegExp of search keywords',
            siteMatch: 'RegExp of match url, hide by set to 0',
            siteCharset: 'Charset',
            toolbarPosition: 'Toolbar position',
            portrait: 'Portrait',
            horizontal: 'Horizontal',
            openInNewTab: 'Open links in new tabs by default',
            openInNewTabTips: 'When enabled, the link will be opened in a new tab by default, otherwise the link will be opened in the current page',
            enableInPage: 'Enable select to search',
            enableInPageTips: 'After enabling, select some text and long press the mouse to bring up the toolbar',
            bindFunctionKey: 'Bind function key to call out toolbar',
            ctrlKey: 'Ctrl key',
            altKey: 'Alt key',
            shiftKey: 'Shift key',
            metaKey: 'Meta key',
            configContent: 'Config source code',
            copy: 'Copy',
            save: 'Save',
            autoClose: 'Auto close type',
            autoDelay: 'Hide delay',
            needName: 'Require name',
            needUrl: 'Require url',
            overOpen: 'Mouse over to expand category automatically ',
            overOpenTips: 'If you select this item, when the mouse moves over the category icon, the corresponding category will be automatically expanded',
            selectToShow: 'Select to call',
            selectToShowTips: 'After enabling, no need to right-click and long-press, select to bring up the toolbar immediately',
            autoCloseTips: 'When enabled, opened category drawer will be closed automatically once the mouse leaves the search bar',
            enableShortcut: 'Enable site shortcuts',
            enableShortcutTips: 'After enabling, all shortcut keys assigned to single site will take effect',
            siteShotcut: 'Search shortcut key',
            initShow: 'Pull out to show when page initializes',
            presetCss: 'Preset Css',
            presetCssTips: 'Select to load preset css',
            customCss: 'Custom Css',
            replaceCss: 'Do you confirm to replace current css?',
            enableInInput: 'Enable on input',
            enableInInputTips: 'Enable shortcut on input or textarea',
            fontAwesomeCss: 'FontAwesome CDN URL',
            nobatch: 'Do not participate in batch open when right-clicking category icon',
            hideNotMatch: 'Hide icon if don\'t macth',
            typeMatchTips: 'Show this category only when url matches',
            siteUrlTips: '%s keywords; %t target URL; %n target content; %u site URL; %h hostname',
            customSize: 'Zoom toolbar',
            typeOpenTime: 'Category expansion time',
            longPressTime: 'Long press time',
            typeShotcut: 'Shortcut for batch open',
            enableLeftMouse: 'Also effect with left mouse',
            enableLeftMouseTips: 'Also effect after long press the left mouse button, otherwise only effect with right mouse button',
            cacheSwitch: 'Cache icons',
            sameSiteName: 'Site under 【#t#】 has the same name',
            sameShortcut: '【#t#】 has already bind the same shortcut',
            noIcons: 'Plain text mode',
            noIconsTips: 'Show only plain text without any icon',
            noAni: 'Disable animation effects',
            noAniTips: 'Disable all animation effects',
            quickAddRule: 'Quick Add Site',
            quickAddRuleTips: 'Click any search input box with Ctrl + Alt to add site quickly',
            searchMycroft: '💎Search site config on mycroftproject for import by one click',
            showSiteLists: 'Show drop-down list',
            showSiteListsTips: 'After enabled, the drop-down list will be enabled next to the category icon',
            multiline: 'Multi-line search, separated by line feed, search by single line',
            multilineLabel: 'Switch',
            multilineGap: 'Search Gap',
            disable: 'Disable',
            enable: 'Enable',
            ask: 'Ask',
            cacheSwitchTips: 'The icons will cached with base64 images in the background when browsing, but some cross-domain requests will pop up',
            aboutContent: "I use the search engine jump function very frequently in my work, but I found that most of them contain trojans after tried many related extensions. \n\nThis is just a simple function, so why not write one by myself? \n\nThe result is that writing the configuration page takes several times more energy than the script itself... 🤦‍\n\nThis search engine jump supports dragging and dropping with defined location, and also supports in-site search, word-marking search, and configuration import and export."
        }
        break;
}
window.i18n = (name, param) => {
    return config[name]?config[name].replace("#t#",param):name;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
