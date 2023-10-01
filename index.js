#!/usr/bin/env node

function printDigits(inputs) {
    result = "\n\n";
    for (let j = 0; j < 6; j++) {
        for (let i = 0; i < inputs.length; i++) {
            result += digits[inputs[i]][j] + " ";
        };
        result += "\n";
    };

    console.log(result);
};

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

// console.log(new Date().toLocaleTimeString("en-US", { hour12: true }));
printDigits([1, 2, 3]);
