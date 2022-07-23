/* eslint-disable no-console */
/*
 This script extracts SVG icons from Skin and saves them as React TSX
 */
const { resolve } = require('path');
const { saveIconType, saveIconConstants, saveSvgIcons, skinIcons, iconKeys } = require('./update-icons-helpers');

const skinIconsFile = resolve(process.cwd(), 'node_modules/@ebay/skin/dist/svg/icons.svg')
const typesFile = resolve(__dirname, `../src/ebay-icon/types.ts`)
const constFile = resolve(__dirname, `../src/ebay-icon/__tests__/constants.ts`)
const ebaySvgFile = resolve(__dirname, `../src/ebay-svg/svg.tsx`)

const skinCollection = skinIcons(skinIconsFile);

console.log(`Found ${skinCollection.length} icons in Skin.`)

const keys = iconKeys(skinCollection)

saveIconType(keys, typesFile)
saveIconConstants(keys, constFile)
saveSvgIcons(skinCollection, ebaySvgFile)
