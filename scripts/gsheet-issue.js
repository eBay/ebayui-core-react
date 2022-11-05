const { Doc, Row, COLOR_ATTENTION } = require('./gsheet-helpers');

(async () => {
    const [ _, __, issue_title, issue_url ] = process.argv;
    const creds = process.env.GKEY;

    const doc = await Doc(creds);
    const componentsRow = await Row(doc, 'Components');

    const row = await componentsRow.appendRow();

    row.updateCell('Topic', issue_title);
    row.updateCell('Status', 'New!', { textFormat: { foregroundColor: COLOR_ATTENTION } });
    row.updateCell('Link1', `=HYPERLINK("${issue_url}", "GitHub Issue")`);

    await row.saveUpdatedCells();
})()
