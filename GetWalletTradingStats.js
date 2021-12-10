//  Copyright 2021 KombatKanga Ltd (Company number 13709049)
//  
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//  
//      http://www.apache.org/licenses/LICENSE-2.0
//  
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
//
//
//   _____                 _           _     _   __                                         _   
//  /  __ \               | |         | |   | | / /                                        | |  
//  | /  \/ ___  _ __ ___ | |__   __ _| |_  | |/ /  __ _ _ __   __ _  __ _        __ _ _ __| |_ 
//  | |    / _ \| '_ ` _ \| '_ \ / _` | __| |    \ / _` | '_ \ / _` |/ _` |      / _` | '__| __|
//  | \__/\ (_) | | | | | | |_) | (_| | |_  | |\  \ (_| | | | | (_| | (_| |  _  | (_| | |  | |_ 
//   \____/\___/|_| |_| |_|_.__/ \__,_|\__| \_| \_/\__,_|_| |_|\__, |\__,_| (_)  \__,_|_|   \__|
//                                                              __/ |                           
//                                                             |___/      
//     
//
//  A collection of useful functions to help navigate the XRPL (Ripple XRP SDK)  
//
//  If you want help using the XRPL.js libary or want us to add ant more functions
//  please get in contact with us at [[support@kombatkanga.art]]
//
//

// Private variables
var ckTools = require('./ckTools');

const account = "r3GKoSMHim8VfzX7Ewjfqi2Rzg85hJDt7z"; // walletId
const oldest = Date.parse('01 Sep 2021 00:00:00 UTC'); // How far to look back
const currencyId = "784B616E67614D4B310000000000000000000000";

// Private methods
async function GetWalletTradingStats() {

    let client = await ckTools.getClientAsync();
    let balances = await ckTools.getAccountLinessAsync(client, account);
    let walletTransactions = await ckTools.getWalletTransactionsAsync(client, account, oldest);

    let issuer = balances.filter(e => e.currencyId == currencyId);
    let stats = ckTools.getWalletTradingStats(account, walletTransactions, currencyId, issuer[0]?.issuer ?? null, issuer[0]?.balance ?? null);

    process.exit(1);
}

// Init
GetWalletTradingStats();
