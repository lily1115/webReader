requirejs.config({
  baseUrl:'js/lib',
  path:{
    pageturning:'pageturning'
  }
  
});

require(['pageturning'],function(page){
  var p = new page.Page();
  p.renderUI();
   $(window).resize(function(){
      p.renderUI();
    });
});