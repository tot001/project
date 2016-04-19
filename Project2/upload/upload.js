function check ()
	{
		 var nameid=new Array("id_title","id_zhao_ping","id_jing_er","id_di_zhi","id_jie_suan","id_shi_jian","id_shi_jian2","id_lxfs","id_jian_jie");
             for (var i = 0; i < nameid.length; i++) {
            var nameValue=window.document.getElementById(nameid[i]).value;  
            };
		if(nameValue == "")
		{
			
			return false;
		}
		return false;
		
	}