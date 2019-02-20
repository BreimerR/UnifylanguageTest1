export default class FunctionCall {
    static get regex() {
        return /(?<name>(_+)?[a-zA-Z][a-zA-Z_$]*)\\/
    }
}