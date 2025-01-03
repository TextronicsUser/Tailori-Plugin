/* Auther :- Textronics Software Developer */
import { configPublicUrl, configServiceUrl, configApiUrl, addOnDetails} from './config.js';
import { getRequest, PostRequest } from './AjaxRequest.js';
import './jsrender.js'; 
import './min_jqueryAppend.js';//'./unmin_jquery.tds.js'; //'./min._jqueryAppend.js'
let product = "";
let FabricId = "";
let pluginObj = null;
let UserKeyId = '';
let addOnList, addOn, detail, DetailIdG 
let isContrasts = false;
export async function getDataFromUrl(options){
    let url_string = window.location.href;
    let url = new URL(url_string);
    addOn = addOnDetails;
    product = options.productName//"Shirt"//url.searchParams.get("pd");Shirt
    FabricId = options.fabricId//"8DEA63F00"//url.searchParams.get("fid"); FabricId
    product = findProductName(product);
    const serviceUrl = configApiUrl + "api/generate-key";
    let form = new FormData()
    // form.append("url","http://172.16.10.140:8080/tailori_latest/tailori/")
    form.append("url","https://tailori.textronic.in/")
    
    // let payload = {
    //     url:"http://172.16.10.140:8080/tailori_latest/tailori/"
    // }
    let readConfigFile = await PostRequest(serviceUrl, form, true);
    console.log(readConfigFile);
    let PublicUrl = "index.php?route=tailori/custom/index?fid=" + FabricId + "&pd=" + product;
    UserKeyId = readConfigFile.key;
    let configData = {
        ServiceUrl: configServiceUrl,
        PublicUrl: PublicUrl,
        Token: readConfigFile.key,
        AutoSpecific: false,//autoSpecific
        AutoAlignment: true,//autoAlignment
        AutoThread: false,//autoThread
        ImageSize: "500",//imageSize
        Product: product,
        Swatch: options.fabricId,
        Monogram: false,//Monogram
    };
    configData = sessionStorage.setItem('configuration', JSON.stringify(configData));
    initializedPlugin(product, options);
}
function initializedPlugin(product, options){
    var containerData = "#sidebarPrimaryNav";
    pluginObj = $('#sidebarPrimaryNav').tailori({
    Product: product,
    ProductTemplate: "#sidebarPrimaryNav",
    ImageSource: "#img_div",
    ServiceUrl: configServiceUrl,
    Key: UserKeyId,
    Swatch: FabricId,
    AutoSpecific: false,//autoSpecific
    AutoAlignment: false,//autoAlignment
    Monogram: false,//Monogram
    MonogramTemplate: "#MonogramTemplate",
    MonogramPlace: "#monogram",
    IsOptionVisible: true,
    defaultTheme : options.defaultTheme,
    OnCombineImageLoad : function() { },
    OnProductChange : function(productName) {
     addOnList = addOn[productName.split("-")[1]].toLowerCase().split(",");
      $("#product_list li span").each(function (index) {
        if (addOnList.includes($(this).text().trim().toLowerCase())) {
          $(this).parent().hide();
        }
      });
      $(".addmono").unbind("click");
      $(".addmono").on("click", function (e) {
        getAccentFeature(options.defaultTheme);
      });
      $("#layout")
        .find("#close_div")
        .on("click", function (e) {
          if (
            $(".addOn div").hasClass("activeline") &&
            $("#layout").find("#addOn").length < 1
          ) {
            $(".addOn").click();
          }
        });

      detail = $(containerData + " li:first").attr("data-tds-product");
      getFabrics(detail);

    
     },
    OnProductDetailChange : function(DetailId, optionId, FeatureId) { 
      DetailIdG = detail = DetailId;
    },
    OnFeatureChange : function() { },
    OnContrastChange : function() {
      isContrasts = true;
     },
    OnLibConfigChange : function() { },
    OnRenderImageChange : function() { },
    });

}

// function getOptions(DetailId, optionId, FeatureId) {
//   startLoader(); //pravesh
//   $(".loader").show(); // 30/11/2024 for late 
//   const storeUrl = window.location.hostname + window.location.pathname;

