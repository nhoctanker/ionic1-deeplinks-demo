(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var ng1_1 = require('./ng1');
var DEVICE_READY_TIMEOUT = 2000;
var actionsheet_1 = require('./plugins/actionsheet');
exports.ActionSheet = actionsheet_1.ActionSheet;
var admob_1 = require('./plugins/admob');
exports.AdMob = admob_1.AdMob;
var appavailability_1 = require('./plugins/appavailability');
exports.AppAvailability = appavailability_1.AppAvailability;
var apprate_1 = require('./plugins/apprate');
exports.AppRate = apprate_1.AppRate;
var appversion_1 = require('./plugins/appversion');
exports.AppVersion = appversion_1.AppVersion;
var badge_1 = require('./plugins/badge');
exports.Badge = badge_1.Badge;
var background_geolocation_1 = require('./plugins/background-geolocation');
exports.BackgroundGeolocation = background_geolocation_1.BackgroundGeolocation;
var backgroundmode_1 = require('./plugins/backgroundmode');
exports.BackgroundMode = backgroundmode_1.BackgroundMode;
var barcodescanner_1 = require('./plugins/barcodescanner');
exports.BarcodeScanner = barcodescanner_1.BarcodeScanner;
var base64togallery_1 = require('./plugins/base64togallery');
exports.Base64ToGallery = base64togallery_1.Base64ToGallery;
var batterystatus_1 = require('./plugins/batterystatus');
exports.BatteryStatus = batterystatus_1.BatteryStatus;
var ble_1 = require('./plugins/ble');
exports.BLE = ble_1.BLE;
var bluetoothserial_1 = require('./plugins/bluetoothserial');
exports.BluetoothSerial = bluetoothserial_1.BluetoothSerial;
var calendar_1 = require('./plugins/calendar');
exports.Calendar = calendar_1.Calendar;
var camera_1 = require('./plugins/camera');
exports.Camera = camera_1.Camera;
var card_io_1 = require('./plugins/card-io');
exports.CardIO = card_io_1.CardIO;
var clipboard_1 = require('./plugins/clipboard');
exports.Clipboard = clipboard_1.Clipboard;
var contacts_1 = require('./plugins/contacts');
exports.Contacts = contacts_1.Contacts;
var datepicker_1 = require('./plugins/datepicker');
exports.DatePicker = datepicker_1.DatePicker;
var dbmeter_1 = require('./plugins/dbmeter');
exports.DBMeter = dbmeter_1.DBMeter;
var deeplinks_1 = require('./plugins/deeplinks');
exports.Deeplinks = deeplinks_1.Deeplinks;
var device_1 = require('./plugins/device');
exports.Device = device_1.Device;
var deviceaccounts_1 = require('./plugins/deviceaccounts');
exports.DeviceAccounts = deviceaccounts_1.DeviceAccounts;
var devicemotion_1 = require('./plugins/devicemotion');
exports.DeviceMotion = devicemotion_1.DeviceMotion;
var deviceorientation_1 = require('./plugins/deviceorientation');
exports.DeviceOrientation = deviceorientation_1.DeviceOrientation;
var diagnostic_1 = require('./plugins/diagnostic');
exports.Diagnostic = diagnostic_1.Diagnostic;
var dialogs_1 = require('./plugins/dialogs');
exports.Dialogs = dialogs_1.Dialogs;
var emailcomposer_1 = require('./plugins/emailcomposer');
exports.EmailComposer = emailcomposer_1.EmailComposer;
var facebook_1 = require('./plugins/facebook');
exports.Facebook = facebook_1.Facebook;
var file_1 = require('./plugins/file');
exports.File = file_1.File;
var filetransfer_1 = require('./plugins/filetransfer');
exports.Transfer = filetransfer_1.Transfer;
var flashlight_1 = require('./plugins/flashlight');
exports.Flashlight = flashlight_1.Flashlight;
var geolocation_1 = require('./plugins/geolocation');
exports.Geolocation = geolocation_1.Geolocation;
var globalization_1 = require('./plugins/globalization');
exports.Globalization = globalization_1.Globalization;
var google_plus_1 = require('./plugins/google-plus');
exports.GooglePlus = google_plus_1.GooglePlus;
var googlemaps_1 = require('./plugins/googlemaps');
var googleanalytics_1 = require('./plugins/googleanalytics');
exports.GoogleAnalytics = googleanalytics_1.GoogleAnalytics;
var hotspot_1 = require('./plugins/hotspot');
exports.Hotspot = hotspot_1.Hotspot;
var imagepicker_1 = require('./plugins/imagepicker');
exports.ImagePicker = imagepicker_1.ImagePicker;
var inappbrowser_1 = require('./plugins/inappbrowser');
exports.InAppBrowser = inappbrowser_1.InAppBrowser;
var insomnia_1 = require('./plugins/insomnia');
exports.Insomnia = insomnia_1.Insomnia;
var keyboard_1 = require('./plugins/keyboard');
exports.Keyboard = keyboard_1.Keyboard;
var launchnavigator_1 = require('./plugins/launchnavigator');
exports.LaunchNavigator = launchnavigator_1.LaunchNavigator;
var localnotifications_1 = require('./plugins/localnotifications');
exports.LocalNotifications = localnotifications_1.LocalNotifications;
var media_1 = require('./plugins/media');
exports.MediaPlugin = media_1.MediaPlugin;
var network_1 = require('./plugins/network');
exports.Network = network_1.Network;
exports.Connection = network_1.Connection;
var push_1 = require('./plugins/push');
exports.Push = push_1.Push;
var safari_view_controller_1 = require('./plugins/safari-view-controller');
exports.SafariViewController = safari_view_controller_1.SafariViewController;
var screenshot_1 = require('./plugins/screenshot');
exports.Screenshot = screenshot_1.Screenshot;
var sms_1 = require('./plugins/sms');
exports.SMS = sms_1.SMS;
var socialsharing_1 = require('./plugins/socialsharing');
exports.SocialSharing = socialsharing_1.SocialSharing;
var spinnerdialog_1 = require('./plugins/spinnerdialog');
exports.SpinnerDialog = spinnerdialog_1.SpinnerDialog;
var splashscreen_1 = require('./plugins/splashscreen');
exports.Splashscreen = splashscreen_1.Splashscreen;
var sqlite_1 = require('./plugins/sqlite');
exports.SQLite = sqlite_1.SQLite;
var statusbar_1 = require('./plugins/statusbar');
exports.StatusBar = statusbar_1.StatusBar;
var toast_1 = require('./plugins/toast');
exports.Toast = toast_1.Toast;
var touchid_1 = require('./plugins/touchid');
exports.TouchID = touchid_1.TouchID;
var vibration_1 = require('./plugins/vibration');
exports.Vibration = vibration_1.Vibration;
var webintent_1 = require('./plugins/webintent');
exports.WebIntent = webintent_1.WebIntent;
__export(require('./plugins/googlemaps'));
__export(require('./plugins/plugin'));
// Window export to use outside of a module loading system
window['IonicNative'] = {
    ActionSheet: actionsheet_1.ActionSheet,
    AdMob: admob_1.AdMob,
    AppAvailability: appavailability_1.AppAvailability,
    AppRate: apprate_1.AppRate,
    AppVersion: appversion_1.AppVersion,
    Badge: badge_1.Badge,
    BackgroundGeolocation: background_geolocation_1.BackgroundGeolocation,
    BarcodeScanner: barcodescanner_1.BarcodeScanner,
    Base64ToGallery: base64togallery_1.Base64ToGallery,
    BatteryStatus: batterystatus_1.BatteryStatus,
    BLE: ble_1.BLE,
    BluetoothSerial: bluetoothserial_1.BluetoothSerial,
    Calendar: calendar_1.Calendar,
    Camera: camera_1.Camera,
    CardIO: card_io_1.CardIO,
    Clipboard: clipboard_1.Clipboard,
    Connection: network_1.Connection,
    Contacts: contacts_1.Contacts,
    DatePicker: datepicker_1.DatePicker,
    DBMeter: dbmeter_1.DBMeter,
    Deeplinks: deeplinks_1.Deeplinks,
    Device: device_1.Device,
    DeviceAccounts: deviceaccounts_1.DeviceAccounts,
    DeviceMotion: devicemotion_1.DeviceMotion,
    DeviceOrientation: deviceorientation_1.DeviceOrientation,
    Dialogs: dialogs_1.Dialogs,
    Diagnostic: diagnostic_1.Diagnostic,
    EmailComposer: emailcomposer_1.EmailComposer,
    Facebook: facebook_1.Facebook,
    File: file_1.File,
    Flashlight: flashlight_1.Flashlight,
    Geolocation: geolocation_1.Geolocation,
    Globalization: globalization_1.Globalization,
    GooglePlus: google_plus_1.GooglePlus,
    GoogleMap: googlemaps_1.GoogleMap,
    GoogleAnalytics: googleanalytics_1.GoogleAnalytics,
    Hotspot: hotspot_1.Hotspot,
    ImagePicker: imagepicker_1.ImagePicker,
    InAppBrowser: inappbrowser_1.InAppBrowser,
    Keyboard: keyboard_1.Keyboard,
    LaunchNavigator: launchnavigator_1.LaunchNavigator,
    LocalNotifications: localnotifications_1.LocalNotifications,
    MediaPlugin: media_1.MediaPlugin,
    Network: network_1.Network,
    Push: push_1.Push,
    SafariViewController: safari_view_controller_1.SafariViewController,
    Screenshot: screenshot_1.Screenshot,
    SMS: sms_1.SMS,
    SocialSharing: socialsharing_1.SocialSharing,
    SpinnerDialog: spinnerdialog_1.SpinnerDialog,
    Splashscreen: splashscreen_1.Splashscreen,
    SQLite: sqlite_1.SQLite,
    StatusBar: statusbar_1.StatusBar,
    Toast: toast_1.Toast,
    TouchID: touchid_1.TouchID,
    Transfer: filetransfer_1.Transfer,
    Vibration: vibration_1.Vibration,
    WebIntent: webintent_1.WebIntent
};
ng1_1.initAngular1(window['IonicNative']);
// To help developers using cordova, we listen for the device ready event and
// log an error if it didn't fire in a reasonable amount of time. Generally,
// when this happens, developers should remove and reinstall plugins, since
// an inconsistent plugin is often the culprit.
var before = +new Date;
var didFireReady = false;
document.addEventListener('deviceready', function () {
    console.log('DEVICE READY FIRED AFTER', (+new Date - before), 'ms');
    didFireReady = true;
});
setTimeout(function () {
    if (!didFireReady && window.cordova) {
        console.warn('Native: deviceready did not fire within ' + DEVICE_READY_TIMEOUT + 'ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.');
    }
}, DEVICE_READY_TIMEOUT);

},{"./ng1":2,"./plugins/actionsheet":3,"./plugins/admob":4,"./plugins/appavailability":5,"./plugins/apprate":6,"./plugins/appversion":7,"./plugins/background-geolocation":8,"./plugins/backgroundmode":9,"./plugins/badge":10,"./plugins/barcodescanner":11,"./plugins/base64togallery":12,"./plugins/batterystatus":13,"./plugins/ble":14,"./plugins/bluetoothserial":15,"./plugins/calendar":16,"./plugins/camera":17,"./plugins/card-io":18,"./plugins/clipboard":19,"./plugins/contacts":20,"./plugins/datepicker":21,"./plugins/dbmeter":22,"./plugins/deeplinks":23,"./plugins/device":24,"./plugins/deviceaccounts":25,"./plugins/devicemotion":26,"./plugins/deviceorientation":27,"./plugins/diagnostic":28,"./plugins/dialogs":29,"./plugins/emailcomposer":30,"./plugins/facebook":31,"./plugins/file":32,"./plugins/filetransfer":33,"./plugins/flashlight":34,"./plugins/geolocation":35,"./plugins/globalization":36,"./plugins/google-plus":37,"./plugins/googleanalytics":38,"./plugins/googlemaps":39,"./plugins/hotspot":40,"./plugins/imagepicker":41,"./plugins/inappbrowser":42,"./plugins/insomnia":43,"./plugins/keyboard":44,"./plugins/launchnavigator":45,"./plugins/localnotifications":46,"./plugins/media":47,"./plugins/network":48,"./plugins/plugin":49,"./plugins/push":50,"./plugins/safari-view-controller":51,"./plugins/screenshot":52,"./plugins/sms":53,"./plugins/socialsharing":54,"./plugins/spinnerdialog":55,"./plugins/splashscreen":56,"./plugins/sqlite":57,"./plugins/statusbar":58,"./plugins/toast":59,"./plugins/touchid":60,"./plugins/vibration":61,"./plugins/webintent":62}],2:[function(require,module,exports){
"use strict";
/**
 * Initialize the ngCordova Angular module if we're running in ng1.
 * This iterates through the list of registered plugins and dynamically
 * creates Angular 1 services of the form $cordovaSERVICE, ex: $cordovStatusBar.
 */
function initAngular1(plugins) {
    if (window.angular) {
        window.angular.module('ionic.native', []);
        for (var name in plugins) {
            var serviceName = '$cordova' + name;
            var cls = plugins[name];
            (function (serviceName, cls, name) {
                window.angular.module('ionic.native').service(serviceName, [function () {
                        var funcs = {};
                        for (var k in cls) {
                            funcs[k] = cls[k];
                        }
                        funcs['name'] = name;
                        return funcs;
                    }]);
            })(serviceName, cls, name);
        }
    }
}
exports.initAngular1 = initAngular1;

},{}],3:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Action Sheet
 * @description
 * The ActionSheet plugin shows a native list of options the user can choose from.
 *
 * Requires Cordova plugin: `cordova-plugin-actionsheet`. For more info, please see the [ActionSheet plugin docs](https://github.com/EddyVerbruggen/cordova-plugin-actionsheet).
 *
 * @usage
 * ```ts
 * import {ActionSheet} from 'ionic-native';
 *
 * let buttonLabels = ['Share via Facebook', 'Share via Twitter'];
 * ActionSheet.show({
 *   'title': 'What do you want with this image?',
 *   'buttonLabels': buttonLabels,
 *   'addCancelButtonWithLabel': 'Cancel',
 *   'addDestructiveButtonWithLabel' : 'Delete'
 * }).then(buttonIndex => {
 *   console.log('Button pressed: ' + buttonLabels[buttonIndex - 1]);
 * });
 * ```
 *
 */
var ActionSheet = (function () {
    function ActionSheet() {
    }
    /**
     * Show the ActionSheet. The ActionSheet's options is an object with the following propterties.
     *
     * | Option                        | Type      | Description                                  |
     * |-------------------------------|-----------|----------------------------------------------|
     * | title                         |`string`   | The title for the actionsheet                |
     * | buttonLabels                  |`string[]` | the labels for the buttons. Uses the index x |
     * | androidTheme                  |`number`   | Theme to be used on Android                  |
     * | androidEnableCancelButton     |`boolean`  | Enable a cancel on Android                   |
     * | winphoneEnableCancelButton    |`boolean`  | Enable a cancel on Windows Phone             |
     * | addCancelButtonWithLabel      |`string`   | Add a cancel button with text                |
     * | addDestructiveButtonWithLabel |`string`   | Add a destructive button with text           |
     * | position                      |`number[]` | On an iPad, set the X,Y position             |
     *
     * @param {options} Options See table above
     * @returns {Promise} Returns a Promise that resolves with the index of the
     *   button pressed (1 based, so 1, 2, 3, etc.)
     */
    ActionSheet.show = function (options) { return; };
    /**
     * Hide the ActionSheet.
     */
    ActionSheet.hide = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], ActionSheet, "show", null);
    __decorate([
        plugin_1.Cordova()
    ], ActionSheet, "hide", null);
    ActionSheet = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-actionsheet',
            pluginRef: 'plugins.actionsheet',
            repo: 'https://github.com/EddyVerbruggen/cordova-plugin-actionsheet',
            platforms: ['Android', 'iOS', 'Windows Phone 8']
        })
    ], ActionSheet);
    return ActionSheet;
}());
exports.ActionSheet = ActionSheet;

},{"./plugin":49}],4:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name AdMob
 * @description
 * @usage
 */
var AdMob = (function () {
    function AdMob() {
    }
    // Static Methods
    /**
     *
     * @param adIdOrOptions
     */
    AdMob.createBanner = function (adIdOrOptions) { return; };
    /**
     *
     */
    AdMob.removeBanner = function () { };
    /**
     *
     * @param position
     */
    AdMob.showBanner = function (position) { };
    /**
     *
     * @param x
     * @param y
     */
    AdMob.showBannerAtXY = function (x, y) { };
    /**
     *
     */
    AdMob.hideBanner = function () { };
    /**
     *
     * @param adIdOrOptions
     */
    AdMob.prepareInterstitial = function (adIdOrOptions) { return; };
    /**
     * Show interstitial
     */
    AdMob.showInterstitial = function () { };
    /**
     *
     */
    AdMob.isInterstitialReady = function () { return; };
    /**
     * Prepare a reward video ad
     * @param adIdOrOptions
     */
    AdMob.prepareRewardVideoAd = function (adIdOrOptions) { return; };
    /**
     * Show a reward video ad
     */
    AdMob.showRewardVideoAd = function () { };
    /**
     * Sets the values for configuration and targeting
     * @param options Returns a promise that resolves if the options are set successfully
     */
    AdMob.setOptions = function (options) { return; };
    /**
     * Get user ad settings
     * @returns {Promise<any>} Returns a promise that resolves with the ad settings
     */
    AdMob.getAdSettings = function () { return; };
    // Events
    AdMob.onBannerFailedToReceive = function () { return; };
    AdMob.onBannerReceive = function () { return; };
    AdMob.onBannerPresent = function () { return; };
    AdMob.onBannerLeaveApp = function () { return; };
    AdMob.onBannerDismiss = function () { return; };
    AdMob.onInterstitialFailedToReceive = function () { return; };
    AdMob.onInterstitialReceive = function () { return; };
    AdMob.onInterstitialPresent = function () { return; };
    AdMob.onInterstitialLeaveApp = function () { return; };
    AdMob.onInterstitialDismiss = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], AdMob, "createBanner", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], AdMob, "removeBanner", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], AdMob, "showBanner", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], AdMob, "showBannerAtXY", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], AdMob, "hideBanner", null);
    __decorate([
        plugin_1.Cordova()
    ], AdMob, "prepareInterstitial", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], AdMob, "showInterstitial", null);
    __decorate([
        plugin_1.Cordova()
    ], AdMob, "isInterstitialReady", null);
    __decorate([
        plugin_1.Cordova()
    ], AdMob, "prepareRewardVideoAd", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], AdMob, "showRewardVideoAd", null);
    __decorate([
        plugin_1.Cordova()
    ], AdMob, "setOptions", null);
    __decorate([
        plugin_1.Cordova()
    ], AdMob, "getAdSettings", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'onBannerFailedToReceive'
        })
    ], AdMob, "onBannerFailedToReceive", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'onBannerReceive'
        })
    ], AdMob, "onBannerReceive", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'onBannerPresent'
        })
    ], AdMob, "onBannerPresent", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'onBannerLeaveApp'
        })
    ], AdMob, "onBannerLeaveApp", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'onBannerDismiss'
        })
    ], AdMob, "onBannerDismiss", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'onInterstitialFailedToReceive'
        })
    ], AdMob, "onInterstitialFailedToReceive", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'onInterstitialReceive'
        })
    ], AdMob, "onInterstitialReceive", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'onInterstitialPresent'
        })
    ], AdMob, "onInterstitialPresent", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'onInterstitialLeaveApp'
        })
    ], AdMob, "onInterstitialLeaveApp", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'onInterstitialDismiss'
        })
    ], AdMob, "onInterstitialDismiss", null);
    AdMob = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-admobpro',
            pluginRef: 'AdMob',
            repo: 'https://github.com/floatinghotspot/cordova-admob-pro'
        })
    ], AdMob);
    return AdMob;
}());
exports.AdMob = AdMob;

},{"./plugin":49}],5:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name App Availability
 * @description
 * This plugin allows you to check if an app is installed on the user's device. It requires an URI Scheme (e.g. twitter://) on iOS or a Package Name (e.g com.twitter.android) on Android.
 *
 * Requires Cordova plugin: cordova-plugin-appavailability. For more info, please see the [AppAvailability plugin docs](https://github.com/ohh2ahh/AppAvailability).
 *
 * @usage
 * ```js
 * import {AppAvailability} from 'ionic-native';
 *
 *
 * var app;
 *
 * if(device.platform === 'iOS') {
 *   app = 'twitter://';
 * }else if(device.platform === 'Android'){
 *   app = 'com.twitter.android';
 * }
 *
 * AppAvailability.check(app)
 *   .then(
 *     yes => console.log(app + " is available"),
 *     no => console.log(app + " is NOT available")
 *   );
 * ```
 */
var AppAvailability = (function () {
    function AppAvailability() {
    }
    /**
     * Checks if an app is available on device
     * @param app Package name on android, or URI scheme on iOS
     * @returns {Promise<boolean>}
     */
    AppAvailability.check = function (app) { return; };
    __decorate([
        plugin_1.Cordova()
    ], AppAvailability, "check", null);
    AppAvailability = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-appavailability',
            pluginRef: 'appAvailability',
            repo: 'https://github.com/ohh2ahh/AppAvailability',
            platforms: ['Android', 'iOS']
        })
    ], AppAvailability);
    return AppAvailability;
}());
exports.AppAvailability = AppAvailability;

},{"./plugin":49}],6:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name App Rate
 * @description
 * The AppRate plugin makes it easy to prompt the user to rate your app, either now, later, or never.
 *
 * Requires Cordova plugin: cordova-plugin-apprate. For more info, please see the [AppRate plugin docs](https://github.com/pushandplay/cordova-plugin-apprate).
 *
 * @usage
 * ```js
 * import {AppRate} from 'ionic-native';
 *
 *
 * AppRate.preferences.storeAppURL.ios = '<my_app_id>';
 * AppRate.preferences.storeAppURL.android = 'market://details?id=<package_name>';
 * AppRate.preferences.storeAppURL.blackberry = 'appworld://content/[App Id]/';
 * AppRate.preferences.storeAppURL.windows8 = 'ms-windows-store:Review?name=<the Package Family Name of the application>';
 * AppRate.promptForRating();
 * ```
 */
var AppRate = (function () {
    function AppRate() {
    }
    Object.defineProperty(AppRate, "preferences", {
        /**
         * Rating dialog preferences
         *
         * | Option                       | Type       | Default | Description                                                                            |
         * |------------------------------|------------|---------|----------------------------------------------------------------------------------------|
         * | useLanguage                  | `String`   | null    | custom BCP 47 language tag                                                             |
         * | displayAppName               | `String`   | ''      | custom application title                                                               |
         * | promptAgainForEachNewVersion | `Boolean`  | true    | show dialog again when application version will be updated                             |
         * | usesUntilPrompt              | `Integer`  | 3       | count of runs of application before dialog will be displayed                           |
         * | openStoreInApp               | `Boolean`  | false   | leave app or no when application page opened in app store (now supported only for iOS) |
         * | useCustomRateDialog          | `Boolean`  | false   | use custom view for rate dialog                                                        |
         * | callbacks.onButtonClicked    | `Function` | null    | call back function. called when user clicked on rate-dialog buttons                    |
         * | callbacks.onRateDialogShow   | `Function` | null    | call back function. called when rate-dialog showing                                    |
         * | storeAppURL.ios              | `String`   | null    | application id in AppStore                                                             |
         * | storeAppURL.android          | `String`   | null    | application URL in GooglePlay                                                          |
         * | storeAppURL.blackberry       | `String`   | null    | application URL in AppWorld                                                            |
         * | storeAppURL.windows8         | `String`   | null    | application URL in WindowsStore                                                        |
         * | customLocale                 | `Object`   | null    | custom locale object                                                                   |
         * @type {{}}
         */
        get: function () { return window.AppRate.preferences; },
        enumerable: true,
        configurable: true
    });
    /**
     * Prompts the user for rating
     *
     * @param {boolean} immediately  Show the rating prompt immediately.
     */
    AppRate.promptForRating = function (immediately) { };
    ;
    __decorate([
        plugin_1.CordovaProperty
    ], AppRate, "preferences", null);
    __decorate([
        plugin_1.Cordova()
    ], AppRate, "promptForRating", null);
    AppRate = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-apprate',
            pluginRef: 'AppRate',
            repo: 'https://github.com/pushandplay/cordova-plugin-apprate',
            platforms: ['Android', 'iOS']
        })
    ], AppRate);
    return AppRate;
}());
exports.AppRate = AppRate;

},{"./plugin":49}],7:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name App Version
 * @description
 * Reads the version of your app from the target build settings.
 *
 * Requires Cordova plugin: `cordova-plugin-app-version`. For more info, please see the [Cordova App Version docs](https://github.com/whiteoctober/cordova-plugin-app-version).
 *
 * @usage
 * ```js
 * import {AppVersion} from 'ionic-native';
 *
 *
 *  AppVersion.getAppName();
 *  AppVersion.getPackageName();
 *  AppVersion.getVersionCode();
 *  AppVersion.getVersionNumber();
 * ```
 */
var AppVersion = (function () {
    function AppVersion() {
    }
    /**
     * Returns the name of the app
     * @returns {Promise}
     */
    AppVersion.getAppName = function () { return; };
    /**
     * Returns the package name of the app
     * @returns {Promise}
     */
    AppVersion.getPackageName = function () { return; };
    /**
     * Returns the build identifier of the app
     * @returns {Promise}
     */
    AppVersion.getVersionCode = function () { return; };
    /**
     * Returns the version of the app
     * @returns {Promise}
     */
    AppVersion.getVersionNumber = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], AppVersion, "getAppName", null);
    __decorate([
        plugin_1.Cordova()
    ], AppVersion, "getPackageName", null);
    __decorate([
        plugin_1.Cordova()
    ], AppVersion, "getVersionCode", null);
    __decorate([
        plugin_1.Cordova()
    ], AppVersion, "getVersionNumber", null);
    AppVersion = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-app-version',
            pluginRef: 'cordova.getAppVersion',
            repo: 'https://github.com/whiteoctober/cordova-plugin-app-version',
            platforms: ['Android', 'iOS']
        })
    ], AppVersion);
    return AppVersion;
}());
exports.AppVersion = AppVersion;

},{"./plugin":49}],8:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name BackgroundGeolocation
 * @description
 * This plugin provides foreground and background geolocation with battery-saving "circular region monitoring" and "stop detection". For
 * more detail, please see https://github.com/mauron85/cordova-plugin-background-geolocation
 *
 * @usage
 *
 * ```ts
 * import {BackgroundGeolocation} from 'ionic-native';
 *
 *
 *
 * // When device is ready :
 * platform.ready().then(() => {
 *
 *     // BackgroundGeolocation is highly configurable. See platform specific configuration options
 *     let config = {
 *             desiredAccuracy: 10,
 *             stationaryRadius: 20,
 *             distanceFilter: 30,
 *             debug: true, //  enable this hear sounds for background-geolocation life-cycle.
 *             stopOnTerminate: false, // enable this to clear background location settings when the app terminates
 *     };
 *
 *     BackgroundGeolocation.configure(config)
 *        .then((location) => {
 *             console.log('[js] BackgroundGeolocation callback:  ' + location.latitude + ',' + location.longitude);
 *
 *             // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
 *             // and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
 *             // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
 *             BackgroundGeolocation.finish(); // FOR IOS ONLY
 *         })
 *        .catch((error) => {
 *             console.log('BackgroundGeolocation error');
 *         });
 *
 *     // Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.
 *     BackgroundGeolocation.start();
 * }
 *
 * // If you wish to turn OFF background-tracking, call the #stop method.
 * BackgroundGeolocation.stop();
 *
 * ```
 */
