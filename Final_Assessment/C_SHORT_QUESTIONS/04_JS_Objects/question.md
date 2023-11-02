1. Consider the following code.  Why is apple type reported incorrectly as "Clementine", where it is set to "Granny Smith"?

1. What would you change to address this issue whereby the apple.type is reported as it was set originally i.e. "Granny Smith". In other words, how would you make a true copy of the apple object?

```js
    const apple = {
        type: 'Granny Smith',
        weight:  4
    }

    var orange = apple

    orange.type = 'Clementine'

    console.log('Apple type is ', apple.type)
```

1. Why does this comparison return false?  Please explain.

```js    
    var school_a = {name: 'UTexas', place: 'Austin'};
    var school_b = {name: 'UTexas', place: 'Austin'};

    console.log(school_a == school_b);   // returns false, why?
```