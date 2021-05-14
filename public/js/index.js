
// Clasification Logic
$("#sendBtn").click(()=>{
    const clasificationName = $("#nameInput")[0].value;
    axios({
        method: 'POST',     
        url: `${window.location.origin}/clasifications`,
        data: {
            name: clasificationName
        }
      }).then(function (response) {
        $("#nameInput")[0].value = "";
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
})

$("#clasification-dropdown").click(()=>{
    $("#clasification-dropdown").toggleClass('is-active')
})

let clasificationNameVal;
let clasificationIdVal;

const dropdownItems = $(".dropdown-content  a");
dropdownItems.each((idx, clasification)=>{
    
    $(clasification).on("click",(e)=>{
        let clasificationId = e.target.dataset['id'];
        let clasificationName = e.target.dataset['name'];  
        clasificationNameVal =  clasificationName;
        clasificationIdVal = clasificationId;
        $("#clasification-selection")[0].innerHTML = clasificationName;
    })
})



// Movie logic
$("#createMovieBtn").click(()=>{
    if (typeof (z) != "indefined"){
        let name =  $("#movieName")[0].value;
        let director =  $("#movieDirector")[0].value;

        axios({
            method: 'POST',     
            url: `${window.location.origin}/movies`,
            data: {
                name: name,
                director: director,
                clasificationId: clasificationIdVal
            }
        }).then(function (response) {
            $("#nameInput")[0].value = "";
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }else{
        console.error('choose a clasification first')
    }    
})

const editMovieBtns = $(".editMovieBtn")
editMovieBtns.each((idx, btn)=>{
    $(btn).on('click',(e)=>{
        let movieId = e.target.dataset.cardid;
        console.log(movieId)
        const editCard = $(".movies-wrapper > div").filter(((idx, item)=>$(item).attr("id")==movieId))
        editCard.find("p.title").attr("contentEditable","true")
        editCard.find("p.subtitle").attr("contentEditable","true")
    })
})


const saveMovieBtns = $(".saveMovieBtn")
saveMovieBtns.each((idx, btn)=>{
    $(btn).on('click',(e)=>{
        let movieId = e.target.dataset.cardid;
        const editCard = $(".movies-wrapper > div").filter(((idx, item)=>$(item).attr("id")==movieId))
        const newName = editCard.find("p.title")[0].innerHTML;
        const newDirector = editCard.find("p.subtitle")[0].innerHTML;
        editCard.find("p.title").attr("contentEditable","false")
        editCard.find("p.subtitle").attr("contentEditable","false")   
        axios({
            method: 'PATCH',     
            url: `${window.location.origin}/movies`,
            data: {
                name: newName,
                director: newDirector,
                id: movieId
            }
        }).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    })
    
})

const deleteMovieBtns = $(".deleteMovieBtn");
deleteMovieBtns.each((idx, btn)=>{
    $(btn).on('click',(e)=>{
        let movieId = e.target.dataset.cardid;
        const editCard = $(".movies-wrapper > div").filter(((idx, item)=>$(item).attr("id")==movieId))
        editCard.attr("hidden","true");
        console.log(movieId)
        axios({
            method: 'delete',     
            url: `${window.location.origin}/movies`,
            data: {
               id:movieId
            }
        }).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    })
   
})


// Clasification Logic
let editClasificationBtns = $(".editClasificationBtn");
editClasificationBtns.each((idx, btn)=>{
    
    $(btn).on("click",(e)=>{
        let clasificationId = e.target.dataset.clasificationid;
        console.log(clasificationId)
        const editClasification = $(".clasifications-wrapper > div").filter(((idx, item)=>$(item).attr("id")==clasificationId))
        editClasification.find("p.title").attr("contentEditable","true");
    })
})
    

// })
let saveClasificationBtns = $(".saveClasificationBtn");
saveClasificationBtns.each((idx, btn)=>{
    $(btn).on("click",(e)=>{
        let clasificationId = e.target.dataset.clasificationid;
        const editClasification = $(".clasifications-wrapper > div").filter(((idx, item)=>$(item).attr("id")==clasificationId))
        editClasification.find("p.title").attr("contentEditable","true");
        const newClasificationName = editClasification.find("p.title")[0].innerHTML;
        axios({
            method: 'PATCH',     
            url: `${window.location.origin}/clasifications`,
            data: {
                name: newClasificationName,
                id: clasificationId
            }
        }).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    })
    })

  
let deleteClasificationBtns = $(".deleteClasificationBtn");
deleteClasificationBtns.each((idx, btn)=>{
    $(btn).on("click",(e)=>{
        let clasificationId = e.target.dataset.clasificationid;
        const editClasification = $(".clasifications-wrapper > div").filter(((idx, item)=>$(item).attr("id")==clasificationId))
        editClasification.attr("hidden","true");
        console.log(clasificationId)
        axios({
            method: 'delete',     
            url: `${window.location.origin}/clasifications`,
            data: {
               id:clasificationId
            }
        }).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    })
    
})