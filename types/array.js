"use strict";
const skills = ['dev', 'DevOps', 'mover'];
skills.forEach(s => console.log(s.toLocaleUpperCase()));
const itSkills = skills
    .filter(s => s !== 'mover')
    .map(s => s.toLocaleUpperCase() + '! ').reduce((a, b) => a + b);
console.log(itSkills);
