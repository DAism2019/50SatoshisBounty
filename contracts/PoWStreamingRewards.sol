// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
interface ISatoshiUTOFund{
    function useRule(uint index, address to, uint amount) external returns(uint);
    function getRuleWarehouse(address addr) external returns(uint[] memory);
}
contract PoWStreamingRewards is OwnableUpgradeable, UUPSUpgradeable{
    uint256 public constant TOTAL_REWARD = 21_000_000 * 1e8; // 21,000,000 UTO with 8 decimals
    uint256 public constant INITIAL_REWARD = 50 * 1e8; // 50 UTO per block
    uint256 public constant PARTICIPANTS = 50;
    uint256 public constant HALVING_INTERVAL = 2100;//210_000; // Blocks per halving

    address public  satoshiFund;
    IERC20 public uToken; // uToken 通证合约地址
    bool public isStarted;
    uint256 public startBlock;
    mapping(address => uint256) public withdrawn;
    address[] public participants;
    mapping(address => bool) public isParticipant;//判断是否是成员

    event RewardStarted(uint256 startBlock);
    event RewardWithdrawn(address participant, uint256 amount);

    constructor(){
        _disableInitializers();
    }
    function initialize(address _satoshiFund, address[] memory _participants, address _uToken,address _initOwner) public  initializer {
       require(_participants.length == PARTICIPANTS, "Must have 50 participants");
        satoshiFund = _satoshiFund;
        participants = _participants;
        uToken = IERC20(_uToken);
        for (uint256 i = 0; i < _participants.length; i++) {
            isParticipant[_participants[i]] = true;
        }
        {
            __Ownable_init(_initOwner);
            __UUPSUpgradeable_init();            
        }
    }
    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}


    function start() external {
        require(!isStarted, "Already started");
        //require(block.timestamp >= 1735862400, "Cannot start before 2025-01-03 00:00:00 UTC");
        startBlock = block.number;
        uint[] memory ruleIds = ISatoshiUTOFund(satoshiFund).getRuleWarehouse(address(this));
        require(ruleIds.length > 0, "No rules available");
        ISatoshiUTOFund(satoshiFund).useRule(ruleIds[ruleIds.length-1], address(this), TOTAL_REWARD);
        require(uToken.balanceOf(address(this)) == TOTAL_REWARD,"Insufficient reward funds deposited");
        isStarted = true;
        emit RewardStarted(startBlock);
    }

    function calculateReward(uint256 n) internal pure returns (uint256) {
        uint256 halvingPeriod = n / HALVING_INTERVAL;
        if (halvingPeriod==0) {
            return n *1e2;
        } else if (halvingPeriod==1) {
            return 210_000 + ((n - HALVING_INTERVAL) *1e2)/ 2 ;
        } else if (halvingPeriod==2) {
            return 315_000 + ((n - 2 * HALVING_INTERVAL) *1e2) / 4 ;
        } else if (halvingPeriod==3) {
            return 367_500 + ((n - 3 * HALVING_INTERVAL) *1e2)/ 8 ;
        } else {
            return 420_000;
        }
    }

    function getTotalCumulativeReward(address participant) public view returns (uint256) {
        require(isStarted, "PoWStreaming has not been triggered.");
        if(!isParticipant[participant]) return 0;
        uint256 elapsedBlocks = block.number - startBlock;
        return calculateReward(elapsedBlocks) * 1e8 - withdrawn[participant];
    }

    function withdraw() external {
        uint256 halvingPeriod = (block.number - startBlock) / HALVING_INTERVAL;
        if(halvingPeriod>3){
            for (uint256 i = 0; i < participants.length; i++) {
                address participant = participants[i];
                uint256 totalEarned = getTotalCumulativeReward(participant);
                if(totalEarned>0){
                    withdrawn[participant] += totalEarned;
                    require(uToken.transfer(participant, totalEarned), "Transfer failed");
                    emit RewardWithdrawn(participant, totalEarned);
                }
            }
        }else{
            uint256 totalEarned = getTotalCumulativeReward(msg.sender);
            require(totalEarned > 0, "No reward to withdraw");
            withdrawn[msg.sender] += totalEarned;
            require(uToken.transfer(msg.sender, totalEarned), "Transfer failed");
            emit RewardWithdrawn(msg.sender, totalEarned);
        }
    }
    function getAllParticipants() public view returns(address[] memory){
        return participants;
    }
    
}

