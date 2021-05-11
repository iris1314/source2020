//上傳圖片
var uploadimg = function(iurl,idata,ipic,irimg,ifile) {
    var re = /\.(jpg|gif|png|jpge)$/i; //允許的圖片副檔名
    if(!re.test($(ipic).val())){
        alert("上傳檔案格式不符!");
    }else{
        $.ajax({
            type: "POST",
            url: iurl,
            data: new FormData($(idata)[0]),
            contentType: false,
            cache: false,
            processData:false,
            success: function(data) {
                if(data.indexOf(".")>=0){
                    $(irimg).attr("src",data);
                    $(ifile).attr("value",data);
                }else{
                    alert(data.replace("-1",""));
                }
            },
            error: function() {
                alert("上傳失敗!");
            }
        });
    }
    
}
function SetFocus(a,obj,inputstring){
	if(a==1){//onFocus
		if($(obj).val()==inputstring){
			$(obj).val('');
		}
	}else if(a==2){//onFocus 密碼
		if(Trim($(obj).val())==inputstring){
			$(obj).val('');
			if($(obj).attr("type")=="text"){$(obj).attr("type","password");}
		}
	}else if(a==0){//onBlur
		if(Trim($(obj).val())==""){
			if($(obj).attr("type")=="password"){$(obj).attr("type","text");}
			$(obj).val(inputstring);
		}
	}
}

function changetype(obj){
	$(obj).attr("type","text");
}

function Trim(InputString){
	return InputString.replace(/^\s+|\s+$/g, "");//去除字串左右兩邊的空白
}

function focusfield(fieldo,errorstat){
	alert(errorstat);
	fieldo.focus();
}

