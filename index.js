// PART 1
function introduction(name) {
    console.log (`Hi, my name is ${name}.`);
    return `Hi, my name is ${name}.`
}

introduction("Kenny");

// PART 2
function introductionWithLanguage(name, language) {
    console.log(name, language);
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

introductionWithLanguage("Josh", "Ember.js");

// PART 3
function introductionWithLanguageOptional(name, language = "JavaScript") {
    console.log (`Hi, my name is ${name} and I am learning to program in ${language}.`);
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

introductionWithLanguageOptional("Gracie", "Ruby");