window.onload = function()
{
    
    // var lookup = document.getElementById("lookup");
    // lookup.addEventListener("click", function(event)
    // {
    //     event.preventDefault();
    //     if()
    // });
    
    
    
    var search = document.getElementById("lookup");
    search.addEventListener("click", function(event)
    {
        event.preventDefault();
        var getHTTP = new XMLHttpRequest();
        getHTTP.onreadystatechange = getHTML;
        var url = "world.php?country="+document.getElementById("country").value;
        getHTTP.open("Get", url);
        getHTTP.send();
        
        function getHTML()
        {
            if(getHTTP.readyState === XMLHttpRequest.DONE)
            {
                if(getHTTP.status === 200)
                {
                    var show = getHTTP.responseText;
                    document.getElementById("result").innerHTML = show;
                }
            }
        }
        
    });
};