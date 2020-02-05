var mainBox = $('#chatWindow');
var userName=$("#userName").html();
var pck={
    'user':userName,
}
//should to be dynamic
var toid;
$.ajax({
    url: "./retriveChat.php",
    type:"post",
    data:pck,
    success:function(responce){
        var data = JSON.parse(responce);
        for(var i=0;i<data.length;i++){
            var time = data[i].dateTime;
            time= time.split(" ");
            if(data[i].from == userName){
                var div = document.createElement('div');
                    div.setAttribute("id","right");
                    div.setAttribute("class","widthSet");
                    var textarea = document.createElement('p');
                        textarea.setAttribute("class","chatmsgright");
                        textarea.innerHTML=data[i].msg;
                        //time and seen update
                    var span=document.createElement("span");
                        span.setAttribute("id","time");
                        span.innerHTML =time[1];
                    div.append(textarea);
                    div.append(span);
                mainBox.append(div);
            }
            else{
                toid = data[i].from;
                var div = document.createElement('div');
                    div.setAttribute("id","left");
                    div.setAttribute("class","widthSet");
                    var textarea = document.createElement('p');
                        textarea.setAttribute("class","chatmsgleft");
                        textarea.innerHTML=data[i].msg;
                    var span=document.createElement("span");
                        span.setAttribute("id","time");
                        span.innerHTML =time[1];
                    div.append(textarea);
                    div.append(span);
                mainBox.append(div);
            }    
        }    
        mainBox.animate({ scrollTop: mainBox.prop('scrollHeight') }, "slow");
        return false; 
    }
});  
//enter key
$('#txtArea').keyup(function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        sendBtn();
    }
});
function modifyToday(str){
    if(parseInt(str) <10){
        return "0"+str;
    }
    else{
        return str;
    }
}
function dateTimeGenrater(){
    var today= new Date();
    var year=modifyToday(today.getFullYear());
    var month=modifyToday(today.getMonth());
    var date=modifyToday(today.getDate());
    var hours=modifyToday(today.getHours());
    var minute=modifyToday(today.getMinutes());
    var sec=modifyToday(today.getSeconds());    
    var Time=year+"-"+month+"-"+date+" "+hours+":"+minute+":"+sec;
    // console.log(Time);
    return Time;
}
function sendBtn(){
    var msg= $('#txtArea').val();

    if(msg != ""){
        var time=dateTimeGenrater();
        time=time.split(" ");
        var div = document.createElement('div');
            div.setAttribute("id","right");
            div.setAttribute("class","widthSet");
            var textarea = document.createElement('p');
                textarea.setAttribute("class","chatmsgright");
                textarea.innerHTML=msg;
            var span=document.createElement("span");
                span.setAttribute("id","time");
                span.innerHTML =time[1];
            div.append(textarea);
            div.append(span);
        mainBox.append(div);

        //dateTime
        var Time= dateTimeGenrater();
        
        var tosend={
            "from":userName,
            //it will work accoding to the window
            "to":toid, 
            "msg":msg,
            "Time":Time,
            "status":"send",
        }

        $.ajax({
            url:"./chatUpdate.php",
            type:"POST",
            data:tosend,
            success:function(responce){
                console.log(responce);
            }
        });

        $('#txtArea').val("");
    }
}
setInterval(function() { 
    $.ajax({
        url: "./retriveChat.php",
        type:"post",
        data:pck,
        success:function(responce){
            var data = JSON.parse(responce);
            var updateRetrive =  document.createElement("div");
            var Time = dateTimeGenrater();  
            for(var i=0;i<data.length;i++){  
                if(data[i].dateTime === Time){
                    if(data[i].from != userName){
                        var time=data[i].dateTime;
                        time=time.split(" ");
                        var div = document.createElement('div');
                            div.setAttribute("id","left");
                            div.setAttribute("class","widthSet");
                            var textarea = document.createElement('p');
                                textarea.setAttribute("class","chatmsgleft");
                                textarea.innerHTML=data[i].msg;
                            var span=document.createElement("span");
                                span.setAttribute("id","time");
                                span.innerHTML =time[1];
                            div.append(textarea);
                            div.append(span);
                        updateRetrive.append(div);
                    }
                }
            }
            if(updateRetrive.children[0]!=undefined){
                mainBox.append(updateRetrive.children[0]);
            }
            mainBox.animate({ scrollTop: mainBox.prop('scrollHeight') }, "slow");
            return false; 
        }
    });
 }, 380);
 