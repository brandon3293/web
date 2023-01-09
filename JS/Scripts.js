function getRandomInt(lower, upper){
    var multiplier = upper - (lower-1);
    var rnd = parseInt(Math.random()*multiplier)+lower;
    return rnd;
}

// Project 2


// function init(){
//     button=document.querySelector(".s1");
//     button3=document.querySelector(".s3");
//     button5=document.querySelector(".s5");
//     switchUno=document.getElementById("switch1");
//     switchDos=document.getElementById("switch2");

//     // console.log(button);
//     button.disabled=true;
//     button3.disabled=true;
//     button5.disabled=true;
//     switchUno.disabled=true;
//     switchDos.disabled=true;
//     SelectedPower="???";
//     rplmax=10;
//     rsmax=10;
//     rsimax=10;
//     min=0;
//     rpl=0;
//     rs=0;
//     rsi=0;
//     ischecked=document.getElementById("switch1").value;
//     ischecked2=document.getElementById("switch2").value;
//     display();
// }
// function implement(x){
//     if(x==1){
//         rpl++;
//         if(rpl>rplmax)
//             rpl=rplmax;
//     }else if(x==2){
//         rpl--;
//         if(rpl<min)
//             rpl=min;
//     }else if(x==3){
//         rs++;
//         if(rs>rsmax)
//             rs=rsmax;
//     }else if(x==4){
//         rs--;
//         if(rs<min)
//             rs=0;      
//     }else if(x==5){
//         rsi++;
//         if(rsi>rsimax)
//             rsi=rsimax;   
//     }else{
//         rsi--;
//         if(rsi<min)
//             rsi=min; 
//     }
//     display();
    
// }

// function togglePower(z){
//     button.disabled=false;
//     button3.disabled=false;
//     button5.disabled=false;
//     switchUno.disabled=false;
//     switchDos.disabled=false;
//     if(z==1){
//         SelectedPower="Solar Enhamcement";
//         // button.disabled=false;
//         rplmax=10;
//         rsmax=10;
//         rsimax=10;
//         if(rpl>rplmax){
//             rpl=rplmax;
//         }
//         if(rs>rsmax){
//             rs=rsmax;
//         }
//         if(rsi>rsimax){
//             rsi=rsimax;
//         }
//     }else if(z==2){
//         SelectedPower="Hydro Enhamcement";
//         rplmax=8;
//         rsimax=10;
//         rsmax=12;
//         if(rpl>rplmax){
//             rpl=rplmax;
//         }
//         if(rs>rsmax){
//             rs=rsmax;
//         }
//         if(rsi>rsimax){
//             rsi=rsimax;
//         }
//     }else{
//         SelectedPower="Nuclear Enhamcement";
//         rplmax=12;
//         rsmax=14;
//         rsimax=4;
//         if(rpl>rplmax){
//             rpl=rplmax;
//         }
//         if(rs>rsmax){
//             rs=rsmax;
//         }
//         if(rsi>rsimax){
//             rsi=rsimax;
//         }
//     }
//     display();
// }

// function toggleImg(c){
//     document.getElementById("larger").style.backgroundSize="98%";
//     if(c==1){
//         document.getElementById("larger").style.backgroundImage="url('Images/1st.png')";
        
//     }else if(c==2){
//         document.getElementById("larger").style.backgroundImage="url('Images/2nd.png')";
//     }else if(c==3){
//         document.getElementById("larger").style.backgroundImage="url('Images/3rd.jpg')";
//     }else if(c==4){
//         document.getElementById("larger").style.backgroundImage="url('Images/4th.png')";
//     }else{
//         document.getElementById("larger").style.backgroundImage="url('Images/5th.jpg')";
//     }
// }

// function toggle(checkbox){
//     if(ischecked == "scanners off"){
//         ischecked="scanners on";
//     }else{
//         ischecked="scanners off";
//     }
//     display();
// }
// function toggle2(checkbox){
//     if(ischecked2 == "defense system off"){
//         ischecked2="defense system on";
//     }else{
//         ischecked2="defense system off";
//     }
//     display();
// }
// function changeVisibility() {
//     document.getElementById("poderes").style.visibility = "hidden";
//     document.getElementById("f1st").style.visibility = "hidden";
//     document.getElementById("s2nd").style.visibility = "hidden";
//     document.getElementById("th3rd").style.visibility = "hidden";
//     document.getElementById("f4th").style.visibility = "hidden";
//     document.getElementById("fi5th").style.visibility = "hidden";
//     document.querySelector(".s1").style.visibility = "hidden";
//     document.querySelector(".s2").style.visibility = "hidden";
//     document.querySelector(".s3").style.visibility = "hidden";
//     document.querySelector(".s4").style.visibility = "hidden";
//     document.querySelector(".s5").style.visibility = "hidden";
//     document.querySelector(".s6").style.visibility = "hidden";
//     document.querySelector(".s0").style.visibility = "hidden";
//     document.querySelector(".s00").style.visibility = "hidden";
//     document.querySelector(".s000").style.visibility = "hidden";
//     document.getElementById("spdt1").style.visibility="hidden";
//     document.getElementById("spdt2").style.visibility="hidden";
//   }
// function display(){
//     spower.innerHTML=SelectedPower;
  
