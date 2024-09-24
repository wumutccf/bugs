var rule = {
author: '小可乐/2408/第二版',
title: '海洋听书',
类型: '听书',
host: 'http://m.ychy.org',
hostJs: '',
headers: {'User-Agent': 'MOBILE_UA'},
编码: 'gb2312',
timeout: 5000,

homeUrl: '/best.html',
url: '/fyclass-fypage.html[/fyclass.html]',
filter_url: '',
detailUrl: '/book/fyid.html',
searchUrl: '/search.asp?page=fypage&searchword=**&searchtype=-1',
searchable: 1, 
quickSearch: 1, 
filterable: 1, 

class_name: '最新&网络玄幻&恐怖悬疑&评书下载&儿童读物&相声戏曲&传统武侠&都市言情&历史军事&人物传记&广播剧&百家讲坛&有声文学&探险盗墓&职场商战',
class_url: 'new&list/52&list/17&list/3&list/4&list/7&list/12&list/13&list/15&list/16&list/18&list/32&list/41&list/45&list/81',
filter_def: {},

sniffer: 1,
isVideo: `js: if (/\\.(m4a|mp3)/.test(input)) {input = true} else {input = false}`,
play_parse: true,
lazy: '',

limit: 9,
double: false,
推荐: '*',
一级: 'a:has(.tit);.tit&&Text;img&&src;p&&Text;a&&href',
二级: {
title: 'h2&&Text;meta[name^=key]&&content',
img: '.bookimg&&img&&src',
desc: '.info>div:eq(-2)&&Text;;.info>div:eq(-1)&&Text;.info&&span:eq(0)&&Text;.info&&span:eq(1)&&Text',
content: '.book_intro&&Text',
tabs: '.sub_tit',
tab_text: 'body&&Text',
lists: '.compress:eq(#id)&&a',
list_text: 'body&&Text',
list_url: 'a&&href'
},
搜索: '.bookbox;h4&&Text;img&&orgsrc;.update&&Text;.bookbox&&bookid',

filter: {}
}