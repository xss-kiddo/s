function a(){setTimeout(()=>{console.log('xss');alert('xss');document.body.style.opacity=0;a()},100)};a()
// protect against xss, kiddo =)))
// https://youtu.be/bNVgQBHHl4I 
