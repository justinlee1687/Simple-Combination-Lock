var canvas;

// lock variables for canvas 2 lock combination
var lock3; 
var lock2;
var lock1;

// lock  for canvas change 
var lock; 

// variables for the combination changing in canvas 2 (moving the numbers from 1 to 9)
var lockcombo;
var lockcombo2; 
var lockcombo3;

//lock varibables for sizes 
var px1 = 102; 
var px2 = 126; 
var px3 = 149; 

var py = 95;

function setup()
{
  createCanvas(800,800);
  canvas = 1;
  lock = false; 
  lock1 = false;
  lock2 = false; 
  lock3 = false;

  lockcombo = 1;
  lockcombo2 = 1; 
  lockcombo3 = 1; 

}

function draw()
{
  background(0);
  
  passCode1();

  if(lockcombo == 2 && lockcombo2 == 1 && lockcombo3 == 1)
  {
    fill(255);
    text("yay",300,300);
  }
  
}
function mouseReleased()
{
  if(lock1== true)
  {
    lock1 = false; 
  }

  if(lock2== true)
  {
    lock2 = false; 
  }

  if(lock3 == true)
  {
    lock3 = false; 
  }
}

function passCode1()
{
  pass1Button();
  pass2Button();
  pass3Button();

  fill(255);
  rect(px1-2,100,20,20);
  rect(px2-3,100,20,20);
  rect(px3-3,100,20,20);

  //grey button which is the combination options for the key lock. 
  fill(155);
  rect(px1,py,15,6);
  rect(px2,py,15,6);
  rect(px3,py,15,6);

  fill(0);
  strokeWeight(0);

  if(lockcombo == 1)
  {
    text("1",px1+5,py+20);
  }
  else if(lockcombo == 2)
  {
    text ("2",px1+5,py+20);
  }
  else if(lockcombo ==3)
  {
    text("3",px1+5,py+20);
  }
  else if(lockcombo == 4)
  {
    text("4",px1+5,py+20);
  }
  else if(lockcombo == 5)
  {
    text("5",px1+5,py+20);
  }
  else if(lockcombo ==6)
  {
    text("6",px1+5,py+20);
  }
  else if(lockcombo == 7)
  {
    text("7",px1+5,py+20);
  }
  else if(lockcombo ==8)
  {
    text("8",px1+5,py+20);
  }
  else if(lockcombo == 9)
  {
    text("9",px1+5,py+20);
  }
  else if(lockcombo == 10)
  {
    text("0",px1+5,py+20);
  }

  if(lockcombo2 == 1)
  {
    text("1",px2+5,py+20);
  }
  else if(lockcombo2 == 2)
  {
    text ("2",px2+5,py+20);
  }
  else if(lockcombo2==3)
  {
    text("3",px2+5,py+20);
  }
  else if(lockcombo2 == 4)
  {
    text("4",px2+5,py+20);
  }
  else if(lockcombo2 == 5)
  {
    text("5",px2+5,py+20);
  }
  else if(lockcombo2 ==6)
  {
    text("6",px2+5,py+20);
  }
  else if(lockcombo2 == 7)
  {
    text("7",px2+5,py+20);
  }
  else if(lockcombo2 ==8)
  {
    text("8",px2+5,py+20);
  }
  else if(lockcombo2 == 9)
  {
    text("9",px2+5,py+20);
  }
  else if(lockcombo2 == 10)
  {
    text("0",px2+5,py+20);
  }

  if(lockcombo3 == 1)
  {
    text("1",px3+5,py+20);
  }
  else if(lockcombo3 == 2)
  {
    text ("2",px3+5,py+20);
  }
  else if(lockcombo3 ==3)
  {
    text("3",px3+5,py+20);
  }
  else if(lockcombo3 == 4)
  {
    text("4",px3+5,py+20);
  }
  else if(lockcombo3 == 5)
  {
    text("5",px3+5,py+20);
  }
  else if(lockcombo3 ==6)
  {
    text("6",px3+5,py+20);
  }
  else if(lockcombo3 == 7)
  {
    text("7",px3+5,py+20);
  }
  else if(lockcombo3 ==8)
  {
    text("8",px3+5,py+20);
  }
  else if(lockcombo3 == 9)
  {
    text("9",px3+5,py+20);
  }
  else if(lockcombo3 == 10)
  {
    text("0",px3+5,py+20);
  }
}

