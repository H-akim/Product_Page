var product_img = document.getElementById("product_img");

var btn = document.getElementsByClassName("btn");

btn[0].onclick = function(){
    product_img.src = "images/image1.png";
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
btn[1].onclick = function(){
    product_img.src = "images/image2.png";
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
btn[2].onclick = function(){
    product_img.src = "images/image3.png";
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}
