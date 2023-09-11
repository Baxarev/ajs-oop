export default class Character {
  constructor(name, type) {
    const classes = [
      "Bowerman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];

    if (!classes.some((i) => i === type))
      throw new Error("Введите подходящий класс");
    if (name.length < 2 || name.length > 10)
      throw new Error("Имя должно быть от 2 до 10 символов");

    this.name = name;
    this.type = type;
    this.lvl = 1;
    this.health = 100;
  }

  levelUp() {
    if (this.health > 0) {
      this.lvl++;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      console.error("нельзя повысить level умершего");
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
