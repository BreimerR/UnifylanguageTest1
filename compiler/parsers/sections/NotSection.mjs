import ParseSection from "./ParseSection";


export default class NotSection extends ParseSection {
    test(tokens, sections = this.sections) {
        let [section, ...against] = sections;
        if (tokens.hasValidToken) {
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


        return false
    }
}