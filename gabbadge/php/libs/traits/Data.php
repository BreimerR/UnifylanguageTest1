<?php


/// all classes using this trait
///  should implement getters and setters
/// for the properties that
/// can be copied from one end to another


trait Data
{

}


function caller($func)
{
    if(is_callable($func)){
        $func();
    }
}

caller(function () {
    echo "slap on the wrist";
});