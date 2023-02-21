async function clickedEvent(img_index, item_index){
    //get track name
    let img_id = document.getElementsByTagName('img')[img_index].attributes[2].value 

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json']
    ]);

    let request = new Request(`https://api.artic.edu/api/v1/artworks/${img_id}`, {
        method: 'GET',
        headers: headers
    });

    let result = await fetch(request);

    let response = await result.json();

    console.log(response)
    console.log(response.data.title)
    console.log(response.data.thumbnail.alt_text)
    
    document.getElementById('head1').innerHTML = response.data.title
    document.getElementById('p1').innerHTML = response.data.thumbnail.alt_text
    document.getElementById('head2').innerHTML = response.data.title
    document.getElementById('p2').innerHTML = response.data.thumbnail.alt_text
    document.getElementById('head3').innerHTML = response.data.title
    document.getElementById('p3').innerHTML = response.data.thumbnail.alt_text
    document.getElementById('head4').innerHTML = response.data.title
    document.getElementById('p4').innerHTML = response.data.thumbnail.alt_text
}



function getInfo(id, event){
    switch(id){
        case 'fig1': { //Some song
            event.stopPropagation();
            clickedEvent(0,0)
            break;
        }
        case 'fig2': { //Some song
            event.stopPropagation();
            clickedEvent(1,0)
            break;
        }
        case 'fig3': { //Some song
            event.stopPropagation();
            clickedEvent(2,0)
            break;
        }
        case 'fig4': { //Some song
            event.stopPropagation();
            clickedEvent(3,0)
            break;
        }
        case 'fig5': { //Some song
            event.stopPropagation();
            clickedEvent(4,0)
            break;
        }
        case 'fig6': { //Some song
            event.stopPropagation();
            clickedEvent(5,0)
            break;
        }
    }
}


// const para = document.createElement("p");
// const heading = document.createElement("h4")
// heading.innerHTML = 'Im a cowboy'
// let something = 'Okay now we do it'
// para.innerHTML = `Howdy partner ${something}`;
// document.getElementById("card1").appendChild(heading);
// document.getElementById("card1").appendChild(para);
