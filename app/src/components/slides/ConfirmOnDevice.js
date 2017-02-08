import React from 'react';
import Slide from './Slide';
import styles from './ConfirmOnDevice.css';
import slideWrapper from './SlideWrapper.css'
import {toPromise} from '../../utils';
import getICOContract from '../../ICO';
import web3 from '../../initWeb3';

class ConfirmOnDevice extends React.Component {
    constructor() {
        super();
        this.state = {txHash: null, confirmed: false};
        this.latestFilter = web3.eth.filter('latest');
        this.sendDonation();
    }

    componentWillUnmount() {
        this.latestFilter.stopWatching();
    }

    async sendDonation() {
        let ICO = await getICOContract();
        let accounts = await toPromise(web3.eth.getAccounts);
        let tokens = await ICO.balanceOf(accounts[0], {from: accounts[0]});
        console.log(`You have ${tokens.valueOf()} tokens`);
        web3.eth.defaultAccount = accounts[0];
        let txHash = await toPromise(web3.eth.sendTransaction, {
            value: web3.toWei(0.01, "ether"),
            from: accounts[0],
            to: ICO.address,
            gas: 89000
        });
        console.log(`https://testnet.etherscan.io/tx/${txHash}`);
        this.watchTransaction(txHash);
    }

    async onConfirmed(receipt) {
        this.setState({confirmed: true});
        console.log(receipt);
    }

    async onNewBlock(error, result) {
        if (error) {
            console.log(error);
        } else {
            console.log(`New block ${result}`);
            let receipt = await toPromise(web3.eth.getTransactionReceipt, this.state.txHash);
            if (receipt) {
                this.onConfirmed.bind(this)(receipt)
            } else {
                console.log("Wait for it...!");
            }
        }
    }

    watchTransaction(txHash) {
        this.setState({txHash}, ()=> {
            this.latestFilter.watch(this.onNewBlock.bind(this))
        });
    }

    renderTransactionState() {
        if (!this.state.txHash) {
            return <p>Please confirm on device</p>
        } else {
            return (
                <p>
                    <div>Tx hash: {this.state.txHash}</div>
                    <div>{this.state.confirmed ? "CONFIRMED!" : "PENDING"}</div>
                </p>
            )
        }
    }

    render() {
        let transactionState = this.renderTransactionState();
        return (
            <Slide linkTo="/success">
                <div className={slideWrapper.wrapper}>
                    <p>Confirm on device</p>
                    <div className={styles.confirm}>
                        <div className={styles.txState}>{transactionState}</div>
                    </div>
                    <div className={styles.details}></div>
                </div>
            </Slide>
        );
    }
}

export default ConfirmOnDevice;