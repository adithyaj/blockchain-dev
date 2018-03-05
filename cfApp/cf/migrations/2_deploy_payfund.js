var payfund = artifacts.require("./PayFund.sol");

module.exports = function(deployer) {

    deployer.deploy(payfund,"Chancellor Dirks Kickstarter");


};