//   // Fetch non-selected attributes
//   // let elements, attributes;
//   // $.ajax({
//   //   url: `${appConfig.apiUrl}non-selected-attributes`,
//   //   type: "GET",
//   //   async: false,
//   //   data: { userId: user_id },
//   //   success: function (resp) {
//   //     elements = resp[0];
//   //     attributes = resp[1];
//   //     obj.CustomizeOptions(elements, attributes);
//   //   },
//   // });

//   // Fetch vendor package attribute
//   let featurePrice = [];
//   $.ajax({
//     url: `${appConfig.apiUrl}vendor-package-attribute`,
//     type: "GET",
//     async: false,
//     data: { elementId: DetailId, userId: user_id },
//     success: function (resp) {
//       featurePrice.push(JSON.parse(resp));
//     },
//   });

//   // Generate options
//   const Options = obj.Options(DetailId);
//   let txt4 = Options.map((option, index2) => {
//     const featuresHtml = option.Features.map((feature, index3) => {
//       let featureHtml = '';
//       const prices = featurePrice[0][option.Id] || [];
//       prices.forEach((priceObj) => {
//         if (priceObj.tailori_attribute_code === feature.Id) {
//           const styleName = priceObj.style_name.split('_')[0]; // Modified 10/10/2024
//           const resultFeaturePrice = priceObj.price || '';
//           featureHtml += `
//             <div class="col-md-4 Style_thmb addon-price" ${feature.DataAttr} id="${feature.Id}">
//               <div class="image_layout_style">
//                 <img src="${feature.ImageSource}" alt="" loading="lazy" class="imgthumbnail img-responsive loaded">
//                 <div class="style-info-box" style="margin-top: -5px; display: block;">
//                   <p>${styleName}</p>
//                   <span data-id="${priceObj.recordId}" data-element="${priceObj.element_id}">${resultFeaturePrice}</span><br>
//                   <div class="line"><i class="fa fa-check-circle"></i></div>
//                 </div>
//               </div>
//             </div>`;
//         }
//       });
//       return featureHtml;
//     }).join('');

//     return `
//       <div class="panel panel-default fabric-data">
//         <a data-toggle="collapse" class="optiondrop" data-parent="#accordion" href="#${index2}">
//           <div class="panel-heading">
//             <h4 class="panel-title">
//               <span class="txttype" style="float:left;">${option.Name}</span>
//               <span class="glyphicon glyphicon-plus" style="float:right;"></span>
//             </h4>
//           </div>
//         </a>
//         <div id="${index2}" class="panel-collapse collapse">
//           <div class="panel-body">
//             <ul class="sublayouts" style="cursor:pointer;">${featuresHtml}</ul>
//           </div>
//         </div>
//       </div>`;
//   }).join('');

//   // Generate contrasts
//   let txt3 = '';
//   const Contrasts = obj.Contrasts(DetailId);
//   const isContrastApplicable = !["elbow patch", "shoulder epaulette"].includes(DetailName.toLowerCase());

//   if (isContrastApplicable && Contrasts) {
//     txt3 = `
//       <div class="panel panel-default">
//         <a data-toggle="collapse" class="optiondrop" data-parent="#accordion" href="#contrast">
//           <div class="panel-heading">
//             <h4 class="panel-title">
//               <span class="txttype" style="float:left;">Contrasts</span>
//               <span class="glyphicon glyphicon-plus" style="float:right;"></span>
//             </h4>
//           </div>
//         </a>
//         <div id="contrast" class="panel-collapse collapse">
//           <div class="panel-body">
//             <ul class="sublayouts demo1" style="cursor:pointer;">
//               ${Contrasts.map((contrast) => `
//                 <div class="col-md-4 Style_thmb" ${contrast.DataAttr} id="${contrast.Id}">
//                   <div class="image_layout_contrast">
//                     <img src="${contrast.ImageSource}" alt="" loading="lazy" class="imgthumbnail img-responsive loaded">
//                     <div class="style-info-box" style="margin-top: -5px; display: block;">
//                       <p>${contrast.Name}</p>
//                       <div class="line"><i class="fa fa-check-circle"></i></div>
//                     </div>
//                   </div>
//                 </div>
//               `).join('')}
//             </ul>
//           </div>
//         </div>
//       </div>`;
//   }

