var crypto = require('crypto');

function generateRandStr(size){
    if(typeof size == 'undefined') size = 5;
    return crypto.randomBytes(10).toString('hex').substring(0, size);
}

function buildHash(pwd, salt){
    var saltedPass = pwd + salt;
    var rawHash = crypto.createHash('md5').update(saltedPass).digest('hex');
    var hashed = rawHash.substring(0, rawHash.length -10) + salt;
    return hashed;
}

exports.hash = hash;
function hash(pwd){
    var hashedPwd = pwd;
    var salt = generateRandStr(10);
    return buildHash(pwd, salt);
}


exports.checkPassword = function(pwd, hashed){
    var salt = hashed.substring(hashed.length - 10);
    var newHashed = buildHash(pwd, salt);
    if(newHashed == hashed){
        return true;
    }
    return false;
}

exports.generateRandomPassword = function(size){
    if(typeof size == 'undefined') size = 6;
    return generateRandStr(size);
}

exports.generateRandomToken = function(){
    var date = new Date();
    var randStr = generateRandStr(5) + date.getTime();
    return hash(randStr);
}