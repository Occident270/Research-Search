chrome.contextMenus.create({
  "title": "「%s」のアンケートを検索する",
  "type": "normal",
  "contexts": ["selection"],
  "onclick": function(info){
    //選択中の文字列を取得する。
    var research = info.selectionText;
    var url ='https://borders.post-survey.com/admin/research/index.php?research_number='+research;
    //新しいタブを作成
    chrome.tabs.create({
      //Surveyに飛ばす
      url:url
    });
  }
});
