const deleteRow = (element) => {
    const row = element.closest('tr');
    const trackingNumber = row.cells[0].innerHTML;
    const baggageListData = JSON.parse(localStorage.getItem('baggageList')) || [];
    const newBaggageListData = baggageListData.filter((data) => data.id !== trackingNumber);
    localStorage.setItem('baggageList', JSON.stringify(newBaggageListData));
    row.remove();
}

document.addEventListener("DOMContentLoaded", () => {
    const baggageList = document.getElementById('baggageList');
    const baggageListData = JSON.parse(localStorage.getItem('baggageList')) || [];
    baggageListData.forEach((data) => {
        const row = baggageList.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        let company = '';
        switch (data.company) {
            case 'japan':
                company = `<a target="_blank" href="https://trackings.post.japanpost.jp/services/srv/search/direct?searchKind=S003&locale=ja&SVID=023&reqCodeNo1=${data.id}">日本郵便</a>`;
                break;
            case 'yamato':
                company = `<a target="_blank" href="https://jizen.kuronekoyamato.co.jp/jizen/servlet/crjz.b.NQ0010?id=${data.id}">ヤマト運輸</a>`;
                break;
            case 'sagawa':
                company = `<a target="_blank" href="https://k2k.sagawa-exp.co.jp/p/web/okurijosearch.do?okurijoNo=${data.id}">佐川急便</a>`;
                break;
            default:
                company = '不明';
                trackURL = data.id;
                break;
        }
        cell1.innerHTML = data.id;
        cell2.innerHTML = company;
        cell3.innerHTML = `<a onclick="deleteRow(this)">削除</a>`;
    });
});
