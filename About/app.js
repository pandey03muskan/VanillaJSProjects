dic={
    Vission:`Vission Hye this is muskan pandey from Ayodhya I am 
          currently pursuing B.Tech in CSE and after some I
          will become a software Engineer but for now I 
          have only one goal to be the best programmer in 
          this world!!I'm baby wolf pickled schlitz try-hard 
          normcore marfa man bun mumblecore vice pop-up XOXO lomo 
          kombucha glossier bicycle rights. Umami kinfolk salvia jean
           shorts offal venmo. Knausgaard tilde try-hard, woke fixie
            banjo man bun.`,
    Mission:`Mission Hye this is muskan pandey from Ayodhya I am 
          currently pursuing B.Tech in CSE and after some I
          will become a software Engineer but for now I 
          have only one goal to be the best programmer in 
          this world!! will become a software Engineer but for now I 
          have only one goal to be the best programmer in 
          this world!!I'm baby wolf pickled schlitz try-hard 
          normcore marfa man bun mumblecore vice pop-up XOXO lomo 
          kombucha glossier bicycle rights. Umami kinfolk`,
    Goal:`Goal Hye this is muskan pandey from Ayodhya I am 
          currently pursuing B.Tech in CSE and after some I
          will become a software Engineer but for now I 
          have only one goal to be the best programmer in 
          this world!! will become a software Engineer but for now I 
          have only one goal to be the best programmer in 
          this world!!I'm baby wolf pickled schlitz try-hard 
          normcore marfa man bun mumblecore vice pop-up XOXO lomo 
          kombucha glossier bicycle rights. Umami kinfolk`
};
function Description(btn){
    document.getElementById("InnerDescriptionSection").innerHTML=dic[btn];
    document.getElementById("heading").innerHTML=btn;
}
buttons=document.querySelectorAll(".btnD");
for(let i=0;i<buttons.length;i++){
  buttons[i].onclick=function(){
    var cur=document.getElementsByClassName('active');
    cur[0].className=cur[0].className.replace(" active","");
    this.classList+=" active";
    Description(buttons[i].id);
  }
}