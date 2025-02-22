var rule = {
    模板:'自动',
    title:'爱优影视[自动]',
    host:'https://iuys.cc',
    url: '/vodshow/fyclassfyfilter.html',
    filter_url: '-{{fl.地区}}-{{fl.排序}}-{{fl.剧情}}-{{fl.语言}}-{{fl.字母}}---fypage---{{fl.年份}}',
    filter: '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',

   lazy:  `js:
  let html = request(input);
  let hconf = html.match(/r player_.*?=(.*?)</)[1];
  let json = JSON5.parse(hconf);
  let url = json.url;
  if (json.encrypt == '1') {
    url = unescape(url);
  } else if (json.encrypt == '2') {
    url = unescape(base64Decode(url));
  }
  if (/\\.(m3u8|mp4|m4a|mp3)/.test(url)) {
    input = {
      parse: 0,
      jx: 0,
      url: url,
    };
  }
  if (url.includes('NBY-')) {
    let jx = 'https://json.uuys.cc/?url='
            input={jx:0,url:jx+url,parse:1,
                header: JSON.stringify({
                    'referer': input
                })}
        } else {
    input = url && url.startsWith('http') && tellIsJx(url) ? {parse:0,jx:1,url:url}:input;
  }`,
}
