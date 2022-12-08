//////////////////////////////// 1ST START ///////////////////////////////////////


// PROF AARON'S FEEDBACK
// Transition between the So and the circles at the beginning






hush()
render(o0)
p5.remove()
solid().out()

//initialise
p5 = new P5();
s0.init({src: p5.canvas})
p5.hide()

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
    textie = "SOOOOOOOO"
    p5.strokeWeight(15);
    //p5.text("SOOOOOOOOO",width/2,height/2);
    for (i=0; i<textie.length && p5.frameCount%10; i++) {
        textieSub = textie.substring(0,i+1);
    	p5.text(textieSub,width/4,1.5*height/2);
    } 
      	ripples = [];
        //cc[6] = 0; 
        cc[0] = 0;
    p5.noFill();
  }
}
// this one needs to be in o1
//src(s0).out(o0)
render(o0)
src(s0).modulate(noise(()=>cc[2]+cc[3]*3)).blend(o3).out(o3)

///////////////////////////////////////////////////////////////////////////////////////

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
]
visuals[0]()
// can use update and switch case with midi:
whichVisual = 6
update = () =>{
  // very important! only change source once, when necessary
  if (whichVisual != ccActual[10]){
    whichVisual = ccActual[10];
    visuals[whichVisual]()
  }
}

hush()

/////////












//go
//nvm

render(o0)
///// SHAPE IS HERE
shape(2, 0.001,()=>cc[8]).mult(o0).out(o1)
render(o1)

p5.remove()
solid().out()
p5 = new P5();
s0.init({src: p5.canvas})
p5.hide()
render(o0)
// for the blip
render(o0)
shape(2, 0.001, 0.05).scrollY(()=> cc[9]*4)
  .blend(o0, 0.3).mult(osc(()=>cc[11]*20+1, 0.8 , 1)
  .color(3.5, 3.0, 3.0)).contrast(2).blend(o0)
  //.blend(src(s0).modulateScrollY(noise(()=>ccActual[0]*0.02)).scale(()=>cc[1]+0.01*0.8))
	//.modulateRotate(voronoi(50,1))
  //.diff(solid(()=>ccActual[3],()=>ccActual[3],()=>ccActual[3]))
	.blend(src(s0).modulateRepeat(noise(()=>ccActual[2]*0.05),()=>Math.floor(cc[3]*5+2), ()=>Math.floor(cc[3]*5+2)))
//.blend(src(s0).modulateScrollY(noise(()=>ccActual[0]*0.02)))
  .blend(o0).posterize(5)
  .out(o0)

//osc(()=>cc[11]*10, 0.8, 1)
 // .color(3.5, 3.0, 3.0)
//.out(o3)


// sine -- unmodulate 
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
  .out(o0)

p5 = new P5();
s0.init({src: p5.canvas})
p5.hide()
xpos = width
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
  if (cc[24]){
    //cc[17] = 0
    //xpos-=25
  	p5.text("okay", width/2, 1.5*height/2 )
  } 
}
//src(s0).out()


render()

hush()

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
  .out(o0)

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
  .out(o0)

//for the builddrap
shape(2, 0.001, ()=>cc[14]*0.3+0.05).modulateScrollY(noise(()=> cc[12]*8,0.2)
                                                      .scale(()=>cc[13]+0.01*0.8,1,5))
  .blend(o0, 0.3).mult(osc(10, 0.8, 1)
  .color(3.5, 3.0, 3.0)).contrast(2).blend(o0)
 //.diff(src(s0).modulateScrollY(noise(()=>ccActual[12]*0.02, 0.2)))
	.modulate(voronoi(()=>cc[14]*5,1))
  .modulate(noise(()=>cc[13]*5+3))
  //.diff(solid(()=>ccActual[3],()=>ccActual[3],()=>ccActual[3]))
//.blend(src(s0).modulateScrollY(noise(()=>ccActual[12]*0.02, ()=>cc[14]*0.5)), 0.9)
	//.blend(src(s0).modulateRepeat(noise(()=>ccActual[14]*0.05),()=>Math.floor(cc[15]*2+2), ()=>Math.floor(cc[15]*2+2)))
  .blend(o0).posterize(5)
  //.blend(src(s0), ()=>cc[17]*128)
  .out(o0)
render(o0)


// banana sooooooo
src(s0).out()

render()



p5.remove()
// MODIFIED DRPP
voronoi(5+2,1,2).mult(osc(3, 0.8, 1)).color(3.5, 3.0, 3)
  .rotate(()=>cc[21]+cc[23]).modulate(noise(()=>cc[20]*2+cc[23]+1))
  .modulateKaleid(osc(()=>cc[22]*5,0.5,0),10)
  .posterize(5).contrast(1.5)
  //.modulateScale(o0, ()=>cc[23])
  //.add(src(o0).modulate(noise(()=>cc[23])).blend(o0))