//     pl.innerHTML=rpl;
//     ts.innerHTML=rs;
//     si.innerHTML=rsi;
//     result1.innerHTML=ischecked;
//     result2.innerHTML=ischecked2;
   
// }

//Javascript for Project 3


function init(){   
    diceTable=document.getElementById("diceTable");
    diceTable1=document.getElementById("diceTable1");
    diceTable2=document.getElementById("diceTable2");
    diceTable3=document.getElementById("diceTable3");
    diceTable1.style.display = "none";
    diceTable2.style.display = "none";
    diceTable3.style.display = "none";
    RollDice=document.getElementById("rd");
    button1=document.getElementById("button1");
    button2=document.getElementById("button2");
    button3=document.getElementById("button3");
    // TR=document.getElementById("TableResults");
    NumberRolls=document.getElementById("number");
    foo=0;
    console.log(NumberRolls.value);
    IdxcheckedBox=0;
    RollDice.disabled=true;

    // Os=0,Ts=0,Thrs=0,Frs=0,Fis=0,S=0,mode1s=0,mean1s=0,median1s=0;
    // OneRollResults=[Os,Ts,Thrs,Frs,Fis,S,mean1s,mode1s,median1s];
    OneRollResults=[1,0,2,0,3,0,4,0,5,0,6,0,0,0,0,0,0];
    list1=[];
    mode1s=[];
    // list1[1]=mode1s;
    // console.log(list1);
    console.log(OneRollResults);
    // OneRollResults[1]+=1;
    // console.log(OneRollResults);

    list2=[];
    mode2s=[];
    TwoRollResults=[2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0,11,0,12,0,0,0,0,0,0,0];

    list3=[];
    mode3s=[];
    ThreeRollResults=[3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0,11,0,12,0,13,0,14,0,15,0,16,0,17,0,18,0,0,0,0,0,0,0,0];
    // length of 39
} 