//   $("#accordion").empty().html(txt4 + txt3);

//   $('[data-tds-element="' + FeatureId + '"]').find(".line").addClass("line1");
//   $("#layout").css("display", "block");

//   setTimeout(() => {
//     $(".optiondrop:first").click().find("span:last-child")
//       .removeClass("glyphicon glyphicon-plus").addClass("glyphicon glyphicon-minus");
//   }, 100);

//   $(".optiondrop").off("click").on("click", function () {
//     $(".optiondrop").not(this).find("span:last-child")
//       .removeClass("glyphicon glyphicon-minus").addClass("glyphicon glyphicon-plus");

//     $(this).find("span:last-child").toggleClass("glyphicon glyphicon-plus glyphicon glyphicon-minus");
//   });

//   $(".image_layout_style").on("click", function () {
//     startLoader(); //pravesh
//     $(".loader").show(); // 30/11/2024 for late
//     $(".image_layout_style").find(".line").removeClass("line1");
//     $(this).find(".line").addClass("line1");
//   });

//   $(".image_layout_contrast").on("click", function () {
//     $(".image_layout_contrast").find(".line").removeClass("line1");
//     $(this).find(".line").addClass("line1");
//   });
// }
function getAccentFeature(themeName) {
    let className = themeName;
    let addOnFeaturetxt = '';
    let addOnSubFeaturetxt = '';
    let featureData = pluginObj._ProductData;
    featureData.forEach((index, value)=>{
    
        if(pluginObj._ProductData[value].Contrasts.length > 0){
            addOnFeaturetxt += `<li id="${pluginObj._ProductData[value].Id}" class="navButton link" data-tds-product = ${((pluginObj._ProductData[value].DataAttr).trim().split('=')[1]).replace(/['"]/g, '')} show-id='${pluginObj._ProductData[value].Name}'>`
            addOnFeaturetxt +=     `<a href="javascript:void(0)">`
            addOnFeaturetxt +=        `<div class="navButtonContent">`
            addOnFeaturetxt +=            `<img src="${pluginObj._ProductData[value].ImageSource}">`     
            addOnFeaturetxt +=                `<h5>${pluginObj._ProductData[value].Name}<small> +$35 </small> </h5>`
            addOnFeaturetxt +=        `</div>`
            addOnFeaturetxt +=    `</a>`
    
            
            if(pluginObj._ProductData[value].Contrasts.length > 0) {
                let accentContras = pluginObj._ProductData[value].Contrasts;

                if (className === 'theme_A') {
                 
                  addOnFeaturetxt += `<div id="${pluginObj._ProductData[value].Id}" class="accordion-options">`;  // Container for Accordion
                  addOnFeaturetxt += `<div class="content_row">`;
          
                  // Loop through the contrast options (features)
                  accentContras.forEach((contrast, index) => {
                    addOnFeaturetxt += `<div class="product_img" data-tds-contrast="${contrast.Id}" data-tds-key="${pluginObj._ProductData[value].Id}" id="${contrast.Id}">`;
                    addOnFeaturetxt += `<div class="thumb_cover">`;
                    addOnFeaturetxt += `<div class="thumb_box"><img class="appeared" src="${contrast.ImageSource}" alt="Image ${index + 1}"></div>`;
                    addOnFeaturetxt += `<div class="txt">${contrast.Name}</div>`;
                    addOnFeaturetxt += `</div></div>`;
                  });
          
                  addOnFeaturetxt += `</div></div>`;
                }
                addOnFeaturetxt += `</li>`

                if (className === 'theme_B') {                  
                  addOnSubFeaturetxt += `<div id="${pluginObj._ProductData[value].Id}" class="submenu2"">`
                    addOnSubFeaturetxt +=	`<div id="" class="contra_page">`
                    addOnSubFeaturetxt +=		`<div class="content_row">`
                    addOnSubFeaturetxt +=			`<div class="monogram_window"><h5>Select Position</h5>`
                    accentContras.forEach((index1, value1)=>{
                    addOnSubFeaturetxt +=				`<div class="product_img" data-tds-contrast="${accentContras[value1].Id}" data-tds-key ="${pluginObj._ProductData[value].Id}">`
                    addOnSubFeaturetxt +=					`<div class="thumb_cover">`
                    addOnSubFeaturetxt +=						`<div class="thumb_box">
                                                                    <img class="appeared" src="${accentContras[value1].ImageSource}">`
                    addOnSubFeaturetxt += 					    `</div>`
                    addOnSubFeaturetxt +=					    `<div class="txt">${accentContras[value1].Name}</div>`
                    addOnSubFeaturetxt +=				    `</div>`
                    addOnSubFeaturetxt +=			    `</div>`
                     });
                    addOnSubFeaturetxt +=		    `</div>`
                    addOnSubFeaturetxt += 	    `</div>`
                    addOnSubFeaturetxt +=		`<button type="button" class="btn btn_changes apply_monogram">Apply</button>`
                    addOnSubFeaturetxt +=	`</div>`
                    addOnSubFeaturetxt += `</div>`
                }
              }
            }

    })

    $('#sidebarSecondaryNav').empty().append(addOnFeaturetxt);  
    if (className === 'theme_B') {
      // Clear existing content and append the new data for theme_B
      $('#AddOnFeature').empty().append(addOnSubFeaturetxt);  // For theme_B, bind data to AddOnFeature
  
      // Add 'active' class to the first <li> in sidebarSecondaryNav
      $('#sidebarSecondaryNav li').first().addClass('active'); //added first open tanmay
  
      // Add 'submenu-open' class to the first submenu in AddOnFeature
      $('#AddOnFeature .submenu2').first().addClass('submenu-open'); //added first open tanamy
    }

    // $('#sidebarSecondaryNav').empty().append(addOnFeaturetxt);
    // $('#AddOnFeature').empty().append(addOnSubFeaturetxt);

}
async function getFabrics(id){
   let Url = `${configServiceUrl}/v1/Swatches?key=${UserKeyId}&id=${id}`;
    let fabrics = await getRequest(Url);
    appendFabrics(fabrics);
}
 function appendFabrics(fabrics){
    
    let fabricHTML = "";
    for(const index in fabrics){
    const {ThumbPath,Price,Name,Id} = fabrics[index]
    fabricHTML += `<div class="fabric_column" data-description id=${Id} name="${Name}">
    <div class="image_cover">
       <div class="image_box">
          <span>
          <img class="appeared" src="${ThumbPath}" loading=lazy>
          </span>
       </div>
       <div class="topright open_fab">
          <img src="https://res.cloudinary.com/tdscloudcdn/tailori/plugin/images/info_Icon.png" loading=lazy>                                 
       </div>
       <div class="fabric_text">
          <div class="fab_price">
             <span class="price">Rs-${Price}</span>
          </div>
          <div class="box_title">
             <p class="title">${Name}</p>
             <p class="detailed">
                Cotton - Woven
                <span class="cat_grp">
                   <!-- premium -->
                </span>
             </p>
          </div>
       </div>
    </div>
 </div>`
    }
    const TotalFabrics = fabrics?.length || 0;
    $(".count p").text(`Total : ${TotalFabrics}`)
    $("#fabric_box").empty().append(fabricHTML)
 }
