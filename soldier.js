   //______Info___________________
const sodlier = {
  name: "Snake",
  hp: 10,
  weapon: {
    name: "werlord",
    ammo: 30,
  },
  clip: 3,
   //_____________________________



  //_________Функция_стрельбы____________________________
  shoot: function () {
    if (this.weapon.ammo !== 0) {
      this.weapon.ammo = 30;
      this.clip--;
      console.log(`${this.weapon.name}: PEW PEW`);
    } else if (this.weapon.ammo === 0) {
      console.log(`${this.name}: кончились патроны`);
    }
  },
  //_____________________________________________________



  //_________Функция_перезарядки_________________________
  reload: function () {
    if (this.weapon.ammo !== 0) {
      this.weapon.ammo = 30;
      this.clip--;
      console.log(`${this.name}: перезаряжаюсь`);
    } else if (this.clip === 0) {
      console.log(`Имя ${this.name}: кончились магазины`);
    }
  },
  //______________________________________________________



  //_________Функция_получения_ранения____________________
  gotHit: function () {
    if (this.hp === 10) {
      this.hp--;
      console.log(`Имя ${this.name}: я ранен`);
    } else if (this.hp === 0) {
      console.log(`Имя ${this.name}: умер`);
    }
  },



  //_________Функция_лечения______________________________
  medkit: function () {
    if (this.hp !== 10) {
      this.hp++;
      console.log(`${this.name}: лечюсь`);
    }
  },



  //_________Функция_курения_______________________________
  smoke: function () {
    if (this.hp > 0) {
      this.hp--;
      console.log(`${this.name}: курит сигару`);
    }
  },
};



//______Для_вызова_методов__________________________________
sodlier.shoot();
sodlier.reload();
sodlier.gotHit();
sodlier.medkit();
sodlier.smoke();
