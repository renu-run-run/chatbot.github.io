function ready() {
    var p1ref = document.getElementById('p1');
    p1ref.innerHTML = "<b>which language ?</b><br><br><button type='button' id='engbtn' onclick='english()'>English</button>  <button type='button' onclick='hindi()' >Hindi</button> <button type='button' >Bengali</button>";
}
function english() {
    var p2ref = document.getElementById('p2');
    p2ref.innerHTML = "<b>which singer ?</b><br><br> <button type='button' id='taylorbtn' onclick='taylor()' >taylor swift</button>  <button type='button' >Katy Perry</button> <button type='button' >Bruno Mars</button>";
}
function hindi() {
    var p2ref = document.getElementById('p2');
    p2ref.innerHTML = "<b>which singer ?</b><br><br> <button type='button' id='taylorbtn' onclick='taylor()' >Shreya Ghoshal</button>  <button type='button' >Sonu Nigam</button> <button type='button' >AR Rehman</button>";
}
function taylor() {
    var p3ref = document.getElementById('p3');
    p3ref.innerHTML = "<b>which album you wanna choose?</b> <br><br> <button type='button' id ='' onclick='folklore()'>folklore</button>  <button type='button' onclick='speak()'>speak now</button> <button type='button' onclick='fearless()'>fearless</button>"

}
function folklore() {
    var divsong = document.getElementById('song');
    divsong.innerHTML = "<table style='text-align: center;'>   <tr> <td> <img id ='songimg' src='s1.jpg'  width='100px' height='100px'/> </td> <td> <img id = 'songimg' src='s2.jpg' width='100px' height='100px' /> </td>  </tr>  <tr> <td><button type='button' id ='songbtn' onclick='folklore()'>cardigan</button> </td> <td><button type='button' id ='songbtn' onclick='folklore()'>Seven</button></td>  </tr> </table>"
}        
               
        
        
           
                
        
        
   
    
        
        
       
   

