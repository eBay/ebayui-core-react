import React from 'react'
import { Meta, StoryFn } from "@storybook/react";
import { EbayAvatar } from "../index";

const meta: Meta<typeof EbayAvatar> = {
    title: "graphics & icons/ebay-avatar",
    component: EbayAvatar,

    argTypes: {
        color: {
            options: [
                "teal",
                "light-teal",
                "green",
                "lime",
                "yellow",
                "orange",
                "magenta",
                "pink",
            ],
            table: {
                defaultValue: {
                    summary: "teal",
                },
            },
            control: { type: 'select'},
            description:
                "The color to color the background. This can be only used in the non icon/image case. This is used simply as an override to the username hash",
        },
        size: {
            options: ["32", "40", "48", "56", "64", "96", "128"],
            table: {
                defaultValue: {
                    summary: "48",
                },
            },
            control: { type: 'select'},

            description:
                "The pixel size of the avatar. Can only be specific sizes",
        },
        username: {
            description:
                "The username to display. If there is no body, then this will deternmine what the content is. If there is no username passed, then user is signed out. Based on the username, the icon will change colors and show the first letter if there is no user profile pic.",
        },
    },
};

export default meta;

export const Default: StoryFn<typeof EbayAvatar> = (args) => (
    <EbayAvatar {...args} aria-label="Signed in as Elizabeth" username={args.username || 'Elizabeth'} />
)

export const WithImage: StoryFn<typeof EbayAvatar> = (args) => (
    <EbayAvatar {...args} aria-label="Signed in as Elizabeth" username={args.username || 'Elizabeth'}>
        <img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png" alt="my photo" />
    </EbayAvatar>
)

export const SignedOut: StoryFn<typeof EbayAvatar> = (args) => (
    <EbayAvatar {...args} aria-label="Signed out" />
)

export const WithCustomBody: StoryFn<typeof EbayAvatar> = (args) => (
    <EbayAvatar {...args} aria-label="Signed in as Elizabeth" username={args.username || 'Elizabeth'}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', color: 'white', backgroundColor: 'black' }}>
            <span>EB</span>
        </div>
    </EbayAvatar>
)

