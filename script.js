 class Game{
        // is creating Random numbers from a to b
        static Rand(a,b){
            return Math.floor(Math.random()*(b-a+1)+a);
        }


        //is checking that created numbers are not already existing
        static MakingTheRand(){

        var sum = "";
        for (var i=0;i<4;i++){

            do{
                var num = Game.Rand(0,9);
            }
            while(sum.indexOf(num)>=0);
            sum += num; 
           
        }
        return sum;
        
        }
        
        //analizing cows & bulls
        static Analize(make,attempt){
        Game.bulls =0;
        Game.cows = 0;
        for (var i=0;i<4;i++)
        {
            if(make[i]==attempt[i])
            {
                Game.bulls++;
            }
            else if(make.indexOf(attempt[i])>=0){
                Game.cows++;
            }
            }
        }

        // onclick handler
        static handler(){
            var btn1 = document.getElementById("ask");
            btn1.addEventListener("click",Game.Start);
        }
        //start a new game method
        static StartNew(){
                    counter = 0;
                    Game.bulls = 0;
                    Game.cows = 0;
                   
                    m = Game.MakingTheRand();
                    Game.handler();
                   
        }

        //start a new game button handler
        static startNewHandler(){
           var NewGame =  document.getElementById("startNewGame");
         NewGame.addEventListener("click",Game.StartNew)
        } 


        // Start playing method
       static Start (){
           var input1 = document.getElementById("input1");
           var input2 = document.getElementById("input2");
           var answer = document.getElementById("answer");
            
                    
           
            
                var c = input2.value;
                if( c.length != 4)
                {
                    alert("Number is not valid");
                }
                else{
                    Game.Analize(m,c);
                    if(counter >=10){
                     var btn2 = document.getElementById("startNewGame");
                     alert("You lose,the Number was "+m+".Press 'Start New Game' Button") ;
                     answer.innerHTML = "<p>Computer`s Answer</p>";
                     input2.value = "";
                     btn2.style.display = "block";
                    }
                    else{
                        var s =  ` Bulls = ${Game.bulls} Cows = ${Game.cows} `;
                    if(c == m){
                        alert("You Win!!!");
                        b = m;
                    };
                    answer.innerHTML += `${c} ${s}`;
                    c = "";
                    console.log(`${m} ${c} ${s}`);
                    console.log(counter)
                    counter++;
                    
                }
              }  
           
    }
    }

                    var counter = 0;
                    Game.bulls = 0;
                    Game.cows = 0;
                    var m = Game.MakingTheRand();
                    Game.handler();
                    Game.startNewHandler();
                    

function Help(){
    $(".tog-btn").click(function(){
         $(".help").fadeToggle(1000);
    })  
}

Help();