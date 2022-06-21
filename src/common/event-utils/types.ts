type ModifierKeys = 'Alt' | 'AltGraph' | 'Control' | 'Shift' | 'CapsLock' | 'Meta'
// | 'Fn' | 'FnLock' | 'Hyper' | 'NumLock' | 'ScrollLock' | 'Super' | 'Symbol' | 'SymbolLock'
type NavigationKeys = 'ArrowDown' | 'ArrowLeft' | 'ArrowRight' | 'ArrowUp' | 'Enter' | 'Tab' | ' ' | 'Escape'
    | 'End' | 'Home' | 'PageDown' | 'PageUp'
type NavigationKeysEdge = 'Down' | 'Left' | 'Right' | 'Up' | 'Esc'
// type FunctionKeys = 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' | 'F10' | 'F11' | 'F12' |
// 'F13' | 'F14' | 'F15' | 'F16' | 'F17' | 'F18' | 'F19' | 'F20' | 'Soft1' | 'Soft2' | 'Soft3' | 'Soft4'
// type NumericKeypadKeys = 'Decimal' | 'Key11' | 'Key12' | 'Multiply' | 'Add' | 'Clear' | 'Divide' | 'Subtract' |
// 'Separator' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

export type Key = ModifierKeys | NavigationKeys | NavigationKeysEdge
