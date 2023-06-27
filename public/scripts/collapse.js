function ocultar(a)
{
    ul=a.parentNode.querySelectorAll('ul')[0];
    if(ul.style.display=="none")
    {
        ul.style.display="flex";
    }
    else
    {
        ul.style.display="none";
    }
}
