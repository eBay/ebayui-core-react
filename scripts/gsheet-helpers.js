const { GoogleSpreadsheet } = require("google-spreadsheet");

const SHEET_ID = '1yrqQ1gB80OobCr_Bd_FTaMNbaZ9lwfyy9QnNexvroAY';
//'#e06666'
const COLOR_ATTENTION = {
    "red": 224/255,
    "green": 102/255,
    "blue": 102/255,
    "alpha": 1
};
//'#6aa84f';
const COLOR_DONE = {
    "red": 106/255,
    "green": 168/255,
    "blue": 102/255,
    "alpha": 1
};
//'#999';
const COLOR_DISABLED = {
    "red": 153/255,
    "green": 153/255,
    "blue": 153/255,
    "alpha": 1
};

async function Doc(creds) {
    const doc = new GoogleSpreadsheet(SHEET_ID);

    await doc.useServiceAccountAuth(JSON.parse(creds));
    await doc.loadInfo();

    return doc;
}

async function Row(doc, title) {
    console.log('Open', doc.title);

    const sheet = doc.sheetsByIndex[0];
    await sheet.loadCells();
    await sheet.loadHeaderRow();

    const rows = await sheet.getRows();
    const row = rows.find(({ Topic }) => Topic === title);
    if (!row) {
        console.error(`'${title}' topic not found!`)
        return;
    }
    const index = row.rowNumber-1;

    row.index = index;

    row.appendRow = async () => {
        await sheet.insertDimension('ROWS', {
            startIndex: index + 1,
            endIndex: index + 2
        }, false);

        return row;
    };

    row.getCell = header => {
        return sheet.getCell(index+1, headerIndex(header));
    };

    row.updateCell = (name, value, props={}) => {
        const cell = row.getCell(name);
        cell.value = value;
        Object.entries(props).forEach(([k, v]) => {
            cell[k] = v;
        })
        return cell;
    }

    const headerIndex = header => {
        const index = sheet.headerValues.indexOf(header);
        return index === -1 ? undefined : index;
    };

    row.saveUpdatedCells = () => sheet.saveUpdatedCells();

    return row;
}

module.exports = {
    Doc,
    Row,
    COLOR_DONE,
    COLOR_ATTENTION,
    COLOR_DISABLED,
}
