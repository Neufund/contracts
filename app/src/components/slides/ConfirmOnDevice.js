import React from 'react';
import Slide from './Slide';
import styles from './ConfirmOnDevice.css';
import slideWrapper from './SlideWrapper.css'
import {toPromise} from '../../utils';
import getICOContract from '../../ICO';

class ConfirmOnDevice extends React.Component {
    constructor() {
        super();
        this.sendDonation();
    }

    async sendDonation() {
        let ICO = await getICOContract();
        let tokens = await ICO.balanceOf(accounts[0], {from: accounts[0]});
        console.log(`You have ${tokens.valueOf()} tokens`);
        let accounts = await toPromise(web3.eth.getAccounts);
        web3.eth.defaultAccount = accounts[0];
        let txHash = await toPromise(web3.eth.sendTransaction, {
            value: web3.toWei(0.01, "ether"),
            from: accounts[0],
            to: ICO.address,
            gas: 89000
        });
        console.log(`https://testnet.etherscan.io/tx/${txHash}`);
        return txHash;
    }

    render() {
        return (
            <Slide linkTo="/success">
                <div className={slideWrapper.wrapper}>
                    <p>Confirm on device</p>
                    <div className={styles.confirm}></div>
                    <div className={styles.details}></div>
                </div>
            </Slide>
        );
    }
}

export default ConfirmOnDevice;