var BackgroundGeolocation = (function () {
    function BackgroundGeolocation() {
    }
    /**
     * Configure the plugin.
     * Success callback will be called with one argument - Location object, which tries to mimic w3c Coordinates interface.
     * See http://dev.w3.org/geo/api/spec-source.html#coordinates_interface
     * Callback to be executed every time a geolocation is recorded in the background.
     *
     * Fail callback to be executed every time a geolocation error occurs.
     *
     * Options a json object of type Config
     */
    BackgroundGeolocation.configure = function (options) { return; };
    /**
     * Turn ON the background-geolocation system.
     * The user will be tracked whenever they suspend the app.
     */
    BackgroundGeolocation.start = function () { return; };
    /**
     * Turn OFF background-tracking
     */
    BackgroundGeolocation.stop = function () { return; };
    /**
     * Inform the native plugin that you're finished, the background-task may be completed
     * NOTE: IOS, WP only
     */
    BackgroundGeolocation.finish = function () { };
    /**
     * Force the plugin to enter "moving" or "stationary" state
     * NOTE: IOS, WP only
     */
    BackgroundGeolocation.changePace = function (isMoving) { };
    /**
     * Setup configuration
     */
    BackgroundGeolocation.setConfig = function (options) { return; };
    /**
     * Returns current stationaryLocation if available. null if not
     * NOTE: IOS, WP only
     */
    BackgroundGeolocation.getStationaryLocation = function () { return; };
    /**
     * Add a stationary-region listener. Whenever the devices enters "stationary-mode",
     * your #success callback will be executed with #location param containing #radius of region
     * NOTE: IOS, WP only
     */
    BackgroundGeolocation.onStationary = function () { return; };
    /**
     * Check if location is enabled on the device
     * @returns {Promise<number>} Returns a promise with int argument that takes values 0, 1 (true).
     * NOTE: ANDROID only
     */
    BackgroundGeolocation.isLocationEnabled = function () { return; };
    /**
     * Display device location settings
     */
    BackgroundGeolocation.showLocationSettings = function () { };
    /**
     * Method can be used to detect user changes in location services settings.
     * If user enable or disable location services then success callback will be executed.
     * In case or error (SettingNotFoundException) fail callback will be executed.
     * NOTE: ANDROID only
     */
    BackgroundGeolocation.watchLocationMode = function () { return; };
    /**
     * Stop watching for location mode changes.
     * NOTE: ANDROID only
     */
    BackgroundGeolocation.stopWatchingLocationMode = function () { };
    /**
     * Method will return all stored locations.
     * Locations are stored when:
     *  - config.stopOnTerminate is false and main activity was killed
     *    by the system
     *  or
     *  - option.debug is true
     * NOTE: ANDROID only
     */
    BackgroundGeolocation.getLocations = function () { return; };
    /**
     * Delete stored location by given locationId.
     * NOTE: ANDROID only
     */
    BackgroundGeolocation.deleteLocation = function (locationId) { return; };
    /**
     * Delete all stored locations.
     * NOTE: ANDROID only
     */
    BackgroundGeolocation.deleteAllLocations = function () { return; };
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], BackgroundGeolocation, "configure", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "start", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "stop", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "finish", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "changePace", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], BackgroundGeolocation, "setConfig", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "getStationaryLocation", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "onStationary", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "isLocationEnabled", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "showLocationSettings", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "watchLocationMode", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "stopWatchingLocationMode", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "getLocations", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "deleteLocation", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "deleteAllLocations", null);
    BackgroundGeolocation = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-mauron85-background-geolocation',
            pluginRef: 'plugins.backgroundGeoLocation',
            repo: 'https://github.com/mauron85/cordova-plugin-background-geolocation'
        })
    ], BackgroundGeolocation);
    return BackgroundGeolocation;
}());
exports.BackgroundGeolocation = BackgroundGeolocation;

},{"./plugin":49}],9:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
* @name Background Mode
* @description
* Cordova plugin to prevent the app from going to sleep while in background.
*  Requires Cordova plugin: cordova-plugin-background-mode. For more info about plugin, vist: https://github.com/katzer/cordova-plugin-background-mode#android-customization
*@usage
* ```js
* import {BackgroundMode} from 'ionic-native';
*
* BackgroundMode.enable();
*/
var BackgroundMode = (function () {
    function BackgroundMode() {
    }
    /**
    * Enable the background mode.
    * Once called, prevents the app from being paused while in background.
    */
    BackgroundMode.enable = function () { };
    /**
    * Disable the background mode.
    * Once the background mode has been disabled, the app will be paused when in background.
    */
    BackgroundMode.disable = function () { };
    /**
    * Checks if background mode is enabled or not.
    */
    BackgroundMode.isEnabled = function () { return; };
    /**
    * Can be used to get the information if the background mode is active.
    */
    BackgroundMode.isActive = function () { return; };
    /**
    * Override the default title, ticker and text.
    * Available only for Android platform.
    */
    BackgroundMode.setDefaults = function (options) { };
    /**
    * Modify the displayed information.
    * Available only for Android platform.
    */
    BackgroundMode.update = function (options) { };
    /**
    * Sets a callback for a specific event
    * Can be used to get notified or run function when the background mode has been activated, deactivated or failed.
    * @param eventName The name of the event. Available events: activate, deactivate, failure
    */
    BackgroundMode.on = function (eventName, callback) { };
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], BackgroundMode, "enable", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundMode, "disable", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundMode, "isEnabled", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundMode, "isActive", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android']
        })
    ], BackgroundMode, "setDefaults", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android']
        })
    ], BackgroundMode, "update", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], BackgroundMode, "on", null);
    BackgroundMode = __decorate([
        plugin_1.Plugin({
            plugin: 'de.appplant.cordova.plugin.background-mode',
            pluginRef: 'cordova.plugins.backgroundMode',
            repo: 'https://github.com/katzer/cordova-plugin-background-mode',
            platforms: ['Android', 'iOS', 'Windows Phone 8']
        })
    ], BackgroundMode);
    return BackgroundMode;
}());
exports.BackgroundMode = BackgroundMode;

},{"./plugin":49}],10:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Badge
 * @description
 * The essential purpose of badge numbers is to enable an application to inform its users that it has something for them — for example, unread messages — when the application isn’t running in the foreground.
 *
 * Requires Cordova plugin: cordova-plugin-badge. For more info, please see the [Badge plugin docs](https://github.com/katzer/cordova-plugin-badge).
 *
 * @usage
 * ```js
 * import {Badge} from 'ionic-native';
 *
 *
 * Badge.set(10);
 * Badge.increase();
 * Badge.clear();
 * ```
 */
var Badge = (function () {
    function Badge() {
    }
    /**
     * Clear the badge of the app icon.
     */
    Badge.clear = function () { return; };
    /**
     * Set the badge of the app icon.
     * @param {number} badgeNumber  The new badge number.
     * @returns {Promise}
     */
    Badge.set = function (badgeNumber) { return; };
    /**
     * Get the badge of the app icon.
     * @returns {Promise}
     */
    Badge.get = function () { return; };
    /**
     * Increase the badge number.
     * @param {number} increaseBy  Count to add to the current badge number
     * @returns {Promise}
     */
    Badge.increase = function (increaseBy) { return; };
    /**
     * Decrease the badge number.
     * @param {number} decreaseBy  Count to subtract from the current badge number
     * @returns {Promise}
     */
    Badge.decrease = function (decreaseBy) { return; };
    /**
     * Determine if the app has permission to show badges.
     */
    Badge.hasPermission = function () { return; };
    /**
     * Register permission to set badge notifications
     * @returns {Promise}
     */
    Badge.registerPermission = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], Badge, "clear", null);
    __decorate([
        plugin_1.Cordova()
    ], Badge, "set", null);
    __decorate([
        plugin_1.Cordova()
    ], Badge, "get", null);
    __decorate([
        plugin_1.Cordova()
    ], Badge, "increase", null);
    __decorate([
        plugin_1.Cordova()
    ], Badge, "decrease", null);
    __decorate([
        plugin_1.Cordova()
    ], Badge, "hasPermission", null);
    __decorate([
        plugin_1.Cordova()
    ], Badge, "registerPermission", null);
    Badge = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-badge',
            pluginRef: 'cordova.plugins.notification.badge',
            repo: 'https://github.com/katzer/cordova-plugin-badge',
            platforms: ['Android', 'iOS', 'Browser', 'Windows', 'Amazon FireOS', 'Windows Phone 8']
        })
    ], Badge);
    return Badge;
}());
exports.Badge = Badge;

},{"./plugin":49}],11:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Barcode Scanner
 * @description
 * The Barcode Scanner Plugin opens a camera view and automatically scans a barcode, returning the data back to you.
 *
 * Requires Cordova plugin: `phonegap-plugin-barcodescanner`. For more info, please see the [BarcodeScanner plugin docs](https://github.com/phonegap/phonegap-plugin-barcodescanner).
 *
 * @usage
 * ```js
 * import {BarcodeScanner} from 'ionic-native';
 *
 *
 * BarcodeScanner.scan().then((barcodeData) => {
 *  // Success! Barcode data is here
 * }, (err) => {
 * 	// An error occurred
 * });
 * ```
 */
var BarcodeScanner = (function () {
    function BarcodeScanner() {
    }
    /**
     * Open the barcode scanner.
     * @return Returns a Promise that resolves with scanner data, or rejects with an error.
     */
    BarcodeScanner.scan = function (options) { return; };
    __decorate([
        plugin_1.Cordova()
    ], BarcodeScanner, "scan", null);
    BarcodeScanner = __decorate([
        plugin_1.Plugin({
            plugin: 'phonegap-plugin-barcodescanner',
            pluginRef: 'cordova.plugins.barcodeScanner',
            repo: 'https://github.com/phonegap/phonegap-plugin-barcodescanner',
            platforms: ['Android', 'iOS', 'Windows Phone 8', 'Windows 10', 'Windows 8', 'BlackBerry 10', 'Browser']
        })
    ], BarcodeScanner);
    return BarcodeScanner;
}());
exports.BarcodeScanner = BarcodeScanner;

},{"./plugin":49}],12:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Base64 To Gallery
 * @description This plugin allows you to save base64 data as a png image into the device
 * @usage
 * ```ts
 * import {Base64ToGallery} from 'ionic-native';
 *
 *
 * Base64ToGallery.base64ToGallery(base64Data, 'img_').then(
 *   res => console.log("Saved image to gallery ", res),
 *   err => console.log("Error saving image to gallery ", err)
 * );
 * ```
 */
var Base64ToGallery = (function () {
    function Base64ToGallery() {
    }
    /**
     * Converts a base64 string to an image file in the device gallery
     * @param data
     * @param prefix
     */
    Base64ToGallery.prototype.base64ToGallery = function (data, prefix) {
        return;
    };
    __decorate([
        plugin_1.Cordova()
    ], Base64ToGallery.prototype, "base64ToGallery", null);
    Base64ToGallery = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-base64-to-gallery',
            pluginRef: 'cordova',
            repo: 'https://github.com/Nexxa/cordova-base64-to-gallery',
            platforms: ['Android', 'iOS', 'Windows Phone 8']
        })
    ], Base64ToGallery);
    return Base64ToGallery;
}());
exports.Base64ToGallery = Base64ToGallery;

},{"./plugin":49}],13:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Battery Status
 * @description
 * Requires Cordova plugin: cordova-plugin-batterystatus. For more info, please see the [BatteryStatus plugin docs](https://github.com/apache/cordova-plugin-battery-status).
 *
 * @usage
 * ```js
 * import {BatteryStatus} from 'ionic-native';
 *
 *
 *
 * // watch change in battery status
 * let subscription = BatteryStatus.onChange().subscribe(
 *  status => {
 *    console.log(status.level, status.isPlugged);
 *  }
 * );
 *
 * // stop watch
 * subscription.unsubscribe();
 *
 * ```
 */
var BatteryStatus = (function () {
    function BatteryStatus() {
    }
    /**
     * Watch the change in battery level
     * @returns {Observable} Returns an observable that pushes a status object
     */
    BatteryStatus.onChange = function () { return; };
    /**
     * Watch when the battery level goes low
     * @returns {Observable<StatusObject>} Returns an observable that pushes a status object
     */
    BatteryStatus.onLow = function () { return; };
    /**
     * Watch when the battery level goes to critial
     * @returns {Observable<StatusObject>} Returns an observable that pushes a status object
     */
    BatteryStatus.onCritical = function () { return; };
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'batterystatus'
        })
    ], BatteryStatus, "onChange", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'batterylow'
        })
    ], BatteryStatus, "onLow", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'batterycritical'
        })
    ], BatteryStatus, "onCritical", null);
    BatteryStatus = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-battery-status',
            repo: 'https://github.com/apache/cordova-plugin-battery-status',
            platforms: ['Amazon Fire OS', 'iOS', 'Android', 'BlackBerry 10', 'Windows Phone 7', 'Windows Phone 8', 'Windows', 'Firefox OS', 'Browser']
        })
    ], BatteryStatus);
    return BatteryStatus;
}());
exports.BatteryStatus = BatteryStatus;

},{"./plugin":49}],14:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name BLE
 * @description
 * This plugin enables communication between a phone and Bluetooth Low Energy (BLE) peripherals.
 *
 * The plugin provides a simple JavaScript API for iOS and Android.
 *
 * - Scan for peripherals
 * - Connect to a peripheral
 * - Read the value of a characteristic
 * - Write new value to a characteristic
 * - Get notified when characteristic's value changes
 *
 * Advertising information is returned when scanning for peripherals. Service, characteristic, and property info is returned when connecting to a peripheral. All access is via service and characteristic UUIDs. The plugin manages handles internally.
 *
 * Simultaneous connections to multiple peripherals are supported.
 *
 * @usage
 *
 * ## Peripheral Data
 *
 * Peripheral Data is passed to the success callback when scanning and connecting. Limited data is passed when scanning.
 *
 * ```ts
 *   {
 *       "name": "Battery Demo",
 *       "id": "20:FF:D0:FF:D1:C0",
 *       "advertising": [2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],
 *       "rssi": -55
 *   }
 * ```
 * After connecting, the peripheral object also includes service, characteristic and descriptor information.
 *
 * ```ts
 *   {
 *       "name": "Battery Demo",
 *       "id": "20:FF:D0:FF:D1:C0",
 *       "advertising": [2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],
 *       "rssi": -55,
 *       "services": [
 *           "1800",
 *           "1801",
 *           "180f"
 *       ],
 *       "characteristics": [
 *           {
 *               "service": "1800",
 *               "characteristic": "2a00",
 *               "properties": [
 *                   "Read"
 *               ]
 *           },
 *           {
 *               "service": "1800",
 *               "characteristic": "2a01",
 *               "properties": [
 *                   "Read"
 *               ]
 *           },
 *           {
 *               "service": "1801",
 *               "characteristic": "2a05",
 *               "properties": [
 *                   "Read"
 *               ]
 *           },
 *           {
 *               "service": "180f",
 *               "characteristic": "2a19",
 *               "properties": [
 *                   "Read"
 *               ],
 *               "descriptors": [
 *                   {
 *                       "uuid": "2901"
 *                   },
 *                   {
 *                       "uuid": "2904"
 *                   }
 *               ]
 *           }
 *       ]
 *   }
 * ```
 *
 * ## Advertising Data
 * Bluetooth advertising data is returned in when scanning for devices. The format format varies depending on your platform. On Android advertising data will be the raw advertising bytes. iOS does not allow access to raw advertising data, so a dictionary of data is returned.
 *
 * The advertising information for both Android and iOS appears to be a combination of advertising data and scan response data.
 *
 * ### Android
 *
 * ```ts
 *   {
 *       "name": "demo",
 *       "id": "00:1A:7D:DA:71:13",
 *       "advertising": ArrayBuffer,
 *      "rssi": -37
 *  }
 * ```
 *
 * Convert the advertising info to a Uint8Array for processing. `var adData = new Uint8Array(peripheral.advertising)`
 *
 * ### iOS
 *
 * Note that iOS uses the string value of the constants for the [Advertisement Data Retrieval Keys](https://developer.apple.com/library/ios/documentation/CoreBluetooth/Reference/CBCentralManagerDelegate_Protocol/index.html#//apple_ref/doc/constant_group/Advertisement_Data_Retrieval_Keys). This will likely change in the future.
 *
 * ```ts
 *   {
 *       "name": "demo",
 *       "id": "D8479A4F-7517-BCD3-91B5-3302B2F81802",
 *       "advertising": {
 *           "kCBAdvDataChannel": 37,
 *           "kCBAdvDataServiceData": {
 *               "FED8": {
 *                   "byteLength": 7 // data not shown
 *               }
 *           },
 *           "kCBAdvDataLocalName": "demo",
 *           "kCBAdvDataServiceUUIDs": ["FED8"],
 *           "kCBAdvDataManufacturerData": {
 *               "byteLength": 7  // data not shown
 *           },
 *           "kCBAdvDataTxPowerLevel": 32,
 *           "kCBAdvDataIsConnectable": true
 *       },
 *       "rssi": -53
 *   }
 * ```
 *
 * ## Typed Arrays
 *
 * This plugin uses typed Arrays or ArrayBuffers for sending and receiving data.
 *
 * This means that you need convert your data to ArrayBuffers before sending and from ArrayBuffers when receiving.
 *
 * ```ts
 *   // ASCII only
 *   function stringToBytes(string) {
 *      var array = new Uint8Array(string.length);
 *      for (var i = 0, l = string.length; i < l; i++) {
 *          array[i] = string.charCodeAt(i);
 *       }
 *       return array.buffer;
 *   }
 *
 *   // ASCII only
 *   function bytesToString(buffer) {
 *       return String.fromCharCode.apply(null, new Uint8Array(buffer));
 *   }
 * ```
 * You can read more about typed arrays in these articles on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) and [HTML5 Rocks](http://www.html5rocks.com/en/tutorials/webgl/typed_arrays/).
 *
 * ## UUIDs
 *
 * UUIDs are always strings and not numbers. Some 16-bit UUIDs, such as '2220' look like integers, but they're not. (The integer 2220 is 0x8AC in hex.) This isn't a problem with 128 bit UUIDs since they look like strings 82b9e6e1-593a-456f-be9b-9215160ebcac. All 16-bit UUIDs should also be passed to methods as strings.
 *
 */
var BLE = (function () {
    function BLE() {
    }
    /**
     * Scan and discover BLE peripherals for the specified amount of time.
     *
     * @usage
     * ```
     * BLE.scan([], 5).subscribe(device => {
     *   console.log(JSON.stringify(device));
     * });
     * ```
     * @param {string[]} services  List of service UUIDs to discover, or `[]` to find all devices
     * @param {number} seconds  Number of seconds to run discovery
     * @return Returns an Observable that notifies of each peripheral that is discovered during the specified time.
     */
    BLE.scan = function (services, seconds) { return; };
    /**
     * Scan and discover BLE peripherals until `stopScan` is called.
     *
     * @usage
     * ```
     * BLE.startScan([]).subscribe(device => {
     *   console.log(JSON.stringify(device));
     * });
     *
     * setTimeout(() => {
     *   BLE.stopScan();
     * }, 5000);
     * ```
     * @param {string[]} services  List of service UUIDs to discover, or `[]` to find all devices
     * @return Returns an Observable that notifies of each peripheral discovered.
     */
    BLE.startScan = function (services) { return; };
    /**
     * Stop a scan started by `startScan`.
     *
     * @usage
     * ```
     * BLE.startScan([]).subscribe(device => {
     *   console.log(JSON.stringify(device));
     * });
     * setTimeout(() => {
     *   BLE.stopScan().then(() => { console.log('scan stopped'); });
     * }, 5000);
     * ```
     * @return returns a Promise.
     */
    BLE.stopScan = function () { return; };
    /**
     * Connect to a peripheral.
     * @usage
     * ```
     *   BLE.connect('12:34:56:78:9A:BC').subscribe(peripheralData => {
     *     console.log(peripheralData);
     *   },
     *   peripheralData => {
     *     console.log('disconnected');
     *   });
     * ```
     * @param deviceId {string}  UUID or MAC address of the peripheral
     * @return Returns an Observable that notifies of connect/disconnect.
     */
    BLE.connect = function (deviceId) { return; };
    /**
     * Disconnect from a peripheral.
     * @usage
     * ```
     *   BLE.disconnect('12:34:56:78:9A:BC').then(() => {
     *     console.log('Disconnected');
     *   });
     * ```
     * @param deviceId {string}  UUID or MAC address of the peripheral
     * @return Returns a Promise
     */
    BLE.disconnect = function (deviceId) { return; };
    /**
     * Read the value of a characteristic.
     *
     * @param {string} deviceId  UUID or MAC address of the peripheral
     * @param {string} serviceUUID  UUID of the BLE service
     * @param {string} characteristicUUID  UUID of the BLE characteristic
     * @return Returns a Promise
     */
    BLE.read = function (deviceId, serviceUUID, characteristicUUID) { return; };
    ;
    /**
     * Write the value of a characteristic.
     * @usage
     * ```
     * // send 1 byte to switch a light on
     * var data = new Uint8Array(1);
     * data[0] = 1;
     * BLE.write(device_id, "FF10", "FF11", data.buffer);
     *
     * // send a 3 byte value with RGB color
     * var data = new Uint8Array(3);
     * data[0] = 0xFF;  // red
     * data[0] = 0x00; // green
     * data[0] = 0xFF; // blue
     * BLE.write(device_id, "ccc0", "ccc1", data.buffer);
     *
     * // send a 32 bit integer
     * var data = new Uint32Array(1);
     * data[0] = counterInput.value;
     * BLE.write(device_id, SERVICE, CHARACTERISTIC, data.buffer);
     *
     * ```
     * @param {string} deviceId  UUID or MAC address of the peripheral
     * @param {string} serviceUUID  UUID of the BLE service
     * @param {string} characteristicUUID  UUID of the BLE characteristic
     * @param {ArrayBuffer} value  Data to write to the characteristic, as an ArrayBuffer.
     * @return Returns a Promise
     */
    BLE.write = function (deviceId, serviceUUID, characteristicUUID, value) { return; };
    /**
     * Write the value of a characteristic without waiting for confirmation from the peripheral.
     *
     * @param {string} deviceId  UUID or MAC address of the peripheral
     * @param {string} serviceUUID  UUID of the BLE service
     * @param {string} characteristicUUID  UUID of the BLE characteristic
     * @param {ArrayBuffer} value  Data to write to the characteristic, as an ArrayBuffer.
     * @return Returns a Promise
     */
    BLE.writeWithoutResponse = function (deviceId, serviceUUID, characteristicUUID, value) { return; };
    /**
     * Register to be notified when the value of a characteristic changes.
     *
     * @usage
     * ```
     * BLE.startNotification(device_id, "FF10", "FF11").subscribe(buffer => {
     *   console.log(String.fromCharCode.apply(null, new Uint8Array(buffer));
     * });
     * ```
     *
     * @param {string} deviceId  UUID or MAC address of the peripheral
     * @param {string} serviceUUID  UUID of the BLE service
     * @param {string} characteristicUUID  UUID of the BLE characteristic
     * @return Returns an Observable that notifies of characteristic changes.
     */
    BLE.startNotification = function (deviceId, serviceUUID, characteristicUUID) { return; };
    /**
     * Stop being notified when the value of a characteristic changes.
     *
     * @param {string} deviceId  UUID or MAC address of the peripheral
     * @param {string} serviceUUID  UUID of the BLE service
     * @param {string} characteristicUUID  UUID of the BLE characteristic
     * @return Returns a Promise.
     */
    BLE.stopNotification = function (deviceId, serviceUUID, characteristicUUID) { return; };
    /**
     * Report the connection status.
     *
     * @usage
     * ```
     * BLE.isConnected('FFCA0B09-CB1D-4DC0-A1EF-31AFD3EDFB53').then(
     *   () => { console.log('connected'); },
     *   () => { console.log('not connected'); }
     * );
     * ```
     * @param {string} deviceId  UUID or MAC address of the peripheral
     * @return Returns a Promise.
     */
    BLE.isConnected = function (deviceId) { return; };
    /**
     * Report if bluetooth is enabled.
     *
     * @usage
     * ```
     * BLE.isEnabled().then(
     *   () => { console.log('enabled'); },
     *   () => { console.log('not enabled'); }
     * );
     * ```
     * @return Returns a Promise.
     */
    BLE.isEnabled = function () { return; };
    /**
     * Open System Bluetooth settings (Android only).
     *
     * @return Returns a Promise.
     */
    BLE.showBluetoothSettings = function () { return; };
    /**
     * Enable Bluetooth on the device (Android only).
     *
     * @return Returns a Promise.
     */
    BLE.enable = function () { return; };
    __decorate([
        plugin_1.Cordova({
            observable: true
        })
    ], BLE, "scan", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'stopScan',
            clearWithArgs: true
        })
    ], BLE, "startScan", null);
    __decorate([
        plugin_1.Cordova()
    ], BLE, "stopScan", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'disconnect',
            clearWithArgs: true
        })
    ], BLE, "connect", null);
    __decorate([
        plugin_1.Cordova()
    ], BLE, "disconnect", null);
    __decorate([
        plugin_1.Cordova()
    ], BLE, "read", null);
    __decorate([
        plugin_1.Cordova()
    ], BLE, "write", null);
    __decorate([
        plugin_1.Cordova()
    ], BLE, "writeWithoutResponse", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'stopNotification',
            clearWithArgs: true
        })
    ], BLE, "startNotification", null);
    __decorate([
        plugin_1.Cordova()
    ], BLE, "stopNotification", null);
    __decorate([
        plugin_1.Cordova()
    ], BLE, "isConnected", null);
    __decorate([
        plugin_1.Cordova()
    ], BLE, "isEnabled", null);
    __decorate([
        plugin_1.Cordova()
    ], BLE, "showBluetoothSettings", null);
    __decorate([
        plugin_1.Cordova()
    ], BLE, "enable", null);
    BLE = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-ble-central',
            pluginRef: 'ble',
            repo: 'https://github.com/don/cordova-plugin-ble-central',
            platforms: ['iOS', 'Android']
        })
    ], BLE);
    return BLE;
}());
exports.BLE = BLE;

},{"./plugin":49}],15:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Bluetooth Serial
 * @description This plugin enables serial communication over Bluetooth. It was written for communicating between Android or iOS and an Arduino.
 * @usage
 */
var BluetoothSerial = (function () {
    function BluetoothSerial() {
    }
    /**
     * Connect to a Bluetooth device
     * Returns an Observable. Subscribe to connect, unsubscribe to disconnect.
     * @param macAddress_or_uuid Identifier of the remote device
     */
    BluetoothSerial.connect = function (macAddress_or_uuid) { return; };
    /**
     * Connect insecurely to a Bluetooth device
     * Returns an Observable. Subscribe to connect, unsubscribe to disconnect.
     * @param macAddress Identifier of the remote device
     */
    BluetoothSerial.connectInsecure = function (macAddress) { return; };
    /**
     * Writes data to the serial port
     * @param data ArrayBuffer of data
     * @usage
     * ```ts
     * // Write a string
     * Bluetooth.write("hello world").then(success, failure);
     *
     * // Array of int or bytes
     * Bluetooth.write([186, 220, 222]).then(success, failure);
     *
     * // Typed Array
     * var data = new Uint8Array(4);
     * data[0] = 0x41;
     * data[1] = 0x42;
     * data[2] = 0x43;
     * data[3] = 0x44;
     * Bluetooth.write(data).then(success, failure);
     *
     * // Array Buffer
     * Bluetooth.write(data.buffer).then(success, failure);
     * ```
     */
    BluetoothSerial.write = function (data) { return; };
    /**
     * Gets the number of bytes of data available
     */
    BluetoothSerial.available = function () { return; };
    /**
     * Reads data from the buffer
     */
    BluetoothSerial.read = function () { return; };
    /**
     * Reads data from the buffer until it reaches a delimiter
     * @param delimiter
     */
    BluetoothSerial.readUntil = function (delimiter) { return; };
    /**
     * Subscribe to be notified when data is received
     * @param delimiter
     */
    BluetoothSerial.subscribe = function (delimiter) { return; };
    /**
     * Subscribe to be notified when data is received
     */
    BluetoothSerial.subscribeRawData = function () { return; };
    /**
     * Clears data in buffer
     */
    BluetoothSerial.clear = function () { return; };
    /**
     * Lists bonded devices
     */
    BluetoothSerial.list = function () { return; };
    /**
     * Reports if bluetooth is enabled
     */
    BluetoothSerial.isEnabled = function () { return; };
    /**
     * Reports the connection status
     */
    BluetoothSerial.isConnected = function () { return; };
    /**
     * Reads the RSSI from the connected peripheral
     */
    BluetoothSerial.readRSSI = function () { return; };
    /**
     * Show the Bluetooth settings on the device
     */
    BluetoothSerial.showBluetoothSettings = function () { return; };
    /**
     * Enable Bluetooth on the device
     */
    BluetoothSerial.enable = function () { return; };
    /**
     * Discover unpaired devices
     * @usage
     * ```ts
     * [{
     *    "class": 276,
     *    "id": "10:BF:48:CB:00:00",
     *    "address": "10:BF:48:CB:00:00",
     *    "name": "Nexus 7"
     * }, {
     *    "class": 7936,
     *    "id": "00:06:66:4D:00:00",
     *    "address": "00:06:66:4D:00:00",
     *    "name": "RN42"
     * }]
     * ```
     */
    BluetoothSerial.discoverUnpaired = function () { return; };
    /**
     * Subscribe to be notified on Bluetooth device discovery. Discovery process must be initiated with the `discoverUnpaired` function.
     */
    BluetoothSerial.setDeviceDiscoveredListener = function () { return; };
    /**
     * Sets the human readable device name that is broadcasted to other devices
     * @param newName Desired name of device
     */
    BluetoothSerial.setName = function (newName) { };
    /**
     * Makes the device discoverable by other devices
     * @param discoverableDuration Desired number of seconds device should be discoverable for
     */
    BluetoothSerial.setDiscoverable = function (discoverableDuration) { };
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone'],
            observable: true,
            clearFunction: 'disconnect'
        })
    ], BluetoothSerial, "connect", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android'],
            observable: true,
            clearFunction: 'disconnect'
        })
    ], BluetoothSerial, "connectInsecure", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "write", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "available", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "read", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "readUntil", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone'],
            observable: true,
            clearFunction: 'unsubscribe'
        })
    ], BluetoothSerial, "subscribe", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone'],
            observable: true,
            clearFunction: 'unsubscribeRawData'
        })
    ], BluetoothSerial, "subscribeRawData", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "clear", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "list", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "isEnabled", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "isConnected", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "readRSSI", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "showBluetoothSettings", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "enable", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "discoverUnpaired", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone'],
            observable: true,
            clearFunction: 'clearDeviceDiscoveredListener'
        })
    ], BluetoothSerial, "setDeviceDiscoveredListener", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android'],
            sync: true
        })
    ], BluetoothSerial, "setName", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android'],
            sync: true
        })
    ], BluetoothSerial, "setDiscoverable", null);
    BluetoothSerial = __decorate([
        plugin_1.Plugin({
            repo: 'https://github.com/don/BluetoothSerial',
            plugin: 'cordova-plugin-bluetooth-serial',
            pluginRef: 'bluetoothSerial',
            platforms: ['Android', 'iOS', 'Windows Phone', 'Browser']
        })
    ], BluetoothSerial);
    return BluetoothSerial;
}());
exports.BluetoothSerial = BluetoothSerial;

},{"./plugin":49}],16:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Calendar
 * @description
 * This plugin allows you to add events to the Calendar of the mobile device.
 *
 * Requires Cordova plugin: `cordova-plugin-calendar`. For more info, please see the [Calendar plugin docs](https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin).
 *
 * @usage
 *
 */
var Calendar = (function () {
    function Calendar() {
    }
    /**
     * This function checks if we have permission to read/write from/to the calendar.
     * The promise will resolve with `true` when:
     * - You're running on iOS, or
     * - You're targetting API level lower than 23, or
     * - You're using Android < 6, or
     * - You've already granted permission
     *
     * If this returns false, you should call `requestReadWritePermissions` function
     */
    Calendar.hasReadWritePermissions = function () { return; };
    /**
     * Requests read/write permissions
     */
    Calendar.requestReadWritePermissions = function () { };
    /**
     * Create a calendar. (iOS only)
     *
     * @usage
     * ```
     * import {Calendar} from 'ionic-native';
     *
     *
     *
     * Calendar.createCalendar('MyCalendar').then(
     *   (msg) => { console.log(msg); },
     *   (err) => { console.log(err); }
     * );
     * ```
     *
     * @param {string | Object} nameOrOptions  either a string name or a options object.
     * options:
     *   calendarName: string  the name of the calendar
     *   calendarColor: string  the hex color of the calendar
     * @return Returns a Promise
     */
    Calendar.createCalendar = function (nameOrOptions) { return; };
    /**
     * Delete a calendar. (iOS only)
     *
     * @usage
     * ```
     * Calendar.deleteCalendar('MyCalendar').then(
     *   (msg) => { console.log(msg); },
     *   (err) => { console.log(err); }
     * );
     * ```
     *
     * @param {string} name  Name of the calendar to delete.
     * @return Returns a Promise
     */
    Calendar.deleteCalendar = function (name) { return; };
    /**
     * Returns the default calendar options.
     *
     * @return Returns an object with the default calendar options:
     *   firstReminderMinutes: 60,
     *   secondReminderMinutes: null,
     *   recurrence: null, // options are: 'daily', 'weekly', 'monthly', 'yearly'
     *   recurrenceInterval: 1, // only used when recurrence is set
     *   recurrenceEndDate: null,
     *   calendarName: null,
     *   calendarId: null,
     *   url: null
     */
    Calendar.getCalendarOptions = function () {
        return {
            firstReminderMinutes: 60,
            secondReminderMinutes: null,
            recurrence: null,
            recurrenceInterval: 1,
            recurrenceEndDate: null,
            calendarName: null,
            calendarId: null,
            url: null
        };
    };
    /**
     * Silently create an event.
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @return Returns a Promise
     */
    Calendar.createEvent = function (title, location, notes, startDate, endDate) { return; };
    /**
     * Silently create an event with additional options.
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @param {CalendarOptions} [options]  Additional options, see `getCalendarOptions`
     * @return Returns a Promise
     */
    Calendar.createEventWithOptions = function (title, location, notes, startDate, endDate, options) { return; };
    /**
     * Interactively create an event.
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @return Returns a Promise
     */
    Calendar.createEventInteractively = function (title, location, notes, startDate, endDate) { return; };
    /**
     * Interactively create an event with additional options.
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @param {CalendarOptions} [options]  Additional options, see `getCalendarOptions`
     * @return Returns a Promise
     */
    Calendar.createEventInteractivelyWithOptions = function (title, location, notes, startDate, endDate, options) { return; };
    // deprecated
    // @Cordova()
    // static createEventInNamedCalendar(
    //   title?: string,
    //   location?: string,
    //   notes?: string,
    //   startDate?: Date,
    //   endDate?: Date,
    //   calendarName?: string
    // ) {}
    /**
     * Find an event.
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @return Returns a Promise
     */
    Calendar.findEvent = function (title, location, notes, startDate, endDate) { return; };
    /**
     * Find an event with additional options.
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @param {CalendarOptions} [options]  Additional options, see `getCalendarOptions`
     * @return Returns a Promise that resolves with the event, or rejects with an error.
     */
    Calendar.findEventWithOptions = function (title, location, notes, startDate, endDate, options) { return; };
    /**
     * Find a list of events within the specified date range. (Android only)
     *
     * @param {Date} [startDate]  The start date
     * @param {Date} [endDate]  The end date
     * @return Returns a Promise that resolves with the list of events, or rejects with an error.
     */
    Calendar.listEventsInRange = function (startDate, endDate) { return; };
    /**
     * Get a list of all calendars.
     * @return A Promise that resolves with the list of calendars, or rejects with an error.
     */
    Calendar.listCalendars = function () { return; };
    /**
     * Get a list of all future events in the specified calendar. (iOS only)
     * @return Returns a Promise that resolves with the list of events, or rejects with an error.
     */
    Calendar.findAllEventsInNamedCalendar = function (calendarName) { return; };
    /**
     * Modify an event. (iOS only)
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @param {string} [newTitle]  The new event title
     * @param {string} [newLocation]  The new event location
     * @param {string} [newNotes]  The new event notes
     * @param {Date} [newStartDate]  The new event start date
     * @param {Date} [newEndDate]  The new event end date
     * @return Returns a Promise
     */
    Calendar.modifyEvent = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate) { return; };
    /**
     * Modify an event with additional options. (iOS only)
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @param {string} [newTitle]  The new event title
     * @param {string} [newLocation]  The new event location
     * @param {string} [newNotes]  The new event notes
     * @param {Date} [newStartDate]  The new event start date
     * @param {Date} [newEndDate]  The new event end date
     * @param {CalendarOptions} [options]  Additional options, see `getCalendarOptions`
     * @return Returns a Promise
     */
    Calendar.modifyEventWithOptions = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, options) { return; };
    /**
     * Delete an event.
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @return Returns a Promise
     */
    Calendar.deleteEvent = function (title, location, notes, startDate, endDate) { return; };
    /**
     * Delete an event from the specified Calendar. (iOS only)
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @param {string} calendarName
     * @return Returns a Promise
     */
    Calendar.deleteEventFromNamedCalendar = function (title, location, notes, startDate, endDate, calendarName) { return; };
    /**
     * Open the calendar at the specified date.
     * @return {Date} date
     */
    Calendar.openCalendar = function (date) { return; };
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "hasReadWritePermissions", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], Calendar, "requestReadWritePermissions", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "createCalendar", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "deleteCalendar", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], Calendar, "getCalendarOptions", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "createEvent", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "createEventWithOptions", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "createEventInteractively", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "createEventInteractivelyWithOptions", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "findEvent", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "findEventWithOptions", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "listEventsInRange", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "listCalendars", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "findAllEventsInNamedCalendar", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "modifyEvent", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "modifyEventWithOptions", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "deleteEvent", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "deleteEventFromNamedCalendar", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "openCalendar", null);
    Calendar = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-calendar',
            pluginRef: 'plugins.calendar',
            repo: 'https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin',
            platforms: ['Android', 'iOS']
        })
    ], Calendar);
    return Calendar;
}());
exports.Calendar = Calendar;

},{"./plugin":49}],17:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Camera
 * @description
 * Take a photo or capture video.
 *
 * Requires {@link module:driftyco/ionic-native} and the Cordova plugin: `cordova-plugin-camera`. For more info, please see the [Cordova Camera Plugin Docs](https://github.com/apache/cordova-plugin-camera).
 *
 * @usage
 * ```js
 * import {Camera} from 'ionic-native';
 *
 * Camera.getPicture(options).then((imageData) => {
 *  // imageData is either a base64 encoded string or a file URI
 *  // If it's base64:
 *  let base64Image = "data:image/jpeg;base64," + imageData;
 * }, (err) => {
 * });
 * ```
 */
var Camera = (function () {
    function Camera() {
    }
    /**
     * Take a picture or video, or load one from the library.
     * @param {CameraOptions} options
     * @return Returns a Promise that resolves with Base64 encoding of the image data, or the image file URI, depending on cameraOptions, otherwise rejects with an error.
     */
    Camera.getPicture = function (options) { return; };
    /**
     * Remove intermediate image files that are kept in temporary storage after calling camera.getPicture.
     * Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.
     * @return Returns a Promise
     */
    Camera.cleanup = function () { };
    ;
    /**
     * @enum {number}
     */
    Camera.DestinationType = {
        /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
        DATA_URL: 0,
        /** Return file uri (content://media/external/images/media/2 for Android) */
        FILE_URI: 1,
        /** Return native uri (eg. asset-library://... for iOS) */
        NATIVE_URI: 2
    };
    /**
     * @enum {number}
     */
    Camera.EncodingType = {
        /** Return JPEG encoded image */
        JPEG: 0,
        /** Return PNG encoded image */
        PNG: 1
    };
    /**
     * @enum {number}
     */
    Camera.MediaType = {
        /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
        PICTURE: 0,
        /** Allow selection of video only, ONLY RETURNS URL */
        VIDEO: 1,
        /** Allow selection from all media types */
        ALLMEDIA: 2
    };
    /**
     * @enum {number}
     */
    Camera.PictureSourceType = {
        /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
        PHOTOLIBRARY: 0,
        /** Take picture from camera */
        CAMERA: 1,
        /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
        SAVEDPHOTOALBUM: 2
    };
    /**
     * Matches iOS UIPopoverArrowDirection constants to specify arrow location on popover.
     * @enum {number}
     */
    Camera.PopoverArrowDirection = {
        ARROW_UP: 1,
        ARROW_DOWN: 2,
        ARROW_LEFT: 4,
        ARROW_RIGHT: 8,
        ARROW_ANY: 15
    };
    /**
     * @enum {number}
     */
    Camera.Direction = {
        /** Use the back-facing camera */
        BACK: 0,
        /** Use the front-facing camera */
        FRONT: 1
    };
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], Camera, "getPicture", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['iOS']
        })
    ], Camera, "cleanup", null);
    Camera = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-camera',
            pluginRef: 'navigator.camera',
            repo: 'https://github.com/apache/cordova-plugin-camera',
            platforms: ['Android', 'BlackBerry', 'Browser', 'Firefox', 'FireOS', 'iOS', 'Windows', 'Windows Phone 8', 'Ubuntu']
        })
    ], Camera);
    return Camera;
}());
exports.Camera = Camera;

},{"./plugin":49}],18:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name CardIO
 * @description
 * @usage
 * ```
 * import {CardIO} from 'ionic-native';
 *
 * ...
 *
 * CardIO.canScan()
 *   .then(
 *     (res: boolean) => {
 *       if(res){
 *         let options = {
 *           requireExpiry: true,
 *           requireCCV: false,
 *           requirePostalCode: false
 *         };
 *         CardIO.scan(options);
 *       }
 *     }
 *   );
 * ```
 */
var CardIO = (function () {
    function CardIO() {
    }
    /**
     * Check whether card scanning is currently available. (May vary by
     * device, OS version, network connectivity, etc.)
     *
     */
    CardIO.canScan = function () { return; };
    /**
     * Scan a credit card with card.io.
     * @param options
     */
    CardIO.scan = function (options) { return; };
    /**
     * Retrieve the version of the card.io library. Useful when contacting support.
     */
    CardIO.version = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], CardIO, "canScan", null);
    __decorate([
        plugin_1.Cordova()
    ], CardIO, "scan", null);
    __decorate([
        plugin_1.Cordova()
    ], CardIO, "version", null);
    CardIO = __decorate([
        plugin_1.Plugin({
            plugin: 'https://github.com/card-io/card.io-Cordova-Plugin',
            pluginRef: 'CardIO',
            repo: 'https://github.com/card-io/card.io-Cordova-Plugin',
            platforms: ['iOS', 'Android']
        })
    ], CardIO);
    return CardIO;
}());
exports.CardIO = CardIO;

},{"./plugin":49}],19:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Clipboard
 * @description
 * Clipboard management plugin for Cordova that supports iOS, Android, and Windows Phone 8.
 *
 * Requires Cordova plugin: https://github.com/VersoSolutions/CordovaClipboard
 * For more info, please see the [Clipboard plugin docs](https://github.com/VersoSolutions/CordovaClipboard.git).
 *
 * @usage
 * ```js
 * import {Clipboard} from 'ionic-native';
 *
 *
 *
 * Clipboard.copy("Hello world");
 *
 * Clipboard.paste().then(
 *    (resolve : string) => {
  *     alert(resolve);
*     },
 *     (reject : string) => {
 *     alert("Error: " + reject);
 *     }
*     );
 * );
 * ```
 */
var Clipboard = (function () {
    function Clipboard() {
    }
    /**
     * Copies the given text
     * @param text
     * @returns {Promise<T>}
     */
    Clipboard.copy = function (text) { return; };
    /**
     * Pastes the text stored in clipboard
     * @returns {Promise<T>}
     */
    Clipboard.paste = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], Clipboard, "copy", null);
    __decorate([
        plugin_1.Cordova()
    ], Clipboard, "paste", null);
    Clipboard = __decorate([
        plugin_1.Plugin({
            plugin: 'https://github.com/VersoSolutions/CordovaClipboard.git',
            pluginRef: 'cordova.plugins.clipboard',
            repo: 'https://github.com/VersoSolutions/CordovaClipboard',
            platforms: ['Amazon Fire OS', 'iOS', 'Android', 'BlackBerry 10', 'Windows Phone 7', 'Windows Phone 8', 'Windows', 'Firefox OS', 'Browser']
        })
    ], Clipboard);
    return Clipboard;
}());
exports.Clipboard = Clipboard;

},{"./plugin":49}],20:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Contacts
 * @description
 * Access and manage Contacts on the device.
 *
 * Requires plugin: `cordova-plugin-contacts`
 * For full info, please see the [Cordova Contacts plugin docs](https://github.com/apache/cordova-plugin-contacts)
 *
 * @usage
 *
 * ```js
 * import {Contacts} from 'ionic-native';
 *
 *
 *
 * Contacts.create({
 *   displayName: "Mr. Ionitron"
 * }).then((contact) => {}, (err) => {})
 * ```
 *
 *
 */
var Contacts = (function () {
    function Contacts() {
    }
    /**
     * Create a new Contact object.
     *
     * @param options {Object} Object whose properties the created Contact should have.
     * @return {Contact} Returns the created contact
     */
    Contacts.create = function (options) {
        return new Contact();
    };
    ;
    /**
     * Search for contacts in the Contacts list.
     *
     * Example: Contacts.find(['*'], { filter: 'Max' }) // will search for a displayName of 'Max'
     *
     * @param fields {string[]}  Contact fields to be used as a search qualifier.
     *  A zero-length contactFields parameter is invalid and results in ContactError.INVALID_ARGUMENT_ERROR.
     *  A contactFields value of "*" searches all contact fields.
     *
     * @param options {Object} the options to query with:
     *   filter: The search string used to find navigator.contacts. (string) (Default: "")
     *   multiple: Determines if the find operation returns multiple navigator.contacts. (Boolean) (Default: false)
     *   desiredFields: Contact fields to be returned back. If specified, the resulting Contact object only features values for these fields. (DOMString[]) [Optional]
     *   hasPhoneNumber(Android only): Filters the search to only return contacts with a phone number informed. (Boolean) (Default: false)
     *
     * @return Returns a Promise that resolves with the search results (an array of Contact objects)
     */
    Contacts.find = function (fields, options) { return; };
    /**
     * Select a single Contact.
     * @return Returns a Promise that resolves with the selected Contact
     */
    Contacts.pickContact = function () { return; };
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], Contacts, "create", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 2
        })
    ], Contacts, "find", null);
    __decorate([
        plugin_1.Cordova()
    ], Contacts, "pickContact", null);
    Contacts = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-contacts',
            pluginRef: 'navigator.contacts',
            repo: 'https://github.com/apache/cordova-plugin-contacts'
        })
    ], Contacts);
    return Contacts;
}());
exports.Contacts = Contacts;

},{"./plugin":49}],21:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Date Picker
 * @description
 * The DatePicker plugin allows the user to fetch date or time using native dialogs.
 *
 * Platforms supported: iOS, Android, Windows
 *
 * Requires Cordova plugin: `cordova-plugin-datepicker`. For more info, please see the [DatePicker plugin docs](https://github.com/VitaliiBlagodir/cordova-plugin-datepicker).
 *
 * @usage
 * ```js
 * import {DatePicker} from 'ionic-native';
 *
 *
 *
 * DatePicker.show({
 *   date: new Date(),
 *   mode: 'date'
 * }).then(
 *   date => console.log("Got date: ", date),
 *   err => console.log("Error occurred while getting date:", err)
 * );
 * ```
 *
 */
var DatePicker = (function () {
    function DatePicker() {
    }
    /**
     * Shows the date and/or time picker dialog(s)
     * @param options
     * @returns {Promise<Date>} Returns a promise that resolves with the picked date and/or time, or rejects with an error.
     */
    DatePicker.show = function (options) { return; };
    __decorate([
        plugin_1.Cordova()
    ], DatePicker, "show", null);
    DatePicker = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-datepicker',
            pluginRef: 'datePicker',
            repo: 'https://github.com/VitaliiBlagodir/cordova-plugin-datepicker'
        })
    ], DatePicker);
    return DatePicker;
}());
exports.DatePicker = DatePicker;

},{"./plugin":49}],22:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name DB Meter
 * @description This plugin defines a global DBMeter object, which permits to get the decibel values from the microphone.
 * @usage
 * ```ts
 * import {DBMeter} from 'ionic-native';
 *
 *
 *
 * // Start listening
 * let subscription = DBMeter.start().subscribe(
 *   data => console.log(data)
 * );
 *
 * // Check if we are listening
 * DBMeter.isListening().then(
 *   (isListening : boolean) => console.log(isListening)
 * );
 *
 * // Stop listening
 * subscription.unsubscribe();
 *
 * // Delete DBMeter instance from memory
 * DBMeter.delete().then(
 *   () => console.log("Deleted DB Meter instance"),
 *   error => console.log("Error occurred while deleting DB Meter instance")
 * );
 * ```
 */
var DBMeter = (function () {
    function DBMeter() {
    }
    /**
     * Starts listening
     * @return {Observable<string>} Returns an observable. Subscribe to start listening. Unsubscribe to stop listening.
     */
    DBMeter.start = function () { return; };
    /**
     * Stops listening
     * @private
     */
    DBMeter.stop = function () { return; };
    /**
     * Check if the DB Meter is listening
     * @return {Promise<boolean>} Returns a promise that resolves with a boolean that tells us whether the DB meter is listening
     */
    DBMeter.isListening = function () { return; };
    /**
     * Delete the DB Meter instance
     * @return {Promise<any>} Returns a promise that will resolve if the instance has been deleted, and rejects if errors occur.
     */
    DBMeter.delete = function () { return; };
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'stop'
        })
    ], DBMeter, "start", null);
    __decorate([
        plugin_1.Cordova()
    ], DBMeter, "stop", null);
    __decorate([
        plugin_1.Cordova()
    ], DBMeter, "isListening", null);
    __decorate([
        plugin_1.Cordova()
    ], DBMeter, "delete", null);
    DBMeter = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-dbmeter',
            pluginRef: 'DBMeter',
            repo: 'https://github.com/akofman/cordova-plugin-dbmeter',
            platforms: ['iOS', 'Android']
        })
    ], DBMeter);
    return DBMeter;
}());
exports.DBMeter = DBMeter;

},{"./plugin":49}],23:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Ionic Deeplinks
 * @description This plugin handles deeplinks on iOS and Android for both custom URL scheme links
 * and Universal App Links.
 *
 * @usage
 * ```ts
 * import {IonicDeeplinks} from 'ionic-native';
 *
 * ```
 */
var Deeplinks = (function () {
    function Deeplinks() {
    }
    /**
     * Define a set of paths to match against incoming deeplinks.
     *
     * @param {paths} Define a set of paths to match against incoming deeplinks.
     * paths takes an object of the form { 'path': data }. If a deeplink
     * matches the path, the resulting path-data pair will be returned in the
     * promise result which you can then use to navigate in the app as you see fit.
     * @returns {Promise} Returns a Promise that resolves when a deeplink comes through, and
     * is rejected if a deeplink comes through that does not match a given path.
     */
    Deeplinks.route = function (paths) { return; };
    /**
     *
     * This is a convenience version of `route` that takes a reference to a NavController
     * from Ionic 2, or a custom class that conforms to this protocol:
     *
     * NavController.push = function(View, Params){}
     *
     * This handler will automatically navigate when a route matches. If you need finer-grained
     * control over the behavior of a matching deeplink, use the plain `route` method.
     *
     * @param {paths} Define a set of paths to match against incoming deeplinks.
     * paths takes an object of the form { 'path': data }. If a deeplink
     * matches the path, the resulting path-data pair will be returned in the
     * promise result which you can then use to navigate in the app as you see fit.
     *
     * @returns {Promise} Returns a Promise that resolves when a deeplink comes through, and
     * is rejected if a deeplink comes through that does not match a given path.
     */
    Deeplinks.routeWithNavController = function (navController, paths) { return; };
    __decorate([
        plugin_1.Cordova({
            observable: true
        })
    ], Deeplinks, "route", null);
    __decorate([
        plugin_1.Cordova({
            observable: true
        })
    ], Deeplinks, "routeWithNavController", null);
    Deeplinks = __decorate([
        plugin_1.Plugin({
            plugin: 'ionic-plugin-deeplinks',
            pluginRef: 'IonicDeeplink',
            repo: 'https://github.com/driftyo/ionic-plugin-deeplinks',
            platforms: ['iOS', 'Android']
        })
    ], Deeplinks);
    return Deeplinks;
}());
exports.Deeplinks = Deeplinks;

},{"./plugin":49}],24:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Device
 * @description
 * Access information about the underlying device and platform.
 *
 * @usage
 * ```js
 * import {Device} from 'ionic-native';
 *
 *
 *
 * console.log('Device UUID is: ' + Device.device.uuid);
 * ```
 */
var Device = (function () {
    function Device() {
    }
    Object.defineProperty(Device, "device", {
        /**
         * Returns the whole device object.
         *
         * @returns {Object} The device object.
         */
        get: function () { return window.device; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        plugin_1.CordovaProperty
    ], Device, "device", null);
    Device = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-device',
            pluginRef: 'device',
            repo: 'https://github.com/apache/cordova-plugin-device'
        })
    ], Device);
    return Device;
}());
exports.Device = Device;

},{"./plugin":49}],25:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
var DeviceAccounts = (function () {
    function DeviceAccounts() {
    }
    /**
     *  Gets all accounts registered on the Android Device
     */
    DeviceAccounts.get = function () { return; };
    /**
     *  Get all accounts registered on Android device for requested type
     */
    DeviceAccounts.getByType = function (type) { return; };
    /**
     *  Get all emails registered on Android device (accounts with 'com.google' type)
     */
    DeviceAccounts.getEmails = function () { return; };
    /**
     *  Get the first email registered on Android device
     */
    DeviceAccounts.getEmail = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], DeviceAccounts, "get", null);
    __decorate([
        plugin_1.Cordova()
    ], DeviceAccounts, "getByType", null);
    __decorate([
        plugin_1.Cordova()
    ], DeviceAccounts, "getEmails", null);
    __decorate([
        plugin_1.Cordova()
    ], DeviceAccounts, "getEmail", null);
    DeviceAccounts = __decorate([
        plugin_1.Plugin({
            plugin: 'https://github.com/loicknuchel/cordova-device-accounts.git',
            pluginRef: 'plugins.DeviceAccounts',
            repo: 'https://github.com/loicknuchel/cordova-device-accounts',
            platforms: ['Android']
        })
    ], DeviceAccounts);
    return DeviceAccounts;
}());
exports.DeviceAccounts = DeviceAccounts;

},{"./plugin":49}],26:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Device Motion
 * @description
 * Requires Cordova plugin: `cordova-plugin-device-motion`. For more info, please see the [Device Motion docs](https://github.com/apache/cordova-plugin-device-motion).
 *
 * @usage
 * ```ts
 * import {DeviceMotion} from 'ionic-native';
 *
 *
 *
 * // Get the device current acceleration
 * DeviceMotion.getCurrentAcceleration().then(
 *   acceleration => console.log(acceleration),
 *   error => console.log(error)
 * );
 *
 * // Watch device acceleration
 * var subscription = DeviceMotion.watchAcceleration().subscribe(acceleration => {
 *   console.log(acceleration);
 * });
 *
 * // Stop watch
 * subscription.unsubscribe();
 *
 * ```
 */
var DeviceMotion = (function () {
    function DeviceMotion() {
    }
    /**
     * Get the current acceleration along the x, y, and z axes.
     *
     * @returns {Promise<any>} Returns object with x, y, z, and timestamp properties
     */
    DeviceMotion.getCurrentAcceleration = function () {
        return;
    };
    /**
     * Watch the device acceleration. Clear the watch by unsubscribing from the observable.
     *
     * ```ts
     * // Watch device acceleration
     * var subscription = DeviceMotion.watchPosition().subscribe(acceleration => {
     *   console.log(acceleration);
     * });
     *
     * // Stop watch
     * subscription.unsubscribe();
     * ```
     * @param options
     * @returns {Observable<AccelerationData>}
     */
    DeviceMotion.watchAcceleration = function (options) {
        return;
    };
    __decorate([
        plugin_1.Cordova()
    ], DeviceMotion, "getCurrentAcceleration", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse',
            observable: true,
            clearFunction: 'clearWatch'
        })
    ], DeviceMotion, "watchAcceleration", null);
    DeviceMotion = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-device-motion',
            pluginRef: 'navigator.accelerometer',
            repo: 'https://github.com/apache/cordova-plugin-device-motion'
        })
    ], DeviceMotion);
    return DeviceMotion;
}());
exports.DeviceMotion = DeviceMotion;

},{"./plugin":49}],27:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Device Orientation
 * @description
 * Requires Cordova plugin: `cordova-plugin-device-orientation`. For more info, please see the [Device Orientation docs](https://github.com/apache/cordova-plugin-device-orientation).
 *
 * @usage
 * ```ts
 * import {DeviceOrientation} from 'ionic-native';
 *
 *
 *
 * // Get the device current compass heading
 * DeviceOrientation.getCurrentHeading().then(
 *   data => console.log(data),
 *   error => console.log(error)
 * );
 *
 * // Watch the device compass heading change
 * var subscription = DeviceOrientation.watchHeading().subscribe(
 *   data => console.log(data)
 * );
 *
 * // Stop watching heading change
 * subscription.unsubscribe();
 * ```
 */
var DeviceOrientation = (function () {
    function DeviceOrientation() {
    }
    /**
     * Get the current compass heading.
     * @returns {Promise<CompassHeading>}
     */
    DeviceOrientation.getCurrentHeading = function () { return; };
    /**
     * Get the device current heading at a regular interval
     *
     * Stop the watch by unsubscribing from the observable
     * @param options
     * @returns {Observable<CompassHeading>}
     */
    DeviceOrientation.watchHeading = function (options) { return; };
    __decorate([
        plugin_1.Cordova()
    ], DeviceOrientation, "getCurrentHeading", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse',
            observable: true,
            clearFunction: 'clearWatch'
        })
    ], DeviceOrientation, "watchHeading", null);
    DeviceOrientation = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-device-orientation',
            pluginRef: 'navigator.compass',
            repo: 'https://github.com/apache/cordova-plugin-device-orientation'
        })
    ], DeviceOrientation);
    return DeviceOrientation;
}());
exports.DeviceOrientation = DeviceOrientation;

},{"./plugin":49}],28:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
var Diagnostic = (function () {
    function Diagnostic() {
    }
    /**
     * Checks if app is able to access device location.
     */
    Diagnostic.isLocationEnabled = function () {
        // This Promise is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Promise, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Promise(function (res, rej) { });
    };
    /**
     * Checks if Wifi is connected/enabled. On iOS this returns true if the device is connected to a network by WiFi. On Android and Windows 10 Mobile this returns true if the WiFi setting is set to enabled.
     * On Android this requires permission. `<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />`
     */
    Diagnostic.isWifiEnabled = function () {
        // This Promise is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Promise, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Promise(function (res, rej) { });
    };
    /*
     * Checks if the device has a camera. On Android this returns true if the device has a camera. On iOS this returns true if both the device has a camera AND the application is authorized to use it. On Windows 10 Mobile this returns true if both the device has a rear-facing camera AND the
     * application is authorized to use it.
     */
    Diagnostic.isCameraEnabled = function () {
        // This Promise is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Promise, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Promise(function (res, rej) { });
    };
    /*
     * Checks if the device has Bluetooth capabilities and if so that Bluetooth is switched on (same on Android, iOS and Windows 10 Mobile)
     * On Android this requires permission <uses-permission android:name="android.permission.BLUETOOTH" />
     */
    Diagnostic.isBluetoothEnabled = function () {
        // This Promise is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Promise, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Promise(function (res, rej) { });
    };
    /*
     * Returns the location authorization status for the application.
     * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     *
     * mode - (iOS-only / optional) location authorization mode: "always" or "when_in_use". If not specified, defaults to "when_in_use".
     */
    Diagnostic.requestLocationAuthorization = function (mode) {
        // This Promise is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Promise, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Promise(function (res, rej) { });
    };
    /*
     * Checks if the application is authorized to use location.
     * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     */
    Diagnostic.isLocationAuthorized = function () {
        // This Promise is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Promise, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Promise(function (res, rej) { });
    };
    /*
     * Checks if camera hardware is present on device.
     */
    Diagnostic.isCameraPresent = function () {
        // This Promise is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Promise, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Promise(function (res, rej) { });
    };
    /*
     * Checks if the application is authorized to use the camera.
     * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
     */
    Diagnostic.isCameraAuthorized = function () {
        // This Promise is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Promise, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Promise(function (res, rej) { });
    };
    /*
     * Checks if location mode is set to return high-accuracy locations from GPS hardware.
     *   Returns true if Location mode is enabled and is set to either:
     *   - Device only = GPS hardware only (high accuracy)
     *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
     */
    Diagnostic.isGpsLocationEnabled = function () {
        // This Promise is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Promise, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Promise(function (res, rej) { });
    };
    /*
     * Checks if location mode is set to return low-accuracy locations from network triangulation/WiFi access points.
     * Returns true if Location mode is enabled and is set to either:
     *   - Battery saving = network triangulation and Wifi network IDs (low accuracy)
     *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
     */
    Diagnostic.isNetworkLocationEnabled = function () {
        // This Promise is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Promise, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Promise(function (res, rej) { });
    };
    /**
     *
     * Checks if remote (push) notifications are enabled.
     * On iOS 8+, returns true if app is registered for remote notifications AND "Allow Notifications" switch is ON AND alert style is not set to "None" (i.e. "Banners" or "Alerts").
     * On iOS <=7, returns true if app is registered for remote notifications AND alert style is not set to "None" (i.e. "Banners" or "Alerts") - same as isRegisteredForRemoteNotifications().
     */
    Diagnostic.isRemoteNotificationsEnabled = function () {
        // This Promise is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Promise, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Promise(function (res, rej) { });
    };
    /**
     *
     * Indicates if the app is registered for remote (push) notifications on the device.
     * On iOS 8+, returns true if the app is registered for remote notifications and received its device token, or false if registration has not occurred, has failed, or has been denied by the user. Note that user preferences for notifications in the Settings app will not affect this.
     * On iOS <=7, returns true if app is registered for remote notifications AND alert style is not set to "None" (i.e. "Banners" or "Alerts") - same as isRemoteNotificationsEnabled().
     */
    Diagnostic.isRegisteredForRemoteNotifications = function () {
        // This Promise is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Promise, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Promise(function (res, rej) { });
    };
    __decorate([
        plugin_1.Cordova()
    ], Diagnostic, "isLocationEnabled", null);
    __decorate([
        plugin_1.Cordova()
    ], Diagnostic, "isWifiEnabled", null);
    __decorate([
        plugin_1.Cordova()
    ], Diagnostic, "isCameraEnabled", null);
    __decorate([
        plugin_1.Cordova()
    ], Diagnostic, "isBluetoothEnabled", null);
    __decorate([
        plugin_1.Cordova()
    ], Diagnostic, "requestLocationAuthorization", null);
    __decorate([
        plugin_1.Cordova()
    ], Diagnostic, "isLocationAuthorized", null);
    __decorate([
        plugin_1.Cordova()
    ], Diagnostic, "isCameraPresent", null);
    __decorate([
        plugin_1.Cordova()
    ], Diagnostic, "isCameraAuthorized", null);
    __decorate([
        plugin_1.Cordova()
    ], Diagnostic, "isGpsLocationEnabled", null);
    __decorate([
        plugin_1.Cordova()
    ], Diagnostic, "isNetworkLocationEnabled", null);
    __decorate([
        plugin_1.Cordova()
    ], Diagnostic, "isRemoteNotificationsEnabled", null);
    __decorate([
        plugin_1.Cordova()
    ], Diagnostic, "isRegisteredForRemoteNotifications", null);
    Diagnostic = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova.plugins.diagnostic',
            pluginRef: 'cordova.plugins.diagnostic',
            repo: 'https://github.com/floatinghotpot/cordova-plugin-admob'
        })
    ], Diagnostic);
    return Diagnostic;
}());
exports.Diagnostic = Diagnostic;

},{"./plugin":49}],29:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Dialogs
 * @description
 * This plugin gives you ability to access and customize the device native dialogs.
 *
 * Requires Cordova plugin: `cordova-plugin-dialogs`. For more info, please see the [Dialogs plugin docs](https://github.com/apache/cordova-plugin-dialogs).
 *
 * @usage
 * ```js
 * import {Dialogs} from 'ionic-native';
 *
 *
 *
 *
 * ```
 */
var Dialogs = (function () {
    function Dialogs() {
    }
    /**
     * Shows a custom alert or dialog box.
     * @param message Dialog message. (String)
     * @param title Dialog title. (String) (Optional, defaults to Alert)
     * @param buttonName Button name. (String) (Optional, defaults to OK)
     * @returns {Promise<any>} Returns a blank promise once the user has dismissed the alert.
     */
    Dialogs.alert = function (message, title, buttonName) {
        if (title === void 0) { title = 'Alert'; }
        if (buttonName === void 0) { buttonName = 'OK'; }
        return;
    };
    /**
     * Displays a customizable confirmation dialog box.
     * @param message Dialog message. (String)
     * @param title Dialog title. (String) (Optional, defaults to Confirm)
     * @param buttonLabels Array of strings specifying button labels. (Array) (Optional, defaults to [OK,Cancel])
     * @returns {Promise<number>} Returns a promise that resolves the button index that was clicked. Note that the index use one-based indexing.
     */
    Dialogs.confirm = function (message, title, buttonLabels) {
        if (title === void 0) { title = 'Confirm'; }
        if (buttonLabels === void 0) { buttonLabels = ['OK', 'Cancel']; }
        return;
    };
    /**
     * Displays a native dialog box that is more customizable than the browser's prompt function.
     * @param message Dialog message. (String)
     * @param title Dialog title (String) (Optional, defaults to Prompt)
     * @param buttonLabels  Array of strings specifying button labels (Array) (Optional, defaults to ["OK","Cancel"])
     * @param defaultText Default textbox input value (String) (Optional, Default: empty string)
     * @returns {Promise<any>} Returns a promise that resolves an object with the button index clicked and the text entered
     */
    Dialogs.prompt = function (message, title, buttonLabels, defaultText) {
        if (title === void 0) { title = 'Prompt'; }
        if (buttonLabels === void 0) { buttonLabels = ['OK', 'Cancel']; }
        if (defaultText === void 0) { defaultText = ''; }
        return;
    };
    /**
     * The device plays a beep sound.
     * @param times The number of times to repeat the beep. (Number)
     */
    Dialogs.beep = function (times) { };
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 4
        })
    ], Dialogs, "alert", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 4
        })
    ], Dialogs, "confirm", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 5
        })
    ], Dialogs, "prompt", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], Dialogs, "beep", null);
    Dialogs = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-dialogs',
            pluginRef: 'navigator.notification',
            repo: 'https://github.com/apache/cordova-plugin-dialogs.git'
        })
    ], Dialogs);
    return Dialogs;
}());
exports.Dialogs = Dialogs;

},{"./plugin":49}],30:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Email Composer
 * @description
 *
 * Requires Cordova plugin: cordova-plugin-email-composer. For more info, please see the [Email Composer plugin docs](https://github.com/katzer/cordova-plugin-email-composer).
 *
 * @usage
 * ```ts
 * import {EmailComposer} from 'ionic-native';
 *
 *
 * EmailComposer.isAvailable().then((available) =>{
 *  if(available) {
 *    //Now we know we can send
 *  }
 * });
 *
 * let email = {
 *   to: 'max@mustermann.de',
 *   cc: 'erika@mustermann.de',
 *   bcc: ['john@doe.com', 'jane@doe.com'],
 *   attachments: [
 *     'file://img/logo.png',
 *     'res://icon.png',
 *     'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
 *     'file://README.pdf'
 *   ],
 *   subject: 'Cordova Icons',
 *   body: 'How are you? Nice greetings from Leipzig',
 *   isHtml: true
 * };
 *
 * // Send a text message using default options
 * EmailComposer.open(email);
 *
 * ```
 */
var EmailComposer = (function () {
    function EmailComposer() {
    }
    /**
     * Verifies if sending emails is supported on the device.
     *
     * @param app {string?} An optional app id or uri scheme.
     * @returns {Promise<boolean>} Resolves if available, rejects if not available
     */
    EmailComposer.isAvailable = function (app) {
        return new Promise(function (resolve, reject) {
            if (app)
                cordova.plugins.email.isAvailable(app, function (isAvailable) { if (isAvailable)
                    resolve();
                else
                    reject(); });
            else
                cordova.plugins.email.isAvailable(function (isAvailable) { if (isAvailable)
                    resolve();
                else
                    reject(); });
        });
    };
    /**
     * Adds a new mail app alias.
     *
     * @param alias {string} The alias name
     * @param packageName {string} The package name
     */
    EmailComposer.addAlias = function (alias, packageName) { };
    /**
     * Displays the email composer pre-filled with data.
     *
     * @param email {Email} Email
     * @param scope {any?} An optional scope for the promise
     * @returns {Promise<any>} Resolves promise when the EmailComposer has been opened
     */
    EmailComposer.open = function (email, scope) { return; };
    __decorate([
        plugin_1.Cordova()
    ], EmailComposer, "addAlias", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 3
        })
    ], EmailComposer, "open", null);
    EmailComposer = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-email-composer',
            pluginRef: 'cordova.plugins.email',
            repo: 'https://github.com/katzer/cordova-plugin-email-composer.git',
            platforms: ['Android', 'iOS', 'Windows Phone 8']
        })
    ], EmailComposer);
    return EmailComposer;
}());
exports.EmailComposer = EmailComposer;

},{"./plugin":49}],31:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Facebook
 * @description
 * Use the Facebook Connect plugin to obtain access to the native FB application on iOS and Android.
 *
 * Requires Cordova plugin: `cordova-plugin-facebook4`. For more info, please see the [Facebook Connect](https://github.com/jeduan/cordova-plugin-facebook4).
 *
 * #### Installation
 *
 *  To use the FB plugin, you first have to create a new Facebook App inside of the Facebook developer portal at [https://developers.facebook.com/apps](https://developers.facebook.com/apps).
 *
 * [![fb-getstarted-1](/img/docs/native/Facebook/1.png)](https://developers.facebook.com/apps/)
 *
 * Retrieve the `App ID` and `App Name`.
 *
 * [![fb-getstarted-2](/img/docs/native/Facebook/2.png)](https://developers.facebook.com/apps/)
 *
 * Then type in the following command in your Terminal, where APP_ID and APP_NAME are the values from the Facebook Developer portal.
 *
 * ```bash
 *  ionic plugin add cordova-plugin-facebook4 --save --variable APP_ID="123456789" --variable APP_NAME="myApplication"
 * ```
 *
 * After, you'll need to add the native platforms you'll be using to your app in the Facebook Developer portal under your app's Settings:
 *
 * [![fb-getstarted-3](/img/docs/native/Facebook/3.png)](https://developers.facebook.com/apps/)
 *
 * Click `'Add Platform'`.
 *
 * [![fb-getstarted-4](/img/docs/native/Facebook/4.png)](https://developers.facebook.com/apps/)
 *
 * At this point you'll need to open your project's [`config.xml`](https://cordova.apache.org/docs/en/latest/config_ref/index.html) file, found in the root directory of your project.
 *
 * Take note of the `id` for the next step:
 * ```
 * <widget id="com.mycompany.testapp" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
 * ```
 *
 * You can also edit the `id` to whatever you'd like it to be.
 *
 * #### iOS Install
 * Under 'Bundle ID', add the `id` from your `config.xml` file:
 *
 * [![fb-getstarted-5](/img/docs/native/Facebook/5.png)](https://developers.facebook.com/apps/)
 *
 *
 * #### Android Install
 * Under 'Google Play Package Name', add the `id` from your `config.xml` file:
 *
 * [![fb-getstarted-6](/img/docs/native/Facebook/6.png)](https://developers.facebook.com/apps/)
 *
 *
 * And that's it! You can now make calls to Facebook using the plugin.
 *
 * ## Events
 *
 * App events allow you to understand the makeup of users engaging with your app, measure the performance of your Facebook mobile app ads, and reach specific sets of your users with Facebook mobile app ads.
 *
 * - [iOS] [https://developers.facebook.com/docs/ios/app-events](https://developers.facebook.com/docs/ios/app-events)
 * - [Android] [https://developers.facebook.com/docs/android/app-events](https://developers.facebook.com/docs/android/app-events)
 * - [JS] Does not have an Events API, so the plugin functions are empty and will return an automatic success
 *
 * Activation events are automatically tracked for you in the plugin.
 *
 * Events are listed on the [insights page](https://www.facebook.com/insights/).
 *
 * For tracking events, see `logEvent` and `logPurchase`.
 *
 * @usage
 * ```js
 * import {Facebook} from 'ionic-native';
 *
 *
 *
 * ```
 *
 */
var Facebook = (function () {
    function Facebook() {
    }
    /**
     * Browser wrapper
     * @param appId
     * @param version
     */
    Facebook.browserInit = function (appId, version) {
        return;
    };
    /**
     * Login to Facebook to authenticate this app.
     *
     * ```ts
     * {
     *   status: "connected",
     *   authResponse: {
     *     session_key: true,
     *     accessToken: "kgkh3g42kh4g23kh4g2kh34g2kg4k2h4gkh3g4k2h4gk23h4gk2h34gk234gk2h34AndSoOn",
     *     expiresIn: 5183979,
     *     sig: "...",
     *     secret: "...",
     *     userID: "634565435"
     *   }
     * }
     * ```
     *
     * @param {string[]}  permissions List of [permissions](https://developers.facebook.com/docs/facebook-login/permissions) this app has upon logging in.
     * @return Returns a Promise that resolves with a status object if login succeeds, and rejects if login fails.
     */
    Facebook.login = function (permissions) { return; };
    /**
     * Logout of Facebook.
     *
     * For more info see the [Facebook docs](https://developers.facebook.com/docs/reference/javascript/FB.logout)
     * @return Returns a Promise that resolves on a successful logout, and rejects if logout fails.
     */
    Facebook.logout = function () { return; };
    /**
     * Determine if a user is logged in to Facebook and has authenticated your app.  There are three possible states for a user:
     *
     * 1) the user is logged into Facebook and has authenticated your application (connected)
     * 2) the user is logged into Facebook but has not authenticated your application (not_authorized)
     * 3) the user is either not logged into Facebook or explicitly logged out of your application so it doesn't attempt to connect to Facebook and thus, we don't know if they've authenticated your application or not (unknown)
     *
     * Resolves with a response like:
     *
     * ```
     * {
     *   authResponse: {
     *     userID: "12345678912345",
     *     accessToken: "kgkh3g42kh4g23kh4g2kh34g2kg4k2h4gkh3g4k2h4gk23h4gk2h34gk234gk2h34AndSoOn",
     *     session_Key: true,
     *     expiresIn: "5183738",
     *     sig: "..."
     *   },
     *   status: "connected"
     * }
     * ```
     *
     * For more information see the [Facebook docs](https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus)
     *
     * @return Returns a Promise that resolves with a status, or rejects with an error
     */
    Facebook.getLoginStatus = function () { return; };
    /**
     * Get a Facebook access token for using Facebook services.
     *
     * @return Returns a Promise that resolves with an access token, or rejects with an error
     */
    Facebook.getAccessToken = function () { return; };
    /**
     * Show one of various Facebook dialogs. Example of options for a Share dialog:
     *
     * ```
     * {
     *   method: "share",
     *   href: "http://example.com",
     *   caption: "Such caption, very feed.",
     *   description: "Much description",
     *   picture: 'http://example.com/image.png'
     * }
     * ```
     *
     * For more options see the [Cordova plugin docs](https://github.com/jeduan/cordova-plugin-facebook4#show-a-dialog) and the [Facebook docs](https://developers.facebook.com/docs/javascript/reference/FB.ui)
     * @options {Object}  options The dialog options
     * @return Returns a Promise that resolves with success data, or rejects with an error
     */
    Facebook.showDialog = function (options) { return; };
    /**
     * Make a call to Facebook Graph API. Can take additional permissions beyond those granted on login.
     *
     * For more information see:
     *
     *  Calling the Graph API - https://developers.facebook.com/docs/javascript/reference/FB.api
     *  Graph Explorer - https://developers.facebook.com/tools/explorer
     *  Graph API - https://developers.facebook.com/docs/graph-api
     *
     * @param {string}  requestPath Graph API endpoint you want to call
     * @param {string[]}  permissions List of [permissions](https://developers.facebook.com/docs/facebook-login/permissions) for this request.
     * @return Returns a Promise that resolves with the result of the request, or rejects with an error
     */
    Facebook.api = function (requestPath, permissions) { return; };
    /**
     * Log an event.  For more information see the Events section above.
     *
     * @param {string}  name Name of the event
     * @param {Object}  [params] An object containing extra data to log with the event
     * @param {number}  [valueToSum] any value to be added to added to a sum on each event
     * @return
     */
    Facebook.logEvent = function (name, params, valueToSum) { return; };
    /**
     * Log a purchase. For more information see the Events section above.
     *
     * @param {number}  value Value of the purchase.
     * @param {string}  currency The currency, as an [ISO 4217 currency code](http://en.wikipedia.org/wiki/ISO_4217)
     * @return Returns a Promise
     */
    Facebook.logPurchase = function (value, currency) { return; };
    /**
     * Open App Invite dialog. Does not require login.
     *
     * For more information see:
     *
     *   the App Invites Overview - https://developers.facebook.com/docs/app-invites/overview
     *   the App Links docs - https://developers.facebook.com/docs/applinks
     *
     *
     * @param {Object}  options An object containing an [App Link](https://developers.facebook.com/docs/applinks) URL to your app and an optional image URL.
     *   url: [App Link](https://developers.facebook.com/docs/applinks) to your app
     *   picture: image to be displayed in the App Invite dialog
     *
     * @return Returns a Promise that resolves with the result data, or rejects with an error
     */
    Facebook.appInvite = function (options) { return; };
    __decorate([
        plugin_1.Cordova()
    ], Facebook, "browserInit", null);
    __decorate([
        plugin_1.Cordova()
    ], Facebook, "login", null);
    __decorate([
        plugin_1.Cordova()
    ], Facebook, "logout", null);
    __decorate([
        plugin_1.Cordova()
    ], Facebook, "getLoginStatus", null);
    __decorate([
        plugin_1.Cordova()
    ], Facebook, "getAccessToken", null);
    __decorate([
        plugin_1.Cordova()
    ], Facebook, "showDialog", null);
    __decorate([
        plugin_1.Cordova()
    ], Facebook, "api", null);
    __decorate([
        plugin_1.Cordova()
    ], Facebook, "logEvent", null);
    __decorate([
        plugin_1.Cordova()
    ], Facebook, "logPurchase", null);
    __decorate([
        plugin_1.Cordova()
    ], Facebook, "appInvite", null);
    Facebook = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-facebook4',
            pluginRef: 'facebookConnectPlugin',
            repo: 'https://github.com/jeduan/cordova-plugin-facebook4',
            install: 'cordova plugin add cordova-plugin-facebook4 --variable APP_ID="123456789" --variable APP_NAME="myApplication"'
        })
    ], Facebook);
    return Facebook;
}());
exports.Facebook = Facebook;

},{"./plugin":49}],32:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name File
 * @description
 * This plugin implements a File API allowing read/write access to files residing on the device.
 *
 *  This plugin is based on several specs, including : The HTML5 File API http://www.w3.org/TR/FileAPI/
 *  The (now-defunct) Directories and System extensions Latest: http://www.w3.org/TR/2012/WD-file-system-api-20120417/
 *  Although most of the plugin code was written when an earlier spec was current: http://www.w3.org/TR/2011/WD-file-system-api-20110419/
 *  It also implements the FileWriter spec : http://dev.w3.org/2009/dap/file-system/file-writer.html
 */
var File = (function () {
    function File() {
    }
    // @Cordova()
    // static getFreeDiskSpace(): Promise<any> { return }
    /**
     * Check if a directory exists in a certain path, directory.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dir Name of directory to check
     * @return Returns a Promise that resolves or rejects with an error.
     */
    File.checkDir = function (path, dir) {
        var resolveFn, rejectFn;
        var promise = new Promise(function (resolve, reject) { resolveFn = resolve; rejectFn = reject; });
        if ((/^\//.test(dir))) {
            rejectFn('directory cannot start with \/');
        }
        if (!(/\/$/.test(dir))) {
            path += '/';
        }
        try {
            var directory = path + dir;
            window.resolveLocalFileSystemURL(directory, function (fileSystem) {
                if (fileSystem.isDirectory === true) {
                    resolveFn(fileSystem);
                }
                else {
                    rejectFn({ code: 13, message: 'input is not a directory' });
                }
            }, function (error) {
                error.message = File.cordovaFileError[error.code];
                rejectFn(error);
            });
        }
        catch (err) {
            err.message = File.cordovaFileError[err.code];
            rejectFn(err);
        }
        return promise;
    };
    /**
     * Creates a new directory in the specific path.
     * The replace boolean value determines whether to replace an existing directory with the same name.
     * If an existing directory exists and the replace value is false, the promise will fail and return an error.
     *
     * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory to create
     * @param {boolean} replace If true, replaces file with same name. If false returns error
     * @return Returns a Promise that resolves or rejects with an error.
     */
    File.createDir = function (path, dirName, replace) {
        var resolveFn, rejectFn;
        var promise = new Promise(function (resolve, reject) { resolveFn = resolve; rejectFn = reject; });
        if ((/^\//.test(dirName))) {
            rejectFn('directory cannot start with \/');
        }
        replace = !replace;
        var options = {
            create: true,
            exclusive: replace
        };
        try {
            window.resolveLocalFileSystemURL(path, function (fileSystem) {
                fileSystem.getDirectory(dirName, options, function (result) {
                    resolveFn(result);
                }, function (error) {
                    error.message = File.cordovaFileError[error.code];
                    rejectFn(error);
                });
            }, function (err) {
                err.message = File.cordovaFileError[err.code];
                rejectFn(err);
            });
        }
        catch (e) {
            e.message = File.cordovaFileError[e.code];
            rejectFn(e);
        }
        return promise;
    };
    /**
     * Remove a directory at a given path.
     *
     * @param {string} path The path to the directory
     * @param {string} dirName The directory name
     * @return Returns a Promise that resolves or rejects with an error.
     */
    File.removeDir = function (path, dirName) {
        var resolveFn, rejectFn;
        var promise = new Promise(function (resolve, reject) { resolveFn = resolve; rejectFn = reject; });
        if ((/^\//.test(dirName))) {
            rejectFn('directory cannot start with \/');
        }
        try {
            window.resolveLocalFileSystemURL(path, function (fileSystem) {
                fileSystem.getDirectory(dirName, { create: false }, function (dirEntry) {
                    dirEntry.remove(function () {
                        resolveFn({ success: true, fileRemoved: dirEntry });
                    }, function (error) {
                        error.message = File.cordovaFileError[error.code];
                        rejectFn(error);
                    });
                }, function (err) {
                    err.message = File.cordovaFileError[err.code];
                    rejectFn(err);
                });
            }, function (er) {
                er.message = File.cordovaFileError[er.code];
                rejectFn(er);
            });
        }
        catch (e) {
            e.message = File.cordovaFileError[e.code];
            rejectFn(e);
        }
        return promise;
    };
    /**
     * Move a directory to a given path.
     *
     * @param {string} path The source path to the directory
     * @param {string} dirName The source directory name
     * @param {string} newPath The destionation path to the directory
     * @param {string} newDirName The destination directory name
     * @return Returns a Promise that resolves or rejects with an error.
     */
    File.moveDir = function (path, dirName, newPath, newDirName) {
        var resolveFn, rejectFn;
        var promise = new Promise(function (resolve, reject) { resolveFn = resolve; rejectFn = reject; });
        newDirName = newDirName || dirName;
        if ((/^\//.test(newDirName))) {
            rejectFn('directory cannot start with \/');
        }
        try {
            window.resolveLocalFileSystemURL(path, function (fileSystem) {
                fileSystem.getDirectory(dirName, { create: false }, function (dirEntry) {
                    window.resolveLocalFileSystemURL(newPath, function (newDirEntry) {
                        dirEntry.moveTo(newDirEntry, newDirName, function (result) {
                            resolveFn(result);
                        }, function (error) {
                            rejectFn(error);
                        });
                    }, function (erro) {
                        rejectFn(erro);
                    });
                }, function (err) {
                    rejectFn(err);
                });
            }, function (er) {
                rejectFn(er);
            });
        }
        catch (e) {
            rejectFn(e);
        }
        return promise;
    };
    /**
     * Copy a directory in various methods. If destination directory exists, will fail to copy.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory to copy
     * @param {string} newPath Base FileSystem of new location
     * @param {string} newDirName New name of directory to copy to (leave blank to remain the same)
     * @return Returns a Promise that resolves or rejects with an error.
     */
    File.copyDir = function (path, dirName, newPath, newDirName) {
        var resolveFn, rejectFn;
        var promise = new Promise(function (resolve, reject) { resolveFn = resolve; rejectFn = reject; });
        newDirName = newDirName || dirName;
        if ((/^\//.test(newDirName))) {
            rejectFn('directory cannot start with \/');
        }
        try {
            window.resolveLocalFileSystemURL(path, function (fileSystem) {
                fileSystem.getDirectory(dirName, { create: false, exclusive: false }, function (dirEntry) {
                    window.resolveLocalFileSystemURL(newPath, function (newDirEntry) {
                        dirEntry.copyTo(newDirEntry, newDirName, function (result) {
                            resolveFn(result);
                        }, function (error) {
                            error.message = File.cordovaFileError[error.code];
                            rejectFn(error);
                        });
                    }, function (erro) {
                        erro.message = File.cordovaFileError[erro.code];
                        rejectFn(erro);
                    });
                }, function (err) {
                    err.message = File.cordovaFileError[err.code];
                    rejectFn(err);
                });
            }, function (er) {
                er.message = File.cordovaFileError[er.code];
                rejectFn(er);
            });
        }
        catch (e) {
            e.message = File.cordovaFileError[e.code];
            rejectFn(e);
        }
        return promise;
    };
    /**
     * List files and directory from a given path.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory
     * @return Returns a Promise that resolves or rejects with an error.
     */
    File.listDir = function (path, dirName) {
        var resolveFn, rejectFn;
        var promise = new Promise(function (resolve, reject) { resolveFn = resolve; rejectFn = reject; });
        if ((/^\//.test(dirName))) {
            rejectFn('directory cannot start with \/');
        }
        var options = {
            create: false,
            exclusive: false
        };
        try {
            window.resolveLocalFileSystemURL(path, function (fileSystem) {
                fileSystem.getDirectory(dirName, options, function (parent) {
                    var reader = parent.createReader();
                    reader.readEntries(function (entries) {
                        resolveFn(entries);
                    }, function () {
                        rejectFn('DIR_READ_ERROR : ' + path + dirName);
                    });
                }, function (error) {
                    error.message = File.cordovaFileError[error.code];
                    rejectFn(error);
                });
            }, function (err) {
                err.message = File.cordovaFileError[err.code];
                rejectFn(err);
            });
        }
        catch (e) {
            e.message = File.cordovaFileError[e.code];
            rejectFn(e);
        }
        return promise;
    };
    /**
     * Removes all files and the directory from a desired location.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory
     * @return Returns a Promise that resolves or rejects with an error.
     */
    File.removeRecursively = function (path, dirName) {
        var resolveFn, rejectFn;
        var promise = new Promise(function (resolve, reject) { resolveFn = resolve; rejectFn = reject; });
        if ((/^\//.test(dirName))) {
            rejectFn('directory cannot start with \/');
        }
        try {
            window.resolveLocalFileSystemURL(path, function (fileSystem) {
                fileSystem.getDirectory(dirName, { create: false }, function (dirEntry) {
                    dirEntry.removeRecursively(function () {
                        resolveFn({ success: true, fileRemoved: dirEntry });
                    }, function (error) {
                        error.message = File.cordovaFileError[error.code];
                        rejectFn(error);
                    });
                }, function (err) {
                    err.message = File.cordovaFileError[err.code];
                    rejectFn(err);
                });
            }, function (er) {
                er.message = File.cordovaFileError[er.code];
                rejectFn(er);
            });
        }
        catch (e) {
            e.message = File.cordovaFileError[e.code];
            rejectFn(e);
        }
        return promise;
    };
    /**
     * Check if a file exists in a certain path, directory.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file to check
     * @return Returns a Promise that resolves or rejects with an error.
     */
    File.checkFile = function (path, file) {
        var resolveFn, rejectFn;
        var promise = new Promise(function (resolve, reject) { resolveFn = resolve; rejectFn = reject; });
        if ((/^\//.test(file))) {
            rejectFn('file cannot start with \/');
        }
        if (!(/\/$/.test(file))) {
            path += '/';
        }
        try {
            var directory = path + file;
            window.resolveLocalFileSystemURL(directory, function (fileSystem) {
                if (fileSystem.isFile === true) {
                    resolveFn(fileSystem);
                }
                else {
                    rejectFn({ code: 13, message: 'input is not a file' });
                }
            }, function (error) {
                error.message = File.cordovaFileError[error.code];
                rejectFn(error);
            });
        }
        catch (err) {
            err.message = File.cordovaFileError[err.code];
            rejectFn(err);
        }
        return promise;
    };
    /**
     * Creates a new file in the specific path.
     * The replace boolean value determines whether to replace an existing file with the same name.
     * If an existing file exists and the replace value is false, the promise will fail and return an error.
     *
     * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to create
     * @param {boolean} replace If true, replaces file with same name. If false returns error
     * @return Returns a Promise that resolves or rejects with an error.
     */
    File.createFile = function (path, fileName, replace) {
        var resolveFn, rejectFn;
        var promise = new Promise(function (resolve, reject) { resolveFn = resolve; rejectFn = reject; });
        if ((/^\//.test(fileName))) {
            rejectFn('file-name cannot start with \/');
        }
        replace = !replace;
        var options = {
            create: true,
            exclusive: replace
        };
        try {
            window.resolveLocalFileSystemURL(path, function (fileSystem) {
                fileSystem.getFile(fileName, options, function (result) {
                    resolveFn(result);
                }, function (error) {
                    error.message = File.cordovaFileError[error.code];
                    rejectFn(error);
                });
            }, function (err) {
                err.message = File.cordovaFileError[err.code];
                rejectFn(err);
            });
        }
        catch (e) {
            e.message = File.cordovaFileError[e.code];
            rejectFn(e);
        }
        return promise;
    };
    /**
     * Removes a file from a desired location.
     *
     * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to remove
     * @return Returns a Promise that resolves or rejects with an error.
     */
    File.removeFile = function (path, fileName) {
        var resolveFn, rejectFn;
        var promise = new Promise(function (resolve, reject) { resolveFn = resolve; rejectFn = reject; });
        if ((/^\//.test(fileName))) {
            rejectFn('file-name cannot start with \/');
        }
        try {
            window.resolveLocalFileSystemURL(path, function (fileSystem) {
                fileSystem.getFile(fileName, { create: false }, function (fileEntry) {
                    fileEntry.remove(function () {
                        resolveFn({ success: true, fileRemoved: fileEntry });
                    }, function (error) {
                        error.message = File.cordovaFileError[error.code];
                        rejectFn(error);
                    });
                }, function (err) {
                    err.message = File.cordovaFileError[err.code];
                    rejectFn(err);
                });
            }, function (er) {
                er.message = File.cordovaFileError[er.code];
                rejectFn(er);
            });
        }
        catch (e) {
            e.message = File.cordovaFileError[e.code];
            rejectFn(e);
        }
        return promise;
    };
    // static writeFile(path: string, fileName: string, text: string, replace: boolean): Promise<any> { return }
    // static writeExistingFile(path: string, fileName: string, text: string): Promise<any> { return }
    /**
     * Read a file as string.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to move
     * @return Returns a Promise that resolves or rejects with an error.
     */
    File.readAsText = function (path, fileName) {
        var resolveFn, rejectFn;
        var promise = new Promise(function (resolve, reject) { resolveFn = resolve; rejectFn = reject; });
        if ((/^\//.test(fileName))) {
            rejectFn('file-name cannot start with \/');
        }
        try {
            window.resolveLocalFileSystemURL(path, function (fileSystem) {
                fileSystem.getFile(fileName, { create: false }, function (fileEntry) {
                    fileEntry.file(function (file) {
                        var reader = new FileReader();
                        reader.onloadend = function (e) {
                            if (this.result !== undefined && this.result !== null) {
                                resolveFn(this.result);
                            }
                            else if (this.error !== undefined && this.error !== null) {
                                rejectFn(this.error);
                            }
                            else {
                                rejectFn({ code: null, message: 'READER_ONLOADEND_ERR' });
                            }
                        };
                        reader.readAsText(file);
                    }, function (error) {
                        error.message = File.cordovaFileError[error.code];
                        rejectFn(error);
                    });
                }, function (err) {
                    err.message = File.cordovaFileError[err.code];
                    rejectFn(err);
                });
            }, function (er) {
                er.message = File.cordovaFileError[er.code];
                rejectFn(er);
            });
        }
        catch (e) {
            e.message = File.cordovaFileError[e.code];
            rejectFn(e);
        }
        return promise;
    };
    // static readAsDataURL(path: string, file: string): Promise<any> { return }
    // static readAsBinaryString(path: string, file: string): Promise<any> { return }
    // static readAsArrayBuffer(path: string, file: string): Promise<any> { return }
    /**
     * Move a file to a given path.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to move
     * @param {string} newPath Base FileSystem of new location
     * @param {string} newFileName New name of file to move to (leave blank to remain the same)
     * @return Returns a Promise that resolves or rejects with an error.
     */
    File.moveFile = function (path, fileName, newPath, newFileName) {
        var resolveFn, rejectFn;
        var promise = new Promise(function (resolve, reject) { resolveFn = resolve; rejectFn = reject; });
        newFileName = newFileName || fileName;
        if ((/^\//.test(newFileName))) {
            rejectFn('file-name cannot start with \/');
        }
        try {
            window.resolveLocalFileSystemURL(path, function (fileSystem) {
                fileSystem.getFile(fileName, { create: false }, function (fileEntry) {
                    window.resolveLocalFileSystemURL(newPath, function (newFileEntry) {
                        fileEntry.moveTo(newFileEntry, newFileName, function (result) {
                            resolveFn(result);
                        }, function (error) {
                            rejectFn(error);
                        });
                    }, function (err) {
                        rejectFn(err);
                    });
                }, function (err) {
                    rejectFn(err);
                });
            }, function (er) {
                rejectFn(er);
            });
        }
        catch (e) {
            rejectFn(e);
        }
        return promise;
    };
    /**
     * Copy a file in various methods. If file exists, will fail to copy.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to copy
     * @param {string} newPath Base FileSystem of new location
     * @param {string} newFileName New name of file to copy to (leave blank to remain the same)
     * @return Returns a Promise that resolves or rejects with an error.
     */
    File.copyFile = function (path, fileName, newPath, newFileName) {
        var resolveFn, rejectFn;
        var promise = new Promise(function (resolve, reject) { resolveFn = resolve; rejectFn = reject; });
        newFileName = newFileName || fileName;
        if ((/^\//.test(newFileName))) {
            rejectFn('file-name cannot start with \/');
        }
        try {
            window.resolveLocalFileSystemURL(path, function (fileSystem) {
                fileSystem.getFile(fileName, { create: false, exclusive: false }, function (fileEntry) {
                    window.resolveLocalFileSystemURL(newPath, function (newFileEntry) {
                        fileEntry.copyTo(newFileEntry, newFileName, function (result) {
                            resolveFn(result);
                        }, function (error) {
                            error.message = File.cordovaFileError[error.code];
                            rejectFn(error);
                        });
                    }, function (erro) {
                        erro.message = File.cordovaFileError[erro.code];
                        rejectFn(erro);
                    });
                }, function (err) {
                    err.message = File.cordovaFileError[err.code];
                    rejectFn(err);
                });
            }, function (er) {
                er.message = File.cordovaFileError[er.code];
                rejectFn(er);
            });
        }
        catch (e) {
            e.message = File.cordovaFileError[e.code];
            rejectFn(e);
        }
        return promise;
    };
    File.cordovaFileError = {
        1: 'NOT_FOUND_ERR',
        2: 'SECURITY_ERR',
        3: 'ABORT_ERR',
        4: 'NOT_READABLE_ERR',
        5: 'ENCODING_ERR',
        6: 'NO_MODIFICATION_ALLOWED_ERR',
        7: 'INVALID_STATE_ERR',
        8: 'SYNTAX_ERR',
        9: 'INVALID_MODIFICATION_ERR',
        10: 'QUOTA_EXCEEDED_ERR',
        11: 'TYPE_MISMATCH_ERR',
        12: 'PATH_EXISTS_ERR'
    };
    File = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-file',
            pluginRef: 'cordova.file',
            repo: 'https://github.com/apache/cordova-plugin-file'
        })
    ], File);
    return File;
}());
exports.File = File;

},{"./plugin":49}],33:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Transfer
 * @description This plugin allows you to upload and download files.
 * Example:
 * Create instance:
 * const fileTransfer = new Transfer();
 *
 * Upload a file:
 * fileTransfer.upload(..).then(..).catch(..);
 *
 * Download a file:
 * fileTransfer.download(..).then(..).catch(..);
 *
 * Abort active transfer:
 * fileTransfer.abort();
 */
var Transfer = (function () {
    function Transfer() {
        this._objectInstance = new FileTransfer();
    }
    /**
     * Sends a file to a server.
     *
     * @param {string} fileUrl  Filesystem URL representing the file on the device or a data URI. For backwards compatibility, this can also be the full path of the file on the device.
     * @param {string} url  URL of the server to receive the file, as encoded by encodeURI().
     * @param {FileUploadOptions} options  Optional parameters.
     * @param {boolean} trustAllHosts: Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful since Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
     * @return Returns a Promise that resolves to a FileUploadResult and rejects with FileTransferError.
     */
    Transfer.prototype.upload = function (fileUrl, url, options, trustAllHosts) {
        return;
    };
    /**
     * Downloads a file from server.
     *
     * @param {string} source  URL of the server to download the file, as encoded by encodeURI().
     * @param {stirng} target  Filesystem url representing the file on the device. For backwards compatibility, this can also be the full path of the file on the device.
     * @param {boolean} trustAllHosts  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful because Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
     * @param {object} Optional parameters, currently only supports headers (such as Authorization (Basic Authentication), etc).
     * @return Returns a Promise that resolves to a FileEntry object.
     */
    Transfer.prototype.download = function (source, target, trustAllHosts, options) {
        return;
    };
    /**
     * Registers a listener that gets called whenever a new chunk of data is transferred.
     * @param {function} Listener that takes a progress event.
     */
    Transfer.prototype.onProgress = function (listener) {
        this._objectInstance.onprogress = listener;
    };
    /**
     * Aborts an in-progress transfer. The onerror callback is passed a FileTransferError
     * object which has an error code of FileTransferError.ABORT_ERR.
     */
    Transfer.prototype.abort = function () { };
    Transfer.FILE_NOT_FOUND_ERR = 1;
    Transfer.INVALID_URL_ERR = 2;
    Transfer.CONNECTION_ERR = 3;
    Transfer.ABORT_ERR = 4;
    Transfer.NOT_MODIFIED_ERR = 4;
    __decorate([
        plugin_1.CordovaInstance({
            successIndex: 2,
            errorIndex: 3
        })
    ], Transfer.prototype, "upload", null);
    __decorate([
        plugin_1.CordovaInstance({
            successIndex: 2,
            errorIndex: 3
        })
    ], Transfer.prototype, "download", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], Transfer.prototype, "abort", null);
    Transfer = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-file-transfer',
            pluginRef: 'FileTransfer',
            repo: 'https://github.com/apache/cordova-plugin-file-transfer'
        })
    ], Transfer);
    return Transfer;
}());
exports.Transfer = Transfer;

},{"./plugin":49}],34:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Flashlight
 * @description This plugin allows you to switch the flashlight / torch of the device on and off.
 *
 * Requires Cordova plugin: `cordova-plugin-flashlight`. For more info, please see the [Flashlight plugin docs](https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin).
 *
 * @usage
 * ```js
 * import {Flashlight} from 'ionic-native';
 *
 *
 *
 * ```
 */
var Flashlight = (function () {
    function Flashlight() {
    }
    /**
     * Checks if the flashlight is available
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean stating if the flashlight is available.
     */
    Flashlight.available = function () { return; };
    /**
     * Switches the flashlight on
     * @returns {Promise<boolean>}
     */
    Flashlight.switchOn = function () { return; };
    /**
     * Switches the flashlight off
     * @returns {Promise<boolean>}
     */
    Flashlight.switchOff = function () { return; };
    /**
     * Toggles the flashlight
     * @returns {Promise<any>}
     */
    Flashlight.toggle = function () { return; };
    /**
     * Checks if the flashlight is turned on.
     * Returns a boolean
     */
    Flashlight.isSwitchedOn = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], Flashlight, "available", null);
    __decorate([
        plugin_1.Cordova()
    ], Flashlight, "switchOn", null);
    __decorate([
        plugin_1.Cordova()
    ], Flashlight, "switchOff", null);
    __decorate([
        plugin_1.Cordova()
    ], Flashlight, "toggle", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], Flashlight, "isSwitchedOn", null);
    Flashlight = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-flashlight',
            pluginRef: 'window.plugins.flashlight',
            repo: 'https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin.git'
        })
    ], Flashlight);
    return Flashlight;
}());
exports.Flashlight = Flashlight;

},{"./plugin":49}],35:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Geolocation
 * @description
 * This plugin provides information about the device's location, such as latitude and longitude. Common sources of location information include Global Positioning System (GPS) and location inferred from network signals such as IP address, RFID, WiFi and Bluetooth MAC addresses, and GSM/CDMA cell IDs.
 *
 *  This API is based on the W3C Geolocation API Specification, and only executes on devices that don't already provide an implementation.
 *
 * @usage
 *
 * ```ts
 * import {Geolocation} from 'ionic-native';
 *
 *
 *
 * Geolocation.getCurrentPosition().then((resp) => {
 *  //resp.coords.latitude
 *  //resp.coords.longitude
 * })
 *
 * let watch = Geolocation.watchPosition();
 * watch.subscribe((data) => {
 *  //data.coords.latitude
 *  //data.coords.longitude
 * })
 * ```
 */
var Geolocation = (function () {
    function Geolocation() {
    }
    /**
     * Get the device's current position.
     *
     * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
     * @return Returns a Promise that resolves with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or rejects with an error.
     */
    Geolocation.getCurrentPosition = function (options) { return; };
    /**
     * Watch the current device's position.  Clear the watch by unsubscribing from
     * Observable changes.
     *
     * ```ts
     * var subscription = Geolocation.watchPosition().subscribe(position => {
     *   console.log(position.coords.longitude + ' ' + position.coords.latitude);
     * });
     *
     * // To stop notifications
     * subscription.unsubscribe();
     * ```
     *
     * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
     * @return Returns an Observable that notifies with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or errors.
     */
    Geolocation.watchPosition = function (options) { return; };
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], Geolocation, "getCurrentPosition", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse',
            observable: true,
            clearFunction: 'clearWatch'
        })
    ], Geolocation, "watchPosition", null);
    Geolocation = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-geolocation',
            pluginRef: 'navigator.geolocation',
            repo: 'https://github.com/apache/cordova-plugin-geolocation'
        })
    ], Geolocation);
    return Geolocation;
}());
exports.Geolocation = Geolocation;

},{"./plugin":49}],36:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Globalization
 * @description
 * @usage
 * ```js
 * import {Globalization} from 'ionic-native';
 *
 *
 *
 * ```
 */
var Globalization = (function () {
    function Globalization() {
    }
    /**
     * Returns the BCP-47 compliant language identifier tag to the successCallback with a properties object as a parameter. That object should have a value property with a String value.
     * @return {Promise<{value: string}>}
     */
    Globalization.getPreferredLanguage = function () { return; };
    /**
     * Returns the BCP 47 compliant locale identifier string to the successCallback with a properties object as a parameter.
     * @return {Promise<{value: string}>}
     */
    Globalization.getLocaleName = function () { return; };
    /**
     * Converts date to string
     * @param date
     * @param options
     * @return {Promise<{value: string}>}
     */
    Globalization.dateToString = function (date, options) { return; };
    /**
     *
     * @param dateString
     * @param options
     */
    Globalization.stringToDate = function (dateString, options) { return; };
    /**
     *
     * @param options
     */
    Globalization.getDatePattern = function (options) { return; };
    /**
     *
     * @param options
     */
    Globalization.getDateNames = function (options) { return; };
    /**
     * Check if day light saving is active
     * @param date
     */
    Globalization.isDayLightSavingsTime = function (date) { return; };
    /**
     * Get first day of week
     */
    Globalization.getFirstDayOfWeek = function () { return; };
    /**
     *
     * @param options
     */
    Globalization.numberToString = function (options) { return; };
    /**
     *
     * @param stringToConvert
     * @param options
     */
    Globalization.stringToNumber = function (stringToConvert, options) { return; };
    /**
     *
     * @param options
     */
    Globalization.getNumberPattern = function (options) { return; };
    /**
     *
     * @param currencyCode
     */
    Globalization.getCurrencyPattern = function (currencyCode) { return; };
    __decorate([
        plugin_1.Cordova()
    ], Globalization, "getPreferredLanguage", null);
    __decorate([
        plugin_1.Cordova()
    ], Globalization, "getLocaleName", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 2
        })
    ], Globalization, "dateToString", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 2
        })
    ], Globalization, "stringToDate", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], Globalization, "getDatePattern", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], Globalization, "getDateNames", null);
    __decorate([
        plugin_1.Cordova()
    ], Globalization, "isDayLightSavingsTime", null);
    __decorate([
        plugin_1.Cordova()
    ], Globalization, "getFirstDayOfWeek", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 2
        })
    ], Globalization, "numberToString", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 2
        })
    ], Globalization, "stringToNumber", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], Globalization, "getNumberPattern", null);
    __decorate([
        plugin_1.Cordova()
    ], Globalization, "getCurrencyPattern", null);
    Globalization = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-globalization',
            pluginRef: 'navigator.globalization',
            repo: 'https: //github.com/apache/cordova-plugin-globalization'
        })
    ], Globalization);
    return Globalization;
}());
exports.Globalization = Globalization;

},{"./plugin":49}],37:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Google Plus
 * @description
 * @usage
 * ```
 *
 * ```
 */
var GooglePlus = (function () {
    function GooglePlus() {
    }
    /**
     * The login function walks the user through the Google Auth process.
     * @param options
     */
    GooglePlus.login = function (options) { return; };
    /**
     * You can call trySilentLogin to check if they're already signed in to the app and sign them in silently if they are.
     * @param options
     */
    GooglePlus.trySilentLogin = function (options) { return; };
    /**
     * This will clear the OAuth2 token.
     */
    GooglePlus.logout = function () { return; };
    /**
     * This will clear the OAuth2 token, forget which account was used to login, and disconnect that account from the app. This will require the user to allow the app access again next time they sign in. Be aware that this effect is not always instantaneous. It can take time to completely disconnect.
     */
    GooglePlus.disconnect = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], GooglePlus, "login", null);
    __decorate([
        plugin_1.Cordova()
    ], GooglePlus, "trySilentLogin", null);
    __decorate([
        plugin_1.Cordova()
    ], GooglePlus, "logout", null);
    __decorate([
        plugin_1.Cordova()
    ], GooglePlus, "disconnect", null);
    GooglePlus = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-googleplus',
            pluginRef: 'window.plugins.googleplus',
            repo: 'https://github.com/EddyVerbruggen/cordova-plugin-googleplus',
            platforms: ['Web', 'Android', 'iOS'],
            install: 'ionic plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid'
        })
    ], GooglePlus);
    return GooglePlus;
}());
exports.GooglePlus = GooglePlus;

},{"./plugin":49}],38:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Google Analytics
 * @description
 * This plugin connects to Google's native Universal Analytics SDK
 * Prerequisites:
 * - A Cordova 3.0+ project for iOS and/or Android
 * - A Mobile App property through the Google Analytics Admin Console
 * - (Android) Google Play Services SDK installed via [Android SDK Manager](https://developer.android.com/sdk/installing/adding-packages.html)
 */
var GoogleAnalytics = (function () {
    function GoogleAnalytics() {
    }
    /**
     * In your 'deviceready' handler, set up your Analytics tracker.
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/
     * @param {string}  id  Your Google Analytics Mobile App property
     */
    GoogleAnalytics.startTrackerWithId = function (id) { return; };
    /**
     * Track a screen
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/screens
     *
     * @param {string}  title   Screen title
     */
    GoogleAnalytics.trackView = function (title) { return; };
    /**
     * Track an event
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/events
     * @param {string}  category
     * @param {string}  action
     * @param {string}  label
     * @param {number}  value
     */
    GoogleAnalytics.trackEvent = function (category, action, label, value) { return; };
    /**
     * Track an exception
     * @param {string}  description
     * @param {boolean} fatal
     */
    GoogleAnalytics.trackException = function (description, fatal) { return; };
    /**
     * Track User Timing (App Speed)
     * @param {string}  category
     * @param {number}  intervalInMilliseconds
     * @param {string}  variable
     * @param {string}  label
     */
    GoogleAnalytics.trackTiming = function (category, intervalInMilliseconds, variable, label) { return; };
    /**
     * Add a Transaction (Ecommerce)
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce#addTrans
     * @param {string}  id
     * @param {string}  affiliation
     * @param {number}  revenue
     * @param {number}  tax
     * @param {number}  shipping
     * @param {string}  currencyCode
     */
    GoogleAnalytics.addTransaction = function (id, affiliation, revenue, tax, shipping, currencyCode) { return; };
    /**
     * Add a Transaction Item (Ecommerce)
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce#addItem
     * @param {string}  id
     * @param {string}  name
     * @param {string}  sku
     * @param {string}  category
     * @param {number}  price
     * @param {number}  quantity
     * @param {string}  currencyCode
     */
    GoogleAnalytics.addTransactionItem = function (id, name, sku, category, price, quantity, currencyCode) { return; };
    /**
     * Add a Custom Dimension
     * https://developers.google.com/analytics/devguides/platform/customdimsmets
     * @param {string}  key
     * @param {string}  value
     */
    GoogleAnalytics.addCustomDimension = function (key, value) { return; };
    /**
     * Set a UserId
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/user-id
     * @param {string}  id
     */
    GoogleAnalytics.setUserId = function (id) { return; };
    /**
     * Enable verbose logging
     */
    GoogleAnalytics.debugMode = function () { return; };
    /**
     * Enable/disable automatic reporting of uncaught exceptions
     * @param {boolean} shouldEnable
     */
    GoogleAnalytics.enableUncaughtExceptionReporting = function (shouldEnable) { return; };
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "startTrackerWithId", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "trackView", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "trackEvent", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "trackException", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "trackTiming", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "addTransaction", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "addTransactionItem", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "addCustomDimension", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "setUserId", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "debugMode", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "enableUncaughtExceptionReporting", null);
    GoogleAnalytics = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-google-analytics',
            pluginRef: 'analytics',
            repo: 'https://github.com/danwilson/google-analytics-plugin',
            platforms: ['Android', 'iOS']
        })
    ], GoogleAnalytics);
    return GoogleAnalytics;
}());
exports.GoogleAnalytics = GoogleAnalytics;

},{"./plugin":49}],39:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
var Observable_1 = require('rxjs/Observable');
var plugin_2 = require('./plugin');
/**
 * @private
 * You can listen to these events where appropriate
 */
exports.GoogleMapsEvent = {
    MAP_CLICK: 'click',
    MAP_LONG_CLICK: 'long_click',
    MY_LOCATION_CHANGE: 'my_location_change',
    MY_LOCATION_BUTTON_CLICK: 'my_location_button_click',
    INDOOR_BUILDING_FOCUSED: 'indoor_building_focused',
    INDOOR_LEVEL_ACTIVATED: 'indoor_level_activated',
    CAMERA_CHANGE: 'camera_change',
    CAMERA_IDLE: 'camera_idle',
    MAP_READY: 'map_ready',
    MAP_LOADED: 'map_loaded',
    MAP_WILL_MOVE: 'will_move',
    MAP_CLOSE: 'map_close',
    MARKER_CLICK: 'click',
    OVERLAY_CLICK: 'overlay_click',
    INFO_CLICK: 'info_click',
    MARKER_DRAG: 'drag',
    MARKER_DRAG_START: 'drag_start',
    MARKER_DRAG_END: 'drag_end'
};
/**
 * @private
 */
exports.GoogleMapsAnimation = {
    BOUNCE: 'BOUNCE',
    DROP: 'DROP'
};
/**
 * @name Google Maps
 * @description This plugin uses the native Google Maps SDK
 * @usage
 * ```
 * import {GoogleMap, GoogleMapsEvent} from 'ionic-native';
 *
 * ...
 *
 * // somewhere in your component
 * let map = new GoogleMap('elementID');
 *
 * map.on(GoogleMapsEvent.MAP_READY).subscribe(() => console.log("Map is ready!"));
 * ```
 */
var GoogleMap = (function () {
    function GoogleMap(elementId, options) {
        this._objectInstance = plugin.google.maps.Map.getMap(document.getElementById(elementId), options);
    }
    /**
     * Checks if a map object has been created.
     * @return {Promise<GoogleMap>} returns a promise that resolves with the Map object (if it exists).
     */
    GoogleMap.isAvailable = function () {
        return;
    };
    GoogleMap.prototype.on = function (event) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var cb = function (data) { return observer.next(data); };
            _this._objectInstance.on(event, cb);
            return function () { return _this._objectInstance.off(event); };
        });
    };
    GoogleMap.prototype.one = function (event) {
        var _this = this;
        return new Promise(function (resolve) { return _this._objectInstance.one(event, resolve); });
    };
    GoogleMap.prototype.setDebuggable = function (isDebuggable) {
    };
    GoogleMap.prototype.setClickable = function (isClickable) {
    };
    /**
     * Get the position of the camera
     */
    GoogleMap.prototype.getCameraPosition = function () {
        return;
    };
    /**
     * Get the location of the user
     */
    GoogleMap.prototype.getMyLocation = function () {
        return;
    };
    /**
     * Get the visible region
     */
    GoogleMap.prototype.getVisibleRegion = function () {
        return;
    };
    GoogleMap.prototype.showDialog = function () {
    };
    GoogleMap.prototype.closeDialog = function () {
    };
    GoogleMap.prototype.getLicenseInfo = function () {
        return;
    };
    GoogleMap.prototype.setCenter = function (latLng) {
    };
    GoogleMap.prototype.setZoom = function (zoomLevel) {
    };
    GoogleMap.prototype.setMapTypeId = function (typeId) {
    };
    GoogleMap.prototype.setTilt = function (tiltLevel) {
    };
    GoogleMap.prototype.animateCamera = function (animateCameraOptions) {
    };
    GoogleMap.prototype.moveCamera = function (cameraPosition) {
    };
    GoogleMap.prototype.setMyLocationEnabled = function (enabled) {
    };
    GoogleMap.prototype.setIndoorEnabled = function (enabled) {
    };
    GoogleMap.prototype.setTrafficEnabled = function (enabled) {
    };
    GoogleMap.prototype.setCompassEnabled = function (enabled) {
    };
    GoogleMap.prototype.setAllGesturesEnabled = function (enabled) {
    };
    GoogleMap.prototype.addMarker = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addMarker(options, function (marker) {
                if (marker)
                    resolve(new GoogleMapsMarker(marker));
                else
                    reject();
            });
        });
    };
    GoogleMap.prototype.addCircle = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addCircle(options, function (circle) {
                if (circle)
                    resolve(new GoogleMapsCircle(circle));
                else
                    reject();
            });
        });
    };
    GoogleMap.prototype.addPolygon = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addPolygon(options, function (polygon) {
                if (polygon)
                    resolve(new GoogleMapsPolygon(polygon));
                else
                    reject();
            });
        });
    };
    GoogleMap.prototype.addPolyline = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addPolyline(options, function (polyline) {
                if (polyline)
                    resolve(new GoogleMapsPolyline(polyline));
                else
                    reject();
            });
        });
    };
    GoogleMap.prototype.addTileOverlay = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addTileOverlay(options, function (tileOverlay) {
                if (tileOverlay)
                    resolve(new GoogleMapsTileOverlay(tileOverlay));
                else
                    reject();
            });
        });
    };
    GoogleMap.prototype.addGroundOverlay = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addTileOverlay(options, function (groundOverlay) {
                if (groundOverlay)
                    resolve(new GoogleMapsGroundOverlay(groundOverlay));
                else
                    reject();
            });
        });
    };
    GoogleMap.prototype.addKmlOverlay = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addTileOverlay(options, function (kmlOverlay) {
                if (kmlOverlay)
                    resolve(new GoogleMapsKmlOverlay(kmlOverlay));
                else
                    reject();
            });
        });
    };
    GoogleMap.prototype.setDiv = function (domNode) {
    };
    GoogleMap.prototype.setVisible = function (visible) {
    };
    GoogleMap.prototype.setOptions = function (options) {
    };
    GoogleMap.prototype.setBackgroundColor = function (backgroundColor) {
    };
    GoogleMap.prototype.setPadding = function (top, right, bottom, left) {
    };
    GoogleMap.prototype.clear = function () {
    };
    GoogleMap.prototype.refreshLayout = function () {
    };
    GoogleMap.prototype.fromLatLngToPoint = function (latLng, point) {
        return;
    };
    GoogleMap.prototype.fromPointToLatLng = function (point, latLng) {
        return;
    };
    GoogleMap.prototype.toDataURL = function () {
        return;
    };
    GoogleMap.prototype.remove = function () {
    };
    GoogleMap.prototype.panBy = function () {
    };
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMap.prototype, "setDebuggable", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMap.prototype, "setClickable", null);
    __decorate([
        plugin_2.CordovaInstance()
    ], GoogleMap.prototype, "getCameraPosition", null);
    __decorate([
        plugin_2.CordovaInstance()
    ], GoogleMap.prototype, "getMyLocation", null);
    __decorate([
        plugin_2.CordovaInstance()
    ], GoogleMap.prototype, "getVisibleRegion", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMap.prototype, "showDialog", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMap.prototype, "closeDialog", null);
    __decorate([
        plugin_2.CordovaInstance()
    ], GoogleMap.prototype, "getLicenseInfo", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMap.prototype, "setCenter", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMap.prototype, "setZoom", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMap.prototype, "setMapTypeId", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMap.prototype, "setTilt", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMap.prototype, "animateCamera", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMap.prototype, "moveCamera", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMap.prototype, "setMyLocationEnabled", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMap.prototype, "setIndoorEnabled", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMap.prototype, "setTrafficEnabled", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMap.prototype, "setCompassEnabled", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMap.prototype, "setAllGesturesEnabled", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMap.prototype, "setDiv", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMap.prototype, "setVisible", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMap.prototype, "setOptions", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMap.prototype, "setBackgroundColor", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMap.prototype, "setPadding", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMap.prototype, "clear", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMap.prototype, "refreshLayout", null);
    __decorate([
        plugin_2.CordovaInstance()
    ], GoogleMap.prototype, "fromLatLngToPoint", null);
    __decorate([
        plugin_2.CordovaInstance()
    ], GoogleMap.prototype, "fromPointToLatLng", null);
    __decorate([
        plugin_2.CordovaInstance()
    ], GoogleMap.prototype, "toDataURL", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMap.prototype, "remove", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMap.prototype, "panBy", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleMap, "isAvailable", null);
    GoogleMap = __decorate([
        plugin_1.Plugin({
            pluginRef: 'plugin.google.maps.Map',
            plugin: 'cordova-plugin-googlemaps',
            repo: 'https://github.com/mapsplugin/cordova-plugin-googlemaps'
        })
    ], GoogleMap);
    return GoogleMap;
}());
exports.GoogleMap = GoogleMap;
/**
 * @private
 */
var GoogleMapsMarker = (function () {
    function GoogleMapsMarker(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    GoogleMapsMarker.prototype.addEventListener = function (event) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var cb = function (data) {
                observer.next(data);
            };
            _this._objectInstance.addEventListener(event, cb);
            return function () { return _this._objectInstance.removeEventListener(event, cb); };
        });
    };
    GoogleMapsMarker.prototype.isVisible = function () {
        return;
    };
    GoogleMapsMarker.prototype.setVisible = function (visible) {
    };
    GoogleMapsMarker.prototype.getHashCode = function () {
        return;
    };
    GoogleMapsMarker.prototype.remove = function () {
    };
    GoogleMapsMarker.prototype.setOpacity = function (alpha) {
    };
    GoogleMapsMarker.prototype.getOpacity = function () {
        return;
    };
    GoogleMapsMarker.prototype.setZIndex = function () {
    };
    GoogleMapsMarker.prototype.setIconAnchor = function (x, y) {
    };
    GoogleMapsMarker.prototype.setInfoWindowAnchor = function (x, y) {
    };
    GoogleMapsMarker.prototype.setDraggable = function (draggable) {
    };
    GoogleMapsMarker.prototype.isDraggable = function () {
        return;
    };
    GoogleMapsMarker.prototype.setFlat = function (flat) {
        return;
    };
    GoogleMapsMarker.prototype.setIcon = function (icon) {
    };
    GoogleMapsMarker.prototype.setTitle = function (title) {
    };
    GoogleMapsMarker.prototype.getTitle = function () {
        return;
    };
    GoogleMapsMarker.prototype.setSnippet = function (snippet) {
    };
    GoogleMapsMarker.prototype.getSnippet = function () {
        return;
    };
    GoogleMapsMarker.prototype.setRotation = function (rotation) {
    };
    GoogleMapsMarker.prototype.getRotation = function () {
        return;
    };
    GoogleMapsMarker.prototype.showInfoWindow = function () {
        return;
    };
    GoogleMapsMarker.prototype.hideInfoWindow = function () {
        return;
    };
    GoogleMapsMarker.prototype.setPosition = function (latLng) {
    };
    GoogleMapsMarker.prototype.getPosition = function () {
        return;
    };
    GoogleMapsMarker.prototype.getMap = function () {
        return;
    };
    GoogleMapsMarker.prototype.setAnimation = function (animation) {
    };
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsMarker.prototype, "isVisible", null);
    __decorate([
        plugin_2.CordovaInstance()
    ], GoogleMapsMarker.prototype, "setVisible", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsMarker.prototype, "getHashCode", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsMarker.prototype, "remove", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsMarker.prototype, "setOpacity", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsMarker.prototype, "getOpacity", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsMarker.prototype, "setZIndex", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsMarker.prototype, "setIconAnchor", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsMarker.prototype, "setInfoWindowAnchor", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsMarker.prototype, "setDraggable", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsMarker.prototype, "isDraggable", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsMarker.prototype, "setFlat", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsMarker.prototype, "setIcon", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsMarker.prototype, "setTitle", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsMarker.prototype, "getTitle", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsMarker.prototype, "setSnippet", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsMarker.prototype, "getSnippet", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsMarker.prototype, "setRotation", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsMarker.prototype, "getRotation", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsMarker.prototype, "showInfoWindow", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsMarker.prototype, "hideInfoWindow", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsMarker.prototype, "setPosition", null);
    __decorate([
        plugin_2.CordovaInstance()
    ], GoogleMapsMarker.prototype, "getPosition", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsMarker.prototype, "getMap", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsMarker.prototype, "setAnimation", null);
    return GoogleMapsMarker;
}());
exports.GoogleMapsMarker = GoogleMapsMarker;
/**
 * @private
 */
var GoogleMapsCircle = (function () {
    function GoogleMapsCircle(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    GoogleMapsCircle.prototype.addEventListener = function (event) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var cb = function (data) { return observer.next(data); };
            _this._objectInstance.addEventListener(event, cb);
            return function () { return _this._objectInstance.removeEventListener(event, cb); };
        });
    };
    GoogleMapsCircle.prototype.getCenter = function () {
        return;
    };
    GoogleMapsCircle.prototype.getRadius = function () {
        return;
    };
    GoogleMapsCircle.prototype.getStrokeColor = function () {
        return;
    };
    GoogleMapsCircle.prototype.getVisible = function () {
        return;
    };
    GoogleMapsCircle.prototype.getZIndex = function () {
        return;
    };
    GoogleMapsCircle.prototype.remove = function () {
    };
    GoogleMapsCircle.prototype.setCenter = function (latLng) {
    };
    GoogleMapsCircle.prototype.setFillColor = function (fillColor) {
    };
    GoogleMapsCircle.prototype.setStrokeColor = function (strokeColor) {
    };
    GoogleMapsCircle.prototype.setStrokeWidth = function (strokeWidth) {
    };
    GoogleMapsCircle.prototype.setVisible = function (visible) {
    };
    GoogleMapsCircle.prototype.setZIndex = function (zIndex) {
    };
    GoogleMapsCircle.prototype.setRadius = function (radius) {
    };
    GoogleMapsCircle.prototype.getMap = function () {
        return;
    };
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsCircle.prototype, "getCenter", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsCircle.prototype, "getRadius", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsCircle.prototype, "getStrokeColor", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsCircle.prototype, "getVisible", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsCircle.prototype, "getZIndex", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsCircle.prototype, "remove", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsCircle.prototype, "setCenter", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsCircle.prototype, "setFillColor", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsCircle.prototype, "setStrokeColor", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsCircle.prototype, "setStrokeWidth", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsCircle.prototype, "setVisible", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsCircle.prototype, "setZIndex", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsCircle.prototype, "setRadius", null);
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsCircle.prototype, "getMap", null);
    return GoogleMapsCircle;
}());
exports.GoogleMapsCircle = GoogleMapsCircle;
/**
 * @private
 */
var GoogleMapsPolyline = (function () {
    function GoogleMapsPolyline(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    GoogleMapsPolyline.prototype.addEventListener = function (event) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var cb = function (data) { return observer.next(data); };
            _this._objectInstance.addEventListener(event, cb);
            return function () { return _this._objectInstance.removeEventListener(event, cb); };
        });
    };
    GoogleMapsPolyline.prototype.getPoints = function () {
        return;
    };
    GoogleMapsPolyline.prototype.getCOlor = function () {
        return;
    };
    GoogleMapsPolyline.prototype.getWidth = function () {
        return;
    };
    GoogleMapsPolyline.prototype.getGeodesic = function () {
        return;
    };
    GoogleMapsPolyline.prototype.getZIndex = function () {
        return;
    };
    GoogleMapsPolyline.prototype.remove = function () {
    };
    GoogleMapsPolyline.prototype.setPoints = function (points) {
    };
    GoogleMapsPolyline.prototype.setColor = function (color) {
    };
    GoogleMapsPolyline.prototype.setWidth = function (width) {
    };
    GoogleMapsPolyline.prototype.setVisible = function (visible) {
    };
    GoogleMapsPolyline.prototype.setZIndex = function (zIndex) {
    };
    GoogleMapsPolyline.prototype.setGeoDesic = function (geoDesic) {
    };
    GoogleMapsPolyline.prototype.getMap = function () {
        return;
    };
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "getPoints", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "getCOlor", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "getWidth", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "getGeodesic", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "getZIndex", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "remove", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "setPoints", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "setColor", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "setWidth", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "setVisible", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "setZIndex", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "setGeoDesic", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "getMap", null);
    return GoogleMapsPolyline;
}());
exports.GoogleMapsPolyline = GoogleMapsPolyline;
/**
 * @private
 */
var GoogleMapsPolygon = (function () {
    function GoogleMapsPolygon(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    GoogleMapsPolygon.prototype.addEventListener = function (event) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var cb = function (data) { return observer.next(data); };
            _this._objectInstance.addEventListener(event, cb);
            return function () { return _this._objectInstance.removeEventListener(event, cb); };
        });
    };
    GoogleMapsPolygon.prototype.getPoints = function () {
        return;
    };
    GoogleMapsPolygon.prototype.getStrokeColor = function () {
        return;
    };
    GoogleMapsPolygon.prototype.getFillColor = function () {
        return;
    };
    GoogleMapsPolygon.prototype.getStrokeWidth = function () {
        return;
    };
    GoogleMapsPolygon.prototype.getGeodesic = function () {
        return;
    };
    GoogleMapsPolygon.prototype.getVisible = function () {
        return;
    };
    GoogleMapsPolygon.prototype.getZIndex = function () {
        return;
    };
    GoogleMapsPolygon.prototype.remove = function () {
    };
    GoogleMapsPolygon.prototype.setPoints = function (points) {
    };
    GoogleMapsPolygon.prototype.setStrokeColor = function (strokeColor) {
    };
    GoogleMapsPolygon.prototype.setFillColor = function (fillColor) {
    };
    GoogleMapsPolygon.prototype.setStrokeWidth = function (strokeWidth) {
    };
    GoogleMapsPolygon.prototype.setVisible = function (visible) {
    };
    GoogleMapsPolygon.prototype.setZIndex = function (zIndex) {
    };
    GoogleMapsPolygon.prototype.setGeodesic = function (geodesic) {
    };
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "getPoints", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "getStrokeColor", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "getFillColor", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "getStrokeWidth", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "getGeodesic", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "getVisible", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "getZIndex", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "remove", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "setPoints", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "setStrokeColor", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "setFillColor", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "setStrokeWidth", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "setVisible", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "setZIndex", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "setGeodesic", null);
    return GoogleMapsPolygon;
}());
exports.GoogleMapsPolygon = GoogleMapsPolygon;
/**
 * @private
 */
var GoogleMapsTileOverlay = (function () {
    function GoogleMapsTileOverlay(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    GoogleMapsTileOverlay.prototype.getVisible = function () {
        return;
    };
    GoogleMapsTileOverlay.prototype.setVisible = function (visible) {
    };
    GoogleMapsTileOverlay.prototype.getFadeIn = function () {
        return;
    };
    GoogleMapsTileOverlay.prototype.setFadeIn = function (fadeIn) {
    };
    GoogleMapsTileOverlay.prototype.getZIndex = function () {
        return;
    };
    GoogleMapsTileOverlay.prototype.setZIndex = function (zIndex) {
    };
    GoogleMapsTileOverlay.prototype.getOpacity = function () {
        return;
    };
    GoogleMapsTileOverlay.prototype.setOpacity = function (opacity) {
    };
    GoogleMapsTileOverlay.prototype.clearTileCache = function () {
    };
    GoogleMapsTileOverlay.prototype.remove = function () {
    };
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "getVisible", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "setVisible", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "getFadeIn", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "setFadeIn", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "getZIndex", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "setZIndex", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "getOpacity", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "setOpacity", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "clearTileCache", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "remove", null);
    return GoogleMapsTileOverlay;
}());
exports.GoogleMapsTileOverlay = GoogleMapsTileOverlay;
/**
 * @private
 */
var GoogleMapsGroundOverlay = (function () {
    function GoogleMapsGroundOverlay(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    GoogleMapsGroundOverlay.prototype.setBearing = function (bearing) {
    };
    GoogleMapsGroundOverlay.prototype.getBearing = function () {
        return;
    };
    GoogleMapsGroundOverlay.prototype.setOpacity = function (opacity) {
    };
    GoogleMapsGroundOverlay.prototype.getOpacity = function () {
        return;
    };
    GoogleMapsGroundOverlay.prototype.setVisible = function (visible) {
    };
    GoogleMapsGroundOverlay.prototype.getVisible = function () {
        return;
    };
    GoogleMapsGroundOverlay.prototype.setImage = function (image) {
    };
    ;
    GoogleMapsGroundOverlay.prototype.remove = function () {
    };
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsGroundOverlay.prototype, "setBearing", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsGroundOverlay.prototype, "getBearing", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsGroundOverlay.prototype, "setOpacity", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsGroundOverlay.prototype, "getOpacity", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsGroundOverlay.prototype, "setVisible", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsGroundOverlay.prototype, "getVisible", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsGroundOverlay.prototype, "setImage", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsGroundOverlay.prototype, "remove", null);
    return GoogleMapsGroundOverlay;
}());
exports.GoogleMapsGroundOverlay = GoogleMapsGroundOverlay;
/**
 * @private
 */
var GoogleMapsKmlOverlay = (function () {
    function GoogleMapsKmlOverlay(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    GoogleMapsKmlOverlay.prototype.remove = function () {
    };
    GoogleMapsKmlOverlay.prototype.getOverlays = function () {
        return;
    };
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsKmlOverlay.prototype, "remove", null);
    __decorate([
        plugin_2.CordovaInstance({ sync: true })
    ], GoogleMapsKmlOverlay.prototype, "getOverlays", null);
    return GoogleMapsKmlOverlay;
}());
exports.GoogleMapsKmlOverlay = GoogleMapsKmlOverlay;
/**
 * @private
 */
var GoogleMapsLatLng = (function () {
    function GoogleMapsLatLng(lat, lng) {
        this.lat = lat;
        this.lng = lng;
        this._objectInstance = new plugin.google.maps.LatLng(lat, lng);
    }
    GoogleMapsLatLng.prototype.equals = function (other) {
        return this.lat === other.lat && this.lng === other.lng;
    };
    GoogleMapsLatLng.prototype.toString = function () {
        return;
    };
    GoogleMapsLatLng.prototype.toUrlValue = function (precision) {
        precision = precision || 6;
        return this.lat.toFixed(precision) + ',' + this.lng.toFixed(precision);
    };
    __decorate([
        plugin_2.CordovaInstance({
            sync: true
        })
    ], GoogleMapsLatLng.prototype, "toString", null);
    return GoogleMapsLatLng;
}());
exports.GoogleMapsLatLng = GoogleMapsLatLng;

},{"./plugin":49,"rxjs/Observable":64}],40:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Hotspot
 * @description
 * @usage
 * ```js
 * import {Hotspot, Network} from 'ionic-native';
 *
 * ...
 *     Hotspot.scanWifi().then((networks: Array<Network>) => {
 *         console.log(networks);
 *     });
 * ...
 *
 * ```
 */
var Hotspot = (function () {
    function Hotspot() {
    }
    Hotspot.isAvailable = function () { return; };
    Hotspot.toggleWifi = function () { return; };
    /**
     * Configures and starts hotspot with SSID and Password
     *
     * @param {string}    SSID        - SSID of your new Access Point
     * @param {string}    mode        - encryption mode (Open, WEP, WPA, WPA_PSK)
     * @param {string}    password    - password for your new Access Point
     *
     * @return {Promise<void>}        - Promise to call once hotspot is started, or reject upon failure
     */
    Hotspot.createHotspot = function (ssid, mode, password) { return; };
    /**
     * Turns on Access Point
     *
     * @return {Promise<boolean>} - true if AP is started
     */
    Hotspot.startHotspot = function () { return; };
    /**
     * Configures hotspot with SSID and Password
     *
     * @param {string}    SSID        - SSID of your new Access Point
     * @param {string}    mode        - encryption mode (Open, WEP, WPA, WPA_PSK)
     * @param {string}    password    - password for your new Access Point
     *
     * @return {Promise<void>}        - Promise to call when hotspot is configured, or reject upon failure
     */
    Hotspot.configureHotspot = function (ssid, mode, password) { return; };
    /**
     * Turns off Access Point
     *
     * @return {Promise<boolean>} - Promise to turn off the hotspot, true on success, false on failure
     */
    Hotspot.stopHotspot = function () { return; };
    /**
     * Checks if hotspot is enabled
     *
     * @return {Promise<void>}    - Promise that hotspot is enabled, rejected if it is not enabled
     */
    Hotspot.isHotspotEnabled = function () { return; };
    Hotspot.getAllHotspotDevices = function () { return; };
    /**
     * Connect to a WiFi network
     *
     * @param {string}    ssid
     *      SSID to connect
     * @param {string}    password
     *      password to use
     *
     * @return {Promise<void>}
     *      Promise that connection to the WiFi network was successfull, rejected if unsuccessful
     */
    Hotspot.connectToWifi = function (ssid, password) { return; };
    /**
     * Connect to a WiFi network
     *
     * @param {string}   ssid
     *      SSID to connect
     * @param {string}   password
     *      Password to use
     * @param {string}   authentication
     *      Authentication modes to use (LEAP, SHARED, OPEN)
     * @param {string[]} encryption
     *      Encryption modes to use (CCMP, TKIP, WEP104, WEP40)
     *
     * @return {Promise<void>}
     *      Promise that connection to the WiFi network was successfull, rejected if unsuccessful
     */
    Hotspot.connectToWifiAuthEncrypt = function (ssid, password, authentication, encryption) { return; };
    /**
     * Add a WiFi network
     *
     * @param {string}    ssid
     *      SSID of network
     * @param {string}    mode
     *      Authentication mode of (Open, WEP, WPA, WPA_PSK)
     * @param {string}    password
     *      Password for network
     *
     * @return {Promise<void>}
     *      Promise that adding the WiFi network was successfull, rejected if unsuccessful
     */
    Hotspot.addWifiNetwork = function (ssid, mode, password) { return; };
    /**
     * Remove a WiFi network
     *
     * @param {string}    ssid
     *      SSID of network
     *
     * @return {Promise<void>}
     *      Promise that removing the WiFi network was successfull, rejected if unsuccessful
     */
    Hotspot.removeWifiNetwork = function (ssid) { return; };
    Hotspot.isConnectedToInternet = function () { return; };
    Hotspot.isConnectedToInternetViaWifi = function () { return; };
    Hotspot.isWifiOn = function () { return; };
    Hotspot.isWifiSupported = function () { return; };
    Hotspot.isWifiDirectSupported = function () { return; };
    Hotspot.scanWifi = function () { return; };
    Hotspot.scanWifiByLevel = function () { return; };
    Hotspot.startWifiPeriodicallyScan = function (interval, duration) { return; };
    Hotspot.stopWifiPeriodicallyScan = function () { return; };
    Hotspot.getNetConfig = function () { return; };
    Hotspot.getConnectionInfo = function () { return; };
    Hotspot.pingHost = function (ip) { return; };
    /**
     * Gets MAC Address associated with IP Address from ARP File
     *
     * @param {string}        ip  - IP Address that you want the MAC Address of
     *
     * @return {Promise<string>}  - A Promise for the MAC Address
     */
    Hotspot.getMacAddressOfHost = function (ip) { return; };
    /**
     * Checks if IP is live using DNS
     *
     * @param {string}        ip  - IP Address you want to test
     *
     * @return {Promise<boolean>} - A Promise for whether the IP Address is reachable
     */
    Hotspot.isDnsLive = function (ip) { return; };
    /**
     * Checks if IP is live using socket And PORT
     *
     * @param {string}        ip  - IP Address you want to test
     *
     * @return {Promise<boolean>} - A Promise for whether the IP Address is reachable
     */
    Hotspot.isPortLive = function (ip) { return; };
    /**
     * Checks if device is rooted
     *
     * @return {Promise<boolean>} - A Promise for whether the device is rooted
     */
    Hotspot.isRooted = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isAvailable", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "toggleWifi", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "createHotspot", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "startHotspot", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "configureHotspot", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "stopHotspot", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isHotspotEnabled", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "getAllHotspotDevices", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "connectToWifi", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "connectToWifiAuthEncrypt", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "addWifiNetwork", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "removeWifiNetwork", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isConnectedToInternet", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isConnectedToInternetViaWifi", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isWifiOn", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isWifiSupported", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isWifiDirectSupported", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "scanWifi", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "scanWifiByLevel", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "startWifiPeriodicallyScan", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "stopWifiPeriodicallyScan", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "getNetConfig", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "getConnectionInfo", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "pingHost", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "getMacAddressOfHost", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isDnsLive", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isPortLive", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isRooted", null);
    Hotspot = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-hotspot',
            pluginRef: 'cordova.plugins.hotspot',
            repo: 'https://github.com/hypery2k/cordova-hotspot-plugin',
            platforms: ['Android']
        })
    ], Hotspot);
    return Hotspot;
}());
exports.Hotspot = Hotspot;

},{"./plugin":49}],41:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Image Picker
 * @description
 * Cordova Plugin For Multiple Image Selection
 *
 * Requires Cordova plugin: `cordova-plugin-image-picker`.
 * For more info, please see the https://github.com/wymsee/cordova-imagePicker
 *
 * @usage
 * ```js
 * import {ImagePicker} from 'ionic-native';
 *
 *
 *
 * ImagePicker.getPictures(options).then((results) => {
 *   for (var i = 0; i < results.length; i++) {
 *       console.log('Image URI: ' + results[i]);
 *   }
 * }, (err) => {
 * });
 * ```
 */
var ImagePicker = (function () {
    function ImagePicker() {
    }
    /**
     * Pick pictures from the library.
     * @param {ImagePickerOptions} options
     * @return Returns a Promise that resolves the image file URI
     * otherwise rejects with an error.
     */
    ImagePicker.getPictures = function (options) { return; };
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], ImagePicker, "getPictures", null);
    ImagePicker = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-image-picker',
            pluginRef: 'window.imagePicker',
            repo: 'https://github.com/wymsee/cordova-imagePicker'
        })
    ], ImagePicker);
    return ImagePicker;
}());
exports.ImagePicker = ImagePicker;

},{"./plugin":49}],42:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
var InAppBrowser = (function () {
    function InAppBrowser() {
    }
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param  url     The URL to load.
     * @param  target  The target in which to load the URL, an optional parameter that defaults to _self.
     * @param  options Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     */
    InAppBrowser.open = function (url, target, options) { return; };
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], InAppBrowser, "open", null);
    InAppBrowser = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-inappbrowser',
            pluginRef: 'cordova.InAppBrowser'
        })
    ], InAppBrowser);
    return InAppBrowser;
}());
exports.InAppBrowser = InAppBrowser;

},{"./plugin":49}],43:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Insomnia
 * @description
 * Prevent the screen of the mobile device from falling asleep.
 *
 * @usage
 * ```js
 * import {Insomnia} from 'ionic-native';
 *
 * Insomnia.keepAwake()
 *   .then(
 *     () => console.log('success'),
 *     () => console.log('error')
 *   );
 *
 * Insomnia.allowSleepAgain()
 *   .then(
 *     () => console.log('success'),
 *     () => console.log('error')
 *   );
 * ```
 *
 */
var Insomnia = (function () {
    function Insomnia() {
    }
    /**
     * Keeps awake the application
     * @returns {Promise}
     */
    Insomnia.keepAwake = function () { return; };
    /**
     * Allows the application to sleep again
     * @returns {Promise}
     */
    Insomnia.allowSleepAgain = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], Insomnia, "keepAwake", null);
    __decorate([
        plugin_1.Cordova()
    ], Insomnia, "allowSleepAgain", null);
    Insomnia = __decorate([
        plugin_1.Plugin({
            plugin: 'https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin.git',
            pluginRef: 'plugins.insomnia',
            repo: 'https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin',
            platforms: ['Android', 'iOS', 'Windows Phone 8']
        })
    ], Insomnia);
    return Insomnia;
}());
exports.Insomnia = Insomnia;

},{"./plugin":49}],44:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Keyboard
 * @description
 * @usage
 * ```js
 * import {Keyboard} from 'ionic-native';
 *
 *
 *
 * ```
 */
var Keyboard = (function () {
    function Keyboard() {
    }
    /**
     * Hide the keyboard accessory bar with the next, previous and done buttons.
     * @param hide {boolean}
     */
    Keyboard.hideKeyboardAccessoryBar = function (hide) {
        console.log('hideKeyboardAccessoryBar method has been removed temporarily.');
    };
    /**
     * Force keyboard to be shown.
     */
    Keyboard.show = function () { };
    /**
     * Close the keyboard if open.
     */
    Keyboard.close = function () { };
    /**
     * Prevents the native UIScrollView from moving when an input is focused.
     * @param disable
     */
    Keyboard.disableScroll = function (disable) { };
    /**
     * Creates an observable that notifies you when the keyboard is shown. Unsubscribe to observable to cancel event watch.
     */
    Keyboard.onKeyboardShow = function () { return; };
    /**
     * Creates an observable that notifies you when the keyboard is hidden. Unsubscribe to observable to cancel event watch.
     */
    Keyboard.onKeyboardHide = function () { return; };
    __decorate([
        plugin_1.Cordova({
            sync: true,
            platforms: ['Android', 'BlackBerry 10', 'Windows']
        })
    ], Keyboard, "show", null);
    __decorate([
        plugin_1.Cordova({
            sync: true,
            platforms: ['iOS', 'Android', 'BlackBerry 10', 'Windows']
        })
    ], Keyboard, "close", null);
    __decorate([
        plugin_1.Cordova({
            sync: true,
            platforms: ['iOS', 'Windows']
        })
    ], Keyboard, "disableScroll", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'native.keyboardshow',
            platforms: ['iOS', 'Android', 'BlackBerry 10', 'Windows']
        })
    ], Keyboard, "onKeyboardShow", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'native.keyboardhide',
            platforms: ['iOS', 'Android', 'BlackBerry 10', 'Windows']
        })
    ], Keyboard, "onKeyboardHide", null);
    Keyboard = __decorate([
        plugin_1.Plugin({
            plugin: 'ionic-plugin-keyboard',
            pluginRef: 'cordova.plugins.Keyboard',
            repo: 'https://github.com/driftyco/ionic-plugin-keyboard'
        })
    ], Keyboard);
    return Keyboard;
}());
exports.Keyboard = Keyboard;

},{"./plugin":49}],45:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Launch Navigator
 * @description
 * Requires Cordova plugin: uk.co.workingedge.phonegap.plugin.launchnavigator. For more info, please see the [LaunchNavigator plugin docs](https://github.com/dpa99c/phonegap-launch-navigator).
 *
 * @usage
 * ```js
 * import {LaunchNavigator} from 'ionic-native';
 *
 *
 *
 * LaunchNavigator.navigate("Toronto, ON", "London, ON")
 *   .then(
 *     success => console.log("Launched navigator"),
 *     error => console.log("Error launching navigator", error)
 *   );
 * ```
 */
var LaunchNavigator = (function () {
    function LaunchNavigator() {
    }
    /**
     * Launches navigator app
     * @param destination Location name or coordinates
     * @param start Location name or coordinates
     * @param options
     * @returns {Promise<any>}
     */
    LaunchNavigator.navigate = function (destination, start, options) {
        if (start === void 0) { start = null; }
        return;
    };
    __decorate([
        plugin_1.Cordova({
            successIndex: 2,
            errorIndex: 3
        })
    ], LaunchNavigator, "navigate", null);
    LaunchNavigator = __decorate([
        plugin_1.Plugin({
            plugin: 'uk.co.workingedge.phonegap.plugin.launchnavigator',
            pluginRef: 'launchnavigator',
            repo: 'https://github.com/dpa99c/phonegap-launch-navigator.git'
        })
    ], LaunchNavigator);
    return LaunchNavigator;
}());
exports.LaunchNavigator = LaunchNavigator;

},{"./plugin":49}],46:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Local Notifications
 * @description
 * This plugin allows you to display local notifications on the device
 *
 * @usage
 * ```ts
 * import {LocalNotifications} from 'ionic-native';
 *
 *
 *
 * // Schedule a single notification
 * LocalNotifications.schedule({
 *   id: 1,
 *   text: "Single Notification",
 *   sound: isAndroid? 'file://sound.mp3': 'file://beep.caf'
 *   data: { secret: key }
 * });
 *
 *
 * // Schedule multiple notifications
 * LocalNotifications.schedule([{
 *    id: 1,
 *    text: "Multi Notification 1",
 *    sound: isAndroid ? 'file://sound.mp3': 'file://beep.caf',
 *    data: { secret:key }
 *   },{
 *    id: 2,
 *    title: "Local Notification Example",
 *    text: "Multi Notification 2",
 *    icon: "http://example.com/icon.png"
 * }]);
 *
 *
 * // Schedule delayed notification
 * LocalNotifications.schedule({
 *    text: "Delayed Notification",
 *    at: new Date(new Date().getTime() + 3600),
 *    led: "FF0000",
 *    sound: null
 * });
 * ```
 *
 */
var LocalNotifications = (function () {
    function LocalNotifications() {
    }
    /**
     * Schedules a single or multiple notifications
     * @param options
     */
    LocalNotifications.schedule = function (options) { };
    /**
     * Updates a previously scheduled notification. Must include the id in the options parameter.
     * @param options
     */
    LocalNotifications.update = function (options) { };
    /**
     * Clears single or multiple notifications
     * @param notificationId A single notification id, or an array of notification ids.
     */
    LocalNotifications.clear = function (notificationId) { return; };
    /**
     * Clears all notifications
     */
    LocalNotifications.clearAll = function () { return; };
    /**
     * Cancels single or multiple notifications
     * @param notificationId A single notification id, or an array of notification ids.
     */
    LocalNotifications.cancel = function (notificationId) { return; };
    /**
     * Cancels all notifications
     */
    LocalNotifications.cancelAll = function () { return; };
    /**
     * Checks presence of a notification
     * @param notificationId
     */
    LocalNotifications.isPresent = function (notificationId) { return; };
    /**
     * Checks is a notification is scheduled
     * @param notificationId
     */
    LocalNotifications.isScheduled = function (notificationId) { return; };
    /**
     * Checks if a notification is triggered
     * @param notificationId
     */
    LocalNotifications.isTriggered = function (notificationId) { return; };
    /**
     * Get all the notification ids
     */
    LocalNotifications.getAllIds = function () { return; };
    /**
     * Get the ids of triggered notifications
     */
    LocalNotifications.getTriggeredIds = function () { return; };
    /**
     * Get the ids of scheduled notifications
     */
    LocalNotifications.getScheduledIds = function () { return; };
    /**
     * Get a notification object
     * @param notificationId The id of the notification to get
     */
    LocalNotifications.get = function (notificationId) { return; };
    /**
     * Get a scheduled notification object
     * @param notificationId The id of the notification to get
     */
    LocalNotifications.getScheduled = function (notificationId) { return; };
    /**
     * Get a triggered notification object
     * @param notificationId The id of the notification to get
     */
    LocalNotifications.getTriggered = function (notificationId) { return; };
    /**
     * Get all notification objects
     */
    LocalNotifications.getAll = function () { return; };
    /**
     * Get all scheduled notification objects
     */
    LocalNotifications.getAllScheduled = function () { return; };
    /**
     * Get all triggered notification objects
     */
    LocalNotifications.getAllTriggered = function () { return; };
    /**
     * Sets a callback for a specific event
     * @param eventName The name of the event. Available events: schedule, trigger, click, update, clear, clearall, cancel, cancelall
     * @param callback Call back function. All events return notification and state parameter. clear and clearall return state parameter only.
     */
    LocalNotifications.on = function (eventName, callback) { };
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], LocalNotifications, "schedule", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], LocalNotifications, "update", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "clear", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 0,
            errorIndex: 2
        })
    ], LocalNotifications, "clearAll", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "cancel", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 0,
            errorIndex: 2
        })
    ], LocalNotifications, "cancelAll", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "isPresent", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "isScheduled", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "isTriggered", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "getAllIds", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "getTriggeredIds", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "getScheduledIds", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "get", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "getScheduled", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "getTriggered", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "getAll", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "getAllScheduled", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "getAllTriggered", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], LocalNotifications, "on", null);
    LocalNotifications = __decorate([
        plugin_1.Plugin({
            plugin: 'de.appplant.cordova.plugin.local-notification',
            pluginRef: 'cordova.plugins.notification.local',
            repo: 'https://github.com/katzer/cordova-plugin-local-notifications'
        })
    ], LocalNotifications);
    return LocalNotifications;
}());
exports.LocalNotifications = LocalNotifications;

},{"./plugin":49}],47:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name MediaPlugin
 * @description
 * @usage
 * ```ts
 * import {MediaPlugin} from 'ionic-native';
 *
 *
 * ...
 *
 *
 * // Playing a file
 * var file = new MediaPlugin("path/to/file.mp3");
 *
 * // play the file
 * file.play();
 *
 * // skip to 10 seconds
 * file.seekTo(10000);
 *
 * // stop plying the file
 * file.stop();
 *
 *
 * ...
 *
 * // Recording to a file
 * var newFile = new MediaPlugin("path/to/file.mp3");
 * newFile.startRecord();
 *
 * newFile.stopRecord();
 *
 *
 *
 * ```
 */
var MediaPlugin = (function () {
    // Methods
    /**
     * Open a media file
     * @param src {string} A URI containing the audio content.
     */
    function MediaPlugin(src) {
        // TODO handle success, error, and status
        this._objectInstance = new Media(src);
    }
    /**
     * Returns the current amplitude of the current recording.
     */
    MediaPlugin.prototype.getCurrentAmplitude = function () { return; };
    /**
     * Returns the current position within an audio file. Also updates the Media object's position parameter.
     */
    MediaPlugin.prototype.getCurrentPosition = function () { return; };
    /**
     * Returns the duration of an audio file in seconds. If the duration is unknown, it returns a value of -1.
     */
    MediaPlugin.prototype.getDuration = function () { return; };
    /**
     * Starts or resumes playing an audio file.
     */
    MediaPlugin.prototype.play = function (iosOptions) { };
    /**
     * Pauses playing an audio file.
     */
    MediaPlugin.prototype.pause = function () { };
    /**
     * Releases the underlying operating system's audio resources. This is particularly important for Android, since there are a finite amount of OpenCore instances for media playback. Applications should call the release function for any Media resource that is no longer needed.
     */
    MediaPlugin.prototype.release = function () { };
    /**
     * Sets the current position within an audio file.
     * @param milliseconds
     */
    MediaPlugin.prototype.seekTo = function (milliseconds) { };
    /**
     * Set the volume for an audio file.
     * @param volume The volume to set for playback. The value must be within the range of 0.0 to 1.0.
     */
    MediaPlugin.prototype.setVolume = function (volume) { };
    /**
     * Starts recording an audio file.
     */
    MediaPlugin.prototype.startRecord = function () { };
    /**
     * Stops recording
     */
    MediaPlugin.prototype.stopRecord = function () { };
    /**
     * Stops playing an audio file.
     */
    MediaPlugin.prototype.stop = function () { };
    // Constants
    MediaPlugin.MEDIA_NONE = 0;
    MediaPlugin.MEDIA_STARTING = 1;
    MediaPlugin.MEDIA_RUNNING = 2;
    MediaPlugin.MEDIA_PAUSED = 3;
    MediaPlugin.MEDIA_STOPPED = 4;
    __decorate([
        plugin_1.CordovaInstance()
    ], MediaPlugin.prototype, "getCurrentAmplitude", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], MediaPlugin.prototype, "getCurrentPosition", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "getDuration", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "play", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "pause", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "release", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "seekTo", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "setVolume", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "startRecord", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "stopRecord", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "stop", null);
    MediaPlugin = __decorate([
        plugin_1.Plugin({
            repo: 'https://github.com/apache/cordova-plugin-media',
            plugin: 'cordova-plugin-media',
            pluginRef: 'Media'
        })
    ], MediaPlugin);
    return MediaPlugin;
}());
exports.MediaPlugin = MediaPlugin;
var MediaError = (function () {
    function MediaError() {
    }
    Object.defineProperty(MediaError, "MEDIA_ERR_ABORTED", {
        get: function () { return 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaError, "MEDIA_ERR_NETWORK", {
        get: function () { return 2; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaError, "MEDIA_ERR_DECODE", {
        get: function () { return 3; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaError, "MEDIA_ERR_NONE_SUPPORTED", {
        get: function () { return 4; },
        enumerable: true,
        configurable: true
    });
    return MediaError;
}());
exports.MediaError = MediaError;

},{"./plugin":49}],48:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Network
 * @description
 * Requires Cordova plugin: cordova-plugin-network-information. For more info, please see the [Network plugin docs](https://github.com/apache/cordova-plugin-network-information).
 *
 * @usage
 * ```js
 * import {Network, Connection} from 'ionic-native';
 *
 * // watch network for a disconnect
 * let disconnectSubscription = Network.onDisconnect().subscribe(() => {
 *   console.log('network was disconnected :-( ')
 * });
 *
 * // stop disconnect watch
 * disconnectSubscription.unsubscribe();
 *
 *
 * // watch network for a connection
 * let connectSubscription = Network.onConnect().subscribe(() => {
 *   console.log('network connected!');
*
 *   // We just got a connection but we need to wait briefly
 *
// before we determine the connection type.  Might need to wait

 *   // prior to doing any api requests as well.
 *   setTimeout(() => {
 *     console.log(Network.connection);
 *     if (Network.connection === Connection.WIFI) {
 *       console.log('we got a wifi connection, woohoo!');
 *     }
 *   }, 3000);
 * });
 *
 * // stop connect watch
 * connectSubscription.unsubscribe();
 *
 * ```
 */
var Network = (function () {
    function Network() {
    }
    Object.defineProperty(Network, "connection", {
        /**
         * Return the network connection type
         */
        get: function () { return navigator.connection.type; },
        enumerable: true,
        configurable: true
    });
    /**
     * Get notified when the device goes offline
     * @returns {Observable<any>} Returns an observable.
     */
    Network.onDisconnect = function () { return; };
    /**
     * Get notified when the device goes online
     * @returns {Observable<any>} Returns an observable.
     */
    Network.onConnect = function () { return; };
    __decorate([
        plugin_1.CordovaProperty
    ], Network, "connection", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'offline'
        })
    ], Network, "onDisconnect", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'online'
        })
    ], Network, "onConnect", null);
    Network = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-network-information',
            repo: 'https://github.com/apache/cordova-plugin-network-information',
            platforms: ['Amazon Fire OS', 'iOS', 'Android', 'BlackBerry 10', 'Windows Phone 7', 'Windows Phone 8', 'Windows', 'Firefox OS', 'Browser'],
            pluginRef: 'navigator.connection'
        })
    ], Network);
    return Network;
}());
exports.Network = Network;
var Connection = (function () {
    function Connection() {
    }
    Object.defineProperty(Connection, "UNKNOWN", {
        get: function () { return 'unknown'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Connection, "ETHERNET", {
        get: function () { return 'ethernet'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Connection, "WIFI", {
        get: function () { return 'wifi'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Connection, "CELL_2G", {
        get: function () { return '2g'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Connection, "CELL_3G", {
        get: function () { return '3g'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Connection, "CELL_4G", {
        get: function () { return '4g'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Connection, "CELL", {
        get: function () { return 'cellular'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Connection, "NONE", {
        get: function () { return 'none'; },
        enumerable: true,
        configurable: true
    });
    return Connection;
}());
exports.Connection = Connection;

},{"./plugin":49}],49:[function(require,module,exports){
"use strict";
var util_1 = require('../util');
var Observable_1 = require('rxjs/Observable');
/**
 * @private
 * @param pluginRef
 * @returns {null|*}
 */
exports.getPlugin = function (pluginRef) {
    return util_1.get(window, pluginRef);
};
/**
 * @private
 * @param pluginRef
 * @returns {boolean}
 */
exports.isInstalled = function (pluginRef) {
    return !!exports.getPlugin(pluginRef);
};
/**
 * @private
 * @param pluginObj
 * @param method
 */
exports.pluginWarn = function (pluginObj, method) {
    var pluginName = pluginObj.name;
    var plugin = pluginObj.plugin;
    if (method) {
        console.warn('Native: tried calling ' + pluginName + '.' + method + ', but the ' + pluginName + ' plugin is not installed.');
    }
    else {
        console.warn('Native: tried accessing the ' + pluginName + ' plugin but it\'s not installed.');
    }
    console.warn('Install the ' + pluginName + ' plugin: \'cordova plugin add ' + plugin + '\'');
};
/**
 * @private
 * @param pluginName
 * @param method
 */
exports.cordovaWarn = function (pluginName, method) {
    if (method) {
        console.warn('Native: tried calling ' + pluginName + '.' + method + ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
    }
    else {
        console.warn('Native: tried accessing the ' + pluginName + ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
    }
};
function setIndex(args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    // If the plugin method expects myMethod(success, err, options)
    if (opts.callbackOrder === 'reverse') {
        // Get those arguments in the order [resolve, reject, ...restOfArgs]
        args.unshift(reject);
        args.unshift(resolve);
    }
    else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
        // If we've specified a success/error index
        args.splice(opts.successIndex, 0, resolve);
        args.splice(opts.errorIndex, 0, reject);
    }
    else {
        // Otherwise, let's tack them on to the end of the argument list
        // which is 90% of cases
        args.push(resolve);
        args.push(reject);
    }
    return args;
}
function callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject) {
    // Try to figure out where the success/error callbacks need to be bound
    // to our promise resolve/reject handlers.
    if (opts === void 0) { opts = {}; }
    args = setIndex(args, opts, resolve, reject);
    var pluginInstance = exports.getPlugin(pluginObj.pluginRef);
    if (!pluginInstance) {
        // Do this check in here in the case that the Web API for this plugin is available (for example, Geolocation).
        if (!window.cordova) {
            exports.cordovaWarn(pluginObj.name, methodName);
            return {
                error: 'cordova_not_available'
            };
        }
        exports.pluginWarn(pluginObj, methodName);
        return {
            error: 'plugin_not_installed'
        };
    }
    // TODO: Illegal invocation needs window context
    return util_1.get(window, pluginObj.pluginRef)[methodName].apply(pluginInstance, args);
}
function getPromise(cb) {
    if (window.Promise) {
        // console.log('Native promises available...');
        return new Promise(function (resolve, reject) {
            cb(resolve, reject);
        });
    }
    else if (window.angular) {
        var $q_1 = window.angular.injector(['ng']).get('$q');
        // console.log('Loaded $q', $q);
        return $q_1(function (resolve, reject) {
            cb(resolve, reject);
        });
    }
    else {
        console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular 1/2 or on a recent browser.');
    }
}
function wrapPromise(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    var pluginResult, rej;
    var p = getPromise(function (resolve, reject) {
        pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
        rej = reject;
    });
    // Angular throws an error on unhandled rejection, but in this case we have already printed
    // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
    // to error
    if (pluginResult && pluginResult.error) {
        p.catch(function () { });
        rej(pluginResult.error);
    }
    return p;
}
function wrapObservable(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    return new Observable_1.Observable(function (observer) {
        var pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
        if (pluginResult && pluginResult.error) {
            observer.error(pluginResult.error);
        }
        return function () {
            try {
                if (opts.clearWithArgs) {
                    return util_1.get(window, pluginObj.pluginRef)[opts.clearFunction].apply(pluginObj, args);
                }
                return util_1.get(window, pluginObj.pluginRef)[opts.clearFunction].call(pluginObj, pluginResult);
            }
            catch (e) {
                console.warn('Unable to clear the previous observable watch for', pluginObj.name, methodName);
                console.error(e);
            }
        };
    });
}
function callInstance(pluginObj, methodName, args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    args = setIndex(args, opts, resolve, reject);
    return pluginObj._objectInstance[methodName].apply(pluginObj._objectInstance, args);
}
function wrapInstance(pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (opts.sync) {
            return callInstance(pluginObj, methodName, args, opts);
        }
        else if (opts.observable) {
            return new Observable_1.Observable(function (observer) {
                var pluginResult = callInstance(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                return function () {
                    try {
                        if (opts.clearWithArgs) {
                            return pluginObj._objectInstance[opts.clearFunction].apply(pluginObj._objectInstance, args);
                        }
                        return pluginObj._objectInstance[opts.clearFunction].call(pluginObj, pluginResult);
                    }
                    catch (e) {
                        console.warn('Unable to clear the previous observable watch for', pluginObj.name, methodName);
                        console.error(e);
                    }
                };
            });
        }
        else {
            return getPromise(function (resolve, reject) {
                callInstance(pluginObj, methodName, args, opts, resolve, reject);
            });
        }
    };
}
/**
 * Wrap the event with an observable
 * @param event
 * @returns {Observable}
 */
function wrapEventObservable(event) {
    return new Observable_1.Observable(function (observer) {
        var callback = function (status) { return observer.next(status); };
        window.addEventListener(event, callback, false);
        return function () { return window.removeEventListener(event, callback, false); };
    });
}
/**
 * @private
 * @param pluginObj
 * @param methodName
 * @param opts
 * @returns {function(...[any]): (undefined|*|Observable|*|*)}
 */
exports.wrap = function (pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (opts.sync)
            return callCordovaPlugin(pluginObj, methodName, args, opts);
        else if (opts.observable)
            return wrapObservable(pluginObj, methodName, args, opts);
        else if (opts.eventObservable && opts.event)
            return wrapEventObservable(opts.event);
        else
            return wrapPromise(pluginObj, methodName, args, opts);
    };
};
/**
 * @private
 *
 * Class decorator specifying Plugin metadata. Required for all plugins.
 *
 * @usage
 * ```ts
 * @Plugin({
 *  name: 'MyPlugin',
 *  plugin: 'cordova-plugin-myplugin',
 *  pluginRef: 'window.myplugin'
 *  })
 *  export class MyPlugin {
 *
 *    // Plugin wrappers, properties, and functions go here ...
 *
 *  }
 * ```
 */
function Plugin(config) {
    return function (cls) {
        // Add these fields to the class
        for (var k in config) {
            cls[k] = config[k];
        }
        cls['installed'] = function () {
            return !!exports.getPlugin(config.pluginRef);
        };
        return cls;
    };
}
exports.Plugin = Plugin;
/**
 * @private
 *
 * Wrap a stub function in a call to a Cordova plugin, checking if both Cordova
 * and the required plugin are installed.
 */
function Cordova(opts) {
    if (opts === void 0) { opts = {}; }
    return function (target, methodName, descriptor) {
        var originalMethod = descriptor.value;
        return {
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                return exports.wrap(this, methodName, opts).apply(this, args);
            }
        };
    };
}
exports.Cordova = Cordova;
/**
 * @private
 *
 * Wrap an instance method
 */
function CordovaInstance(opts) {
    if (opts === void 0) { opts = {}; }
    return function (target, methodName) {
        return {
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                return wrapInstance(this, methodName, opts).apply(this, args);
            }
        };
    };
}
exports.CordovaInstance = CordovaInstance;
/**
 * @private
 *
 *
 * Before calling the original method, ensure Cordova and the plugin are installed.
 */
function CordovaProperty(target, key, descriptor) {
    var originalMethod = descriptor.get;
    descriptor.get = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (!window.cordova) {
            exports.cordovaWarn(this.name, null);
            return {};
        }
        var pluginInstance = exports.getPlugin(this.pluginRef);
        if (!pluginInstance) {
            exports.pluginWarn(this, key);
            return {};
        }
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
exports.CordovaProperty = CordovaProperty;
/**
 * @private
 * @param target
 * @param key
 * @param descriptor
 * @constructor
 */
function InstanceProperty(target, key, descriptor) {
    descriptor.get = function () {
        return this._objectInstance[key];
    };
    descriptor.get = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return this._objectInstance[key] = args[0];
    };
    return descriptor;
}
exports.InstanceProperty = InstanceProperty;

},{"../util":63,"rxjs/Observable":64}],50:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Push
 * @description
 * Register and receive push notifications.
 *
 * Requires Cordova plugin: `phonegap-plugin-push`. For more info, please see the [Push plugin docs](https://github.com/phonegap/phonegap-plugin-push).
 *
 * For TypeScript users, see the [Push plugin docs about using TypeScript for custom notifications](https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/TYPESCRIPT.md).
 *
 * @usage
 * ```js
 * import {Push} from 'ionic-native';
 *
 *
 *
 * ```
 */
var Push = (function () {
    function Push() {
    }
    /**
     * Initialize the plugin on the native side.
     *
     * ```
     * var push = Push.init({
     *    android: {
     *        senderID: "12345679"
     *    },
     *    ios: {
     *        alert: "true",
     *        badge: true,
     *        sound: 'false'
     *    },
     *    windows: {}
     * });
     * ```
     *
     * @param {PushOptions} options  The Push [options](https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/API.md#parameters).
     * @return {PushNotification}  Returns a new [PushNotification](https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/API.md#pushonevent-callback) object.
     */
    Push.init = function (options) { return; };
    /**
     * Check whether the push notification permission has been granted.
     * @return {Promise} Returns a Promise that resolves with an object with one property: isEnabled, a boolean that indicates if permission has been granted.
     */
    Push.hasPermission = function () { return; };
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], Push, "init", null);
    __decorate([
        plugin_1.Cordova()
    ], Push, "hasPermission", null);
    Push = __decorate([
        plugin_1.Plugin({
            plugin: 'phonegap-plugin-push',
            pluginRef: 'PushNotification',
            repo: 'https://github.com/phonegap/phonegap-plugin-push'
        })
    ], Push);
    return Push;
}());
exports.Push = Push;

},{"./plugin":49}],51:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name SafariViewController
 * @description
 * @usage
 * ```
 * import {SafariViewController} from 'ionic-native';
 *
 * ...
 *
 * SafariViewController.isAvailable()
 *   .then(
 *     (available) => {
 *       if(available){
 *
 *         SafariViewController.show({
 *           utl: 'http://ionic.io',
 *           hidden: false,
 *           animated: false,
 *           transition: 'curl',
 *           enterReaderModeIfAvailable: true,
 *           tintColor: '#ff0000'
 *         })
 *         .then(
 *           (result: any) => {
 *             if(result.event === 'opened') console.log("Opened");
 *             else if(result.event === 'loaded') console.log("Loaded");
 *             else if(result.event === 'closed') console.log("Closed");
 *           },
 *           (error: any) => console.error(error)
 *         );
 *
 *       } else {
 *         // use fallback browser, example InAppBrowser
 *       }
 *     }
 *   );
 * ```
 */
var SafariViewController = (function () {
    function SafariViewController() {
    }
    /**
     * Checks if SafariViewController is available
     */
    SafariViewController.isAvailable = function () { return; };
    /**
     * Shows Safari View Controller
     * @param options
     */
    SafariViewController.show = function (options) { };
    /**
     * Hides Safari View Controller
     */
    SafariViewController.hide = function () { };
    /**
     * Tries to connect to the  Chrome's custom tabs service. you must call this method before calling any of the other methods listed below.
     */
    SafariViewController.connectToService = function () { return; };
    /**
     * Call this method whenever there's a chance the user will open an external url.
     */
    SafariViewController.warmUp = function () { return; };
    /**
     * For even better performance optimization, call this methods if there's more than a 50% chance the user will open a certain URL.
     * @param url
     */
    SafariViewController.mayLaunchUrl = function (url) { return; };
    __decorate([
        plugin_1.Cordova()
    ], SafariViewController, "isAvailable", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], SafariViewController, "show", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], SafariViewController, "hide", null);
    __decorate([
        plugin_1.Cordova()
    ], SafariViewController, "connectToService", null);
    __decorate([
        plugin_1.Cordova()
    ], SafariViewController, "warmUp", null);
    __decorate([
        plugin_1.Cordova()
    ], SafariViewController, "mayLaunchUrl", null);
    SafariViewController = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-safariviewcontroller',
            pluginRef: 'SafariViewController',
            platforms: ['iOS'],
            repo: 'https://github.com/EddyVerbruggen/cordova-plugin-safariviewcontroller'
        })
    ], SafariViewController);
    return SafariViewController;
}());
exports.SafariViewController = SafariViewController;

},{"./plugin":49}],52:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
var Screenshot = (function () {
    function Screenshot() {
    }
    /**
     *  Takes screenshot and saves the image
     *
     * @param {string} format. Format can take the value of either 'jpg' or 'png'
     * On ios, only 'jpg' format is supported
     * @param {number} quality. Determines the quality of the screenshot.
     *        Default quality is set to 100.
     * @param {string} filename. Name of the file as stored on the storage
     */
    Screenshot.save = function (format, quality, filename) {
        return new Promise(function (resolve, reject) {
            navigator.screenshot.save(function (error, result) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            }, format, quality, filename);
        });
    };
    /**
     *  Takes screenshot and returns the image as an URI
     *
     * @param {number} quality. Determines the quality of the screenshot.
     *        Default quality is set to 100.
     */
    Screenshot.URI = function (quality) {
        return new Promise(function (resolve, reject) {
            navigator.screenshot.URI(function (error, result) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            }, quality);
        });
    };
    Screenshot = __decorate([
        plugin_1.Plugin({
            plugin: 'https://github.com/gitawego/cordova-screenshot.git',
            pluginRef: 'navigator.screenshot',
            repo: 'https://github.com/gitawego/cordova-screenshot.git'
        })
    ], Screenshot);
    return Screenshot;
}());
exports.Screenshot = Screenshot;

},{"./plugin":49}],53:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name SMS
 * @description
 *
 * Requires Cordova plugin: cordova-plugin-sms. For more info, please see the [SMS plugin docs](https://github.com/cordova-sms/cordova-sms-plugin).
 *
 * @usage
 * ```ts
 * import {SMS} from 'ionic-native';
 *
 *
 *
 * // Send a text message using default options
 * SMS.send('416123456','Hello world!');
 *
 * ```
 */
var SMS = (function () {
    function SMS() {
    }
    /**
     * Sends sms to a number
     * @param phoneNumber {string|Array<string>} Phone number
     * @param message {string} Message
     * @param options {SmsOptions} Options
     * @returns {Promise<any>} Resolves promise when the SMS has been sent
     */
    SMS.send = function (phoneNumber, message, options) { return; };
    __decorate([
        plugin_1.Cordova()
    ], SMS, "send", null);
    SMS = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-sms-plugin',
            pluginRef: 'sms',
            repo: 'https://github.com/cordova-sms/cordova-sms-plugin',
            platforms: ['Android', 'iOS', 'Windows Phone 8']
        })
    ], SMS);
    return SMS;
}());
exports.SMS = SMS;

},{"./plugin":49}],54:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Social Sharing
 * @description
 * Share text, files, images, and links via social networks, sms, and email.
 * @usage
 * ```js
 * import {SocialSharing} from 'ionic-native';
 *
 * ...
 * // TODO add usage info
 * ```
 */
var SocialSharing = (function () {
    function SocialSharing() {
    }
    /**
     * Shares using the share sheet
     * @param message {string} The message you would like to share.
     * @param subject {string} The subject
     * @param file {string|Array<string>} URL(s) to file(s) or image(s), local path(s) to file(s) or image(s), or base64 data of an image. Only the first file/image will be used on Windows Phone.
     * @param url {string} A URL to share
     */
    SocialSharing.share = function (message, subject, file, url) { };
    /**
     * Checks if you can share via a specific app.
     * @param appName App name or package name. Examples: instagram or com.apple.social.facebook
     */
    SocialSharing.canShareVia = function (appName) { return; };
    /**
     * Shares directly to Twitter
     * @param message
     * @param image
     * @param url
     */
    SocialSharing.shareViaTwitter = function (message, image, url) { };
    /**
     * Shares directly to Facebook
     * @param message {string}
     * @param image {string}
     * @param url {string}
     */
    SocialSharing.shareViaFacebook = function (message, image, url) { return; };
    /**
     * Shares directly to Facebook with a paste message hint
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @param pasteMessageHint {string}
     */
    SocialSharing.shareViaFacebookWithPasteMessageHint = function (message, image, url, pasteMessageHint) { return; };
    /**
     * Shares directly to Instagram
     * @param message {string}
     * @param image {string}
     */
    SocialSharing.shareViaInstagram = function (message, image) { return; };
    /**
     * Shares directly to WhatsApp
     * @param message {string}
     * @param image {string}
     * @param url {string}
     */
    SocialSharing.shareViaWhatsApp = function (message, image, url) { return; };
    /**
     * Shares directly to a WhatsApp Contact
     * @param receiver {string} Pass phone number on Android, and Addressbook ID (abid) on iOS
     * @param message {string} Message to send
     * @param image {string} Image to send (does not work on iOS
     * @param url {string} Link to send
     */
    SocialSharing.shareViaWhatsAppToReceiver = function (receiver, message, image, url) { return; };
    /**
     * Share via SMS
     * @param messge {string} message to send
     * @param phoneNumber {string} Number or multiple numbers seperated by commas
     */
    SocialSharing.shareViaSMS = function (messge, phoneNumber) { return; };
    /**
     * Share via Email
     * @param message {string}
     * @param subject {string}
     * @param to {Array<string>}
     * @param cc {Array<string>}
     * @param bcc {Array<string>}
     * @param files {string|Array<string>} URL or local path to file(s) to attach
     */
    SocialSharing.shareViaEmail = function (message, subject, to, cc, bcc, files) { return; };
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], SocialSharing, "share", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['iOS', 'Android']
        })
    ], SocialSharing, "canShareVia", null);
    __decorate([
        plugin_1.Cordova({
            sync: true,
            platforms: ['iOS', 'Android']
        })
    ], SocialSharing, "shareViaTwitter", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['iOS', 'Android']
        })
    ], SocialSharing, "shareViaFacebook", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['iOS', 'Android']
        })
    ], SocialSharing, "shareViaFacebookWithPasteMessageHint", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['iOS', 'Android']
        })
    ], SocialSharing, "shareViaInstagram", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['iOS', 'Android']
        })
    ], SocialSharing, "shareViaWhatsApp", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['iOS', 'Android']
        })
    ], SocialSharing, "shareViaWhatsAppToReceiver", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['iOS', 'Android']
        })
    ], SocialSharing, "shareViaSMS", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['iOS', 'Android']
        })
    ], SocialSharing, "shareViaEmail", null);
    SocialSharing = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-x-socialsharing',
            pluginRef: 'window.plugins.socialsharing',
            repo: 'https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin',
            platforms: ['iOS', 'Android', 'Windows Phone']
        })
    ], SocialSharing);
    return SocialSharing;
}());
exports.SocialSharing = SocialSharing;

},{"./plugin":49}],55:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Spinner Dialog
 * @description
 * @usage
 * ```js
 * import {SpinnerDialog} from 'ionic-native';
 *
 *
 *
 * SpinnerDialog.show();
 *
 * SpinnerDialog.hide();
 * ```
 */
var SpinnerDialog = (function () {
    function SpinnerDialog() {
    }
    /**
     * Shows the spinner dialog
     * @param title {string} Spinner title (shows on Android only)
     * @param message {string} Spinner message
     * @param cancelCallback {boolean|function} Set to false to set spinner not cancelable. Or provide a function to call when the user cancels the spinner.
     * @param iOSOptions {object} Options for iOS only
     */
    SpinnerDialog.show = function (title, message, cancelCallback, iOSOptions) { };
    /**
     * Hides the spinner dialog if visible
     */
    SpinnerDialog.hide = function () { };
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], SpinnerDialog, "show", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], SpinnerDialog, "hide", null);
    SpinnerDialog = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-spinner-dialog',
            pluginRef: 'window.plugins.spinnerDialog',
            repo: 'https://github.com/Paldom/SpinnerDialog',
            platforms: ['Android', 'iOS', 'Windows Phone 8']
        })
    ], SpinnerDialog);
    return SpinnerDialog;
}());
exports.SpinnerDialog = SpinnerDialog;

},{"./plugin":49}],56:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Splashscreen
 * @description This plugin displays and hides a splash screen during application launch. The methods below allows showing and hiding the splashscreen after the app has loaded.
 * @usage
 * ```ts
 * import {Splashscreen} from 'ionic-native';
 *
 *
 *
 * Splashscreen.show();
 *
 * Splashscreen.hide();
 * ```
 */
var Splashscreen = (function () {
    function Splashscreen() {
    }
    /**
     * Shows the splashscreen
     */
    Splashscreen.show = function () { };
    /**
     * Hides the splashscreen
     */
    Splashscreen.hide = function () { };
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], Splashscreen, "show", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], Splashscreen, "hide", null);
    Splashscreen = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-splashscreen',
            pluginRef: 'navigator.splashscreen',
            repo: 'https://github.com/apache/cordova-plugin-splashscreen'
        })
    ], Splashscreen);
    return Splashscreen;
}());
exports.Splashscreen = Splashscreen;

},{"./plugin":49}],57:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name SQLite
 */
var SQLite = (function () {
    function SQLite(config) {
        var _this = this;
        new Promise(function (resolve, reject) {
            sqlitePlugin.openDatabase(config, resolve, reject);
        }).then(function (db) { return _this._objectInstance = db; }, function (error) { return console.warn(error); });
    }
    Object.defineProperty(SQLite.prototype, "databaseFeatures", {
        get: function () {
            return this._objectInstance.databaseFeatures;
        },
        enumerable: true,
        configurable: true
    });
    SQLite.prototype.addTransaction = function (transaction) { };
    SQLite.prototype.transaction = function (fn) { return; };
    SQLite.prototype.readTransaction = function (fn) { return; };
    SQLite.prototype.startNextTransaction = function () { };
    SQLite.prototype.close = function () { return; };
    SQLite.prototype.start = function () { };
    SQLite.prototype.executeSql = function (statement, params) { return; };
    SQLite.prototype.addSatement = function (sql, values) { return; };
    SQLite.prototype.sqlBatch = function (sqlStatements) { return; };
    SQLite.prototype.abortallPendingTransactions = function () { };
    SQLite.prototype.handleStatementSuccess = function (handler, response) { };
    SQLite.prototype.handleStatementFailure = function (handler, response) { };
    SQLite.prototype.run = function () { };
    SQLite.prototype.abort = function (txFailure) { };
    SQLite.prototype.finish = function () { };
    SQLite.prototype.abortFromQ = function (sqlerror) { };
    SQLite.echoTest = function () { return; };
    SQLite.deleteDatabase = function (first) { return; };
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "addTransaction", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], SQLite.prototype, "transaction", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], SQLite.prototype, "readTransaction", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "startNextTransaction", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], SQLite.prototype, "close", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "start", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], SQLite.prototype, "executeSql", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], SQLite.prototype, "addSatement", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], SQLite.prototype, "sqlBatch", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "abortallPendingTransactions", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "handleStatementSuccess", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "handleStatementFailure", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "run", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "abort", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "finish", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "abortFromQ", null);
    __decorate([
        plugin_1.Cordova()
    ], SQLite, "echoTest", null);
    __decorate([
        plugin_1.Cordova()
    ], SQLite, "deleteDatabase", null);
    SQLite = __decorate([
        plugin_1.Plugin({
            pluginRef: 'sqlitePlugin',
            plugin: 'cordova-sqlite-storage',
            repo: 'https://github.com/litehelpers/Cordova-sqlite-storage'
        })
    ], SQLite);
    return SQLite;
}());
exports.SQLite = SQLite;

},{"./plugin":49}],58:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Status Bar
 * @description
 * Manage the appearance of the native status bar.
 *
 * Requires Cordova plugin: `cordova-plugin-statusbar`. For more info, please see the [StatusBar plugin docs](https://github.com/apache/cordova-plugin-statusbar).
 *
 * @usage
 * ```ts
 * import {StatusBar} from 'ionic-native';
 *
 *
 *
 * StatuBar.overlaysWebView(true);
 *
 * StatusBar.
 * ```
 *
 */
var StatusBar = (function () {
    function StatusBar() {
    }
    /**
     * Set whether the status bar overlays the main app view. The default
     * is true.
     *
     * @param {boolean} doesOverlay  Whether the status bar overlays the main app view.
     */
    StatusBar.overlaysWebView = function (doesOverlay) { };
    ;
    /**
     * Use the default statusbar (dark text, for light backgrounds).
     */
    StatusBar.styleDefault = function () { };
    ;
    /**
     * Use the lightContent statusbar (light text, for dark backgrounds).
     */
    StatusBar.styleLightContent = function () { };
    ;
    /**
     * Use the blackTranslucent statusbar (light text, for dark backgrounds).
     */
    StatusBar.styleBlackTranslucent = function () { };
    ;
    /**
     * Use the blackOpaque statusbar (light text, for dark backgrounds).
     */
    StatusBar.styleBlackOpaque = function () { };
    ;
    /**
     * Set the status bar to a specific named color. Valid options:
     * black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown.
     *
     * iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing.
     *
     * @param {string} colorName  The name of the color (from above)
     */
    StatusBar.backgroundColorByName = function (colorName) { };
    ;
    /**
     * Set the status bar to a specific hex color (CSS shorthand supported!).
     *
     * iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing.
     *
     * @param {string} hexString  The hex value of the color.
     */
    StatusBar.backgroundColorByHexString = function (hexString) { };
    ;
    /**
     * Hide the StatusBar
     */
    StatusBar.hide = function () { };
    ;
    /**
    * Show the StatusBar
    */
    StatusBar.show = function () { };
    ;
    Object.defineProperty(StatusBar, "isVisible", {
        /**
         * Whether the StatusBar is currently visible or not.
         */
        get: function () { return window.StatusBar.isVisible; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], StatusBar, "overlaysWebView", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], StatusBar, "styleDefault", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], StatusBar, "styleLightContent", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], StatusBar, "styleBlackTranslucent", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], StatusBar, "styleBlackOpaque", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], StatusBar, "backgroundColorByName", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], StatusBar, "backgroundColorByHexString", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], StatusBar, "hide", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], StatusBar, "show", null);
    __decorate([
        plugin_1.CordovaProperty
    ], StatusBar, "isVisible", null);
    StatusBar = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-statusbar',
            pluginRef: 'StatusBar',
            repo: 'https://github.com/apache/cordova-plugin-statusbar'
        })
    ], StatusBar);
    return StatusBar;
}());
exports.StatusBar = StatusBar;

},{"./plugin":49}],59:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Toast
 * @description
 * This plugin allows you to show a native Toast (a little text popup) on iOS, Android and WP8. It's great for showing a non intrusive native notification which is guaranteed always in the viewport of the browser.
 *
 * Requires Cordova plugin: `cordova-plugin-x-toast`. For more info, please see the [Toast plugin docs](https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin).
 *
 * @usage
 * ```ts
 * import {Toast} from 'ionic-native';
 *
 *
 *
 * Toast.show("I'm a toast", 5000, "center").subscribe(
 *   toast => {
 *     console.log(toast);
 *   }
 * );
 * ```
 */
var Toast = (function () {
    function Toast() {
    }
    /**
     * Show a native toast for the given duration at the specified position.
     *
     * @param {string} message  The message to display.
     * @param {string} duration  Duration to show the toast, either 'short', 'long' or any number of milliseconds: '1500'.
     * @param {string} position  Where to position the toast, either 'top', 'center', or 'bottom'.
     * @return {Observable}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.show = function (message, duration, position) { return; };
    /**
     * Manually hide any currently visible toast.
     * @return {Promise} Returns a Promise that resolves on success.
     */
    Toast.hide = function () { return; };
    /**
     * Show a native toast with the given options.
     *
     * @param {Object} options  Options for showing a toast. Available options:
     *   message  The message to display.
     *   duration  Duration to show the toast, either 'short', 'long' or any number of milliseconds: '1500'.
     *   position  Where to position the toast, either 'top', 'center', or 'bottom'.
     *   addPixelsY  Offset in pixels to move the toast up or down from its specified position.
     *
     * @return {Observable}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.showWithOptions = function (options) { return; };
    /**
     * Shorthand for `show(message, 'short', 'top')`.
     * @return {Observable}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.showShortTop = function (message) { return; };
    /**
     * Shorthand for `show(message, 'short', 'center')`.
     * @return {Observable}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.showShortCenter = function (message) { return; };
    /**
     * Shorthand for `show(message, 'short', 'bottom')`.
     * @return {Observable}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.showShortBottom = function (message) { return; };
    /**
     * Shorthand for `show(message, 'long', 'top')`.
     * @return {Observable}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.showLongTop = function (message) { return; };
    /**
     * Shorthand for `show(message, 'long', 'center')`.
     * @return {Observable}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.showLongCenter = function (message) { return; };
    /**
     * Shorthand for `show(message, 'long', 'bottom')`.
     * @return {Observable}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.showLongBottom = function (message) { return; };
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'hide'
        })
    ], Toast, "show", null);
    __decorate([
        plugin_1.Cordova()
    ], Toast, "hide", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'hide'
        })
    ], Toast, "showWithOptions", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'hide'
        })
    ], Toast, "showShortTop", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'hide'
        })
    ], Toast, "showShortCenter", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'hide'
        })
    ], Toast, "showShortBottom", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'hide'
        })
    ], Toast, "showLongTop", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'hide'
        })
    ], Toast, "showLongCenter", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'hide'
        })
    ], Toast, "showLongBottom", null);
    Toast = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-x-toast',
            pluginRef: 'plugins.toast',
            repo: 'https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin'
        })
    ], Toast);
    return Toast;
}());
exports.Toast = Toast;

},{"./plugin":49}],60:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name TouchID
 * @description
 * Scan the fingerprint of a user with the TouchID sensor.
 *
 * Requires Cordova plugin: `cordova-plugin-touch-id`. For more info, please see the [TouchID plugin docs](https://github.com/EddyVerbruggen/cordova-plugin-touch-id).
 *
 * ### Error Codes
 *
 * The plugin will reject for various reasons. Your app will most likely need to respond to the cases differently.
 *
 * Here is a list of some of the error codes:
 *
 *  -  `-1` - Fingerprint scan failed more than 3 times
 *  -  `-2` or `-128` - User tapped the 'Cancel' button
 *  -  `-3` - User tapped the 'Enter Passcode' or 'Enter Password' button
 *  -  `-4` - The scan was cancelled by the system (Home button for example)
 *  -  `-6` - TouchID is not Available
 *  -  `-8` - TouchID is locked out from too many tries
 * @usage
 * ```js
 * import {TouchID} from 'ionic-native';
 *
 *
 *
 * ```
 */
var TouchID = (function () {
    function TouchID() {
    }
    /**
     * Whether TouchID is available or not.
     *
     * @return {Promise} Returns a Promise that resolves if yes, rejects if no.
     */
    TouchID.prototype.isAvailable = function () { return; };
    /**
     * Show TouchID dialog and wait for a fingerprint scan. If user taps 'Enter Password' button, brings up standard system passcode screen.
     *
     * @param {string} message  The message to display
     * @return {Promise} Returns a Promise the resolves if the fingerprint scan was successful, rejects with an error code (see above).
     */
    TouchID.verifyFingerprint = function (message) { return; };
    /**
     * Show TouchID dialog and wait for a fingerprint scan. If user taps 'Enter Password' button, rejects with code '-3' (see above).
     *
     * @param {string} message  The message to display
     * @return {Promise} Returns a Promise the resolves if the fingerprint scan was successful, rejects with an error code (see above).
     */
    TouchID.verifyFingerprintWithCustomPasswordFallback = function (message) { return; };
    /**
     * Show TouchID dialog with custom 'Enter Password' message and wait for a fingerprint scan. If user taps 'Enter Password' button, rejects with code '-3' (see above).
     *
     * @param {string} message  The message to display
     * @param {string} enterPasswordLabel  Custom text for the 'Enter Password' button
     * @return {Promise} Returns a Promise the resolves if the fingerprint scan was successful, rejects with an error code (see above).
     */
    TouchID.verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel = function (message, enterPasswordLabel) { return; };
    __decorate([
        plugin_1.Cordova()
    ], TouchID.prototype, "isAvailable", null);
    __decorate([
        plugin_1.Cordova()
    ], TouchID, "verifyFingerprint", null);
    __decorate([
        plugin_1.Cordova()
    ], TouchID, "verifyFingerprintWithCustomPasswordFallback", null);
    __decorate([
        plugin_1.Cordova()
    ], TouchID, "verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel", null);
    TouchID = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-touch-id',
            pluginRef: 'plugins.touchid',
            repo: 'https://github.com/EddyVerbruggen/cordova-plugin-touch-id'
        })
    ], TouchID);
    return TouchID;
}());
exports.TouchID = TouchID;

},{"./plugin":49}],61:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Vibration
 * @description Vibrates the device
 * @usage
 * ```ts
 * import {Vibration} from 'ionic-native';
 *
 *
 *
 * // Vibrate the device for a second
 * Vibration.vibrate(1000);
 *
 * // Vibrate 2 seconds
 * // Pause for 1 second
 * // Vibrate for 2 seconds
 * // Patterns work on Android and Windows only
 * Vibration.vibrate([2000,1000,2000]);
 *
 * // Stop any current vibrations immediately
 * // Works on Android and Windows only
 * Vibration.vibrate(0);
 * ```
 */
var Vibration = (function () {
    function Vibration() {
    }
    /**
     * Vibrates the device for given amount of time.
     * @param time {Number|Array<Number>} Milliseconds to vibrate the device. If passed an array of numbers, it will define a vibration pattern. Pass 0 to stop any vibration immediately.
     */
    Vibration.vibrate = function (time) { };
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], Vibration, "vibrate", null);
    Vibration = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-vibration',
            pluginRef: 'navigator',
            repo: 'https://github.com/apache/cordova-plugin-vibration'
        })
    ], Vibration);
    return Vibration;
}());
exports.Vibration = Vibration;

},{"./plugin":49}],62:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
var WebIntent = (function () {
    function WebIntent() {
    }
    Object.defineProperty(WebIntent, "ACTION_VIEW", {
        get: function () {
            return window.plugins.webintent.ACTION_VIEW;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIntent, "EXTRA_TEXT", {
        get: function () {
            return window.plugins.webintent.EXTRA_TEXT;
        },
        enumerable: true,
        configurable: true
    });
    WebIntent.startActivity = function (options) { return; };
    WebIntent.hasExtra = function (extra) { return; };
    WebIntent.getExtra = function (extra) { return; };
    WebIntent.getUri = function () { return; };
    ;
    WebIntent.onNewIntent = function () { return; };
    ;
    WebIntent.sendBroadcast = function (options) { return; };
    __decorate([
        plugin_1.CordovaProperty
    ], WebIntent, "ACTION_VIEW", null);
    __decorate([
        plugin_1.CordovaProperty
    ], WebIntent, "EXTRA_TEXT", null);
    __decorate([
        plugin_1.Cordova()
    ], WebIntent, "startActivity", null);
    __decorate([
        plugin_1.Cordova()
    ], WebIntent, "hasExtra", null);
    __decorate([
        plugin_1.Cordova()
    ], WebIntent, "getExtra", null);
    __decorate([
        plugin_1.Cordova()
    ], WebIntent, "getUri", null);
    __decorate([
        plugin_1.Cordova()
    ], WebIntent, "onNewIntent", null);
    __decorate([
        plugin_1.Cordova()
    ], WebIntent, "sendBroadcast", null);
    WebIntent = __decorate([
        plugin_1.Plugin({
            plugin: 'https://github.com/Initsogar/cordova-webintent.git',
            pluginRef: 'window.plugins.webintent',
            repo: 'https://github.com/Initsogar/cordova-webintent.git'
        })
    ], WebIntent);
    return WebIntent;
}());
exports.WebIntent = WebIntent;

},{"./plugin":49}],63:[function(require,module,exports){
"use strict";
function get(obj, path) {
    for (var i = 0, path = path.split('.'), len = path.length; i < len; i++) {
        if (!obj) {
            return null;
        }
        obj = obj[path[i]];
    }
    return obj;
}
exports.get = get;
;

},{}],64:[function(require,module,exports){
"use strict";
var root_1 = require('./util/root');
var toSubscriber_1 = require('./util/toSubscriber');
var $$observable = require('symbol-observable');
/**
 * A representation of any set of values over any amount of time. This the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
var Observable = (function () {
    /**
     * @constructor
     * @param {Function} subscribe the function that is  called when the Observable is
     * initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or
     * `complete` can be called to notify of a successful completion.
     */
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    /**
     * Creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     * @method lift
     * @param {Operator} operator the operator defining the operation to take on the observable
     * @return {Observable} a new observable with the Operator applied
     */
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    /**
     * Registers handlers for handling emitted values, error and completions from the observable, and
     *  executes the observable's subscriber function, which will take action to set up the underlying data stream
     * @method subscribe
     * @param {PartialObserver|Function} observerOrNext (optional) either an observer defining all functions to be called,
     *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
     * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
     *  the error will be thrown as unhandled
     * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
     * @return {ISubscription} a subscription reference to the registered handlers
     */
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this);
        }
        else {
            sink.add(this._subscribe(sink));
        }
        if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
            }
        }
        return sink;
    };
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
     * @return {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    Observable.prototype.forEach = function (next, PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                PromiseCtor = root_1.root.Rx.config.Promise;
            }
            else if (root_1.root.Promise) {
                PromiseCtor = root_1.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            var subscription = _this.subscribe(function (value) {
                if (subscription) {
                    // if there is a subscription, then we can surmise
                    // the next handling is asynchronous. Any errors thrown
                    // need to be rejected explicitly and unsubscribe must be
                    // called manually
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscription.unsubscribe();
                    }
                }
                else {
                    // if there is NO subscription, then we're getting a nexted
                    // value synchronously during subscription. We can just call it.
                    // If it errors, Observable's `subscribe` imple will ensure the
                    // unsubscription logic is called, then synchronously rethrow the error.
                    // After that, Promise will trap the error and send it
                    // down the rejection path.
                    next(value);
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        return this.source.subscribe(subscriber);
    };
    /**
     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
     * @method Symbol.observable
     * @return {Observable} this instance of the observable
     */
    Observable.prototype[$$observable] = function () {
        return this;
    };
    // HACK: Since TypeScript inherits static properties too, we have to
    // fight against TypeScript here so Subject can have a different static create signature
    /**
     * Creates a new cold Observable by calling the Observable constructor
     * @static true
     * @owner Observable
     * @method create
     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
     * @return {Observable} a new cold observable
     */
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;

},{"./util/root":76,"./util/toSubscriber":77,"symbol-observable":68}],65:[function(require,module,exports){
"use strict";
exports.empty = {
    isUnsubscribed: true,
    next: function (value) { },
    error: function (err) { throw err; },
    complete: function () { }
};

},{}],66:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isFunction_1 = require('./util/isFunction');
var Subscription_1 = require('./Subscription');
var Observer_1 = require('./Observer');
var rxSubscriber_1 = require('./symbol/rxSubscriber');
/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    /**
     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
     * defined Observer or a `next` callback function.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     */
    function Subscriber(destinationOrNext, error, complete) {
        _super.call(this);
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.destination = destinationOrNext;
                        this.destination.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    Subscriber.prototype[rxSubscriber_1.$$rxSubscriber] = function () { return this; };
    /**
     * A static factory for a Subscriber, given a (potentially partial) definition
     * of an Observer.
     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
     * Observer represented by the given arguments.
     */
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    /**
     * The {@link Observer} callback to receive notifications of type `next` from
     * the Observable, with a value. The Observable may call this method 0 or more
     * times.
     * @param {T} [value] The `next` value.
     * @return {void}
     */
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    /**
     * The {@link Observer} callback to receive notifications of type `error` from
     * the Observable, with an attached {@link Error}. Notifies the Observer that
     * the Observable has experienced an error condition.
     * @param {any} [err] The `error` exception.
     * @return {void}
     */
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    /**
     * The {@link Observer} callback to receive a valueless notification of type
     * `complete` from the Observable. Notifies the Observer that the Observable
     * has finished sending push-based notifications.
     * @return {void}
     */
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.isUnsubscribed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parent, observerOrNext, error, complete) {
        _super.call(this);
        this._parent = _parent;
        var next;
        var context = this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            context = observerOrNext;
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (isFunction_1.isFunction(context.unsubscribe)) {
                this.add(context.unsubscribe.bind(context));
            }
            context.unsubscribe = this.unsubscribe.bind(this);
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parent = this._parent;
            if (!_parent.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parent, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parent = this._parent;
            if (this._error) {
                if (!_parent.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parent, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parent.syncErrorThrowable) {
                this.unsubscribe();
                throw err;
            }
            else {
                _parent.syncErrorValue = err;
                _parent.syncErrorThrown = true;
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        if (!this.isStopped) {
            var _parent = this._parent;
            if (this._complete) {
                if (!_parent.syncErrorThrowable) {
                    this.__tryOrUnsub(this._complete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parent, this._complete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            throw err;
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parent = this._parent;
        this._context = null;
        this._parent = null;
        _parent.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));

},{"./Observer":65,"./Subscription":67,"./symbol/rxSubscriber":70,"./util/isFunction":74}],67:[function(require,module,exports){
"use strict";
var isArray_1 = require('./util/isArray');
var isObject_1 = require('./util/isObject');
var isFunction_1 = require('./util/isFunction');
var tryCatch_1 = require('./util/tryCatch');
var errorObject_1 = require('./util/errorObject');
var UnsubscriptionError_1 = require('./util/UnsubscriptionError');
/**
 * Represents a disposable resource, such as the execution of an Observable. A
 * Subscription has one important method, `unsubscribe`, that takes no argument
 * and just disposes the resource held by the subscription.
 *
 * Additionally, subscriptions may be grouped together through the `add()`
 * method, which will attach a child Subscription to the current Subscription.
 * When a Subscription is unsubscribed, all its children (and its grandchildren)
 * will be unsubscribed as well.
 *
 * @class Subscription
 */
var Subscription = (function () {
    /**
     * @param {function(): void} [unsubscribe] A function describing how to
     * perform the disposal of resources when the `unsubscribe` method is called.
     */
    function Subscription(unsubscribe) {
        /**
         * A flag to indicate whether this Subscription has already been unsubscribed.
         * @type {boolean}
         */
        this.isUnsubscribed = false;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    /**
     * Disposes the resources held by the subscription. May, for instance, cancel
     * an ongoing Observable execution or cancel any other type of work that
     * started when the Subscription was created.
     * @return {void}
     */
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.isUnsubscribed) {
            return;
        }
        this.isUnsubscribed = true;
        var _a = this, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this._subscriptions = null;
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject_1.errorObject) {
                hasErrors = true;
                (errors = errors || []).push(errorObject_1.errorObject.e);
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject_1.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject_1.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(err.errors);
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    /**
     * Adds a tear down to be called during the unsubscribe() of this
     * Subscription.
     *
     * If the tear down being added is a subscription that is already
     * unsubscribed, is the same reference `add` is being called on, or is
     * `Subscription.EMPTY`, it will not be added.
     *
     * If this subscription is already in an `isUnsubscribed` state, the passed
     * tear down logic will be executed immediately.
     *
     * @param {TeardownLogic} teardown The additional logic to execute on
     * teardown.
     * @return {Subscription} Returns the Subscription used or created to be
     * added to the inner subscriptions list. This Subscription can be used with
     * `remove()` to remove the passed teardown logic from the inner subscriptions
     * list.
     */
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === this) || (teardown === Subscription.EMPTY)) {
            return;
        }
        var sub = teardown;
        switch (typeof teardown) {
            case 'function':
                sub = new Subscription(teardown);
            case 'object':
                if (sub.isUnsubscribed || typeof sub.unsubscribe !== 'function') {
                    break;
                }
                else if (this.isUnsubscribed) {
                    sub.unsubscribe();
                }
                else {
                    (this._subscriptions || (this._subscriptions = [])).push(sub);
                }
                break;
            default:
                throw new Error('Unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        return sub;
    };
    /**
     * Removes a Subscription from the internal list of subscriptions that will
     * unsubscribe during the unsubscribe process of this Subscription.
     * @param {Subscription} subscription The subscription to remove.
     * @return {void}
     */
    Subscription.prototype.remove = function (subscription) {
        // HACK: This might be redundant because of the logic in `add()`
        if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
            return;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.isUnsubscribed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;

},{"./util/UnsubscriptionError":71,"./util/errorObject":72,"./util/isArray":73,"./util/isFunction":74,"./util/isObject":75,"./util/tryCatch":78}],68:[function(require,module,exports){
(function (global){
/* global window */
'use strict';

module.exports = require('./ponyfill')(global || window || this);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./ponyfill":69}],69:[function(require,module,exports){
'use strict';

module.exports = function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

},{}],70:[function(require,module,exports){
"use strict";
var root_1 = require('../util/root');
var Symbol = root_1.root.Symbol;
exports.$$rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
    Symbol.for('rxSubscriber') : '@@rxSubscriber';

},{"../util/root":76}],71:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when one or more errors have occurred during the
 * `unsubscribe` of a {@link Subscription}.
 */
var UnsubscriptionError = (function (_super) {
    __extends(UnsubscriptionError, _super);
    function UnsubscriptionError(errors) {
        _super.call(this);
        this.errors = errors;
        this.name = 'UnsubscriptionError';
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n') : '';
    }
    return UnsubscriptionError;
}(Error));
exports.UnsubscriptionError = UnsubscriptionError;

},{}],72:[function(require,module,exports){
"use strict";
// typeof any so that it we don't have to cast when comparing a result to the error object
exports.errorObject = { e: {} };

},{}],73:[function(require,module,exports){
"use strict";
exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });

},{}],74:[function(require,module,exports){
"use strict";
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;

},{}],75:[function(require,module,exports){
"use strict";
function isObject(x) {
    return x != null && typeof x === 'object';
}
exports.isObject = isObject;

},{}],76:[function(require,module,exports){
(function (global){
"use strict";
var objectTypes = {
    'boolean': false,
    'function': true,
    'object': true,
    'number': false,
    'string': false,
    'undefined': false
};
exports.root = (objectTypes[typeof self] && self) || (objectTypes[typeof window] && window);
/* tslint:disable:no-unused-variable */
var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
var freeGlobal = objectTypes[typeof global] && global;
if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
    exports.root = freeGlobal;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],77:[function(require,module,exports){
"use strict";
var Subscriber_1 = require('../Subscriber');
var rxSubscriber_1 = require('../symbol/rxSubscriber');
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.$$rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.$$rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber();
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;

},{"../Subscriber":66,"../symbol/rxSubscriber":70}],78:[function(require,module,exports){
"use strict";
var errorObject_1 = require('./errorObject');
var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject_1.errorObject.e = e;
        return errorObject_1.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
exports.tryCatch = tryCatch;
;

},{"./errorObject":72}]},{},[1]);
