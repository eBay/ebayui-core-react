import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import { ui } from 'shaka-player/dist/shaka-player.ui'
import { ReportButton } from './reportButton'

export function customControls(onReport = () => {}): { Report, TextSelection } {
    // Have to contain in order to not execute until shaka is downloaded
    const Report = class extends ui.Element {
        constructor(parent, controls, text) {
            super(parent, controls)

            appendChild(this.parent, <ReportButton onReport={onReport}>{text}</ReportButton>)
        }
    }

    Report.Factory = class {
        private readonly reportText: string

        constructor(reportText) {
            this.reportText = reportText
        }

        create(rootElement, controls) {
            return new Report(rootElement, controls, this.reportText)
        }
    }

    const TextSelection = ui.TextSelection

    TextSelection.Factory = class {
        /** @override */
        // eslint-disable-next-line class-methods-use-this
        create(rootElement, controls) {
            return new ui.TextSelection(rootElement, controls)
        }
    }

    return { Report, TextSelection }
}

function appendChild(container: HTMLElement, reactElement: ReactElement): void {
    const tempEl: HTMLElement = document.createElement('div')
    ReactDOM.render(reactElement, tempEl)

    container.appendChild(tempEl.firstChild)
}
