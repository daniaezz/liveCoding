///////////////////////////////////////
one_min_pls = ()=> {
	hush();
	render(o0);
	p5.remove();
	solid().out();
}
///////////////////////////////////////
i_hope_this_works = ()=>{
 	p5 = new P5();
	s0.init({src: p5.canvas});
	p5.hide();
  	//osc().out();
}
///////////////////////////////////////
shreya_amina_are_you_ready = ()=>{
	//var
ripples = [];
//class
class Ripple {
  constructor(x, y) {
    this.x = x; // x cooordinate
    this.y = y; // y coordinate
    this.r = p5.random(50, 100); // r is radius
    this.expSpeed = p5.random(3, 5); //expanding speed
    this.opacity = 300;
    this.colr = p5.random(255);
    this.colb =  p5.random(50, 200);
  }
  display() {
    p5.noFill();
    if (cc[4]){
      p5.strokeWeight(cc[4]*120);
    } else{
    p5.strokeWeight(15);
    }
   // if (cc[1]){
   	//	p5.stroke(this.colr, 20, this.colb, this.opacity);
    //}else{
      p5.stroke(180, this.opacity);
    //}
    p5.ellipse(this.x, this.y, this.r);
    this.r += this.expSpeed;
    if (!cc[5]) {
    	this.opacity -= 3;
    }
 }
}
p5.draw = ()=>{
  p5.background(0, 0, 0);
  for (i = 0; i < ripples.length; i++) {
    ripples[i].display();
  }
  // adds new ripples
  if (cc[0]) {
    cc[0] = 0;
    ripples.push(new Ripple(p5.random(0+50, p5.width-50), p5.random(0+50, p5.height-50)));
  }
  //removes old ripples from the array for optimization
  for( j = 0; j< ripples.length; j++){
    if (ripples[j].opacity == 0)
    {
      ripples.splice(j,1);
    }
  }
  if (cc[6]) {
    p5.fill(180, this.opacity);
    p5.stroke(180, this.opacity);
    //p5.strokeWeight(0);
    //p5.textSize(200);
    p5.textSize(200);
    textie = "SOOOOOOOO";
    p5.strokeWeight(15);
    //p5.text("SOOOOOOOOO",width/2,height/2);
    for (i=0; i<textie.length && p5.frameCount%10; i++) {
        textieSub = textie.substring(0,i+1);
    	p5.text(textieSub,width/4,1.5*height/2);
    } 
      	ripples = [];
        //cc[6] =             cc[0] = 0;
    p5.noFill();
  }
}
// this one needs
render(o0);
src(s0).modulate(noise(()=>cc[2]+cc[3]*3)).blend(o3).out(o3);
  //osc().out();
}
///////////////////////////////////////
///////////////////////////////////////
what_about_me = ()=>{
// make an array of hydra scripts
visuals = [
  //visual 1 - white circles
  ()=> { src(o3).out(o0)
       render(o0)},
  //visual 2 - multicolor circles
  ()=> { src(o3).mult(osc(()=>cc[1]*3, 0.8, 1).color(3.5, 3.0, 3.0)).out(o0)
       render(o0)},
  // first drop
  ()=> { src(o3).mult(osc(3, 0.8, 1).color(3.5, 3.0, 3.0)).mult(noise(()=>cc[2], 5)).blend(solid(1,1,1),()=>cc[4]).out(o0) },
  //()=> { src(s0).modulate(noise(()=>cc[2]+cc[3]*3)).blend(o1).out(o1) },
  //transition 1
  ()=> { shape(2, [0.7, 0.6, 0,7, 0.6, 0.5, 0.4, 0.3, 0.4, 0.2, 0.3, 0.1, 0.001],[0.7, 0.6, 0,7, 0.6, 0.5, 0.4, 0.3, 0.4, 0.2, 0.3, 0.1,0.05] ).mult(o0).out(o1)
	render(o1) },
  ()=> { shape(2, 0.001, 0.05).modulateScrollY(noise(()=> cc[1]*4,0.2).scale(()=>cc[1]+0.01*0.8,1,5))
  .blend(o0, 0.3).mult(osc(10, 0.8, 1)
  .color(3.5, 3.0, 3.0))
    //.contrast(2).blend(o0)
	.blend(src(s0).modulateRepeat(noise(()=>ccActual[2]*0.05),()=>Math.floor(cc[3]*5+2), ()=>Math.floor(cc[3]*5+2)))
  .blend(o0).posterize(5)
  .out(o0) 
       render(o0)},
  ()=> { p5.remove() },
  ()=> { solid().out() }
];
visuals[0]();
// can use update and switch case with midi:
whichVisual = 6;
update = () =>{
  // very important! only change source once, when necessary
  if (whichVisual != ccActual[10]){
    whichVisual = ccActual[10];
    visuals[whichVisual]();
  }
}
}
///////////////////////////////////////
shreya_stop_jumping = ()=>{
  	render(o0)
	shape(2, 0.001,()=>cc[8]).mult(o0).out(o1)
	render(o1)
}
///////////////////////////////////////
nope_hehe = ()=>{
p5.remove();
solid().out();
p5 = new P5();
s0.init({src: p5.canvas});
p5.hide();
render(o0);
// for the blip
render(o0);
shape(2, 0.001, 0.05).scrollY(()=> cc[9]*4)
  .blend(o0, 0.3).mult(osc(()=>cc[11]*20+1, 0.8 , 1)
  .color(3.5, 3.0, 3.0)).contrast(2).blend(o0)				.blend(src(s0).modulateRepeat(noise(()=>ccActual[2]*0.05),()=>Math.floor(cc[3]*5+2), ()=>Math.floor(cc[3]*5+2)))
  .blend(o0).posterize(5)
  .out(o0)
}
///////////////////////////////////////
wheres_xavier = ()=> {
shape(2, 0.001, ()=>cc[14]*0.05+0.05).modulateScrollY(noise(()=> cc[12]*4,0.2)
                                                      .scale(()=>cc[13]+0.01*0.8,1,5))
  .blend(o0, 0.3).mult(osc(10, 0.8, 1)
  .color(3.5, 3.0, 3.0)).contrast(1).blend(o0)
 .diff(src(s0).modulateScrollY(noise(()=>ccActual[12]*0.02, 0.2)))
//.modulate(voronoi(()=>cc[14]*5,1))
  //.diff(solid(()=>ccActual[3],()=>ccActual[3],()=>ccActual[3]))
//.blend(src(o2).modulateScrollY(noise(()=>ccActual[12]*0.02)))
	//.blend(src(s0).modulateRepeat(noise(()=>ccActual[14]*0.05),()=>Math.floor(cc[15]*2+2), ()=>Math.floor(cc[15]*2+2)))
  .blend(o0).posterize(5)
  .out(o0);
}
///////////////////////////////////////
amina_i_miss_u = () => {
  p5 = new P5();
s0.init({src: p5.canvas})
p5.hide();
xpos = width;
p5.draw = ()=>{
  p5.background(0, 0, 0);
  if (cc[6]) {
    p5.fill(255,255,255);
    p5.textSize(200);
    textie = "SOOOOOOOO"
    //p5.text("SOOOOOOOOO",width/2,height/2);
    for (i=0; i<textie.length && p5.frameCount%10; i++) {
        textieSub = textie.substring(0,i+1);
    	p5.text(textieSub,width/4,1.5*height/2);
    } 
    if (p5.frameCount%5 == 0){
      cc[6] = 0
  }
  } 
  if (cc[17]){
    xpos-=25
  	p5.text(textie, xpos, 1.5*height/2 )
  } else {
  	xpos = width
  }
};
//src(s0).out()
  shape(2, 0.001, ()=>cc[14]*0.05+0.05).modulateScrollY(noise(()=> cc[12]*4,0.2).scale(()=>cc[13]+0.01*0.8,1,5))
  .blend(o0, 0.3).mult(osc(10, 0.8, 1)
  .color(3.5, 3.0, 3.0)).contrast(1).blend(o0)
 .diff(src(s0).modulateScrollY(noise(()=>ccActual[12]*0.02, 0.2)))
.modulate(voronoi(()=>cc[14]*5,1))
  .blend(o0).posterize(5)
  .out(o0);
}
////////
i_can_see_so = ()=>{
// 2nd sooos
shape(2, 0.001, ()=>cc[14]*0.05+0.05).modulateScrollY(noise(()=> cc[12]*4,0.2)
                                                      .scale(()=>cc[13]+0.01*0.8,1,5))
  .blend(o0, 0.3).mult(osc(10, 0.8, 1)
  .color(3.5, 3.0, 3.0)).contrast(13).blend(o0)
 //.diff(src(s0).modulateScrollY(noise(()=>ccActual[12]*0.02, 0.2)))
	.modulate(voronoi(()=>cc[14]*5,1))
  //.diff(solid(()=>ccActual[3],()=>ccActual[3],()=>ccActual[3]))
.blend(src(s0).modulateScrollY(noise(()=>ccActual[12]*0.02, ()=>cc[14]*0.5)), 0.9)
	//.blend(src(s0).modulateRepeat(noise(()=>ccActual[14]*0.05),()=>Math.floor(cc[15]*2+2), ()=>Math.floor(cc[15]*2+2)))
  .blend(o0).posterize(5)
  .out(o0);
}
///////////////////////////
omg_is_that_aaron = ()=>{
// 3rd soos
shape(2, 0.001, ()=>cc[14]*0.05+0.05).modulateScrollY(noise(()=> cc[12]*4,0.2)
                                                      .scale(()=>cc[13]+0.01*0.8,1,5))
  .blend(o0, 0.3).mult(osc(10, 0.8, 1)
  .color(3.5, 3.0, 3.0)).contrast(2).blend(o0)
 //.diff(src(s0).modulateScrollY(noise(()=>ccActual[12]*0.02, 0.2)))
	.modulate(voronoi(()=>cc[14]*5,1))
  .modulate(noise(()=>cc[13]*5+3))
  //.diff(solid(()=>ccActual[3],()=>ccActual[3],()=>ccActual[3]))
//.blend(src(s0).modulateScrollY(noise(()=>ccActual[12]*0.02, ()=>cc[14]*0.5)), 0.9)
	.blend(src(s0).modulateRepeat(noise(()=>ccActual[14]*0.05),()=>Math.floor(cc[15]*2+2), ()=>Math.floor(cc[15]*2+2)))
  .blend(o0).posterize(5)
  .out(o0);
}
//////
thais_was_dat_u = ()=>{
//for the builddrap
shape(2, 0.001, ()=>cc[14]*0.3+0.05).modulateScrollY(noise(()=> cc[12]*8,0.2)
                                                      .scale(()=>cc[13]+0.01*0.8,1,5))
  .blend(o0, 0.3).mult(osc(10, 0.8, 1)
  .color(3.5, 3.0, 3.0)).contrast(2).blend(o0)
 //.diff(src(s0).modulateScrollY(noise(()=>ccActual[12]*0.02, 0.2)))
	.modulate(voronoi(()=>cc[14]*5,1))
  .modulate(noise(()=>cc[13]*5+3))
  .blend(o0).posterize(5)
  //.blend(src(s0), ()=>cc[17]*128)
  .out(o0)
render(o0);
}
///
yeah_soooo =()=>{
  //hush();
  render(o0);
  src(s0).mult(osc(10, 0.8, 1).color(3.5, 3.0, 3.0)).out();
}
partYYYY_TIME = ()=>{
	p5.remove()
// MODIFIED DRPP
voronoi(5+2,1,2).mult(osc(3, 0.8, 1)).color(3.5, 3.0, 3)
  .rotate(()=>cc[21]+cc[23]).modulate(noise(()=>cc[20]*2+cc[23]+1))
  .modulateKaleid(osc(()=>cc[22]*5,0.5,0),10)
  .posterize(5).contrast(1.5)
  //.modulateScale(o0, ()=>cc[23])
  //.add(src(o0).modulate(noise(()=>cc[23])).blend(o0))
.out();
render(o0);
}
/////////
time_for_battles = ()=>{
// MODIFIED endinf fdfghvbjnm,. grape, CURSED CODE NO ONE TYPED THIS ??? but we use it anyway
voronoi(5,1,()=>cc[23]*10).mult(osc(3, 0.8, 1)).color(3.5, 3.0, 3)
  .rotate(()=>cc[23]).modulate(noise(()=>cc[23]*2+1))
  .kaleid(10)
  .posterize(5).contrast(1.5)
  .modulateScale(o0, 0.5).blend(src(s0))
  //.add(src(o0).modulate(noise(()=>cc[23])).blend(o0))
.out();
render(o0);
}
////
okay = ()=>{
src(o0).scale(1.01).blend(o1,.05).add(o1, 0.1).out(o0);
}
/////////////////////////////////////////////////
