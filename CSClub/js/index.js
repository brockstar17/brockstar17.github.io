function addElem(elem, id) {
  $(id).prepend($(elem).fadeIn('medium'));
}

function remElem(id){
  $(id).html("");
}

$('#members').on('mouseenter', function(){
  $(this).toggleClass('hover');
});

$('#members').on('mouseleave', function(){
  if($(this).hasClass('hover')){
    $(this).toggleClass('hover');
  }
});

function loadMembers(){
  document.getElementById('memTd1').innerHTML = homeName1;
  document.getElementById('memTd2').innerHTML = homeName2;
}

$('#members').on('click', function(){
  $('#seg4').toggleClass('show');
  $('#memTd1').toggleClass('show');
  $('#members').toggleClass('show');
  $('#memTd2').toggleClass('show');
  if($('#seg4').hasClass('show')){
    loadMembers();
  }
  else {
    remElem('#memTd1');
    remElem('#memTd2');
  }
});