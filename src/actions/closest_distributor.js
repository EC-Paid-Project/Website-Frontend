import geolib from 'geolib';

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in kilometers
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
  }
  
  function toRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }
  
  export function findClosestDistributor(distributors) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const userLatitude = position.coords.latitude;
        const userLongitude = position.coords.longitude;
  
       
  
        let closestDistributor = null;
        let closestDistance = Infinity;
  
        distributors.forEach(distributor => {
          const [distributorLatitude, distributorLongitude] = distributor.location.split(',');
  
          const distance = calculateDistance(
            userLatitude,
            userLongitude,
            parseFloat(distributorLatitude),
            parseFloat(distributorLongitude)
          );
  
          if (distance < closestDistance) {
            closestDistributor = distributor;
            closestDistance = distance;
          }
        });
//   save distributor in local storage
        localStorage.setItem('closestDistributor', JSON.stringify(closestDistributor));
        console.log('Closest Distributor:', closestDistributor);
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }
  

  