function findProductName(product){
    switch(product){
        case "Women Shirt" : product = product.includes("Women Shirt") ? product = "Women-Women_Shirt" : '';
            break;
        case "Women shirt" : product = product.includes("Women shirt") ? "Women-Women_Shirt" : "";
            break;
        case "Women_shirt" : product = product.includes("Women_shirt") ? "Women-Women_Shirt" : "";
             break;
        case "Shirt" : product = product.includes("Shirt") ? "Men-Shirt" : "";
            break;
        case "Trouser" : product = product.includes("Trouser") ? "Men-Trouser" : "";
            break;  
        case "Jacket" : product = product.includes("Jacket") ? "Men-Jacket" : "";
            break;
        case "Suit" : product = product.includes("Suit") ? "Men-Suit" : "";
            break;
        case "Bundy" : product = product.includes("Bundy") ? "Men-Bundy" : "";
            break;
        case "Bandhgala" : product = product.includes("Bandhgala") ? "Men-Bandhgala" : "";
            break;
        case "Waistcoat" : product = product.includes("Waistcoat") ? "Men-Waistcoat" : "";
            break;
        default :
            product = "";
        
    }
    return product;
}
function appendContrastFabric(){
let fabdata = pluginObj._ContrastData;
let contrastFabrictxt = '';
contrastFabrictxt = `<div class="fabric_box">`
fabdata.forEach((index,value)=>{
  contrastFabrictxt += `<div class="fabric_column" id="${fabdata[value].Id}">`
  contrastFabrictxt +=  `<div class="image_cover">`
contrastFabrictxt +=      `<div class="image_box"><span><img class="appeared" src="${fabdata[value].ThumbPath}"></span>`
contrastFabrictxt +=      `</div>`
contrastFabrictxt +=      `<div class="topright open_fab"> <img src="https://res.cloudinary.com/tdscloudcdn/tailori/plugin/images/info_Icon.png"> </div>`
contrastFabrictxt +=      `<div class="fabric_text">`
contrastFabrictxt +=       `<div class="fab_price"><span class="price">Rs- ${fabdata[value].Price}</span> </div>`
contrastFabrictxt +=       `<div class="box_title"><p class="title">${fabdata[value].Name}</p><p class="detailed">Cotton - Woven <span class="cat_grp"></span></p></div>`
contrastFabrictxt +=      `</div>`
  contrastFabrictxt +=  `</div>`
  contrastFabrictxt += `</div>`
});
contrastFabrictxt += `</div>`;
$('#fabric_boxContrast').empty().append(contrastFabrictxt);
}

