/*提供摺疊隱藏區塊*/
function switchmenu(obj,menu,main)
{
	if( document.getElementById )
	{
		var el=document.getElementById(obj);
		var em=document.getElementById(menu);
		
		if(el.style.display!="block")
		{
			el.style.display = "block";
			em.style.background = ogif;
		}
		else
		{
			el.style.display = "none";
			em.style.background = cgif;
		}
	}
}