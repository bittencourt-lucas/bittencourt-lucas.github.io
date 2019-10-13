// This is a display of how JSON parsing works. It takes a fixed string as example and parse it into a JSON object.
var testExample = function() {
    var example =
        '{"id":"1","username":"bittencourt-lucas", "accounttype":"free"}'
    var obj = JSON.parse(example)
    document.getElementById('example-id').innerHTML = obj.id
    document.getElementById('example-username').innerHTML = obj.username
    document.getElementById('example-account-type').innerHTML = obj.accounttype
}

// This is an example of how JSON stringify works. It uses the same example as the previous function, changes two values, and then transforms the objects back into strings.
var testStringify = function() {
    var example =
        '{"id":"1","username":"bittencourt-lucas", "accounttype":"free"}'
    var obj = JSON.parse(example)
    obj.username = 'lucas-bittencourt'
    obj.accounttype = 'premium'
    var new_example = JSON.stringify(obj)
    document.getElementById('example-stringify').innerHTML = new_example
}
