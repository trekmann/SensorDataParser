String.prototype.isNumber = function(){return /^[0-9.-]+$/.test(this);}
String.prototype.findRegEx = function(regex) {
    var m;
    var erg = null;
    while ((m = regex.exec(this)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        m.forEach((match, groupIndex) => {
            if(match.isNumber()){
                erg = Number(match);
            }
        });
    }
    return erg;
}
const gyroX = /(GYRO;X:)(.*?)[;]/g;
const gyroY = /(GYRO;X:.{8,9};Y:)(.{0,30})(;Z:)/g;
const gyroZ = /(GYRO;X:)(.{0,30})(;Z:)(.{8,9})/g;
const accelrometerX = /(ACCELEROMETER;X:)(.*?)[;]/g;
const accelrometerY = /(ACCELEROMETER;X:.{8,9};Y:)(.{0,30})(;Z:)/g;
const accelrometerZ = /(ACCELEROMETER;X:)(.{0,30})(;Z:)(.{8,9})/g;
const magneticsX = /(MAGNETIC;X:)(.*?)[\smT;]/g;
const magneticsY = /(MAGNETIC;X:.{8,12};Y:)(.{0,30})( mT;Z:)/g;
const magneticsZ = /(MAGNETIC;X:)(.{0,30})(;Z:)(.{8,9})/g;
const latitude = /(Latitude:)(.{0,10})(;)/g;
const longitude = /(Longitude:)(.{0,10})(;)/g;
const accuracyHorizontal = /(AccuracyHorizontal:)(.*?)( m;)/g;
const accuracyVertical = /(AccuracyVertical:)(.*?)( m;)/g;
const speed = /(Speed:)(.*?)( km)/g;
const height = /(Height:)(.*?)( m;)/g;
const pressure = /(PRESSURE;)(.*)( kPa)/g;

module.exports = function(str){
    if (typeof str == 'string') {
        return {
            gyro: {
                x: str.findRegEx(gyroX),
                y: str.findRegEx(gyroY),
                z: str.findRegEx(gyroZ)
            },
            accelerometer: {
                x: str.findRegEx(accelrometerX),
                y: str.findRegEx(accelrometerY),
                z: str.findRegEx(accelrometerZ)
            },
            magnetic: {
                x: str.findRegEx(magneticsX),
                y: str.findRegEx(magneticsY),
                z: str.findRegEx(magneticsZ)
            },
            gps: {
                latitude: str.findRegEx(latitude),
                longitude: str.findRegEx(longitude),
                accuracyHorizontal: str.findRegEx(accuracyHorizontal),
                accuracyVertical: str.findRegEx(accuracyVertical),
                speed: str.findRegEx(speed),
                height: str.findRegEx(height)
            },
            pressure: str.findRegEx(pressure)
        }
    } else {
        return null;
    }
}