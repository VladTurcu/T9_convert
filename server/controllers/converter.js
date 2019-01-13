
const t9Map = [
    [""],
    [""],
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["p", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"]
];


const rec = (bundles, bundleIdx, letterIdx, str, arr) => {
    // Add the new letter
    let concatedStr = str + bundles[bundleIdx][letterIdx];

    // Decrement letter
    if (letterIdx > 0) rec(bundles, bundleIdx, letterIdx - 1, str, arr);

    // Increment bundle
    if (bundleIdx < bundles.length - 1) rec(bundles, bundleIdx + 1, bundles[bundleIdx + 1].length - 1, concatedStr, arr);

    // Not a complete word
    if (concatedStr.length < bundles.length) return;

    // Push word
    arr.push(concatedStr);
}

const processQuery = (query) => {
    let possibleWords = [];

    if (!/^[0-9]+$/.test(query)) {
        return `Error! Query is ${query}, Must provide a number string`;
    };

    const charArrs = query.split("").map((digit) => t9Map[parseInt(digit, 10)]);

    // Start recursive func
    rec(charArrs, 0, charArrs[0].length - 1, "", possibleWords);

    return possibleWords;
}

const t9Convert = async (req, res, next) => {
    const response = await processQuery(req.query.value)
    res.send(response)
}

module.exports = {
    t9Convert
}