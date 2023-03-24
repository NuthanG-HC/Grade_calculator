
function myFunction(){
    let english = document.querySelectorAll('.input')
    let totalMarks =0;
    let avgMarks ;
    let grade;
    let flag = false;
   for(let i=0;i<english.length;i++){
    if((english[i].value) <0 || (english[i].value) >100){
        alert('Please Enter the value in range of 100','OKay');
        return;
    }
    if(english[i].value =="") english[i].value = 0
    if(parseInt(english[i].value) == 0 || parseInt(english[i].value)<=35) {
        flag=true;
        grade='F'
    } 
    totalMarks+= parseInt(english[i].value)
   }
   document.getElementById('total').innerHTML = (totalMarks)
   avgMarks = (totalMarks/500)*100
   document.getElementById('avg').innerHTML =(avgMarks)
   if(!flag){
   if(avgMarks >=90) grade = "A"
   else if(avgMarks>= 80 && avgMarks<=89) grade='B'
   else if(avgMarks>= 70 && avgMarks<=79) grade='C'
   else if(avgMarks>= 60 && avgMarks<=69) grade='D'
   else grade='F'
   }
   document.getElementById('grade').innerHTML = (grade)
}