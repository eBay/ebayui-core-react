import React from 'react'
import ReactDOM from 'react-dom'
import { ui } from 'shaka-player/dist/shaka-player.ui'

import { EbayIcon } from '../index'

export function getElements(onReport = () => {}) {
    // Have to contain in order to not execute until shaka is downloaded
    const Report = class extends ui.Element {
        constructor(parent, controls, text) {
            super(parent, controls)

            const reportButton = (
                <button className="video-player__report-button" onClick={onReport}>
                    <EbayIcon name="reportFlag" />{text}
                </button>
            )

            ReactDOM.render(reportButton, this.parent)
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
