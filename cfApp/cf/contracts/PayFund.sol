pragma solidity ^0.4.18;

contract PayFund {


    
    address owner;
    ufixed totalAmt = 0;
    string name;
    mapping(address => uint) fundMap;


    function PayFund(string _name) {

        owner = msg.sender;
        name = _name;
    }
    event fundEnd();
    
    function sendFund() payable {
        
        fundMap[msg.sender] += msg.value;
        totalAmt += msg.value;
        assert(totalAmt >= msg.value);
    }

    function withdraw() {
        require(msg.sender == owner);
        if (totalAmt > 0){
            totalAmt = 0;
            owner.transfer(totalAmt);
            fundEnd();
        }

    }

    function setName(string _n) {
        name = _n;
    }

    function getName() public view returns(string) {
        return name;
        
    }

    function getTotalAmt() returns(uint) {
        return totalAmt;
    }
 
    function()  {
        revert();
    }

    
}
