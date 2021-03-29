import Component from './Component.js';

class Home extends Component {
    constructor(){
        super();
    };
    async getHTML(){
        return (`
            <div class="home wrapper">
                <h1>Home</h1>
            </div>
        `);
    };
};

export default new Home();