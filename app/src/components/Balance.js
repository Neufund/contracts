import React from 'react';
import styles from './Balance.css';
import ETHLogo from '../../images/ETHlogo.png';
import NMKLogo from '../../images/NMKlogo.png';
import web3 from '../initWeb3';
import getICOContract from '../ICO';
import {toPromise, makeCancelable} from '../utils';
import {hashHistory} from 'react-router';
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
    }

    async componentWillMount() {
        if (web3.eth.defaultAccount) {
            this.account = web3.eth.defaultAccount;
            // Provider engine throws if no block is loaded
            let block = await toPromise(web3.eth.getBlock, "latest");
            this.fetchBalance();
        } else {
            hashHistory.push("/connect_ledger");
        }
    }

    componentWillUnmount() {
        if (this.promise) {
            this.promise.cancel();
        }
    }

    async fetchBalance() {
        if (this.props.of === "ETH") {
            this.promise = makeCancelable(this.fetchETH())
        } else {
            this.promise = makeCancelable(this.fetchNMK())
        }
        this.promise.promise.then((balance)=>this.setState({balance}))
    }

    async fetchETH() {
        let balance = await toPromise(web3.eth.getBalance, this.account);
        Number(web3.fromWei(balance.valueOf(), "ether")).toFixed(3);
    }

    async fetchNMK() {
        let ICO = await getICOContract();
        let tokens = await ICO.balanceOf.call(this.account, {from: this.account});
        let decimals = await ICO.decimals.call({from: this.account});
        tokens.div(new BigNumber(10).pow(decimals)).valueOf();
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