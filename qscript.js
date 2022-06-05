function solver(){
    var eqn = document.getElementById('equation').value;
   
    var symbols = ["+","-"];
    var numbers = [1,2,3,4,5,6,7,8,,9,0];
    var char_in_eqn = Array.from(eqn);
    var iterate_var;
    var a ="";  
    var b="";
    var c="";
    var start_char=0;
    var sec_star_char=0;
    /*a loop for finding whether the user entered  a negative number at beginning*/
    if(char_in_eqn[0]=="-"){
        a=a+char_in_eqn[0];
        start_char=1;
      
    }
    else{
      start_char=0;
    }
    
for(i=start_char;i<char_in_eqn.length;i++){

    if(char_in_eqn[i] in numbers == true){            
        a=a+char_in_eqn[i];  
        iterate_var=i;
              }
     else{
        
          break;
        }
        
    }
    
     var sec_loop_starter =0;
        
     if(char_in_eqn[iterate_var+4]=="-"){
         
           b = b+char_in_eqn[iterate_var+4];
           
           sec_loop_starter = iterate_var+5;
        }
        else if(char_in_eqn[iterate_var+4]=="+"){
            b=b+"+";
            sec_loop_starter=iterate_var+5;
        }   
        else{
            sec_loop_starter=iterate_var+4;
        }
    for(j=sec_loop_starter;i<char_in_eqn.length;j++){
        
        if(char_in_eqn[j] in numbers == true){
            b=b+char_in_eqn[j];
            sec_star_char=j;
            
        }
        else{
            
            break;
        }

    }
    
    var k=char_in_eqn.length;
    var c="";
    var checker;
    for(var z=0;z<char_in_eqn.length;z++){

        if(char_in_eqn[z]=="="){
            
             checker=z;
        }
        else{
            continue;
        }
    }
        c=eqn.slice(checker+1,char_in_eqn.length);
        
  
  //Type conversion
    var a=Number(a);
    var b=Number(b);
    var c=Number(c);
    c=-1*c;
    
    //applying the formula for quadratic roots
    var f=-b;
    var g=(b*b)-4*a*c;
    if(g<0){
        window.alert("cannot find imaginary roots");
    }
    else{
    var h=(g)**0.5;
    var m=2*a;
    if(g<0){
        window.alert("imaginary will not cannot be displayed");
    }
    else{
        var root= (f+h)/m;
        var another_root = (f-h)/m;
        document.getElementById('final_ans').innerHTML = "one root is "+root ;
        document.getElementById('another').innerHTML ="another root is "+another_root;
        
    }
}

}
