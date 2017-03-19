$(document).ready(function() {
	var data =[];
    	$("#butn").click(function(){
    var a = parseInt($("#a").val());
    		var w= document.createElement("p");
    		w.innerHTML = a;           
        	$("#l").append(w); 
        	data.push(a);
    	});
    	$("#btn").click(function(){
    	var i,j;
    	var k,kk;
    	var b = parseInt($("#b").val()); 
    		var w= document.createElement("p");
    		w.innerHTML = b;           
     $("#o").append(w); 
 	for(i=0;i<data.length;i++)
	{
		k=data[i];
			kk=k+b;
			if(kk>=100)
			{
			var w= document.createElement("p");
    		w.innerHTML = kk;           
        	$("#y").append(k+"+"+b+"="+kk+"<br>"); 
        	kk=0;
			}
	}
    	});




});