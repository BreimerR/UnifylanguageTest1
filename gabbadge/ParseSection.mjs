export default class ParseSection {

}

export class OptionalSection extends ParseSection {

}

export class AlternateSection extends ParseSection {
    constructor(...sections) {
        super();

        this.sections = sections;
    }

    test(tokens) {
        for (let section of this.sections) {
        }
    }
}

export class MixedOrderSection extends ParseSection {

}

