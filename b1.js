let number=+prompt("Nhập một số nguyên bất kỳ:");
let sum=0;
if (number<0|| isNaN(number)===true) {
    alert("Dữ liệu nhập vào không hợp lệ");
}else{
    for (let i = 1; i <=number; i++) {
        sum+=i;
    }
    alert(sum);
}
