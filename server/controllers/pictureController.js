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

module.exports = {
    getMonsterPic: (req, res) => {
        console.log(req.params.id)
        const {id} = req.params
        const picture = monsterPic.find(monsterPic => monsterPic.id === id)

        res.status(200).send(picture)
    } 
}