(function(){
    'use strict';

    async function getCollections(){
        const designers = await fetch('collections.json');
        const data = await designers.json();
        const values = Object.values(data);
        console.log(values);
        document.querySelector('#collections').innerHTML = outputCollections(values);
    }

    async function getGarments(){
        const designers = await fetch('single-garment.json');
        const data = await designers.json();
        const values = Object.values(data);
        console.log(values);
        document.querySelector('#single-garments').innerHTML = outputGarments(values);
    }
    
    function outputCollections(data){
        let html = '<h1>Signature Collection Designers</h1>';
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

    function outputGarments(data) {
        let html = '<h1>Single Garment Designers</h1><ul>';
        data.forEach( function(eachDes){
            html += `<li><h2><span class="piece-name">${eachDes.piece}</span><br><span class="designer-name">${eachDes.name}</span></h2></li>`;
        });
        html += "</ul>";
        return html;
    }
    
    getCollections();
    getGarments();

})(); // end IIFE
