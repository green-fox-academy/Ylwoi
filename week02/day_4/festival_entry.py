__author__ = 'ylwoi'

# Queue of festivalgoers at entry
# no. of alcohol units
# no. of guns

# Create a security_check function that returns a list of festivalgoers who can
#  enter the festival

# If guns are found, remove them and put them on the watchlist (only the names)
# If alcohol is found confiscate it (set it to zero and add it to security_alchol
# _loot)
#  and let them enter the festival

watchlist = []

security_alchol_loot = 0

queue = [
	{ 'name': 'Amanda', 'alcohol': 10, 'guns': 1 },
	{ 'name': 'Tibi', 'alcohol': 0, 'guns': 0 },
	{ 'name': 'Dolores', 'alcohol': 0, 'guns': 1 },
	{ 'name': 'Wade', 'alcohol': 1, 'guns': 1 },
	{ 'name': 'Anna', 'alcohol': 10, 'guns': 0 },
	{ 'name': 'Rob', 'alcohol': 2, 'guns': 0 },
	{ 'name': 'Joerg', 'alcohol': 20, 'guns': 0 }
]

def security_check(list):
    global security_alchol_loot
    for i in list:
        if i['guns'] > 0:
            watchlist.append(i['name'])

    for i in list:
        for j in watchlist:
            if j == i['name']:
                list.remove(i)

    for i in list:
        if i['alcohol'] > 0:
            security_alchol_loot += i['alcohol']
            i['alcohol'] = 0


security_check(queue)

print(queue)
print(watchlist)
print(security_alchol_loot)