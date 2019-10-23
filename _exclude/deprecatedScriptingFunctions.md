The following scripting functions were deprecated and removed from the doc on 10/23/2019. Keeping here in the exclude folder for historical purposes.

### Get User Location

When you create a Required Context of type Location, a Location object is created.

You can retrieve this object with `getUserLocation()`, and access the properties of the location object by assigning it to a local variable and then calling several `get` methods on the object.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getUserLocation()` | None | location object |

#### Example

```javascript
var location = botContext.getUserLocation();
var city = location.getState(); // two-letter state abbreviation
var lat = location.getLatitude();
var lon = location.getLongitude();
var zip = location.getZipCode(); // postal code
```

You can also access the location information with the {$location} variable, for instance:

- City: {$location.city}
- State: {$location.state}
- ZipCode: {$location.zip}
- Latitude: {$location.lat}
- Longitude: {$location.lng}
- combined Lat,Lng {$location.latlng}.


### Get and Set UserName

The get UserName and set UserName functions are used to get (and set) the value of a permanent variable, dedicated to the user’s name. Having this dedicated variable makes it easy to consistently set the user’s information.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getUserName()` | None | string |
| `setUserName(name)` | name (string) | None |

#### Example

```javascript
// retrieve the username and test
var username = botContext.getUserName();
if(username != null){
  botContext.printDebugMessage('User Name = ' + username);
  botContext.sendMessage('Hi'  + username + '! Thanks for coming');
}else{
  // if it doesn’t exist, set it
  botContext.setUserName('Fred');
}
```

### Get and Set User Email Address

The get Email and set Email functions are used to get (and set) the value of a permanent variable, dedicated to the user’s email address. Having this dedicated variable makes it easy to consistently set the user’s information.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getEmail()` | None | string |
| `setEmail(address)` | address (string) | None |

#### Example

```javascript
// retrieve the user’s email address and test
var email = botContext.getEmail();
if (email != null) {
  botContext.printDebugMessage('User Email Address = ' + email);
  botContext.sendMessage('Looks like your email address is ' + email);
} else {
  // if it doesn’t exist, set it
  botContext.setEmail('fred@fred.net');
}
```

### Get user Platform ID and platform Type

The Get User Platform Id and Get User Platform Type are the functions that are used to get the user’s unique platform ID and their platform type (eg: FACEBOOK, HTMLCLIENT, etc).

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getUserPlatformId()` | None | string: unique User platform ID |
| `getUserPlatformType()` | None | string: User platform type |

#### Example

```javascript
// get the user’s platform ID
var userId = botContext.getUserPlatformId();
// gets the user’s platform type
var platformType = botContext.getUserPlatformType();
// display the results...
botContext.printDebugMessage('The userPlatformId = ' + userId + 'and the userPlatformType = ' + platformType);
```
