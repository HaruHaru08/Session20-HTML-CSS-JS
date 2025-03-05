let num = +prompt("Nhập vào một số nguyên bất kỳ: ");
if (num < 0 || isNaN(num)) {
    console.log("không hợp lệ");
} else {
    let count = 0;
    let index = 2;
    while (count < num) {
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