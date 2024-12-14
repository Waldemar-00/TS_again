const UserSkills: string[] = [ 'DEV', 'DevOps' ]
type User_01 = { name: string, skills: string[]}
const user_01: User_01 = {
    name: 'Peter',
    skills: []
}

UserSkills.forEach( s => user_01.skills.push( s ) ) //! The push method returns number
//! SO
type voidFn = () => void //! NOT IMPORTANT WHAT DOES this function returns. VOID exists for it!
