function MM_swapImgRestore() { //v3.0
    var i, x, a = document.MM_sr;
    for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++) x.src = x.oSrc;
}

function MM_preloadImages() { //v3.0
    var d = document;
    if (d.images) {
        if (!d.MM_p) d.MM_p = new Array();
        var i, j = d.MM_p.length,
            a = MM_preloadImages.arguments;
        for (i = 0; i < a.length; i++)
            if (a[i].indexOf("#") != 0) {
                d.MM_p[j] = new Image;
                d.MM_p[j++].src = a[i];
            }
    }
}

MM_preloadImages('warrior1buttonover.jpg', 'halfpigeonbuttonover.jpg', 'upwarddogbuttonover.jpg',
    'powerlungebuttonover.jpg', 'crescentlungebuttonover.jpg', 'boundextendedsideanglebuttonover.jpg',
    'boatposebuttonover.jpg', 'camelposebuttonover.jpg', 'reversewarriorbuttonover.jpg', 'upperpushupbuttonover.jpg',
    'mountainposebuttonover.jpg', 'forwardfoldbuttonover.jpg', 'warrior1.jpg', 'butterfly.jpg', 'butterflybuttonover.jpg',
    'upwarddog.jpg', 'powerlunge.jpg', 'crescentlunge.jpg', 'boundextendedsideangle.jpg', 'boatpose.jpg', 'camelpose.jpg',
    'halfpigeon.jpg', 'reversewarrior.jpg', 'mountainpose.jpg', 'forwardfold.jpg', 'upperpushup.jpg', 'animationbuttonover.jpg',
    'aboutmebuttonover.jpg', 'storebuttonover.jpg', 'asanasbuttonover.jpg', 'twittertext.jpg', 'instagramtext.jpg', 'emailtext.jpg')

function MM_findObj(n, d) { //v4.01
    var p, i, x;
    if (!d) d = document;
    if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
        d = parent.frames[n.substring(p + 1)].document;
        n = n.substring(0, p);
    }
    if (!(x = d[n]) && d.all) x = d.all[n];
    for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
    for (i = 0; !x && d.layers && i < d.layers.length; i++) x = MM_findObj(n, d.layers[i].document);
    if (!x && d.getElementById) x = d.getElementById(n);
    return x;
}

function MM_swapImage() { //v3.0
    var i, j = 0,
        x, a = MM_swapImage.arguments;
    document.MM_sr = new Array;
    for (i = 0; i < (a.length - 2); i += 3)
        if ((x = MM_findObj(a[i])) != null) {
            document.MM_sr[j++] = x;
            if (!x.oSrc) x.oSrc = x.src;
            x.src = a[i + 2];
        }
}

(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-57765024-1', 'auto');
ga('send', 'pageview');

$(document).ready(function() {
    $('.asanas_button').click(function() {
        $('.front').hide();
        $('.asana_2').hide();
        $('.asana_3').hide();
        $('.about_me').hide();
        $('.animate').hide();
        $('.asana_1').show();
    })
    $('.asana_1').click(function() {
        $('.asana_1').hide();
        $('.asana_2').show();
    })
    $('.asana_2').click(function() {
        $('.asana_2').hide();
        $('.asana_3').show();
    })
    $('.asana_3').click(function() {
        $('.asana_3').hide();
        $('.asana_1').show();
    })
    $('.about_me_button').click(function() {
        $('.asana_1').hide();
        $('.asana_2').hide();
        $('.asana_3').hide();
        $('.front').hide();
        $('.animate').hide();
        $('.about_me').show();
    })
    $('.animate').mousedown(function() {
            $('.still').hide();
            $('.move').show();
        })
        .mouseup(function() {
            $('.move').hide();
            $('.still').show();
        })
        .bind("touchstart", function(e) {
            $('.still').hide();
            $('.move').show();
        })
        .bind("touchend", function(e) {
            $('.move').hide();
            $('.still').show();
        })
    $('.animate_button').click(function() {
        $('.asana_1').hide();
        $('.asana_2').hide();
        $('.asana_3').hide();
        $('.about_me').hide();
        $('.front').hide();
        $('.animate').show();
    })
    $('.home').click(function() {
        $('.asana_1').hide();
        $('.asana_2').hide();
        $('.asana_3').hide();
        $('.about_me').hide();
        $('.animate').hide();
        $('.front').show();
    });
});
