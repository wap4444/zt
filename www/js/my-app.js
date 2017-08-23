// Initialize your app
var myApp = new Framework7({
	modalTitle: 'Жалоба',
		pushState: true,
		modalButtonCancel: 'Отмена',
		fastClicks: true,
		uniqueHistory: true,
modalPreloaderTitle: 'Загрузка...',
		
	onPageInit: function (myApp, page) {
    if (page.name === 'index') {
		if(localStorage.disclaimer==1){
			$('#disclaimerBlock').hide();
			$('#zhaloba').show();
			
		}else{
			$('#disclaimerBlock').show();
			$('#zhaloba').hide();
		}
		
	}

	}
});

// Export selectors engine
var $$ = Dom7;


// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});



$(document).on("click","#disclaimer", function() {
$('#disclaimerBlock').hide();
localStorage.disclaimer=1;
});

$(document).on("click","#zhalobaBtn", function() {
adres=$('#adres').val();
opis=$('#opis').val();
});

$(document).on("click","#addPhoto", function() {
navigator.camera.getPicture(onSuccess, onFail, { quality: 80,
destinationType: Camera.DestinationType.DATA_URL ,
correctOrientation:true,
sourceType: Camera.PictureSourceType.CAMERA,
encodingType: Camera.EncodingType.JPEG,
targetWidth:400,
targetHeight:400 });

function onSuccess(imageURI) {
$("#cam").attr("src","data:image/jpeg;base64," + imageURI);
// fotoUpload(imageURI);
}

function onFail(message) {
    alert('Failed because: ' + message);
}		
});

$(document).on("click","#shara", function() {
	nameShara=$(this).attr('name');
	textShara=$(this).attr('text');	
	imgSrc=$(this).attr('imgSrc');	
	window.plugins.socialsharing.share(null, null, 'http://araik.controlsoft.kz/admin/'+imgSrc, null);
});




function fotoUpload(imageData){
$.ajax({
      		type: "POST",
      		url: "http://araik.controlsoft.kz",
      		data: { image:imageData},
      		cache: false,
      		contentType: "application/x-www-form-urlencoded",
success: function (result) {}
});
};

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}
