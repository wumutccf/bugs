var rule = {
    title: '可达影视',
    host: 'https://www.kedays.org',
    // url:'/shaixuan/fyclass--------fypage---.html',
    url: '/shaixuan/fyclass-fyfilter.html',
    searchUrl: '/soso/**----------fypage---.html',
    searchable: 2,
    quickSearch: 0,
    filterable: 1,
    filter: 'H4sIAAAAAAAAA+2a2U7bUBCG38XXXByHspQ7yr7va8VFVCJIC0FiqUoREhWLoBQoCJIGQkslAqEiEFq6EBTyMrET3qIGz5kZ7vwAc5f/G/vYv3MMnxBzxnDQH5oNhkaMipdzxpvArFFhWLGU9SltFBkh/3iA57f+sZnA44GhB7ycuF9MPGAnGPNFQI9P76MrQCHo2f1J1P53CTMIeN5Wyr650+e5Qc/yd5vWQQZmEHDNb2c0g6BndiRux85hBgFnv1J0HgSchVPWxyPr8LseY8arnp3bh/FCPJtL7+trc4StNlJW+kS3coOeFdav6A4g0N3t8bvb4zPnVuz1rPNo9bKYceV4Nr+VzK9F9eKY9RG57FI+E7HD+sugjFdZ/mNdLOpLuGF+6GEKm2Tt1F5cZptEZy+bJL96BQdToHqJXCaG3R4DzsIx5zp65gZ8ZKtfcuk1/cjcgNc73bZubvX13IBr4o1TwDWTJ7m7I72mG/C8lZ376Jk+zw143tcfzh3o89yAsw+f7YWwnrkB17y7yO/+tjJXelnMXr+WwmWykFigrwWzp3f3IOMcrxd3A9utNIOAj/fnMc0g4JsSyVgbERpTZm8wG7uBvcE0g8DeETZzAz3Iv6yJGzzv7Jvr3G2G7WydvTxCn/I9A/b4kfFi4sWc+4j7ODeJm5wr4opx8zly5yPj5cTLOS8jXsZ5KfFSzkuIl3BOfU3e16S+Ju9rUl+T9zWpr8n7mtTX5H0V9VW8r6K+ivdV1Ffxvor6Kt5XUV/F+yrqq3hfRX0V76uor+J9FfVVvK+ivs7HJxszGbEvN9jG1NnLxqwEUInkBZAXSKqAVCGpBlKNpAZIDZJaILVI6oDUIakHUo+kAUgDkkYgjUiagDQhaQbSjKQFSAuSViCtSNqAtCFpB9KOpANIB5JOIJ1IuoB0IekG0o2kB0gPkl4gvUj6gPQh6QfSj2QAyACSQSCDTzaFvbljpbdoU2B+uins2EIhu20fXDsuA+tMB50T8IdpbME63rd3kvaulrDR4PTUk3nc+YWwBMOpVxOTgYcbGSoyxhyFfDfzekYUUhRSFFIUUhRSFFIUUhRSFFIU0qNCvp8IjcwGRSBFIEUgRSBFIEUgRSBFIEUgRSA9CuSwI5Dj/pAYpBikGKQYpBikGKQYpBikGKQYpEeDnBr1TwQmRSBFIEUgRSBFIEUgRSBFIEUgRSC9/glyxh+Sf4IUgRSBFIEUgRSBFIE0RCBFIEUgvQnk/H9dz0+3jD0AAA==',
    filter_url: '{{fl.地区}}-{{fl.排序 or "time"}}-{{fl.剧情}}-{{fl.语言}}-{{fl.字母}}---fypage---{{fl.年份}}',
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    timeout: 5000,
    class_parse: '.nav-m-box&&li;a&&Text;a&&href;/.*\/(.*?)\.html',
    cate_exclude: '最近|排行',
    play_parse: true,
    lazy: $js.toString(() => {
        input = {
            parse: 1,
            url: input,
            js: 'document.querySelector("#playleft iframe").contentWindow.document.querySelector("#player").click()',
        }
    }),
    double: true,
    推荐: '.layout-box;.vlist&&li;*;*;*;*',
    一级: '.vod-list&&ul&&li;a&&title;.lazyload&&data-original;.item-status&&Text;a&&href',
    二级: {
        title: 'h3&&Text;p.row&&span&&a&&Text',
        img: 'img.lazyload&&data-original',
        desc: 'p.row&&span:eq(-1)&&Text;p.row&&span:eq(2)&&Text;p.row&&span:eq(1)&&Text;p.row&&span:eq(4)&&Text;p.row&&span:eq(3)&&Text;',
        content: 'div.text-row-2&&Text',
        tabs: '.playlist-tab&&ul&&li',
        lists: '.ewave-playlist-content:eq(#id)&&li',
        tab_text: 'body&&Text',
        list_text: 'body&&Text',
        list_url: 'a&&href'
    },
    搜索: '*',
}