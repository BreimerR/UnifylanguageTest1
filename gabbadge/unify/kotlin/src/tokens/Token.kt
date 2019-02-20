package tokens


open class Token(public val token: String) {


    private val col: Int
        get() {
            return token.length
        }

    /**
     * Checks if the provided token is of this type
     * */
    fun validate(token: Token): Boolean {


        return false
    }


    /**
     * Checks if the provided token is of
     * this token type
     * */
    fun validate(token: String): Boolean {


        return false
    }
}