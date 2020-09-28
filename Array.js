class OurArray {
    constructor() {
        this.items = []
        this.count = this.items.length
        if (arguments.length != 0) this.create_array(arguments)
    }

    create_array(items) {
      for(let x = 0; arguments[0].length > x; x++) {
        this.push(arguments[0][x]) 
      }
    }

    push(element) {
        this.items[this.count] = element
        console.log(`${element} added to ${this.count}`)
        this.count += 1
        return this.count - 1
    }

    map(fn) {
      var newArray = new Stack()
      for(let x = 0; this.count > x; x++) {
        newArray.push(fn(this.items[x], x, this.items))
      }
      return newArray
    }

    filter(fn) {
      var newArray = new Stack()
      for(let x = 0; this.count > x; x++) {
        if(fn(this.items[x], x, this.items)) {
          newArray.push(this.items[x])
        }}

        return newArray
    }

    reduce(fn, initialValue=this.items[0]) {
      var sum = initialValue

      for(let x = 0; x < this.count; x++) {
        sum = fn(sum, this.items[x], x, this.items)
        console.log(sum)
      }

      return sum;
    }
        
    includes(element) {
      for(let x = 0; x < this.count; x++) {
        if(this.items[x] == element) {
          return true
        }
      }
      return false
    }
    // Check size of stack
    size() {
        return this.count
    }


    // Clear stack
    clear() {
        this.items = []
        this.count = 0
        return this.items
    }
}


