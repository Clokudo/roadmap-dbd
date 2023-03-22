var str="";
var archives=14;
var T01="RÉVEIL";
var T02="JUGEMENT";
var T03="ESCALADE";
var T04="CONVICTION";
var T05="DÉCHAÎNÉ";
var T06="DIVERGENCE";
var T07="ABANDONNÉ";
var T08="LIBÉRATION";
var T09="CRESCENDO";
var T10="SAW";
var T11="DÉVOTION";
var T12="DISCORDANCE";
var T13="MALVEILLANCE";
var T14="TRAHISON";
var nom=unescape(location.pathname);
var nom=nom.replace(/\/$/,"");
var nom=nom.replace(".html","");
var nom=nom.substring(nom.lastIndexOf("/")+1);
if(nom=="index"||nom=="roadmap-dbd")
{
nom=archives;
}
for(var i=1;i<=archives;i++)
{
if(i<10)
{
i="0"+i;
}
str=str+"<a ";
if(i==nom)
{
str=str+"class=\"active\" ";
}
str=str+"href=\"";
if(i<archives)
{
str=str+i+".html\">TOME "+i+"</a>";
}
else
{
str=str+"index.html\">TOME "+i+"</a>";
}
}
document.getElementById("name").innerHTML = "TOME "+nom+" - "+this["T" + nom];
document.getElementById("menu").innerHTML = str;
