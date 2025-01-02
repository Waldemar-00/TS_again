class Methods
{
    constructor ( public users: number ) { }

    changeUsersAmount (@Positive() users: number): void
    {
        this.users = users
    }
}

function Positive ()
{
    return (
        target: Object,
        key: string,
        index: number
    ) =>
    {

    }
}