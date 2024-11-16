"use strict";
const _0x37f1e4 = _0x8544;
(function (_0x41f36e, _0x304225) {
    const _0x237557 = _0x8544,
        _0x4a0086 = _0x41f36e();
    while (!![]) {
        try {
            const _0x2d0256 =
                (parseInt(_0x237557(0x19e)) / 0x1) *
                    (-parseInt(_0x237557(0x17b)) / 0x2) +
                (parseInt(_0x237557(0x16f)) / 0x3) *
                    (-parseInt(_0x237557(0x1b2)) / 0x4) +
                (parseInt(_0x237557(0x1a5)) / 0x5) *
                    (parseInt(_0x237557(0x18e)) / 0x6) +
                (parseInt(_0x237557(0x180)) / 0x7) *
                    (parseInt(_0x237557(0x18d)) / 0x8) +
                -parseInt(_0x237557(0x1de)) / 0x9 +
                (-parseInt(_0x237557(0x1bd)) / 0xa) *
                    (parseInt(_0x237557(0x1c2)) / 0xb) +
                (parseInt(_0x237557(0x186)) / 0xc) *
                    (parseInt(_0x237557(0x1d7)) / 0xd);
            if (_0x2d0256 === _0x304225) break;
            else _0x4a0086["push"](_0x4a0086["shift"]());
        } catch (_0x4aea61) {
            _0x4a0086["push"](_0x4a0086["shift"]());
        }
    }
})(_0x28c9, 0x65ebe);
const supabaseUrl = _0x37f1e4(0x1da),
    supabaseKey = _0x37f1e4(0x1ce),
    database = supabase["createClient"](supabaseUrl, supabaseKey);
