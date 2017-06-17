
function loadHome(){
  var d, h;
  
  $('#frame').css('height', '1200px');
  
  d = '<div id="message"></div>'
  $('#frame').append(d);
  $('#message').addClass('bio');
  h = '<h3 id="bio"></h3>';
  $('#message').append(h);
  $('#bio').html(bio);
  
  d = '<div id="shirt"></div>';
  $('#frame').append(d);
  $('#shirt').addClass('slideEvents');
  $('#shirt').css('top', '200px');
  h = '<h3 id="t-shirt"></h3>';
  $('#shirt').append(h);
  var shirtLink = '<a href="https://docs.google.com/forms/d/e/1FAIpQLSfs_L1IFg-Diy6bzoZE8Yvog4N6CcNT4Bw-21sljDSpJYbpvA/viewform?usp=sf_link" id="shirtLink">' + homeDisplay[1] + '</a>';
  $('#t-shirt').html(homeDisplay[2] + '<br>' + shirtLink);
  $('#shirtLink').addClass('mailStyle');
  
  d = '<div id="blDiv"></div>';
  $('#frame').append(d);
  $('#blDiv').addClass('slideAnn');
  $('#blDiv').css('top', '400px');
  h = '<h2 id="brockLink"></h2>';
  $('#blDiv').append(h);
  
  var email = '<a href="mailto:brockldyer@gmail.com?subject=QRHS Computer Science Club" id="mailTo">' + homeDisplay[1] + '</a>';
  
  
  $('#brockLink').html(homeDisplay[0] + '<br>' + email);
  $('#mailTo').addClass('mailStyle');
}

function rHome(){
  remElem("#blDiv");
  remElem("#shirt");
  remElem("#message");
}

document.onload = loadHome();

function addDivAfter(elem, eId, index, eClass){
  var d = '<div id=' + eId + '></div>';
  $('#frame').append(d);
  $('#' + eId).addClass(eClass);
  //$('#' + eId).css('background', 'white');
  $('#' + eId).css('top', (index * 200) + 'px');
  $('#' + eId).html(elem);
}

function remElem(id){
  $(id).remove();
  $('#frame').css('height', '1000px');
}

function lMembers(){
  var h = 1000 + (200 * names.length);
  
  $('#frame').css('height', h + 'px');
  
  for(var i = 0; i < names.length; i++){
    
    var eId = "div" + i;
    var elem = names[i];
    
    addDivAfter(elem, eId, i, 'slideDiv');
  }
}

function rMembers(){
  for(var i = 0; i < names.length; i++){
    remElem("#div" + i);
  }
}

function lAnnounce(){
  
  var h = 1000 + (200 * announcements.length);
  
  $('#frame').css('height', h + 'px');
  
  for(var i = 0; i < announcements.length; i++){
    
    var eId = "div" + i;
    var elem = announcements[i];
    
    addDivAfter(elem, eId, i, 'slideAnn');
  }
}

function rAnnounce(){
  for(var i = 0; i < announcements.length; i++){
    remElem("#div" + i);
  }
}

function lEvents(){
  var h = 1000 + (200 * events.length);
  
  $('#frame').css('height', h + 'px');
  
  for(var i = 0; i < events.length; i++){
    
    var eId = "div" + i;
    var elem = events[i];
    
    addDivAfter(elem, eId, i, 'slideEvents');
  }
}

function rEvents(){
  for(var i = 0; i < events.length; i++){
    remElem("#div" + i);
  }
}

var currentTab = "home";

$('#heading').on('click', function(){
  switch(currentTab){
    case "announce":
      rAnnounce();
      break;
      
    case "members":
      rMembers();
      break;
      
    case "events":
      rEvents();
      break;
      
    default:
      rHome();
      break;
                   }
  
  $('#frame').css('background-image', 'space1.jpg');
  currentTab = "home";
  loadHome();
});



$('.dmenu').on('click', function(){
  switch(currentTab){
    case "announce":
      rAnnounce();
      break;
      
    case "members":
      rMembers();
      break;
      
    case "events":
      rEvents();
      break;
      
    default:
      rHome();
      break;
                   }
  
  var id = $(this).parent().prop('id');
  if(id == "announce"){
    $('#frame').css('background-image', 'space4.jpg');
    currentTab = "announce";
    lAnnounce();
  }
  else if(id == "members"){
    $('#frame').css('background-image', 'space2.jpg');
    currentTab = "members";
    lMembers();
  }
  else {
    $('#frame').css('background-image', 'space3.jpg');
    currentTab = "events";
    lEvents();
  }
});

$('.dmenu').on('mouseenter', function(){
  $(this).toggleClass('highlight');
  $(this).parent().toggleClass('highlight');
});

$('.dmenu').on('mouseleave', function(){
  $(this).toggleClass('highlight');
  $(this).parent().toggleClass('highlight');
});