.out()
render(o0)


hush()


// MODIFIED endinf fdfghvbjnm,. grape -- CURSED CODE NO ONE TYPED THIS ?????????
voronoi(5,1,()=>cc[23]*10).mult(osc(3, 0.8, 1)).color(3.5, 3.0, 3)
  .rotate(()=>cc[23]).modulate(noise(()=>cc[23]*2+1))
  .kaleid(10)
  .posterize(5).contrast(1.5)
  .modulateScale(o0, 0.5).blend(src(s0))
  //.add(src(o0).modulate(noise(()=>cc[23])).blend(o0))
.out()
render(o0)


//OKAY
src(o0).scale(1.01).rotate(0.01).layer(src(o1).luma(0.08)).out(o0)

src(o0).scale(1.01).blend(o1,.05).add(o1, 0.1).out(o0)




























































hush()




src(o0).scale(1.01).blend(o1,.05).add(o1, 0.1).out(o0)
src(o0).scale(1.01).rotate(.01).scrollX(0.01).blend(o1,.05).add(o1, 0.1).out(o0)
src(o0).scale(1.01).rotate(0.01).layer(src(o1).luma(0.08)).out(o0)
src(o0).modulate(src(o0).scale(1.01), 0.01).blend(o1,.01).out(o0) //cool
src(o0).modulateHue(src(o0).scale(1.01), 10).blend(o1,[.01, 0.1]).out(o0)
src(o0).modulateHue(src(o0).scale(1.01), 10).blend(o1,.01).out(o0)






////I AM HEREEEEEEE --looks good when kaleid
shape(2, 0.008, 0.08).modulateScrollY(noise(4,0.5).scale(1,1,5))
  .blend(o2, 0.3)
  .mult(osc(10, 0.5, 1)
  .color(3.5, 3.0, 3.0)).blend(o2).modulate(noise(()=>cc[25]))
  //.modulateRotate(voronoi(50,1))
  //.diff(solid(()=>ccActual[3],()=>ccActual[3],()=>ccActual[3]))
  //.invert(()=>cc[3]).contrast(2)
 .blend(o2)
  .kaleid().contrast(2)
	//.add(src(o0).modulate(noise(1)).blend(o0)).st
  .out(o2)
render(o2)


// for the buildup
shape(2, 0.001, 0.05).modulateScrollY(noise(()=>cc[12],0.5).scale(1,1,5))
  .blend(o0, 0.3)
  .mult(osc(10, 0.8, 1)
  .color(3.5, 3.0, 3.0)).blend(o0).modulate(noise(()=>cc[13]+4))
  //.modulateRotate(voronoi(50,1))
  //.diff(solid(()=>ccActual[3],()=>ccActual[3],()=>ccActual[3]))
  //.invert(()=>cc[3]).contrast(2)
 //.blend(o0)
  //.modulateKaleid(noise(()=>cc[2]*2))
.posterize(8)
  .out()


render(o0)

hush()

