// パラメーターを取得
const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);

// idがなかったらリダイレクト
if(!params.get('id')){location.href = 'index.html';}

let trackingNumber = params.get('id');
if (!/^[0-9-]+$/.test(trackingNumber)) {
    location.href = 'index.html';
} else {
    trackingNumber = trackingNumber.replace(/-/g, '');
}
if(params.get('type')){
    switch(params.get('type')){
        case 'japan':
            location.href = `https://trackings.post.japanpost.jp/services/srv/search/direct?searchKind=S003&locale=ja&SVID=023&reqCodeNo1=${trackingNumber}`;
            break;
        case 'yamato':
            location.href = `https://jizen.kuronekoyamato.co.jp/jizen/servlet/crjz.b.NQ0010?id=${trackingNumber}`;
            break;
        case 'sagawa':
            location.href = `https://k2k.sagawa-exp.co.jp/p/web/okurijosearch.do?okurijoNo=${trackingNumber}`;
            break;
        default:
            location.href = 'index.html';
            break;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const trackingNumberElement = document.getElementById('trackingNumber');
    trackingNumberElement.innerHTML = trackingNumber;

    const japanLink = document.getElementById('japanLink');
    const yamatoLink = document.getElementById('yamatoLink');
    const sagawaLink = document.getElementById('sagawaLink');

    japanLink.href = `https://trackings.post.japanpost.jp/services/srv/search/direct?searchKind=S003&locale=ja&SVID=023&reqCodeNo1=${trackingNumber}`;
    yamatoLink.href = `https://jizen.kuronekoyamato.co.jp/jizen/servlet/crjz.b.NQ0010?id=${trackingNumber}`;
    sagawaLink.href = `https://k2k.sagawa-exp.co.jp/p/web/okurijosearch.do?okurijoNo=${trackingNumber}`;

    // ここから受取追加機能
    const baggageAddCompany = document.getElementById('baggageAddCompany');
    const baggageAdd = document.getElementById('baggageAdd');

    baggageAdd.addEventListener('click', () => {
        const baggageList = JSON.parse(localStorage.getItem('baggageList')) || [];
        baggageList.push({ id: trackingNumber, company: baggageAddCompany.value });
        localStorage.setItem('baggageList', JSON.stringify(baggageList));

        location.href = 'index.html';
    });
})
