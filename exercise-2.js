'use strict'

/*
Exercise that determines the resolution used by the user and then shows it to the user
8K = 7680 x 4320
4K = 3840 x 2160
WQHD = 2560 x 1440
FHD = 1920 x 1080
HD = 1280 x 720
*/

function showResolution(height, wide){
    if (height >= 7680 && wide >= 4320){
        return '8K';
    }else if (height >= 3840 && wide >= 2160){
        return '4K'
    }else if (height >= 2560 && wide >= 1440){
        return 'WQHD';
    }else if (height >= 1920 && wide >= 1080){
        return 'FHD';
    }else if (height >= 1280 && wide >= 720){
        return 'HD';
    }else{
        'false';
    }
}

let height = parseInt(prompt('Please enter your resolution height'));
let wide = parseInt(prompt('Please enter your resolution wide'));

let resolution = showResolution(height, wide);

window.alert('Your resolution is: '+resolution);
console.log(resolution);