function DiceRoll(x){
    if(IdxcheckedBox==0){
        mode1s=[];
        OneRollResults[OneRollResults.length-1]+=x;
        for(var k=0;k<x;k++){
            RollN = getRandomInt(1,6);
            console.log("roll " +k+ " "+RollN);
            list1.push(RollN);
            console.log(list1);
            OneRollResults[OneRollResults.length-2]+=RollN;
            for(var j=0;j<12;j+=2){
                if(RollN==OneRollResults[j]){
                    OneRollResults[j+1]+=1;
                }
            }
        }
        OneRollResults[OneRollResults.length-5]= OneRollResults[OneRollResults.length-2]/OneRollResults[OneRollResults.length-1];
        list1=list1.sort(function(a,b){
            return a-b;
        });
        console.log(list1);
        if(OneRollResults[16]%2==0){
            y=OneRollResults[16]/2;
            z=(list1[y]+list1[y-1])/2;
        }else{
            y=Math.floor(OneRollResults[16]/2);
            z=list1[y];
        }
        OneRollResults[OneRollResults.length-3]=z;

        gts = Math.max(OneRollResults[1],OneRollResults[3],OneRollResults[5],OneRollResults[7],OneRollResults[9],OneRollResults[11]);
        console.log(gts);
        for(var m=0;m<12;m+=2){
            if(OneRollResults[m+1]==gts){
                mode1s.push(OneRollResults[m]);
            }
        }
        OneRollResults[OneRollResults.length-4]=mode1s;
        document.getElementById("1s").innerHTML=OneRollResults[1];
        document.getElementById("2s").innerHTML=OneRollResults[3];
        document.getElementById("3s").innerHTML=OneRollResults[5];
        document.getElementById("4s").innerHTML=OneRollResults[7];
        document.getElementById("5s").innerHTML=OneRollResults[9];
        document.getElementById("6s").innerHTML=OneRollResults[11];
        document.getElementById("Mean").innerHTML=OneRollResults[12];
        document.getElementById("Mode").innerHTML=OneRollResults[13];
        document.getElementById("Median").innerHTML=OneRollResults[14];
        console.log(OneRollResults);
    }else if(IdxcheckedBox==1){
        mode2s=[];
        TwoRollResults[TwoRollResults.length-1]+=x;
        for(var m=0;m<x;m++){
            roll1=getRandomInt(1,6);
            roll2=getRandomInt(1,6);
            if(roll1==roll2){
                TwoRollResults[TwoRollResults.length-6]+=1;
            }
            Roll2N=roll1+roll2;
            list2.push(Roll2N);
            TwoRollResults[TwoRollResults.length-2]+=Roll2N;
            for(var j=0;j<22;j+=2){
                if(Roll2N==TwoRollResults[j]){
                    TwoRollResults[j+1]+=1;
                }
            }
        }
        TwoRollResults[TwoRollResults.length-5]=TwoRollResults[TwoRollResults.length-2]/TwoRollResults[TwoRollResults.length-1];
        list2=list2.sort(function(a,b){
            return a-b;
        });
        console.log(list2);
        if(TwoRollResults[27]%2==0){
            y=TwoRollResults[27]/2;
            z=(list2[y]+list2[y-1])/2;
        }else{
            y=Math.floor(TwoRollResults[27]/2);
            z=list2[y];
        }
        TwoRollResults[TwoRollResults.length-3]=z;
        gts = Math.max(TwoRollResults[1],TwoRollResults[3],TwoRollResults[5],TwoRollResults[7],TwoRollResults[9],TwoRollResults[11],TwoRollResults[13],TwoRollResults[15],TwoRollResults[17],TwoRollResults[19],TwoRollResults[21]);
        console.log(gts);
        for(var m=0;m<22;m+=2){
            if(TwoRollResults[m+1]==gts){
                mode2s.push([m]);
            }
        }
        TwoRollResults[TwoRollResults.length-4]=mode2s;
        document.getElementById("22s").innerHTML=TwoRollResults[1];
        document.getElementById("33s").innerHTML=TwoRollResults[3];
        document.getElementById("44s").innerHTML=TwoRollResults[5];
        document.getElementById("55s").innerHTML=TwoRollResults[7];
        document.getElementById("66s").innerHTML=TwoRollResults[9];
        document.getElementById("77s").innerHTML=TwoRollResults[11];
        document.getElementById("88s").innerHTML=TwoRollResults[13];
        document.getElementById("99s").innerHTML=TwoRollResults[15];
        document.getElementById("100s").innerHTML=TwoRollResults[17];
        document.getElementById("111s").innerHTML=TwoRollResults[19];
        document.getElementById("122s").innerHTML=TwoRollResults[21];
        document.getElementById("Doubles").innerHTML=TwoRollResults[22];
        document.getElementById("MMean").innerHTML=TwoRollResults[23];
        document.getElementById("MMode").innerHTML=TwoRollResults[24];
        document.getElementById("MMedian").innerHTML=TwoRollResults[25];

        console.log(TwoRollResults);
    }else{
        mode3s=[];
        ThreeRollResults[ThreeRollResults.length-1]+=x;
        doubles=false;
        triples=false;
        for(var m=0;m<x;m++){
            roll11=getRandomInt(1,6);
            roll22=getRandomInt(1,6);
            roll33=getRandomInt(1,6);
            if(roll11==roll22||roll22==roll33||roll11==roll33){
                doubles=true;
            }
            if(roll11==roll22&&roll22==roll33){
                triples=true;
            }
            if(triples&&doubles){
                ThreeRollResults[ThreeRollResults.length-7]+=1;
            }else{
                if(triples&&doubles==false){
                    ThreeRollResults[ThreeRollResults.length-7]+=1;
                }else if(triples==false&&doubles){
                    ThreeRollResults[ThreeRollResults.length-6]+=1;
                }else{
                    return;
                }
            }
            Roll3N=roll11+roll22+roll33;
            list3.push(Roll3N);
            ThreeRollResults[ThreeRollResults.length-2]+=Roll3N;
            for(var j=0;j<32;j+=2){
                if(Roll3N==ThreeRollResults[j]){
                    ThreeRollResults[j+1]+=1;
                }
            }
        }
        ThreeRollResults[ThreeRollResults.length-5]=ThreeRollResults[ThreeRollResults.length-2]/ThreeRollResults[ThreeRollResults.length-1];
        list3=list3.sort(function(a,b){
            return a-b;
        });
        console.log(list3);
        if(ThreeRollResults[38]%2==0){
            y=ThreeRollResults[38]/2;
            z=(list3[y]+list3[y-1])/2;
        }else{
            y=Math.floor(ThreeRollResults[38]/2);
            z=list3[y];
        }
        ThreeRollResults[ThreeRollResults.length-3]=z;
        gts = Math.max(ThreeRollResults[1],ThreeRollResults[3],ThreeRollResults[5],ThreeRollResults[7],ThreeRollResults[9],ThreeRollResults[11]
            ,ThreeRollResults[13],ThreeRollResults[15],ThreeRollResults[17],ThreeRollResults[19],ThreeRollResults[21],ThreeRollResults[23],
            ThreeRollResults[25],ThreeRollResults[27],ThreeRollResults[29],ThreeRollResults[31]);
        console.log(gts);
        for(var m=0;m<32;m+=2){
            if(ThreeRollResults[m+1]==gts){
                mode3s.push([m]);
            }
        }
        ThreeRollResults[ThreeRollResults.length-4]=mode3s;
        document.getElementById("333s").innerHTML=ThreeRollResults[1];
        document.getElementById("444s").innerHTML=ThreeRollResults[3];
        document.getElementById("555s").innerHTML=ThreeRollResults[5];
        document.getElementById("666s").innerHTML=ThreeRollResults[7];
        document.getElementById("777s").innerHTML=ThreeRollResults[9];
        document.getElementById("888s").innerHTML=ThreeRollResults[11];
        document.getElementById("999s").innerHTML=ThreeRollResults[13];
        document.getElementById("1000s").innerHTML=ThreeRollResults[15];
        document.getElementById("1111s").innerHTML=ThreeRollResults[17];
        document.getElementById("1222s").innerHTML=ThreeRollResults[19];
        document.getElementById("1333s").innerHTML=ThreeRollResults[21];
        document.getElementById("1444s").innerHTML=ThreeRollResults[23];
        document.getElementById("1555s").innerHTML=ThreeRollResults[25];
        document.getElementById("1666s").innerHTML=ThreeRollResults[27];
        document.getElementById("1777s").innerHTML=ThreeRollResults[29];
        document.getElementById("1888s").innerHTML=ThreeRollResults[31];
        document.getElementById("Triples").innerHTML=ThreeRollResults[32];
        document.getElementById("DDoubles").innerHTML=ThreeRollResults[33];
        document.getElementById("MMMean").innerHTML=ThreeRollResults[34];
        document.getElementById("MMMode").innerHTML=ThreeRollResults[35];
        document.getElementById("MMMedian").innerHTML=ThreeRollResults[36];

        console.log(ThreeRollResults);
    }
}

