function lcd(num1, num2){
    for(let i = 1; i < num1 * num2;i++){
        if( i % num1 === 0 && i % num2 === 0){
            console.log(i);
            break
        }
    }
}
lcd(3,4); // 12
