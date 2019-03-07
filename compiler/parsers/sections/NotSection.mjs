import ParseSection from "./ParseSection";


export default class NotSection extends ParseSection {
    constructor(...[section, ...sections]) {
        super(...sections);
        this.sections = [section];
        this.ageinsts = sections

    }

    test(tokens, sections = this.ageinsts) {
        if (super.test(tokens)) {
            let {currentToken} = tokens;
            for (let sI in sections) {
                if (sections[sI].testToken(currentToken)) {
                    return false;
                }
            }

            return true;

        }

        /* if (tokens.hasValidToken) {
             let token = tokens.nextToken;
             if (token.is(section)) {
                 for (let sI in against) {
                     if (against[sI].testToken(token)) {
                         return false
                     }
                 }
                 return true;
             }
         }
        */

        return false
    }
}