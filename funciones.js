const joyas = require("./data/joyas.js");

const HATEOAS = () => {
    const data = joyas.results.map((j) => {
        return {
            name: j.name,
            href: `http://localhost:3000/api/v1/joya/${j.id}`,
        }
    })
    return data;
};

const filtroCategoria = (categoria) => {
    return joyas. results.filter((j) => {
        return j.category === categoria
    })
};

const joya = (id) => {
    return joyas.results.filter((j) => j.id === id)
}

const fieldsSelect = (joya, field) => {
    const Fields = fields.split(',');
    const properties = Object.keys(joya);
    const check = true

    Fields.forEach((field) => {
        if (!properties.includes(fields)) check = false
    })

    if (!check) {
        return { error:"400 Bad Request", message: "Alguno de los campos que quieres consultar no existe."}
    } else {
        for ( field in joya) {
            if (!Fields.includes(field)) delete joya[field]
        }
    return joya
    }
}

const orderValues = (order) => {
    if ( order == 'asc') return joyas.results.sort((a,b) => (a.value < b.value ? 1 : -1))
    if ( order == 'desc') return joyas.results.sort((a,b) => (a.value > b.value ? 1 : -1))

}

module.exports = { HATEOAS, filtroCategoria, fieldsSelect, joya, orderValues};
