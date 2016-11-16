window.onload = function()
{
    var search = document.getElementById("lookup");
    search.addEventListener("click", function(event)
    {
        event.preventDefault();
        var url ="";
        var took = document.getElementById("country").value;
        var getHTTP = new XMLHttpRequest();
        getHTTP.onreadystatechange = getHTML;
        var recieve = document.getElementById("search");
        if(recieve.checked)
        {
              url = "world.php?all=true";
        }
        else if(took == "")
        {
            alert(took);
            document.getElementById("result").innerHTML = "Enter a text value";
        }
        else
        {
            url = "world.php?country="+document.getElementById("country").value;
        }
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