$('body').on('click', '#fabric_boxContrast div', function(e){
  //console.log($(this));
  e.stopPropagation();
  let contrastFabricId = $(this).parent().parent().attr('Id');
  pluginObj.ContrastTexture(contrastFabricId);
});

$('body').on('click', '#monogram .product_img', function(){
console.log($(this));
appendContrastFabric();
});
$('body').on('click', '.staticList li',function(){
$(".fabrics_style, .style_panel, .monogram").hide();
let panel_array = ['fabrics_style', 'style_panel', 'monogram'];
let panelName = parseInt($(this).attr('index'));
$('.'+ panel_array[panelName]).show();
$('.staticList li').removeClass('active');
$(this).addClass('active');
});

$('body').on('click', '#sidebarPrimaryNav li', function(e) {
    const isThemeB = $(this).closest('#theme_B').length > 0;
    const isThemeA = $(this).closest('#theme_A').length > 0;
  
    // For theme_B (submenu)
    if (isThemeB) {
      console.log('themeB');
      
      // Check if the same <li> is clicked again, do nothing if it's already active
      if ($(this).hasClass('active')) {
        console.log('Same li clicked in themeB, doing nothing.');
        return;  // Exit early
      }
      
  
      // Remove active class from all li elements in theme_B
      $('#theme_B #sidebarPrimaryNav li').removeClass('active');
      $(this).addClass('active');  // Add active class to the clicked li
  
      let productId = $(this).data('tdsProduct');
      let $submenuDiv = $('#submenu div#' + productId);
  
      // Toggle submenu open/close
      $submenuDiv.toggleClass('submenu-open').stop().slideToggle();
      //$submenuDiv.find('> * > *:eq(0) > * > *').first().addClass('active');
      // Close other submenus
      $('#theme_B #sidebarPrimaryNav li').not(this).each(function() {
        let otherProductId = $(this).data('tdsProduct');
        $('#submenu div#' + otherProductId).removeClass('submenu-open').slideUp();
      });
      if(!$submenuDivB.find('> * > *:first > * > *:first').hasClass('active')){
        $submenuDivB.find('> * > *:first > * > *:first').addClass('active');
      }
       // Ensure other submenus are closed
  

    }
  
    // For theme_A (accordion)
    if (isThemeA) {
      console.log('themeA');
      
      // Prevent clicks on accordion options (don't trigger the main <li> click)
      if ($(e.target).closest('.accordion-options').length) return;
  
      // Remove active class from all li elements in theme_A
      $('#theme_A #sidebarPrimaryNav li.active').removeClass('active');
      $(this).addClass('active');  // Add active class to the clicked li
      //$('#sidebarPrimaryNav li.active .accordion-options .product_img div.active').removeClass('active')
  
      let $accordionDiv = $(this).find(".accordion-options");  
      // Toggle accordion open/close
      $(".accordion-options").not($accordionDiv).slideUp().removeClass("open");
      $accordionDiv.slideToggle().toggleClass("open");
      if($accordionDiv.find('> * > * > * > *.active').length == 0){
        $accordionDiv.find('> * > *:first > * > *:first').addClass('active');
      }
      //$accordionDiv.find('> * > *:eq(0) > * > *').first().addClass('active');
    }
  });
  $('body').on('click', '#sidebarSecondaryNav li', function(e) {
    const isThemeB = $(this).closest('#theme_B').length > 0;
    const isThemeA = $(this).closest('#theme_A').length > 0;
  
    // For theme_B (submenu)
    if (isThemeB) {
      console.log('themeB');
      
      // Check if the same <li> is clicked again, do nothing if it's already active
      if ($(this).hasClass('active')) {
        console.log('Same li clicked in themeB, doing nothing.');
        return;  // Exit early
      }
  
      // Remove active class from all li elements in theme_B
      $('#theme_B #sidebarSecondaryNav li').removeClass('active');
      $(this).addClass('active');  // Add active class to the clicked li
  
      let productId = $(this).data('tdsProduct');
      let $submenuDivB = $('#AddOnFeature div#' + productId);
  
      // Toggle submenu open/close
      $submenuDivB.toggleClass('submenu-open').stop().slideToggle();  
      //$submenuDiv.find('> * > *:eq(0) > * > *').first().addClass('active');
      // Close other submenus
      if(!$submenuDivB.find('> * > *:first > * > *:first').hasClass('active')){
        $submenuDivB.find('> * > *:first > * > *:first').addClass('active');
      }
      $('#theme_B #sidebarSecondaryNav li').not(this).each(function() {

        let otherProductId = $(this).data('tdsProduct');
        $('#AddOnFeature div#' + otherProductId).removeClass('submenu-open').slideUp();
      });
    }
  
    // For theme_A (accordion)
    if (isThemeA) {
      console.log('themeA');      
      // Prevent clicks on accordion options (don't trigger the main <li> click)
      if ($(e.target).closest('.accordion-options').length) return;
  
      // Remove active class from all li elements in theme_A
      $('#theme_A #sidebarSecondaryNav li').removeClass('active');
      //$('#sidebarPrimaryNav li.active .accordion-options .product_img div.active').removeClass('active')
      $(this).addClass('active');  // Add active class to the clicked li
      
      let $accordionDiv = $(this).find(".accordion-options");
  
      // Toggle accordion open/close
      $(".accordion-options").not($accordionDiv).slideUp().removeClass("open");
      $accordionDiv.slideToggle().toggleClass("open");
      if($accordionDiv.find('> * > * > * > *.active').length == 0){
        $accordionDiv.find('> * > *:first > * > *:first').addClass('active');
      }
      //$accordionDiv.find('> * > *:eq(0) > * > *').first().addClass('active');
    }
  });
   

$(document).on('click', '.accordion-options *', function(e) {
    // e.stopPropagation(); Prevent clicks inside the accordion from affecting the parent
  });
$('body').on('click', '.pagehold .thumb_box', function(e) {
   // e.stopPropagation();
    var $accordionOptions = $(this).closest('.pagehold li.active')//$(this).closest('.pagehold'); 
    $accordionOptions.find('.thumb_box').removeClass('active');
    $(this).addClass('active');
});
$('body').on('click','#fabric_box > div', function(){
   // console.log($(this));
    let fabId = $(this).attr('Id');
    // if(isContrasts){
    //   // isContrasts = false;
    //   pluginObj.ContrastTexture(fabId);
    // } else {
      pluginObj.Texture(fabId);
    // }
})

$('body').on('click', '#monogram .thumb_box', function(e) {
  $(".modal_fabric_contrast").css({'display': 'block'});  
})

$("body").on("click", ".modal_fabric_contrast .contrast_back", function () {
  $(".modal_fabric_contrast").css({'display': 'none'});      
});
