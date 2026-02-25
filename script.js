console.log('App Start');

let appName = 'Mini Dashboard';

function showAppName() {
    let version = '1.0';
    console.log(appName);
    console.log(version);
}

showAppName();

const transactions = [
    { id: 1, customer: 'Andi', total: 200000, status: 'paid' },
    { id: 2, customer: 'Budi', total: 150000, status: 'unpaid' },
    { id: 3, customer: 'Citra', total: 300000, status: 'paid' },
];

function renderData(data) {
    const list = document.getElementById('list');
    list.innerHTML = '';

    data.map((item) => {
        const li = document.createElement('li');
        li.innerText = `${item.customer} - Rp ${item.total} - ${item.status}`;
        list.appendChild(li);
    });
}

function filterPaid() {
    const paidTransactions = transactions.filter((item) => item.status === 'paid');
    renderData(paidTransactions);
    calculateTotal(paidTransactions);
}

function filterUnpaid() {
    const unpaidTransactions = transactions.filter((item) => item.status === 'unpaid');
    renderData(unpaidTransactions);
    calculateTotal(unpaidTransactions);
}

function calculateTotal(data) {
    const total = data.reduce((acc, item) => acc + item.total, 0);
    document.getElementById('total').innerText = 'Total: Rp ' + total;
}

document.getElementById('loadBtn').addEventListener('click', function () {
    renderData(transactions);
    calculateTotal(transactions);
});

document.getElementById('filterPaid').addEventListener('click', function () {
    filterPaid();
});

document.getElementById('filterUnpaid').addEventListener('click', function () {
    filterUnpaid();
});

function processTransactions(callback) {
    callback(transactions);
}

processTransactions(function (data) {
    console.log('Data diterima:', data);
});

function fetchTransactions() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if (success) {
                resolve(transactions);
            } else {
                reject('Gagal ambil data');
            }
        }, 2000);
    });
}
