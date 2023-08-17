let current_index = 0;


function addList(){
    let inputs = document.getElementById('inputs');
    let listContainer = document.getElementById("list-container");
    let list = document.createElement("li")   
    
    if(inputs.value === ""){
            alert('yaa isi lahh')
    }else{
        list.setAttribute('id','list');
        list.innerHTML = inputs.value
        listContainer.appendChild(list);
    
        let span = document.createElement('span');
        span.setAttribute("index", current_index)
        let buttonAdd = document.createElement('button');

        buttonAdd.innerText = 'Selesai';
        buttonAdd.setAttribute('id','done');
        buttonAdd.setAttribute("onclick", "Done(this)")
        span.appendChild(buttonAdd);
        list.appendChild(buttonAdd);

            

        let buttonAdd2 = document.createElement('button');
        buttonAdd2.innerText = 'X';
        buttonAdd2.setAttribute('id','RemoveItem');
        buttonAdd2.setAttribute('onclick','RemoveItem()');
        span.appendChild(buttonAdd2);
        list.appendChild(buttonAdd2);

        list.style.backgroundColor = 'brown';


        listContainer.style.overflowY = 'scroll';
    }
        
};


function Done(e){
    var parent = e.parentElement
    parent.style.textDecoration = 'line-through'
    parent.style.backgroundColor = 'white'
}


function RemoveItem(){
    var remove = document.getElementById('list');
    var listContainer = document.getElementById('list-container');
    remove.remove();
    listContainer.style.overflow = 'hidden';
    
    
}

const list = document.getElementById('list-container');

function Remove(){
    while(list.hasChildNodes()){
        list.removeChild(list.firstChild);
    }
    var listContainer = document.getElementById('list-container');

    listContainer.style.overflow = 'hidden';
};






