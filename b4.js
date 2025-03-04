let str=prompt("Nhập một chuỗi bất kỳ:");
let search=prompt("Nhập ký tự cần tìm kiếm");
for(i=0;i<str.length;i++){
    if(str[i]===search){
        alert("Tồn tại từ cần tìm kiếm");
        break;
    }else{
        alert("Không tồn tại từ cần tìm kiếm");
        break;
    }
}