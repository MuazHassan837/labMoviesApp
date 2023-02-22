const aCar = {
  owner : "Joe Bloggs",
  previous_owners: [
    { name : 'Pat Smith', address : '1 Main Street'},
    { name : 'Sheila Dwyer', address : '2 High Street'}
  ],
  type: {  make : "Toyota", model : "Corolla", cc: 1.8},
  features : ['Parking assist', 'Alarm', 'Tow-bar'],
  registration : {year : 201, countyCode: "WD", number: 1058}
};

aCar.mileage = 10000
aCar.color = {
  exterior_colour : "red",
  interior_fabric :   {texture : "leather", shade : "cream" }
};

// for (let i = 0; i < aCar.features.length; i += 1){
//   console.log(aCar.features[i])
// }
// for (let j = 0; j < aCar.previous_owners.length; j += 1){
//   console.log(aCar.previous_owners[j].name)
// }
for (let p in aCar.type)  {
  console.log(p.toUpperCase() + ' = ' + aCar.type[p] ) ;
}