var N01=new Date(1674662400000);
var N02=new Date(1675872000000);
var N03=new Date(1677081600000);
var N04=new Date(1678892400000);
var CN01=document.getElementById("N01");
var CN02=document.getElementById("N02");
var CN03=document.getElementById("N03");
var CN04=document.getElementById("N04");
var LN01=document.getElementById("LN01");
var LN02=document.getElementById("LN02");
var LN03=document.getElementById("LN03");
var LN04=document.getElementById("LN04");
if(new Date()>N01)
{
$("#N01").show();
CN01.classList.add("active");
LN01.classList.add("show");
}
if(new Date()>N02)
{
$("#N02").show();
CN01.classList.remove("active");
LN01.classList.remove("show");
CN02.classList.add("active");
LN02.classList.add("show");
}
if(new Date()>N03)
{
$("#N03").show();
CN02.classList.remove("active");
LN02.classList.remove("show");
CN03.classList.add("active");
LN03.classList.add("show");
}
if(new Date()>N04)
{
$("#N04").show();
CN03.classList.remove("active");
LN03.classList.remove("show");
CN04.classList.add("active");
LN04.classList.add("show");
}
