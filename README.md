# SensorDataParser

Das [SensorDaten App](https://itunes.apple.com/at/app/sensordaten/id855174390?mt=8) senden die Sensor Daten deines iPhones über UDP an eine beliebige IP-Adresse. Mit diesem Parser kannst du die Daten auswerten und bekommst diese als Objekt zurückgeliefert.

## Installation

```
npm install sensordaten_parser --save
```

## Benutzen

Als erstes musst du den Parser in deinem Projekt importieren.

```
var SensorDataParser = require('sensordaten_parser');
```

Dann übergibt du dem Parser den empfangen String. **Wichtig**, es muss ein String sein! Anstonsten gibt dir der Parser `null` zurück! Danach kannst du auf die Daten zugreifen. Die Rückgabewerte sind alle vom type `Number`.

```
console.log(SensorDataParser(empfangenerString).gps.height);
```

Folgende Daten stehen zur Verfügung. Die Magnetischen Daten werden in `mT` empfangen. Der Druck steht in `kPa` zu Verfügung. AccuracyHorizontal, AccuracyVertical sowie height stehen in `m` zu Verfügung und speed in `km/h`.

```
SensorDataParser(empfangenerString).gyro.x
SensorDataParser(empfangenerString).gyro.y
SensorDataParser(empfangenerString).gyro.z

SensorDataParser(empfangenerString).accelerometer.x
SensorDataParser(empfangenerString).accelerometer.y
SensorDataParser(empfangenerString).accelerometer.z

SensorDataParser(empfangenerString).magneticsX.x
SensorDataParser(empfangenerString).magneticsX.y
SensorDataParser(empfangenerString).magneticsX.z

SensorDataParser(empfangenerString).gps.latitude
SensorDataParser(empfangenerString).gps.longitude
SensorDataParser(empfangenerString).gps.accuracyHorizontal
SensorDataParser(empfangenerString).gps.accuracyVertical
SensorDataParser(empfangenerString).gps.speed
SensorDataParser(empfangenerString).gps.height

SensorDataParser(empfangenerString).pressure
```

## LICENSE

MIT License