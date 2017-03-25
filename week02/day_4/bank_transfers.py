__author__ = 'ylwoi'

# Create function that returns the name and balance of cash on an account

# Create function that transfers an balance of cash from one account to another
# it should have three parameters:
#  - from account_number
#  - to account_number
#  - balance
#
# Print "404 - account not found" if any of the account numbers don't exist

accounts = [
	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]

def balance_inqury(account_list, acc_number):
    for i in account_list:
        if i['account_number'] == acc_number:
            return i['client_name'], i['balance']

print(balance_inqury(accounts, 11234543))
print(balance_inqury(accounts, 43546731))

def cash_transfer(from_account_number, to_account_number, cash):
    founded_accounts = 0
    for i in accounts:
            if i['account_number'] == from_account_number:
                founded_accounts += 1
            if i['account_number'] == to_account_number:
                founded_accounts += 1
    if founded_accounts == 2:
        for i in accounts:
            if i['account_number'] == from_account_number:
                i['balance'] -= cash
            if i['account_number'] == to_account_number:
                i['balance'] += cash
    else:
        print("404 - account not found")

cash_transfer(43546731, 11234543, 100000000)

print(balance_inqury(accounts, 11234543))
print(balance_inqury(accounts, 43546731))