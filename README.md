# mint-it

# How to commit code on github using git

Fist add your staged changes using `git add .`
Note: Make sure to run this command at the root directory of your repository i.e mint-it

Commit your changes locally using `git commit -m 'some Message about commit'`

Push your commits to Github using `git push`

To pull updated changes locally, use `git pull`


# SMART CONTRACT

We have in our smart contract the code for implementation of traits, which ensure that the blokchain protocols are followed. It has been commented out for now as it is needed only when smart contact is going to be deployed in the mainnet. At the moment, our smart contract is deployed on the testnet.


For local testing and unit testing of the smart contract, and to check whether our code works, we used *clarinet*.

To check for errors in our code, we use the command `clarinet check`

To locally stimulate deployment of contracts along with getting stimulated wallets to test contract functions, we use `clarinet console`
