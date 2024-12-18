class CUserWithSkills
{
    skills: string[] = []

    constructor ( skillOrSkills: string | string[] )
    {
        if ( typeof skillOrSkills === "string" ) this.skills = [ ...this.skills, skillOrSkills ]
        else if(Array.isArray( skillOrSkills )) this.skills = [ ...this.skills, ...skillOrSkills ]

    }
    addSkill ( skill: string ): void
    addSkill( skills: string[] ): void
    addSkill ( skillOrSkills: string | string[] ): void
    {
        if ( typeof skillOrSkills === 'string' ) this.skills = [...this.skills, skillOrSkills]
        else if(Array.isArray(skillOrSkills))this.skills = [...this.skills, ...skillOrSkills]
    }
}

const userWithSkills = new CUserWithSkills( 'DevOps' )
console.log( userWithSkills.addSkill('Dev') )
console.log( userWithSkills.addSkill( 'Front-End' ) )
console.log( userWithSkills )