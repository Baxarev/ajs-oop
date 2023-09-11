import Characters from "./сharacter/Character";
import { Bowerman } from "./сharacter/Bowerman";
import { Swordsman } from "./сharacter/Swordsman";
import { Magician } from "./сharacter/Magician";
import { Undead } from "./сharacter/Undead";
import { Zombie } from "./сharacter/Zombie";
import { Daemon } from "./сharacter/Daemon";

function testClasses(classType, attack, defence) {
  test("classes test", () => {
    const classMap = {
      Bowerman: Bowerman,
      Swordsman: Swordsman,
      Magician: Magician,
      Undead: Undead,
      Zombie: Zombie,
      Daemon: Daemon,
    };

    const test = new classMap[classType]("Name", classType);

    expect(test.attack).toBe(attack);
    expect(test.defence).toBe(defence);
  });
}
testClasses("Bowerman", 25, 25);
testClasses("Daemon", 10, 40);
testClasses("Magician", 10, 40);
testClasses("Swordsman", 40, 10);
testClasses("Undead", 25, 25);
testClasses("Zombie", 40, 10);

describe("Character test", () => {
  let test;
  beforeEach(() => {
    test = new Bowerman("Name", "Bowerman");
  });

  it("lvlup test if health > 0", () => {
    test.levelUp();
    expect(test.lvl).toBe(2);
    expect(test.health).toBe(100);
    expect(test.attack).toBe(30);
    expect(test.defence).toBe(30);
  });

  it("lvlup test if health = 0", () => {
    test.health = 0;
    test.levelUp();
    expect(test.lvl).toBe(1);
    expect(test.health).toBe(0);
    expect(test.attack).toBe(25);
    expect(test.defence).toBe(25);
  });
});

describe("name, type args test", () => {
  it("invalid type test", () => {
    expect(() => new Bowerman("Name", "Bsowersdmangs")).toThrow(
      "Введите подходящий класс"
    );
  });

  it("name > 2 test", () => {
    expect(() => new Bowerman("N", "Bowerman")).toThrow(
      "Имя должно быть от 2 до 10 символов"
    );
  });
});

describe("dmgPoint test", () => {
  let test;
  beforeEach(() => {
    test = new Bowerman("Name", "Bowerman");
  });

  it("dmgPoint test health > 0", () => {
    test.health = 100;
    test.damage(10);
    expect(test.health).toBeCloseTo(92.5);
  });

  it("dmgPoint test health < 0", () => {
    test.health = -10;
    test.damage(10);
    expect(test.health).toBe(-10);
  });
});