function _0x8544(_0x52891f, _0x276d26) {
    const _0x28c97e = _0x28c9();
    return (
        (_0x8544 = function (_0x8544d3, _0xa231df) {
            _0x8544d3 = _0x8544d3 - 0x166;
            let _0x11bdb4 = _0x28c97e[_0x8544d3];
            return _0x11bdb4;
        }),
        _0x8544(_0x52891f, _0x276d26)
    );
}
async function fetchQuestions() {
    const _0x3518f3 = _0x37f1e4;
    let { data: _0x3eabcd, error: _0x16c98a } = await database[
        _0x3518f3(0x17a)
    ](_0x3518f3(0x1e0))
        [_0x3518f3(0x1c5)]("*")
        [_0x3518f3(0x1d4)]("id", { ascending: !![] });
    if (_0x16c98a) {
        console["error"]("Error\x20fetching\x20question\x20data:", _0x16c98a);
        return;
    }
    let { data: _0x33e4c4, error: _0x5cfb01 } = await database[
        _0x3518f3(0x17a)
    ](_0x3518f3(0x1a3))["select"]("*");
    if (_0x5cfb01) {
        console[_0x3518f3(0x1a8)](_0x3518f3(0x171), _0x5cfb01);
        return;
    }
    let _0x4496ca = document[_0x3518f3(0x1ca)](_0x3518f3(0x1b4)),
        _0x5dc481 = document[_0x3518f3(0x1ca)]("questionsWrapper"),
        _0x2b012e = document[_0x3518f3(0x1ca)](_0x3518f3(0x185)),
        _0x2f7d53 = document[_0x3518f3(0x1aa)](_0x3518f3(0x1e6)),
        _0x58cca5 = document["getElementById"](_0x3518f3(0x166));
    document["getElementById"](_0x3518f3(0x168))[_0x3518f3(0x1ba)](
        _0x3518f3(0x1d3),
        function () {
            const _0x53582b = _0x3518f3;
            for (let _0x11b80a of _0x2f7d53) {
                _0x11b80a[_0x53582b(0x1b3)][_0x53582b(0x1c7)] =
                    _0x53582b(0x189);
            }
            (_0x4496ca[_0x53582b(0x1b3)][_0x53582b(0x1c7)] = _0x53582b(0x189)),
                (_0x5dc481[_0x53582b(0x1b3)][_0x53582b(0x1c7)] = "flex"),
                _0xa80ecf(_0x5d6031);
        }
    );
    let _0x5d6031 = 0x0,
        _0x110323 = document["querySelectorAll"](_0x3518f3(0x1c3));
    _0x110323[_0x3518f3(0x1b6)]((_0x555d70) => {
        const _0x19d8e7 = _0x3518f3;
        _0x555d70[_0x19d8e7(0x1ba)]("click", function () {
            const _0x30cab3 = _0x19d8e7;
            _0x110323[_0x30cab3(0x1b6)]((_0x405b6a) => {
                const _0xf090a1 = _0x30cab3;
                _0x405b6a[_0xf090a1(0x17d)][_0xf090a1(0x1ad)](_0xf090a1(0x1a6));
            }),
                this[_0x30cab3(0x17d)][_0x30cab3(0x191)](_0x30cab3(0x1a6)),
                (_0x500919[_0x30cab3(0x1b3)][_0x30cab3(0x1c7)] =
                    _0x30cab3(0x1be)),
                (_0x5dcea2[_0x30cab3(0x1b3)]["display"] = "flex"),
                _0x245794(_0x5d6031 + 0x1);
        });
    });
    let _0x49e149 = [],
        _0x3ded49,
        _0x500919 = document[_0x3518f3(0x1ca)]("next");
    _0x500919[_0x3518f3(0x1ba)](_0x3518f3(0x1d3), function () {
        const _0x5d8d65 = _0x3518f3;
        (_0x500919[_0x5d8d65(0x1b3)][_0x5d8d65(0x1c7)] = _0x5d8d65(0x189)),
            (_0x5dcea2[_0x5d8d65(0x1b3)][_0x5d8d65(0x1c7)] = _0x5d8d65(0x189)),
            _0x110323[_0x5d8d65(0x1b6)]((_0x3081db) => {
                const _0x300212 = _0x5d8d65;
                if (_0x3081db[_0x300212(0x17d)][_0x300212(0x1d9)]("clicked")) {
                    let _0x333666 = parseInt(_0x3081db["id"]);
                    _0x49e149[_0x300212(0x1af)](_0x333666),
                        console["log"](_0x49e149),
                        _0x57e5c4[_0x300212(0x18b)] ==
                            "How\x20many\x20lines\x20do\x20you\x20need?" &&
                            ((_0x3ded49 = parseInt(_0x3081db["innerHTML"])),
                            console[_0x300212(0x1a7)](_0x3ded49));
                }
                _0x3081db[_0x300212(0x17d)][_0x300212(0x1ad)](_0x300212(0x1a6));
            }),
            _0x5d6031++,
            _0xa80ecf(_0x5d6031);
    });
    let _0x5dcea2 = document["getElementById"](_0x3518f3(0x16b));
    _0x5dcea2[_0x3518f3(0x1ba)]("click", function () {
        const _0x99142b = _0x3518f3;
        (_0x500919[_0x99142b(0x1b3)][_0x99142b(0x1c7)] = _0x99142b(0x189)),
            (_0x5dcea2[_0x99142b(0x1b3)]["display"] = _0x99142b(0x189)),
            _0x110323[_0x99142b(0x1b6)]((_0x26f5dc) =>
                _0x26f5dc[_0x99142b(0x17d)][_0x99142b(0x1ad)](_0x99142b(0x1a6))
            ),
            (_0x5d6031 = 0x0),
            (_0x49e149 = []),
            _0xa80ecf(_0x5d6031),
            _0x245794(_0x5d6031);
    });
    let _0x4f61fd = document[_0x3518f3(0x1ca)]("1"),
        _0x522de4 = document[_0x3518f3(0x1ca)]("2"),
        _0xd38d85 = document[_0x3518f3(0x1ca)]("3"),
        _0x5e7b10 = document["getElementById"]("4"),
        _0x39e395 = document["getElementById"](_0x3518f3(0x1d1)),
        _0x57e5c4 = document[_0x3518f3(0x1ca)](_0x3518f3(0x1cd)),
        _0x1f3e33 = document[_0x3518f3(0x1bb)]("#questionSVG\x20svg"),
        _0xa4b569 = document[_0x3518f3(0x1ca)](_0x3518f3(0x188)),
        _0x4039cd = document[_0x3518f3(0x1ca)](_0x3518f3(0x1c4)),
        _0x338dca = document["getElementById"](_0x3518f3(0x18f)),
        _0x419a7d = document["querySelector"](_0x3518f3(0x196));
    _0x1f3e33[_0x3518f3(0x1ba)](
        _0x3518f3(0x1d3),
        () => (_0xa4b569[_0x3518f3(0x1b3)][_0x3518f3(0x1c7)] = _0x3518f3(0x1be))
    ),
        _0x419a7d["addEventListener"](
            _0x3518f3(0x1d3),
            () => (_0xa4b569["style"][_0x3518f3(0x1c7)] = _0x3518f3(0x189))
        );
    function _0xa80ecf(_0x449df3) {
        const _0x3bf64a = _0x3518f3;
        console[_0x3bf64a(0x1a7)](_0x3bf64a(0x19d) + _0x449df3),
            _0x3eabcd["length"] < _0x449df3 + 0x1
                ? ((_0x5dc481[_0x3bf64a(0x1b3)][_0x3bf64a(0x1c7)] = "none"),
                  (_0x2b012e[_0x3bf64a(0x1b3)][_0x3bf64a(0x1c7)] = "flex"),
                  (planHead[_0x3bf64a(0x1b3)][_0x3bf64a(0x1c7)] =
                      _0x3bf64a(0x176)),
                  (_0x58cca5["style"][_0x3bf64a(0x1c7)] = "block"),
                  _0x1af494(_0x33e4c4),
                  localStorage["setItem"](
                      _0x3bf64a(0x190),
                      JSON[_0x3bf64a(0x192)](_0x49e149)
                  ),
                  console[_0x3bf64a(0x1a7)](
                      localStorage[_0x3bf64a(0x167)]("previousAnswers")
                  ))
                : ((_0x39e395[_0x3bf64a(0x18b)] =
                      _0x3bf64a(0x1b1) + (_0x449df3 + 0x1)),
                  (_0x57e5c4["innerHTML"] = _0x3eabcd[_0x449df3]["question"]),
                  (_0x4f61fd["innerHTML"] = _0x3eabcd[_0x449df3]["a1"]),
                  (_0x522de4["innerHTML"] = _0x3eabcd[_0x449df3]["a2"]),
                  (_0xd38d85[_0x3bf64a(0x18b)] = _0x3eabcd[_0x449df3]["a3"]),
                  (_0x5e7b10[_0x3bf64a(0x18b)] = _0x3eabcd[_0x449df3]["a4"]),
                  (_0x338dca[_0x3bf64a(0x18b)] =
                      _0x3eabcd[_0x449df3][_0x3bf64a(0x198)]),
                  (_0x4039cd["innerHTML"] = _0x3eabcd[_0x449df3]["info"]));
    }
    let _0x3f0f12 = document["getElementById"](_0x3518f3(0x178));
    function _0x245794(_0x65b56e) {
        const _0x5805fe = _0x3518f3;
        let _0x485ed4 = 0x64 / _0x3eabcd["length"];
        _0x3f0f12["style"][_0x5805fe(0x1ae)] = _0x65b56e * _0x485ed4 + "%";
    }
    let _0x5c85db = document["getElementById"]("recommendedPlans"),
        _0x2b43fa = document[_0x3518f3(0x182)](_0x3518f3(0x1d8));
    _0x2b43fa["forEach"]((_0xd70b54) => {
        const _0x2d8a2b = _0x3518f3;
        _0xd70b54[_0x2d8a2b(0x1ba)](_0x2d8a2b(0x1d3), function () {
            const _0x30107d = _0x2d8a2b;
            _0x2b43fa["forEach"]((_0x1bb3c1) => {
                const _0x24737b = _0x8544;
                _0x1bb3c1[_0x24737b(0x17d)][_0x24737b(0x1ad)](_0x24737b(0x1e2));
            }),
                this[_0x30107d(0x17d)]["add"](_0x30107d(0x1e2)),
                _0x24c7d8(this["id"]);
        });
    });
    function _0x24c7d8(_0x2ef259) {
        const _0x25d3a1 = _0x3518f3;
        _0x13df5b = 0x1;
        _0x2ef259 == _0x25d3a1(0x181) && _0x1af494(_0x33e4c4);
        if (_0x2ef259 == _0x25d3a1(0x1d5)) {
            let _0x58665f = [];
            for (let _0x1db6e0 of _0x33e4c4) {
                (_0x1db6e0[_0x25d3a1(0x172)]["includes"]("Verizon") ||
                    _0x1db6e0[_0x25d3a1(0x172)]["includes"](
                        _0x25d3a1(0x1dc)
                    )) &&
                    _0x58665f[_0x25d3a1(0x1af)](_0x1db6e0);
            }
            _0x1af494(_0x58665f);
        }
        if (_0x2ef259 == _0x25d3a1(0x1d6)) {
            let _0x500547 = [];
            for (let _0x593f4b of _0x33e4c4) {
                (_0x593f4b[_0x25d3a1(0x172)][_0x25d3a1(0x1e1)](
                    _0x25d3a1(0x1cb)
                ) ||
                    _0x593f4b[_0x25d3a1(0x172)][_0x25d3a1(0x1e1)](
                        _0x25d3a1(0x1dc)
                    )) &&
                    _0x500547[_0x25d3a1(0x1af)](_0x593f4b);
            }
            _0x1af494(_0x500547);
        }
        if (_0x2ef259 == _0x25d3a1(0x1a2)) {
            let _0x42e15b = [];
            for (let _0x485252 of _0x33e4c4) {
                (_0x485252[_0x25d3a1(0x172)][_0x25d3a1(0x1e1)](
                    _0x25d3a1(0x17e)
                ) ||
                    _0x485252[_0x25d3a1(0x172)][_0x25d3a1(0x1e1)](
                        _0x25d3a1(0x1dc)
                    )) &&
                    _0x42e15b[_0x25d3a1(0x1af)](_0x485252);
            }
            _0x1af494(_0x42e15b);
        }
        console["log"](_0x2b3531);
    }
    let _0x2b3531;
    function _0x1af494(_0x22f7a4) {
        const _0x2ce33a = _0x3518f3;
        for (let _0x4249a9 of _0x22f7a4) {
            let _0x1d0383 = [];
            for (
                let _0x57c26c = 0x0;
                _0x57c26c < _0x4249a9["score"][_0x2ce33a(0x1e4)];
                _0x57c26c++
            ) {
                let _0x119a59 = Math["abs"](
                    _0x49e149[_0x57c26c + 0x1] -
                        parseInt(_0x4249a9[_0x2ce33a(0x1a4)][_0x57c26c])
                );
                _0x1d0383["push"](_0x119a59);
            }
            let _0x549635 = 0x0;
            for (
                let _0x4cccc1 = 0x0;
                _0x4cccc1 < _0x1d0383[_0x2ce33a(0x1e4)];
                _0x4cccc1++
            ) {
                _0x549635 += _0x1d0383[_0x4cccc1];
            }
            _0x4249a9["total"] = _0x549635;
        }
        (_0x2b3531 = _0x22f7a4[_0x2ce33a(0x194)](
            (_0x2832cb, _0x2b10cd) =>
                _0x2832cb[_0x2ce33a(0x183)] - _0x2b10cd[_0x2ce33a(0x183)]
        )),
            console[_0x2ce33a(0x1a7)](_0x2b3531),
            _0x24faff(_0x2b3531);
    }
    let _0x13df5b = 0x1;
    function _0x24faff(_0x104d9e) {
        const _0x46f188 = _0x3518f3,
            _0x5273ad = 0x4,
            _0x14ccea = Math["ceil"](_0x104d9e["length"] / _0x5273ad);
        _0x5c85db["innerHTML"] = "";
        const _0x56a89f = (_0x13df5b - 0x1) * _0x5273ad,
            _0x5c5ee4 = Math[_0x46f188(0x1dd)](
                _0x56a89f + _0x5273ad,
                _0x104d9e[_0x46f188(0x1e4)]
            );
        for (let _0x59f054 = _0x56a89f; _0x59f054 < _0x5c5ee4; _0x59f054++) {
            const _0x1efd24 = _0x104d9e[_0x59f054];
            _0x5c85db[_0x46f188(0x18b)] +=
                "<div\x20class=\x22plan\x20" +
                _0x1efd24[_0x46f188(0x19b)] +
                _0x46f188(0x16d) +
                _0x1efd24[_0x46f188(0x19b)] +
                "\x22>" +
                _0x1efd24[_0x46f188(0x174)] +
                _0x46f188(0x18a) +
                _0x3ded49 +
                "\x20Line</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22network\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20class=\x22icon\x20icon-tabler\x20icon-tabler-access-point\x22\x20width=\x2244\x22\x20height=\x2244\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20stroke-width=\x221.5\x22\x20stroke=\x22#ffffff\x22\x20fill=\x22none\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20stroke=\x22none\x22\x20d=\x22M0\x200h24v24H0z\x22\x20fill=\x22none\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M12\x2012l0\x20.01\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M14.828\x209.172a4\x204\x200\x200\x201\x200\x205.656\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M17.657\x206.343a8\x208\x200\x200\x201\x200\x2011.314\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M9.168\x2014.828a4\x204\x200\x200\x201\x200\x20-5.656\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M6.337\x2017.657a8\x208\x200\x200\x201\x200\x20-11.314\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>" +
                _0x1efd24["network"] +
                _0x46f188(0x1c9) +
                parseInt(_0x1efd24[_0x46f188(0x173)]) * _0x3ded49 +
                _0x46f188(0x16e) +
                _0x1efd24[_0x46f188(0x169)] +
                _0x46f188(0x19c) +
                _0x1efd24[_0x46f188(0x1d2)] +
                _0x46f188(0x1df) +
                _0x1efd24[_0x46f188(0x1b9)] +
                _0x46f188(0x1db) +
                _0x1efd24[_0x46f188(0x1c8)] +
                _0x46f188(0x195) +
                _0x1efd24["hotspot"] +
                _0x46f188(0x16a) +
                _0x1efd24[_0x46f188(0x1bf)] +
                _0x46f188(0x1c0) +
                _0x1efd24[_0x46f188(0x1ab)] +
                _0x46f188(0x197) +
                _0x1efd24[_0x46f188(0x179)] +
                _0x46f188(0x17f) +
                _0x1efd24["intTexts"] +
                _0x46f188(0x19a) +
                _0x1efd24[_0x46f188(0x184)] +
                _0x46f188(0x1cf) +
                _0x1efd24[_0x46f188(0x177)] +
                _0x46f188(0x170) +
                _0x1efd24["intData"] +
                _0x46f188(0x1cc) +
                _0x1efd24[_0x46f188(0x1e5)] +
                _0x46f188(0x18c) +
                _0x1efd24[_0x46f188(0x17c)] +
                _0x46f188(0x1b8);
        }
        console[_0x46f188(0x1a7)](_0x14ccea), _0x2ea396(_0x14ccea);
    }
    function _0x2ea396(_0x4a768f) {
        const _0x3ec2fa = _0x3518f3;
        let _0x3eb82d = document["getElementById"](_0x3ec2fa(0x1a0));
        _0x3eb82d[_0x3ec2fa(0x18b)] = "";
        for (let _0x32a31c = 0x1; _0x32a31c <= _0x4a768f; _0x32a31c++) {
            const _0x905249 = document[_0x3ec2fa(0x1b5)](_0x3ec2fa(0x1ac));
            _0x905249[_0x3ec2fa(0x17d)][_0x3ec2fa(0x191)]("pageBtns"),
                _0x32a31c === _0x13df5b &&
                    _0x905249[_0x3ec2fa(0x17d)][_0x3ec2fa(0x191)](
                        "pageBtnClick"
                    ),
                (_0x905249[_0x3ec2fa(0x175)] = "" + _0x32a31c),
                _0x905249[_0x3ec2fa(0x1ba)](_0x3ec2fa(0x1d3), () => {
                    (_0x13df5b = _0x32a31c), _0x24faff(_0x2b3531);
                }),
                _0x3eb82d[_0x3ec2fa(0x193)](_0x905249);
        }
    }
    document[_0x3518f3(0x1ca)]("newQuiz")[_0x3518f3(0x1ba)](
        _0x3518f3(0x1d3),
        () => {
            const _0x2b369c = _0x3518f3;
            _0x4496ca[_0x2b369c(0x1b3)][_0x2b369c(0x1c7)] = "flex";
            for (let _0x40ef0c of _0x2f7d53) {
                _0x40ef0c["style"][_0x2b369c(0x1c7)] = _0x2b369c(0x1be);
            }
            (_0x2b012e[_0x2b369c(0x1b3)][_0x2b369c(0x1c7)] = _0x2b369c(0x189)),
                (planHead["style"][_0x2b369c(0x1c7)] = _0x2b369c(0x189)),
                (_0x58cca5[_0x2b369c(0x1b3)][_0x2b369c(0x1c7)] =
                    _0x2b369c(0x189)),
                (_0x49e149 = []),
                (_0x5c85db[_0x2b369c(0x18b)] = ""),
                (_0x5d6031 = 0x0),
                (_0x3f0f12[_0x2b369c(0x1b3)][_0x2b369c(0x1ae)] = "0"),
                (_0x13df5b = 0x1),
                localStorage[_0x2b369c(0x1c6)](),
                $(_0x2b369c(0x199))[_0x2b369c(0x19f)](_0x2b369c(0x1b0));
        }
    ),
        $(_0x3518f3(0x199))["on"](_0x3518f3(0x1d3), _0x51877d);
    function _0x51877d() {
        const _0xaa072a = _0x3518f3;
        if (localStorage[_0xaa072a(0x167)](_0xaa072a(0x190)) !== null) {
            $(_0xaa072a(0x199))[_0xaa072a(0x19f)](_0xaa072a(0x1b0));
            for (let _0x12d943 of _0x2f7d53) {
                _0x12d943[_0xaa072a(0x1b3)]["display"] = _0xaa072a(0x189);
            }
            (_0x4496ca[_0xaa072a(0x1b3)]["display"] = "none"),
                (_0x5dc481["style"][_0xaa072a(0x1c7)] = _0xaa072a(0x1be)),
                (_0x5dc481["style"][_0xaa072a(0x1c7)] = _0xaa072a(0x189)),
                (_0x2b012e[_0xaa072a(0x1b3)][_0xaa072a(0x1c7)] =
                    _0xaa072a(0x1be)),
                (planHead["style"][_0xaa072a(0x1c7)] = "block"),
                (_0x58cca5[_0xaa072a(0x1b3)][_0xaa072a(0x1c7)] =
                    _0xaa072a(0x176)),
                (_0x49e149 = JSON["parse"](
                    localStorage[_0xaa072a(0x167)](_0xaa072a(0x190))
                )),
                (_0x3ded49 = _0x49e149[0x0]),
                _0x1af494(_0x33e4c4);
        } else
            console[_0xaa072a(0x1a8)](_0xaa072a(0x1a1)),
                $(_0xaa072a(0x199))[_0xaa072a(0x19f)](_0xaa072a(0x1b0));
    }
    document[_0x3518f3(0x1ca)](_0x3518f3(0x1bc))[_0x3518f3(0x175)] = new Date()[
        "getFullYear"
    ]();
}
function _0x28c9() {
    const _0x60266f = [
        "score",
        "655XkDzAx",
        "clicked",
        "log",
        "error",
        "html",
        "getElementsByClassName",
        "texts",
        "button",
        "remove",
        "width",
        "push",
        "hidden",
        "Question\x20",
        "236eLjaoV",
        "style",
        "header",
        "createElement",
        "forEach",
        ".accordionIcon",
        "</a><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20class=\x22icon\x20icon-tabler\x20icon-tabler-arrow-big-right\x22\x20width=\x2244\x22\x20height=\x2244\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20stroke-width=\x221.5\x22\x20stroke=\x22#000000\x22\x20fill=\x22none\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20stroke=\x22none\x22\x20d=\x22M0\x200h24v24H0z\x22\x20fill=\x22none\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M4\x209h8v-3.586a1\x201\x200\x200\x201\x201.707\x20-.707l6.586\x206.586a1\x201\x200\x200\x201\x200\x201.414l-6.586\x206.586a1\x201\x200\x200\x201\x20-1.707\x20-.707v-3.586h-8a1\x201\x200\x200\x201\x20-1\x20-1v-4a1\x201\x200\x200\x201\x201\x20-1z\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>",
        "afterHighSpeed",
        "addEventListener",
        "querySelector",
        "year",
        "1760wQLLJm",
        "flex",
        "streamQlty",
        "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22texts\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20class=\x22icon\x20icon-tabler\x20icon-tabler-message-circle-2\x22\x20width=\x2244\x22\x20height=\x2244\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20stroke-width=\x221.5\x22\x20stroke=\x22#ffffff\x22\x20fill=\x22none\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20stroke=\x22none\x22\x20d=\x22M0\x200h24v24H0z\x22\x20fill=\x22none\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2020l1.3\x20-3.9a9\x208\x200\x201\x201\x203.4\x202.9l-4.7\x201\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>",
        "<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20width=\x2224\x22\x20height=\x2224\x22\x20stroke-width=\x222\x22>\x20<path\x20d=\x22M12\x205l0\x2014\x22></path>\x20<path\x20d=\x22M5\x2012l14\x200\x22></path>\x20</svg>",
        "7227bxBfuf",
        "#answers\x20button",
        "modalP",
        "select",
        "clear",
        "display",
        "priorityData",
        "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22priceNtax\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22price\x22><span\x20class=\x22largePrice\x22>$",
        "getElementById",
        "AT&T",
        "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22linkBtn\x22><a\x20class=\x22planLink\x22\x20href=\x22",
        "question",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpcmlnYXJ2bXhpaW54eWVybW9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUzMzg0OTksImV4cCI6MjA0MDkxNDQ5OX0.m14T-4NNpWOgT886U5diabvtpmTRJcEnjPbzIZ2utVc",
        "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mexData\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20class=\x22icon\x20icon-tabler\x20icon-tabler-plane\x22\x20width=\x2244\x22\x20height=\x2244\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20stroke-width=\x221.5\x22\x20stroke=\x22#ffffff\x22\x20fill=\x22none\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20stroke=\x22none\x22\x20d=\x22M0\x200h24v24H0z\x22\x20fill=\x22none\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M16\x2010h4a2\x202\x200\x200\x201\x200\x204h-4l-4\x207h-3l2\x20-7h-4l-2\x202h-3l2\x20-4l-2\x20-4h3l2\x202h4l-2\x20-7h3z\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>",
        "#accordion",
        "questionNum",
        "highSpeed",
        "click",
        "order",
        "verizonFilter",
        "attFilter",
        "13NUJSLu",
        ".filter",
        "contains",
        "https://sirigarvmxiinxyermoj.supabase.co",
        "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22priority\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20class=\x22icon\x20icon-tabler\x20icon-tabler-brand-speedtest\x22\x20width=\x2244\x22\x20height=\x2244\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20stroke-width=\x221.5\x22\x20stroke=\x22#ffffff\x22\x20fill=\x22none\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20stroke=\x22none\x22\x20d=\x22M0\x200h24v24H0z\x22\x20fill=\x22none\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M5.636\x2019.364a9\x209\x200\x201\x201\x2012.728\x200\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M16\x209l-4\x204\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>",
        "Any",
        "min",
        "5111424QFVldr",
        "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22afterHighSpeed\x22>",
        "questions",
        "includes",
        "filterClick",
        "content",
        "length",
        "linkToSite",
        "introText",
        "footer",
        "getItem",
        "start",
        "taxes",
        "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22streaming\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20class=\x22icon\x20icon-tabler\x20icon-tabler-brand-zoom\x22\x20width=\x2244\x22\x20height=\x2244\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20stroke-width=\x221.5\x22\x20stroke=\x22#ffffff\x22\x20fill=\x22none\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20stroke=\x22none\x22\x20d=\x22M0\x200h24v24H0z\x22\x20fill=\x22none\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M17.011\x209.385v5.128l3.989\x203.487v-12z\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3.887\x206h10.08c1.468\x200\x203.033\x201.203\x203.033\x202.803v8.196a.991\x20.991\x200\x200\x201\x20-.975\x201h-10.373c-1.667\x200\x20-2.652\x20-1.5\x20-2.652\x20-3l.01\x20-8a.882\x20.882\x200\x200\x201\x20.208\x20-.71a.841\x20.841\x200\x200\x201\x20.67\x20-.287z\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>",
        "restart",
        "<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20width=\x2224\x22\x20height=\x2224\x22\x20stroke-width=\x222\x22>\x20<path\x20d=\x22M5\x2012l14\x200\x22></path>\x20</svg>",
        "Border\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22cardHead\x20",
        "</span>/mo.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22tax\x22>",
        "23661BIqlAI",
        "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22intData\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20class=\x22icon\x20icon-tabler\x20icon-tabler-world\x22\x20width=\x2244\x22\x20height=\x2244\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20stroke-width=\x221.5\x22\x20stroke=\x22#ffffff\x22\x20fill=\x22none\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20stroke=\x22none\x22\x20d=\x22M0\x200h24v24H0z\x22\x20fill=\x22none\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x2018\x200a9\x209\x200\x200\x200\x20-18\x200\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3.6\x209h16.8\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3.6\x2015h16.8\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M11.5\x203a17\x2017\x200\x200\x200\x200\x2018\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M12.5\x203a17\x2017\x200\x200\x201\x200\x2018\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>",
        "Error\x20fetching\x20question\x20data:",
        "network",
        "pricePer",
        "plan",
        "textContent",
        "block",
        "mexData",
        "progressBar",
        "calls",
        "from",
        "314wMXzUt",
        "fullCompanyName",
        "classList",
        "T-Mobile",
        "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22intTexts\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20class=\x22icon\x20icon-tabler\x20icon-tabler-message\x22\x20width=\x2244\x22\x20height=\x2244\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20stroke-width=\x221.5\x22\x20stroke=\x22#ffffff\x22\x20fill=\x22none\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20stroke=\x22none\x22\x20d=\x22M0\x200h24v24H0z\x22\x20fill=\x22none\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M8\x209h8\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M8\x2013h6\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M18\x204a3\x203\x200\x200\x201\x203\x203v8a3\x203\x200\x200\x201\x20-3\x203h-5l-5\x203v-3h-2a3\x203\x200\x200\x201\x20-3\x20-3v-8a3\x203\x200\x200\x201\x203\x20-3h12z\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>",
        "77371hJuNlf",
        "allFilter",
        "querySelectorAll",
        "total",
        "intCalls",
        "plansWrapper",
        "4317324hNmcMH",
        ".ui-state-active\x20.accordionIcon",
        "infoModal",
        "none",
        "</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22subHead\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22lines\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20class=\x22icon\x20icon-tabler\x20icon-tabler-users\x22\x20width=\x2244\x22\x20height=\x2244\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20stroke-width=\x221.5\x22\x20stroke=\x22#ffffff\x22\x20fill=\x22none\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20stroke=\x22none\x22\x20d=\x22M0\x200h24v24H0z\x22\x20fill=\x22none\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M9\x207m-4\x200a4\x204\x200\x201\x200\x208\x200a4\x204\x200\x201\x200\x20-8\x200\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2021v-2a4\x204\x200\x200\x201\x204\x20-4h4a4\x204\x200\x200\x201\x204\x204v2\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M16\x203.13a4\x204\x200\x200\x201\x200\x207.75\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M21\x2021v-2a4\x204\x200\x200\x200\x20-3\x20-3.85\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>",
        "innerHTML",
        "\x22\x20target=\x22_blank\x22>View\x20at\x20",
        "424uUydBX",
        "31338qANsGC",
        "modalHead",
        "previousAnswers",
        "add",
        "stringify",
        "appendChild",
        "sort",
        "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotspot\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20fill=\x22none\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20stroke-width=\x221.5\x22\x20stroke=\x22#ffffff\x22\x20class=\x22size-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20d=\x22M13.19\x208.688a4.5\x204.5\x200\x200\x201\x201.242\x207.244l-4.5\x204.5a4.5\x204.5\x200\x200\x201-6.364-6.364l1.757-1.757m13.35-.622\x201.757-1.757a4.5\x204.5\x200\x200\x200-6.364-6.364l-4.5\x204.5a4.5\x204.5\x200\x200\x200\x201.242\x207.244\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>",
        "#modalWrapper\x20svg",
        "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22calls\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20class=\x22icon\x20icon-tabler\x20icon-tabler-phone\x22\x20width=\x2244\x22\x20height=\x2244\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20stroke-width=\x221.5\x22\x20stroke=\x22#ffffff\x22\x20fill=\x22none\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20stroke=\x22none\x22\x20d=\x22M0\x200h24v24H0z\x22\x20fill=\x22none\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M5\x204h4l2\x205l-2.5\x201.5a11\x2011\x200\x200\x200\x205\x205l1.5\x20-2.5l5\x202v4a2\x202\x200\x200\x201\x20-2\x202a16\x2016\x200\x200\x201\x20-15\x20-15a2\x202\x200\x200\x201\x202\x20-2\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>",
        "title",
        "#resume",
        "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22intCalls\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20class=\x22icon\x20icon-tabler\x20icon-tabler-phone-call\x22\x20width=\x2244\x22\x20height=\x2244\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20stroke-width=\x221.5\x22\x20stroke=\x22#ffffff\x22\x20fill=\x22none\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20stroke=\x22none\x22\x20d=\x22M0\x200h24v24H0z\x22\x20fill=\x22none\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M5\x204h4l2\x205l-2.5\x201.5a11\x2011\x200\x200\x200\x205\x205l1.5\x20-2.5l5\x202v4a2\x202\x200\x200\x201\x20-2\x202a16\x2016\x200\x200\x201\x20-15\x20-15a2\x202\x200\x200\x201\x202\x20-2\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M15\x207a2\x202\x200\x200\x201\x202\x202\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M15\x203a6\x206\x200\x200\x201\x206\x206\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>",
        "company",
        "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22highSpeed\x22>",
        "this\x20is\x20num",
        "404aBJTpc",
        "addClass",
        "pageButtons",
        "There\x20was\x20an\x20error\x20retrieving\x20previous\x20answers.\x20Please\x20retake\x20the\x20quiz.",
        "tmobileFilter",
        "plans",
    ];
    _0x28c9 = function () {
        return _0x60266f;
    };
    return _0x28c9();
}
const plusIcon = _0x37f1e4(0x1c1),
    minusIcon = _0x37f1e4(0x16c);
$(function () {
    const _0x1868a9 = _0x37f1e4;
    localStorage[_0x1868a9(0x167)]("previousAnswers") &&
        $(_0x1868a9(0x199))["removeClass"]("hidden"),
        $(_0x1868a9(0x1d0))["accordion"]({
            active: ![],
            collapsible: !![],
            icons: ![],
            heightStyle: _0x1868a9(0x1e3),
            create: function (_0x2a6863, _0x3ddc90) {
                const _0x3c787d = _0x1868a9;
                $(_0x3c787d(0x1b7))[_0x3c787d(0x1a9)](plusIcon);
            },
            activate: function (_0x35bd07, _0x284cfe) {
                const _0x215412 = _0x1868a9;
                $(_0x215412(0x1b7))[_0x215412(0x1a9)](plusIcon),
                    $(_0x215412(0x187))[_0x215412(0x1a9)](minusIcon);
            },
        }),
        $(".owl-carousel")["owlCarousel"]({
            loop: !![],
            margin: 0xf,
            responsive: { 0x0: { items: 0x2 }, 0x1e0: { items: 0x3 } },
            autoplay: !![],
            autoplayTimeout: 0x1388,
            autoplayHoverPause: !![],
            dots: !![],
        });
}),
    fetchQuestions();
