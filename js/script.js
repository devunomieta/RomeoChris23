   
  var ul=document.getElementById('ul');
  var btn=document.getElementById('button');
  var scoreCard=document.getElementById('scoreCard');
  var quizBox=document.getElementById('questionBox');
  var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');


      var app={
                questions:[
                          {q:'Who is the Executive Secretary of Nigeria?', options:['Adamu Adamu','Boss Mustapha','Muhammed Adamu','Mallam Garki'],answer:2},

                          {q:'Which Organisation oversees management of COVID-19 pandemic Worldwide?',options:['WHO','CDC','NCDC','COVID CDC'],answer:1},
                        
                          {q:'Which continent is Singapore?',options:['Asia','Europe','Americas','Oceania'],answer:1},

                          {q:'What is a common Nigerian politician trait?',options:['Helping Citizens','Humility','Sincerity','Looting'],answer:4},

                          {q:'Who is the National leader of North Korea?',options:['Kim II-sung','Kim Jong-nam','Kim Jong-un','Kim Yo-jong'],answer:3}
                          ],
                index:0,
                load:function(){
                	   if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard();
                        }
                        else{

                        quizBox.innerHTML="Game Over......!!!"      
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        }
                },
                 next:function(){
                    this.index++;
                    this.load();
                 },

                check:function(ele){
                   
                         var id=ele.id.split('');
                         
                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ele.className="correct";
                           ele.innerHTML="Correct";
                         	this.scoreCard();
                         }
                         else{
                         	ele.className="wrong";
                         	ele.innerHTML="Wrong";
                         }

                         
                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },
                score:0,
                scoreCard:function(){
                	scoreCard.innerHTML="Score:"+this.score+"/"+this.questions.length;
                }
 
           }


           window.onload=app.load();

           function button(ele){
           	     app.check(ele);
           	     app.notClickAble();
           }

         function  next(){
              app.next();
              app.clickAble();
         } 