src(o0).scale(1.01).blend(o1,.05).add(o1, 0.1).out(o0)
src(o0).scale(1.01).rotate(.01).scrollX(0.01).blend(o1,.05).add(o1, 0.1).out(o0)
src(o0).scale(1.01).rotate(0.01).layer(src(o1).luma(0.08)).out(o0)
src(o0).modulate(src(o0).scale(1.01), 0.01).blend(o1,.01).out(o0) //cool
src(o0).modulateHue(src(o0).scale(1.01), 10).blend(o1,[.01, 0.1]).out(o0)
src(o0).modulateHue(src(o0#).scale(1.01), 10).blend(o1,.01).out(o0)

////I AM HEREEEEEEE --looks good when kaleid
shape(2, 0.001, 0.05).modulateScrollY(noise(4,0.5).scale(1,1,5))
  .blend(o0, 0.3)
  .mult(osc(10, 0.8, 1)
  .color(3.5, 3.0, 3.0)).blend(o0).modulate(noise(()=>cc[1]+4))
  //.modulateRotate(voronoi(50,1))
  //.diff(solid(()=>ccActual[3],()=>ccActual[3],()=>ccActual[3]))
  //.invert(()=>cc[3]).contrast(2)
 .blend(o0)
  .modulateKaleid(noise(()=>cc[2]*2))
  .out()



shape(2, 0.001, 0.05).modulateScrollY(noise(()=> cc[12]*4,0.2).scale(()=>cc[13]+0.01*0.8,1,5))
  .blend(o0, 0.3).mult(osc(10, 0.8, 1)
  .color(3.5, 3.0, 3.0)).contrast(2).blend(o0)
 //.blend(src(s0).modulateScrollY(noise(()=>ccActual[12]*0.02)).scale(()=>cc[13]+0.01*0.8))
	//.modulateRotate(voronoi(50,1))
  //.diff(solid(()=>ccActual[3],()=>ccActual[3],()=>ccActual[3]))
//.blend(src(s0).modulateScrollY(noise(()=>ccActual[12]*0.02)))
	.blend(src(s0).modulateRepeat(noise(()=>ccActual[14]*0.05),()=>Math.floor(cc[15]*5+2), ()=>Math.floor(cc[15]*5+2)))
  .blend(o0).posterize(5)
  .out(o0)



// MODIFIED endinf fdfghvbjnm,. grape
voronoi(5,1,()=>cc[23]*10).mult(osc(3, 0.8, 1)).color(3.5, 3.0, 3)
  .rotate(()=>cc[23]).modulate(noise(()=>cc[23]*2+1))
  .kaleid(10)
  .posterize(5).contrast(1.5)
  .modulateScale(o0, 0.5)
  .blend(src(s0), ()=>cc[24])
  //.add(src(o0).modulate(noise(()=>cc[23])).blend(o0))
.out()
render(o0)

// ORIGINAL 
voronoi(10).mult(osc(10,0.5,1)).rotate(()=>time).modulate(noise(10))
  .modulateKaleid(osc(11,0.5,0),10).luma(0.5)
  .saturate(2).contrast(1.2).out()


// ORIGINAL this is the one that
voronoi(10).mult(osc(10,0.5,1)).rotate(()=>time).modulate(noise(10))
  .modulateKaleid(osc(11,0.5,0),10).luma(0.5)
  .saturate(2).contrast(1.2).out()

hush()





/// notes 
//0 -->12
//2--> 14
//3 --> 15
///////////////////////////////// 1ST END ////////////////////////////////////////
//////////////////////////////// 2ND START ///////////////////////////////////////

///////// SECOND BUILD UP AND DRop (Xavier my love, actualy, it's OUR love)


/// i think this is the one that works 
hush()



//// DO NOT CHANGE FROM HERE --- TO USE, COPY AND PASTE /////////////
shape(2, 0.001, 0.05).modulateScrollY(noise(()=> cc[0]*4,0.2).scale(()=>cc[1]+0.01*0.8,1,5))
  .blend(o0, 0.3).mult(osc(10, 0.8, 1)
  .color(3.5, 3.0, 3.0)).contrast(2).blend(o0)
  //.blend(src(s0).modulateScrollY(noise(()=>ccActual[0]*0.02)).scale(()=>cc[1]+0.01*0.8))
	//.modulateRotate(voronoi(50,1))
  //.diff(solid(()=>ccActual[3],()=>ccActual[3],()=>ccActual[3]))
	.blend(src(s0).modulateRepeat(noise(()=>ccActual[2]*0.05),()=>Math.floor(cc[3]*5+2), ()=>Math.floor(cc[3]*5+2)))
//.blend(src(s0).modulateScrollY(noise(()=>ccActual[0]*0.02)))
  .blend(o0).posterize(5)
  .out(o0)
///// TO HERE --- THIS IS THE END OF THE CORRECT XAVIER/////

//initialise
p5.remove()

solid().out()
p5 = new P5();
s0.init({src: p5.canvas})
p5.hide()
render(o0)

shape(2, 0.001, 0.05).modulateScrollY(noise(()=> cc[0]*4,0.2).scale(()=>cc[1]+0.01*0.8,1,5))
  .blend(o0, 0.3).mult(osc(10, 0.8, 1)
  .color(3.5, 3.0, 3.0)).contrast(2).blend(o0)
  //.blend(src(s0).modulateScrollY(noise(()=>ccActual[0]*0.02)).scale(()=>cc[1]+0.01*0.8))
	//.modulateRotate(voronoi(50,1))
  //.diff(solid(()=>ccActual[3],()=>ccActual[3],()=>ccActual[3]))
	.blend(src(s0).modulateRepeat(noise(()=>ccActual[2]*0.05),()=>Math.floor(cc[3]*5+2), ()=>Math.floor(cc[3]*5+2)))
//.blend(src(s0).modulateScrollY(noise(()=>ccActual[0]*0.02)))
  .blend(o0).posterize(5)
  .out(o0)

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
}
src(s0).out(o2)










////////start 0.015 --> 0.05 //note so on and off
shape(2, 0.001, 0.05).modulateScrollY(noise(()=>cc[0]*4,0.2).scale(()=>cc[1]+0.01*0.8,1,5))
  .blend(o0, 0.3).mult(osc(10, 0.8, 1)
  .color(3.5, 3.0, 3.0)).contrast(6).blend(o0)
  .blend(src(s0).modulateScrollY(noise(()=>ccActual[0]*0.02)).scale(()=>cc[1]+0.01*0.8))
	//.modulateRotate(voronoi(50,1))
  //.diff(solid(()=>ccActual[3],()=>ccActual[3],()=>ccActual[3]))
	//.blend(src(s0).modulateRepeat(noise(()=>ccActual[2]*0.05),()=>Math.floor(cc[3]*5+2), ()=>Math.floor(cc[3]*5+2)))
//.blend(src(s0).modulateScrollY(noise(()=>ccActual[0]*0.02)))
  .blend(o0).posterize(5)
  .out(o0)


////////////reinventing xavier on the top 





//initialise
p5.remove()

solid().out()
p5 = new P5();
s0.init({src: p5.canvas})
p5.hide()
render(o0)

////////start 0.015 --> 0.05 //note so on and off
shape(2, 0.001, 0.05).modulateScrollY(noise(()=> cc[0]*4,0.2).scale(()=>cc[1]+0.01*0.8,1,5))
  .blend(o0, 0.3).mult(osc(10, 0.8, 1)
  .color(3.5, 3.0, 3.0)).contrast(2).blend(o0)
 // .blend(src(s0).modulateScrollY(noise(()=>ccActual[0]*0.02)).scale(()=>cc[1]+0.01*0.8))
  //.diff(solid(()=>ccActual[3],()=>ccActual[3],()=>ccActual[3]))
	//.blend(src(s0).modulateRepeat(noise(()=>ccActual[2]*0.05),()=>Math.floor(cc[3]*5+2), ()=>Math.floor(cc[3]*5+2)))
	//.blend(src(s0).modulateScrollY(noise(()=>ccActual[0]*0.02))).contrast(2)
  //.blend(o0).posterize(5)
  .out(o0)


shape(2, 0.001, 0.05).modulateScrollY(noise(()=> cc[0]*4,0.2).scale(()=>cc[1]+0.01*0.8,1,5))
  .blend(o0, 0.3).mult(osc(10, 0.8, 1)
  .color(3.5, 3.0, 3.0)).contrast(2).blend(o0)
  //.blend(src(s0).modulateScrollY(noise(()=>ccActual[0]*0.02)).scale(()=>cc[1]+0.01*0.8))
	//.modulateRotate(voronoi(50,1))
  //.diff(solid(()=>ccActual[3],()=>ccActual[3],()=>ccActual[3]))
	.blend(src(s0).modulateRepeat(noise(()=>ccActual[2]*0.05),()=>Math.floor(cc[3]*5+2), ()=>Math.floor(cc[3]*5+2)))
	//.blend(src(s0).modulateScrollY(noise(()=>ccActual[0]*0.02))).contrast(2)
  .blend(o0).posterize(5)
  .out(o0)

xpos = width
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
}
src(s0).out()

