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
    $('.mobile_front').click(function() {
        $('.mobile_front').hide();
        $('.warrior1').show();
    })
    $('.warrior1').click(function() {
        $('.warrior1').hide();
        $('.butterfly').show();
    })
    $('.butterfly').click(function() {
        $('.butterfly').hide();
        $('.upward_dog').show();
    })
    $('.upward_dog').click(function() {
        $('.upward_dog').hide();
        $('.powerlunge').show();
    })
    $('.powerlunge').click(function() {
        $('.powerlunge').hide();
        $('.crescent_lunge').show();
    })
    $('.crescent_lunge').click(function() {
        $('.crescent_lunge').hide();
        $('.bound_extended_side_angle').show();
    })
    $('.bound_extended_side_angle').click(function() {
        $('.bound_extended_side_angle').hide();
        $('.boat_pose').show();
    })
    $('.boat_pose').click(function() {
        $('.boat_pose').hide();
        $('.camel_pose').show();
    })
    $('.camel_pose').click(function() {
        $('.camel_pose').hide();
        $('.extended_side_angle').show();
    })
    $('.extended_side_angle').click(function() {
        $('.extended_side_angle').hide();
        $('.half_pigeon').show();
    })
    $('.half_pigeon').click(function() {
        $('.half_pigeon').hide();
        $('.reverse_warrior').show();
    })
     $('.reverse_warrior').click(function() {
        $('.reverse_warrior').hide();
        $('.upper_push_up').show();
    })
    $('.upper_push_up').click(function() {
        $('.upper_push_up').hide();
        $('.mountain_pose').show();
    })
    $('.mountain_pose').click(function() {
        $('.mountain_pose').hide();
        $('.forward_fold').show();
    })
    $('.forward_fold').click(function() {
        $('.forward_fold').hide();
        $('.mobile_front').show();
    });
});