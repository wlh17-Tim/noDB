const monsterPic = [
    {
        id: 'Red',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9IWC2lA5QPI7T2n3nzl0BCjVT8hyob_jlmMBqRYpgDbRFLLrM'
    },
    {
        id: 'Orange',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNqYeFCuiDdQLX07kKrY-_cXyiktV07jcvk3zPSWsfVxeLqpwU'
    },
    {
        id: 'Yellow',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjNo7ZzV1BIPVVoE9HzoRIzCHD67ezQcjIA-s4WOE4-T8-2hvG'
    },
    {
        id: 'Green',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkczFB0x0mqA0h_vho2q7MV04ooawV5Maf1Uh8Njn_hXIaHzrh'
    },
    {
        id: 'Blue',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTH5HJ8E3P34BWxzvAKlIp7Yar1240gISxdjWS_YoYC_D3oVKEL'
    },
    {
        id: 'Purple',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbnZeMTfyZbVlBRg35I4caK7fBdnvhRgaDlbUrSf-9Df43LpjN'
    },
    {
        id: 'Pink',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHLFcUmvB3J1Ar4nY5MS2IXXHFkziH97BDRfzNMHKjPvABqSDZ'
    },
    {
        id: 'Black',
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ-DiO___mUdKhuqORX7edG61kgolXT_QcF_OvluzqlAzGbQYB'
    }
]

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

const newMonster= []

module.exports = {
    getMonsterInfo: (req, res) => {
        console.log(req.params)
        const {color, month} = req.params
        let newObj = {}
        const picture = monsterPic.find(monsterPic => monsterPic.id === color)
        const trait = monsterTrait.find(monsterTrait => monsterTrait.id === month)
        newObj.pic = picture.pic
        newObj.trait = trait.trait
        newObj.name = name.name

        res.status(200).send(newObj)
    },
    
    createMonster: (req,res) => {
        const {name, birthMonth, favoriteColor} =req.body
        newMonster.push()
    }
}