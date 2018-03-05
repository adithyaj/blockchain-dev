pragma solidity ^0.4.18;

contract PayFund {


    
    address owner;
    uint totalAmt = 0;
    string name;
    mapping(address => uint) fundMap;


    event newFund();
    event fundingDone();
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
            owner.transfer(totalAmt);
            totalAmt = 0;
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

    function incTest() {
        totalAmt +=1;
    }
    
    function()  {
        revert();
    }

    
}
