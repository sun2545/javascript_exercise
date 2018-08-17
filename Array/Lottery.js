function GetLotto()
    {
      
        var lotto = new Array(6);
       
        var count = 0;
      
        var mFlag = true;
        
        while(count < 6)
        {
           var number;
           
           number = parseInt(Math.random()*45)+1
           
           for(var i=0; i<count; i++)
              if(lotto[i] == number) mFlag = false;
           
           if(mFlag)
           {
                lotto[count] = number;
                count++;
           }
           mFlag = true;
       } 

    
    console.log(lotto[0]+', '+lotto[1]+', '+lotto[2]+', '+lotto[3]+', '+lotto[4]+', '+lotto[5]);
    }

GetLotto();
