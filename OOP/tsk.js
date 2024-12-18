"use strict";
class CUserWithSkills {
    constructor(skillOrSkills) {
        this.skills = [];
        if (typeof skillOrSkills === "string")
            this.skills = [...this.skills, skillOrSkills];
        else if (Array.isArray(skillOrSkills))
            this.skills = [...this.skills, ...skillOrSkills];
    }
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills === 'string')
            this.skills = [...this.skills, skillOrSkills];
        else if (Array.isArray(skillOrSkills))
            this.skills = [...this.skills, ...skillOrSkills];
    }
}
const userWithSkills = new CUserWithSkills('DevOps');
console.log(userWithSkills.addSkill('Dev'));
console.log(userWithSkills.addSkill('Front-End'));
console.log(userWithSkills);
