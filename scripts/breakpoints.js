define([],
function()
{
    var LG_MIN = 1200;
    var MD_MIN = 992;
    var SM_MIN = 768;
    var XS_MIN = 480;

    var breakpoints = {
        SCREEN_LG_MIN: 'screen and (min-width: ' + LG_MIN + 'px)',
        SCREEN_MD_MAX: 'screen and (max-width: ' + (LG_MIN - 1) + 'px)',
        SCREEN_MD_MIN: 'screen and (min-width: ' + MD_MIN + 'px)',
        SCREEN_SM_MAX: 'screen and (max-width: ' + (MD_MIN - 1) + 'px)',
        SCREEN_SM_MIN: 'screen and (min-width: ' + SM_MIN + 'px)',
        SCREEN_XS_MAX: 'screen and (max-width: ' + (SM_MIN - 1) + 'px)',
        SCREEN_XS_MIN: 'screen and (min-width: ' + XS_MIN + 'px)',
    };

    return breakpoints;
});
