import Component from './Component.js';

class About extends Component {
    constructor(){
        super();
    };
    async getHTML(){
        return (`
            <div class="about wrapper">
                <h1>About</h1>
            </div>
        `);
    };
};

export default new About();