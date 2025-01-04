//---------ナビゲーションをクリックした際のスムーススクロール
$('#g-navi a').click(function () {
    var elmHash = $(this).attr('href'); //hrefの内容を取得
    var pos = Math.round($(elmHash).offset().top-120);  //headerの高さを引く
    $('body,html').animate({scrollTop: pos},1000);//取得した位置にスクロール※数値が大きいほどゆっくりスクロール
    return false;//リンクの無効化
  });