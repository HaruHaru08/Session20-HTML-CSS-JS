let number=prompt("Nhập một số nguyên bất kỳ:");
let number_reverse=number.split("").reverse().join("");
if (number<0|| isNaN(number)===true) {
    alert("Số không hợp lệ");
}else{
   if(number===number_reverse){
    alert("Là số đối xứng");
   }else{
    alert("Không phải số đối xứng");
   }
}