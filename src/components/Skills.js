import React from 'react';
import './skills.css';


const Skills = () => {
    return (
        <div id='skills'>
            <h2>Compétences</h2>
            <div className="skillsCategories">
                <div className="skillsName">
                <h4>Front-end</h4>
                <p><i class="fa-brands fa-html5"></i> HTML</p>
                <p><i class="fa-brands fa-css3-alt"></i> CSS</p>
                <p><i class="fa-brands fa-js"></i> Javascript</p>
                <p><i class="fa-brands fa-react"></i> React</p>
                </div>
                <div className="skillsName">
                <h4>Back-end</h4>
                <p><i class="fa-brands fa-node"></i> Node.js</p>
                <p><i class="fa-brands fa-node-js"></i> Express.js</p>
                <p><i class="fa-solid fa-database"></i> MongoDB</p>
                </div>
                <div className="skillsName">
                <h4>Outils</h4>
                <p><i class="fa-solid fa-code"></i> VS Code</p>
                <p><i class="fa-brands fa-github"></i> GitHub</p>
                <p><i class="fa-brands fa-npm"></i> npm</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;