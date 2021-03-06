var app = angular.module('constants', []);
app.constant('GLOBALS', {
        SITE_URL: "/PROJECTS/angularSeedProject-v-1.3.0/",
        ENV: "STAGING" /*DEV, STAGING, PRODUCTION */
    });


 app.constant('SETTINGS', {
        DEV: {
            "apiUrl": "",
            "siteUrl":"src/"
        },
        STAGING: {
            "apiUrl": "",
           	"siteUrl":"build/"
        },
        PRODUCTION: {
            "apiUrl": "",
            "siteUrl":"build/"
        }
 });

