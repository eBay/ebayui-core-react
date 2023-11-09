/* eslint-disable no-console */
/*
 This script extracts SVG icons from Skin and saves them as React TSX
 */
const { resolve } = require('path');
const { saveIconType, saveIconConstants, saveSvgIcons, parseSVG, parseSVGSymbols, getIconKeys } = require('./update-icons-helpers');

const skinIconsFile = resolve(process.cwd(), 'node_modules/@ebay/skin/dist/svg/icons.svg')
const typesFile = resolve(__dirname, `../src/ebay-icon/types.ts`)
const constFile = resolve(__dirname, `../src/ebay-icon/__tests__/constants.ts`)
const ebaySvgFile = resolve(__dirname, `../src/ebay-svg/svg.tsx`)

const skinSVG = parseSVG(skinIconsFile)

saveSvgIcons(skinSVG, ebaySvgFile)

const skinSVGSymbols = parseSVGSymbols(skinIconsFile)
console.log(`Found ${skinSVGSymbols.length} icons in Skin.`)
const { iconKeys } = getIconKeys(skinSVGSymbols)
saveIconType(iconKeys, typesFile)
saveIconConstants(iconKeys, constFile)