render()

hush()

/// visual after 2nd drop -- INCOMPLETE ;-;
voronoi(10).mult(osc(10,0.5,1)).rotate(()=>time).modulate(noise(10))
  .modulateKaleid(osc(11,0.5,0),10).luma(0.5)
  .saturate(2).contrast(1.2).out()

///////////////////////////////// 2ND END ////////////////////////////////////////

////I AM HEREEEEEEE --looks good when kaleid
shape(2, 0.001, 0.05).modulateScrollY(noise(4,0.5).scale(1,1,5))
  .blend(o0, 0.3)
  .mult(osc(10, 0.5, 1)
  .color(3.5, 3.0, 3.0)).blend(o0).modulate(noise(()=>cc[1]+4))
  //.modulateRotate(voronoi(50,1))
  //.diff(solid(()=>ccActual[3],()=>ccActual[3],()=>ccActual[3]))
  //.invert(()=>cc[3]).contrast(2)
 .blend(o0)
  .modulateKaleid(noise(()=>cc[2]*2))
	//.add(src(o0).modulate(noise(1)).blend(o0))
  .out()

hush()

// MODIFIED this is the one that we showed aaron and he liked it 
voronoi(10).mult(osc(3, 0.8, 1)).color(3.5, 3.0, 3).rotate(()=>time).modulate(noise(5))
  .modulateKaleid(osc(()=>cc[20]*10,0.5,0),10).luma(0.8)
  .saturate(2).contrast(1.2).out()




