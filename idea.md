# MIXED PARSING
- As we parse from top down when we meet a token that is not defined
- Check context of use of token 
- check if the token exists in the current file tokens pool
- check if that token is the one being referenced is usable as per the context of the parse i.e


#### Example
___Code___
```
$name=getname()
getName=>"Brimer"
```
___Tokens___
```
[
"$name",
"=",
"getName",
"(",
")"
"getName",
"=",
">",
'"',
"Breimer",
'"'
]
```



getname check will return false if we are doing top down parse
we parse sporadically referencing the scope as we go down hill or upp hill
