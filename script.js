// Array to store project details
const projects = [
    {
        title: "Cookies N Cream",
        details: 
        `<div class="card">
                    <div class="card-body">
                                    <p class="card-text">
                                        <ul>
                                            <li>Developed using HTML and CSS.</li>
                                            <li>Incorporates various animations for a dynamic user experience.</li>
                                            <li>Implements responsive design without the use of any framework or library.
                                            </li>

                                        </ul>
                                    </p>
                                </div>
                                <div class="card-footer bg-transparent border-warning">
                                    <a href="https://farjiyao.github.io/bakeryshop-mtm6201/" class="link-danger"
                                        aria-label="Goes to the design link">View the design <i
                                            class="fa fa-angle-double-right"></i>
                                    </a>
                                </div>
                    <button class="close-btn">Close</button>
        </div>`
    },
    {
        title: "Farjiyatech Innovation",
        details: 
        `
            <div class="card">
                <div class="card-body">
                                <p class="card-text">
                                    <ul>
                                        <li>Developed using only bootstrap framework.</li>
                                        <li>Utilizes Animation on Scroll (AOS) to introduce animations dynamically as
                                            users scroll. </li>
                                        <li>Designed and photographed a significant number of the images and logos
                                            employed.
                                        </li>
                                    </ul>
                                </p>
                            </div>

                            <div class="card-footer bg-transparent border-warning">
                                <a href="https://farjiyao.github.io/portfolio/index.html" class="link-danger"
                                    aria-label="Goes to the design link">View the design
                                    <i class="fa fa-angle-double-right"></i>
                                </a>
                            </div>
                <button class="close-btn">Close</button>
            </div>
        `
    },
    {
        title: "Digital Media Company",
        details: 
        `
            <div class="card">
               <div class="card-body">
                                <p class="card-text ">
                                    <ul>
                                        <li>
                                            Constructed with pure HTML and CSS, adhering to best practices.</li>
                                        <li>Meticulously translate a provided mockup into a pixel-perfect website.</li>
                                        <li>As part of the project, I mastered the use of GitHub for web hosting and
                                            publication.</li>
                                    </ul>
                                </p>
                            </div>

                            <div class="card-footer bg-transparent border-warning">
                                <a href="https://farjiyao.github.io/final-project/" class="link-danger"
                                    aria-label="Goes to the design link">View the design
                                    <i class="fa fa-angle-double-right"></i>
                                </a>
                            </div>
                <button class="close-btn">Close</button>
            </div>
        `
    },
    {
        title: "QuizCraze",
        details: 
        `
            <div class="card">
               <div class="card-body">
                                <p class="card-text">
                                    <ul>
                                        <li>Interactive Quiz App for Coding Questions</li>
                                        <li>Designed using adobe xd</li>
                                        <li>Facilitates coding practice and knowledge assessment in a gamified
                                            environment</li>
                                    </ul>

                                </p>
                            </div>
                            <div class="card-footer bg-transparent border-warning">
                                <a href="https://farjiyao.github.io/QuizCraze/"
                                    class="link-danger" aria-label="Goes to the design link">View
                                    the
                                    design <i class="fa fa-angle-double-right"></i>

                                </a>
                            </div>
                <button class="close-btn">Close</button>
            </div>
        `
    },
    {
        title: "Cookies N Cream",
        details: 
        `
            <div class="card">
               <div class="card-body">
                                <p class="card-text">
                                    <ul>
                                        <li>Bakery shop's website, very first project in Adobe XD.</li>
                                        <li>Primarily focused on learning how to use the tool.</li>
                                        <li>Implemented foundational design knowledge.</li>
                                    </ul>
                                </p>
                            </div>
                            <div class="card-footer bg-transparent border-warning">
                                <a href="https://xd.adobe.com/view/ae6effbd-5bc6-4b56-aa99-d51a1d25c157-fb3d/?fullscreen&hints=off"
                                    class="link-danger" aria-label="Goes to the design link">
                                    View the design
                                    <i class="fa fa-angle-double-right"></i>
                                </a>
                            </div>
                <button class="close-btn">Close</button>
            </div>
        `
    },
    {
        title: "Planners",
        details: 
        `
            <div class="card">
               <div class="card-body">
                                <p class="card-text">
                                    <ul>
                                        <li>
                                            To-do list mobile application mockup design.
                                        </li>
                                        <li>Emphasis on minimal but effective functionality.
                                        </li>
                                        <li>
                                            Prioritizes a clear and user-friendly interface.
                                        </li>
                                    </ul>
                                </p>
                            </div>
                            <div class="card-footer bg-transparent border-warning">
                                <a href="https://xd.adobe.com/view/a9e05305-4a36-4cc3-a781-5cc3e2d96e1d-fcb3/"
                                    class="link-danger" aria-label="Goes to the design link">View the design
                                    <i class="fa fa-angle-double-right"></i>
                                </a>
                            </div>
                <button class="close-btn">Close</button>
            </div>
        `
    },
    
];

document.querySelectorAll('.details-btn').forEach((button, index) => {
    button.addEventListener('click', function() {
        const project = projects[index];
        const contentDiv = button.nextElementSibling;
        contentDiv.innerHTML = project.details;
        contentDiv.hidden = false;

        contentDiv.querySelector('.close-btn').addEventListener('click', function() {
            contentDiv.hidden = true;
        });
    });
});