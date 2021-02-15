let lines = 4, // number of polylines
    length = 15, // number of points in pts array (real short and real long are both fun!)
    wobble = 0.1, //add some random imprecision!
    colorBase = 300, // starting hue 0-360, increments on mousemove
    thickness = 120, // how big is this thing?
    lightness = 50,
    mousePos = {x:window.innerWidth/2,y:window.innerHeight/2},
    pos = { x:mousePos.x, y:mousePos.y },
    randPt = (p1,p2,amt) => gsap.utils.random(p1-amt,p1+amt) + ',' + gsap.utils.random(p2-amt,p2+amt),
    pts = [];

const logo = document.getElementById("logo");

for (let p=0; p<=length; p++) pts.push( mousePos.x+','+mousePos.y+' ' );

for (let i=0; i<lines; i++){
    let p = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    document.getElementById("container").appendChild(p);
    gsap.set(p, {attr:{ id:'s'+i, class:'s',      
      opacity: i/lines + 0.1,
      stroke:'hsl('+(colorBase+i/lines*65)+',100%, 50%)',
      'stroke-width':thickness - i/lines*thickness,
      'stroke-linecap':'round',
      'stroke-linejoin':'round',
      points:pts,
      fill: 'none'
    }});
}


logo.onmouseenter = (e)=>{
  wobble = 39;
  lightness = 100;
  gsap.to('#logo', {duration:0.5, opacity:1});
  gsap.to('.s', {duration:0.2, attr:{'stroke-width':(i)=>20-i/lines*20}, opacity:1})
}

logo.onmouseleave = (e)=>{
  wobble = 0.1;
  lightness = 50;  
  gsap.to('#logo', {duration:0.5, opacity:0.25});  
  gsap.to('.s', {duration:0.2, attr:{'stroke-width':(i)=>thickness-i/lines*thickness}, opacity:(i)=>i/lines + 0.1})
}


window.onmousemove = (e)=>{
  pos.x = e.clientX;
  pos.y = e.clientY;
  
  colorBase++;
  for (let i=0; i<lines; i++) gsap.to('#s'+i, {attr:{stroke:'hsl('+(colorBase+i/lines*65)+',100%, '+lightness+'%)'}});
}

gsap.ticker.add(()=>{
  mousePos.x += (pos.x -mousePos.x) * 0.1;
  mousePos.y += (pos.y -mousePos.y) * 0.1;
  pts.push( randPt(mousePos.x, mousePos.y, wobble)+' ');
  for (let i=0; i<lines; i++) gsap.to('#s'+i, {duration:i/lines, attr:{points:pts}, ease:'expo'} );
  pts.shift();
});