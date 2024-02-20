let j;
function setup() {
    // put setup code here
    createCanvas(800,400);
    background(100);

    x = 100;
    y = 100;
    j = 0;
   }
function draw() {
    // put drawing code here
    strokeWeight(0);
    fill(0,0,105);
    rect(0,0,800,100);
    fill(0,0,155);
    rect(0,100,800,100);
    fill(0,0,205);
    rect(0,200,800,100);
    fill(0,0,255);
    rect(0,300,800,100);

    strokeWeight(10);
    line(400,0,400,400);
    
    //kodok
    strokeWeight(3);
    
    fill(0,200,0);
    ellipse(160,70,70,80);
    ellipse(240,70,70,80);
    ellipse(200,120,180,100);
    fill(255,255,255);
    ellipse(160,70,50,60);
    ellipse(240,70,50,60);
    

    strokeWeight(5);
    line(200,165,150,140);
    line(200,165,250,140);
    
    strokeWeight(25);
    point(175,70);
    point(225,70);

    strokeWeight(1);
    
    ellipse(175,65,10,10);
    ellipse(225,65,10,10);
    fill(255,0,100);
    ellipse(135,120,20,20);
    ellipse(265,120,20,20);

    //beruang

    strokeWeight(3);
    fill(148,86,38);
    ellipse(160,240,60,60);
    ellipse(240,240,60,60);
    fill(187,187,181);
    ellipse(160,240,40,40);
    ellipse(240,240,40,40);
   
    fill(148,86,38);
    ellipse(200,300,170,140);

    fill(187,187,181);
    ellipse(200,320,70,70);

    fill(0);
    ellipse(200,305,40,30);

    strokeWeight(5);
    line(200,320,190,330);
    line(200,320,210,330);

    strokeWeight(1);
    fill(148,86,38);
    ellipse(170,270,50,50);
    ellipse(230,270,50,50);
    line(195,270,205,270);
    line(145,270,130,260);
    line(255,270,270,260);

    strokeWeight(20);
    point(170,270);
    point(230,270);

    //-------

    

    strokeWeight(3);
    
    fill(0,200,0);
    ellipse(560,70,70,80);
    ellipse(640,70,70,80);
    ellipse(600,120,180,100);
    fill(255,255,255);
    ellipse(560,70,50,60);
    ellipse(640,70,50,60);
    

    strokeWeight(5);
    line(600,165,550,140);
    line(600,165,650,140);
    
    strokeWeight(25);
    var x = 550 + 3*Math.sin(PI/50*j);
    j+=1
    point(x,70);
    var x = 630 + 3*Math.sin(PI/50*j);
    j+=1
    point(x,70);

    strokeWeight(1);
    
    var x = 545 + 3*Math.sin(PI/50*j);
    j+=1
    ellipse(x,65,10,10);
    var x = 625 + 3*Math.sin(PI/50*j);
    j+=1
    ellipse(x,65,10,10);
    fill(255,0,100);
    ellipse(535,120,20,20);
    ellipse(665,120,20,20);
    //beruang

    strokeWeight(3);
    fill(148,86,38);
    var y = 240 + 3*Math.sin(PI/60*j);
    j+=1
    ellipse(560,y,60,60);
    ellipse(640,y,60,60);
    fill(187,187,181);
    var y = 240 + 3*Math.sin(PI/60*j);
    j+=1
    ellipse(560,y,40,40);
    ellipse(640,y,40,40);
   
    fill(148,86,38);
    ellipse(600,300,170,140);

    fill(187,187,181);
    ellipse(600,320,70,70);

    fill(0,0,0);
    ellipse(600,305,40,30);

    strokeWeight(5);
    line(600,320,590,330);
    line(600,320,610,330);

    strokeWeight(1);
    fill(148,86,38);
    ellipse(570,270,50,50);
    ellipse(630,270,50,50);
    line(595,270,605,270);
    line(545,270,530,260);
    line(655,270,670,260);

    strokeWeight(20);
    var x = 580 + 3*Math.sin(PI/60*j);
    j+=1
    point(x,270);
    var x = 640 + 3*Math.sin(PI/60*j);
    j+=1
    point(x,270);


   }