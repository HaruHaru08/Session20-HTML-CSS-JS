let number = +prompt("Nhập vào một số bất kỳ: ");
if (number < 0 || isNaN(number)) {
    console.log("không hợp lệ");
} else {
    let count = 0;
    let index = 2;
    while (count < number) {
        let isPrine = true;
        for (let i = 2; i <= Math.sqrt(index); i++) {
            if (index % i === 0) {
                isPrine = false;
                break;
            }
        }
        if (isPrine) {
            console.log(index);
            count++;
        } 
        index++;
    }
}