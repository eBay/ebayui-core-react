import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'
// need that for broken definitions workaround
// @ts-ignore
import { ui } from 'shaka-player/dist/shaka-player.ui'
import { ReportButton } from './reportButton'

export function customControls(onReport = () => {}): { Report } {
    // Have to contain in order to not execute until shaka is downloaded
    // eslint-disable-next-line no-extra-parens
    const Report = class extends (ui.Element as any) {
        constructor(parent, controls, text) {
            super(parent, controls)

            appendChild(parent, <ReportButton>{text}</ReportButton>, button => {
                // have to listen to clicks this way (React onClick will not work):
                this.eventManager.listen(button, 'click', onReport)
            })
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

    return { Report }
}

function appendChild(container: HTMLElement, reactElement: ReactElement, callback: (child: ChildNode) => void): void {
    const tempEl: HTMLElement = document.createElement('div')

    ReactDOM.render(reactElement, tempEl, () => {
        const child = tempEl.firstChild
        container.appendChild(child)
        callback(child)
    })
}
