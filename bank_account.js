class BankAccount {
  constructor() {
    this.saldo = 0;
  }

  cekSaldo() {
    return this.saldo;
  }

  tambahSaldo() {
    let value = prompt('Masukan jumlah saldo yang akan ditambahkan');

    if (!isNumber(value)) {
      alert('You are not entering a number!');
      return;
    }

    this.saldo += parseInt(value);
  }
}

const bankAccount = new BankAccount();
const tambahSaldoButton = document.getElementById('tambahSaldo');
const kurangiSaldoButton = document.getElementById('kurangiSaldo');

tambahSaldoButton.addEventListener('click', () => {
  bankAccount.tambahSaldo();
  alert(`saldo kamu saat ini : ${bankAccount.cekSaldo()}`);
});

isNumber = (input) => {
  if (isNaN(Number(input))) {
    return false;
  }

  return true;
};

kurangiSaldo = () => {
  let value = prompt('Masukan jumlah saldo yang akan dikurangi');

  if (isNaN(Number(value))) {
    alert('You are not entering a number!');
    return;
  }

  if (parseInt(value) > saldo) {
    alert('Error, Low balance');
    return;
  }

  saldo -= parseInt(value);
  tampilkanSaldo();
};

tampilkanSaldo = () => {
  alert(`Saldo terakhir : ${saldo}`);
};
