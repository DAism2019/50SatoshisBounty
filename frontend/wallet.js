const contractAddress="0x88eF10710F37C74CD29d83f781cCb14F51f3Bf6F";
const getAddress='0x5aD91dCCD7b5F15A454213B36aaDa82a8FbD4ea2';
const abi=[
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "target",
        "type": "address"
      }
    ],
    "name": "AddressEmptyCode",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "implementation",
        "type": "address"
      }
    ],
    "name": "ERC1967InvalidImplementation",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ERC1967NonPayable",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "FailedInnerCall",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidInitialization",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NotInitializing",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "OwnableInvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "OwnableUnauthorizedAccount",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "UUPSUnauthorizedCallContext",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "slot",
        "type": "bytes32"
      }
    ],
    "name": "UUPSUnsupportedProxiableUUID",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "version",
        "type": "uint64"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "startBlock",
        "type": "uint256"
      }
    ],
    "name": "RewardStarted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "participant",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "RewardWithdrawn",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "implementation",
        "type": "address"
      }
    ],
    "name": "Upgraded",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "HALVING_INTERVAL",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "INITIAL_REWARD",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "PARTICIPANTS",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "TOTAL_REWARD",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "UPGRADE_INTERFACE_VERSION",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "participant",
        "type": "address"
      }
    ],
    "name": "getTotalCumulativeReward",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_satoshiFund",
        "type": "address"
      },
      {
        "internalType": "address[]",
        "name": "_participants",
        "type": "address[]"
      },
      {
        "internalType": "address",
        "name": "_uToken",
        "type": "address"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "isParticipant",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isStarted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "participants",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "proxiableUUID",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "satoshiFund",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "start",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "startBlock",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "uToken",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newImplementation",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "upgradeToAndCall",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "withdrawn",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
const centerNode = { id: 'center', x: 50, y: 50, reward: 21000000, text: 'Prize Pool' };
const participants=[];
[
  '0x5aD91dCCD7b5F15A454213B36aaDa82a8FbD4ea2',
  '0x69686FD9E4848A2E4627b77b693F76f7ee767A5C',
  '0x2Aca79ad177a14310FB3486Eed330e953133a92D',
  '0x32BEa2860d9C28A735439cc59802605ce1FcB787',
  '0x4bE79C2D9b700C4863760e4b95Ef7CD94565516e',
  '0x70c58cC68eEc54F9AA2694aa5575b6aC80da440c',
  '0xec2b29Ff28C8C340A2EF1Ba804ae1898bAd09caC',
  '0xdCdc2A2326fE1975A7C968BD82438cd64e8E3bB7',
  '0x0556F58978E12068912F6c4E083f9d0bc826D21b',
  '0x888888888DAc1d551DF1bdaAd5f2575884888808',
  '0x2558F3DD013654b1f776E1bad1c7884B1D6400e2',
  '0xBb01753CB7A793AA20E52ed848F7825A097116A8',
  '0x3827F23Ac3bEbDE871c9483b2f325BAf5c785978',
  '0x99b6A9156964256975F81e648Aa2906236777293',
  '0x4c8D92A2FA6222Ba84b8Ba498ceE3eC650D65926',
  '0xd5C7938886dBfb81Fd8F990540BcC8e32824e9CC',
  '0xc7102fDa143fe66bd625BcDF2a53ABc6e46b562D',
  '0xa5031A0B52DEE7169B5722eAB56165930e436557',
  '0x5919A8733B345A84aAF6777c74612A5534a7AA65',
  '0x39651748e97AF1B8904D8745B0d0353368bE66d1',
  '0x9c4317476BDB5A9a98a65fF726bF57187fB5b3A0',
  '0x8a0DA24d9B5BAc64F2480CA18A06AFe288150DE6',
  '0x5ff507BfBcB80641a368B0869A8600d2E02aaeD5',
  '0xE6f3465A71C9deE525AC92501A58b49e41C6be2F',
  '0x8E51A95FaC49F1015d74949F2CF9396D248DC0AC',
  '0x65F57a0e1D701b23b7e9C97C7231fDEC53DC860B',
  '0x5C2c9A0f650FAc44D029De50F9e484A4b74434Cb',
  '0x6b767CB1C9749076fC177b9A2C5684891C882854',
  '0x58c63d7204945D1E3EFb6ea3F6560708964eAF1c',
  '0xc50EFF9cF391e1FBBf0d207D0AE52AA6df1B603B',
  '0x348b47ae303b951977beAb25d264f7ceCdad7e6F',
  '0x1179Cfe091bFAdB11aB5967BD74B11C1D5E779fF',
  '0x6B485D301f0A4659Ef8aFEf5B2D7cA127b69136E',
  '0x4a555eb8d91D799D0169343fDA9D74E042DdcA45',
  '0xFA1e40278C1901005A6000082E20496e85011956',
  '0x483de585BD01223cDeCD6529fdcbCBAa39f83112',
  '0xB39D48f4167519ADa7a769875966907189CA13E2',
  '0xD92C3a7095eF0E33C33815f6c85507398b5a9868',
  '0xae52A62026D45adB3819D5392d172d87147964eC',
  '0xD836f673a62A18AebD0c18DE437529e7A45ECAbA',
  '0x9A73aA32B51B416c7EDAEBB63423684BA196Ce1e',
  '0x8078A0F9aa3662a88a7887e707aCE302058bF9E1',
  '0x200B5f0DE160646CbB988e2d9C4602779BC12681',
  '0x55Bc0Ff6745AF30eC599C6F1Df238649c12Aa5ef',
  '0x540848B7A0c02679a0055Abb3A0f8ed5104022D6',
  '0x8811BE9af62BA8aCF57901Cdf289c1a9A2B078AD',
  '0x09f64D9be11918B6A9F0378Bd4d10692f80811B2',
  '0xB42C861AD11EFE1301852b6dc31966c7F8F93094',
  '0x8DFFBd27ef78E83Ee9E590A8f36F929B843fa3EB',
  '0x3a9c1D83AA54D45882D37C3Aee544C6E29A9Ce3f'
].forEach((str,i) =>{participants.push({
  id: `p${i + 1}`,
  text: str.slice(-4),
  // text: str,
  reward: 0,
  maxReward: centerNode.reward / 50,
  x: 50 + 220 * Math.cos((i / 50) * 2 * Math.PI),
  y: 50 + 220 * Math.sin((i / 50) * 2 * Math.PI)
 })});

const walletSelector = document.getElementById('wallet-selector');
const statusDisplay = document.getElementById('status');
const utoValueSpan = document.getElementById('utoValue');
const disconnectButton = document.getElementById('disconnect-button');
const loadingOverlay = document.getElementById('loading-overlay');

const mindmapContainer = document.getElementById('mindmap-container');
const progressBarSummary = document.getElementById('progress-bar-summary');
const progressPercent = document.getElementById('progress-percent');

const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');


let provider;
let isConnected = false; // Track wallet connection status
let address = null;

async function detectWallets() {
  if (!window.ethereum) {
    statusDisplay.textContent = "No wallet detected. Please install MetaMask or another wallet plugin.";
    return;
  }

  const providers = window.ethereum.providers || [window.ethereum];
    
  const walletList = document.createElement('ul');
  walletList.className = 'wallet-list';

   // 排除 `window.ethereum` 本身，因为它是一个代理对象
   const filteredProviders = providers.filter(p => p !== window.ethereum)


  if (filteredProviders.length === 0 ) {
      const defaultProvider = {
        name: 'Default Wallet',
        isMetaMask : window.ethereum.isMetaMask,
        isCoinbaseWallet : window.ethereum.isCoinbaseWallet
      }
      filteredProviders.push(defaultProvider)
  }


  filteredProviders.forEach(async (provider, index) => {
      const listItem = document.createElement('li');
      listItem.style.border='1px solid yellow';
      const button = document.createElement('button');

      let walletName;
     if (provider.name ) {
        walletName = provider.name
     } else if (provider.isMetaMask) {
        walletName = 'MetaMask'
      } else if (provider.isCoinbaseWallet) {
        walletName = 'Coinbase Wallet'
      }
     else {
        walletName = "Other Wallet"
     }
      button.textContent = `Connect with ${walletName}`;
      button.className = 'wallet-button';

    button.addEventListener('click', async () => {
        try {
            await connectWallet(provider,index);
        } catch (error) {
            statusDisplay.textContent = `Failed to connect: ${error.message}`;
        }
    });

      listItem.appendChild(button);
      walletList.appendChild(listItem);
  });
    walletSelector.appendChild(walletList)
    
}


 async function connectWallet(provider,index) {
        try {
             let  selectedProvider
            if (provider.name) {
                selectedProvider = window.ethereum;
            } else {
                selectedProvider = window.ethereum.providers[index]
            }

            await selectedProvider.request({ method: 'eth_requestAccounts' });
            provider = new ethers.BrowserProvider(selectedProvider);
            window.login_signer = await provider.getSigner();
            address = await window.login_signer.getAddress();
            isConnected = true;
           updateUI();
            statusDisplay.textContent = `${address}`;
            setTimeout(async function(){
              await refreshUtoValue(address)
            },10)
           

        } catch (error) {
            statusDisplay.textContent = `Failed to connect: ${error.message}`;
        }
    }

   function disconnectWallet() {
    provider = null;
      address = null;
    isConnected = false;
      updateUI();
      statusDisplay.textContent = 'Wallet disconnected.';
      walletSelector.innerHTML = "";
      detectWallets();
    }

    function updateUI() {
        if (isConnected) {
             walletSelector.style.display = 'none';
            disconnectButton.parentNode.style.display = 'inline-flex';
        } else {
            walletSelector.style.display = 'block';
            disconnectButton.parentNode.style.display = 'none';
         }
    }

  async function refreshUtoValue(address) {
        const res=await window.daism_contract.getTotalCumulativeReward(address);
        utoValueSpan.innerHTML=`${window.ethers.formatUnits(res,8)} UTO`
  }

  disconnectButton.addEventListener('click', disconnectWallet);

  async function withdraw(){
    try {
      
   
    showLoadingOverlay();
    console.log("begin...............")
      const contract = new window.ethers.Contract(contractAddress, abi, window.login_signer);
      let res=await contract.withdraw();
      await res.wait(1)
      
      console.log("交易成功!");
    } catch (error) {
      console.error(error)
      alert(error.message)
    }
    finally{
      hideLoadingOverlay();
    }
  }

  
  function showLoadingOverlay() {
    loadingOverlay.style.display = 'flex';
    disablePageInteraction();
}

function hideLoadingOverlay() {
    loadingOverlay.style.display = 'none';
    enablePageInteraction();
}

function disablePageInteraction() {
    document.body.style.pointerEvents = 'none'; // 禁止页面所有元素响应鼠标事件
    document.body.style.cursor = 'wait'; // 修改鼠标为等待状态
}

function enablePageInteraction() {
     document.body.style.pointerEvents = 'auto';  // 恢复鼠标事件
     document.body.style.cursor = 'auto'; // 恢复鼠标状态
}

 // 创建节点
function createNode({ id, x, y, text, reward }) {
  const div = document.createElement('div');
  div.id = id;
  div.style.width = '160px';
  div.style.height = '28px';
  div.style.position = 'absolute';
  div.style.textAlign = 'center';
  div.style.lineHeight = '28px';
  div.style.border = '1px solid black';
  div.style.borderRadius = '5px';
  div.style.backgroundColor = '#f0f0f0';

  // div.className = 'mindmap-node';
  div.style.left = `${x + 210}px`; // 中心偏移
  div.style.top = `${y + 150}px`; // 中心偏移
  div.innerHTML = `<strong>${text}</strong>：<span class="reward">${reward.toFixed(0)} UTO</span>`;
  mindmapContainer.appendChild(div);
}

 // 更新奖金流动态
 async function updateRewards() {
    const res=await window.daism_contract.getTotalCumulativeReward(getAddress);
    // utoValueSpan.innerHTML=`${window.ethers.formatUnits(res,8)} UTO`
  

  let totalProgress =parseInt(window.ethers.formatUnits(res,8));
  participants.forEach(p => {
      p.reward = totalProgress; 
      document.getElementById(p.id).querySelector('.reward').textContent = `${p.reward.toFixed(0)} UTO`;
      // totalProgress += p.reward;
  });
  const overallProgress = (totalProgress*50 / centerNode.reward) * 100;
  progressBarSummary.style.width = `${overallProgress}%`;
  progressPercent.textContent = `${overallProgress.toFixed(2)}%`;
}

  // 渲染流支付模型
  function renderMindmap() {
    createNode(centerNode); // 中心节点
    participants.forEach(p => createNode(p)); // 参与者节点
}
  async function start() {
    updateUI();
		detectWallets();
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to the clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
    const nodeUrl="https://eth-sepolia.g.alchemy.com/v2/Q5CwDjcSGYsGkbO7J4cQ1TQL7vrsjMad"
    const wallet_provider = new window.ethers.JsonRpcProvider(nodeUrl);
    window.daism_contract = new window.ethers.Contract(contractAddress, abi, wallet_provider);
    
        // 初始化
        renderMindmap();
        updateRewards()
        setInterval(updateRewards, 24*1000); // 动态更新奖金流
  }