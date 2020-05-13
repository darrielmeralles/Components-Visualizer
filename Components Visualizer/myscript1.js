
    $(function(){
            
        $('.colorOptingBox ul li').click(function(){
             var getBuilding = $('.colorPlannerTabs').attr('data-building');
             var getComponent = $('.colorPlannerTabs').attr('rel'); 
             var colorName = $(this).attr('data-color');
             var colorCode = $(this).attr('data-code');
             
             $('.images-wrapp').find('.' + getBuilding + '-' + getComponent).find('.colored-img').remove();
             $('.images-wrapp').find('.' + getBuilding + '-' + getComponent).append("<img class='colored-img animated fadeIn' src='" + baseUrl + "/images/color-planner/"+ getBuilding + "-" + getComponent +"-" + colorName + ".png'/>"); 
             $(".colorSelection li."+ getBuilding + "-" + getComponent + " .rangBox").css("background-color", colorCode).attr('data-color', colorName);                
 
        });
        $('.colorPlannerTabs ul li a').click(function(){
             var getRel = $(this).attr('rel');
             $(this).closest('.colorPlannerTabs').attr("rel",getRel);
        });
         $('#changeBuilding').change(function(){                        
             $('.buildingType').hide();
             $('.' + $(this).val()).show();
             $('.colorPlannerTabs').attr("data-building",$(this).val()); 
             if($(this).val() == "garage"){
                 $('.color-planner-wrapp').addClass('garage-view');
                 $('.color-planner-wrapp').removeClass('barn-view');
             }else if($(this).val() == "barn"){
               $('.color-planner-wrapp').addClass('barn-view');
               $('.color-planner-wrapp').removeClass('garage-view');
               $('.colorPlannerTabs').attr("rel","roof");
               $('.colorPlannerTabs ul li a').removeClass('selected');
               $('.colorPlannerTabs ul li a[rel="roof"]').addClass('selected');
             }else{
                 $('.color-planner-wrapp').removeClass('garage-view');
                 $('.color-planner-wrapp').removeClass('barn-view');
                 $('.colorPlannerTabs').attr("rel","roof");
                 $('.colorPlannerTabs ul li a').removeClass('selected');
                 $('.colorPlannerTabs ul li a[rel="roof"]').addClass('selected');
             }           
         });
         $('.reset-building').click(function(){
             $('.' + $('.colorPlannerTabs').attr('data-building')).find('.colored-img').remove();
             $('.' + $('.colorPlannerTabs').attr('data-building')).find('.rangBox').css("background-color", "#eaeaea").attr('data-color',"");
         });
          $('.preview-building').click(function(){
             $('.building-clone').empty();
             $('.color-planner .images-wrapp .' + $('.colorPlannerTabs').attr('data-building')).clone().appendTo(".building-clone");
         });
 
          $('.price-building').click(function(){
             $('#priceColoredBuilding').trigger("reset");
             $('#priceColoredBuilding input,#priceColoredBuilding textarea,#priceColoredBuilding select').removeClass('error');
             $('#priceColoredBuilding label.error').remove();
             $('.selection-clone').empty();
             $('.color-planner-wrapp .yourSelection .' + $('.colorPlannerTabs').attr('data-building')).clone().appendTo(".selection-clone");
 
             var getBuild = $('.colorPlannerTabs').attr('data-building');
             var getCompo = $('.colorPlannerTabs').attr('rel'); 
 
             var roofColor = $('.color-planner-wrapp .yourSelection .'+ getBuild +' .'+ getBuild +'-roof').find('.rangBox').attr('data-color');
             var trimColor = $('.color-planner-wrapp .yourSelection .'+ getBuild +' .'+ getBuild +'-trim').find('.rangBox').attr('data-color');
             var wainColor = $('.color-planner-wrapp .yourSelection .'+ getBuild +' .'+ getBuild +'-wainscot').find('.rangBox').attr('data-color');
             var wallColor = $('.color-planner-wrapp .yourSelection .'+ getBuild +' .'+ getBuild +'-wall').find('.rangBox').attr('data-color');
 
             $('.color-selected-value').find('input[name="roof"]').attr('value',roofColor);
             $('.color-selected-value').find('input[name="wall"]').attr('value',wallColor);
             $('.color-selected-value').find('input[name="trim"]').attr('value',trimColor);
             $('.color-selected-value').find('input[name="wainscot"]').attr('value',wainColor);
             $('.color-selected-value').find('input[name="building_type_input"]').attr('value',getBuild);
             
 
         });
 
          $('.rangBox').mouseenter(function(){
               $(this).append("<span class='pickedColor animated fadeInUp'>" + $(this).attr('data-color').replace(/[-\s]/g, ' ') + "</span>");
          });
          $('.rangBox').mouseleave(function(){
               $('.pickedColor').remove();
          });
 
 
          
     });
 