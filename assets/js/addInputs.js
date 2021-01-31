
function createInputScript(){
    let inputsScripts = document.querySelectorAll( '.mt_la_input_url_script' );
    let table = document.querySelector('.mt_la_input_url_script').parentNode;
    
    let newContainer = document.createElement('div');
    let newInput = document.createElement( 'input' );
    let newContainerButton = document.createElement( 'div' );
    let removeButton = document.createElement( 'button' );
    
    let howManyUrlScripts = inputsScripts.length;
    newContainer.classList.add("form-control");
    newContainer.classList.add("mt_la_input_url_script");
    
    newInput.id = 'mt_la_script-'+ howManyUrlScripts;
    newInput.name = 'mt_la_stocked_urls_scripts[mt_la_script-'+howManyUrlScripts+']';
    newInput.setAttribute( 'type', 'text' );
    newInput.classList.add( 'col-8' );
    newInput.value = "";
    
    newContainerButton.classList.add( 'col-4' );
    
    removeButton.classList.add( 'btn' ); 
    removeButton.classList.add( 'btn-lg' ); 
    removeButton.classList.add( 'btn-danger' ); 
    removeButton.classList.add( 'mt_la_btn_remove_input' ); 
    
    newContainerButton.appendChild(removeButton);
    newContainer.appendChild(newInput);
    newContainer.appendChild(newContainerButton);
    
    table.appendChild(newContainer);
}

let addNewScriptButton = document.querySelector( '#mt_la_add_new_script_button' );

addNewScriptButton.addEventListener( 'click', function(){
    createInputScript();
}, false );