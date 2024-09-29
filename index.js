// Code your solution in this file!
function distanceFromHqInBlocks(dropPoint){
    const Hq = 42
    if (dropPoint >= Hq){
        return dropPoint - Hq
    }
    else {
        return Hq - dropPoint
    }
}

function distanceFromHqInFeet(blocks){
    const block = distanceFromHqInBlocks(blocks)
    const blockFeet = 264
    return block * blockFeet
}

function distanceTravelledInFeet(start, destination){
    const blockFeet=264
    let distanceTravelled
    if (destination > start){
        distanceTravelled = destination-start
    }
    else {
        distanceTravelled = start - destination
    }
    return distanceTravelled * blockFeet
}
function calculatesFarePrice(start, destination){
    const blockFeet=264
    const distance = distanceTravelledInFeet(start, destination)
    let price
    if (distance <= 400){
        price = 0
    } else if(distance<=2000){
        price = (distance - 400)*0.02
    } else if(distance<=2500){
        price=25
    } else {
        return 'cannot travel that far'
    }
    return price
}

  