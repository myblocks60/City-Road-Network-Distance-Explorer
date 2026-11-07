const graph = {
  A: [],
  B: [],
  C: [],
  D: [],
  E: []
};

function addRoad(city1, city2, distance) {
  // Road goes from city1 to city2
  graph[city1].push({ city: city2, distance: distance });

  // Roads are two-way, so connect city2 to city1 as well
  graph[city2].push({ city: city1, distance: distance });
}

function addRoad(city1, city2, distance) {
  // Road goes from city1 to city2
  graph[city1].push({ city: city2, distance: distance });

  // Roads are two-way, so connect city2 to city1 as well
  graph[city2].push({ city: city1, distance: distance });
}
