

var newDevice1 = {
    name: 'HTC Vive Pro',
    price: 500,
    type: 'virtual reality',
    retailers: {
        online: 'Amazon',
        offline: 'Currys',
        international: 'Walmart'
    }
  };

  var newDevice2 = {
    name: 'Hydrogen car',
    price: 45000,
    type: 'futuristic car',
    retailers:
    {
      online: 'Amazon',
      Offline: 'Car dealerships',
      International: 'Autotrader'
    },
    manufacturers: {
      manufacturer1: 'Hyundai',
      manufacturer2: 'Toyota',
      manufacturer3: 'Porsche',
      manufacturer4: 'Aston Martin'
    }
  };

  var newDevice3 = {
    name: 'Quantum computer',
    price: 1000000,
    type: 'Advanced computer',
    manufacturers: {
      manufacturer1: 'IBM',
      manufacturer2: 'Intel',
      manufacturer3: 'Google',
      manufacturer4: 'Microsoft'
    }
  };

function showAllDevices() {

  document.getElementById('output').value = newDevice1.name + " " + newDevice2.name + " " + newDevice3.name;

  };

function showAllManufacturers() {

var allmanufacturers = [];

for (var manufacturers in newDevice2.manufacturers) {

  allmanufacturers.push(" " + newDevice2.manufacturers[manufacturers]);

};

document.getElementById('output').value = allmanufacturers;


};
