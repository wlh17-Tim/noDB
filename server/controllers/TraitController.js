const monsterTrait = [
    {
        id: 'January',
        trait: 'A'
    },
    {
        id: 'February',
        trait: 'B'
    },
    {
        id: 'March',
        trait: 'C'
    },
    {
        id: 'April',
        trait: 'D'
    },
    {
        id: 'May',
        trait: 'E'
    },
    {
        id: 'June',
        trait: 'F'
    },
    {
        id: 'July',
        trait: 'G'
    },
    {
        id: 'August',
        trait: 'H'
    },
    {
        id: 'September',
        trait: 'I'
    },
    {
        id: 'October',
        trait: 'J'
    },
    {
        id: 'November',
        trait: 'K'
    },
    {
        id: 'December',
        trait: 'L'
    }
]

module.exports = {
    getMonsterTrait: (req, res) => {
        const {id} = req.params
        const trait = monsterTrait.find(monsterTrait => monsterTrait.id === id)

        res.status(200).send(trait)
    } 
}