pragma solidity ^0.4.18;


contract Greeter {
    string greeting;

    function Greeter(string _greeting) {
        greeting = _greeting;
    }


    function setGreeting(string _greeting) public {
        greeting = _greeting;
    }

    function getGreeting() public view returns (string) {
        return greeting;
    }

}
