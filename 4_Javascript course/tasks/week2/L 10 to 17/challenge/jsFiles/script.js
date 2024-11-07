let [TitleName , DescriptionName , DateName] = ["Elzero" , "Elzero Web School" , "25/10"] ; 
let card = `
    <div>
        <h3>${TitleName}</h3>
        <p>${DescriptionName}</p>
        <span>${DateName}</span>
    </div>
`
let page = `
    ${card.repeat(4)}
`
document.write(page)
