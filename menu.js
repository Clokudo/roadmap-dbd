<script>
var str="";
var archives=14;
var nom=unescape(location.pathname);
var nom=nom.replace(/\/$/,"");
var nom=nom.replace(".html","");
nom=nom.substring(nom.lastIndexOf("/")+1);
if(nom=="index")
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
document.getElementById("menu").innerHTML = str;
</script>
