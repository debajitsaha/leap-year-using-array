function display()
{
    var i=document.getElementById('start').value
    var n=document.getElementById('end').value
    var array=[];
    for(r=i;r<=n;r++)
    {
        if(((r % 4 == 0) && (r % 100!= 0)) || (r%400 == 0))
        {
            var a=array.push(r)
        }

    }
    document.getElementById('result').innerHTML=array.join("--") 
}