function multicheck(fieldo) {
	var re = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
	if (!re.test(fieldo))
	{
		return true;
	}
	return false;  
}
function checktype(id,act){
	txt1=id.substr(1,1);
	if(isNaN(txt1)){
		chtxt=checkGreenCard(id);
	}else{
		txt2=id.substr(8,1);
		if(isNaN(txt2)){
			if(act=="n"){
				chtxt=checkForeigner(id);
			}else{
				chtxt=false;	
			}	
		}else{
			chtxt=checkID(id);
		}
	}
	return chtxt;
}
function checkID( id ) {//檢查身分證
	tab = "ABCDEFGHJKLMNPQRSTUVXYWZIO";
	A1 = new Array (1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3 );
	A2 = new Array (0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5 );
	Mx = new Array (9,8,7,6,5,4,3,2,1,1);
	var id=id.toUpperCase();
	if ( id.length != 10 ) return false;
	i = tab.indexOf(id.charAt(0));
	if ( i == -1 ) return false;
	sum = A1[i] + A2[i]*9;

	for ( i=1; i<10; i++ ) {
	v = parseInt( id.charAt(i) );
	if ( isNaN(v) ) return false;
	sum = sum + v * Mx[i];
	}
	if ( sum % 10 != 0 ) return false;
	return true;
}
function checkGreenCard( id ){ //居留證
	tab = "ABCD";
	A1 = new Array ("A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","U","V","X","Y","W","Z","I","O");
	A2 = new Array (10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35);
	A3 = new Array (1,9,8,7,6,5,4,3,2,1);
	A4 = new Array ("0","9","8","7","6","5","4","3","2","1");
	var id=id.toUpperCase();
	if ( id.length != 10 ) return false;
	for (var idi=0;idi<A1.length;idi++){
		if(A1[idi].indexOf(id.charAt(0))>=0){
			i=idi;
			break;
		}
	}
	//i = A1.indexOf( id.charAt(0) );	//檢查第一碼A~Z
	if ( i == -1 ) return false;
	j = tab.indexOf( id.charAt(1) );//檢查第二碼ABCD
	if ( j == -1 ) return false;
	
	var myArr = new Array();		//居留證轉換數字陣列
	myArr[0]=A2[i].toString().substr(0, 1);
	myArr[1]=A2[i].toString().substr(1, 1);
	myArr[2]=A2[j].toString().substr(1, 1);
	for (a=3;a<=9;a++){
		for (var idii=0;idii<A4.length;idii++){
			if(A4[idii].indexOf(id.charAt(a-1))>=0){
				k=idii;
				break;
			}
		}
		//k = A4.indexOf( id.charAt(a-1) );
		if ( k == -1 ) return false;
		myArr[a]=id.charAt(a-1);
	}
	var myArr2 = new Array();
	var totalNum=0;
	for (a=0;a<=9;a++){
		myArr2[a]=(parseInt(myArr[a])*A3[a]).toString().substr((parseInt(myArr[a])*A3[a]).toString().length-1, 1);
		totalNum=totalNum+parseInt(myArr2[a]);
	}
	
	checkNum=totalNum.toString().substr(totalNum.toString().length-1,1);
	if (parseInt(checkNum,10)==0){
		lastNum=0;
	}else{
		lastNum=10-parseInt(checkNum);	
	}
	if( (parseInt(lastNum)).toString()!=id.charAt(9) )	return false;
	return true;
}
function checkOldGreenCard( id ){	//舊版居留證號
	A1 = new Array ("A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","U","V","X","Y","W","Z","I","O");
	A2 = new Array (1,9,8,7,6,5,4,3,2,1);
	A3 = new Array ("0","9","8","7","6","5","4","3","2","1");
	var id=id.toUpperCase();
	if ( id.length != 7 ) return false;
	for (var idi=0;idi<A1.length;idi++){
		if(A1[idi].indexOf(id.charAt(0))>=0){
			i=idi;
			break;
		}
	}
	//i = A1.indexOf( id.charAt(0) );	//檢查第一碼A~Z
	if ( i == -1 ) return false;
	for (a=1;a<=6;a++){
		for (var idii=0;idii<A3.length;idii++){
			if(A3[idii].indexOf(id.charAt(a))>=0){
				k=idii;
				break;
			}
		}
		//k = A3.indexOf(id.charAt(a));
		if ( k == -1 ) return false;
		//myArr[a]=id.charAt(a);
	}
	return true;
}
function checkForeigner( id ){ //西元年月日+英文名前兩碼
	A1 = new Array ("0","9","8","7","6","5","4","3","2","1");
	A2 = new Array ("A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","U","V","X","Y","W","Z","I","O");
	var id=id.toUpperCase();
	if (id.length!= 10 ) return false;
	var myArr = new Array();
	for (a=0;a<=7;a++){//檢查前八碼，數字
		for (var idi=0;idi<A1.length;idi++){
			if(A1[idi].indexOf(id.charAt(a))>=0){
				var k=idi;
				break;
			}
		}
		//k = A1.indexOf( id.charAt(a) );
		if ( k == -1 ) return false;
		myArr[a]=id.charAt(a);
	}
	for (a=8;a<=9;a++){//檢查末兩碼，英文
		for (var idii=0;idii<A2.length;idii++){
			if(A2[idii].indexOf(id.charAt(a))>=0){
				i=idii;
				break;
			}
		}
		//i = A2.indexOf( id.charAt(a) );	
		if ( i == -1 ) return false;
		myArr[a]=id.charAt(a);
	}
	if(!isdate(id.substr(0,4)+"/"+id.substr(4,2)+"/"+id.substr(6,2))){
		return false;
	}
	return true;
}

function isdate(strDate){ //判斷是否為正確日期
   var strSeparator = "/"; //日期分隔符
   var strDateArray;
   var intYear;
   var intMonth;
   var intDay;
   var boolLeapYear;
   
   strDateArray = strDate.split(strSeparator);
   
   if(strDateArray.length!=3) return false;
   
   intYear = parseInt(strDateArray[0],10);
   intMonth = parseInt(strDateArray[1],10);
   intDay = parseInt(strDateArray[2],10);
   
   if(isNaN(intYear)||isNaN(intMonth)||isNaN(intDay)) return false;
   
   if(intMonth>12||intMonth<1) return false;
   
   if((intMonth==1||intMonth==3||intMonth==5||intMonth==7||intMonth==8||intMonth==10||intMonth==12)&&(intDay>31||intDay<1)) return false;
   
   if((intMonth==4||intMonth==6||intMonth==9||intMonth==11)&&(intDay>30||intDay<1)) return false;
   
   if(intMonth==2){
      if(intDay<1) return false;
      
      boolLeapYear = false;
      if((intYear%100)==0){
         if((intYear%400)==0) boolLeapYear = true;
      }
      else{
         if((intYear%4)==0) boolLeapYear = true;
      }
      
      if(boolLeapYear){
         if(intDay>29) return false;
      }
      else{
         if(intDay>28) return false;
      }
   }
   
   return true;
}

function isemail(email){ //判斷email
	var emailRegxp = /[\w-]+@([\w-]+\.)+[\w-]+/; //2009-2-12更正為比較簡單的驗證
	if (emailRegxp.test($(email).val()) != true){
		$(email).focus();
		return true;
	}
	return false; 
}

