console.log('Starting up');

var projs = [
    { "id": "todo", 
    "name": "todo", 
    "title": "todo list app", 
    "desc": "lorem ipsum lorem ipsum lorem ipsum", 
    "url": "projs/todo", 
    "publishedAt": 1448693940000, 
    "labels": ["List", "js", "css"],
 },
 { "id": "pacman", 
    "name": "pacman", 
    "title": "pacman app", 
    "desc": "lorem ipsum lorem ipsum lorem ipsum", 
    "url": "projs/pacman", 
    "publishedAt": 1448693940000, 
    "labels": ["game", "js", "css"],
 }
]

var strHtml =''; 
projs.forEach(function(proj,idx){
    console.log(proj);

    strHtml += `<div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${idx + 1}">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="img/portfolio/pacman.jpg" alt="">
    </a>
    <div class="portfolio-caption">
      <h4>${proj.name}</h4>
      <p class="text-muted">${proj.title}</p>
    </div>
  </div>`


  
  
})


$('.port-cont').html(strHtml);