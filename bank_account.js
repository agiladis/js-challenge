let saldo = 0

tambahSaldo = () => {
    saldo += parseInt(prompt("Masukan jumlah saldo yang akan ditambahkan"))
    tampilkanSaldo()
}

kurangiSaldo = () => {
    saldo -= parseInt(prompt("Masukan jumlah saldo yang akan ditambahkan"))
    tampilkanSaldo()
}

tampilkanSaldo = () => {
    alert(`Saldo terakhir : ${saldo}`)
}