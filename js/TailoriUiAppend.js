// import { getRequest,PostRequest } from './AjaxRequest.js';
export function ModelContainer(){
    return `<div class="" id="modelDiv">
      <div class="icon_set">
         <div class="fit_view" id="infoToggler">
         <img src="https://res.cloudinary.com/tdscloudcdn/tailori/plugin/images/up.png">
         <img src="https://res.cloudinary.com/tdscloudcdn/tailori/plugin/images/down.png" style="display: none;">
         </div>
         <div class="fit_view" id="viewToggler">
         <img class="full_view" src="https://res.cloudinary.com/tdscloudcdn/tailori/plugin/images/whole_img.png">
         <img  class="focus_view" src="https://res.cloudinary.com/tdscloudcdn/tailori/plugin/images/large_img.png" style="display: none;">
         </div>  
                  
      </div>
      <div class="myproduct">
        <!-- <div class="product_tag">BESPOKE 
         <span class="pr_type">SUIT</span>
         </div>
         <div class="product_price">$335</div>
         <div class="next_bt measure">ADD TO CART</div>
         <div class="icon_set_a">
         <div class="fav"><img src="https://res.cloudinary.com/tdscloudcdn/tailori/plugin/images/heart.png"></div>  
         <div class="res"><img src="https://res.cloudinary.com/tdscloudcdn/tailori/plugin/images/refresh.png"></div>
         </div>-->

      </div>

      <div class="parent">
         <div class="main">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
               <ol class="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" class=""></li>
                  <li data-target="#myCarousel" data-slide-to="1" class="active"></li>
                  <li data-target="#myCarousel" data-slide-to="2" class=""></li>
               </ol>
               <div class="carousel-inner" >
                  <div class="item" id="img_div">
                  </div>
               </div>
         
            </div>
         </div>
      </div>
          <!-- fabric info -->
          <div class="popup_fab"style="padding: 0;display: none;">                   
            <div class="layout" >
                  <div class="heading_style">Select Fabric <i class="fa fa-long-arrow-left fa-close fab_back_main2" aria-hidden="true"></i></div>
                     <div class="fab_view_content">
                        <div class="close_content close_fab">
                        <img src="https://res.cloudinary.com/tdscloudcdn/tailori/plugin/images/close_white.png">
                        </div>
                                 <div class="fabric_view">
                                    <div class="fabric_img">
                                       <img src="images\suit02.jpg">
                                    </div>
                                    <div class="info_fab suit_type">                                         
                                       <div class="header">
                                             <div class="title">aerd</div>
                                             <div class="composition description">
                                                <p class="value">100% Cotton</p>
                                             </div>
                                             <div class="price">189€</div>  
                                       </div>
                                       <div class="sub_header">S000872/003</div>                                            
                                    </div>
                                 </div>
                     </div>
                     <button type="button" class="btn btn_changes" id="applyfabric">view changes</button>
            
            </div>
         </div>
   </div>`
}
export function configContainer() {
    return `<div class="configColumn" id="configColumn">  
         <div class="desk_bottom">
               <div class="price_bt">
                  <div class="info_desk">
                     <div class="price">$1335</div>
                     <div class="summary_info">View Summary</div>
                  </div>
               </div>
               <div class="cart_bt measure">ADD TO CART</div>
         </div>
            <div class="design_nav">
               <ul class="nav navbar-nav navbar-center staticList">
                  <li class="showfab" index = '0'>
                     <a href="#">Fabric</a>
                     <div class="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="PJLV PJLV-iFpXMU-css"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l14 0"></path><path d="M15 16l4 -4"></path><path d="M15 8l4 4"></path></svg></div>
                  </li>
                  <li class="showstyle" index = '1'><a href="#">Style</a>    
                     <div class="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="PJLV PJLV-iFpXMU-css"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l14 0"></path><path d="M15 16l4 -4"></path><path d="M15 8l4 4"></path></svg></div>     
                  </li>
                  
                  
                  <li class="addmono" index = '2'><a href="#">Accent</a></li>
               </ul>
            </div>      
            <!--fabric left panel starts-->
            <div id="customizePanel">
                  <div class="fabrics_style">
                           <div class="heading_style">Filter Fabric <i class="fa fa-long-arrow-left fa-close fab_back_main" aria-hidden="true"></i>
                           </div>        
                           <div class="pagehold">
                              <div class="grey_header">                               
                                       <div class="icon_filter filtercount">
                                          <span class="glyphicon glyphicon-sort filter"></span>
                                          <p>Filters</p> 
                                       </div>

                                          <div class="box_search">
                                                <input class="search" type="search" placeholder="Search" />
                                                <div class="icon_search"><span class="glyphicon glyphicon-search"></span></div>
                                          </div>
                                          <div class="count">
                                             <p>Total : </p>
                                          </div>
                                    
                           </div>
                              <div id="fabric_window"> 
                                    <div id="fabric_box">     
                                    </div>  
                               </div>
                           </div>  
                        </div>
                  <!--fabric left ends-->
                  <!--style starts-->
                  <div class="style_panel">       
                              <div class="heading_style">Select Style
                                 <i class="fa fa-long-arrow-left fa-close style_close" aria-hidden="true"></i>
                              </div>
                     <div class="pagehold">
                           <div id="sidebarPrimary">
                              <ul id="sidebarPrimaryNav">                                
                                 <li id="" class="navButton ja_list link " data-tds-product="81E5CD16F">
                                    <a href="#">
                                       <div class="navButtonContent">
                                          <img src="images/s1.png">     
                                          <h5>Fit</h5>
                                       </div>
                                    </a>
                                 </li>
                                 <li id="" class="navButton ja_list link" data-tds-product="82A7ED21G">
                                    <a href="#">
                                       <div class="navButtonContent">
                                          <img src="images/s2.png">                                
                                          <h5>Style</h5>
                                       </div>
                                    </a>
                                 </li>
                                 <li id="" class="navButton ja_list link" data-tds-product="1BB14A02C">
                                    <a href="#">
                                       <div class="navButtonContent">
                                          <img src="images/s3.png">     
                                          <h5>Lapels</h5>
                                       </div>
                                    </a>
                                 </li>
                                 <li id="" class="navButton ja_list link" data-tds-product="6369BC24F">
                                    <a href="#">
                                       <div class="navButtonContent">
                                          <img src="images/s4.png">     
                                          <h5>Bottom </h5>
                                       </div>
                                    </a>
                                 </li>
                           
                                 <li id="" class="navButton ja_list link" data-tds-product="6369BC24F">
                                    <a href="#">
                                       <div class="navButtonContent">
                                          <img src="images/s6.png">     
                                          <h5>Button Type</h5>
                                       </div>
                                    </a>
                                 </li>
                                 <li id="" class="navButton ja_list link" show-id="b_hole">
                                    <a href="#">
                                       <div class="navButtonContent">
                                          <img src="images/s8.png">     
                                          <h5>Button Hole</h5>
                                       </div>
                                    </a>
                                 </li>
                                 <li id="" class="navButton ja_list link" show-id="j_vent">
                                    <a href="#">
                                       <div class="navButtonContent">
                                          <img src="images/s7.png">     
                                          <h5>Vents</h5>
                                       </div>
                                    </a>
                                 </li>
                                 <li id="" class="navButton ja_list link" show-id="j_shoulder">
                                    <a href="#">
                                       <div class="navButtonContent">
                                          <img src="images/s13.png">     
                                          <h5>Shoulder</h5>
                                       </div>
                                    </a>
                                 </li>
                                 <li id="" class="navButton ja_list link" show-id="j_cuff">
                                    <a href="#">
                                       <div class="navButtonContent">
                                          <img src="images/s14.png">     
                                          <h5>Cuff</h5>
                                       </div>
                                    </a>
                                 </li>
                                 <li id="" class="navButton ja_list link" show-id="j_pickstitch">
                                    <a href="#">
                                       <div class="navButtonContent">
                                          <img src="images/s15.png">     
                                          <h5>Pickstitch</h5>
                                       </div>
                                    </a>
                                 </li>
                                 <li id="" class="navButton ja_list link" show-id="j_lapelhole">
                                    <a href="#">
                                       <div class="navButtonContent">
                                          <img src="images/s16.png">     
                                          <h5>Lapel Hole</h5>
                                       </div>
                                    </a>
                                 </li>
                                 <!-- jacket link ends -->
                                 <!-- waist link starts -->
                                 <!-- <li id="waistcontent" class="navButton waist_main" >
                                    <a href="#">
                                       <div class="navButtonContent">
                                          <div class="style_head">
                                             <span class="glyphicon glyphicon-menu-down"></span>  
                                             Waistcoat 
                                          </div>
                                       </div>
                                    </a>
                                 </li> -->
                                 <li id="" class="navButton waist_list link" show-id="waist_fit">
                                    <a href="#">
                                       <div class="navButtonContent">
                                          <img src="images/w1.png">     
                                          <h5>Fit</h5>
                                       </div>
                                    </a>
                                 </li>
                                 <li id="" class="navButton waist_list link" show-id="waist_style">
                                    <a href="#">
                                       <div class="navButtonContent">
                                          <img src="images/w2.png">     
                                          <h5>Style</h5>
                                       </div>
                                    </a>
                                 </li>
                                 <li id="" class="navButton waist_list link" show-id="w_bottom">
                                    <a href="#">
                                       <div class="navButtonContent">
                                          <img src="images/w3.png">     
                                          <h5>Bottom</h5>
                                       </div>
                                    </a>
                                 </li>
                                 <li id="" class="navButton waist_list link" show-id="w_lapel">
                                    <a href="#">
                                       <div class="navButtonContent">
                                          <img src="images/w4.png">     
                                          <h5>Lapel Style</h5>
                                       </div>
                                    </a>
                                 </li>
                                 <!-- waist link ends -->
                                 <!-- Pant link starts -->
                                 <!-- <li id="pant_content" class="navButton pant_main" >
                                    <a href="#">
                                       <div class="navButtonContent">
                                          <div class="style_head">
                                             <span class="glyphicon glyphicon-menu-down"></span>  
                                             Pant 
                                          </div>
                                       </div>
                                    </a>
                                 </li> -->
                                 <li id="" class="navButton pant_list link" show-id="pant_fit">
                                    <a href="#">
                                       <div class="navButtonContent">
                                          <img src="images/p1.png">     
                                          <h5>Fit</h5>
                                       </div>
                                    </a>
                                 </li>
                                 <li id="" class="navButton pant_list link" show-id="pant_pleates">
                                    <a href="#">
                                       <div class="navButtonContent">
                                          <img src="images/p2.png">     
                                          <h5>Pleats</h5>
                                       </div>
                                    </a>
                                 </li>
                                 <li id="" class="navButton pant_list " show-id="pant_pocket">
                                    <a href="#">
                                       <div class="navButtonContent">
                                          <img src="images/p3.png">     
                                          <h5>Pockets</h5>
                                       </div>
                                    </a>
                                 </li>
                                 <li id="" class="navButton pant_list " show-id="pant_crop">
                                    <a href="#">
                                       <div class="navButtonContent">
                                          <img src="images/p4.png">     
                                          <h5>Crop-Break</h5>
                                       </div>
                                    </a>
                                 </li>
                                 <li id="" class="navButton pant_list " show-id="pant_belt">
                                    <a href="#">
                                       <div class="navButtonContent">
                                          <img src="images/p5.png">     
                                          <h5>Belt</h5>
                                       </div>
                                    </a>
                                 </li>
                                 <li id="" class="navButton pant_list " show-id="pant_bottom">
                                    <a href="#">
                                       <div class="navButtonContent">
                                          <img src="images/p6.png">     
                                          <h5>Bottom</h5>
                                       </div>
                                    </a>
                                 </li>
                                 <!-- pant link ends -->
                              </ul>
                           </div>
                        
                        <div class="innerOptions_style" id="submenu">                           

                        </div>
                     </div>              
                  </div> 
                  <!-- monogram start  -->
                  <div class="monogram" id="monogram" >     
                        <div class="heading_style">Select Style
                           <i class="fa fa-long-arrow-left fa-close style_close" aria-hidden="true"></i>
                        </div>       
                        <div class="pagehold">
                           
                           <div id="sidebarSecondary">
                                 <ul id="sidebarSecondaryNav">

                                 <li id="" class="navButton link" show-id="mono_content">
                                       <a href="javascript:void(0)">
                                          <div class="navButtonContent">
                                             <img src="images/s1.png">     
                                          <h5>Monogram
                                                         <small>+$35</small>
                                          </h5>

                                          </div>
                                       </a>
                                 </li>
                                 
                                    <li id="" class="navButton link" show-id="elbow_content">
                                       <a href="javascript:void(0)">
                                          <div class="navButtonContent">
                                             <img src="images/s1.png">     
                                          <h5>Elbow Patch            <small>+$15</small></h5>

                                          </div>
                                       </a>
                                    </li>
                                    <li id="" class="navButton link" show-id="j_fit">
                                       <a href="javascript:void(0)">
                                          <div class="navButtonContent">
                                             <img src="images/s1.png">     
                                          <h5>Inner Lining                   <small>+$20</small></h5>
                                          </div>
                                       </a>
                                    </li>
                                    <li id="" class="navButton link" show-id="j_style">
                                       <a href="#">
                                          <div class="navButtonContent">
                                             <img src="images/s2.png">                                
                                             <h5>Buttons                   <small>+$10</small></h5>
                                          </div>
                                       </a>
                                    </li>
                                    <li id="" class="navButton link" show-id="j_style">
                                       <a href="#">
                                          <div class="navButtonContent">
                                             <img src="images/s2.png">                                
                                             <h5>Thread                   <small>+$10</small></h5>
                                          </div>
                                       </a>
                                    </li>
                                 <li id="" class="navButton link" show-id="j_style">
                                       <a href="#">
                                          <div class="navButtonContent">
                                             <img src="images/s2.png">                                
                                             <h5>Button Hole                 <small>+$5</small></h5>
                                          </div>
                                       </a>
                                    </li>
                           
                              
                                 </ul>
                        </div> 
                           <div class="innerOptions_style" id="AddOnFeature">
                              <!-- jacket contentstarts -->
                              <div id="mono_content" class="submenu2 open">
                                          <div id="" class="contra_page">
                                             <div class="content_row">
                                                <div class="monogram_window">
                                                   <h5>Select Position</h5>
                                                   <div class="product_img">
                                                      <div class="thumb_cover">
                                                         <div class="thumb_box">
                                                            <img class="appeared" src="images\img_suit\c1.png">
                                                         </div>
                                                         <div class="txt">6 and 1 close 1 </div>
                                                      </div>
                                                   </div>
                                                   <div class="product_img">
                                                      <div class="thumb_cover">
                                                         <div class="thumb_box">
                                                            <img class="appeared" src="images\img_suit\c2.png">
                                                         </div>
                                                         <div class="txt">6 and 1 close 1 </div>
                                                      </div>
                                                   </div>


                                                </div>
                                                <div class="monogram_window">
                                                   <h5>Type Monogram text</h5>
                                             
                                                   <div class="inset_text">
                                                      <div class="input_box"> <input type="text" class="form-control" id="formGroupExampleInput" placeholder="ABC"></div>
                                                      <div class="remove_text">
                                                         <img src="https://res.cloudinary.com/tdscloudcdn/tailori/plugin/images/close_white.png">
                                                      </div>
                                                   </div>
                                                   <ul class="filter_data" style="display: block;">
                                                      <li class="">
                                                         <span class="check"></span>
                                                         <div class="title">Arial</div>
                                                      </li>
                                                      <li class="">
                                                         <span class="check"></span>
                                                         <div class="title">Times New Roman</div>
                                                      </li>
                                                      <li class="">
                                                         <span class="check"></span>
                                                         <div class="title">Roboto</div>
                                                      </li>
                                                      <li class="">
                                                         <span class="check"></span>
                                                         <div class="title">Tencel</div>
                                                      </li>
                                                   </ul>
                                                </div>
                                                <div class="monogram_window">
                                                   <h5>Select Font Color</h5>
                                             
                                                   <ul class="filter_data" style="display: block;">
                                                      <li class="filter_color" rel="grey">
                                                         <span class="sp_active" id="grey"></span>
                                                      </li>
                                                      <li class="filter_color" rel="blue">
                                                         <span class="" id="blue"></span>
                                                      </li>
                                                      <li class="filter_color" rel="black">
                                                         <span class="" id="black"></span>
                                                      </li>
                                                      <li class="filter_color" rel="brown">
                                                         <span class="" id="brown"></span>
                                                      </li>
                                                      <li class="filter_color">
                                                         <span class="" id="green"></span>
                                                      </li>
                                                      <li class="filter_color">
                                                         <span class="" id="white"></span>
                                                      </li>
                                                      <li class="filter_color">
                                                         <span class="" id="purple"></span>
                                                      </li>
                                                      <li class="filter_color">
                                                         <span class="" id="orange"></span>
                                                      </li>
                                                   </ul>
                                                </div>
                                             </div>
                                             <button type="button" class="btn btn_changes apply_monogram">Apply</button>
                                          </div>
                              </div>
                              <div id="elbow_content" class="submenu2">
                                 <div class="content_row">
                                    <h5>Elbow Patch</h5>
                                    <div class="product_img">
                                       <div class="thumb_cover">
                                          <div class="thumb_box">
                                             <img class="appeared" src="images\img_suit\s_fit.png">
                                          </div>
                                          <div class="txt">2 Button </div>
                                       </div>
                                    </div>
                                    <div class="product_img">
                                       <div class="thumb_cover">
                                          <div class="thumb_box">
                                             <img class="appeared" src="images\img_suit\s_fit.png">
                                          </div>
                                          <div class="txt">1 Button</div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="content_row" id="contrasts">   

                                    <div class="inner_fabric" >
                                       <h5>Contrast</h5>
                                          <div class="heading_style">Filter Fabric <i class="fa fa-long-arrow-left fa-close filter_back" aria-hidden="true"></i></div>
                                             <div class="grey_header">

                                                                           <!--   <div class="subheader">50 fabrics</div> --> 
                                                                           <div class="hide_contra"><img src="https://res.cloudinary.com/tdscloudcdn/tailori/plugin/images/close_white.png"></div>
                                                </div> 
                                                                  <div class="modal_contrast col-md-6 col-xs-12"style="padding: 0;">   
                                                                     <div class="container-fluid contrast_fab" >

                                                                        <div class="" id="">
                                                                           <div style="position:relative; height:100%;">
                                                                              <div class="fabric_column">
                                                                                 <div class="image_cover">
                                                                                    <div class="image_box">
                                                                                       <span>
                                                                                       <img class="appeared" src="images\suit02.jpg">
                                                                                       </span>
                                                                                    </div>

                                                                                    <div class="fabric_text">
                                                                                       <div class="fab_price">
                                                                                          <span class="price">Rs- 1999</span>
                                                                                       </div>
                                                                                       <div class="box_title">
                                                                                          <p class="title">Summer checks</p>
                                                                                          <p class="detailed">
                                                                                             Cotton - Woven
                                                                                             <span class="cat_grp">
                                                                                                <!-- premium -->
                                                                                             </span>
                                                                                          </p>
                                                                                       </div>
                                                                                    </div>
                                                                                 </div>
                                                                              </div>
                                                                              <div class="fabric_column">
                                                                                 <div class="image_cover">
                                                                                    <div class="image_box">
                                                                                       <span>
                                                                                       <img class="appeared" src="images\suit03.jpg">
                                                                                       </span>
                                                                                    </div>

                                                                                    <div class="fabric_text">
                                                                                       <div class="fab_price">
                                                                                          <span class="price">Rs- 1999</span>
                                                                                       </div>
                                                                                       <div class="box_title">
                                                                                          <p class="title">Summer checks</p>
                                                                                          <p class="detailed">
                                                                                             Cotton - Woven
                                                                                             <span class="cat_grp">
                                                                                                <!-- premium -->
                                                                                             </span>
                                                                                          </p>
                                                                                       </div>
                                                                                    </div>
                                                                                 </div>
                                                                              </div>
                                                                              <div class="fabric_column">
                                                                                 <div class="image_cover">
                                                                                    <div class="image_box">
                                                                                       <span>
                                                                                       <img class="appeared" src="images\suit03.jpg">
                                                                                       </span>
                                                                                    </div>

                                                                                    <div class="fabric_text">
                                                                                       <div class="fab_price">
                                                                                          <span class="price">Rs- 1999</span>
                                                                                       </div>
                                                                                       <div class="box_title">
                                                                                          <p class="title">Summer checks</p>
                                                                                          <p class="detailed">
                                                                                             Cotton - Woven
                                                                                             <span class="cat_grp">
                                                                                                <!-- premium -->
                                                                                             </span>
                                                                                          </p>
                                                                                       </div>
                                                                                    </div>
                                                                                 </div>
                                                                              </div>
                                                                              <div class="fabric_column">
                                                                                 <div class="image_cover">
                                                                                    <div class="image_box">
                                                                                       <span>
                                                                                       <img class="appeared" src="images\suit03.jpg">
                                                                                       </span>
                                                                                    </div>

                                                                                    <div class="fabric_text">
                                                                                       <div class="fab_price">
                                                                                          <span class="price">Rs- 1999</span>
                                                                                       </div>
                                                                                       <div class="box_title">
                                                                                          <p class="title">Summer checks</p>
                                                                                          <p class="detailed">
                                                                                             Cotton - Woven
                                                                                             <span class="cat_grp">
                                                                                                <!-- premium -->
                                                                                             </span>
                                                                                          </p>
                                                                                       </div>
                                                                                    </div>
                                                                                 </div>
                                                                              </div>
                                                                              <div class="fabric_column">
                                                                                 <div class="image_cover">
                                                                                    <div class="image_box">
                                                                                       <span>
                                                                                       <img class="appeared" src="images\suit02.jpg">
                                                                                       </span>
                                                                                    </div>

                                                                                    <div class="fabric_text">
                                                                                       <div class="fab_price">
                                                                                          <span class="price">Rs- 1999</span>
                                                                                       </div>
                                                                                       <div class="box_title">
                                                                                          <p class="title">Summer checks</p>
                                                                                          <p class="detailed">
                                                                                             Cotton - Woven
                                                                                             <span class="cat_grp">
                                                                                                <!-- premium -->
                                                                                             </span>
                                                                                          </p>
                                                                                       </div>
                                                                                    </div>
                                                                                 </div>
                                                                              </div>
                                                                              <div class="fabric_column">
                                                                                 <div class="image_cover">
                                                                                    <div class="image_box">
                                                                                       <span>
                                                                                       <img class="appeared" src="images\suit03.jpg">
                                                                                       </span>
                                                                                    </div>

                                                                                    <div class="fabric_text">
                                                                                       <div class="fab_price">
                                                                                          <span class="price">Rs- 1999</span>
                                                                                       </div>
                                                                                       <div class="box_title">
                                                                                          <p class="title">Summer checks</p>
                                                                                          <p class="detailed">
                                                                                             Cotton - Woven
                                                                                             <span class="cat_grp">
                                                                                                <!-- premium -->
                                                                                             </span>
                                                                                          </p>
                                                                                       </div>
                                                                                    </div>
                                                                                 </div>
                                                                              </div>
                                                                              <div class="fabric_column">
                                                                                 <div class="image_cover">
                                                                                    <div class="image_box">
                                                                                       <span>
                                                                                       <img class="appeared" src="images\suit03.jpg">
                                                                                       </span>
                                                                                    </div>

                                                                                    <div class="fabric_text">
                                                                                       <div class="fab_price">
                                                                                          <span class="price">Rs- 1999</span>
                                                                                       </div>
                                                                                       <div class="box_title">
                                                                                          <p class="title">Summer checks</p>
                                                                                          <p class="detailed">
                                                                                             Cotton - Woven
                                                                                             <span class="cat_grp">
                                                                                                <!-- premium -->
                                                                                             </span>
                                                                                          </p>
                                                                                       </div>
                                                                                    </div>
                                                                                 </div>
                                                                              </div>
                                                                              <div class="fabric_column">
                                                                                 <div class="image_cover">
                                                                                    <div class="image_box">
                                                                                       <span>
                                                                                       <img class="appeared" src="images\suit03.jpg">
                                                                                       </span>
                                                                                    </div>

                                                                                    <div class="fabric_text">
                                                                                       <div class="fab_price">
                                                                                          <span class="price">Rs- 1999</span>
                                                                                       </div>
                                                                                       <div class="box_title">
                                                                                          <p class="title">Summer checks</p>
                                                                                          <p class="detailed">
                                                                                             Cotton - Woven
                                                                                             <span class="cat_grp">
                                                                                                <!-- premium -->
                                                                                             </span>
                                                                                          </p>
                                                                                       </div>
                                                                                    </div>
                                                                                 </div>
                                                                              </div> 
                                                                              <div class="fabric_column">
                                                                                 <div class="image_cover">
                                                                                    <div class="image_box">
                                                                                       <span>
                                                                                       <img class="appeared" src="images\suit02.jpg">
                                                                                       </span>
                                                                                    </div>

                                                                                    <div class="fabric_text">
                                                                                       <div class="fab_price">
                                                                                          <span class="price">Rs- 1999</span>
                                                                                       </div>
                                                                                       <div class="box_title">
                                                                                          <p class="title">Summer checks</p>
                                                                                          <p class="detailed">
                                                                                             Cotton - Woven
                                                                                             <span class="cat_grp">
                                                                                                <!-- premium -->
                                                                                             </span>
                                                                                          </p>
                                                                                       </div>
                                                                                    </div>
                                                                                 </div>
                                                                              </div>
                                                                              <div class="fabric_column">
                                                                                 <div class="image_cover">
                                                                                    <div class="image_box">
                                                                                       <span>
                                                                                       <img class="appeared" src="images\suit03.jpg">
                                                                                       </span>
                                                                                    </div>

                                                                                    <div class="fabric_text">
                                                                                       <div class="fab_price">
                                                                                          <span class="price">Rs- 1999</span>
                                                                                       </div>
                                                                                       <div class="box_title">
                                                                                          <p class="title">Summer checks</p>
                                                                                          <p class="detailed">
                                                                                             Cotton - Woven
                                                                                             <span class="cat_grp">
                                                                                                <!-- premium -->
                                                                                             </span>
                                                                                          </p>
                                                                                       </div>
                                                                                    </div>
                                                                                 </div>
                                                                              </div>
                                                                              <div class="fabric_column">
                                                                                 <div class="image_cover">
                                                                                    <div class="image_box">
                                                                                       <span>
                                                                                       <img class="appeared" src="images\suit03.jpg">
                                                                                       </span>
                                                                                    </div>

                                                                                    <div class="fabric_text">
                                                                                       <div class="fab_price">
                                                                                          <span class="price">Rs- 1999</span>
                                                                                       </div>
                                                                                       <div class="box_title">
                                                                                          <p class="title">Summer checks</p>
                                                                                          <p class="detailed">
                                                                                             Cotton - Woven
                                                                                             <span class="cat_grp">
                                                                                                <!-- premium -->
                                                                                             </span>
                                                                                          </p>
                                                                                       </div>
                                                                                    </div>
                                                                                 </div>
                                                                              </div>
                                                                              <div class="fabric_column">
                                                                                 <div class="image_cover">
                                                                                    <div class="image_box">
                                                                                       <span>
                                                                                       <img class="appeared" src="images\suit03.jpg">
                                                                                       </span>
                                                                                    </div>

                                                                                    <div class="fabric_text">
                                                                                       <div class="fab_price">
                                                                                          <span class="price">Rs- 1999</span>
                                                                                       </div>
                                                                                       <div class="box_title">
                                                                                          <p class="title">Summer checks</p>
                                                                                          <p class="detailed">
                                                                                             Cotton - Woven
                                                                                             <span class="cat_grp">
                                                                                                <!-- premium -->
                                                                                             </span>
                                                                                          </p>
                                                                                       </div>
                                                                                    </div>
                                                                                 </div>
                                                                              </div> 



                                                                           </div>
                                                                        </div>
                                                                     </div> 
                                                                  </div>
                                 </div>
                        
                                    
                                 </div>



                              </div>
                        
                              <!-- jacket content ends -->
                           
                           </div>
                        </div> 
                  
                  </div>    
            </div>           
            <!-- monogram ends -->  
       
         <!-- fabric info ends -->
         <!-- filter start  -->
         <div class="modal_filter"style="padding:0;">                   
            <div class="layout" id="layout">                   
                  <div class="heading_style">Filter Fabric <i class="fa fa-long-arrow-left fa-close filter_back" aria-hidden="true"></i></div>
                  <div class="grey_header">
                     <!-- <div class="subheader">50 fabrics</div> -->
                     <span class="reset">Reset</span>
                  </div>
                     <div class="content_row">
                        <div class="flip">COLOR<small style="float:right;"><i class="fa fa-angle-down"></i></small>
                        </div>
                              <ul class="slidein_out" style="display: block;">
                                 <li style="height: auto;">
                                    <ul class="filter_data" style="display: block;">
                                       <li class="filter_color" rel="grey">
                                          <span class="grey"></span>
                                       </li>  
                                       <li class="filter_color" rel="blue">
                                          <span class="blue"></span>
                                       </li>  
                                       <li class="filter_color" rel="black">
                                          <span class="black"></span>
                                       </li>  
                                       <li class="filter_color" rel="brown">
                                          <span class="brown"></span>
                                       </li>
                                       <li class="filter_color">
                                          <span class="green"></span>
                                       </li>  
                                       <li class="filter_color">
                                          <span class="white"></span>
                                       </li>  
                                       <li class="filter_color">
                                          <span class="purple"></span>
                                       </li>  
                                       <li class="filter_color">
                                          <span class="orange"></span>
                                       </li>    
                                    </ul>
                                 </li>
                              </ul>
                     </div>
                        <div class="content_row">
                           <div class="flip">MATERIAL<small style="float:right;"><i class="fa fa-angle-down"></i></small>
                           </div>
                              <ul class="slidein_out" style="display: none;">
                                 <li style="height: auto;">
                                    <ul class="filter_data" style="display: block;">
                                       <li class="">
                                          <span class="check"></span>
                                          <div class="title">Cotton</div>
                                       </li>  
                                       <li class="">
                                          <span class="check"></span>
                                          <div class="title">Blend</div>
                                       </li>  
                                       <li class="">
                                          <span class="check"></span>
                                          <div class="title">Linen</div>
                                       </li>  
                                       <li class="">
                                          <span class="check"></span>
                                          <div class="title">Tencel</div>
                                       </li>  
                                    </ul>
                                 </li>
                              </ul>
                        </div>
                        <div class="content_row">
                           <div class="flip">PATTERN<small style="float:right;"><i class="fa fa-angle-down"></i></small>
                           </div>
                              <ul class="slidein_out" style="display: none;">
                                 <li style="height: auto;">
                                    <ul class="filter_data" style="display: block;">
                                       <li class="">
                                          <span class="check"></span>
                                          <div class="title">Plain</div>
                                       </li>  
                                       <li class="">
                                          <span class="check"></span>
                                          <div class="title">Striped</div>
                                       </li>  
                                       <li class="">
                                          <span class="check"></span>
                                          <div class="title">Checked</div>
                                       </li>  
                                       <li class="">
                                          <span class="check"></span>
                                          <div class="title">Floral</div>
                                       </li>  
                                    </ul>
                                 </li>
                              </ul>
                        </div>
                        <div class="content_row">
                           <div class="flip">FABRIC TYPES<small style="float:right;"><i class="fa fa-angle-down"></i></small>
                           </div>
                              <ul class="slidein_out" style="display: none;">
                                 <li style="height: auto;">
                                    <ul class="filter_data" style="display: block;">
                                       <li class="">
                                          <span class="check"></span>
                                          <div class="title">Cotton</div>
                                       </li>  
                                       <li class="">
                                          <span class="check"></span>
                                          <div class="title">Blend</div>
                                       </li>  
                                       <li class="">
                                          <span class="check"></span>
                                          <div class="title">Linen</div>
                                       </li>  
                                       <li class="">
                                          <span class="check"></span>
                                          <div class="title">Tencel</div>
                                       </li>  
                                    </ul>
                                 </li>
                              </ul>
                        </div>
                        <div class="content_row">
                           <div class="flip">SEASON<small style="float:right;"><i class="fa fa-angle-down"></i></small>
                           </div>
                              <ul class="slidein_out" style="display: none;">
                                 <li style="height: auto;">
                                    <ul class="filter_data" style="display: block;">
                                       <li class="">
                                          <span class="check"></span>
                                          <div class="title">Spring</div>
                                       </li>  
                                       <li class="">
                                          <span class="check"></span>
                                          <div class="title">Summer</div>
                                       </li>  
                                       <li class="">
                                          <span class="check"></span>
                                          <div class="title">Autumn</div>
                                       </li>  
                                       <li class="">
                                          <span class="check"></span>
                                          <div class="title">Winter</div>
                                       </li>  
                                    </ul>
                                 </li>
                              </ul>
                        </div>
               <button type="button" class="btn btn_changes applyfilter">Apply</button>
               
            </div>
         </div>  
         <!-- filter ends -->
         <!-- measurement start  -->
         <div class="measure_option "style="padding: 0;">
         <div class="measure_layout">
         <div class="heading_style">COMPANY LOGO<i class="fa fa-long-arrow-left fa-close measure_back" aria-hidden="true"></i></div>
            <div class="static_box">
                  <div class="loged_out">                            
                        <div class="col-lg-4 col-xs-5" style="padding:0">
                        <div class="already_customer"><span class="icon desplace"><i class="fa fa-long-arrow-left fa-close measure_back" aria-hidden="true"></i></span>
                           <h4>MEASUREMENT</h4></div>
                        </div>
                        <div class="col-lg-8 col-xs-7 quest">                            
                              <a class="login_customer" href="javascript:;">
                                    Login
                              </a>
                                 <h6 class="">Have a Profile?</h6>
                        </div>
                  </div>
            </div>
            <div style="clear:both"></div>
            <div class="col-md-12 box_main">      
               <div class="col-md-12" style="display: block;">  
                  <div class="form-group">                   
                  <select class="form-control" id="sel1">
                     <option>Used Saved Profile</option>
                     <option>Profile b</option>
                     <option>Profile c</option>
                     <option>Profile d </option>
                  </select>
                  </div>
               </div>
            <div class="col-md-12"><p>OR</p></div>
               <div class="col-md-12">
               <div class="col-md-12 col-sm-12 body_measure box1">
                  <div class="m_left col-md-2 col-sm-12">                          
                  </div>
                  <div class="m_right col-md-10 col-sm-12">
                        <div class="m_head"> Use Body Measurements</div>
                        <div class="m_content">Use a  tape and get 
                           d. One way to create your custom size is to measure your body. </div>
                  </div>                      
               </div>
                  <div class="col-md-12 col-sm-12 box1">
                     <div class="m_left col-md-2 col-sm-12">                          
                     </div>
                     <div class="m_right col-md-10 col-sm-12">
                        <div class="m_head">Use an Android App</div>
                        <div class="m_content">Download Mirrorsize App from Android Play Store to get Accurate Measurements.</div>
                        <div class="m_icon"><img src="images/playstore.png"></div>
                  
                     </div>                      
                  </div>
                  <div class="col-md-12 col-sm-12 box1">
                     <div class="m_left col-md-2 col-sm-12">                          
                     </div>
                     <div class="m_right col-md-10 col-sm-12">
                        <div class="m_head">Measure A Shirt</div>
                        <div class="m_content">If you’re ordering a custom dress Garment, one way to create your custom size is to measure your body. </div>                           
                     </div>                      
                  </div>                              
               </div>
         </div>  
         <div class="col-md-12 additional_info">
         <h4 class="">Our Tailored Fit</h4>  
         <p>Our fit guarantee essentially eliminates the risk. </p>
         </div> 
         </div>            
         </div>
         <div class="modal_measure "style="padding: 0;">
   <div class="measure_layout col-md-10 col-sm-12">        
   
      <div class="measure_a col-sm-12 col-lg-6" style="padding: 0;">   
         <div class="heading_style">COMPANY LOGO1<i class="fa fa-long-arrow-left fa-close measure_back_first" aria-hidden="true"></i></div>
            <div class="static_box">
                     <div class="loged_out">                            
                        <div class="col-lg-4 col-xs-5" style="padding:0">
                           <div class="already_customer"><span class="icon desplace"><i class="fa fa-long-arrow-left fa-close measure_back_first" aria-hidden="true"></i></span>
                              <h4>ADD DETAIL</h4>
                           </div>
                        </div>
                        <!-- <div class="col-lg-4">STEP 01</div> -->
                     
                     </div>
            </div>
         <form>  
         <!--  <div class="header_m">Create Measurement</div>          -->        
            <div class="measurement_wrap">
               <div class="sel_unit">
                  <label class="label">Select</label>
                  <label class="radio-inline"><input type="radio" name="inch">inch</label>
                  <label class="radio-inline"> <input type="radio" name="inch">CM</label>
               </div>
               <div class="measure_box">
                  <div class="mesurement_line">
                     <div class="measure_head">
                           <label class="label label_edit">Biceps</label>
                     </div>
                     <div class="measure_number">               
                        <input type="text" class="place_val"  place-class="biceps" required="">
                        <span class="unit">in</span>
                     </div>
                  </div>
               </div>
               <div class="measure_box">
                  <div class="mesurement_line">
                     <div class="measure_head">
                           <label class="label label_edit">Chest</label>
                     </div>
                     <div class="measure_number">
            
                        <input type="text" class="place_val" place-class="chest" required="">
                        <span class="unit">in</span>
                     </div>
                  </div>
               </div>            
               <div class="measure_box">
                  <div class="mesurement_line">
                     <div class="measure_head">
                           <label class="label label_edit">Crotch</label>
                     </div>
                     <div class="measure_number">
                        <!-- <span class="place_val"></span> -->
                        <input type="text" class="place_val" required="">
                        <span class="unit">in</span>
                     </div>
                  </div>
               </div>
               <div class="measure_box">
                  <div class="mesurement_line">
                     <div class="measure_head">
                           <label class="label label_edit">Shoulder</label>
                     </div>
                     <div class="measure_number">
                        <!-- <span class="place_val"></span> -->
                        <input type="text" class="place_val" required="">
                        <span class="unit">in</span>
                     </div>
                  </div>
               </div>
               <div class="measure_box">
                  <div class="mesurement_line">
                     <div class="measure_head">
                           <label class="label label_edit">Hip</label>
                     </div>
                     <div class="measure_number">
                        <!-- <span class="place_val"></span> -->
                        <input type="text" class="place_val" required="">
                        <span class="unit">in</span>
                     </div>
                  </div>
               </div>
               <div class="measure_box">
                  <div class="mesurement_line">
                     <div class="measure_head">
                           <label class="label label_edit">Neck</label>
                     </div>
                     <div class="measure_number">
                        <!-- <span class="place_val"></span> -->
                        <input type="text" class="place_val" required="">
                        <span class="unit">in</span>
                     </div>
                  </div>
               </div>
               <div class="measure_box">
                  <div class="mesurement_line">
                     <div class="measure_head">
                           <label class="label label_edit">Shirt Length</label>
                     </div>
                     <div class="measure_number">
                        <!-- <span class="place_val"></span> -->
                        <input type="text" class="place_val" required="">
                        <span class="unit">in</span>
                     </div>
                  </div>
               </div>
               <div class="measure_box">
                  <div class="mesurement_line">
                     <div class="measure_head">
                           <label class="label label_edit">Wrist</label>
                     </div>
                     <div class="measure_number">
                        <!-- <span class="place_val"></span> -->
                        <input type="text" class="place_val" required="">
                        <span class="unit">in</span>
                     </div>
                  </div>
               </div>
               <div class="measure_box">
                  <div class="mesurement_line">
                     <div class="measure_head">
                           <label class="label label_edit">Sleeve</label>
                     </div>
                     <div class="measure_number">
                     
                        <input type="text" class="place_val" required="">
                        <span class="unit">in</span>
                     </div>
                  </div>
               </div>
               <div class="measure_box">
                  <div class="mesurement_line">
                     <div class="measure_head">
                           <label class="label label_edit">Stomach</label>
                     </div>
                     <div class="measure_number">
                        <input type="text" class="place_val" required="">
                        <span class="unit">in</span>
                     </div>
                  </div>
               </div>             
            </div>               
         </form>
            <button type="button" class="btn btn_changes measure_next">Next</button>
      </div>
      <div class="measure_b col-sm-12 col-lg-12" style="padding: 0;display: none;">
         <div class="heading_style">COMPANY LOGO2<i class="fa fa-long-arrow-left fa-close measure_back_second" aria-hidden="true"></i></div>
            <div class="static_box">
            <div class="loged_out">                            
                  <div class="col-lg-4 col-xs-5" style="padding:0">
                     <div class="already_customer"><span class="icon desplace"><i class="fa fa-long-arrow-left fa-close measure_back_second" aria-hidden="true"></i></span>
                              <h4>Select Posture</h4>
                     </div>
                  </div>
         

            </div>
         </div>
            <div class="content_row">
               <div class="flip active">MATERIAL<small style="float:right;"><i class="fa fa-angle-down"></i></small>
               </div>
                     <div class="slidein_out">
                                    <div class="product_img">
                                       <div class="thumb_cover">
                                          <div class="thumb_box">
                                             <img class="appeared" src="images\suit_icons.png">
                                          </div>
                                          <div class="opt_text">
                                             <span class="check"></span>
                                             <div class="txt">Slim </div>
                                          </div>
                                       
                                       </div>
                                    </div>
                                    <div class="product_img">
                                       <div class="thumb_cover">
                                          <div class="thumb_box">
                                             <img class="appeared" src="images\suit_icons.png">
                                          </div>
                                       <div class="opt_text">
                                             <span class="check"></span>
                                             <div class="txt">Average</div>
                                          </div>
                                       
                                       </div>
                                    </div>
                                    <div class="product_img">
                                       <div class="thumb_cover">
                                          <div class="thumb_box">
                                             <img class="appeared" src="images\suit_icons.png">
                                          </div>
                                          <div class="opt_text">
                                             <span class="check"></span>
                                             <div class="txt">Healthy </div>
                                          </div>
                                       </div>
                                    </div>
                                    
                     </div>
            </div> 
            <div class="content_row">
               <div class="flip active">MATERIAL<small style="float:right;"><i class="fa fa-angle-down"></i></small>
               </div>
                     <div class="slidein_out">
                                    <div class="product_img">
                                       <div class="thumb_cover">
                                          <div class="thumb_box">
                                             <img class="appeared" src="images\suit_icons.png">
                                          </div>
                                          <div class="opt_text">
                                             <span class="check"></span>
                                             <div class="txt">Slim </div>
                                          </div>
                                       
                                       </div>
                                    </div>
                                    <div class="product_img">
                                       <div class="thumb_cover">
                                          <div class="thumb_box">
                                             <img class="appeared" src="images\suit_icons.png">
                                          </div>
                                       <div class="opt_text">
                                             <span class="check"></span>
                                             <div class="txt">Average</div>
                                          </div>
                                       
                                       </div>
                                    </div>
                                    <div class="product_img">
                                       <div class="thumb_cover">
                                          <div class="thumb_box">
                                             <img class="appeared" src="images\suit_icons.png">
                                          </div>
                                          <div class="opt_text">
                                             <span class="check"></span>
                                             <div class="txt">Healthy </div>
                                          </div>
                                       </div>
                                    </div>
                                    
                     </div>
            </div>
            <div class="content_row">
               <div class="flip active">MATERIAL<small style="float:right;"><i class="fa fa-angle-down"></i></small>
               </div>
                     <div class="slidein_out">
                                    <div class="product_img">
                                       <div class="thumb_cover">
                                          <div class="thumb_box">
                                             <img class="appeared" src="images\suit_icons.png">
                                          </div>
                                          <div class="opt_text">
                                             <span class="check"></span>
                                             <div class="txt">Slim </div>
                                          </div>
                                       
                                       </div>
                                    </div>
                                    <div class="product_img">
                                       <div class="thumb_cover">
                                          <div class="thumb_box">
                                             <img class="appeared" src="images\suit_icons.png">
                                          </div>
                                       <div class="opt_text">
                                             <span class="check"></span>
                                             <div class="txt">Average</div>
                                          </div>
                                       
                                       </div>
                                    </div>
                                    <div class="product_img">
                                       <div class="thumb_cover">
                                          <div class="thumb_box">
                                             <img class="appeared" src="images\suit_icons.png">
                                          </div>
                                          <div class="opt_text">
                                             <span class="check"></span>
                                             <div class="txt">Healthy </div>
                                          </div>
                                       </div>
                                    </div>
                                    
                     </div>
            </div> 
            <div class="content_row">
               <div class="flip active">MATERIAL<small style="float:right;"><i class="fa fa-angle-down"></i></small>
               </div>
                     <div class="slidein_out">
                                    <div class="product_img">
                                       <div class="thumb_cover">
                                          <div class="thumb_box">
                                             <img class="appeared" src="images\suit_icons.png">
                                          </div>
                                          <div class="opt_text">
                                             <span class="check"></span>
                                             <div class="txt">Slim </div>
                                          </div>
                                       
                                       </div>
                                    </div>
                                    <div class="product_img">
                                       <div class="thumb_cover">
                                          <div class="thumb_box">
                                             <img class="appeared" src="images\suit_icons.png">
                                          </div>
                                       <div class="opt_text">
                                             <span class="check"></span>
                                             <div class="txt">Average</div>
                                          </div>
                                       
                                       </div>
                                    </div>
                                    <div class="product_img">
                                       <div class="thumb_cover">
                                          <div class="thumb_box">
                                             <img class="appeared" src="images\suit_icons.png">
                                          </div>
                                          <div class="opt_text">
                                             <span class="check"></span>
                                             <div class="txt">Healthy </div>
                                          </div>
                                       </div>
                                    </div>
                                    
                     </div>
            </div> 
            <button type="button" class="btn btn_changes apply_measure">Save & Add to Cart</button>   
      </div>
      
      <div class="help_vid col-lg-6">
         <div class="close_poupup">
            <img src="images/close_white.png">
         </div>
            <div class="video_content">
            
            <div class="text_cont">
               <div id="biceps" class="tab biceps" style="display: block;">
                  <h3>Tab1</h3>
                  <p>
                     Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary
                  </p>
                  <div class="video_frame">
                        dfsdfdfdfd
               </div>
               </div>
            

               <div id="chest" class="tab chest">
                  <h3>Tab2</h3>
                  <p>
                  A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my
                  </p>
                  <div class="video_frame">
                  dfsdfdfdfd
                  </div>
               </div>

               <div id="Crotch" class="tab crotch">
                  <h3>Crotch</h3>
                  <p>
                  The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens
                  </p>

                        <div class="video_frame">
                        dfsdfdf
                        </div>
               </div>                      
               </div>
         </div>
      </div>
   </div>   
   </div>
<!--contrast popup added-->
<div class="modal_fabric_contrast" >                
            <div class="heading_style" >Apply Contrast <div class="contrast_back" aria-hidden="true"><img src="https://res.cloudinary.com/tdscloudcdn/tailori/plugin/images/close_white.png"></div></div>   
            <div id="fabric_boxContrast">
               <div class="fabric_box">                    
               <div class="fabric_column">
                  <div class="image_cover">
                     <div class="image_box">
                        <span>
                        <img class="appeared" src="">
                        </span>
                     </div>
                     <div class="topright open_fab">
                         <img src="images\info_Icon.png">   
                     </div>
                     <div class="fabric_text">
                        <div class="fab_price">
                           <span class="price">Rs- 1999</span>
                        </div>
                        <div class="box_title">
                           <p class="title">Summer checks</p>
                           <p class="detailed">
                              Cotton - Woven
                              <span class="cat_grp">
                                 <!-- premium -->
                              </span>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="fabric_column">
                  <div class="image_cover">
                     <div class="image_box">
                        <span>
                        <img class="appeared" src="">
                        </span>
                     </div>
                     <div class="topright open_fab">
                       <img src="https://res.cloudinary.com/tdscloudcdn/tailori/plugin/images/info_Icon.png">   
                     </div>
                     <div class="fabric_text">
                        <div class="fab_price">
                           <span class="price">Rs- 1999</span>
                        </div>
                        <div class="box_title">
                           <p class="title">Summer checks</p>
                           <p class="detailed">
                              Cotton - Woven
                              <span class="cat_grp">
                                 <!-- premium -->
                              </span>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="fabric_column">
                  <div class="image_cover">
                     <div class="image_box">
                        <span>
                        <img class="appeared" src="">
                        </span>
                     </div>
                     <div class="topright open_fab">
                        <img src="images\info_Icon.png">   
                     </div>
                     <div class="fabric_text">
                        <div class="fab_price">
                           <span class="price">Rs- 1999</span>
                        </div>
                        <div class="box_title">
                           <p class="title">Summer checks</p>
                           <p class="detailed">
                              Cotton - Woven
                              <span class="cat_grp">
                                 <!-- premium -->
                              </span>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="fabric_column">
                  <div class="image_cover">
                     <div class="image_box">
                        <span>
                        <img class="appeared" src="">
                        </span>
                     </div>
                     <div class="topright open_fab">
                        <img src="images\info_Icon.png">   
                     </div>
                     <div class="fabric_text">
                        <div class="fab_price">
                           <span class="price">Rs- 1999</span>
                        </div>
                        <div class="box_title">
                           <p class="title">Summer checks</p>
                           <p class="detailed">
                              Cotton - Woven
                              <span class="cat_grp">
                                 <!-- premium -->
                              </span>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="fabric_column">
                  <div class="image_cover">
                     <div class="image_box">
                        <span>
                        <img class="appeared" src="">
                        </span>
                     </div>
                     <div class="topright open_fab">
                         <img src="https://res.cloudinary.com/tdscloudcdn/tailori/plugin/images/info_Icon.png">   
                     </div>
                     <div class="fabric_text">
                        <div class="fab_price">
                           <span class="price">Rs- 1999</span>
                        </div>
                        <div class="box_title">
                           <p class="title">Summer checks</p>
                           <p class="detailed">
                              Cotton - Woven
                              <span class="cat_grp">
                                 <!-- premium -->
                              </span>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="fabric_column">
                  <div class="image_cover">
                     <div class="image_box">
                        <span>
                        <img class="appeared" src="images\suit02.jpg">
                        </span>
                     </div>
                     <div class="topright open_fab">
                        <img src="https://res.cloudinary.com/tdscloudcdn/tailori/plugin/images/info_Icon.png">   
                     </div>
                     <div class="fabric_text">
                        <div class="fab_price">
                           <span class="price">Rs- 1999</span>
                        </div>
                        <div class="box_title">
                           <p class="title">Summer checks</p>
                           <p class="detailed">
                              Cotton - Woven
                              <span class="cat_grp">
                                 <!-- premium -->
                              </span>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="fabric_column">
                  <div class="image_cover">
                     <div class="image_box">
                        <span>
                        <img class="appeared" src="">
                        </span>
                     </div>
                     <div class="topright open_fab">
                        <img src="https://res.cloudinary.com/tdscloudcdn/tailori/plugin/images/info_Icon.png">   
                     </div>
                     <div class="fabric_text">
                        <div class="fab_price">
                           <span class="price">Rs- 1999</span>
                        </div>
                        <div class="box_title">
                           <p class="title">Summer checks</p>
                           <p class="detailed">
                              Cotton - Woven
                              <span class="cat_grp">
                                 <!-- premium -->
                              </span>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="fabric_column">
                  <div class="image_cover">
                     <div class="image_box">
                        <span>
                        <img class="appeared" src="">
                        </span>
                     </div>
                     <div class="topright open_fab">
                        <img src="images\info_Icon.png">                                 
                     </div>
                     <div class="fabric_text">
                        <div class="fab_price">
                           <span class="price">Rs- 1999</span>
                        </div>
                        <div class="box_title">
                           <p class="title">Summer checks</p>
                           <p class="detailed">
                              Cotton - Woven
                              <span class="cat_grp">
                                 <!-- premium -->
                              </span>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="fabric_column">
                  <div class="image_cover">
                     <div class="image_box">
                        <span>
                        <img class="appeared" src="">
                        </span>
                     </div>
                     <div class="topright open_fab">
                        <img src="images\info_Icon.png">                                 
                     </div>
                     <div class="fabric_text">
                        <div class="fab_price">
                           <span class="price">Rs- 1999</span>
                        </div>
                        <div class="box_title">
                           <p class="title">Summer checks</p>
                           <p class="detailed">
                              Cotton - Woven
                              <span class="cat_grp">
                                 <!-- premium -->
                              </span>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="fabric_column">
                  <div class="image_cover">
                     <div class="image_box">
                        <span>
                        <img class="appeared" src="images\suit05.jpg">
                        </span>
                     </div>
                     <div class="topright open_fab">
                        <img src="images\info_Icon.png">                                 
                     </div>
                     <div class="fabric_text">
                        <div class="fab_price">
                           <span class="price">Rs- 1999</span>
                        </div>
                        <div class="box_title">
                           <p class="title">Summer checks</p>
                           <p class="detailed">
                              Cotton - Woven
                              <span class="cat_grp">
                                 <!-- premium -->
                              </span>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
             </div>
            </div>
         </div> 

         <!-- popup ends -->
   </div>`
}

// let result = await getRequest("https://tsaas.textronic.online//v1/Swatches?key=63216231246&id=395D39A3E")
// console.log(`Test getRequest result : ${result}`)

// let postResult = await PostRequest("http://172.16.10.140:8080/tailori_latest/vendor_panel/public/api/generate-key",{})
// console.log(`Test PostRequest result : ${postResult}`)
