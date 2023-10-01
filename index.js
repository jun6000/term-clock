#!/usr/bin/env node

import chalkAnimation from "chalk-animation";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const hideCursor = require("hide-terminal-cursor");
hideCursor();

function printTime(args) {
    const [ hours, minutes, seconds ] = args;
    let result = "\n";
    for (let i = 0; i < 6; i++) {
        result += digits[Math.floor(hours / 10)][i] + ' ' + digits[hours % 10][i] + ' ' + colon[i] + ' '
                + digits[Math.floor(minutes / 10)][i] + ' ' + digits[minutes % 10][i] + ' ' + colon[i] + ' '
                + digits[Math.floor(seconds / 10)][i] + ' ' + digits[seconds % 10][i] + '\n';
    };

    chalkAnimation.pulse(result, 0.9);
};

function getTime(format) {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    return [ hours, minutes, seconds ];
};

const colon = [
    "   ",
    "██╗",
    "╚═╝",
    "██╗",
    "╚═╝",
    "   "
];

const digits = [
    [
        "███████╗",
        "██╔══██║",
        "██║  ██║",
        "██║  ██║",
        "███████║",
        "╚══════╝"
    ],
    [
        "     ██╗",
        "     ██║",
        "     ██║",
        "     ██║",
        "     ██║",
        "     ╚═╝"
    ],
    [
        "███████╗",
        "╚════██║",
        "███████║",
        "██╔════╝",
        "███████╗",
        "╚══════╝"
    ],
    [
        "███████╗",
        "╚════██║",
        "███████║",
        "╚════██║",
        "███████║",
        "╚══════╝"
    ],
    [
        "██╗  ██╗",
        "██║  ██║",
        "███████║",
        "╚════██║",
        "     ██║",
        "     ╚═╝"
    ],
    [
        "███████╗",
        "██╔════╝",
        "███████╗",
        "╚════██║",
        "███████║",
        "╚══════╝"
    ],
    [
        "███████╗",
        "██╔════╝",
        "███████╗",
        "██═══██║",
        "███████║",
        "╚══════╝"
    ],
    [
        "███████╗",
        "╚════██║",
        "     ██║",
        "     ██║",
        "     ██║",
        "     ╚═╝"
    ],
    [
        "███████╗",
        "██╔══██║",
        "███████║",
        "██╔══██║",
        "███████║",
        "╚══════╝"
    ],
    [
        "███████╗",
        "██╔══██║",
        "███████║",
        "╚════██║",
        "███████║",
        "╚══════╝"
    ]
];

setInterval(() => {
    console.clear();
    printTime(getTime(0));
}, 1000)
