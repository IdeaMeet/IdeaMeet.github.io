window.onload = function() 
{
    var now = new Date();
    var reg = /^\s*([1-9]\d{3})\-(\d{1,2})\-(\d{1,2})\s*$/;
    var _start1 = "2019-01-10";
    if (
        !reg.test(_start1)
        ||
        !reg.test(_end1)
       ) 
    {
        throw new Error("Date Format Is Error !");
        return;
    }
    var start1 = new Date(_start1.replace(reg, "$1"), parseInt(_start1.replace(reg, "$2")) - 1, _start1.replace(reg, "$3"));
    document.getElementById("start2").innerHTML = Math.round((now - start1)/(1000*60*60*24));
}
