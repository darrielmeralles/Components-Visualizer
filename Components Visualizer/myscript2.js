
       function showToolTip(rel, view) {
   var imageUrl = '';
   
   if (view === 'top') {
   	imageUrl = "/images/visualizer/top/" + rel + '.png';
   } else if (view === 'front') {
   	imageUrl = "/images/visualizer/front/" + rel + '.png';
   } else {
   	imageUrl = "/images/visualizer/side/" + rel + '.png';
   }
   
   
   $(".home_tab_con").append('<img class="fadeIn animated imgHighlight" src="' + imageUrl + '">');
   $(".componentDetails").show();
   
   
   if (view === 'top') {
                  
                          if (rel === 'Rich-Cap') {
                              $(".componentDetails").html('<h4>Ridge Cap:</h4> <p>Designed trim to cover the joint between two sides of the pitch of the roof.</p>');
                          }
                          if (rel === 'Roof') {
                              $(".componentDetails").html('<h4>Roof:</h4> <p>3’ wide sheet metal horizontal or vertical.</p>');
                          }
                          if (rel === 'Roof-Trim') {
                              $(".componentDetails").html('<h4>Vertical trim:</h4> <p>A special made trim used to finish vertical style buildings.</p>');
                          }
                          if (rel === 'Side-Panels') {
                              $(".componentDetails").html('<h4>Side Panel:</h4> <p>A 3’ wide sheet metal to enclose sides or ends of the building.</p>');
                          }
                          if (rel === 'L-Trim') {
                              $(".componentDetails").html('<h4>L-Trim:</h4><p> Metal Trim used as decorative finish on the panels of regular style carports to provide a finished look</p>');
                          }
                          if (rel === 'Legs') {
                              $(".componentDetails").html('<h4>Legs:</h4> <p>Square tubing that attaches to the sleeves welded to the base rail, to determine the height of the building.</p>');
                          }
                          if (rel === 'J-Trim') {
                              $(".componentDetails").html('<h4>J-Trim:</h4> <p>A J shaped piece of trim that is put along the exposed edge of metal that gives the roof a finished look and provides safety from the sharp edge, also used to give finished appearance of windows and walkin doors.</p>');
                          }
                          if (rel === 'Hat-Channel') {
                              $(".componentDetails").html('<h4>Hat channel:</h4> <p>Horizontal metal beam that runs the length of the building to provide the ability to attach sheet metal for a vertical roof.</p>');
                          }
                          if (rel === 'Gable') {
                              $(".componentDetails").html('<h4>Gable:</h4> <p> Part of a wall that encloses the end of a pitched roof and also protects from weather elements.</p>');
                          }
                          if (rel === 'Braces') {
                              $(".componentDetails").html('<h4>Braces:</h4> <p>U-shaped steel brace attached from the leg to the roof bow and at center of the roof to provide stability.</p>');
                          }
                          if (rel === 'Bows') {
                              $(".componentDetails").html('<h4>Roof Bow:</h4> <p>Square tubing bent to shape to make the roof of the building. Bows are connected to the building’s legs and hold the panels on the roof.</p>');
                          }
                          if (rel === 'Base-Rail') {
                              $(".componentDetails").html('<h4>Base Rail:</h4> <p>Square tubing, the base of the building to which the legs attach to the sleeves.</p>');
                          }
                          if (rel === 'Braces-cv') {
                              $(".componentDetails").html('<h4>Braces:</h4><p>U-shaped steel brace attached from the leg to the roof bow and at centre of the roof to provide stability.</p>');
                          }
                          if (rel === 'frame-cv') {
                              $(".componentDetails").html('<h4>Frame:</h4><p>Used to support vertical panels.</p>');
                          }
                          if (rel === 'Garagedoors-cv') {
                              $(".componentDetails").html('<h4>Garage Doors:</h4><p>White canister roll up doors that gathers into a roll when open. Available in 4 colors.</p>');
                          }
                          if (rel === 'Hatchannel-cv') {
                              $(".componentDetails").html('<h4>Hat Channel:</h4><p>Horizontal metal beam that runs the length of the building to provide the ability to attach sheet metal for a vertical roof.</p>');
                          }
                          if (rel === 'Insulation-cv') {
                              $(".componentDetails").html('<h4>Insulation:</h4><p>Helps in shielding the building in extreme weather conditions, used on roof, sides and end panels to prevent condensation.</p>');
                          }
                          if (rel === 'Legs-cv') {
                              $(".componentDetails").html('<h4>Legs:</h4> <p>Square tubing that attaches to the sleeves welded to the base rail, to determine the height of the building.</p>');
                          }
                          if (rel === 'Ridgecap-cv') {
                              $(".componentDetails").html('<h4>Ridge Cap:</h4><p>Designed trim to cover the joint between two sides of the pitch of the roof.</p>');
                          }
                          if (rel === 'Roof-cv') {
                              $(".componentDetails").html('<h4>Roof:</h4><p>3’ wide sheet metal horizontal or vertical<p>');
                          }
                          if (rel === 'Sideentry-cv') {
                              $(".componentDetails").html('<h4>Header Bar:</h4><p>Used for a large opening on the sides.</p>');
                          }
                          if (rel === 'Walkindoors-cv') {
                              $(".componentDetails").html('<h4>Walk in doors:</h4><p>A door for access to and exit from the building for individuals.</p>');
                          }
                          if (rel === 'Windows-cv') {
                              $(".componentDetails").html('<h4>Windows:</h4>');
                          }
                      }
                  
                      if (view === 'side') {
                  
                          if (rel === 'Rich-Cap') {
                              $(".componentDetails").html('<h4>Ridge Cap:</h4> <p>Designed trim to cover the joint between two sides of the pitch of the roof.</p>');
                          }
                          if (rel === 'Roof') {
                              $(".componentDetails").html('<h4>Roof:</h4> <p>3’ wide sheet metal horizontal or vertical.</p>');
                          }
                          if (rel === 'Roof-Trim') {
                              $(".componentDetails").html('<h4>Vertical trim:</h4> <p>A special made trim used to finish vertical style buildings.</p>');
                          }
                          if (rel === 'Side-Panels') {
                              $(".componentDetails").html('<h4>Side Panel:</h4> <p>A 3’ wide sheet metal to enclose sides or ends of the building.</p>');
                          }
                          if (rel === 'L-Trim') {
                              $(".componentDetails").html('<h4>L-Trim:</h4><p> Metal Trim used as decorative finish on the panels of regular style carports to provide a finished look</p>');
                          }
                          if (rel === 'Legs') {
                              $(".componentDetails").html('<h4>Legs:</h4> <p>Square tubing that attaches to the sleeves welded to the base rail, to determine the height of the building.</p>');
                          }
                          if (rel === 'J-Trim') {
                              $(".componentDetails").html('<h4>J-Trim:</h4> <p>A J shaped piece of trim that is put along the exposed edge of metal that gives the roof a finished look and provides safety from the sharp edge, also used to give finished appearance of windows and walkin doors.</p>');
                          }
                          if (rel === 'Hat-Channel') {
                              $(".componentDetails").html('<h4>Hat channel:</h4> <p>Horizontal metal beam that runs the length of the building to provide the ability to attach sheet metal for a vertical roof.</p>');
                          }
                          if (rel === 'Gable') {
                              $(".componentDetails").html('<h4>Gable:</h4> <p> Part of a wall that encloses the end of a pitched roof and also protects from weather elements.</p>');
                          }
                          if (rel === 'Braces') {
                              $(".componentDetails").html('<h4>Braces:</h4> <p>U-shaped steel brace attached from the leg to the roof bow and at centre of the roof to provide stability.</p>');
                          }
                          if (rel === 'Bows') {
                              $(".componentDetails").html('<h4>Roof Bow:</h4> <p>Square tubing bent to shape to make the roof of the building. Bows are connected to the building’s legs and hold the panels on the roof.</p>');
                          }
                          if (rel === 'Base-Rail') {
                              $(".componentDetails").html('<h4>Base Rail:</h4> <p>Square tubing, the base of the building to which the legs attach to the sleeves.</p>');
                          }
                          if (rel === 'Bottompanels-cv') {
                              $(".componentDetails").html('<h4>Vertical Deluxe:</h4> <p>Bottom 3\' of panel, color of your choice. </p>');
                          }
                          if (rel === 'Cornertrim-cv') {
                              $(".componentDetails").html('<h4>Corner Trim:</h4><p>A section of metal trim used to neatly finish the exterior corners of a structure.<p>');
                          }
                          if (rel === 'Garagedoors-cv') {
                              $(".componentDetails").html('<h4>Garage Doors:</h4><p>White canister roll up doors that gathers into a roll when open. Available in 4 colors.</p>');
                          }
                          if (rel === 'Jtrim-cv') {
                              $(".componentDetails").html('<h4>J-Trim:</h4><p>A J shaped piece of trim that is put along the exposed edge of metal that gives the roof a finished look and provides safety from the sharp edge, also used to give finished appearance of windows and walkin doors.</p>');
                          }
                          if (rel === 'Ltrim-cv') {
                              $(".componentDetails").html('<h4>L-Trim:</h4><p>Metal Trim used as decorative finish on the panels of regular style carports to provide a finished look.</p>');
                          }
                          if (rel === 'Ridgecap-cv') {
                              $(".componentDetails").html('<h4>Ridge Cap:</h4><p>Designed trim to cover the joint between two sides of the pitch of the roof.<p>');
                          }
                          if (rel === 'Roof-cv') {
                              $(".componentDetails").html('<h4>Roof:</h4><p>3’ wide sheet metal horizontal or vertical</p>');
                          }
                          if (rel === 'Rooftrim-cv') {
                              $(".componentDetails").html('<h4>Roof Trim: </h4><p>A special made trim used to finish vertical style buildings.</p>');
                          }
                          if (rel === 'Sodes-cv') {
                              $(".componentDetails").html('<h4>Side Panels:</h4> <p>A 3’ wide sheet metal to enclose sides or ends of the building.</p>');
                          }
                          if (rel === 'Walkindoors-cv') {
                              $(".componentDetails").html('<h4>Walk in doors:</h4><p>A door for access to and exit from the building for individuals.</p>');
                          }
                          if (rel === 'Windows-cv') {
                              $(".componentDetails").html('<h4>Windows:</h4> <p>30X30" or 30X36".</p>');
                          }
                          if (rel === 'Ztrim-cv') {
                              $(".componentDetails").html('<h4>Z-Trim:</h4><p>A special Z shaped strip of metal trim used to separate side colors on a vertical deluxe style building</p>');
                          }
                      }
                  
                      if (view === 'front') {
                  
                          if (rel === 'Rich-Cap') {
                              $(".componentDetails").html('<h4>Ridge Cap:</h4> <p>Designed trim to cover the joint between two sides of the pitch of the roof.</p>');
                          }
                          if (rel === 'Roof') {
                              $(".componentDetails").html('<h4>Roof:</h4> <p>3’ wide sheet metal horizontal or vertical.</p>');
                          }
                          if (rel === 'Roof-Trim') {
                              $(".componentDetails").html('<h4>Vertical trim:</h4> <p>A special made trim used to finish vertical style buildings.</p>');
                          }
                          if (rel === 'Side-Panels') {
                              $(".componentDetails").html('<h4>Side Panel:</h4> <p>A 3’ wide sheet metal to enclose sides or ends of the building.</p>');
                          }
                          if (rel === 'L-Trim') {
                              $(".componentDetails").html('<h4>L-Trim:</h4><p> Metal Trim used as decorative finish on the panels of regular style carports to provide a finished look</p>');
                          }
                          if (rel === 'Legs') {
                              $(".componentDetails").html('<h4>Legs:</h4> <p>Square tubing that attaches to the sleeves welded to the base rail, to determine the height of the building.</p>');
                          }
                          if (rel === 'J-Trim') {
                              $(".componentDetails").html('<h4>J-Trim:</h4> <p>A J shaped piece of trim that is put along the exposed edge of metal that gives the roof a finished look and provides safety from the sharp edge, also used to give finished appearance of windows and walkin doors.</p>');
                          }
                          if (rel === 'Hat-Channel') {
                              $(".componentDetails").html('<h4>Hat channel:</h4> <p>Horizontal metal beam that runs the length of the building to provide the ability to attach sheet metal for a vertical roof.</p>');
                          }
                          if (rel === 'Gable') {
                              $(".componentDetails").html('<h4>Gable</h4> <p>  Part of a wall that encloses the end of a pitched roof and also protects from weather elements.</p>');
                          }
                          if (rel === 'Braces') {
                              $(".componentDetails").html('<h4>Braces:</h4> <p>U-shaped steel brace attached from the leg to the roof bow and at centre of the roof to provide stability.</p>');
                          }
                          if (rel === 'Bows') {
                              $(".componentDetails").html('<h4>Roof Bow:</h4> <p>Square tubing bent to shape to make the roof of the building. Bows are connected to the building’s legs and hold the panels on the roof.</p>');
                          }
                          if (rel === 'Base-Rail') {
                              $(".componentDetails").html('<h4>Base Rail:</h4> <p>Square tubing, the base of the building to which the legs attach to the sleeves.</p>');
                          }
                          if (rel === 'Baserail-cv') {
                              $(".componentDetails").html('<h4>Base Rail:</h4><p> Square tubing, the base of the building to which the legs attach to the sleeves.</p>');
                          }
                          if (rel === 'Bows-cv') {
                              $(".componentDetails").html('<h4>Bows:</h4><p>Square tubing bent to shape to make the roof of the building. Bows are connected to the building’s legs and hold the panels on the roof.</p>');
                          }
                          if (rel === 'Braces-cv') {
                              $(".componentDetails").html('<h4>Braces:</h4><p>U-shaped steel brace attached from the leg to the roof bow and at centre of the roof to provide stability.<p>');
                          }
                          if (rel === 'Frame-cv') {
                              $(".componentDetails").html('<h4>Frame:</h4><p>Used to support vertical panels.</p>');
                          }
                          if (rel === 'Garage-doors-cv') {
                              $(".componentDetails").html('<h4>Garage Doors:</h4><p>White canister roll up doors that gathers into a roll when open. Available in 4 colors.</p>');
                          }
                          if (rel === 'Hatchannel-cv') {
                              $(".componentDetails").html('<h4>Hat Channel:</h4><p>Horizontal metal beam that runs the length of the building to provide the ability to attach sheet metal for a vertical roof.</p>');
                          }
                          if (rel === 'Headerbar-cv') {
                              $(".componentDetails").html('<h4>Header Bar:</h4><p>Used for a large opening on the sides.</p>');
                          }
                          if (rel === 'Insulation-cv') {
                              $(".componentDetails").html('<h4>Insulation:</h4><p>Helps in shielding the building in extreme weather conditions, used on roof, sides and end panels to prevent condensation.</p>');
                          }
   
                          if (rel === 'Legs-cv') {
                              $(".componentDetails").html('<h4>Legs:</h4><p>Square tubing that attaches to the sleeves welded to the base rail, to determine the height of the building.</p>');
                          }
   
                          if (rel === 'Roof-cv') {
                              $(".componentDetails").html('<h4>Roof:</h4><p>3’ wide sheet metal horizontal or vertical</p>');
                          }
                          if (rel === 'Rooftrim-cv') {
                              $(".componentDetails").html('<h4>Vertical Trim:</h4><p>A special made trim used to finish vertical style buildings.</p>');
                          }
                          if (rel === 'Side1-cv') {
                              $(".componentDetails").html('<h4>Side Panels:</h4> <p>A 3’ wide sheet metal to enclose sides or ends of the building.</p>');
                          }
                          if (rel === 'Side2-cv') {
                              $(".componentDetails").html('<h4>Vertical Deluxe:</h4> <p>Bottom 3\' of panel, color of your choice. </p>');
                          }
                          if (rel === 'Walkindoor-cv') {
                              $(".componentDetails").html('<h4>Walk in door:</h4><p>A door for access to and exit from the building for individuals.</p>');
                          }
                          if (rel === 'Windows-cv') {
                              $(".componentDetails").html('<h4>Windows:</h4> <p>30X30" or 30X36".</p>');
                          }
                          if (rel === 'Ztrim-cv') {
                              $(".componentDetails").html('<h4>Z-Trim:</h4><p>A special Z shaped strip of metal trim used to separate side colors on a vertical deluxe style building</p>');
                          }
                      }
                      $('.list-unstyled li').removeClass('active');
                      $('#'+rel+'-'+view).addClass('active');
   }
   
   function changeGarageView(view){ 
   //console.log(view);
                           if (view === 'top') {
                                    $('#topView').show();
                                    $('#topView-componentVisualizer').hide();
                                    $('#frontView').hide();
                                    $('#frontView-componentVisualizer').hide();
                                    $('#sideView').hide();
                                    $('#sideView-componentVisualizer').show();
                                    $('#topViewLink').show();
                                    $('#frontViewLink').hide();
                                    $('#sideViewLink').hide();
                                    $('#topViewLink-componentVisualizer').hide();
                                    $('#frontViewLink-componentVisualizer').hide();
                                    $('#sideViewLink-componentVisualizer').show();
                                }
                                if (view === 'front') {
                                    $('#topView').hide();
                                    $('#topView-componentVisualizer').hide();
                                    $('#frontView').show();
                                    $('#frontView-componentVisualizer').show();
                                    $('#sideView').hide();
                                    $('#sideView-componentVisualizer').hide();
                                    $('#topViewLink').hide();
                                    $('#frontViewLink').show();
                                    $('#sideViewLink').hide();
                                    $('#topViewLink-componentVisualizer').hide();
                                    $('#frontViewLink-componentVisualizer').show();
                                    $('#sideViewLink-componentVisualizer').hide();
                                }
                                if (view === 'side') {
                                    $('#topView').hide();
                                    $('#topView-componentVisualizer').show();
                                    $('#frontView').hide();
                                    $('#frontView-componentVisualizer').hide();
                                    $('#sideView').show();
                                    $('#sideView-componentVisualizer').hide();
                                    $('#topViewLink').hide();
                                    $('#frontViewLink').hide();
                                    $('#sideViewLink').show();
                                    $('#topViewLink-componentVisualizer').show();
                                    $('#frontViewLink-componentVisualizer').hide();
                                    $('#sideViewLink-componentVisualizer').hide();
                                }
                      }
   
        $('.views-btn').on('click',function() {
                          $(".componentDetails").hide();//Hide tooltip
                          $(".imgHighlight").remove();//Remove overlay image
                          var view = $(this).attr('view');
                          changeGarageView(view);
                      });
                  
                      $(".innerPage .content-area").children("div").removeClass("container");
                  
                      function section_fire(element) {
                          var section = element.attr('rel'),
                              view = element.attr('view');
                  
                          showToolTip(section, view);
                      }
                  
                      $(".fireEvent").on("tap", function() {
                          section_fire($(this));
                      });
                  
                      $(".fireEvent").mouseenter(function() {
                          section_fire($(this));
                      });
                  
                      $(".fireEvent").mouseleave(function() {
                          $(".imgHighlight").remove();
                          $(".componentDetails").hide();
                      });
                      $("area").attr("href", "javascript:void(0)");
                 // });
                  
                  function resetTab(tab){
                      $(".imgHighlight").remove();
                      $(".componentDetails").hide();
                      $(".viewlink-sidebar ul li").removeClass('active1');
                      $(".viewlink-sidebar ul li").removeClass('active');
                      //Reset view tab default top
                      $(".visualizer-view .list-inline li").removeClass('active');
                      $(".visualizer-view .list-inline li").removeClass('active1');
                      $(".visualizer-view .list-inline li:first-child").addClass('active active1');
                      //Reset tab view
                      changeGarageView('top');
   
                       // if(tab=='BV'){
                       //       showToolTip('Base-Rail','top');
                       //       $(".viewlink-sidebar ul li:first-child").addClass('active active1');
                       // }else{
                       //        showToolTip('Braces-cv','top');
                       //       $(".viewlink-sidebar ul li:first-child").addClass('active active1');
                       // }
                  }
                  
                     $(document).ready(function(){
   
   	// $('.visualizer-view ul li:first-child, .viewlink-sidebar ul li:first-child').addClass('active1');
        $('.visualizer-view ul li, .viewlink-sidebar ul li').click(function() {
            $(this).addClass('active1').siblings().removeClass('active1');
        });
        $('.visualizer-view ul li, .viewlink-sidebar ul li').click(function() {
            $(this).addClass('active').siblings().removeClass('active');
        });
   	//$('.navigation a.a1').addClass('active');
   	//$('#loader').addClass('loder_close');
   	
   });

