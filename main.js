 name_array=[];
function submit(){
    var name1=document.getElementById("student1").value;
    var name2=document.getElementById("student2").value;
    var name3=document.getElementById("student3").value; 
    var name4=document.getElementById("student4").value;
    name_array.push(name1);
    name_array.push(name2);
    name_array.push(name3);
    name_array.push(name4);
    console.log(name_array);
    document.getElementById("display_name").innerHTML=name_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    name_array.sort();
 console.log(name_array);
    document.getElementById("display_name").innerHTML=name_array;
}