function getRandomInt(lower, upper){
    var multiplier = upper - (lower-1);
    var rnd = parseInt(Math.random()*multiplier)+lower;
    return rnd;
}

// Project 2


function init(){
    button=document.querySelector(".s1");
    button3=document.querySelector(".s3");
    button5=document.querySelector(".s5");
    switchUno=document.getElementById("switch1");
    switchDos=document.getElementById("switch2");

    // console.log(button);
    button.disabled=true;
    button3.disabled=true;
    button5.disabled=true;
    switchUno.disabled=true;
    switchDos.disabled=true;
    SelectedPower="???";
    rplmax=10;
    rsmax=10;
    rsimax=10;
    min=0;
    rpl=0;
    rs=0;
    rsi=0;
    ischecked=document.getElementById("switch1").value;
    ischecked2=document.getElementById("switch2").value;
    display();
}
function implement(x){
    if(x==1){
        rpl++;
        if(rpl>rplmax)
            rpl=rplmax;
    }else if(x==2){
        rpl--;
        if(rpl<min)
            rpl=min;
    }else if(x==3){
        rs++;
        if(rs>rsmax)
            rs=rsmax;
    }else if(x==4){
        rs--;
        if(rs<min)
            rs=0;      
    }else if(x==5){
        rsi++;
        if(rsi>rsimax)
            rsi=rsimax;   
    }else{
        rsi--;
        if(rsi<min)
            rsi=min; 
    }
    display();
    
}

function togglePower(z){
    button.disabled=false;
    button3.disabled=false;
    button5.disabled=false;
    switchUno.disabled=false;
    switchDos.disabled=false;
    if(z==1){
        SelectedPower="Solar Enhamcement";
        // button.disabled=false;
        rplmax=10;
        rsmax=10;
        rsimax=10;
        if(rpl>rplmax){
            rpl=rplmax;
        }
        if(rs>rsmax){
            rs=rsmax;
        }
        if(rsi>rsimax){
            rsi=rsimax;
        }
    }else if(z==2){
        SelectedPower="Hydro Enhamcement";
        rplmax=8;
        rsimax=10;
        rsmax=12;
        if(rpl>rplmax){
            rpl=rplmax;
        }
        if(rs>rsmax){
            rs=rsmax;
        }
        if(rsi>rsimax){
            rsi=rsimax;
        }
    }else{
        SelectedPower="Nuclear Enhamcement";
        rplmax=12;
        rsmax=14;
        rsimax=4;
        if(rpl>rplmax){
            rpl=rplmax;
        }
        if(rs>rsmax){
            rs=rsmax;
        }
        if(rsi>rsimax){
            rsi=rsimax;
        }
    }
    display();
}

function toggleImg(c){
    document.getElementById("larger").style.backgroundSize="98%";
    if(c==1){
        document.getElementById("larger").style.backgroundImage="url('Images/1st.png')";
        
    }else if(c==2){
        document.getElementById("larger").style.backgroundImage="url('Images/2nd.png')";
    }else if(c==3){
        document.getElementById("larger").style.backgroundImage="url('Images/3rd.jpg')";
    }else if(c==4){
        document.getElementById("larger").style.backgroundImage="url('Images/4th.png')";
    }else{
        document.getElementById("larger").style.backgroundImage="url('Images/5th.jpg')";
    }
}

function toggle(checkbox){
    if(ischecked == "scanners off"){
        ischecked="scanners on";
    }else{
        ischecked="scanners off";
    }
    display();
}
function toggle2(checkbox){
    if(ischecked2 == "defense system off"){
        ischecked2="defense system on";
    }else{
        ischecked2="defense system off";
    }
    display();
}
function changeVisibility() {
    document.getElementById("poderes").style.visibility = "hidden";
    document.getElementById("f1st").style.visibility = "hidden";
    document.getElementById("s2nd").style.visibility = "hidden";
    document.getElementById("th3rd").style.visibility = "hidden";
    document.getElementById("f4th").style.visibility = "hidden";
    document.getElementById("fi5th").style.visibility = "hidden";
    document.querySelector(".s1").style.visibility = "hidden";
    document.querySelector(".s2").style.visibility = "hidden";
    document.querySelector(".s3").style.visibility = "hidden";
    document.querySelector(".s4").style.visibility = "hidden";
    document.querySelector(".s5").style.visibility = "hidden";
    document.querySelector(".s6").style.visibility = "hidden";
    document.querySelector(".s0").style.visibility = "hidden";
    document.querySelector(".s00").style.visibility = "hidden";
    document.querySelector(".s000").style.visibility = "hidden";
    document.getElementById("spdt1").style.visibility="hidden";
    document.getElementById("spdt2").style.visibility="hidden";
  }
function display(){
    spower.innerHTML=SelectedPower;
  
    pl.innerHTML=rpl;
    ts.innerHTML=rs;
    si.innerHTML=rsi;
    result1.innerHTML=ischecked;
    result2.innerHTML=ischecked2;
   
}

//Javascript for Project 3