function isename(names){ //判斷英文名字
	var emailRegxp = /^[a-zA-Z]+ [a-zA-Z]/;
	if (emailRegxp.test(names.val()) != true){
		names.focus();
		return false;
	}
	return true; 
}
// 目前的 西元年分 減去 1991 就是 民國年分
function checkbirthday(dyear,dmonth,dday){ //判斷20-70歲之間
	var nyear=(new Date()).getFullYear()-1911;
	var nbday=padLeft((new Date()).getMonth()+1)+''+padLeft((new Date()).getDate());
	var dbday=padLeft(dmonth)+''+padLeft(dday);
	var chy=parseInt(nyear)-parseInt(dyear);

	if(chy<20){
		return false; 
	}else if(chy>=20 && chy<=70){
		if(parseInt(chy)==20 && parseInt(nbday,10)<parseInt(dbday,10)){
			return false;
		}else if(parseInt(chy)==70 && parseInt(nbday,10)>=parseInt(dbday,10)){
			return false;
		}
	}else if(chy>70){
		return false;
	}
	return true;
}

//older參數，是我要設定的年齡，如想設定未滿18歲，older就設定18
function checkbirthday2(older,dyear,dmonth,dday){ //判斷幾歲
	if(dyear == '' || dmonth == '' || dday == ''){
		return true; //此處回傳 true 代表沒滿18歲
	}else{
		var nyear=(new Date()).getFullYear();
		var nbday=padLeft((new Date()).getMonth()+1)+''+padLeft((new Date()).getDate());
		var dbday=padLeft(dmonth)+''+padLeft(dday);
		var chy=parseInt(nyear,10)-parseInt(dyear,10);
		if(parseInt(chy,10)<parseInt(older,10)){
			return true;
		}else if(parseInt(chy,10)>=parseInt(older,10)){
			if(parseInt(chy,10)==parseInt(older,10) && parseInt(nbday,10)<parseInt(dbday,10)){
				return true; //此處回傳 true 代表沒滿18歲
			}
		}
		return false; //此處回傳 false 代表驗證通過，已滿18
	}
}

function padLeft(str){
	if(parseInt(str)>= 10){
		return str;
	}else{
		return str="0"+str;
	}
}

function chk_Card_rule(card_num)
{
	//若有連續：回傳true；沒有連續：回傳false
	var chkey=1;
	if (card_num.length>1)
	{
		//二碼以上
		var str_now=card_num.substr(0,1);
		var str_next="";
		for(i = 1 ; i < card_num.length ; i++)
		{
			//下一碼不等於前一碼，就代表不連續
			str_next=card_num.substr(i,1);
			if (str_now!=str_next){
				chkey=0;
				break;
			}
		}
	}
	if (chkey==1){
		return true;
	}else{
		return false;
	}
}

$(document).ready(function(){ 
	var IN_ShiftDown = false;
	var IN_CtrlDown = false;
	var IN_Paste = false;
	
	$("input[type='text']").keyup(function(event){
		var charCode = (window.event) ? event.which : event.keyCode;
		if(charCode == 16) //Shift
		{ 
			IN_ShiftDown = false; 
		} 
		else if(charCode == 17) //Ctrl
		{ 
			IN_CtrlDown = false; 
		} 
	});

	$("input[type='text']").keydown(function(event){
		var myCode = (window.event) ? event.which : event.keyCode;
		if(myCode == 16) 
		{ 
			IN_ShiftDown = true; 
		} 
		else if(myCode == 17) 
		{ 
			IN_CtrlDown = true; 
		} 
		//禁用字元清單： ! $ % ^ & ?
        if(IN_ShiftDown)
		{
			if (myCode == 16 || myCode == 49 || myCode == 52 || myCode == 53 || myCode == 54 || myCode == 55 || myCode == 188 || myCode == 190 || myCode == 191 || myCode == 220)
			{
				event.preventDefault();
			}
		}
	});
}); 

function Form_Check(){
	var feeback=true;
	var inputArray=$("input[type='text']");
    inputArray.each(
        function (){
            var input =$(this).val();
            if(!Symbol_Check(input)){
				feeback=false;
				//break;
			}
        }
	)
	return feeback;
}

