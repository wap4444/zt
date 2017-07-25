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
var ref = cordova.InAppBrowser.open('http://aksu.controlsoft.kz/project_ksk/index.html', '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
       
    }
};

app.initialize();
