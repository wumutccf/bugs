var rule = {
    类型: '影视',
    编码: 'gb18030',
    title: '天启影视',
    host: 'https://www.tqys.tv',
    url: 'fyfilter/indexfypage.html[fyfilter/]',
    searchUrl: '/search.asp?page=1&searchword=**&searchtype=-1',
    searchable: 2,
    quickSearch: 0,
    filterable: 1,
    filter_url: '{{fl.tag}}/{{fl.area}}',
    filter: 'H4sIAAAAAAAAA42Sz0rDQBCH7z6FzDkg/We1ryI9BMylag9KhVICSql2PdgKGhUDXtSNWtQeijZt8jTZTfMWbkPozFIq7m322/3Nzse21tbVghxUdlqwZzWhAuahZYIBdfPAUlV8PRLBUNXH5n7DSo/V1ba48KLAjdn5nKh6t5kD28iY4wrGKcsvWNwdynaHsgIyfiXGE8qKmMm4fq9RWjB52pcnDr23iax7F/mMsjL2899EcEPZFvYLP3DylG2DXbWrqS4D8n/5mvEz9dxlZQ9B5POMzCOPaugsebmXP58aRGmi9yXHoQbRmrx9lu5Ag6gteXxVbTVIvA14HF5qkIgbfYsnR4NlaqCw0oD6GnL6vjx+x0vaXpa2QaOKq2VOpjPm/zPK/gWc7dctzAIAAA==',
    filter_def: {
        1: {tag: 'dy'},
        2: {tag: 'dsj'},
        3: {tag: 'donm'},
        4: {tag: 'zony'},
    },
    headers: {
        'User-Agent': 'PC_UA',
    },
    timeout: 5000,
    class_name: '电影&电视剧&动漫&综艺',
    class_url: '1&2&3&4',
    cate_exclude: '',
    play_parse: true,
    lazy: $js.toString(() => {
        input = {parse: 1, url: input, js: ''};
    }),
    double: true,

    一级: '.watch&&li;img&&alt;img&&src;.hottags&&Text;a&&href',
    二级: {
        title: '.main-wrap&&h2&&Text;p:eq(2)&&Text',
        img: '.main-wrap&&img&&src',
        desc: ';.main-wrap&&p:eq(5)&&Text;.main-wrap&&p:eq(2)&&Text;.main-wrap&&p&&Text;',
        content: '.main-wrap&&p:eq(6)&&Text',
        tabs: '.bluehd',
        lists: '.bluebd:eq(#id)&&li',
        tab_text: 'span--font&&Text',
        list_text: 'body&&Text',
        list_url: 'a&&href',
        list_url_prefix: '',
    },
    搜索: '.watch li;*;*;*;*',
}