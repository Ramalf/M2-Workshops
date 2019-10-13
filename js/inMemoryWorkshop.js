var inMemoryWorkshop = []


function getWorkshopList() {
    return new Promise((resolve, ) => {
        resolve(inMemoryWorkshop)
    })
}

function getWorkshopByName(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("name parameter is required"))
        }
        resolve(inMemoryWorkshop.find(workshop => workshop.name === workshop))
    })
}


function getWorkshopById(id) {
    return new Promise((resolve, reject) => {
        if (id < 0) {
            reject(new Error("Workshop id not valid"))
        }
        resolve(inMemoryWorkshop[id])
    })
}

function addWorkshop(name, description) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("Workshop name required"))
        }
        if (!description) {
            reject(new Error("Workshop description required"))
        }
        inMemoryWorkshop.push({
            name,
            description
        })
        resolve()
    })
}

function removeWorkshopByName(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("name parameter is required"))
        }
        for (let i = 0; i < inMemoryWorkshop.length; ++i) {
            if ( inMemoryWorkshop[i].name === name) {
              inMemoryWorkshop.splice(i, 1)
            }
         }
        resolve()
    })
}

function removeWorkshopById(id) {
    return new Promise((resolve, reject) => {
        if (id < 0) {
            reject(new Error("Workshop id not valid"))
        }
        inMemoryWorkshop.splice(id,1)
        resolve()
    })
}

function updateWorkshop(id, name, description) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject(new Error("Workshop id not valid"))
        }
        if (!name) {
            reject(new Error("name parameter is required"))
        }
        if (!description) {
            reject(new Error("Workshop description required"))
        }

        inMemoryWorkshop[id] = { name,
                                description }
        resolve()

    })
}

module.exports = {
    getWorkshopList,
    getWorkshopByName,
    getWorkshopById,
    addWorkshop,
    removeWorkshopByName,
    removeWorkshopById,
    updateWorkshop
}