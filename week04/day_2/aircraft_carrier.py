__author__ = 'ylwoi'


#class Carrier:



class Aircraft():

    def __init__(self):
        self.type = ''
        self.max_ammo = 0
        self.base_damage = 0
        self.ammo_store = 0

    def fight(self):
        all_damage = self.base_damage * self.ammo_store
        self.ammo_store = 0
        return all_damage

    def get_type(self):
        return self.type

    def get_status(self):
        return 'Type:', self.type, 'Ammo:', self.ammo_store, 'Base Damage:', self.base_damage, 'All Damage:', self.fight()

    def refill(self, ammo):
        self.ammo = ammo
        if self.ammo_store < self.max_ammo:
            if self.ammo >= self.max_ammo - self.ammo_store:
                self.ammo -= self.max_ammo - self.ammo_store
                self.ammo_store = self.max_ammo
                return self.ammo
            else:
                self.ammo_store += self.ammo
                self.ammo = 0
                return self.ammo
        else:
            return self.ammo


class F16(Aircraft):
     def __init__(self):
        self.type = 'F16'
        self.max_ammo = 8
        self.base_damage = 30
        self.ammo_store = 0


class F35(Aircraft):
    def __init__(self):
        self.type = 'F35'
        self.max_ammo = 12
        self.base_damage = 50
        self.ammo_store = 0


aircraft = Aircraft()
plane1 = F16()
plane2 = F35()
print(plane1.fight())