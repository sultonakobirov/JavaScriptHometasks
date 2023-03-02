//task1
let clientFirst = {
   name: "Alex",
   accountNum: 7777,
   balance: 10000  
}
let clientSecond = {
    name: "Tom",
    accountNum: 1201,
    balance: 21000
}
let clientThird = {
    name: "Li",
    accountNum: 8280,
    balance: 4000
}



let promptName = prompt("Введите имя!").toLocaleLowerCase() 
if(promptName === clientFirst.name.toLocaleLowerCase()){
    if(+prompt("Введите номер аккаунта!") === clientFirst.accountNum){
        let money = +prompt("Введите сумму, которую хотите обналичить!")
        if(money <= clientFirst.balance){
            if(money <= clientFirst.balance/2){
                alert(`Ваш баланс: ${clientFirst.balance - (money + money/100*5)}`)
            } else if(money <= clientFirst.balance/100*80){
                alert(`Ваш баланс: ${clientFirst.balance - (money + money/100*3)}`)
            } else if(money > clientFirst.balance/100*80){
                alert(`Ваш баланс: ${clientFirst.balance - money}`)
            }
        }else{
            alert("Недостаточнно средств!")
        }
    } else{
        alert("Неправильный номер аккаунта!")
    }
}else if(promptName === clientSecond.name.toLocaleLowerCase()){
    if(+prompt("Введите номер аккаунта!") === clientSecond.accountNum){
        let money = +prompt("Введите сумму, которую хотите обналичить!")
        if(money <= clientSecond.balance){
            if(money <= clientSecond.balance/2){
                alert(`Ваш баланс: ${clientSecond.balance - (money + money/100*5)}`)
            } else if(money <= clientSecond.balance/100*80){
                alert(`Ваш баланс: ${clientSecond.balance - (money + money/100*3)}`)
            } else if(money > clientSecond.balance/100*80){
                alert(`Ваш баланс: ${clientSecond.balance - money}`)
            }
        }else{
            alert("Недостаточнно средств!")
        }
    } else{
        alert("Неправильный номер аккаунта!")
    }
}else if(promptName === clientThird.name.toLocaleLowerCase()){
    if(+prompt("Введите номер аккаунта!") === clientThird.accountNum){
        let money = +prompt("Введите сумму, которую хотите обналичить!")
        if(money <= clientThird.balance){
            if(money <= clientThird.balance/2){
                alert(`Ваш баланс: ${clientThird.balance - (money + money/100*5)}`)
            } else if(money <= clientThird.balance/100*80){
                alert(`Ваш баланс: ${clientThird.balance - (money + money/100*3)}`)
            } else if(money > clientThird.balance/100*80){
                alert(`Ваш баланс: ${clientThird.balance - money}`)
            }
        }else{
            alert("Недостаточнно средств!")
        }
    } else{
        alert("Неправильный номер аккаунта!")
    }
}else{
    alert("Введён неправильное имя!")
    let conf = confirm("Создать нового пользователя?")
    if(conf == true){
        let newBankAccount = prompt("Введите имя нового пользователя!").toLocaleLowerCase()
        let newUser = {}
        let newAccountNumber = prompt("Введите номер аккаунта нового пользователя!").toLocaleLowerCase()
        let newMoney =+prompt("Введите сумму денег в вашей карте!")
        newUser.name = newBankAccount
        newUser.accountNum = newAccountNumber
        newUser.balance = newMoney

        alert(`Ваше имя: ${newUser.name} Ваш номер аккаунта: ${newUser.accountNum} Ваш баланс: ${newUser.balance}`)
    }else{
        alert("error 501")
    }
}





/* let clients = {
    client: {
        name: "Alex",
        accountNum: 7777,
        balance: 10000  
    },
    client: {
         name: "Tom",
         accountNum: 1201,
         balance: 21000
         
    },
    client: {
         name: "Li",
         accountNum: 8280,
         balance: 4000  
    }
} */


/* let promptName = prompt("Введите имя!").toLocaleLowerCase() 
if(promptName === clients.client.name.toLocaleLowerCase()){
    if(+prompt("Введите номер аккаунта!") === clients.client.accountNum){
        let money = +prompt("Введите сумму, которую хотите обналичить!")
        if(money <= clients.client.balance){
            if(money <= clients.client.balance/2){
                alert(`Ваш баланс: ${clients.client.balance - (money + money/100*5)}`)
            } else if(money <= clients.client.balance/100*80){
                alert(`Ваш баланс: ${clients.client.balance - (money + money/100*3)}`)
            } else if(money > clients.client.balance/100*80){
                alert(`Ваш баланс: ${clients.client.balance - money}`)
            }
        }else{
            alert("Недостаточнно средств!")
        }
    } else{
        alert("Неправильный номер аккаунта!")
    }
}else{

} */