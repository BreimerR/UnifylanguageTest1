class Regexs {
    get separation() {
        return /(\s+|\t+)/;
    }

    get lowerCase() {
        return ` [a-z]`
    }

    get upperCase() {
        return `  [A-Z]`
    }

    get numbers() {
        return ` [0-9]`
    }

    get lBracket() {
        return ` \(`
    }

    get rBracket() {
        return ` \)`
    }

    get lSBrackets() {
        return ` \[`
    }

    get rSBrackets() {
        return ` \]`
    }

    get backTick() {
        return `\``
    }

    get squigly() {
        return `~`
    }

    get exclamation() {
        return `!`
    }

    get objectIdentifier() {
        return ` (_+)?[A-Z][a-zA-Z]`
    }

    get classRegex() {
        return `class${this.separation}${this.separation}`
    }
}

