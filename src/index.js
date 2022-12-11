import pageLoad from "./init";
import test from "./about";




pageLoad();

const about = document.getElementById('about-button');

about.addEventListener('click',()=>{
    console.log('shit rick');
    test();
});