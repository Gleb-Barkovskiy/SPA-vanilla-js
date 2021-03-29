import Component from './Component.js';

class Settings extends Component {
    constructor(){
        super();
    };
    async getHTML(){
        return (`
            <div class="settings wrapper">
                <h1>Settings</h1>
            </div>
        `);
    };
};

export default new Settings();