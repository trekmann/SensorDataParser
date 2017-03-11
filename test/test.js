var assert = require('assert');
var SensorDataParser = require('../index');

const checker = 'UTF8;GYRO;X:-0.028617;Y:-0.007388;Z:-0.008826;ACCELEROMETER;X:0.008148;Y:-0.005524;Z:-0.992035;MAGNETIC;X:-0.053906 mT;Y:-0.041228 mT;Z:-0.506462 mT;GPS;Latitude:52.157532;Longitude:10.522155;AccuracyHorizontal:65.00 m;AccuracyVertical:10.00 m;Speed:-3.60 km/h;Height:91.79 m;PRESSURE;101.4107894897461 kPa; from 192.168.178.92:53030'

console.log(SensorDataParser(checker));

describe('GYRO', function() {
  describe('X', function() {
    it('', function() {
      assert.equal(SensorDataParser(checker).gyro.x, -0.028617);
    });
  });
  describe('Y', function() {
    it('', function() {
      assert.equal(SensorDataParser(checker).gyro.y, -0.007388);
    });
  });
  describe('Z', function() {
    it('', function() {
      assert.equal(SensorDataParser(checker).gyro.z, -0.008826);
    });
  });
});

describe('ACCELEROMETER', function() {
  describe('X', function() {
    it('', function() {
      assert.equal(SensorDataParser(checker).accelerometer.x, 0.008148);
    });
  });
  describe('Y', function() {
    it('', function() {
      assert.equal(SensorDataParser(checker).accelerometer.y, -0.005524);
    });
  });
  describe('Z', function() {
    it('', function() {
      assert.equal(SensorDataParser(checker).accelerometer.z, -0.992035);
    });
  });
});

describe('MAGNETIC', function() {
  describe('X', function() {
    it('', function() {
      assert.equal(SensorDataParser(checker).magnetic.x, -0.053906);
    });
  });
  describe('Y', function() {
    it('', function() {
      assert.equal(SensorDataParser(checker).magnetic.y, -0.041228);
    });
  });
  describe('Z', function() {
    it('', function() {
      assert.equal(SensorDataParser(checker).magnetic.z, -0.506462);
    });
  });
});

describe('GPS', function() {
  describe('Latitude', function() {
    it('', function() {
      assert.equal(SensorDataParser(checker).gps.latitude, 52.157532);
    });
  });
  describe('Longitude', function() {
    it('', function() {
      assert.equal(SensorDataParser(checker).gps.longitude, 10.522155);
    });
  });
  describe('AccuracyHorizontal', function() {
    it('', function() {
      assert.equal(SensorDataParser(checker).gps.accuracyHorizontal, 65.00);
    });
  });
  describe('AccuracyVertical', function() {
    it('', function() {
      assert.equal(SensorDataParser(checker).gps.accuracyVertical, 10.00);
    });
  });
  describe('Speed', function() {
    it('', function() {
      assert.equal(SensorDataParser(checker).gps.speed, -3.60);
    });
  });
  describe('Height', function() {
    it('', function() {
      assert.equal(SensorDataParser(checker).gps.height, 91.79);
    });
  });


});

describe('PRESSURE', function() {
  it('', function() {
    assert.equal(SensorDataParser(checker).pressure, 101.4107894897461);
  });
});