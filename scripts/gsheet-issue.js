const { Doc, Row, COLOR_ATTENTION, devName } = require('./gsheet-helpers');

(async () => {
    const [ _, __, title, url, assigned ] = process.argv;
    const creds = process.env.GKEY;

    const doc = await Doc(creds);
    if (!doc) return;

    const componentsRow = await Row(doc, 'Components');

    const row = await componentsRow.appendRow();

    row.updateCell('Topic', title);
    row.updateCell('Status', 'New!', { textFormat: { foregroundColor: COLOR_ATTENTION } });
    row.updateCell('Link1', `=HYPERLINK("${url}", "GitHub Issue")`);
    row.updateCell('Assigned', devName[assigned] || assigned);

    await row.saveUpdatedCells();
})()
