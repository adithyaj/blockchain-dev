# Solidity Nitty Gritty
Here in this document I notate weird quirks about Solidity that I couldn't find direct answers to online, but compiled them so they can be references.

Post an issue/pull request on GitHub for any other questions or to add some of your experiences to this document.

## Require vs Assert

 - Require
	 - Refunds the user any remaining gas when doing an action
	 - Typically used for user input validation
 - Assert
	 - Drains all remaining gas
	 - Makes sense when you have overflows or code somehow gets to a state that 	shouldn't be possible.
		 - **This is typically for programmer errors/extreme case not user errors**
			 - ex: Write a program that sends numbers and adds to another one, make sure that we dont go from 0xfff...f to 0x0....0 and vice versa.
			 - If this happens, malicious behavior can occur, so burn remaining gas so nothing can be exploited

## Constant Vs Pure & View

 - Constant is now deprecated and replaced with two new functions: pure and view
 - View: READ-ONLY access to state data/storage
	 - ex: return what state we are in
 - Pure: NO access to state data/storage
	 - If I make an overflow safe math function in a state-based contract, I can make it pure because I will only use arguments/local variables.

## Errors Encountered:
Web3 and Solidity don't play nice and sometimes the stack trace doesn't provide useful information. Hopefully here's a bit of help!
 - Web3 - "Error: Invalid Address"
	 - This can be one of two things:
		 1. **ABI in JS Setupfile is wrong**. Make sure that you copied the json for the ABI from the build directory and has no whitespace or newline characters. JSONify can take care of that. 
		 2. Check the address of the deployed contract(s).
 - Truffle  - "Error encountered, bailing. Network state unknown. Review successful transactions manually.
Error: The contract code couldn't be stored, please check your gas amount."
	 - One of your deployed contracts isn't complete or has no reference in the deployed migrations. Check that.


----------


