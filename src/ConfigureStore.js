import wallet from './reducer/MyWallet';
import {createStore} from 'redux';

const store= createStore(wallet);
export default store;
