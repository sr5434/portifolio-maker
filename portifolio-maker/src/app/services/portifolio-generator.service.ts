import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortifolioGeneratorService {
  constructor() { }
  private generateProjHTML(projects:Array<any>) {
    let projHTML = `      <div class="row">`;
    for (let i=0; i < projects.length; i++){
      if(projects[i].value.name !== ""){
        projHTML += `        <div class="col-md-6">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">${projects[i].value.name}</h5>
            <p class="card-text">${projects[i].value.description}</p>
          </div>
        </div>
      </div>`;
      } else {
        projHTML += ``
      }
    }
    projHTML += `      </div>`;
    return projHTML;
  }
  public generatePortifolio(name:string | null, aboutText:string | null, projects:Array<any>, contactText:string | null){
    const currentYear = new Date().getFullYear();
    const projHTML = this.generateProjHTML(projects);
    const portifolioCode = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <title>${name}'s Portfolio</title>
    </head>
    
    <body>
    
      <!-- Navigation Bar -->
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <a class="navbar-brand" href="#">${name}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    
      <!-- About Section -->
      <section id="about" class="py-5">
        <div class="container">
          <h2>About Me</h2>
          <p>${aboutText}</p>
        </div>
      </section>
    
      <!-- Projects Section -->
      <section id="projects" class="py-5 bg-light">
        <div class="container">
          <h2>Projects</h2>
${projHTML}
        </div>
      </section>
    
      <!-- Contact Section -->
      <section id="contact" class="py-5">
        <div class="container">
          <h2>Contact</h2>
          <p>${contactText}</p>
        </div>
      </section>
    
      <!-- Footer -->
      <footer class="bg-dark text-white text-center py-3">
        <div class="container">
          <p>&copy; ${currentYear} ${name}. All rights reserved</p>
        </div>
      </footer>
    
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    
    </body>
    
    </html>
    `;
    return portifolioCode;
  }

}
