import React from 'react';
import styles from './Balance.css';
import ETHLogo from '../../images/ETHlogo.png';
import NMKLogo from '../../images/NMKLogo.png';
import web3 from '../initWeb3';
import getICOContract from '../ICO';
import {toPromise} from '../utils';
import BigNumber from 'bignumber.js';

class Balance extends React.Component {
    static propTypes = {
        of: React.PropTypes.oneOf(["ETH", "NMK"])
    };

    constructor() {
        super();
        this.state = {
            balance: "..."
        };
        this.account = "0x3ce8cce8b7dac94d228a85c2328b926279ab9b06";
    }

    async componentWillMount() {
        // Provider engine throws if no block is loaded
        let block = await toPromise(web3.eth.getBlock, "latest");
        this.fetchBalance();
    }

    async fetchBalance() {
        if (this.props.of === "ETH") {
            this.fetchETH()
        } else {
            this.fetchNMK()
        }
    }

    async fetchETH() {
        let balance = await toPromise(web3.eth.getBalance, this.account);
        balance = Number(web3.fromWei(balance.valueOf(), "ether")).toFixed(3);
        this.setState({balance});
    }

    async fetchNMK() {
        let ICO = await getICOContract();
        let tokens = await ICO.balanceOf.call(this.account, {from: this.account});
        let decimals = await ICO.decimals.call({from: this.account});
        let balance = tokens.div(new BigNumber(10).pow(decimals)).valueOf();
        this.setState({balance});
    }

    render() {
        let logo = this.props.of === "ETH" ? ETHLogo : NMKLogo;
        return (
            <div className={styles.balance}>
                <img src={logo} alt={this.props.of}/>
                <div><span>{this.state.balance}</span></div>
                {this.props.children}
            </div>
        );
    }
}

export default Balance;