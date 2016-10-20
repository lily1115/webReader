requirejs.config({
  baseUrl:'js'
});

define(['jquery'],function($){
  function Page(){
    //初始化页面大小
    this.options = {
      width: 400,
      margin: 40,
      padding: 10
    };
  }
  Page.prototype = {
    renderUI : function(){
      $('#page-box').css('padding',this.options.padding+'px');
      if( $(window).width() > 600 )
      {
        $('#page-box').css({
          'width': this.options.width - (this.options.padding*2) + 'px',
          'height' : $(window).height() - (2*this.options.margin) - (this.options.padding*2) + 'px',
          'margin' : this.options.margin + 'px auto'
        });
      }else{
        $('#page-box').css({
          'width': $(window).width() - (this.options.padding*2) + 'px',
          'height': $(window).height() - (this.options.padding*2) + 'px',
          'margin' : ''
        });
      }
    }
  };
  return {
    Page:Page
  };
});