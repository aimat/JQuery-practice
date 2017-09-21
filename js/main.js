$(function(){
  var sangetsu = ['山月記', '隴西の李徴は博学才穎、天宝の末年、若くして名を虎榜に連ね、', 'ついで江南尉に補せられたが、性、狷介、自ら恃むところ頗る厚く、','賤吏に甘んずるを潔しとしなかった。', 'いくばくもなく官を退いた後は、故山、かく略に帰臥し、', '人と交を絶って、ひたすら詩作に耽った。', '下吏となって長く膝を俗悪な大官の前に屈するよりは、', '詩家としての名を死後百年に遺そうとしたのである。'];
  var zyun = 0;
  var weather = ['晴れ', '雨', '曇り', '雪', '雷']
  var random;
  var property = new Object();
  var color;
  var rect;
  var answer;
  var answer2;
  var count = 1;
  var isAnswer = false;
  var isAnswer2 = false;
  var isAnswer3 = false;

  $('#sangetsu').click(function(){
    $(this).text(sangetsu[zyun]);
    zyun++;
    if (zyun === sangetsu.length) {
      setTimeout(function(){
        zyun = 0;
        $('#sangetsu').text(sangetsu[zyun]);
      },5000)
    }
  })

  $('#sea').click(function(){
    $(this).fadeOut('slow');
    setTimeout(function(){
      $('#mountain').fadeIn('slow');
    },590)
  })
  $('#mountain').click(function(){
    $(this).fadeOut('slow');
    setTimeout(function(){
      $('#sea').fadeIn('slow');
    },590)
  })

  $('#button')
  .mouseover(function(){
    $(this).css('opacity', '1');
  })
  .mouseout(function(){
    $(this).css('opacity', '0.9');
  })
  .mousedown(function(){
    $(this).css('margin','106px auto 100px');
    color = $(this).css('borderColor');
    $(this).css('boxShadow', `0 4px 0 ${color}`)
  })
  .mouseup(function(){
    random = Math.floor(Math.random() * (weather.length));
    $(this).css('margin','100px auto 106px');
    $(this).text(weather[random]);
    switch (random) {
      case 0:
      property.background = '#FFA500';
      property.borderColor = '#FF8C00'
      property.boxShadow = ' 0 10px 0 #FF8C00'
      $(this).css(property);
      break;
      case 1:
      property.background = '#0000FF';
      property.borderColor = '#0000CD'
      property.boxShadow = ' 0 10px 0 #0000CD'
      $(this).css(property);
      break;
      case 2:
      property.background = '#D3D3D3';
      property.borderColor = '#C0C0C0'
      property.boxShadow = ' 0 10px 0 #C0C0C0'
      $(this).css(property);
      break;
      case 3:
      property.background = '#B0E0E6';
      property.borderColor = '#ADD8E6'
      property.boxShadow = ' 0 10px 0 #ADD8E6'
      $(this).css(property);
      break;
      case 4:
      property.background = '#FFFF00';
      property.borderColor = '#FFD700'
      property.boxShadow = ' 0 10px 0 #FFD700'
      $(this).css(property);
      break;
    }
  })

  $('#submit').click(function(){
    if($('#number').val() === ''){
      $('#error-message').html("<p style = 'color: red;'>何も入力されていません</p>");
      $('#squaring').text('');
    }else if(!$('#number').val().match(/[0-9]/)){
      $('#error-message').html("<p style = 'color: red;'>数字を入力してください</p>");
      $('#squaring').text('');
    }else{
      $('#error-message').html('');
      $('#squaring').text($('#number').val() * 2);
    }
    return false;
  })

  $('#two').click(function(e){
    rect = e.target.getBoundingClientRect();
    answer = e.pageX - rect.left - window.scrollX;
    answer2 = e.pageY - rect.top - window.scrollY;
    if(count === 3){
      alert('３つ全て正解！　クリア！');
      count++;
      $('.gazou').css('cursor', 'not-allowed');
    }else if(count <= 2){
      if(answer >= 53 && answer <= 73 && answer2 >= 50 && answer2 <= 80){
        if(!isAnswer){
          alert(`正解！（${count}つ目）`);
          isAnswer = true;
          count++;
        }
      }else if(answer >= 45 && answer <= 65 && answer2 >= 245 && answer2 <= 275){
        if(!isAnswer2){
          alert(`正解！（${count}つ目）`);
          isAnswer2 = true;
          count++;
        }
      }else if(answer >= 338 && answer <= 348 && answer2 >= 1 && answer2 <= 180){
        if(!isAnswer3){
          alert(`正解！（${count}つ目）`);
          isAnswer3 = true;
          count++;
        }
      }
  }
  })

  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.fa-arrow-up').fadeIn();
    } else {
      $('.fa-arrow-up').fadeOut();
    }
  });
  $('.fa-arrow-up').click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});
