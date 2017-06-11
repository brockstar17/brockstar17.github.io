function addElem(elem, id) {
  $(id).prepend($(elem).fadeIn('medium'));
}

function remElem(id){
  $(id).html("");
}

var AnnP = "<p>There will be a meeting on Friday, June 16 to discuss next year's CTF competitions and to form teams.</p>";

var shirtS = '<a href="https://docs.google.com/forms/d/e/1FAIpQLSfs_L1IFg-Diy6bzoZE8Yvog4N6CcNT4Bw-21sljDSpJYbpvA/viewform?usp=sf_link">T-Shirt Survey</a>'

$('h2.ann').on('click', function(){
  $('#seg1').toggleClass('show');
  if($('#seg1').hasClass('show')){
    remElem('#lM');
    addElem(shirtS, '#pA');
    addElem(AnnP, '#pA');
    
  }
  else {
    remElem('#pA');
  }
  
});

$('h2.ann').on('mouseenter', function(){
  $(this).toggleClass('hover');
});

$('h2.mem').on('mouseenter', function(){
   $(this).toggleClass('hover');   
});

$('h2').on('mouseleave', function(){
  if($(this).hasClass('hover')){
    $(this).toggleClass('hover');
  }
});


function loadMembers(){
  $('#lM').prepend($(names).fadeIn('slow'));
}

$('.mem').on('click', function(){
  if($('#seg1').hasClass('show')){
    remElem('#pA');
    $('#seg1').toggleClass('show');
    
    if(!($(this).hasClass('disp'))){
      $('#member').toggleClass('disp');
      $('#seg2').toggleClass('show');
      loadMembers();
    }
  }
  else {
    $('#member').toggleClass('disp');
    $('#seg2').toggleClass('show');
    if($('#member').hasClass('disp')){
      loadMembers();
    }
    else {
      remElem('#lM');
    }
    
  }
});