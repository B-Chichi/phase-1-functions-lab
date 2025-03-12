function distanceFromHqInBlocks(location) {
  const hqLocation = 42;
  if (location >= hqLocation) {
    return location - hqLocation;
  } else {
    return hqLocation - location;
  }
}

console.log(distanceFromHqInBlocks(34));
function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation);
  if (blocks === 0) {
    return 0;
  } else {
    return blocks * 264;
  }
}

function distanceTravelledInFeet(start, destination) {
  const distanceInBlocks = Math.abs(start - destination);
  if (distanceInBlocks === 0) {
    return 0;
  } else {
    return distanceInBlocks * 264;
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; 
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; 
  } else if (distance > 2000 && distance <= 2500) {
    return 25; 
  } else {
    return "cannot travel that far"; 
  }
}
