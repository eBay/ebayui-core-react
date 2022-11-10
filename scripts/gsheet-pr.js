const { Doc, Row, COLOR_ATTENTION, COLOR_DONE, COLOR_DISABLED, devName } = require('./gsheet-helpers');

const stateColors = {
    open: COLOR_ATTENTION,
    review: COLOR_DONE,
    merged: COLOR_DONE,
    closed: COLOR_DONE,
    draft: COLOR_DISABLED,
};

(async () => {
    const [ _, __, title, url, state, merged, draft, review, assigned ] = process.argv;
    const creds = process.env.GKEY;

    const prState = finalState(state, merged, draft, review);
    const stateColor = stateColors[prState];

    const doc = await Doc(creds);
    if (!doc) return;

    const componentsRow = await Row(doc, 'Components');

    const row = await componentsRow.appendRow();

    row.updateCell('Topic', title);
    row.updateCell('Status', prState, stateColor ? { textFormat: { foregroundColor: stateColor } } : {});
    row.updateCell('Link1', `=HYPERLINK("${url}", "GitHub PR")`);
    row.updateCell('Assigned', assigned.split(', ').map(login => devName[login] || login).join(', '));

    await row.saveUpdatedCells();
})()

function finalState(state, merged, draft, review) {
    if (merged === 'true') return 'merged';
    if (state === 'closed') return 'closed';
    if (draft === 'true') return 'draft';
    if (review !== '') return 'review';
    return state;
}
