let state = {
    options: [1, 4, 5]
}

const getRandom = (() => {
    const arrayLength = state.options.length;
    const randomOption = Math.floor(Math.random() * (arrayLength - 0) + 0);
    return randomOption;
});

console.log(getRandom());

