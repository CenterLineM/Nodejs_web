var password= 123456;
var input;
var entry_count= 0;
var entry_limit= 3;
var out_of_limit= false;

while(password!=input && !out_of_limit) {
    entry_count++;
    if(entry_count<=entry_limit){
        input=prompt("請輸入密碼");

    }
    else{
        out_of_limit=true;
    }
}

if(out_of_limit){
    alert("超出輸入次數 ");
}
else{
    alert("登入成功")
}