// ORIGINAL this is the one that we showed aaron and he liked it 
voronoi(10).mult(osc(10,0.5,1)).rotate(()=>time).modulate(noise(10))
  .modulateKaleid(osc(11,0.5,0),10).luma(0.5)
  .saturate(2).contrast(1.2).out()




hush()

// for sine ---  DO NOT MODIFY UNDER ANY CIRCUMSTANCES I BEG U T-T ;-; <3 
shape(2, 0.001, 0.05).modulateScrollY(noise(()=> cc[12]*4,0.2).scale(()=>cc[13]+0.01*0.8,1,5))
  .blend(o0, 0.3).mult(osc(10, 0.8, 1)
  .color(3.5, 3.0, 3.0)).contrast(2).blend(o0)
 .blend(src(s0).modulateScrollY(noise(()=>ccActual[12]*0.02)).scale(()=>cc[13]+0.01*0.8))
	//.modulate(voronoi(()=>cc[14]*5,2))
  //.diff(solid(()=>ccActual[3],()=>ccActual[3],()=>ccActual[3]))
//.blend(src(s0).modulateScrollY(noise(()=>ccActual[12]*0.02)))
	//.blend(src(s0).modulateRepeat(noise(()=>ccActual[14]*0.05),()=>Math.floor(cc[15]*5+2), ()=>Math.floor(cc[15]*5+2)))
  .blend(o0).posterize(5)
  .out(o0)
///// END OF NO MODIFICATION ZONE

shape(2, 0.001, 0.05).modulateScrollY(noise(()=> cc[4]*4,0.2).scale(()=>cc[1]+0.01*2,1,5))
  .blend(o0, 0.3).mult(osc(10, 0.8, 1)
  .color(3.5, 3.0, 3.0))
  //.contrast(2).blend(o0)
	.blend(src(s0).modulateRepeat(noise(()=>ccActual[2]*0.05),()=>Math.floor(cc[3]*5+2), ()=>Math.floor(cc[3]*5+2)))
  .blend(o0).posterize(5)
  .out(o0) 
render(o0)

////I AM HEREEEEEEE --looks good when kaleid
shape(2, 0.001, 0.05).modulateScrollY(noise(4,0.5).scale(1,1,5))
  .blend(o0, 0.3)
  .mult(osc(10, 0.8, 1)
  .color(3.5, 3.0, 3.0)).blend(o0).modulate(noise(()=>cc[1]+4))
  //.modulateRotate(voronoi(50,1))
  //.diff(solid(()=>ccActual[3],()=>ccActual[3],()=>ccActual[3]))
  //.invert(()=>cc[3]).contrast(2)
 //.blend(o0)
  //.modulateKaleid(noise(()=>cc[2]*2))
  .out()



src(s0).modulate(noise(()=>cc[2]+cc[3]*3)).blend(o3).out(o3)
src(o3).mult(osc(3, 0.8, 1)
  .color(3.5, 3.0, 3.0))
  //.mult(noise(()=>cc[2], 5)).blend(solid(1,1,1),()=>cc[4])
	//.modulateScrollY(noise(5))
	//.posterize(5)
  .out(o0)
render(o0)

////////////////////////////////////////////////////////////////////////////////////////
// WORKING WITH THIS ONEEEEEE
// trigger after hehe
src(s0).modulate(noise(()=>cc[2]+cc[3]*3)).blend(o1).out(o3)

src(o3).mult(osc(3, 0.8, 1)
  .color(3.5, 3.0, 3.0))
  .mult(noise(()=>cc[2], 5)).blend(solid(1,1,1),()=>cc[4])
	//.modulateScrollY(noise(5))
	//.posterize(5)
  .out(o0)
render(o0)

render()
// MAKE SURE TO KEEP TRACK OF THE RENDER OUTPUTS

 src(s0).modulate(noise(()=>cc[2]+cc[3]*3)).blend(o1).out(o1)

shape(2, [0.7, 0.6, 0,7, 0.6, 0.5, 0.4, 0.3, 0.4, 0.2, 0.3, 0.1, 0.001],[0.7, 0.6, 0,7, 0.6, 0.5, 0.4, 0.3, 0.4, 0.2, 0.3, 0.1,0.05] ).mult(o0).out(o1)
render(o1)

solid().out()

p5.remove()

osc().out()

dostuff = ()=>{
  hush();
  osc(30,0.1,0.5).out()
  render(o0);
 

dostuff()

hush()

p5.draw =()=>{
	p5.clear()
 
s0.init({src:p5.canvas});

render()
  
  p5.remove()
 

