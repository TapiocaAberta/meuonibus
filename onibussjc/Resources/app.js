var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Collections.onibusCollection = Alloy.createCollection("onibus");

Alloy.Collections.favoritesCollection = Alloy.createCollection("onibus");

Alloy.Globals.setupWindow = function(win) {
    Alloy.Globals.currentWindow = win;
};

Alloy.Globals.closeWindow = function() {
    if (Alloy.Globals.currentWindow) {
        Alloy.Globals.currentWindow.close();
        Alloy.Globals.currentWindow = null;
    }
};

Alloy.Globals.print = function(o, title) {
    title && Ti.API.info("******** " + title + " ********");
    Ti.API.info(JSON.stringify(o, null, "  "));
    Ti.API.info(" ");
};

Alloy.Globals.sha1 = function(msg) {
    function rotate_left(n, s) {
        var t4 = n << s | n >>> 32 - s;
        return t4;
    }
    function cvt_hex(val) {
        var str = "";
        var i;
        var v;
        for (i = 7; i >= 0; i--) {
            v = 15 & val >>> 4 * i;
            str += v.toString(16);
        }
        return str;
    }
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; string.length > n; n++) {
            var c = string.charCodeAt(n);
            if (128 > c) utftext += String.fromCharCode(c); else if (c > 127 && 2048 > c) {
                utftext += String.fromCharCode(192 | c >> 6);
                utftext += String.fromCharCode(128 | 63 & c);
            } else {
                utftext += String.fromCharCode(224 | c >> 12);
                utftext += String.fromCharCode(128 | 63 & c >> 6);
                utftext += String.fromCharCode(128 | 63 & c);
            }
        }
        return utftext;
    }
    var blockstart;
    var i, j;
    var W = new Array(80);
    var H0 = 1732584193;
    var H1 = 4023233417;
    var H2 = 2562383102;
    var H3 = 271733878;
    var H4 = 3285377520;
    var A, B, C, D, E;
    var temp;
    msg = Utf8Encode(msg);
    var msg_len = msg.length;
    var word_array = new Array();
    for (i = 0; msg_len - 3 > i; i += 4) {
        j = msg.charCodeAt(i) << 24 | msg.charCodeAt(i + 1) << 16 | msg.charCodeAt(i + 2) << 8 | msg.charCodeAt(i + 3);
        word_array.push(j);
    }
    switch (msg_len % 4) {
      case 0:
        i = 2147483648;
        break;

      case 1:
        i = 8388608 | msg.charCodeAt(msg_len - 1) << 24;
        break;

      case 2:
        i = 32768 | (msg.charCodeAt(msg_len - 2) << 24 | msg.charCodeAt(msg_len - 1) << 16);
        break;

      case 3:
        i = 128 | (msg.charCodeAt(msg_len - 3) << 24 | msg.charCodeAt(msg_len - 2) << 16 | msg.charCodeAt(msg_len - 1) << 8);
    }
    word_array.push(i);
    while (14 != word_array.length % 16) word_array.push(0);
    word_array.push(msg_len >>> 29);
    word_array.push(4294967295 & msg_len << 3);
    for (blockstart = 0; word_array.length > blockstart; blockstart += 16) {
        for (i = 0; 16 > i; i++) W[i] = word_array[blockstart + i];
        for (i = 16; 79 >= i; i++) W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
        A = H0;
        B = H1;
        C = H2;
        D = H3;
        E = H4;
        for (i = 0; 19 >= i; i++) {
            temp = 4294967295 & rotate_left(A, 5) + (B & C | ~B & D) + E + W[i] + 1518500249;
            E = D;
            D = C;
            C = rotate_left(B, 30);
            B = A;
            A = temp;
        }
        for (i = 20; 39 >= i; i++) {
            temp = 4294967295 & rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 1859775393;
            E = D;
            D = C;
            C = rotate_left(B, 30);
            B = A;
            A = temp;
        }
        for (i = 40; 59 >= i; i++) {
            temp = 4294967295 & rotate_left(A, 5) + (B & C | B & D | C & D) + E + W[i] + 2400959708;
            E = D;
            D = C;
            C = rotate_left(B, 30);
            B = A;
            A = temp;
        }
        for (i = 60; 79 >= i; i++) {
            temp = 4294967295 & rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 3395469782;
            E = D;
            D = C;
            C = rotate_left(B, 30);
            B = A;
            A = temp;
        }
        H0 = 4294967295 & H0 + A;
        H1 = 4294967295 & H1 + B;
        H2 = 4294967295 & H2 + C;
        H3 = 4294967295 & H3 + D;
        H4 = 4294967295 & H4 + E;
    }
    var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
    return temp.toLowerCase();
};

Alloy.createController("index");