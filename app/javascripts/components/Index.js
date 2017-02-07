import React from 'react';
import nflogo from '../../images/nflogo.png';

class Index extends React.Component {
    render() {
        return (
            <div>
                <h1>MS2</h1>
                <h2>ICO donation</h2>
                <img src={nflogo} alt="nflogo"/>
                <h3>
                    You have
                    <span class="black">
                        <span id="balance"></span>
                        TOKENS
                    </span>
                </h3>
                <br/>
                <h1>Make donation</h1>
                <br/>
                <label for="amount">Amount:</label>
                <input type="text" id="amount" placeholder="e.g., 95"></input>
                <br/>
                <label for="receiver">To Address:</label>
                <input type="text" id="receiver" placeholder="e.g., 0x93e66d9baea28c17d9fc393b53e3fbdd76899dae"></input>
                <br/><br/>
                <button id="send" onclick="App.sendCoin()">Make donation</button>
                <span id="status"></span>
                <br/>
                <span class="hint"><strong>Hint:</strong> open the browser developer console to view any errors and warnings.</span>
            </div>
        );
    }
}

export default Index;