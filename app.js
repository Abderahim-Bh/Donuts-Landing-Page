let myDiv1 = document.getElementById("div1Id"),
    myDiv2 = document.getElementById("div2Id"),
    myDiv3 = document.getElementById("div3Id"),
    myImgg = document.getElementById("imggId");


myDiv1.addEventListener("click",function(){

    myImgg.setAttribute("src","bdedd4dd7bd4e05a090ea545467034ba9f0f5267.png");
    

});
myDiv2.addEventListener("click",function(){

    myImgg.setAttribute("src","donut.png");
    
});
myDiv3.addEventListener("click",function(){

    myImgg.setAttribute("src","donutT.png");
        
});