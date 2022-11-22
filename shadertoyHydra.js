p5 = new P5({width: window.innerWidth, height:window.innerHeight, mode: 'WEBGL'})
shader = p5.loadShader("https://raw.githubusercontent.com/aaronsherwood/liveCoding/main/Class_Examples/shaders/basic.vert", "https://raw.githubusercontent.com/daniaezz/liveCoding/main/blingbling.frag");
// need to set the pixel density
p5.pixelDensity(1);

p5.draw = ()=>{
    shader.setUniform("time", time*0.3);
    shader.setUniform("resolution", [width, height]);
    shader.setUniform("mouse",[p5.mouseX, p5.mouseY]);
    p5.shader(shader);
    p5.rect(0, 0, width, height);
}

p5.hide();
s0.init({src: p5.canvas})
src(s0).out()
