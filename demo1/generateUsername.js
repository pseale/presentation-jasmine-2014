function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function startsWithALetter(name)
{
  if (name.trim().length === 0) {
	  throw new Error()
  }
  
  var charVal = name.trim()[0]
  if( charVal.toUpperCase() != charVal.toLowerCase() )
    return true;
  else
    return false;
}

function getFirstLetter(name) {
  if (name === null || typeof(name) !== "string" || !startsWithALetter(name)) {
    throw new Error()
  }

  return name.trim()[0].toLowerCase()
}

function isNormalInteger(str) {
  var n = ~~Number(str)
  return String(n) === str && n >= 0
}

function getId(id) {
  var idString = (id + '').trim()
  if (!isNormalInteger(idString)) {
    throw new Error()
  }

  return pad(idString, 4)
}

function generateUsername(firstName, lastName, id) {
  var f = getFirstLetter(firstName);
  var l = getFirstLetter(lastName);
  var fourDigitId = getId(id);

  return f + l + fourDigitId;
}