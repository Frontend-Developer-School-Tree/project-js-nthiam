const urls = [
    "https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/location",
    "https://rickandmortyapi.com/api/episode"
]   
//seleziono i componenti
const container = document.getElementById('container')
const tpl = document.getElementById('listaPersonaggi')
const btnAdd = document.getElementById('personaggiBtn')

async function getHotel() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json()
    console.log(data);
}
getHotel().then(res => console.log(res))

class Card
{
    static async getData()
    {
        const [characters,locations,episodes] = await Promise.all(urls.map(url=>
        {
            try{
                return fetch(url).then(response => response.json())
            }
            catch (error) {
                console.error(error)
                throw new Error ('boh')
            }
        }))
        console.log(characters.results)
        characters.results.map(char => 
        {
            const cardChar = document.importNode(tpl.content,true)
            episodes.results.filter( episodes => 
            {
                const numEpisodi = episodes.characters.map( epiChar => {
                    return epiChar === char.url
                })
                cardChar.getElementById('numE').textContent = 'presente in '+numEpisodi.length+' episodi'       
            })
                cardChar.querySelector('h2').textContent = char.name;
                cardChar.querySelector('strong').textContent = 'specie= '+char.species;
                cardChar.querySelector('img').setAtttribute('src',char.image)
                cardChar.querySelector('img').setAtttribute('alt',char.name)
                cardChar.querySelector('i').classList.add('fa','fa-television')
                cardChar.querySelector('span').textContent = (char.type) ? `tipo: ${char.type}` :`tipo: persona comune` //condizione
                cardChar.getElementById('removeBtn').textContent = 'Rimuovi CARD';
                return container.appendChild(cardChar);
        })
                //const response = await fetch('www.google.com')
                //const data = await response.json()
    }   
        static loadHandler()
        {
            Card.getData()
        }
    
}
btnAdd.addEventListener('click',Card.loadHandler)