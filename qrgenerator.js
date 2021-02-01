const QRCode = require('qrcode');
const Excel = require('xlsx');

const ws = Excel.readFile("ProductDetails.xlsx").Sheets["Sheet1"];
const data = Excel.utils.sheet_to_json(ws);


const myFunc = async () => {
    return new Promise((res, rej) => {
        data.map(ele => {
            console.log(ele,"eleee")
            QRCode.toFile(
                ele.ProductName + ".png",
                JSON.stringify([ele]),
                () => {
                    res(true);
                    console.log('callback')
                }
            )
        })

    });
}


(async () => {
    await myFunc()
})()
console.log('almost done');

