javascript: (function () {
  /* Jira Software RapidView (バックログ, アクティブなスプリント) のPATH*/
  const selectedIssueRgx = /selectedIssue=(.+-[0-9]+)/;
  /* 課題表示画面のPATH */
  const browseIssueRgx = /browse\/(.+-[0-9]+)/;
  /**  課題一覧表示画面のPATH  */
  const issueRgx = /issues\/(.+-[0-9]+)/;

  const ta = document.createElement('textarea');
  let url = location.href;
  if (Array.isArray(url.match(selectedIssueRgx)) && url.match(selectedIssueRgx).length) {
    const issueIdArray = url.match(selectedIssueRgx);
    ta.value = issueIdArray[1];
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.parentElement.removeChild(ta);
    alert(`ISSUE番号をコピーしたよ!! ${issueIdArray[1]}`);

    return;
  } else if (Array.isArray(url.match(browseIssueRgx)) && url.match(browseIssueRgx).length) {
    const issueIdArray = url.match(browseIssueRgx);
    ta.value = issueIdArray[1];
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.parentElement.removeChild(ta);
    alert(`ISSUE番号をコピーしたよ!! gc -b ${issueIdArray[1]}`);
    return;
  } else if (Array.isArray(url.match(issueRgx)) && url.match(issueRgx).length) {
    const issueIdArray = url.match(issueRgx);
    ta.value = issueIdArray[1];
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.parentElement.removeChild(ta);
    alert(`ISSUE番号をコピーしたよ!! ${issueIdArray[1]}`);
    return;
  } else {
    console.log('nothing has matched');
  }
})();
