let number=+prompt("Nhập một số nguyên bất kỳ:");
if(number>=2){
    let check=true;
    for(let i=2;i<=Math.sqrt(number);i++){
        if(number%i==0){
            alert("Không phải số nguyên tố");
            check=false;
            break;
        }
    }
    if(check!==false){
        alert("Là số nguyên tố");
    }
}else{
    alert("Không phải là số nguyên tố");
}
