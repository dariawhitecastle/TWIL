const formFieldsMap = new Map()

const baseField = {
    name: name => name, 
    value: fieldValue => fieldValue,
    errorMessage: () => `Please enter valid ${this.name}`,
    setField: fn => fn(name, value)
}

const textField = {
    ...baseField,
    type: 'text',
    validate: (value) => value.match(/^[A-Za-z]+$/), 
}

const numberField = {
    ...baseField,
    type: 'number',
    validate: (value) => value.match(/^[0-9]+$/),
}

const selectField = {
    ...baseField,
    type: 'select',
    validate: (value) => value,
    options: ['Option1', 'Option2', 'Option3']
}

const mockData = [
    {
        id: 1,
        firstName: 'Daria',
        lastName: 'Calwell',
        phone: '111-111-1111',
        occupation: 'devLoper'
    },
    {
          id: 1,
        firstName: 'Daria',
        lastName: 'Calwell',
        phone: '111-111-1111',
        occupation: 'devLoper'
    },
    {
          id: 1,
        firstName: 'Daria',
        lastName: 'Calwell',
        phone: '111-111-1111',
        occupation: 'devLoper'
    }
]

formFieldsMap.set('firstName', textField)
formFieldsMap.set('lastName', textField)
formFieldsMap.set('phone', textField)
formFieldsMap.set('occupation', textField)

// console.log('First name field', formFieldsMap.get('firstName'))
// console.log('Form fields map', formFieldsMap)
// console.log('Form fields map number of keys', formFieldsMap.size)
// console.log('Form fields map has key occupation', formFieldsMap.has('occupation'))
