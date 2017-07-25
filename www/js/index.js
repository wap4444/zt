var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var ref='';
document.addEventListener("offline", onOffline, false);
function onOffline() {
    $('.cover-copy').html('Отсутсвует соединение с Интернет');
}
document.addEventListener("online", onOnlineEvent, false);
function onOnlineEvent() {
    $('.cover-copy').html('Приложение для жителей города Павлодар');  
     var ref = cordova.InAppBrowser.open('http://aksu.controlsoft.kz/project_ksk/index.html?push='+ipush, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
}
        
        
        
        
        rr=1;
function didReceiveRemoteNotificationCallBack(jsonData) {   
rr=2;
var ref = cordova.InAppBrowser.open(jsonData.payload.additionalData.ssylka, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
}

function didOpenRemoteNotificationCallBack(jsonData) {
rr=2;
//ref.close();
// Для Andori
var newdata = JSON.parse ( jsonData.notification.payload.additionalData );
//alert(newdata.ssylka);
var ref = cordova.InAppBrowser.open(newdata.ssylka , '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
 //  Для Iphone
 //  var ref = cordova.InAppBrowser.open(jsonData.notification.payload.additionalData.ssylka, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
}
 
        
        
        //Настройка ПУШЕЙ ДЛЯ АЙФОНА
        var iosSettings = {};
        iosSettings["kOSSettingsKeyAutoPrompt"] = false;
        iosSettings["kOSSettingsKeyInAppLaunchURL"] = true;

        //ПОДКЛЮЧЕНИЕ ПУШЕЙ
           window.plugins.OneSignal
          .startInit("af27a5e0-a45e-4041-8251-7d8e05c5b58d")
          .handleNotificationReceived(didReceiveRemoteNotificationCallBack)
          .handleNotificationOpened(didOpenRemoteNotificationCallBack)
              .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.None)
          .iOSSettings(iosSettings)
          .endInit();
        
        window.plugins.OneSignal.getIds(function(ids) {
                    ipush = ids.userId;
            if(rr==1)
            {
            var ref = cordova.InAppBrowser.open('http://aksu.controlsoft.kz/project_ksk/index.html?push='+ipush, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
            }       
            });
        

    }
};

app.initialize();
