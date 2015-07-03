document.body.appendChild(function(){
  sc = document.createElement("script");
  var code = function(){
    var vars = [], max = 0, hash = "", array = "";
    var url = window.location.search;

    //?を取り除くため、1から始める。&で区切る。
    hash  = url.slice(1).split('&');
    max = hash.length;
    for (var i = 0; i < max; i++) {
      array = hash[i].split('='); //keyと値に分割。
      vars.push(array[0]);  //末尾にクエリ文字列のkeyを挿入。
      vars[array[0]] = array[1];  //先ほど確保したkeyに、値を代入。
    }
    //最初から検索画面を開かせる
    $('.accordion dd').css('display','block');
    //リサーチナンバーのところにブチ込む
    $('#search_re_no').val(decodeURI(vars["research_number"]));
    //検索させる

    //$("input[value='検索']").trigger("click");

  }
  src = "("+code.toString()+")()"
  sc.type="text/javascript";
  sc.text=src
  return sc;
}()
);