function pass1Button()
{
  if (lock1 == false && mouseX > px1 && mouseX < px1+15 && mouseY > py && mouseY < py+6 && mouseIsPressed == true)
  {
    if(lockcombo == 1)
    {
      lockcombo = 2;
      lock1 = true; 
    }
    else if(lockcombo == 2)
    {
      lockcombo = 3;
      lock1 = true;
    }
    else if(lockcombo == 3) 
    {
      lockcombo = 4;
      lock1 = true;
    }
    else if(lockcombo == 4)
    {
      lockcombo = 5;
      lock1 = true;
    }
    else if(lockcombo == 5) 
    {
      lockcombo = 6;
      lock1 = true;
    }
    else if(lockcombo == 6)
    {
      lockcombo = 7;
      lock1 = true;
    }
    else if(lockcombo == 7) 
    {
      lockcombo = 8;
      lock1 = true;
    }
    else if(lockcombo == 8)
    {
      lockcombo = 9;
      lock1 = true;
    }
    else if(lockcombo == 9) 
    {
      lockcombo = 10; 
      lock1 = true; 
    }
    else if(lockcombo == 10)
    {
      lockcombo = 1;
      lock1 = true; 
    }
  }
}

function pass2Button()
{
  if (lock2 == false && mouseX > px2 && mouseX < px2+15 && mouseY > py && mouseY < py+6 && mouseIsPressed == true)
  {
    if(lockcombo2 == 1)
    {
      lockcombo2 = 2;
      lock2 = true; 
    }
    else if(lockcombo2 == 2)
    {
      lockcombo2 = 3;
      lock2 = true;
    }
    else if(lockcombo2 == 3) 
    {
      lockcombo2 = 4; 
      lock2 = true; 
    }
    else if(lockcombo2 == 4)
    {
      lockcombo2 = 5;
      lock2 = true; 
    }
    else if(lockcombo2 == 5) 
    {
      lockcombo2 = 6; 
      lock2 = true; 
    }
    else if(lockcombo2 == 6)
    {
      lockcombo2 = 7;
      lock2 = true; 
    }
    else if(lockcombo2 == 7) 
    {
      lockcombo2 = 8; 
      lock2 = true; 
    }
    else if(lockcombo2 == 8)
    {
      lockcombo2 = 9;
      lock2 = true; 
    }
    else if(lockcombo2 == 9) 
    {
      lockcombo2 = 10; 
      lock2 = true; 
    }
    else if(lockcombo2 == 10)
    {
      lockcombo2 = 1;
      lock2 = true; 
    }
  }
}

function pass3Button()
{
  if (lock3 == false && mouseX > px3 && mouseX < px3+15 && mouseY > py && mouseY < py+6 && mouseIsPressed == true)
  {
    if(lockcombo3 == 1)
    {
      lockcombo3 = 2;
      lock3 = true; 
    }
    else if(lockcombo3 == 2)
    {
      lockcombo3 = 3;
      lock3 = true;
    }
    else if(lockcombo3 == 3) 
    {
      lockcombo3 = 4; 
      lock3 = true; 
    }
    else if(lockcombo3 == 4)
    {
      lockcombo3 = 5;
      lock3 = true; 
    }
    else if(lockcombo3 == 5) 
    {
      lockcombo3 = 6; 
      lock3 = true; 
    }
    else if(lockcombo3 == 6)
    {
      lockcombo3 = 7;
      lock3 = true; 
    }
    else if(lockcombo3 == 7) 
    {
      lockcombo3 = 8; 
      lock3 = true; 
    }
    else if(lockcombo3 == 8)
    {
      lockcombo3 = 9;
      lock3 = true; 
    }
    else if(lockcombo3 == 9) 
    {
      lockcombo3 = 10; 
      lock3 = true; 
    }
    else if(lockcombo3 == 10)
    {
      lockcombo3 = 1;
      lock3 = true; 
    }
  }
  
}