//合约地址
const contractAddress="0x21B716658ee58ccbC15D7aB6f2bdD4F5cF92ECE8";
//发送计算请求的钱包地址
let getAddress=""; 
//中心点
const centerNode = { id: 'center', x: 0, y: 50, reward: 21000000, text: 'Prize Pool' };
//50个帐号
const participants=[];
let login_address='';
let ra=document.documentElement.clientWidth;
const NET={'_0xaa36a7':'sepolia','_0x4268':'holesky','_0x1':'mainnet','_11155111':'sepolia','_17000':'holesky',"_1":"mainnet"}
const SAnetworkName='sepolia';
const walletSelector = document.getElementById('wallet-selector');
const statusDisplay = document.getElementById('status');
const utoValueSpan = document.getElementById('utoValue');
const disconnectButton = document.getElementById('disconnect-button');
const loadingOverlay = document.getElementById('loading-overlay');
const mindmapContainer = document.getElementById('mindmap-container');
const progressBarSummary = document.getElementById('progress-bar-summary');
const progressPercent = document.getElementById('progress-percent');
const tabButtons = document.querySelectorAll('.tab-button');

let provider;
let isConnected = false; // Track wallet connection status
let address = null;

//生成钱包按钮
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
      // listItem.style.border='1px solid yellow';
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
//连接钱包
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
          const network=await provider.getNetwork();
          let tempChainId = network.chainId.toString();
          if(NET[`_${tempChainId}`]!=SAnetworkName){
            alert("Please log in to the "+SAnetworkName+" network!")
            return false;
          }
          window.login_signer = await provider.getSigner();
          login_address = await window.login_signer.getAddress();
          isConnected = true;
          updateUI();
          statusDisplay.textContent = `${login_address}`;
          setTimeout(async function(){
            await refreshUtoValue()
          },10)
          

      } catch (error) {
          statusDisplay.textContent = `Failed to connect: ${error.message}`;
      }
  }

  //断开连接
   function disconnectWallet() {
    provider = null;
      address = null;
    isConnected = false;
      updateUI();
      statusDisplay.textContent = 'Wallet disconnected.';
      walletSelector.innerHTML = "";
      detectWallets();
  }

  //登录和断开状态切换
  function updateUI() {
      if (isConnected) {
            walletSelector.style.display = 'none';
          disconnectButton.parentNode.style.display = 'inline-flex';
      } else {
          walletSelector.style.display = 'block';
          disconnectButton.parentNode.style.display = 'none';
        }
  }

  async function refreshUtoValue() {
    if(login_address) {
        const res=await window.daism_contract.getTotalCumulativeReward(login_address);
        utoValueSpan.innerHTML=`${window.ethers.formatUnits(res,8)} UTO`;
    }
  }

  disconnectButton.addEventListener('click', disconnectWallet);

  //提现
  async function withdraw(){
    try {   
    showLoadingOverlay();
    console.log("begin...............")
      const contract = new window.ethers.Contract(contractAddress, window.daism_abi, window.login_signer);
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
  div.style.width = '10rem';
  div.style.height = '28px';
  div.style.position = 'absolute';
  div.style.textAlign = 'center';
  div.style.lineHeight = '28px';
  div.style.border = '1px solid black';
  div.style.borderRadius = '5px';
  div.style.backgroundColor = '#f0f0f0';

  // div.className = 'mindmap-node';
  div.style.left = `${x +(ra>900?210:ra/4-10) }px`; // 中心偏移
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
  await refreshUtoValue()
}

  // 渲染流支付模型
  function renderMindmap() {
    createNode(centerNode); // 中心节点
    participants.forEach(p => createNode(p)); // 参与者节点
}

  async function start() {

    updateUI();
		detectWallets();

    //tab 切换
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            Array.from(button.parentNode.children).forEach(btn => btn.classList.remove('active'));
            Array.from(button.parentElement.nextElementSibling.children).forEach(content => content.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    const nodeUrl="https://eth-sepolia.g.alchemy.com/v2/Q5CwDjcSGYsGkbO7J4cQ1TQL7vrsjMad"
    const wallet_provider =await new window.ethers.JsonRpcProvider(nodeUrl);
    window.daism_contract =await new window.ethers.Contract(contractAddress, window.daism_abi, wallet_provider);
    let memberAr=await window.daism_contract.getAllParticipants();
    getAddress=memberAr[36];

    //50个中本聪赋值
    memberAr.forEach((str,i) =>{participants.push({
      id: `p${i + 1}`,
      text: str.slice(-4),
      // text: str,
      reward: 0,
      maxReward: centerNode.reward / 50,
      x: (ra>900?220:ra/4) * Math.cos((i / 50) * 2 * Math.PI),
      y: 50+220* Math.sin((i / 50) * 2 * Math.PI)
     })});
    
        // 初始化
        renderMindmap();
        updateRewards()
        setInterval(updateRewards, 24*1000); // 动态更新奖金流
  }

