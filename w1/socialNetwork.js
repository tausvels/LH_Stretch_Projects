console.clear();
const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// ----- HELPER FUNCTIONS -------------------------//
const commonItems = function (arr1, arr2) {
	return arr1.filter(element => arr2.includes(element));
};
const getMaxPropertyOfObject = function (obj) {
	return Object.keys(obj).filter(x => {
			 return obj[x] === Math.max.apply(null, 
			 Object.values(obj));
 });
};
const nameOfId = function (obj, id) {
	return obj[id].name;
}
const followedBy = function (obj) {
	let output = {}, followedBy = [];
	for (const id in obj) {
		output[obj[id].name] = [];		
	}
	for (const id in obj) {
		(obj[id].follows).forEach(item => {
			output[obj[item].name].push(obj[id].name)				
		})
	}
	console.log(output)
}
const filterOddOnes = function (arr1, arr2) {
  output = arr1.filter((name) => {
    return !arr2.includes(name);
  })
  return output;
}
// ---------- END OF HELPER FUNCTIONS --------------- //
// ---------- MAIN FUNCTIONS STARTS ----------------- //
// -------------------------------------------------- //
const biggestFollower = function(dataObj) {
  let maxFollow = 0,
  objWithMostFollow = {};
  for (const obj in data) {
    if (data[obj].follows.length > maxFollow) {
      maxFollow = data[obj].follows.length;
      objWithMostFollow = data[obj];
    }
	}
	return objWithMostFollow;
};
// console.log(biggestFollower(data));

const mostPopular = function (obj) {
	let followerPerProfileId = {};
	let maxFollowerProfileId = [];
	let mostPopularName = {};
	const profileId = Object.keys(obj);
	for (const id in obj) {
		let common = commonItems(profileId, obj[id].follows);
		common.forEach(item => {
			if (!followerPerProfileId.hasOwnProperty(item)) {
				followerPerProfileId[item] = 1;
			} else {
				followerPerProfileId[item]++;
			}
		})
	}
	maxFollowerProfileId = getMaxPropertyOfObject(followerPerProfileId);
	maxFollowerProfileId.forEach(id => {
		mostPopularName[id] = obj[id].name;
	})
	return mostPopularName; 
}
// console.log(mostPopular(data));

const printAll = function (obj) {
	let output = {};
	for (const id in obj) {
		output[obj[id].name] = {
			follows: (obj[id].follows).map(id => {return obj[id].name}),
			followedBy: []
		}
	}
	for (const id in obj) {
		(obj[id].follows).forEach(item => {
			output[[obj[item].name]].followedBy.push(obj[id].name)
		})
	}
	return output;
}

const unrequitedFollowers = function (obj) {
	const userData = printAll(obj);
	for (const name in userData) {
		let following = userData[name].follows;
		let followedBy = userData[name].followedBy;
		let notFollowedBy = filterOddOnes(following, followedBy);
		userData[name].doesNotFollowBack = notFollowedBy;
	}
	return userData;
}
// console.log(unrequitedFollowers(data))