function Symbol_Check(tVal) 
{ 
    var re = /[\~\`\!$%\^&*()+=?\"<>\/|\\\[\]\{\}\:\;〝〞‘’“”『』「」，‧、：；〈〉﹝﹞？]/; 
	if (tVal.match(re))
	{
		return false;
	}
	return true; 
} 

function toDisabled(n,t)
{
	if(t==1){
		if($("#"+n).attr("href")!=null){
			$("#"+n).attr("href","javascript:void(0)");
			$("#"+n).attr("onclick","");
			$("#"+n).attr("onkeypress","");
		}else{
			$("#"+n).attr("onclick","");
			$("#"+n).attr("onkeypress","");
		}
	}else if(t==0){
		if($("#"+n).attr("href")!=null){
			$("#"+n).attr("href","javascript:void(0)");
			if(n=="form_submit5"){
				$("#"+n).attr("onclick","chdate('Index_CardApply5.asp')");
				$("#"+n).attr("onkeypress","chdate('Index_CardApply5.asp')");
			}else if(n=="form_submit6"){
				$("#"+n).attr("onclick","chdate('Index_CardApply6.asp')");
				$("#"+n).attr("onkeypress","chdate('Index_CardApply6.asp')");
			}else{
				$("#"+n).attr("onclick","chdate()");
				$("#"+n).attr("onkeypress","chdate()");
			}
		}else{
			if(n=="register_btn"){
				$("#"+n).attr("onclick","checkRegister()");
				$("#"+n).attr("onkeypress","checkRegister()");
			}else if(n=="login_btn"){
				$("#"+n).attr("onclick","checkLogin()");
				$("#"+n).attr("onkeypress","checkLogin()");
			}else{
				$("#"+n).attr("onclick","chdate()");
				$("#"+n).attr("onkeypress","chdate()");
			}
		}
	}
}

//日期時間格式化var time1 = new Date().Format("yyyy-MM-dd"); var time2 = new Date().Format("yyyy-MM-dd HH:mm:ss"); 
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
		//"d+": this.getDate(), //日  
        "d+": this.getDate()+1, //日 客製化
        "h+": this.getHours(), //小时 
		//"m+": this.getMinutes(), //分 
        //"s+": this.getSeconds(), //秒
        "m+": "00", //分 客製化
        "s+": "00", //秒 客製化
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

//左邊補N個零
var zeroize = function (value, length) {        
	if (!length) length = 2;        
	value = String(value);          
	for (var i = 0, zeros = ''; i < (length - value.length); i++) {        
		zeros += '0';        
	}        
	return zeros + value;          
};

//判斷是否有選取商品
function checkprod(checkidname,chnum,prodnumname,pcount){
	var prodarray="";
	var truecount=0,falsecount=0;
	$(".cartProdFlower input[id^='"+checkidname+"']").each(function() {
		if($(this).prop('checked')){
			truecount=truecount+1
			if(prodarray!=""){prodarray=prodarray+"|*|"}
			prodarray=prodarray+($(this).val());
		}else{
			falsecount=falsecount+1
		}
	});
						
	if(falsecount==chnum){
		return true
	}else{
		$("#"+prodnumname+pcount).val(prodarray);
		$("#c"+prodnumname+pcount).val(truecount);
		return false
	}
}

//判斷是否為24小時後的時段
function changtime(timetype,cnum){
	var dt = new Date().Format("yyyyMMddhhmmss"); 
	var ct=0;
	if(timetype!="不指定"){
		if(timetype==null){
			chectime="1800";
		}else{
			chectime=(timetype.split("~")[0]).replace(":","");
		}
		ct=$("#orderYear"+cnum).val()+zeroize($("#orderMonth"+cnum).val(),2)+zeroize($("#orderDay"+cnum).val(),2)+chectime+"00";
		if(parseInt(ct,10)-parseInt(dt,10)<0){
			return true
		}else{
			return false
		}
	}else{
		ct=$("#orderYear"+cnum).val()+zeroize($("#orderMonth"+cnum).val(),2)+zeroize($("#orderDay"+cnum).val(),2)+"180000";
		if(parseInt(ct,10)-parseInt(dt,10)<0){
			return true
		}else{
			return false
		}
	}
}

function reloadCAPTCHA(idname) { //重新載入驗證碼圖片
	$(idname).attr("src","CAPTCHA/CAPTCHA_image.asp?"+Date());
}

function showhide(odiv,sts){//顯示或隱藏
	var vobj = $(odiv);
	if(sts==1){
		vobj.show(); 
	}else{  
		vobj.hide(); 
	}
}

//信用卡輸入自動跳欄位
function setBlur(obj,target2) {
	if($(obj).val().length==$(obj).attr('maxlength')){
		$(target2).focus();
	}
	return;
} 

