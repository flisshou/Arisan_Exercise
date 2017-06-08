function parseURL (uri) {
  var parserRegExp = new RegExp (
      '^' +
          '(?:' +
          '([^:/?#.]+)' +                         // scheme - ignore special characters
                                                  // used by other URL parts such as :,
                                                  // ?, /, #, and .
          ':)?' +
          '(?://' +
          '(?:([^/?#]*)@)?' +                     // userInfo
          '([\\w\\d\\-\\u0100-\\uffff.%]*)' +     // domain - restrict to letters,
                                                  // digits, dashes, dots, percent
                                                  // escapes, and unicode characters.
          '(?::([0-9]+))?' +                      // port
          ')?' +
          '([^?#]+)?' +                           // path
          '(?:\\?([^#]*))?' +                     // query
          '(?:#(.*))?' +                          // fragment
          '$'
        );
  var parser = uri.match (parserRegExp);

  var result = {
    'protocol': parser[1],
    'host': parser[3],
    'port': parseInt(parser[4])
    // , 'path': parser[5],
    // 'query_data': parser[6],
    // 'fragment': parser[7]
  };

  if (parser[2] !== undefined) {
    result['username'] = parser[2].split(':')[0];
    result['password'] = parser[2].split(':')[1];
  } else {
    result['userInfo'] = parser[2];
  }

  console.log(uri);
  console.log(result);
  return result;
}

module.exports = {
  parseURL: function parseURL (uri) {
    var parserRegExp = new RegExp (
        '^' +
            '(?:' +
            '([^:/?#.]+)' +                         // scheme - ignore special characters
                                                    // used by other URL parts such as :,
                                                    // ?, /, #, and .
            ':)?' +
            '(?://' +
            '(?:([^/?#]*)@)?' +                     // userInfo
            '([\\w\\d\\-\\u0100-\\uffff.%]*)' +     // domain - restrict to letters,
                                                    // digits, dashes, dots, percent
                                                    // escapes, and unicode characters.
            '(?::([0-9]+))?' +                      // port
            ')?' +
            '([^?#]+)?' +                           // path
            '(?:\\?([^#]*))?' +                     // query
            '(?:#(.*))?' +                          // fragment
            '$'
          );
    var parser = uri.match (parserRegExp);

    var result = {
      'protocol': parser[1],
      'host': parser[3],
      'port': parseInt(parser[4])
      // , 'path': parser[5],
      // 'query_data': parser[6],
      // 'fragment': parser[7]
    };

    if (parser[2] !== undefined) {
      result['username'] = parser[2].split(':')[0];
      result['password'] = parser[2].split(':')[1];
    } else {
      result['userInfo'] = parser[2];
    }

    console.log(uri);
    console.log(result);
    return result;
  }
}

parseURL('http://maxh:123456@arisan.io:8000');
parseURL('ftttp://fliss:1207@github.io:7382');
parseURL('https://google.com');
parseURL('https://david@arisan.com:7777');
parseURL('12345');
