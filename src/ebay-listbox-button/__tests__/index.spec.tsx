import initStoryshots from "@storybook/addon-storyshots";
import React from "react";
import { render } from "@testing-library/react";

import { EbayListboxButton, EbayListboxButtonOption } from "..";

describe("<EbayListboxButton>", () => {
    describe("a11y prefix", () => {
        const renderListbox = async (listboxBtnLabel?) => {
            const { getByRole, getByText } = await render(
                <>
                    <label id={listboxBtnLabel}>Select these items</label>
                    <br></br>
                    <br></br>
                    <EbayListboxButton value="BB" prefixId={listboxBtnLabel}>
                        <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
                        <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
                        <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
                    </EbayListboxButton>
                </>
            );
            const buttonElement = getByRole("button");
            const expandBtnTextId = getByText("Option 2").id

            return { buttonElement, expandBtnTextId };
        };

        it("should render with correct aria-labelledby if recived prefix id", async () => {
            const listboxBtnLabel = "listbox-button__label";
            const { buttonElement, expandBtnTextId } = await renderListbox(listboxBtnLabel);

            expect(buttonElement).toHaveAttribute("aria-labelledby", `${listboxBtnLabel} ${expandBtnTextId}`);
        });

        it("should render without aria-labelledby if NOT recived prefix id", async () => {
            const { buttonElement } = await renderListbox();

            expect(buttonElement).not.toHaveAttribute("aria-labelledby");
        });
    });
});

initStoryshots({
    config: ({ configure }) =>
        configure(() => {
            require('./index.stories')
        }, module)
})
