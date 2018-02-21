class Sorter {
    constructor() {
        this.array = []; //Creating array list
        this.compareFunction = (left,right) => left - right; // Custom comparator rules
    }

    add(element) {
        this.array.push(element); //need return for pushing elements to array;
    }

    at(index) {
        return this.array[index]; //return array index;
    }

    get length() {
        return this.array.length; //return getter of array length;
    }

    toArray() {
        return this.array; // This method need to return on link this object;
    }

    sort(indices) {
        //method for sort arrays
        var sortArray = [];
        indices.sort().forEach(j => sortArray.push(this.array[j]));
        sortArray.sort(this.compareFunction);  //custom comparator sort
        indices.forEach((j, i) => this.array[j] = sortArray[i]);
    }

    setComparator(compareFunction) {
        this.compareFunction = compareFunction;
    }
}

module.exports = Sorter;
