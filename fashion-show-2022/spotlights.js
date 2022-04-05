(function(){
    'use strict';

    async function getData(){
        const designers = await fetch('collections.json');
        const data = await designers.json();
        const values = Object.values(data);
        console.log(values);
        document.querySelector('#collections').innerHTML = outputHTML(values);
    }
    
    function outputHTML(data){
        let html = '<h1 style="font-size: 72px;">Signature Collection Designers</h1>';
        data.forEach( function(eachDes){
            html += `<article class="designer">
            <div class="designer-header">
                <img class="designer-headshot" src="${eachDes.headshot}">
                <h2><span class="collection-name">${eachDes.collection}</span><br><span class="designer-name">${eachDes.name}</span></h2>
            </div>

            <div class="about-collection">
                <img class="moodboard" src="${eachDes.moodboard}">
                <p>
                  ${eachDes.statement}
                </p>
            </div>

            <p>
               ${eachDes.bio} 
            </p>
        </article>`;
        } );
        return html;
    } 
    
    getData();

})(); // end IIFE
