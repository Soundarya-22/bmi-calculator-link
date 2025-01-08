function calculateBMI()
        {
             let weight=document.getElementById("weight").value;
             let height=document.getElementById("height").value;
             let Bmi=(weight)/(height/100)**2;
             document.write("Result:"+Bmi+"<br>");
             if(Bmi<18.5){
                document.write(category="You Are Underweight");
             }
             else if(Bmi>=18.5 && Bmi<=24.9){
                document.write(category="You Are Normal");
             }
             else if(Bmi>24.9){
                document.write(category="You Are OverWeight");
             }
             else{
                document.write(category="You Are Obese");
             }
            }
            