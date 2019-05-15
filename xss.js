document.body.style.opacity=0;
let txt = 'a';
while(1){
    txt = txt += 'a';
    console.log('xss');
}
// protect against xss, kiddo =)))
// https://youtu.be/bNVgQBHHl4I 
