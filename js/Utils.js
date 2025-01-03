export  function configurationUi(options){
    if(options.defaultTheme){
        $('#tds').attr('id', options.defaultTheme);
        $('#tds').attr('class', options.styleUi);
        if(options.position){
            if (window.innerWidth >= 768 && window.innerWidth >= window.innerHeight) {
                if (options.position === 'left') {
                    $(`#${options.defaultTheme}`).css('display', 'flex');
                    $(`#${options.defaultTheme}`).css('flexDirection', 'row-reverse');
                    $('.popup_fab').css('right', '0');
                } else {
                    $(`#${options.defaultTheme}`).css('display', 'flex');
                    $(`#${options.defaultTheme}`).css('flexDirection', 'row');
                    $('.popup_fab').css('left', '0'); 
                }
            } else {
                $(`#${options.defaultTheme}`).css('display', '');
                $(`#${options.defaultTheme}`).css('flexDirection', '');
                $('.popup_fab').css('left', '');
                $('.popup_fab').css('left', '');  
            }
            const fabricsStyleDiv = $('.fabrics_style');
            const stylePanelDiv = $('.style_panel');
            const fabLink = $('li.showfab');

            if (!options.fabricShow) {
                if (fabricsStyleDiv) {
                    $('.fabrics_style').css('display', 'none');
                }
                if (fabLink) {
                    $('li.showfab').css('display', 'none');
                }
                if (stylePanelDiv) {
                    $('.style_panel').css('display', 'block');
                }
              } else {
                // Desktop conditions
                if (window.innerWidth >= 768) {
                  if (fabricsStyleDiv) {
                   
                    $('.fabrics_style').css('display', 'block');
                  }
                  if (fabLink) {
                    $('li.showfab').css('display', 'flex');
                  }
                  if (stylePanelDiv) {
                    $('.style_panel').css('display', 'none');
                  }
                } else {
                  // Mobile conditions (width < 768px)
                  if (fabricsStyleDiv) {
                    $('.fabrics_style').css('display', 'block');
                  }
                  if (fabLink) {
                    $('li.showfab').css('display', 'flex');
                    
                  }
                  if (stylePanelDiv) {
                    $('.style_panel').css('display', 'none');
                  }
                }
              }

        } else {
            alert('Data Not Configured');
        }
    }
}