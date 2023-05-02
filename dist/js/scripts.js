
/*
  APP・WEBタブの切り替え
*/
//   $(function() {
// 	// クリックしたらイベント発火　webタブできた時に使う
// 	$('.tab-switch__item').click(function(){
// 		// デフォルト.is-activeクラスを削除
// 		$('.is-active').removeClass('is-active');

// 		//クリックしたタブにis-activeのクラス付与
// 		$(this).addClass('is-active');

// 		// デフォルト.is-show'クラスを削除
// 		$('.is-show').removeClass('is-show');
		
// 		//クリックしたタブがタブの中で何番目かを判定し、indexとして定義
// 		const index = $(this).index();
		
// 		//.tab-area__contents-mainが付いている要素のindex番目にis-showクラスを付与
// 		$('.tab-contents__item-area').eq(index).addClass('is-show');
// 	});  
// });


/*
  バーガーメニューの開閉
*/
$(function() {
  $('.hamburger').click(function() {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.header-inner__menu').addClass('active');
    } else {
      $('.header-inner__menu').removeClass('active');
    }
  });
});


/* APPタブのカルーセル SPの時だけイベントを発火させる */
$(function(){
  function checkBreakPoint() {
    w = $(window).width();
    if (w <= 767) {
      // スマホ向け（767px以下のとき）
      $('.slider-thumbnail').not('.slick-initialized').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 1000,
        infinite: false,
        centerMode: false,
        dots: false, 
      });
    } else {
      // PC向け
      $('.slider-thumbnail.slick-initialized').slick('unslick');
    }
  }
  // ウインドウがリサイズする度にチェックすして発火させる
  $(window).resize(function(){
    checkBreakPoint();
  });
  checkBreakPoint();
})

// window.addEventListener("load", function() {
  

// });

  /* 広告用のカルーセル PC/SP共通のため、↑のカルーセルと処理を分けた */
  $('.slick-add').slick({
    dots: true,
    arrows: true,
    slidesToShow: 7,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          variableWidth: true,
          focusOnSelect: true,
          centerMode: true,
        }
      }
    ]    
  });

  
/*
  モーダル内のslick 
  デフォルトはdisplay: none のため、slickの発火を「is-modal-open」の後にする
  モーダル表示時間に合わせて発火するように小細工
*/ 



$(function(){

  var isExecuted = false;
  
  $('.detail-contents__thumbnail').click(function() {
    $('.modal').fadeIn().css('display', 'block');
  
    // フラグ変数がfalseの場合のみ処理を実行する
    if (!isExecuted) { 
      var imgSrcList = [];
      var imgAltList = [];

      // 画像、altを全て取得する
      $(this).find('img').each(function() {
        var imgSrc = $(this).attr('src');
        var imgAlt = $(this).attr('alt');
        imgSrcList.push(imgSrc);
        imgAltList.push(imgAlt);
      });
      // 配列の画像を取得してHTMLを作成する
      $.each(imgSrcList, function(index, imagePath) {
        var imgSrc = imagePath;
        var imgAlt = "";
        var modalContent ='<div class="modal__item"><img class="modal__image" src="' + imgSrc + '" alt="' + imgAlt + '"></div>';
        $('.modal__list').append(modalContent);
      });

      // 処理が実行された後、フラグ変数をtrueに変更する
      isExecuted = true; 
    }

    // モーダル内でslickを実行する
    $('.modal__list').slick({
      arrows: true,
      adaptiveHeight: true,
    });
  })
});

$(function(){
  // $('.is-modal-open').on('click',function(){
  //   // console.log('click')
  //     $('.modal').fadeIn();
  //     return false;
  // });
  $('.is-modal-close').on('click',function(){
      $('.modal').fadeOut().css('display', 'none');
      return false;
  });
});