function DisplayTable(){
    if(IdxcheckedBox==0){
        diceTable.style.display = "none";
        diceTable1.style.display = "block";
        diceTable2.style.display = "none";
        diceTable3.style.display = "none";
    }else if(IdxcheckedBox==1){
        diceTable.style.display = "none";
        diceTable1.style.display = "none";
        diceTable2.style.display = "block";
        diceTable3.style.display = "none";
    }else{
        diceTable.style.display = "none";
        diceTable1.style.display = "none";
        diceTable2.style.display = "none";
        diceTable3.style.display = "block";
    }
}

function toggleCheckBox(x){
    RollDice.disabled=false;
    var checkboxesList = document.getElementsByClassName("cb");
    for (var i = 0; i < checkboxesList.length; i++) {
       checkboxesList.item(i).checked = false; 
    }
    x.checked=true;
    console.log(checkboxesList)
    for(var j=0;j<checkboxesList.length;j++){
        if(checkboxesList[j].checked==true){
            IdxcheckedBox=j;
        }
    }
    // console.log(IdxcheckedBox)  how many die are gonna be rolled
}

function Roll(){
    document.getElementById("popup").style.display = "block";
    RollDice.disabled=true;
    button1.disabled=true;
    button2.disabled=true;
    button3.disabled=true;

}

function enter(){
    foo=parseInt(NumberRolls.value);
    // console.log(NumberRolls.value);
    // console.log(foo);
    closeForm();
    // The actual Roll Function in order to insert to the table
    // Inserting data to table will probably be a seperate function
    DiceRoll(foo);
    // console.log(NumberRolls.value);
    // Another function will be called to print out the rows of the Dice Table(final activation)
    DisplayTable();
    console.log(foo,IdxcheckedBox)
}

function closeForm() {
    document.getElementById("popup").style.display = "none";
    RollDice.disabled=false;
    button1.disabled=false;
    button2.disabled=false;
    button3.disabled=false;
    NumberRolls.value=0;
  }
  
